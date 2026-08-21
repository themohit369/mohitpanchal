import { useEffect, useState } from "react";

/**
 * Returns the current time in India (Asia/Kolkata timezone).
 */
export function getIndiaTime(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
}

/**
 * Hook that provides the current India time, updating every second.
 * Automatically cleans up the interval on unmount.
 */
export function useIndiaTime(): string {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(getIndiaTime());

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return time;
}