import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionsTable = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
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

  const handleCheckboxChange = (subscriptionId) => {
    setSelectedSubscriptions((prevSelectedSubscriptions) => {
      if (prevSelectedSubscriptions.includes(subscriptionId)) {
        return prevSelectedSubscriptions.filter(
          (id) => id !== subscriptionId
        );
      } else {
        return [...prevSelectedSubscriptions, subscriptionId];
      }
    });
  };

  const handleUnsubscribe = async () => {
    try {
      await Promise.all(
        selectedSubscriptions.map(async (subscriptionId) => {
          await axios.delete(
            'https://www.googleapis.com/youtube/v3/subscriptions',
            {
              params: {
                id: subscriptionId,
                key: 'AIzaSyAMGSKwDt3p0TTv4_3cUtpEKuJtS5Ua-uU'
              }
            }
          );
        })
      );
      // Remove unsubscribed subscriptions from the list
      setSubscriptions((prevSubscriptions) =>
        prevSubscriptions.filter(
          (subscription) => !selectedSubscriptions.includes(subscription.id)
        )
      );
      // Clear the selected subscriptions array
      setSelectedSubscriptions([]);
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  return (
    <div>
      <h2>Subscriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedSubscriptions.includes(subscription.id)}
                  onChange={() => handleCheckboxChange(subscription.id)}
                />
              </td>
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
      <button onClick={handleUnsubscribe} disabled={selectedSubscriptions.length === 0}>
        Unsubscribe from Selected
      </button>
    </div>
  );
};

export default SubscriptionsTable;
