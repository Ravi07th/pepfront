import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeLeft: number; // in seconds
  onTimeUp: () => void;
  warningThreshold?: number; // seconds before warning
}

const Timer: React.FC<TimerProps> = ({ 
  timeLeft, 
  onTimeUp, 
  warningThreshold = 300 // 5 minutes default
}) => {
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      // Timer logic is handled by parent component
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  useEffect(() => {
    setIsWarning(timeLeft <= warningThreshold && timeLeft > 60);
    setIsCritical(timeLeft <= 60);
  }, [timeLeft, warningThreshold]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (isCritical) return 'text-red-600';
    if (isWarning) return 'text-yellow-600';
    return 'text-white';
  };

  const getTimerBgColor = () => {
    if (isCritical) return 'bg-red-100';
    if (isWarning) return 'bg-yellow-100';
    return 'bg-white bg-opacity-20';
  };

  return (
    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${getTimerBgColor()}`}>
      {isCritical && <AlertTriangle className="h-4 w-4 text-red-600 animate-pulse" />}
      {isWarning && !isCritical && <Clock className="h-4 w-4 text-yellow-600" />}
      {!isWarning && !isCritical && <Clock className="h-4 w-4 text-white" />}
      <span className={`font-mono font-bold text-lg ${getTimerColor()}`}>
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default Timer; 