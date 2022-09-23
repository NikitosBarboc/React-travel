// /* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './components/Die';

function App() {
  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      const randomNumber = Math.ceil(Math.random() * 6);
      arr[i] = { value: String(randomNumber), isHeld: false, id: nanoid() };
    }
    return arr;
  }
  const [dice, setDice] = useState(() => allNewDice());
  const [isWin, setIsWin] = useState(() => false);

  function handleDieClick(id: string) {
    setDice((oldDice) => oldDice.map((die) => {
      if (die.id === id) {
        return { ...die, isHeld: !die.isHeld };
      }
      return die;
    }));
  }
  useEffect(() => {
    const firstValue = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const allSameNumber = dice.every((die) => die.value === firstValue);

    setIsWin(allHeld && allSameNumber);
  }, [dice]);

  const handleClick = () => {
    if (!isWin) {
      setDice((oldDice) => oldDice.map((die) => {
        const randomNumber = Math.ceil(Math.random() * 6);
        if (!die.isHeld) {
          return { ...die, value: String(randomNumber) };
        }
        return die;
      }));
    } else {
      setDice(allNewDice());
    }
  };

  const diceElements = dice.map((x) => (
    <Die
      value={x.value}
      isActive={x.isHeld}
      id={x.id}
      key={x.id}
      // eslint-disable-next-line no-use-before-define
      onClick={() => handleDieClick(x.id)}
    />
  ));

  return (
    <main className="main">
      {isWin && (
        <Confetti />
      )}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {diceElements}
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="roll-btn"
      >
        {isWin ? 'new game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
