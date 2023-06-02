
import axios from 'axios';
import {urlBase} from '../../utils';
//
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const SEARCH = "SEARCH";
export const GET_DETAIL = "GET_DETAIL";
export const PAGINATION = "PAGINATION";



export function getAll() {
    
    return async function(dispatch){
        try{

          let todos =  await  axios.get(urlBase);
          return dispatch({
                type:GET_ALL_CHARACTERS, 
                payload: todos.data.results,
            });
        }catch(error){
            return console.log("No se encuentran personajes");
        }
    }
};
export function getById(id){
    
    return async function (dispatch) {
        try{
          let detalle =  await axios.get(`${urlBase}/${id}`);
         return dispatch({
                type:GET_DETAIL,
                payload: detalle.data,
            });
        }
        catch(error){
         return console.log("No se encuentra detalle de personaje")
        }
    }
};

export const getByName = (name) =>{

    return async function (dispatch){

        try{
           let nombre = await  axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
           return dispatch({
                type:SEARCH,
                payload: nombre.data.results,
            });
        }catch(error){
          return   console.log("No se encuentra el nombre del personaje")
        }
    }
}

//pagination

 export function getPagination(){
  
    return async function (dispatch) {
        try{
          let pagination =  await axios.get(`https://rickandmortyapi.com/api/character`);
         return dispatch({
                type:PAGINATION,
                payload: pagination.data.info,
            });
        }
        catch(error){
         return console.log("No se encuentra la pagina")
        }
    }
}; 