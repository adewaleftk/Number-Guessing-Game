import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);


  const Number = Math.floor(Math.random() * 100) + 1;

  function handleClick(event) {
    event.preventDefault();
    if ((document.getElementById('input').value) < Number) {
      alert("Your Guess Is Too Low");
      setCount(count + 1);
    }
    else if ((document.getElementById('input').value) > Number) {
      alert("Your Guess Is Too High");
      setCount(count + 1);
    }
    else {
      alert(`Correct! It took you  ${count} tries to get the correct answer`);

    }
  }

  return (
    <div className="App">
      <h1>Lexicon's Number Guessing Game</h1>
      <form>
	  <p>I have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. I will tell you if your guess was too high or too low.</p>
        <input type="number" id="input" className="input" placeholder="Guess a Number"/>
        <button type="submit" onClick={handleClick} >Guess</button>
      </form>
    </div>
  );
}

export default App;
