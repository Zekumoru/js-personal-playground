import { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h1>Full name: {firstName + ' ' + lastName}</h1>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </>
  );
}

export default Person;
