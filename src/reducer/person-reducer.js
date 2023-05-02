export const psersonReducer = (person, action) => {
  console.log(person, action);
  switch (action.type) {
    case 'changed': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((person) =>
          person.name === prev ? { ...person, name: current } : person
        ),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((prev) => prev.name !== name),
      };
    }
    default:
      throw new Error(`${action.type}의 에러입니다.`);
  }
};
