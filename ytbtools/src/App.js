import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react'

function App() {
  const [datas, setDatas] = useState([])



const getSubscriptions = () => {
  axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions?part=contentDetails&channelId=UCIJG2skTIeZzd7Cb3YZ7JiA&key=AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU')
  .then((res) =>  setDatas(res.data.items))
}

useEffect(() => {
  getSubscriptions()
}, [])

console.log(datas)
  return (
    <div className="App">
    {datas.map((item) => <p style={{padding: "20px"}}>
      {JSON.stringify(item)}
    </p>)}
    </div>
  );
}

export default App;
