import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionsTable = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
     /*  try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/subscriptions',
          {
            params: {
              part: 'snippet',
              channelId: 'UCIJG2skTIeZzd7Cb3YZ7JiA',
              key: 'yAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU'
            }
          }
        );
        setSubscriptions(response.data.items);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      } */

      axios.get('https://youtube.googleapis.com/youtube/v3/subscriptions', {
    params: {
      part: 'snippet',
      channelId: 'UCIJG2skTIeZzd7Cb3YZ7JiA',
      /* key: process.env.REACT_APP_YOUTUBE_API_KEY */
      maxResults: 50,
      key: 'AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU'
    }
  })
  .then((res) => {
    console.log('subs req', res)
    setSubscriptions(res.data.items);
  })
  .catch((error) => {
    console.error('Error fetching subscriptions:', error);
  });
    };

    fetchSubscriptions();
  }, []);

  return (
    <div>
      <h2>Subscriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.id}>
              <td>
                <img
                  src={subscription.snippet.thumbnails.default.url}
                  alt={subscription.snippet.title}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>{subscription.snippet.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionsTable;
