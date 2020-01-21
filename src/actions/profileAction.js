import axios from 'axios';
import {GET_PROFILE,PROFILE_LOADING,PROFILE_NOT_FOUND,CLEAR_CURRENT_RPOFILE, GET_ERRORS}from '../actions/types';



 export const getCurrentProfile=()=>dispatch=>{
     dispatch(setProfileLoading);
     axios.get('http://localhost:8000/api/users/current').
     then(res=>{

       
         dispatch({
             type:GET_PROFILE,
             payload:res.data
         })
     }).catch(err=>{
         dispatch({
             type:GET_PROFILE,
             payload:{}
         })
     })
 }


 export const setProfileLoading=()=>{
     return{
         type:PROFILE_LOADING
     }
      
 }

  export const clearProfile=()=>{
      return{
          type:CLEAR_CURRENT_RPOFILE
      }
  }

   export const createProfileData= (profileData, history) => dispatch =>{
 console.log('profiles user', profileData)

    axios.post('http://localhost:8000/api/profile',profileData).then(Res=>{

     console.log('profile resp', Res)
        history.push('/Admin')
    }).catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
   }