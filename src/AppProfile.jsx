import './App.css';
import Profile from './components/Profile';
const profileArr = [
  {
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    name: 'James Kim',
    title: '백엔드 개발자',
    isNew: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
    name: 'Yeonsu Kang',
    title: '프론트엔드 개발자',
    isNew: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    name: 'Kathy Lee',
    title: 'UI/UX Designer',
  },
];

const AppProfile = () => {
  const handleClick = (event) => {
    console.log(event.currentTarget);
  };
  const handleForm = (event) => {
    const txt = event.currentTarget.children[0].value;
    const elm = document.createElement('p');
    elm.textContent += txt;
    event.currentTarget.after(elm);
  };
  return (
    <>
      <button type='button' onClick={handleClick}>
        <span>버튼</span>
      </button>
      <form action='#' onSubmit={handleForm}>
        <input type='text' />
        <button type='submit'>전송</button>
      </form>
      {profileArr?.map((item, idx) => {
        return !!item.isNew ? (
          <Profile
            key={idx}
            img={item.img}
            name={item.name}
            title={item.title}
            isNew='NEW'
          />
        ) : (
          <Profile
            key={idx}
            img={item.img}
            name={item.name}
            title={item.title}
          />
        );
      })}
    </>
  );
};

export default AppProfile;
