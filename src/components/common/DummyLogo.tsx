import React, { useEffect, useRef } from 'react';

interface DummyLogoProps {
  companyName: string;
  size?: number;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}

const DummyLogo: React.FC<DummyLogoProps> = ({
  companyName,
  size = 200,
  className = '',
  backgroundColor = '#3B82F6',
  textColor = '#FFFFFF'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with higher resolution for better quality
    const scale = 2;
    canvas.width = size * scale;
    canvas.height = size * scale;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(scale, scale);

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, adjustBrightness(backgroundColor, -20));

    // Draw rounded rectangle background
    const radius = size * 0.15;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fill();

    // Add inner shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Draw inner circle for better contrast
    const innerRadius = size * 0.35;
    const centerX = size / 2;
    const centerY = size / 2;
    
    ctx.fillStyle = adjustBrightness(backgroundColor, 20);
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Reset shadow for text
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Get initials from company name
    const initials = companyName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 3);

    // Draw text with shadow
    ctx.fillStyle = textColor;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    
    const fontSize = Math.max(size * 0.3, 16);
    ctx.font = `bold ${fontSize}px 'Arial', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.fillText(initials, centerX, centerY);

    // Add subtle border
    ctx.strokeStyle = adjustBrightness(backgroundColor, 30);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.stroke();

  }, [companyName, size, backgroundColor, textColor]);

  // Helper function to adjust color brightness
  const adjustBrightness = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        width: size, 
        height: size,
        borderRadius: '15%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
      title={`${companyName} Logo`}
    />
  );
};

export default DummyLogo;
