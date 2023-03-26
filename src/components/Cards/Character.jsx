import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Detail/detail.css";
const Character = ({id,image,name,status}) => {
  return (
 
      <Card  className=" carta  text-light"  >
      <Link to={`/detail/${id}`} style={{marginTop:"30px"}}>
      { status === "Alive"?<span  className='badge rounded-pill text-bg-success' style={{"position":"absolute","marginTop":"5px"}}>{status}</span> : <span className='badge rounded-pill text-bg-danger' style={{"position":"absolute","marginTop":"5px"}}>{status}</span>}
      <Card.Img  src={image} alt={name} />
      </Link>
      <Card.Body>
      <Card.Title> {name} </Card.Title>
      </Card.Body>
      </Card>    
  )
}

export default Character;
