import { useEffect, useState } from "react";

function useClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return now;
}

export default useClock;
