import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface ParticleEffectProps {
  count?: number;
  className?: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ count = 50, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Generate random color with a pastel/vibrant palette
  const getRandomColor = (): string => {
    const colors = [
      'rgba(255, 107, 157, 0.8)', // Pink
      'rgba(196, 69, 105, 0.8)',  // Deep pink
      'rgba(248, 181, 0, 0.8)',   // Yellow
      'rgba(10, 189, 227, 0.8)',  // Blue
      'rgba(95, 39, 205, 0.8)',   // Purple
      'rgba(255, 154, 139, 0.8)', // Salmon
      'rgba(168, 237, 234, 0.8)', // Teal
      'rgba(254, 214, 227, 0.8)', // Light pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Initialize particles
  const initParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: getRandomColor(),
      });
    }
    particlesRef.current = particles;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach((particle) => {
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }

      // Random slight changes in direction
      if (Math.random() > 0.95) {
        particle.speedX += (Math.random() - 0.5) * 0.1;
        particle.speedY += (Math.random() - 0.5) * 0.1;
      }
      
      // Cap max speed
      const maxSpeed = 1;
      particle.speedX = Math.max(Math.min(particle.speedX, maxSpeed), -maxSpeed);
      particle.speedY = Math.max(Math.min(particle.speedY, maxSpeed), -maxSpeed);
    });
    
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Reinitialize particles for new size
    initParticles(canvas);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize particles
    initParticles(canvas);
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-10 ${className}`}
    />
  );
};

export default ParticleEffect;