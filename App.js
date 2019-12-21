import React, { Component } from 'react';
import './App.css';
import SongList from "./components/songlist/songList";
import SongDetails from './components/songDetails/songDetails';

class App extends Component() 
{
  render()
  {
    return (
     <div className="container">
         <div className="row">
              <div className="col-md-6">
                <SongList/>
                </div>
               <div className="col=md-6">
                <SongDetails/>
               </div>
        </div>
     </div> 
     
    );
  }
}

export default App;
