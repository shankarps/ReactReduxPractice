/*
Default file for all reducers.
*/
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "The Game of Love - Random Access Memories", duration: "6:07" },
    { title: "Get Lucky - Random Access Memories", duration: "4:15" },
    { title: "Walking on a Dream - Empire of the sun", duration: "3:45" },
    { title: "Hotel California - Eagles", duration: "5:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
