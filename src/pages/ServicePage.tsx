import React from 'react';
import { useParams } from 'react-router-dom';
import { useContentStore } from '../stores/contentStore';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { content } = useContentStore();
  
  if (!serviceId || !content.services[serviceId as keyof typeof content.services]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">서비스를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const service = content.services[serviceId as keyof typeof content.services];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          className="h-[40vh] bg-cover bg-center rounded-lg mb-8"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
        <div className="prose">
          {service.content ? (
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          ) : (
            <p className="text-lg text-gray-600">{service.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}