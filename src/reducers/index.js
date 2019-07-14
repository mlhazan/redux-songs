import {combineReducers} from 'redux';
//import {selectSong} from "../actions";

const songReducer = () =>{
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All stars', duration: '3:15'},
        {title: 'I want it', duration: '2:25'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})