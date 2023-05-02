import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  // 기존 멘토 변경
  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let current; // 바꿀 멘토의 이름
    // 1) 바꿀 멘토의 이름이 존재할 경우
    person.mentors.map((item) => {
      if (item.name === prev) {
        current = prompt(`멘토의 이름을 무엇으로 바꿀까요?`);
        item.name = current;
      }
      return item;
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
  };

  // 멘토 추가
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름은 무엇인가요?');
    if (name === '') {
      // 추가할 멘토의 이름이 작성되지 않았을 경우
      alert('제대로 입력되지 않았습니다.\n다시 입력해주세요.');
      return;
    } else {
      let title = prompt('추가할 멘토의 직함은 무엇인가요?');
      if (title === '') {
        // 멘토의 직함이 작성되지 않았을 경우
        alert('추가할 멘토의 이름을 작성해주세요');
        title = prompt('추가할 멘토의 직업은 무엇인가요?');
      }
      // 추가할 멘토의 정보가 정상적으로 작성되었을 경우
      setPerson((prev) => ({
        ...prev,
        mentors: [...prev.mentors, { name, title }],
      }));
    }
  };

  // 멘토 삭제
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
    if (name === '') {
      alert('삭제할 멘토의 이름을 작성해주세요.');
      return;
    } else {
      const mentors = person.mentors?.filter((item) => item.name !== name);
      setPerson((prev) => ({
        ...prev,
        mentors,
      }));
    }
  };
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
      <button type='button' onClick={handleChange}>
        멘토의 이름을 바꾸기
      </button>
      <button type='button' onClick={handleAdd}>
        멘토 추가하기
      </button>
      <button type='button' onClick={handleDelete}>
        멘토 삭제하기
      </button>
    </div>
  );
}

let initialPerson = {
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
};
