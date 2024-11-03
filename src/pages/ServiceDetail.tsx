import React from 'react';
import { useParams } from 'react-router-dom';
import { useContentStore } from '../stores/contentStore';
import ReactMarkdown from 'react-markdown';

function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { content } = useContentStore();
  
  if (!serviceId || !content.services[serviceId as keyof typeof content.services]) {
    return <div>Service not found</div>;
  }

  const service = content.services[serviceId as keyof typeof content.services];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="aspect-[16/9] mb-8">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{service.description}</p>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{service.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;