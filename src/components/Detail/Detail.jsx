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
    <div style={{backgroundColor:"green"}} >
      <br/>
      <Card  className=" carta2 bg-dark text-light " >
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
      </Card>
      
        <a className='back' href='/home'> Back to Cards </a>
      
      </div>
      </>
    )
} 

/* <Card.Body>
          <Card.Title>Nombre: {personaje.name}</Card.Title>
          <Card.Title>Especie: {personaje.species}</Card.Title>
          <Card.Title>Status: {personaje.status}</Card.Title>
          <Card.Title>Tipo: {personaje.type}</Card.Title>
          <Card.Title>Genero: {personaje.gender}</Card.Title>
          <Card.Title>Origen: {personaje.origin.name}</Card.Title>
          <Card.Title>location: {personaje.location.name}</Card.Title>
         
        </Card.Body> */
//export default  connect (null,{getById})(Detail);
//export default connect(null,{getById})(Detail);

/* class Detail extends React.Component {
  constructor(props){
    super(props);
   
  }
componentDidMount(){
    console.log(this.props);
   const id = this.props.match.params.id;
    console.log("el id es : " ,id);
}

  render() {
    return (
      <div>
        hello detail
      </div>
    )
  }
}

export default Detail */