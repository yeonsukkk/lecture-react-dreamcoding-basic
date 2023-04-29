import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  const changeMentorInfo = (info) => {
    const changeMentor = prompt(`멘토의 ${info}을 바꾸시겠습니까?`);
    console.log(changeMentor);
    if (changeMentor === '') {
      prompt(`${info}을 입력해주세요.\n멘토의 ${info}을 바꾸시겠습니까?`);
    }
    setPerson((prev) => ({
      ...prev,
      mentor: {
        name:
          info === '이름' && changeMentor !== ''
            ? changeMentor !== null
              ? changeMentor
              : prev.mentor.name
            : prev.mentor.name,
        title:
          info === '타이틀' && changeMentor !== ''
            ? changeMentor !== null
              ? changeMentor
              : prev.mentor.title
            : prev.mentor.title,
      },
    }));
  };
  return (
    <div>
      <h3>
        {person.name}는 {person.title}
      </h3>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button type='button' onClick={() => changeMentorInfo('이름')}>
        멘토 이름 바꾸기
      </button>
      <button type='button' onClick={() => changeMentorInfo('타이틀')}>
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
