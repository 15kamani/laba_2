import React, { useState } from 'react';
import './App.css';

// к примеру 43

function App() {
    // Состояние для хранения выбранного города
    const [selectedCity, setSelectedCity] = useState('');

    // Массив городов для выпадающего списка
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

    // Обработчик изменений для выпадающего списка
    function handleCityChange(event) {
        setSelectedCity(event.target.value);
    }

    return (
        <div>
            <h1>Выберите город</h1>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">Выберите город</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <p>Выбранный город: {selectedCity || 'Не выбран'}</p>
        </div>
    );
}

export default App;
    