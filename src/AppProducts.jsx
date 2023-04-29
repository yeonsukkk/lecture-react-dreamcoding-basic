import { useState } from 'react';
import Products from './components/Products';

export default function AppProducnts() {
  const [showProducts, setShowProducts] = useState(true);
  const [saleProductsChecked, setSaleProductsChecked] = useState(false);
  return (
    <div>
      {!!showProducts && (
        <Products
          saleProductsChecked={saleProductsChecked}
          setSaleProductsChecked={setSaleProductsChecked}
        />
      )}
      <br />
      <button
        type='button'
        onClick={() => {
          setShowProducts((show) => !show);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
