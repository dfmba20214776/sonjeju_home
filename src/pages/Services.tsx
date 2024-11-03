import React from 'react';
import { useContentStore } from '../stores/contentStore';
import ServiceCard from '../components/ServiceCard';
import EditButton from '../components/EditButton';
import EditModal from '../components/EditModal';

function Services() {
  const { content, updateContent } = useContentStore();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editData, setEditData] = React.useState({
    services: content?.services || {},
  });

  const services = content?.services || {};

  const handleSave = () => {
    updateContent({
      services: editData.services,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12">서비스</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(services).map(([key, service]) => (
          <ServiceCard
            key={key}
            id={key}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>

      <EditButton onClick={() => setIsEditing(true)} />

      <EditModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSave}
        title="서비스 편집"
      >
        <div className="space-y-6">
          {Object.entries(editData.services).map(([key, service]) => (
            <div key={key} className="p-4 border rounded-lg">
              <h4 className="font-medium mb-4">{service.title}</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">제목</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        [key]: { ...service, title: e.target.value }
                      }
                    }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">설명</label>
                  <textarea
                    value={service.description}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        [key]: { ...service, description: e.target.value }
                      }
                    }))}
                    rows={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">상세 내용</label>
                  <textarea
                    value={service.content}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        [key]: { ...service, content: e.target.value }
                      }
                    }))}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">이미지 URL</label>
                  <input
                    type="text"
                    value={service.image}
                    onChange={(e) => setEditData(prev => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        [key]: { ...service, image: e.target.value }
                      }
                    }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditModal>
    </div>
  );
}

export default Services;