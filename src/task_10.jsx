import React, { useState } from 'react';
import './App.css';

// к примеру 52 (задание 1)

function App() {
  // Изначальная дата в состоянии
  const initDate = { year: 2025, month: 12, day: 31 };
  const [date, setDate] = useState(initDate);
  
  // Состояние для хранения списка элементов
  const [items, setItems] = useState([]);
  
  // Функция для получения дня недели
  const getDayOfWeek = () => {
    const { year, month, day } = date;
    const dateObj = new Date(year, month - 1, day);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dateObj.getDay()];
  };

  // Обработчик изменения значений инпутов
  const handleInputChange = (field, event) => {
    const value = event.target.value;
    setDate(prevDate => ({
      ...prevDate,
      [field]: Number(value) // Приводим значение к числу
    }));
  };

  // Обработчик нажатия кнопки для добавления нового элемента
  const addItem = () => {
    const newItem = `Элемент ${items.length + 1}`; // Создаем новый элемент
    setItems(prevItems => [...prevItems, newItem]); // Добавляем его в массив
  };

  return (
    <div>
      <h1>Редактирование даты</h1>
      <div>
        <label>
          Год:
          <input
            type="number"
            value={date.year}
            onChange={(event) => handleInputChange('year', event)}
          />
        </label>
      </div>
      <div>
        <label>
          Месяц:
          <input
            type="number"
            value={date.month}
            onChange={(event) => handleInputChange('month', event)}
          />
        </label>
      </div>
      <div>
        <label>
          День:
          <input
            type="number"
            value={date.day}
            onChange={(event) => handleInputChange('day', event)}
          />
        </label>
      </div>
      <h2>Дата:</h2>
      <p>Год: {date.year}</p>
      <p>Месяц: {date.month}</p>
      <p>День: {date.day}</p>
      <p>День недели: {getDayOfWeek()}</p>

      <h2>Список элементов</h2>
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