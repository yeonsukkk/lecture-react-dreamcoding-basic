import { useState } from 'react';

export default function Counter({ total, onClickzz }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>
        {count} <i style={{ fontSize: '10px' }}>/ {total}</i>
      </span>
      <button
        type='button'
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          onClickzz();
        }}
      >
        +1
      </button>
    </div>
  );
}
