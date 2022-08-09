import React from 'react';
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export default function Shop() {
  const dispatch = useDispatch();

  return (
    <>
      <div className='d-flex justify-content-start align-items-center'>
        <div className='d-flex justify-content-center align-items-center m-2'>
          <button className='btn btn-sm btn-dark' onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
          <span className='mx-2'>Add this item to cart</span>
          <button className='btn btn-sm btn-dark' onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
      </div>
    </>
  )
}
