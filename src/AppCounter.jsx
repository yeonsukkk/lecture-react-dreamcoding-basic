import Counter from './components/Counter';

import './AppCounter.css';
import { useState } from 'react';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <>
      <p style={{ textAlign: 'center' }}>
        Total Count:{count} {count <= 10 ? '🌪' : '🌞'}
      </p>
      <div>
        <Counter total={count} onClickzz={handleClick} />
        <Counter total={count} onClickzz={handleClick} />
      </div>
    </>
  );
}
