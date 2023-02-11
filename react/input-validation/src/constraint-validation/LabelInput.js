import React, { useId } from 'react';
import useConstraintValidation from './useConstraintValidation';

function LabelInput({
  label,
  validate,
  className = '',
  requiredMessage = '',
  ...inputProps
}) {
  const id = useId();
  const [data, handlers] = useConstraintValidation({
    validate,
    requiredMessage,
  });

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={data.inputRef}
        id={id}
        className={`${className} ${data.aggressive ? 'validate' : ''}`}
        type="text"
        value={data.value}
        onChange={handlers.change}
        onInvalid={handlers.invalid}
        onBlur={handlers.blur}
        {...inputProps}
      />
      <div className="error-message">{data.errorMessage}</div>
    </div>
  );
}

export default LabelInput;
