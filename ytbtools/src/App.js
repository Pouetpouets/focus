import './App.css';
import React, {useEffect, useState} from 'react'
import SubscriptionsTable from './components/SubscriptionTable';
import { GoogleLogin } from './components/GoogleLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const YOUR_CLIENT_ID =  '137117864296-i6duo2ldi73u21dearanqcgpjf3hd29q.apps.googleusercontent.com';
export const YOUR_CLIENT_SECRET = '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';

console.log(
  'YOUR_CLIENT_SECRET', YOUR_CLIENT_SECRET
)

const App = () => {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

const [user, setUser] = useState(null);
  return (
    <GoogleOAuthProvider clientId={YOUR_CLIENT_ID}>
<h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    <div className="App" />
    </GoogleOAuthProvider>

  );
}

export default App;
