import React from 'react'
import {GoogleLogout} from 'react-google-login'

const clientId = '13325015266-j65l23gvvvtc2m8abhhjh65v5ba7mmpn.apps.googleusercontent.com'


const Logout = () => {
  const onSuccess = () => {
    console.log('Log out successfull')
  }

  return (
    <div>
      <GoogleLogout
      clientId={clientId}
      buttonText='logout'
      onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout
