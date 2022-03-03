const Users = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        if (await Users.exists({ email: req.body.email })) return res.status(400).json({ message: "error the email exist" });
        bcrypt.hash(req.body.password, 10, async (err, passwordHash) => {
            if (err) return res.status(400).send({ message: "error" });
            req.body.password = passwordHash;
            await Users.create(req.body)
            .then(() => res.status(200).send({success:true}))
            .catch(rej => res.status(400).send(rej))                
        })
    },
    login: async (req, res) => {
        try {           
            const user = await Users.findOne({ email: req.body.email });
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) return res.status(500).json({ message: 'Error' });
                if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
                const token = jwt.sign({user}, process.env.SECRET_JWT, { expiresIn: '1h' });
                return res.status(200).json({ message: 'Login successful', token ,isMatch});
            })
        } catch (err) {
            return res.status(500).json({ message: 'Email not found' });
        }
    },
    getAll:async (req,res)=>{
          Users.find({})
          .then(result => res.send(result))
          .catch(rej => res.status(500).json("rej"))
    }
}