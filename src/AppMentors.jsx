import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          let current; // 바꿀 멘토의 이름

          // 1) 바꿀 멘토의 이름이 존재할 경우
          person.mentors.map((item) => {
            if (item.name === prev) {
              current = prompt(`멘토의 이름을 무엇으로 바꿀까요?`);
              item.name = current;
              return person.mentors;
            }
          });
          setPerson((prev) => ({
            ...prev,
            mentors: person.mentors,
          }));

          // 2) 바꿀 멘토의 이름이 존재하지 않을 경우
          if (current === undefined) {
            alert('찾는 멘토의 이름이 없습니다.');
            return;
          }
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
