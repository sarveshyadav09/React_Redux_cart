import React, { useState } from "react";
//import "./Style.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";



const Cards = () => {

  const[data,setData]=useState(Cardsdata);
  //console.log(data)


  return (
    <div className="container mt-5">
      <h2 className="text-center"> Add to Cart Project</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element,id)=>{
            return(<>
             <Card style={{ width: "22rem",border:"none" }} className="mx-2 mt-4 card_style">
          <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} />
          <Card.Body>
            <Card.Title>{element.rname}</Card.Title>
            <Card.Text>
              Prices:₹{element.price}
            </Card.Text>
            <div className ="button_div d-flex justify-content-center">
            <Button variant="primary" className="col-lg-12">Add to Cart</Button>
            </div>
          </Card.Body>
        </Card>
            </>)
          })
        }
       
      </div>
    </div>
  );
};

export default Cards;
