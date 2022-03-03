const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const { send } = require('express/lib/response');
const Users = require('../Models/UserModel');
const options = {
    secretOrKey:process.env.SECRET_JWT,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
};
module.exports =  (passport)=> {
    passport.use(
        new JwtStrategy(options,  (object_from_payload, done) => {
          Users.findOne({ _id: object_from_payload.user._id },(err,result)=>{
             if(err) return done(reject, false)
             if (result) return done(null,result);
             return done(null, false)
          })
        })
    )
}
