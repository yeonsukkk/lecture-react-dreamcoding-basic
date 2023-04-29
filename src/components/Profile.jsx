import Avarta from './Avarta';

export default function Profile(props) {
  return (
    <div className='profile'>
      {<Avarta isNew={props.isNew} src={props.img} />}
      {/* 
          // Avata.jsx 컴포넌트 만들기 전!!
          {!!props.isNew && <span className='bedge'>{props.isNew}</span>} 
        
          <img src={props.img} alt='Avarta' className='photo' />
        */}
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
}
