import { useState } from 'react'
import './App.css'

function App() {
  const [checked, setChecked] = useState(true);
  function handleChange() {
    setChecked(!checked); //инвертитуем стейт
  }
  return (
    <div>

      <input type='checkbox' checked={checked} onChange={handleChange} />
    </div>
  );
}

//упрощенная версия
function App1(){
  const [checked, setChecked] = useState(true);
  return (
    <div>

      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
}

//вывведем состояние чекбокса в абзацЮ используя тернарный оператор
function App2(){
  const [checked, setChecked] = useState(true);
  return (
    <div>

      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <p>состояние: {checked ? "отмечен" : "не отмечен"}</p>
    </div>
  );
}

export default App
