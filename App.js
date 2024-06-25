import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes,Route} from 'react-router-dom'
import EmploeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import UpdateEmp from './Components/UpdateEmp';
import EmployeeInfo from './Components/EmployeeInfo';

function App() {
  return (
    <div className="Container">
      <div style={{backgroundColor:"orange"}}>
        <Header />
      </div>

      <div className='row'>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/home" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/employeelist" element={<EmploeeList/>}></Route>
          <Route path="/addEmp" element={<AddEmployee/>}></Route>
          <Route path='/updateEmp/:id' element={<AddEmployee/>}></Route>
          <Route path='/employeeInfo/:id' element={<EmployeeInfo/>}></Route>

        </Routes>
        {/* <Home isLoggedIn={false}/> */}
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
      
    </div>
  );
}

export default App;
