import React from 'react';
import './InnerBottom.css';

const Inner_bottom = () => {
  return (
    <>
      <div className='left_container flex absolute_centers'>
        <div className='heading'></div>
      </div>

      <div className='right_container flex absolute_centers'>
        <div> left</div>
      </div>
    </>
  );
};

export default Inner_bottom;
