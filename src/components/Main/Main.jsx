import React,{useEffect, useState} from 'react'
import Character from '../Cards/Character';
import Nav from '../Buscador/Nav';
import styles from "../Main/main.module.css"
import Pagination from "../Buscador/Pagination";
import Footer from '../Footer/Footer';
import {urlBase} from '../../utils';

function Main() {
  //states
  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  //fecth function
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  //paginacion funciones de botones
  const onPrevius = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  //useEffect
  useEffect(() => {
    fetchCharacters(urlBase);
  }, []);

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
