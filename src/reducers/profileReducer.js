
import {GET_PROFILE,PROFILE_LOADING,PROFILE_NOT_FOUND,CLEAR_CURRENT_RPOFILE, GET_PROFILES} from '../actions/types';

const  insitialState={
    profile:null,
    profiles:null,
    loading:false
}
 export default function(state=insitialState, action){
     switch(action.type){
         case PROFILE_LOADING:
             return{
                 ...state,
                 loading:true
             };
             case GET_PROFILE:
                  return{
                      ...state,
                      loading:false,
                      profile:action.payload,
                  };

                  case  GET_PROFILES:
                      return{
                          ...state,
                          loading:false,
                          profiles:action.payload
                      }


                   case CLEAR_CURRENT_RPOFILE:{
                 return{
                      ...state,
                       profile:null
                 }

                   }
                   default :
                   return state

     }
 }