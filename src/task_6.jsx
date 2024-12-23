import React, { useState } from 'react';
import './App.css';

// к примеру 45

function App() {
  // Состояние для хранения выбранной возрастной группы
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

  // Массив возрастных групп для выпадающего списка
  const ageGroups = [
    'От 0 до 12 лет',
    'От 13 до 17 лет',
    'От 18 до 25 лет',
    'Старше 25 лет'
  ];

  // Обработчик изменений для выпадающего списка
  function handleAgeGroupChange(event) {
    setSelectedAgeGroup(event.target.value);
  }

  return (
    <div>
      <h1>Выберите вашу возрастную группу</h1>
      <select value={selectedAgeGroup} onChange={handleAgeGroupChange}>
        <option value="">Выберите возрастную группу</option>
        {ageGroups.map((ageGroup, index) => (
          <option key={index} value={ageGroup}>
            {ageGroup}
          </option>
        ))}
      </select>

      <p>Выбранная возрастная группа: {selectedAgeGroup || 'Не выбрана'}</p>
    </div>
  );
}

export default App;