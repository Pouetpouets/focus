import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '13325015266-j65l23gvvvtc2m8abhhjh65v5ba7mmpn.apps.googleusercontent.com'

const GoogleAuthButton = ({ onLoginSuccess, onLogoutSuccess }) => {
  const handleLoginSuccess = (response) => {
    console.log('Logged in as:', response.profileObj);
    if (onLoginSuccess) {
      onLoginSuccess(response.profileObj);
    }
  };

  const handleLogoutSuccess = () => {
    console.log('Logged out successfully');
    if (onLogoutSuccess) {
      onLogoutSuccess();
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={console.error}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={handleLogoutSuccess}
      />
    </div>
  );
};

export default GoogleAuthButton;
