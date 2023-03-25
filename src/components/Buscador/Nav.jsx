import React,{useState}from "react";
import { Button, Container, Form, FormControl, Navbar} from "react-bootstrap";
import { connect } from "react-redux";
import {getByName,getAll} from '../../redux/actions/index'


function Buscador(props){

const [text, setText]= useState(" ");

function handleSubmit(e) {
  e.preventDefault();
  props.getByName(text);
  console.log(text);
  
}
function handleChange(e){
    setText(e.target.value)
}
function reset(e) {
    props.getAll();
    setText(" ");
  }

  //imagen
  //https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com
return(
    <Navbar bg="dark" expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand className="text-light" href="/"><img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt=""   width={"250"}  /> </Navbar.Brand>
        < Form className="d-flex" onSubmit={handleSubmit}>
        <Button onClick={()=> reset()} variant="outline-success" className="me-2" >Reset</Button>
          <FormControl type="text" onChange={handleChange} placeholder="Search"className="me-2"aria-label="Search"/>
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
 /*    
 <>
<div>
    <button onClick={()=> reset()}>Reset</button>
</div>
 </> 
 */
)

}

export default connect(null,{getByName,getAll})(Buscador)