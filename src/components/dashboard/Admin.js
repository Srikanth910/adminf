import React, { Component } from 'react';
 import  PropTypes, { object } from 'prop-types';
import Spinner from '../common/Spinner'

  import { connect } from 'react-redux'
   import { getCurrentProfile} from '../../actions/profileAction'
import { Link } from 'react-router-dom';
class Admin extends Component {
 componentDidMount(){
     console.log('component called')
      this.props.getCurrentProfile();
 }
     
    render() {

         const {user} =this.props.auth
       
        const {profile , loading}=this.props.profile;
        console.log('profile,', profile)

         let dashboardcontent;
          if(profile=== null || loading){
            dashboardcontent=<Spinner/>
          }else{
            if(Object.keys(profile).length> 0){
                dashboardcontent=(
                    <div>
                <p className="lead text-muted"> welcome:{user.name}</p>
                <Link to="/CreateProfile" className="btn btn--g btn-info">CreateProfile</Link>
                </div>
                )
               
            }else{
                dashboardcontent=<h4>TODO:disply profile</h4>
                
            }
          }
        return (
            <div>
   {dashboardcontent}
            </div>
        )
    }
}

 Admin.PropTypes={
      getCurrentProfile:PropTypes.func.isRequired,
      profile:PropTypes.object.isRequired,
      auth:PropTypes.object.isRequired
 }
 
const mapStateToProps = state => ({
     auth:state.auth,
    profile: state.profile,
    errors: state.errors
  });

 export default connect(mapStateToProps,{getCurrentProfile})(Admin);
 