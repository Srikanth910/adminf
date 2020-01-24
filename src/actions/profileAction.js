import axios from 'axios';
import {GET_PROFILE,PROFILE_LOADING,PROFILE_NOT_FOUND,CLEAR_CURRENT_RPOFILE, GET_ERRORS, SET_CURRENT_USER, GET_PROFILES}from '../actions/types';



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
             type:GET_ERRORS,
             payload:{}
         })
     })
 }




  export const  getProfile=()=>dispatch=>{
             axios.get('http://localhost:8000/api/profile').
             then(res=>{

                console.log('profiles', res)
                 dispatch({
                     type:GET_PROFILE,
                     payload:res.data
                 })
             }).catch(err=>{
                 dispatch({
                     type:GET_ERRORS,
                     payload:{}
                 })
             })
  }

 /// delete profile

  export const  deleteAccount=()=>dispatch=>{
      if(window.confirm('Are  you sure? This can NOT be undeone')){
          axios.
          delete('http://localhost:8000/api/profile').
          then(res=>{
              dispatch({
                  type:SET_CURRENT_USER,
                  payload:{}
              })
          }).catch(err=>{
              dispatch({
                  type:GET_ERRORS,
                  payload:err.response.data
              })
          })
      }
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
 export const  addExperience=(expData, history)=>dispatch=>{
       console.log('userdara', expData)
      axios.post('http://localhost:8000/api/profile/experience', expData)
       
      .then(res=>{
           console.log('respcef', res)
      }
         
      ).catch(err=>{
          dispatch({
              type:GET_ERRORS,
              payload:err.response.data
          })
      })
 }