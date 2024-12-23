import React, { useState } from 'react';
import './App.css';

// к примеру 54 (задание 2)

function App() {
  // Состояние для хранения списка элементов
  const [items, setItems] = useState([]);
  // Состояние для хранения значений инпутов
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // Функция для добавления нового элемента
  const addItem = () => {
    if (input1.trim() && input2.trim() && input3.trim()) { // Проверяем, что все инпуты не пустые
      const newItem = `${input1}, ${input2}, ${input3}`; // Создаем новый элемент из значений инпутов
      setItems(prevItems => [...prevItems, newItem]); // Добавляем новый элемент в массив
      // Очищаем инпуты
      setInput1('');
      setInput2('');
      setInput3('');
    }
  };

  return (
    <div>
      <h1>Добавление элемента в список</h1>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Введите первое значение"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Введите второе значение"
      />
      <input
        type="text"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        placeholder="Введите третье значение"
      />
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