import React,{useEffect, useState} from 'react'
import Character from '../Cards/Character';
import Nav from '../Buscador/Nav';
import styles from "../Main/main.module.css"
import Pagination from "../Buscador/Pagination";
import Footer from '../Footer/Footer';
import {urlBase} from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions';


function Main() {

  //states
  const dispatch = useDispatch();
  const character = useSelector((state)=>state.showCharacters);
  const [info, setInfo] = useState({});
  //const [character, setCharacters] = useState([]);

  //fecth function
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  //useEffect
 /*  useEffect(() => {
    fetchCharacters(urlBase);
  }, []); */

  //paginacion funciones de botones(uso el info)
  const onPrevius = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  
  useEffect(()=>{
    dispatch(getAll());
    //fetchCharacters(urlBase)
  },[]);

  return (
    <div className={styles.fondo} style={{ backgroundColor: "green" }}>
      <Nav />
      <br />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <div className={styles.contenedor}>
        {character?.map((vg, id) => {
          return (
            <Character
              key={id}
              id={vg.id}
              name={vg.name}
              image={vg.image}
              location={vg.location}
              origin={vg.origin}
              status={vg.status}
            />
          );
        })}
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevius={onPrevius}
        onNext={onNext}
      />
      <br />
      <Footer />
    </div>
  );
}
export default Main;
