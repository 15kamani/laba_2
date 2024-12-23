import React, { useState } from 'react';
import './App.css';

// к примеру 42

function App() {
  // Состояние для хранения состояния чекбокса
  const [isAdult, setIsAdult] = useState(false);

  // Обработчик изменений для чекбокса
  function handleCheckboxChange() {
    setIsAdult(!isAdult);
  }

  return (
    <div>
      <h1>Проверьте свой возраст</h1>
      <label>
        <input
          type="checkbox"
          checked={isAdult}
          onChange={handleCheckboxChange}
        />
        Мне уже 18 лет
      </label>

      {isAdult ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>Здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>Увы, вам еще нет 18 лет :(</p>
        </div>
      )}
    </div>
  );
}

export default App;