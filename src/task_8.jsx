import React, { useState } from 'react';
import './App.css';

// к примеру 50 (задание 1)

function App() {
  // Изначальная дата в состоянии
  const initDate = { year: 2025, month: 12, day: 31 };
  const [date, setDate] = useState(initDate);

  // Функция для получения дня недели
  const getDayOfWeek = () => {
    const { year, month, day } = date;
    // Создаем объект Date. Месяцы в JavaScript начинаются с 0 (январь = 0)
    const dateObj = new Date(year, month - 1, day);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[dateObj.getDay()];
  };

  return (
    <div>
      <h1>Дата из состояния</h1>
      <p>Год: {date.year}</p>
      <p>Месяц: {date.month}</p>
      <p>День: {date.day}</p>
      <p>День недели: {getDayOfWeek()}</p>
    </div>
  );
}

export default App;