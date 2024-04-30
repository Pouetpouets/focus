
import React, { useState } from 'react';
import { google } from 'googleapis';

const OAuthComponent = () => {
  const [authUrl, setAuthUrl] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const YOUR_CLIENT_ID =  '13325015266-j65l23gvvvtc2m8abhhjh65v5ba7mmpn.apps.googleusercontent.com';
  const YOUR_CLIENT_SECRET = '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';

  const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    'http://localhost:3000'
  );

  const handleLogin = async () => {
    const consentUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/youtube.readonly',
    });
    setAuthUrl(consentUrl);
  };

  const handleRedirect = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    setAccessToken(tokens.access_token);
  };

  if (window.location.pathname === '/redirect_uri') {
    handleRedirect();
  }

  return (
    <div>
      {accessToken ? (
        <p>Access token: {accessToken}</p>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default OAuthComponent;
