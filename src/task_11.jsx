import React, { useState } from 'react';
import './App.css';

// к примеру 52 (задание 2)

function App() {
  // Состояние для хранения списка элементов
  const [items, setItems] = useState([]);
  // Состояние для хранения текущего значения инпута
  const [inputValue, setInputValue] = useState('');

  // Обработчик изменения значения инпута
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик нажатия кнопки для добавления нового элемента
  const addItem = () => {
    if (inputValue.trim() !== '') { // Проверяем, что инпут не пустой
      setItems(prevItems => [...prevItems, inputValue]); // Добавляем новый элемент в массив
      setInputValue(''); // Очищаем инпут
    }
  };

  return (
    <div>
      <h1>Добавление элемента в список</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;