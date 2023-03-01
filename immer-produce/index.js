const produce = (state, callback) => {
  const draft = structuredClone(state);
  callback(draft);
  return draft;
};

const state = {
  name: 'Name',
  surname: 'Surname',
  contact: {
    email: 'email@example.com',
    phone: '123 456 7890',
    website: 'example.com',
  },
};

const newState = produce(state, (draft) => {
  draft.contact.email = 'new@example.com';
});

console.log(newState);
