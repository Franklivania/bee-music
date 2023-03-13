import React from 'react'
import './Modal.scss'
import { loginUrl } from '../../auth'

const Modal = ({ closeModal }) => {

    const handleLogin = () => {
        window.location = loginUrl
    }

  return (
    <div className='overlay'>
        <div className="modal">
            <button onClick={closeModal} id='close'>
                <i class="fa-solid fa-times"></i>
            </button>
            <h1>
                Login With Spotify
                <i class="fa-brands fa-spotify fa-2x"></i>
            </h1>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    </div>
  )
}

export default Modal