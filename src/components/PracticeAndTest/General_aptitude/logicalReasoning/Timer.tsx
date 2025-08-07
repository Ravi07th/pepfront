import * as React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  onTimeUp: () => void;
  isActive: boolean;
  onTimeUpdate?: (remainingTime: number) => void;
}

const Timer: React.FC<TimerProps> = ({ timeLeft, onTimeUp, isActive, onTimeUpdate }) => {
  const [displayTime, setDisplayTime] = React.useState(timeLeft);

  React.useEffect(() => {
    setDisplayTime(timeLeft);
  }, [timeLeft]);

  React.useEffect(() => {
    if (!isActive || displayTime <= 0) {
      if (displayTime <= 0) {
        onTimeUp();
      }
      return;
    }

    const interval = setInterval(() => {
      setDisplayTime(prev => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        const newTime = prev - 1;
        onTimeUpdate?.(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, displayTime, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (displayTime <= 300) return 'text-red-600'; // 5 minutes or less
    if (displayTime <= 600) return 'text-yellow-600'; // 10 minutes or less
    return 'text-gray-600';
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md">
      <Clock className="w-4 h-4 text-gray-600" />
      <span className={`font-mono font-semibold ${getTimeColor()}`}>
        {formatTime(displayTime)}
      </span>
    </div>
  );
};

export default Timer; 