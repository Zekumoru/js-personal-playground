import { useEffect, useState } from 'react';

function ClockUsingHooks(props) {
  const [time, setTime] = useState(new Date());

  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(changeTime, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="ClockUsingHooks clock">
      <h1>Clock Using Hooks</h1>
      <h2>It is currently {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ClockUsingHooks;
