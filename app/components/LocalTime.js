"use client";

import React, { useEffect, useState } from "react";

export default function LocalTime({ timeZone = "Asia/Kolkata" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return <>{time ? `${time} IST` : "00:00 IST"}</>;
}
