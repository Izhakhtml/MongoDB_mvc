const BASIC_URL = "http://localhost:8080/employee";
export const  GetAllEmployee = ()=>{
    return  fetch(BASIC_URL)
    .then(res => res.json())
    .catch(rej => console.error(rej))
}