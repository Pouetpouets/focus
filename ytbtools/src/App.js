import './App.css';
import React, {useEffect, useState} from 'react'
import SubscriptionsTable from './components/SubscriptionTable';
import { GoogleLogin } from './components/GoogleLogin';




const App = () => {
const [user, setUser] = useState(null);
  return (

    <div className="App">
<GoogleLogin />
    <SubscriptionsTable />
    </div>
  );
}

export default App;
