import React, { useEffect, useRef, useState } from 'react';

function Form({ children, onSubmit }) {
  // 'handleInvalid' is called on component's mount which is
  // not ideal if we want to only handle invalid on the
  // submit button's click, hence we use the 'mounted'
  // state to prevent the aforementioned problem.
  const [mounted, setMounted] = useState(false);

  // When the form is submitted without filling in any
  // of the inputs elements, the form should show error
  // messages related to them.
  //
  // But the problem is how to denote them to "be validated"?
  // The 'validate' CSS class denotes it hence we use
  // startsRef which tells the form to add the 'validate'
  // class if the inputs element don't have them yet.
  const startsRef = useRef({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') onSubmit(e);
  };

  const handleInvalid = (e) => {
    if (mounted && !startsRef.current[e.target.id]) {
      startsRef.current[e.target.id] = true;
      e.target.classList.add('validate');

      // this should be last in this if body, otherwise
      // it will lead to infinite calls.
      e.target.reportValidity();
    }

    // prevent showing the mini dialog
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} onInvalid={handleInvalid} data-testid="form">
      {children}
    </form>
  );
}

export default Form;
