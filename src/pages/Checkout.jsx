import React, { useState } from 'react';

import CashCheckout from '../assets/checkout/icon-cash-on-delivery.svg';

const Checkout = () => {

  const [isEMoneyChecked, setIsEMoneyChecked] = useState(true);

  const handleRadioChange = () => {
    setIsEMoneyChecked(prev => !prev)
  };

  return (
    <div className='flex justify-center bg-[#F2F2F2]'>
      <div className='flex w-[65vw] gap-7 my-36'>
        <div className='flex flex-col w-2/3 bg-white px-12 rounded-lg'>
          <h1 className='mt-14 mb-10 text-3xl tracking-[1px] font-semibold'>CHECKOUT</h1>
          <div className='flex flex-col'>
            <p className='text-orange-button text-sm font-semibold tracking-[1px] mb-4'>BILLING DETAILS</p>
            <div className='flex gap-4 mb-6'>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="name">Name</label>
                <input
                  id='name'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                  type="text"
                  placeholder='Name'
                />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="email">Email Address</label>
                <input
                  id='email'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                  type="email"
                  placeholder='Email Address'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold' htmlFor="phone">Phone Number</label>
              <input
                id='phone'
                className='border border-[#CFCFCF] rounded-lg h-14 w-1/2 indent-6 focus:outline-orange-button'
                type="tel"
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div>
            <p className='text-orange-button text-sm font-semibold tracking-[1px] mb-4 mt-14'>SHIPPING INFO</p>
            <div className='flex flex-col gap-2 mb-6 w-full'>
              <label className='text-sm font-bold' htmlFor="address">Address</label>
              <input
                id='address'
                className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                type="text"
                placeholder='Address'
              />
            </div>
            <div className='flex gap-4 mb-6'>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="zip">ZIP Code</label>
                <input
                  id='zip'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                  type="text"
                  placeholder='ZIP Code'
                />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="city">City</label>
                <input
                  id='city'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6  focus:outline-orange-button'
                  type="text"
                  placeholder='City'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold' htmlFor="country">Country</label>
              <input
                id='country'
                className='border border-[#CFCFCF] rounded-lg h-14 w-1/2 indent-6 focus:outline-orange-button'
                type="text"
                placeholder='Country'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-orange-button text-sm font-semibold tracking-[1px] mb-4 mt-14'>PAYMENT DETAILS</p>
            <div className='flex gap-4'>
              <label className='text-sm font-bold w-1/2' htmlFor="payment">Payment Method</label>
              <div className='flex flex-col w-1/2 gap-4'>
                <div className='flex border border-[#CFCFCF] rounded-lg pl-5 py-4 gap-4 items-center'>
                  <input
                    name='payment'
                    type="radio"
                    checked={isEMoneyChecked}
                    onChange={handleRadioChange}
                  />
                  <label className='font-bold text-sm'>e-Money</label>
                </div>
                <div className='flex border border-[#CFCFCF] rounded-lg pl-5 py-4 gap-4 items-center'>
                  <input
                    name='payment'
                    type="radio"
                    checked={!isEMoneyChecked}
                    onChange={handleRadioChange}
                  />
                  <label className='font-bold text-sm'>Cash on Delivery</label>
                </div>
              </div>
            </div>
          </div>
          {isEMoneyChecked &&
            <div className='flex gap-4 mt-6 mb-12'>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="card-num">e-Money Number</label>
                <input
                  id='card-num'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                  type="text"
                />
              </div>
              <div className='flex flex-col gap-2 w-1/2'>
                <label className='text-sm font-bold' htmlFor="card-pin">e-Money Pin</label>
                <input
                  id='card-pin'
                  className='border border-[#CFCFCF] rounded-lg h-14 indent-6 focus:outline-orange-button'
                  type="text"
                />
              </div>
            </div>
          }
          {!isEMoneyChecked &&
            <div className='flex gap-8 mb-12 mt-8'>
              <img className='w-12 h-12' src={CashCheckout} alt="cash icon" />
              <p className='opacity-50'>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
          }
        </div>
        <div className='flex flex-col w-1/3 bg-white rounded-lg h-fit px-7'>
          <h3 className='font-bold text-lg tracking-[1px] my-8'>SUMMARY</h3>
          <div className='flex justify-between mb-2 mt-8'>
            <p className='opacity-50'>TOTAL</p>
            <p className='font-bold text-lg'>$5,000</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='opacity-50'>SHIPPING</p>
            <p className='font-bold text-lg'>$50</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='opacity-50'>VAT (INCLUDED)</p>
            <p className='font-bold text-lg'>$1,000</p>
          </div>
          <div className='flex justify-between mt-6'>
            <p className='opacity-50'>GRAND TOTAL</p>
            <p className='font-bold text-lg text-orange-button'>$6,050</p>
          </div>
          <button className='h-12 bg-orange-button text-white hover:bg-orange-hover text-sm font-semibold my-8'>CONTINUE & PAY</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;