const BASIC_URL = process.env.NODE_ENV === "production"?
"https://office-application-mern.herokuapp.com/employee":
"http://localhost:8080/employee";
export const  GetAllEmployee = ()=>{
    return  fetch(BASIC_URL)
    .then(res => res.json())
    .catch(rej => console.error(rej))
}