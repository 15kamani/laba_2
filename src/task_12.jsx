import React, { useState } from 'react';
import './App.css';

// к примеру 54 (задание 1)

function App() {
  // Состояние для хранения списка элементов
  const [items, setItems] = useState([]);
  
  // Функция для добавления нового элемента
  const addItem = () => {
    const newItem = `Элемент ${items.length + 1}`; // Создаем новый элемент с номером
    setItems(prevItems => [...prevItems, newItem]); // Добавляем новый элемент в массив
  };

  return (
    <div>
      <h1>Добавление элемента в список</h1>
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Отображаем каждый элемент массива в списке
        ))}
      </ul>
    </div>
  );
}

export default App;