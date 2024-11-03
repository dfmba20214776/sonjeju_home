import React from 'react';

function Store() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">스마트스토어</h1>
      <div className="aspect-[4/3] w-full">
        <iframe
          src="https://smartstore.naver.com"
          className="w-full h-full border-0 rounded-lg shadow-lg"
          title="Smartstore"
        />
      </div>
    </div>
  );
}

export default Store;