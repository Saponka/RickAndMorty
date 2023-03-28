import React,{ useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getById} from '../../redux/actions/index'
import '../Detail/detail.css'
import { Card} from "react-bootstrap";

export default function Detail(){

 const {id} = useParams();
 const dispatch = useDispatch();
 const detalle = useSelector((state) => state.detail);
 console.log(id);
 console.log(detalle);
 
 useEffect(()=>{
    dispatch(getById(id));
 },[dispatch, id]);

    return (
      <>
    <div className='contenedor'  >
      <br/>
      <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt=""   width={"250"}  />
      <br/>
      <br/>
      <div className="card tarjeta mb-3 "  >
  <div className="row g-0">
    <div className="col-md-6">
     
      <img style={{"width": "400px"}} src={detalle.image ? detalle.image : detalle.name} /* className="img-fluid rounded-start" */ alt="..."/>
    </div>
    <div className="col-md-3">
      <div className="card-body" style={{"margin-top":"10%","font-family":'Creepster'}}>
        <h5 className="card-title font">Name: {detalle.name}</h5>
        <h5 className="card-title">Species: {detalle.species}</h5>
        <h5 className="card-title">Gender: {detalle.gender}</h5>
        <h5 className="card-title">Origin: {detalle?.origin?.name}</h5>
        <h5 className="card-text">Location: {detalle?.location?.name}</h5>
        <h5 className="card-text">Status: { detalle.status === "Alive"? <span  className='badge rounded-pill text-bg-success' style={{"position":"absolute"}}> {detalle.status}</span> : <span className='badge rounded-pill text-dark bg-danger' style={{"position":"absolute"}}>{detalle.status}</span>}</h5>
        <h5 className="card-text">Type: {detalle.type ? detalle.type : "Unknow"}</h5>
      </div>
    </div>
  </div>
</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr/>
        <a className='back' href='/home'> Back to Cards </a>
      
      </div>
      </>
    )
} 
 {/* <Card  className=" carta2 bg-dark text-light " >
      <Card.Img  src={detalle.image ? detalle.image : detalle.name} alt="imagen" />
      <Card.Body>
      <Card.Title>Name: {detalle.name} </Card.Title>
      <Card.Title>Origin: {detalle?.origin?.name} </Card.Title>
      <Card.Title>Location: {detalle?.location?.name} </Card.Title>
      <Card.Title>Status: {detalle.status}</Card.Title>
      <Card.Title>Species: {detalle.species}</Card.Title>
      <Card.Title>Gender: {detalle.gender}</Card.Title>
      <Card.Title>Type: {detalle.type ? detalle.type : "Unknow"}</Card.Title> 
      </Card.Body>
      </Card> */}

