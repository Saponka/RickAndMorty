import React, { useState } from "react";
import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getByName, getAll } from "../../redux/actions/index";
import { useEffect } from "react";
import 'animate.css';
const Swal = require('sweetalert2');

const Buscador = ()=> {

  const dispatch = useDispatch();
  const [text, setText] = useState(' ');

 
  console.log(text);
  
  function handleChange(e) {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if(text){
      dispatch(getByName(text));
      setText('');
      }else{
        Swal.fire({
          position: 'top',
          icon: 'question',
          title: 'Oh geez',
          text:'Por favor coloca el nombre de un VideoGame para buscar',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
         /*  timer: 4500 */
        })
      
       setText('');  
      }
     console.log(text);
   }

  function reset() {
    dispatch(getAll());
    
  }
  useEffect(()=>{
    dispatch(getByName(text))
  },[]);

  return (
    <Navbar expand="lg">
      <Container fluid className=" flex-column">
        <Navbar.Brand className="text-light" href="/">
          <img
            src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
            alt=""
            width={"280"}
            className="animate__animated animate__pulse animate__slower animate__infinite	"
          />
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Button onClick={() => reset()} variant="danger" className="me-2">
            Reset
          </Button>
          <FormControl
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-dark">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Buscador;
