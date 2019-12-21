import React from 'react';
import {connect} from "react-redux";
import {SelectedSong} from "../../action/index";
const SongList =(props)=>
{
    
        return
        (
            <div className="container">
            <div className="row">
                
                {this.props.list.map(data => (
                <div className="col-md-4" key={data.id}> 
                    <h3>{data.name}</h3>
                    <h4>{data.duration}</h4>
                    <button type="button" className="btn btn-danger" 
                    onClick={() => this.props.SelectedSong}>View</button>
                </div>
                    ))
                    }
               
            </div>
        </div>    
        )
    }
const mapStateToProps= state =>
{
    return{list: state.SongList};
}

export default connect(mapStateToProps,{SelectedSong}) (SongList);