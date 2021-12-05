import './App.css';
import AudioPlayer from './AudioPlayer/AudioPlayer'

function App() {
  const urlAux = 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a'

  return (
    <div className="App">
      <header className="App-header">
        <AudioPlayer url={ urlAux }/>
      </header>
    </div>
  );
}

export default App;
