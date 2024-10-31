"use client";
import React, { useEffect, useRef } from "react";

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available

    const context = canvas.getContext("2d");
    if (!context) return; // Ensure context is available

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Characters to use in the rain
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>?/[]{}|=+-_)(*&^%$#@!";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track the y position of each column
    const drops = Array(columns).fill(1);

    // Function to get a random character
    const getRandomChar = () => {
      return characters[Math.floor(Math.random() * characters.length)];
    };

    // Animation function
    const draw = () => {
      // Set semi-transparent black background for fade effect
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      context.fillStyle = "#0F0";
      context.font = `${fontSize}px monospace`;

      // Draw characters
      drops.forEach((y, i) => {
        // Generate random character
        const char = getRandomChar();

        // Draw the character
        const x = i * fontSize;
        context.fillText(char, x, y * fontSize);

        // Move drop down
        drops[i] = y * fontSize > canvas.height ? 0 : y + 1;

        // Randomly reset some drops to create varying lengths
        if (Math.random() > 0.98) {
          drops[i] = 0;
        }
      });
    };

    // Run animation
    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
    />
  );
};

export default DigitalRain;
