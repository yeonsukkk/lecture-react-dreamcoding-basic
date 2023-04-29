import { useState } from 'react';
import './AppXY.css';
export default function AppXY() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const handleMouse = (event) => {
    const { pageX } = event;
    setCoordinate((prev) => ({
      ...prev,
      x: pageX,
    }));
  };
  const handlePointerEnter = (event) => {
    const { pageY } = event;
    setCoordinate((prev) => {
      let obj = { ...prev };
      obj.y = pageY;
      return obj;
    });
  };
  const handlePonterOut = (event) => {
    const { pageX } = event;
    setCoordinate((prev) => ({
      ...prev,
      x: 0,
    }));
  };
  return (
    <>
      <div
        className='container'
        onPointerMove={handleMouse}
        onPointerLeave={handlePonterOut}
        onPointerEnter={handlePointerEnter}
      >
        <div
          className='pointer'
          style={{
            transform: `translate(${coordinate.x}px, ${coordinate.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
