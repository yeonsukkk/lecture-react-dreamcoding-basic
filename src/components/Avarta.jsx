export default function Avarta({ isNew, src }) {
  return (
    <>
      <img src={src} alt='avartar' className='photo' />
      {!!isNew && <span className='bedge'>{isNew}</span>}
    </>
  );
}
