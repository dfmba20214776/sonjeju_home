import React, { useState } from 'react';
import { useContentStore } from '../stores/contentStore';
import EditButton from '../components/EditButton';
import EditModal from '../components/EditModal';

function Workshop() {
  const { content, updateContent } = useContentStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    workshop: content?.workshop || {},
    artist: content?.artist || {},
  });

  const workshop = content?.workshop || {
    title: '공방소개',
    description: '손재주공장은 전통 공예의 아름다움을 현대적 감각으로 재해석하여 새로운 가치를 창출하는 공예 공방입니다.',
    content: '우리는 전통 기법을 기반으로 현대적 디자인을 접목하여, 실용성과 예술성을 동시에 추구합니다.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=1470'
  };

  const handleSave = () => {
    updateContent({
      workshop: editData.workshop,
      artist: editData.artist,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-8">{workshop.title}</h1>
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-600 mb-6">{workshop.description}</p>
          <p className="text-lg text-gray-600 mb-6">{workshop.content}</p>
        </div>
        <div className="aspect-[21/9]">
          <img 
            src={workshop.image}
            alt="Workshop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">작가소개</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img 
                src={content?.artist?.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"}
                alt="Artist"
                className="h-full w-full object-cover md:h-full"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-indigo-600 font-semibold">
                {content?.artist?.specialty || "도자기 공예가"}
              </div>
              <h3 className="mt-2 text-2xl font-bold">{content?.artist?.name || "김민지"}</h3>
              <div className="mt-4 text-gray-600 space-y-4">
                {content?.artist?.biography?.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditButton onClick={() => setIsEditing(true)} />

      <EditModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSave}
        title="공방 소개 편집"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">공방 소개</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">제목</label>
                <input
                  type="text"
                  value={editData.workshop.title}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    workshop: { ...prev.workshop, title: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">설명</label>
                <textarea
                  value={editData.workshop.description}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    workshop: { ...prev.workshop, description: e.target.value }
                  }))}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">상세 내용</label>
                <textarea
                  value={editData.workshop.content}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    workshop: { ...prev.workshop, content: e.target.value }
                  }))}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">이미지 URL</label>
                <input
                  type="text"
                  value={editData.workshop.image}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    workshop: { ...prev.workshop, image: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">작가 소개</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">이름</label>
                <input
                  type="text"
                  value={editData.artist.name}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    artist: { ...prev.artist, name: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">전문 분야</label>
                <input
                  type="text"
                  value={editData.artist.specialty}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    artist: { ...prev.artist, specialty: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">약력</label>
                <textarea
                  value={editData.artist.biography}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    artist: { ...prev.artist, biography: e.target.value }
                  }))}
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">프로필 이미지 URL</label>
                <input
                  type="text"
                  value={editData.artist.image}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    artist: { ...prev.artist, image: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </EditModal>
    </div>
  );
}

export default Workshop;