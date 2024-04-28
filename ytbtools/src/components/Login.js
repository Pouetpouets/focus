import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId = '13325015266-j65l23gvvvtc2m8abhhjh65v5ba7mmpn.apps.googleusercontent.com'

const Login = (setUser) => {

  const onSuccess = (res) => {
    console.log('Login sucess', res.profileOjb)
    setUser(res.profileOjb)
  }

  const onFailure = (res) => {
    console.log('login failed', res)
  }
  return (
    <div>

      <GoogleLogin
      clientId={clientId}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy='signle_host_origin'
      isSignedIn={true}
      />
    </div>
  )
}

export default Login
