import React from 'react';
import { useArtistStore } from '../stores/artistStore';

function Artists() {
  const artist = useArtistStore((state) => state.artist);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">작가 소개</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/3">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="h-full w-full object-cover md:h-full"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <div className="uppercase tracking-wide text-indigo-600 font-semibold">
              {artist.specialty}
            </div>
            <h2 className="mt-2 text-3xl font-bold">{artist.name}</h2>
            <div className="mt-4 text-gray-600 space-y-4">
              {artist.biography.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">주요 이력</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {artist.history.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;