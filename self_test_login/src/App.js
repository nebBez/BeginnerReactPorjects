import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  const users = [
    ["Admin", "12345"],
    ["User", "12345!"],
    ["Hacker", "!!"]
  ]
// maybe use effect; dependencies is when localstorage changes maybe 
  return (
    <div>
      <LoginPage user={users}/>
    </div>
  );
}

export default App;
