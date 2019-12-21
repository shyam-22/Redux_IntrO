import React from 'react';
import {connect} from "react-redux";
const SongDetails =(props)=>
{
    if(!props.Details)
    {
        return null;
    } 
        return
        (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h1>Song Details:</h1>
        <h1>{props.details.name}</h1>
        <h3>{props.details.duration}</h3>

                </div>
            </div>
        </div>    
        )
    }

  const mapStateToProps=state =>
  {
      console.log(state);
      return {Details: state.details};
  }  

export default connect(mapStateToProps)(SongDetails);