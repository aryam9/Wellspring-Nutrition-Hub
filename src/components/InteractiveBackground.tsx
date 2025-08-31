import { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 50, y: 50 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(var(--health-primary) / 0.3) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * 2 - 100}px, ${mousePosition.y * 2 - 100}px) scale(${isHovering ? 1.2 : 1})`,
          left: '10%',
          top: '20%',
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full opacity-15 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(var(--health-success) / 0.4) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * -1.5 + 75}px, ${mousePosition.y * 1.8 - 90}px) scale(${isHovering ? 1.1 : 1})`,
          right: '15%',
          top: '30%',
        }}
      />

      <div 
        className="absolute w-64 h-64 rounded-full opacity-25 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, hsl(var(--health-secondary) / 0.3) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x * 1.2 - 60}px, ${mousePosition.y * -1.3 + 65}px) scale(${isHovering ? 1.3 : 1})`,
          left: '50%',
          bottom: '25%',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-health-primary/10 transition-all duration-700 ease-out"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            transform: `translate(${mousePosition.x * particle.speed - 50}px, ${mousePosition.y * particle.speed - 50}px) scale(${isHovering ? 1.5 : 1})`,
            opacity: isHovering ? 0.6 : 0.3,
          }}
        />
      ))}

      {/* Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-5 transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--health-primary)) 1px, transparent 1px),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, hsl(var(--health-success)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 75px 75px',
          transform: `translate(${mousePosition.x * 0.5 - 25}px, ${mousePosition.y * 0.5 - 25}px)`,
        }}
      />

      {/* Wave Effect */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            transparent 0deg, 
            hsl(var(--health-primary) / 0.05) 45deg, 
            transparent 90deg, 
            hsl(var(--health-success) / 0.05) 180deg, 
            transparent 270deg)`,
          opacity: isHovering ? 1 : 0.5,
        }}
      />
    </div>
  );
};

export default InteractiveBackground;