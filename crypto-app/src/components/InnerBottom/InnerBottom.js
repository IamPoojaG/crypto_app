import React from 'react';
import './InnerBottom.css';

const Inner_bottom = () => {
  const data = [
    {
      id: 1,
      name: 'BITCOIN',
      SKU: 'BTE',
      percentage: 37,
      deduction: -2.5,
      color: '#F9896B',
    },
    {
      id: 2,
      name: 'DAI',
      SKU: 'DAI',
      percentage: 23,
      deduction: '+7.2',
      color: '#FFCC40',
    },
    {
      id: 3,
      name: 'RIPPLE',
      SKU: 'XRP',
      percentage: 20,
      deduction: -3.1,
      color: '#0377FB',
    },
    {
      id: 4,
      name: 'TETHER',
      SKU: 'USDT',
      percentage: 17,
      deduction: '+1.8',
      color: '#50DFB2',
    },
  ];
  const dataLeft = [
    {
      id: 1,
      name: 'GPUs mining',
      status: 'Running',
      color: '#F9896B',
    },
    {
      id: 2,
      name: 'CPUs mining',
      status: 'Running',
      color: '#FFCC40',
    },
    {
      id: 3,
      name: 'Ests. daily USD',
      status: '$25.03',
      color: '#51459E',
    },
    {
      id: 4,
      name: 'Team Members',
      status: '12',
      color: '#50DFB2',
    },
  ];

  const Item = () => {
    return (
      <>
        <div className='coin_inner_container flex flex_col'>
          {data.map((ele) => (
            <>
              <div className='coin_sub_container flex flex_row'>
                <div className='left_coin flex '>
                  <div
                    key={ele.id}
                    style={{ backgroundColor: `${ele.color}` }}
                    className='coin_image'
                  ></div>
                  <div key={ele.id} className='coin_name'>
                    <span style={{ fontSize: '1rem' }}>{ele.name}</span>
                    <br />
                    <span>{ele.SKU}</span>
                  </div>
                </div>
                <div className='right'>
                  <div key={ele.id} className='coin_percentage'>
                    <span>{ele.percentage}%</span>
                    <br />
                    <span style={{ fontSize: '0.7rem' }}>{ele.deduction}%</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  };

  const ItemRight = () => {
    return (
      <>
        <div className='coin_inner_container flex flex_col'>
          {dataLeft.map((ele) => (
            <>
              <div className='coin_sub_container flex flex_row color_black'>
                <div className='left_coin flex '>
                  <div
                    key={ele.id}
                    style={{ backgroundColor: `${ele.color}` }}
                    className='coin_image'
                  ></div>
                  <div key={ele.id} className='coin_name'>
                    <span style={{ fontSize: '1rem' }}>{ele.name}</span>
                    <br />
                    <span>{ele.status}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className='left_container flex absolute_centers'>
        <div className='heading flex flex-row'>
          <h5>My Wallet</h5>
          <p className='view'>View all</p>
        </div>
        <div className='coin_container'>
          <Item />
        </div>
      </div>

      <div className='right_container flex absolute_center flex_col'>
        <div className='heading flex flex-row'>
          <h5>Mining Status</h5>
        </div>
        <div className='coin_container'>
          <ItemRight />
        </div>
      </div>
    </>
  );
};

export default Inner_bottom;
