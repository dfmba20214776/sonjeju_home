import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import EditButton from '../components/EditButton';
import EditModal from '../components/EditModal';
import { useContentStore } from '../stores/contentStore';

export default function Home() {
  const { content, updateContent } = useContentStore();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editData, setEditData] = React.useState({
    services: {},
    mainHero: {
      title: '',
      subtitle: '',
      backgroundImage: '',
    },
  });

  React.useEffect(() => {
    if (content) {
      setEditData({
        services: content.services || {},
        mainHero: content.mainHero || {
          title: '',
          subtitle: '',
          backgroundImage: '',
        },
      });
    }
  }, [content]);

  const handleSave = () => {
    updateContent({
      services: editData.services,
      mainHero: editData.mainHero,
    });
    setIsEditing(false);
  };

  // 최근 갤러리 이미지 (예시 데이터)
  const galleryImages = [
    'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
    'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61',
    'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9',
    'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9',
    'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa',
  ].map(url => `${url}?auto=format&fit=crop&w=800&q=80`);

  // 기본값 설정
  const defaultContent = {
    mainHero: {
      title: '손재주공장',
      subtitle: '당신의 창의력을 현실로 만듭니다',
      backgroundImage: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=1470',
    },
    services: {
      classes: {
        title: '클래스',
        description: '다양한 공예 클래스를 통해 새로운 기술을 배워보세요',
        image: 'https://images.unsplash.com/photo-1544147804-3d84578cd6b5?auto=format&fit=crop&q=80&w=1470',
      },
      customOrder: {
        title: '주문제작',
        description: '고객님의 아이디어를 특별한 작품으로 만들어드립니다',
        image: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&q=80&w=1470',
      },
      outreach: {
        title: '외부 출강',
        description: '기업 및 단체를 위한 맞춤형 공예 프로그램을 제공합니다',
        image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1469',
      },
    },
    contact: {
      address: '서울특별시 강남구 테헤란로 123',
      phone: '02-123-4567',
      email: 'contact@sonjaeju.com',
      hours: '평일: 10:00 - 19:00\n토요일: 10:00 - 17:00\n일요일 및 공휴일: 휴무',
    },
  };

  const currentContent = {
    mainHero: content?.mainHero || defaultContent.mainHero,
    services: content?.services || defaultContent.services,
    contact: content?.contact || defaultContent.contact,
  };

  return (
    <div className="min-h-screen">
      <Hero
        title={currentContent.mainHero.title}
        subtitle={currentContent.mainHero.subtitle}
        backgroundImage={currentContent.mainHero.backgroundImage}
      />
      
      {/* 서비스 섹션 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">서비스</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(currentContent.services).map(([key, service]) => (
            <ServiceCard
              key={key}
              id={key}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>

      {/* 갤러리 섹션 */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">최근 작품</h2>
          <Link to="/gallery" className="text-indigo-600 hover:text-indigo-700">
            더 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 오시는 길 섹션 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">오시는 길</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">주소</h3>
                  <p className="text-gray-600">{currentContent.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">전화</h3>
                  <p className="text-gray-600">{currentContent.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">이메일</h3>
                  <p className="text-gray-600">{currentContent.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">영업시간</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {currentContent.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.452736876319!2d127.02876231531005!3d37.49942797981126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15857ce38dd%3A0xac87641577138d8!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TroZwyNuq4uCAxMDc!5e0!3m2!1sko!2skr!4v1635000000000!5m2!1sko!2skr"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <EditButton onClick={() => setIsEditing(true)} />

      <EditModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSave}
        title="메인 페이지 편집"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">메인 히어로</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">제목</label>
                <input
                  type="text"
                  value={editData.mainHero.title}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    mainHero: { ...prev.mainHero, title: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">부제목</label>
                <input
                  type="text"
                  value={editData.mainHero.subtitle}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    mainHero: { ...prev.mainHero, subtitle: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">배경 이미지 URL</label>
                <input
                  type="text"
                  value={editData.mainHero.backgroundImage}
                  onChange={(e) => setEditData(prev => ({
                    ...prev,
                    mainHero: { ...prev.mainHero, backgroundImage: e.target.value }
                  }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">서비스</h3>
            {Object.entries(editData.services || {}).map(([key, service]) => (
              <div key={key} className="mb-8 p-4 border rounded-lg">
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
        </div>
      </EditModal>
    </div>
  );
}