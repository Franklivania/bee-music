import React, { useState } from 'react'
import './Topnav.scss'

const Topnav = () => {

    const [click, setClick] = useState([])

  return (
    <div className='topnav'>

        <button className='button' onClick={() => setClick(click - 1)}><i class="fa-solid fa-arrow-left fa-2x"></i></button>

        <button className='button' onClick={() => setClick(click - 1)}><i class="fa-solid fa-arrow-right fa-2x"></i></button>

        <form action="">
            <input type="search" name="search" id="search" placeholder='Search Songs, Artistes, Playlists' />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>

    </div>
  )
}

export default Topnav