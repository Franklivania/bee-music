import React, { useState } from 'react'
import './Login.scss'
import Modal from '../Modal/Modal'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [close, setClose] = useState(false)
    
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const closeModal = () => {
        setShowModal(false);
    };

  return (
    <div className='login'>

        {!loggedIn && (
            <button onClick={toggleModal}>Login</button>
        )}

        { loggedIn && (
            <div>
                {/* <img src={} alt="" /> */}
            </div>
        )}
        
        {showModal && (
            <Modal closeModal={closeModal}/>
        )}
    </div>
  )
}

export default Login