import React, { useEffect, useId, useRef, useState } from 'react';

function LabelInput({
  label,
  validate,
  className = '',
  requiredMessage = '',
  ...inputProps
}) {
  const id = useId();
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [aggressive, setAggressive] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    setErrorMessage('');

    if (typeof validate === 'function') {
      e.target.setCustomValidity(validate(e.target.value));
    }

    e.target.reportValidity();
  };

  const handleInvalid = (e) => {
    if (!e.target.classList.contains('validate')) return;
    setErrorMessage(
      e.target.value === '' ? requiredMessage : e.target.validationMessage
    );
  };

  const handleBlur = (e) => {
    if (!aggressive || requiredMessage !== '') {
      setAggressive(true);
    }
  };

  useEffect(() => {
    // this fixes the error where focusing on the input then
    // focusing out, will not show the error that the input is required
    // since aggressive inside handleBlur is not set to true yet
    // hence when calling reportValidity from there, handleInvalid
    // will still have the aggressive to false
    inputRef.current.reportValidity();
  }, [aggressive]);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        id={id}
        className={`${className} ${aggressive ? 'validate' : ''}`}
        type="text"
        value={value}
        onChange={handleChange}
        onInvalid={handleInvalid}
        onBlur={handleBlur}
        {...inputProps}
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
}

export default LabelInput;
