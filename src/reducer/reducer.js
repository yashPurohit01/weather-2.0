import { FETCH_DATA, FETCH_DATA_SUCCESSFULLY } from "./const"

export const INITIAL_STATE = {
   isLoading: true,
   location:{} ,
   current_info:{},
   air_quality:{} ,
   forcasts:[],
   astro:{},
   hourly_Update:[]

}

export  const postReducer  = (state , action) =>{
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state ,
                isLoading:true
            }
        case FETCH_DATA_SUCCESSFULLY:
            return{
                ...state,
                isLoading:false ,
               location:action.payload.location,
               current_info:action.payload.current,
               air_quality:action.payload.current.air_quality,
               astro:action.payload.forecast?.forecastday[0]?.astro,
               forcasts:action.payload.forcasts?.forecastday,
               hourly_Update:action.payload.forecast?.forecastday[0]?.hour
               

            }    
        case FETCH_DATA_SUCCESSFULLY:
            return{
                ...state,
                isLoading:false,

            }    
        default:
            return state 
 
    }
}