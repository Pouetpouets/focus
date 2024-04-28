import logo from './logo.svg';
import './App.css';
import {axios} from 'axios'
import React, {useEffect} from 'react'

function App() {



const getSubscriptions = () => {
  axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions?part=contentDetails&channelId=UCIJG2skTIeZzd7Cb3YZ7JiA&key=AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU').then((res) => res.json())
  .then((data) => data.items.forEach((curr) => console.log(curr)))
}

useEffect(() => {
  getSubscriptions()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
