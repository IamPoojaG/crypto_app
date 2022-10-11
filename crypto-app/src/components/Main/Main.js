import React from 'react';
import './Main.css';

import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import InnerBottom from '../InnerBottom/InnerBottom';

const Main = () => {
  const src =
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  return (
    <>
      <div className='main_container flex absolute_centers flex_col'>
        <nav className='flex flex_row'>
          <div className='items'>
            <ul className='flex absolute_centers flex_row'>
              <li>Market</li>
              <li>Exchange</li>
              <li>Wallet</li>
              <li>Social</li>
              <li>My history</li>
            </ul>
          </div>
          <div className="profile_container flex absolute_centers flex_row'">
            <div className='profile '>
              <span>
                <BiMessageSquareDetail />
              </span>
            </div>
            <div className='profile'>
              <span>
                <MdOutlineNotificationsNone />
              </span>
            </div>
            <div className='profile'>
              <img src={src} alt='ProfileImg' />
            </div>
          </div>
        </nav>
        <div className='content_container flex absolute_centers flex_row'>
          <div className='mid_content_container flex absolute_centers flex_col'>
            <div className='inner_top_container'></div>
            <div className='inner_bottom_container flex absolute_centers flex_row'>
              <InnerBottom />
            </div>
          </div>
          <div className='right_content_container flex flex_col'></div>
        </div>
      </div>
    </>
  );
};

export default Main;
