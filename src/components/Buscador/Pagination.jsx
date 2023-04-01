import React from "react";
import "../Detail/detail.css";

const Pagination = ({ prev, next, onPrevius, onNext }) => {
  //functions  prev and next page
  const handlePrevius = () => {
    onPrevius();
  };
  
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevius}>
              Prev
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
