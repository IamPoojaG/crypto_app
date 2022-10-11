import React from 'react';
import './Main.css';

import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { SiMastercard } from 'react-icons/si';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import graphImage from '../../common/Resource/graphImage.png';
import Internet from '../../common/Resource/Capture.JPG';
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
            <div className='inner_top_container flex absolute_centers flex_col'>
              <div className='sub_name_container flex flex_row'>
                <h5>Income</h5>
                <div className='sorting_container flex flex_rpw'>
                  <label>Sort By:</label>
                  <select>
                    <option>Day </option>
                    <option>Week </option>
                    <option>Month </option>
                    <option>Year </option>
                    <option>All </option>
                  </select>
                  <span>
                    <BsDownload />
                  </span>
                </div>
              </div>
              <div className='graph'>
                <img src={graphImage} alt='graphImage' />
              </div>
              <div className='time_container flex absolute_centers flex_row'>
                <ul className='flex flex_row'>
                  <li>Apr01</li>
                  <li>Apr02</li>
                  <li>Apr03</li>
                  <li>Apr04</li>
                  <li>Apr05</li>
                  <li>Apr06</li>
                  <li>Apr07</li>
                </ul>
              </div>
              <div className='filter_container flex absolute_centers flex_row'>
                <ul className='flex flex_row'>
                  <li>1d</li>
                  <li>1w</li>
                  <li>1m</li>
                  <li>3m</li>
                  <li>1y</li>
                  <li>all</li>
                </ul>
              </div>
            </div>
            <div className='inner_bottom_container flex absolute_centers flex_row'>
              <InnerBottom />
            </div>
          </div>
          <div className='right_content_container flex flex_col'>
            <h5>Send Money</h5>
            <div className='card flex flex_row btn'>
              <h5>
                <span style={{ marginRight: '0.6rem' }}>
                  <SiMastercard />
                </span>{' '}
                Debit
              </h5>
              <select>
                <option>$10,680</option>
                <option>$9,280</option>
                <option>$9,980</option>
              </select>
            </div>
            <div className='input_container'>
              <div class='form-floating'>
                <input
                  type='number'
                  class='form-control'
                  id='floatingPassword'
                  placeholder='Enter the amount'
                />
                <label for='floatingPassword'>
                  <img src={src} alt='input img' />
                  &nbsp;&nbsp;&nbsp;&nbsp;Enter the amount
                </label>
              </div>
            </div>
            <div className='send_container flex flex_col'>
              <div className='inner_send flex flex_row'>
                <h5>
                  <img src={src} alt='input img' />
                  &nbsp;&nbsp; Astrid Hayes
                </h5>
                <span>
                  <AiOutlinePlusCircle />
                </span>
              </div>
              <div className='btn btn_send'>Send Money</div>
            </div>
            <div className='income_container flex flex_row'>
              <h5>Internet Speed</h5>
              <p>view all</p>
            </div>
            <div>
              <img src={Internet} alt='Internet' />
            </div>
            <div>
              <h6>Last speed tests</h6>
            </div>
            <div className='internet_bottom_container flex  flex_row'>
              <ul className='flex  flex_col'>
                <li>Date</li>
                <li>Sep 1,01:12 AM</li>
                <li>Sep 1,10:12 AM</li>
                <li>Sep 1,08:12 AM</li>
              </ul>
              <ul className='flex flex_col'>
                <li>Download</li>

                <li>75.4</li>
                <li>72.4</li>
                <li>73.3</li>
              </ul>
              <ul className='flex  flex_col'>
                <li>Upload</li>
                <li>67.5</li>
                <li>67.3</li>
                <li>67.5</li>
              </ul>
            </div>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
