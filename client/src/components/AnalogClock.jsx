import { useEffect, useState } from "react";
import "../styles/analogClock.css";

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
      <div className="hand minute" style={{ transform: `rotate(${minDeg}deg)` }} />
      <div className="hand second" style={{ transform: `rotate(${secDeg}deg)` }} />
      <div className="center-dot" />
    </div>
  );
}

export default AnalogClock;