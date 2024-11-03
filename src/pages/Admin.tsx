import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useContentStore } from '../stores/contentStore';

function Admin() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { content, updateContent } = useContentStore();
  
  const [formData, setFormData] = useState({
    workshop: {
      title: '',
      description: '',
      content: '',
      image: '',
    },
    artist: {
      name: '',
      specialty: '',
      biography: '',
      image: '',
    },
    services: {},
    contact: {
      address: '',
      phone: '',
      email: '',
      hours: '',
    },
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (content) {
      setFormData({
        workshop: content.workshop || formData.workshop,
        artist: content.artist || formData.artist,
        services: content.services || formData.services,
        contact: content.contact || formData.contact,
      });
    }
  }, [content]);

  const handleWorkshopChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      workshop: {
        ...prev.workshop,
        [field]: value,
      },
    }));
  };

  const handleArtistChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      artist: {
        ...prev.artist,
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    updateContent(formData);
    alert('변경사항이 저장되었습니다.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">관리자 페이지</h1>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          저장하기
        </button>
      </div>

      <div className="space-y-8">
        {/* 공방 소개 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">공방 소개</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">제목</label>
              <input
                type="text"
                value={formData.workshop.title}
                onChange={(e) => handleWorkshopChange('title', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">설명</label>
              <textarea
                value={formData.workshop.description}
                onChange={(e) => handleWorkshopChange('description', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">상세 내용</label>
              <textarea
                value={formData.workshop.content}
                onChange={(e) => handleWorkshopChange('content', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">이미지 URL</label>
              <input
                type="text"
                value={formData.workshop.image}
                onChange={(e) => handleWorkshopChange('image', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 작가 소개 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">작가 소개</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">이름</label>
              <input
                type="text"
                value={formData.artist.name}
                onChange={(e) => handleArtistChange('name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">전문 분야</label>
              <input
                type="text"
                value={formData.artist.specialty}
                onChange={(e) => handleArtistChange('specialty', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">약력</label>
              <textarea
                value={formData.artist.biography}
                onChange={(e) => handleArtistChange('biography', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={5}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">프로필 이미지 URL</label>
              <input
                type="text"
                value={formData.artist.image}
                onChange={(e) => handleArtistChange('image', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 연락처 정보 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">연락처 정보</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">주소</label>
              <input
                type="text"
                value={formData.contact.address}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact: { ...prev.contact, address: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">전화번호</label>
              <input
                type="text"
                value={formData.contact.phone}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact: { ...prev.contact, phone: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">이메일</label>
              <input
                type="email"
                value={formData.contact.email}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact: { ...prev.contact, email: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">영업시간</label>
              <textarea
                value={formData.contact.hours}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  contact: { ...prev.contact, hours: e.target.value }
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;