
import {combineReducers} from 'redux';
const SongList=()=>
{
    return[
    {

        id : 1,
        name : "Filhal",
        duration: "4.10"
    },

    {

        id : 2,
        name : "Sardarni",
        duration:"3.18" 
    },

    {

        id : 1,
        name : "Teri-meri",
        duration:"5.20"
    },

    {

        id : 4,
        name : "Dil_to_pagal_hai",
        duration: "5.30"
    }
];
}

//we make this for only 1 scenario....
//in future multiple scenario comes....we cant all the scenario at different different place
//merge karenge.....just import combineReducer method()
const ListDetails=(song=null,action)=>
{
    switch(action.type)
    {
    case "Selected_Song": 
    return action.payload;
    default:
        return song;
    }
    
};




const reducers= combineReducers({song_List:SongList, Details : ListDetails});
export default reducers;