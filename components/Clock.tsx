'use client';

import { useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',    
  });

  const formattedDate = time.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="text-sm text-white leading-tight hidden lg:flex flex-col items-end gap-1">      
      <div className="text-xs capitalize flex gap-2">{formattedDate}<FaRegCalendarAlt/></div>
      <div className='flex gap-2'>{formattedTime}<FaRegClock/></div>
    </article>
  );
}
