import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Detail/detail.css";
const Character = ({id,image,name}) => {
  return (
 
      <Card  className=" carta bg-dark text-light"  >
      <Link to={`/detail/${id}`} style={{marginTop:"30px"}}>
      <Card.Img  src={image} alt={name} />
      </Link>
      <Card.Body>
      <Card.Title> {name} </Card.Title>
      </Card.Body>
      </Card>    
  )
}

export default Character;
