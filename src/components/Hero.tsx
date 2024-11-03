import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <div 
      className="relative h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
}