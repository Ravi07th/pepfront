import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  onTimeUp: () => void;
  warningThreshold?: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft: initialTime, onTimeUp, warningThreshold = 600 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const isWarning = timeLeft <= warningThreshold;
  const isCritical = timeLeft <= 60;

  return (
    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-semibold transition-all duration-200 ${
      isCritical 
        ? 'bg-red-100 text-red-700 animate-pulse' 
        : isWarning 
          ? 'bg-amber-100 text-amber-700' 
          : 'bg-blue-100 text-blue-700'
    }`}>
      {isCritical ? (
        <AlertTriangle className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default Timer;