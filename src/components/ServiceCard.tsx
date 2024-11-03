import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <Link to={`/services/${id}`} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}