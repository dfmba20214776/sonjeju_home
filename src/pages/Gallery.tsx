import React from 'react';
import { Instagram } from 'lucide-react';

function Gallery() {
  const instagramUrl = 'http://www.instagram.com/sonjejufactory';
  const instagramHandle = 'sonjejufactory';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">갤러리</h1>
        <p className="text-gray-600 mb-4">
          더 많은 작품은 인스타그램에서 확인하실 수 있습니다.
        </p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <Instagram size={24} />
          <span>@{instagramHandle}</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* 예시 이미지들 */}
        {[
          'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
          'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61',
          'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9',
          'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9',
          'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
          'https://images.unsplash.com/photo-1610701596007-11502861dcfa',
          'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261',
          'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61',
          'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9',
        ].map((url, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={`${url}?auto=format&fit=crop&w=800&q=80`}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Instagram size={20} />
          <span>인스타그램에서 더 보기</span>
        </a>
      </div>
    </div>
  );
}

export default Gallery;