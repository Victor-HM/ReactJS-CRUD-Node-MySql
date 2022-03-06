import React from "react";
import './Card.css'
import { FormDialog } from '../dialog/FormDialog'

export function Card(props) {
  const [open, setOpen] = React.useState(false)
  const handleClickCard = () => {
    setOpen(true)
  }

  return(
    <>
    <FormDialog 
      open={open} 
      setOpen={setOpen} 
      name={props.name} 
      cost={props.cost} 
      category={props.category}
      listCard={props.listCard}
      setListCard={props.setListCard}
      id={props.id}
    />
    <div className="card-container" onClick={() => handleClickCard()}>
      <h1 className="card-title">{props.name}</h1>
      <div className="card-content">
        <p className="card-cost">R$ {props.cost}</p>
        <p className="card-category">{props.category}</p>  
      </div>
    </div>
    </>
  );
}