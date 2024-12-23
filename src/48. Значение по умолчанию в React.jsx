import { useState } from 'react'
import './App.css'
//значение по умолчанию в импуте
function App() {
  const [value, setValue] = useState("text");
  return (
    <div>

      <input defaultValue={value} />
    </div>
  );
}

// начальное для чекбоксов
function App(){
  const [checked, setChecked] = useState(true);
  return (
    <div>

      <input type='checkbox' defaultChecked={checked} />
    </div>
  );
}

export default App
