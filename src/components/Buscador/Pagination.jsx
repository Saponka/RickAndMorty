import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  getAll, getPagination } from '../../redux/actions';
import "../Detail/detail.css"

const Pagination= () => {
    
    /* const { page } = useParams();
    const paginas = useSelector((state)=>state.pagination);
    console.log(paginas); */
    const dispatch = useDispatch();
    
const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
const [nextPageUrl, setNextPageUrl] = useState();
const [prevPageUrl, setPrevPageUrl] = useState();
const [pages, setPages] = useState();


//function  next page
 function nextPage() {
setCurrentPageUrl(nextPageUrl)
}
//function  prev page
function prevPage() {
setCurrentPageUrl(prevPageUrl)
}
//function  page
function goToPage(num) {
setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
} 
    let pageButtons = []
  for (let i = 1; i <= pages; i++) {
  pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>)
  }
   useEffect(()=>{
    //dispatch( getPagination(page));
    dispatch( getAll());
     //paginacion
     const url = currentPageUrl
    
    const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setNextPageUrl(data.info.next);
    setPrevPageUrl(data.info.prev);
    setPages(data.info.pages)
  }
    fetchData();
  },[dispatch,currentPageUrl]); 

    return (
      <div  >
        {prevPage && (<button onClick={()=>prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button  onClick={()=>nextPage}>Next</button>)}
   {/*    <button >Prev</button>    
            <button >{paginas.pages}</button>
      <button onClick={ () => paginas.next  }>Next</button> */}

    </div>
      
    )
}

export default Pagination

