import { useState, useEffect } from 'react';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
}

export function useCountdown(endTimeStr: string): CountdownResult {
  const [timeLeft, setTimeLeft] = useState<CountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const endTime = new Date(endTimeStr).getTime();

    function updateTimeLeft() {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }

    updateTimeLeft();
    const timer = setInterval(updateTimeLeft, 1000 * 60); // 每分钟更新一次

    return () => clearInterval(timer);
  }, [endTimeStr]);

  return timeLeft;
} 