import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useContentStore } from '../stores/contentStore';

function Contact() {
  const { content } = useContentStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">오시는 길</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">주소</h3>
                  <p className="text-gray-600">{content.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">전화</h3>
                  <p className="text-gray-600">{content.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">이메일</h3>
                  <p className="text-gray-600">{content.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">영업시간</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {content.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="aspect-video">
          {/* Replace with actual map embed code */}
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">지도가 표시될 영역</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;