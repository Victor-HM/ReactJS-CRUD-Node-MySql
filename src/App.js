import React, { useState } from 'react';
import './App.css'
import Axios from 'axios';

function App() {
  const [values, setValues] = useState();
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response)
    });
  }

  return (
    <div className="app-container">
      <div className="register--container">
        <h1>Scrim Shop</h1>
        <input className="register--input" type="text" placeholder='Nome' name='name' onChange={handleChangeValues}/>
        <input className="register--input" type="text" placeholder='Preço' name='cost' onChange={handleChangeValues}/>
        <input className="register--input" type="text" placeholder='Categoria' name='category' onChange={handleChangeValues}/>
        <button className="register--input submit" type="submit" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
