import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Detail/detail.css";
import 'animate.css';

const Character = ({ id, image, name, status }) => {
  return (
    <Card className=" carta  text-light animate__animated animate__pulse animate__delay-4s animate__slow animate__repeat-3">
      <Link to={`/detail/${id}`} style={{ marginTop: "30px" }}>
        {status === "Alive" ? (
          <span className="badge rounded-pill status text-dark bg-success">
            {status}
          </span>
        ) : (
          <span className="badge rounded-pill  status text-dark bg-danger">
            {status}
          </span>
        )}
        <Card.Img src={image} alt={name} />
      </Link>
      <Card.Body>
        <Card.Title> {name} </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Character;
