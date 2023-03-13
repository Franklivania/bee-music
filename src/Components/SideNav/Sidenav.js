import React, { useState, useEffect } from 'react';
import './Sidenav.scss';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [selectedLink, setSelectedLink] = useState(() => {
    const storedLink = localStorage.getItem('selectedLink');
    return storedLink !== null ? parseInt(storedLink) : 0;
  });

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  }

  useEffect(() => {
    localStorage.setItem('selectedLink', selectedLink.toString());
  }, [selectedLink]);

  return (
    <menu>
        <img src={logo} alt="" />

        <aside>
            <nav>
                <Link className={`link ${selectedLink === 0 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(0)}>
                  <i class="fa-solid fa-home"></i> Home
                </Link>
                <Link className={`link ${selectedLink === 1 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(1)}>
                  <i class="fa-solid fa-line-chart"></i> Trends
                </Link>
                <Link className={`link ${selectedLink === 2 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(2)}>
                  <i class="fa-solid fa-compass"></i> Feed
                </Link>
            </nav>

            <nav>
                <p>Discover</p>
                <Link className={`link ${selectedLink === 3 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(3)}>
                  <i class="fa-solid fa-clover"></i>New and Notable
                </Link>
                <Link className={`link ${selectedLink === 4 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(4)}>
                  <i class="fa-solid fa-calendar"></i>Release Calendar
                </Link>
                <Link className={`link ${selectedLink === 5 ? 'active' : ''}`} to='/' onClick={() => handleLinkClick(5)}>
                  <i class="fa-solid fa-ticket"></i>Events
                </Link>
            </nav>

            <nav>
                <p>Your Collection</p>
                <Link className={`link ${selectedLink === 6 ? 'active' : ''}`} to='' onClick={() => handleLinkClick(6)}>
                  <i class="fa-solid fa-heart"></i>Your Collection
                </Link>
                <Link className={`link ${selectedLink === 7 ? 'active' : ''}`} to='' onClick={() => handleLinkClick(7)}>
                  <i class="fa-solid fa-users"></i>Artist
                </Link>
                <Link className={`link ${selectedLink === 8 ? 'active' : ''}`} to='' onClick={() => handleLinkClick(8)}>
                  <i class="fa-solid fa-star"></i>Albums
                </Link>
            </nav>

        </aside>
    </menu>
  )
}

export default Sidenav;
