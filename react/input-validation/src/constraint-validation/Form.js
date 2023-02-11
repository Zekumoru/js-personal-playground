import React, { useEffect, useRef, useState } from 'react';

function Form({ children }) {
  const [mounted, setMounted] = useState(false);
  const firstRef = useRef({ first: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    console.log('Submitted!');
    console.dir(e.target);
    e.preventDefault();
  };

  const handleInvalid = (e) => {
    if (mounted && firstRef.current.first) {
      firstRef.current.first = false;
      e.target.classList.add('validate');

      // this should be last in this if body, otherwise
      // it will lead to infinite calls.
      e.target.reportValidity();
    }

    // prevent showing the mini dialog
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
      {children}
    </form>
  );
}

export default Form;
