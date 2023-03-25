import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  getPagination } from '../../redux/actions';


const Pagination= () => {
    
    const { page } = useParams();
    const paginas = useSelector((state)=>state.pagination);
    const dispatch = useDispatch();
    console.log(paginas); 
    

  useEffect(()=>{
    dispatch( getPagination(page));
  },[dispatch,page]);

    return (
      <div  >
      <button >Prev</button>
     
            <button    >
              {paginas.pages}
            </button>
       
      <button onClick={ () => paginas.next  }>Next</button>
    </div>
      
    )
}

export default Pagination

