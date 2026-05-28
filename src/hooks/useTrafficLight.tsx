import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  // Countdown Effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCountdown(5);
    switch (light) {
      case 'red':
        setLight('green');
        return;

      case 'yellow':
        setLight('red');
        return;
      case 'green':
        setLight('yellow');
        return;
    }
  }, [countdown, light]);

  return {
    colors: colors,
    light: light,
    countdown: countdown,
  };
};
