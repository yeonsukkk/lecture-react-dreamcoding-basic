import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  // 기존 멘토 변경
  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let current; // 바꿀 멘토의 이름

    if (prev === '' || prev === null) {
      // 기존 멘토의 이름이 없는 경우
      alert('멘토의 이름을 입력해주세요.');
      return;
    }

    const changed = person.mentors.filter((person) => person.name === prev); // 기존 멘토가 있는지 체크
    if (changed.length !== 0) {
      current = prompt('바꿀 멘토의 이름을 입력해주세요.');
      // updatePerson
      updatePerson((person) => {
        const mentor = person.mentors.find((m) => m.name === prev);
        mentor.name = current;
      });
    } else {
      alert('입력하신 멘토의 이름이 없습니다.');
    }
  };

  // 멘토 추가
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름은 무엇인가요?');
    if (name === '' || name === null) {
      // 추가할 멘토의 이름이 작성되지 않았을 경우
      alert('제대로 입력되지 않았습니다.\n다시 입력해주세요.');
      return;
    } else {
      let title = prompt('추가할 멘토의 직함은 무엇인가요?');
      if (title === '' || title === null) {
        // 멘토의 직함이 작성되지 않았을 경우
        alert('추가할 멘토의 이름을 작성해주세요');
        title = prompt('추가할 멘토의 직업은 무엇인가요?');
      }
      // updatePerson
      updatePerson((person) => {
        person.mentors.push({ name, title });
      });
    }
  };

  // 멘토 삭제
  const handleDelete = () => {
    let name = prompt('삭제할 멘토의 이름은 무엇인가요?');
    if (name === '' || name === null) {
      alert('삭제할 멘토의 이름을 작성해주세요.');
      return;
    } else {
      const deletedPerson = person.mentors?.filter(
        (item) => item.name === name
      );
      if (deletedPerson.length !== 0) {
        // updatePerson
        updatePerson((person) => {
          const idx = person.mentors.findIndex((m) => m.name === name);
          person.mentors.splice(idx, 1);
        });
      } else {
        alert('삭제하실 멘토의 이름이 존재하지 않습니다.');
      }
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
