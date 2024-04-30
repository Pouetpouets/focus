import './App.css';
import React, {useEffect, useState} from 'react'
import SubscriptionsTable from './components/SubscriptionTable';
import { GoogleLogin } from './components/GoogleLogin';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

const [user, setUser] = useState(null);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLESIGNIN_ID}>
<h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    <div className="App" />
    </GoogleOAuthProvider>

  );
}

export default App;
