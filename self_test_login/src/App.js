import { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import AdminPage from './components/users/AdminPage';
import HackerPage from './components/users/HackerPage';
import UserPage from './components/users/UserPage';

function App() {
  const users = [
    ["Admin", "12345"],
    ["User", "12345!"],
    ["Hacker", "!!"]
  ]

  const [user, setUser] = useState("null")


const userHandler = (value) =>{
  setUser(value);
}

console.log(user);
  return (
    <div>
      {user==="null" && <LoginPage user={users} changeUser={userHandler} style={{ backgroundColor: "#e6ead9" }}/>}
      {user==="Admin" && <AdminPage changeUser={userHandler} style={{ backgroundColor: "#67b3f1" }}/>}
      {user==="User" && <UserPage changeUser={userHandler} style={{ backgroundColor: "#67cb9c" }}/>}
      {user==="Hacker" && <HackerPage changeUser={userHandler} style={{ backgroundColor: "#f93844" }}/>}
    </div>
  );
}

export default App;
