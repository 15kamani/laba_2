import React, { useState } from 'react';
import './App.css';

// к примеру 35

function App() {
  // Состояния для двух инпутов
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  // Обработчик изменений для первого инпута
  function handleInput1Change(event) {
    setInput1Value(event.target.value);
  }

  // Обработчик изменений для второго инпута
  function handleInput2Change(event) {
    setInput2Value(event.target.value);
  }

  return (
    <div>
      <h1>Введите текст</h1>
      <input
        value={input1Value}
        onChange={handleInput1Change}
        placeholder="Введите текст для первого абзаца"
      />
      <input
        value={input2Value}
        onChange={handleInput2Change}
        placeholder="Введите текст для второго абзаца"
      />

      <h2>Результат:</h2>
      <p>{input1Value}</p>
      <p>{input2Value}</p>
    </div>
  );
}

export default App;