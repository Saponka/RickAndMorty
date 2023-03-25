
import {
    GET_ALL_CHARACTERS,
    GET_DETAIL,
    SEARCH,
     PAGINATION 
  } from "../actions";
  
const initialState= {
    showCharacters:[],
    detail:{},
    pagination:[]
}
export default function rootReducer(state = initialState,action){

    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                showCharacters:action.payload
            }
          case GET_DETAIL:
            return{
                ...state,
                detail:action.payload
            }
         
          case SEARCH:
            return{
                ...state,
                showCharacters:action.payload
            }
          case PAGINATION:
            return{
                ...state,
                pagination:action.payload
            } 
    
        default:
           return {...state};
    }
}