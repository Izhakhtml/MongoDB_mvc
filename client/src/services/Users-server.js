const BASIC_URL = "http://localhost:8080/api//user";
export const  GetAllUsers = ()=>{
    return  fetch(BASIC_URL)
    .then(res => res.json())
    .catch(rej => console.error(rej))
}