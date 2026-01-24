
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  originalX: number;
  originalY: number;
  density: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150);

      const primaryColor = theme === "dark" ? "rgba(156, 85, 237," : "rgba(100, 50, 180,";
      const secondaryColor = theme === "dark" ? "rgba(85, 237, 199," : "rgba(40, 150, 130,";

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = Math.random() > 0.5 ? primaryColor : secondaryColor;

        particles.push({
          x,
          y,
          size,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          color,
          originalX: x,
          originalY: y,
          density: (Math.random() * 30) + 1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update mouse interaction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Distance from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse Repulsion / Attraction
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;

        // Return to original speed if far
        if (distance < mouse.radius) {
          // Repel
          const directionX = forceDirectionX * force * p.density;
          const directionY = forceDirectionY * force * p.density;
          p.x -= directionX;
          p.y -= directionY;
        } else {
          // Normal movement
          if (p.x !== p.originalX) {
            // Determine movement
            p.x += p.speedX;
            p.y += p.speedY;
          }
        }

        // Boundary Check & Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw Particle
        ctx.fillStyle = `${p.color} ${theme === 'dark' ? '0.8' : '0.6'})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

          if (dist < 120) {
            ctx.strokeStyle = `${p.color} ${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none"
    />
  );
}
