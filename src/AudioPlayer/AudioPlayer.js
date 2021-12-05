import React, { useState } from "react";

const AudioPlayer = ({ url }) => {
  const [song, setSong] = useState(new Audio(url));

  function playSong() {
    setSong(song.play())

  }
  
  return (
    <div>
      <audio
        src={ url }
        autoPlay
      />
      <button onClick={playSong} >Play</button>
    </div>
  );
};

export default AudioPlayer;