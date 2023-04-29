import { useEffect, useState } from 'react';

export default function Products({
  saleProductsChecked,
  setSaleProductsChecked,
}) {
  const [products, setProducts] = useState([]);
  const fetchUrl = `./data/${saleProductsChecked ? 'sale_' : ''}products.json`;
  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData(fetchUrl);
    return () => {
      console.log('🧹깨끗하게 청소하는 일들을 합니다.');
    };
  }, [fetchUrl]);

  const handleChange = () => setSaleProductsChecked((checked) => !checked);
  return (
    <>
      <input
        type='checkbox'
        id='listchange'
        value={saleProductsChecked}
        checked={saleProductsChecked}
        onChange={handleChange}
      />
      <label htmlFor='listchange'>Show only 🔥 Sale</label>
      <ul>
        {products?.map((product, idx) => (
          <li key={idx}>
            <article>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
