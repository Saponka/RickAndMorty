import React,{useEffect} from 'react'
import Character from '../Cards/Character';
import Nav from '../Buscador/Nav';
import { useDispatch, useSelector} from 'react-redux';
import {getAll} from '../../redux/actions/index';
import styles from "../Main/main.module.css"
import Pagination from "../Buscador/Pagination";
import Footer from '../Footer/Footer';

function Main( ){
   
  const dispatch = useDispatch();
  const allCharacters = useSelector((state)=>state.showCharacters);
  
  useEffect(()=>{
    dispatch( getAll());
    },[dispatch]);

  return (
    <div  style={{backgroundColor:"green"}}>
      <Nav/>
     <br/>
     <Pagination/> 
     <div className={styles.contenedor}>
      {allCharacters?.map((vg,id) => {
              return (
                <Character
                  key={id}
                  id={vg.id} 
                  name={vg.name}
                  image={vg.image}
                  location={vg.location}
                  origin={vg.origin}
                />
                );
              })
            }
            </div>  
            <Pagination/> 
            <br/>
            <Footer/> 
    </div>
    
  )
}
export default Main;
