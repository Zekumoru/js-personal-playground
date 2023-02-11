import React, { useId, useState } from 'react';

function LabelInput({ label, placeholder, validate, mandatory = false }) {
  const id = useId();
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [aggressive, setAggressive] = useState(false);

  const validateErrorMessage = (value) => {
    if (!mandatory && value === '') return '';
    return validate(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    if (aggressive) {
      setErrorMessage(() => validateErrorMessage(e.target.value));
    }
  };

  const handleBlur = (e) => {
    setErrorMessage(() => validateErrorMessage(e.target.value));
    if (!aggressive) setAggressive(true);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
}

export default LabelInput;
