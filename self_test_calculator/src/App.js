import './App.css';
import {useState} from 'react';

function App() {

  // Digits: (Input) -> buttons 
  // Answer: (Output)

  const [digit, changeDigit] = useState('0');
  const [answer, changeAnswer] = useState();

  //Answer = previous digit (operator + - / *) current digit -> when operator triggers, it begins

  const digitDisplay = (event) =>{
    event.preventDefault();
    const digit = event.target.value;
    changeDigit(digit);
    
  }


  return (
    
    <div className="app">
      <div className='calcWrap'>
      {digit}
        <button value="1" onClick={digitDisplay}>1</button>
      </div>      
    </div>
  );
}

export default App;
