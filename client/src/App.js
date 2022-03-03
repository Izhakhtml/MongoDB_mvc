
import './App.css';
import { GetAllEmployee } from './services/Employee-srever';
import {GetAllUsers} from './services/Users-server'
function App() {
  const ClickEmployee =()=>{
    GetAllEmployee()
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
  }
  const ClickUsers =()=>{
    GetAllUsers()
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
  }
  return (
    <div className="App">
    <button onClick={ClickEmployee}>ClickGetEmplo</button>
    <button onClick={ClickUsers}>ClickGetUser</button>
    </div>
  );
}

export default App;
