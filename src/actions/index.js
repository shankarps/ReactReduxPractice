/* This file is named index.js because it is easier to import.
Usually root files in a folder are called index.js file.
This file has the ation creators.
*/

//Action creator to select a song
export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

//Export - no need to export default.
