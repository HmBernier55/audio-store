import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addOneToCart, removeOneFromCart } from '../../store/cartSlice';

const CartProduct = ({data, cartItemId, checkout = false}) => {

  const [count, setCount] = useState(data.quantity);

  const dispatch = useDispatch();

  const add = () => {
    setCount(prevCount => prevCount + 1);
    dispatch(addOneToCart({
      id: cartItemId,
      price: data.price
    }));
  };
  const subtract = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      dispatch(removeOneFromCart({
        id: cartItemId,
        price: data.price
      }));
    } else {
      setCount(0);
      dispatch(removeFromCart({
        id: cartItemId,
        product: data
      }));
    }
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <img className='h-16 w-16 rounded-lg' src={new URL(data.image, import.meta.url).href} alt="product image" />
        <div>
          <p className='font-bold'>{data.name}</p>
          <p className='opacity-50 text-sm font-semibold'>{`$ ${data.price}`}</p>
        </div>
      </div>
      {!checkout &&
        <div className='flex gap-3 items-center'>
          <div className={`flex h-8 w-24 px-3 bg-[#F1F1F1] items-center justify-between`}>
            <button
              className='font-bold opacity-25 hover:text-orange-button'
              onClick={subtract}
            >-</button>
            <p className='font-semibold'>{count}</p>
            <button
              className='font-bold opacity-25 hover:text-orange-button'
              onClick={add}
            >+</button>
          </div>
          <button
            className='hover:border-[#979797] border-white border px-2 rounded-lg'
            onClick={() => dispatch(removeFromCart({id: cartItemId, product: data}))}
          >x</button>
        </div>
      }
      {checkout &&
        <p className='font-semibold opacity-50'>{`x${data.quantity}`}</p>
      }
    </div>
  )
}

export default CartProduct;