import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Login from '../../Components/Login/Login';
import Rightnav from '../../Components/RightNav/Rightnav';
import Sidenav from '../../Components/SideNav/Sidenav';
import Topnav from '../../Components/TopNav/Topnav';
import Render from '../Render/Render';
import './Dashboard.scss';

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const duration = 300;
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: 'translateX(0)',
  };
  const transitionStyles = {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(-100%)' },
  };

  return (
    <div className='dashboard'>

      <Topnav />

      {/* <input type="search" name="" id="" /> */}

      <button className="btn" onClick={() => setOpen(!open)}>
        <i className={`fa-solid fa-${open ? 'bars' : 'ellipsis-vertical'} fa-2x`}></i>
      </button>

      <Transition in={open} timeout={duration}>
        {state => (
          <div className="sidenav-container"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            {open && 
              <Sidenav />
            }
          </div>
        )}
      </Transition>

      <Login/>

      <Render />

      <Rightnav />
    </div>
  );
}

export default Dashboard;
