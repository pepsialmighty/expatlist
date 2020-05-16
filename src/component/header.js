import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MyModal from './Modal/modal';

const Header = () => {
  let [show, setShow] = useState(false);

  const [menu, setMenu] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = (child) => setShow(child);

  const toggle = () => {
    setMenu(!menu);
  };

  // useEffect(() => {
  //   console.log(show);
  // }, [show]);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <header>
      <div className='bg'>
        <img
          alt='Go nomad'
          className='in'
          src='https://images.unsplash.com/photo-1443176161226-96cde1416c79?ixlib=rb-1.2.1&amp'
        />
      </div>
      <div className='row'>
        <div
          className='col-xs-1 col-sm-1 col-md-1 col-lg-1 logo-out'
          onClick={showModal}
        >
          <span className='logo'>
            <img alt='Nomad List' src='/images/logo.png' />
            <i className='arrow down'></i>
          </span>
        </div>
        <MyModal closeModalChild={closeModal} show={show} />
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-5 input-header'>
          <input
            type='text'
            className='search-bar'
            placeholder='Find your place'
          />
        </div>
        <div
          className={
            menu === true
              ? 'col-xs-4 col-sm-4 col-md-4 col-lg-5 header-wrapper show_menu'
              : 'col-xs-4 col-sm-4 col-md-4 col-lg-5 header-wrapper hide_menu'
          }
        >
          <div className='header-btn'>
            <Link onClick={toggle} to='/chat'>
              <button type='button' className=' btns'>
                Chat
              </button>
            </Link>
            &nbsp;
            <Link onClick={toggle} to='/dating'>
              <button type='button' className=' btns'>
                Dating
              </button>
            </Link>
            &nbsp;
            <Link onClick={toggle} to='/community'>
              <button type='button' className=' btns'>
                Community
              </button>
            </Link>
            &nbsp;
            <Link onClick={toggle} to='/forum'>
              <button type='button' className=' btns'>
                Forum
              </button>
            </Link>
            &nbsp;
            <Link onClick={toggle} to='/hireremotely'>
              <button type='button' className=' btns'>
                Hire Remotely
              </button>
            </Link>
            &nbsp;
            {/* <button type='button' className=' btns'>
              Log In
            </button>
            &nbsp; */}
            <Link onClick={toggle} to='/'>
              <button type='button' className=' log-out-btn'>
                Log out
              </button>
            </Link>
            &nbsp;
          </div>
        </div>
        <div
          className={
            menu === true
              ? 'col-xs-1 col-sm-1 col-md-1 col-lg-1 active'
              : ' col-xs-1 col-sm-1 col-md-1 col-lg-1'
          }
        >
          <div className='toggle' onClick={toggle}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
