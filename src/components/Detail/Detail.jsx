import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/index";
import "../Detail/detail.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detail);
  console.log(id);
  console.log(detalle);

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="contenedor">
        <br />
        <img
          src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
          alt=""
          width={"250"}
          className="animate__animated animate__pulse animate__slower animate__infinite	"
        />
        <br />
        <br />
        <div className="card tarjeta mb-3 ">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                style={{ width: "400px" }}
                src={detalle.image ? detalle.image : detalle.name}
                alt="..."
              />
              <div>
              <a className="back animate__animated animate__pulse  animate__slow animate__infinite mt-2 mb-2	 btn btn-success " href="/home">
                
                Back to Cards
             
          
        </a>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card-body"
                style={{ "marginTop": "10%", "fontFamily": "Creepster" }}
              >
                <h5 className="card-title font">Name: {detalle.name}</h5>
                <h5 className="card-title">Species: {detalle.species}</h5>
                <h5 className="card-title">Gender: {detalle.gender}</h5>
                <h5 className="card-title">Origin: {detalle?.origin?.name}</h5>
                <h5 className="card-text">
                  Location: {detalle?.location?.name}
                </h5>
                <h5 className="card-text">
                  Status:{" "}
                  {detalle.status === "Alive" ? (
                    <span
                      className="badge rounded-pill text-bg-success"
                      style={{ position: "absolute" }}
                    >
                      {" "}
                      {detalle.status}
                    </span>
                  ) : (
                    <span
                      className="badge rounded-pill text-dark bg-danger"
                      style={{ position: "absolute" }}
                    >
                      {detalle.status}
                    </span>
                  )}
                </h5>
                <h5 className="card-text">
                  Type: {detalle.type ? detalle.type : "Unknow"}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <br />
        
        <hr />
        
      </div>
    </>
  );
}
