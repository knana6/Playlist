import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let a = 1;
  let [good, setGood] = useState(0);
  let title = ['Playlist(am)', 'Playlist(pm)'];
  let text = ['1. Stereo hearts', '1. Trapped in the drum'];

  return (
    <div className="App">
      <div className='black-nav'>
        <h> MUSIC 00{a}</h>
      </div>

      {title.map(function (a, i) {
        return (
          <div key={i}>
            <div className='list'>
              <h4>{a} <span onClick={() => { setGood(good + 1) }}> 👍{good}</span></h4>
              <p>{text[i]}</p>
              <p>2. Big plans</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;