import React from 'react';
import './Sidebar.css';
import { MdOutlineLogout } from 'react-icons/md';
import { GiSurroundedEye } from 'react-icons/gi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsWalletFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

import { BsArrowDownUp } from 'react-icons/bs';

import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className='sideBar_container flex flex_col'>
          <div className='top_container'>
            <span style={{ marginRight: '0.6rem' }}>
              <GiSurroundedEye />
            </span>{' '}
            GND CRYPT
          </div>
          <div className='mid_container'>
            <div className='wallet_container flex flex_row'>
              <div className='inner_container flex flex_col'>
                <span className='balance'>Balance</span>
                <span>$12.577,00</span>
              </div>
              <span style={{ marginTop: '0.6rem' }}>
                <BiDotsHorizontalRounded />
              </span>
            </div>
            <div className='list_container'>
              <ul>
                <li>
                  <span style={{ marginRight: '0.6rem' }}>
                    <AiOutlineShoppingCart />
                  </span>{' '}
                  Gloceries
                </li>
                <li>
                  <span style={{ marginRight: '0.6rem' }}>
                    <BsWalletFill />
                  </span>{' '}
                  Billing service
                </li>
                <li>
                  <span style={{ marginRight: '0.6rem' }}>
                    <AiOutlineUser />
                  </span>{' '}
                  Account
                </li>
                <li>
                  <span style={{ marginRight: '0.6rem' }}>
                    <BsArrowDownUp />
                  </span>{' '}
                  Transaction
                </li>
                <li>
                  <span style={{ marginRight: '0.6rem' }}>
                    <AiOutlineSetting />
                  </span>{' '}
                  Setting
                </li>
              </ul>
            </div>
            <div className='inner_bottom btn'></div>
          </div>
          <div className='bottom_container'>
            <span style={{ marginRight: '0.6rem' }}>
              <MdOutlineLogout />
            </span>
            Log Out
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
