import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Time = ({ updateIntervalMs = 500, paused = false }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setTime(new Date());
      console.log('Updating...');
    }, updateIntervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [updateIntervalMs, paused]);

  return <h1>{time.toLocaleTimeString()}</h1>;
};

Time.propTypes = {
  updateIntervalMs: PropTypes.number,
  paused: PropTypes.bool,
};

export default Time;
