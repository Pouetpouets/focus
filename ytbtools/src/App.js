import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import SubscriptionsTable from './components/SubscriptionTable';

function App() {
  const [datas, setDatas] = useState([])





const getSubscriptions = () => {
  axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions', {
    params: {
      part: 'contentDetails',
      channelId: 'UCIJG2skTIeZzd7Cb3YZ7JiA',
      /* key: process.env.REACT_APP_YOUTUBE_API_KEY */
      maxResults: 50,
      key: 'AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU'
    }
  })
  .then((res) => {
    console.log('subs req', res)
    setDatas(res.data.items);
  })
  .catch((error) => {
    console.error('Error fetching subscriptions:', error);
  });
};

useEffect(() => {
  getSubscriptions()
}, [])

console.log(datas)
  return (
    <div className="App">
{/*     {datas.map((item) => <p style={{padding: "20px"}}>
      {JSON.stringify(item)}
    </p>)}
 */}
    <SubscriptionsTable />
    </div>
  );
}

export default App;
