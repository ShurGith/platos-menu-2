// CountdownTimer.jsx
import { useState, useEffect } from 'react';

/**
 * CountdownTimer component that counts down from a specified number of seconds
 * and executes a callback function when the timer reaches zero.
 * 
 * @param {Object} props - Component props
 * @param {number} props.seconds - The number of seconds to count down from
 * @param {Function} props.onComplete - Function to call when the timer reaches zero
 * @param {string} [props.className] - Optional CSS class name for styling
 * @returns {JSX.Element} - The rendered component
 */
function CountdownTimer({ seconds, onComplete, className = '' }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // Reset timer if seconds prop changes
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    // Don't start the timer if seconds is 0 or negative
    if (timeLeft <= 0) {
      onComplete && onComplete();
      return;
    }

    // Set up the interval
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          // Clear the interval and call the onComplete callback
          clearInterval(intervalId);
          onComplete && onComplete();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    // Clean up the interval on component unmount or when timeLeft changes
    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);

  return (
    <span className={className}>
      {timeLeft}
    </span>
  );
}

export default CountdownTimer;
