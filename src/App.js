import React, { useState, useEffect } from 'react';
import './App.css'
import Axios from 'axios';
import { Card } from './components/cards/Card'

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = (value) => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response)
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCard").then((response) => {
      setListGames(response.data)
    })
  }, [listGames]);

  return (
    <div className="app-container">
      <div className="register--container">
        <h1>Cadastrar Jogo</h1>
        <input className="register--input" type="text" placeholder='Nome' name='name' onChange={handleChangeValues}/>
        <input className="register--input" type="text" placeholder='Preço' name='cost' onChange={handleChangeValues}/>
        <input className="register--input" type="text" placeholder='Categoria' name='category' onChange={handleChangeValues}/>
        <button className="register--input submit" type="submit" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>

      <h1 className="title-games">Jogos Cadastrados</h1>

      {typeof listGames !== "undefined" && listGames.map((value) => {
        return <Card key={value.idGames} listCard={listGames} setListCards={setListGames} id={value.idGames} name={value.name} cost={value.cost} category={value.category}></Card>
      })}
    </div>
  );
}

export default App;
