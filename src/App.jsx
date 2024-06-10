import { useState } from 'react';
import { dataTables } from './dataTables.jsx';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    if (isNaN(inputValue)) {
      setErrorMessage('Pls enter a num');
    } else {
      if (inputValue) {
        //check inputValue's class to bring up corresponding dataTable. e.g: if inputValue is a shoulder flexion value, bring up correct table to compare value to, not shoulder extension
      } else {
        if (inputValue) {
          //check if input is outside of range of its classes' possible range of values (over max under min), it's a mistake so return error
        } else {
          // compare value and spit out corresponding impairmentValue
          setErrorMessage('');
          const reversedInput = inputValue.split('').reverse().join('');
          setOutputValue(reversedInput);
        }
      }
    }
  };

  return (
    <>
      <h1>automateMOSM</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Submit</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>{outputValue}</p>
    </>
  );
}

export default App;
