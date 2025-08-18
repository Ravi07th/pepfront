import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const EscapeExitModal: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/quantitative-aptitude");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  useEffect(() => {
    if (countdown <= 0) setCountdown(0);
  }, [countdown]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-10 h-10 text-yellow-500 animate-bounce" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Test Ended</h2>
        <p className="text-gray-700 mb-4">
          The test has ended because you exited full screen mode (Escape key pressed).
        </p>
        <p className="text-gray-500 text-sm mb-2">
          Redirecting to Practice Section in <span className="font-bold text-blue-600">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default EscapeExitModal;