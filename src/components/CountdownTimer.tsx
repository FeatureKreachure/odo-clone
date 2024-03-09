"use client";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const difference = midnight.getTime() - now.getTime();

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  }

  return (
    <div className="">
      <p className="flex flex-col text-center text-sm text-[#D4DCE2]">Deals Expire In:</p>
      <p className="text-4xl">{`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</p>
    </div>
  );
};

export default CountdownTimer;
