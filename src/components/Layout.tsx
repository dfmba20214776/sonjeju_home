import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import LoginButton from './LoginButton';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', path: '/' },
    { name: '공방소개', path: '/workshop' },
    { name: '서비스', path: '/services' },
    { name: '갤러리', path: '/gallery' },
    { name: '스마트스토어', path: '/store' },
    { name: '블로그', path: '/blog' },
    { name: '오시는 길', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">손재주공장</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                    } block px-3 py-2 rounded-md text-base font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">손재주공장</h3>
              <p className="text-gray-400">
                창의적인 손재주로 만드는 아름다운 작품들
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400">
                전화: 000-0000-0000<br />
                이메일: info@sonjejugongjan.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">팔로우</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400">&copy; 2024 손재주공장. All rights reserved.</p>
              <LoginButton />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;