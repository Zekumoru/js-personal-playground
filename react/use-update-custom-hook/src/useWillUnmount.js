/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

function useWillUnmount(callback) {
  useEffect(() => {
    return () => {
      if (typeof callback !== 'function') return;
      callback();
    };
  }, []);
}

export default useWillUnmount;
