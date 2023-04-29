import './App.css';

function AppJSX() {
  const name = 'kang';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1>{`Hello ${name}`}</h1>
      <h2>Hello2</h2>
      <p>{name}</p>
      <ul>
        {list?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
