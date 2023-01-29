import { useEffect, useRef } from 'react';

function useDidUpdate(callback) {
  const isMountRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }

    if (callback instanceof Function) callback();
  });
}

export default useDidUpdate;
