import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Service {
  title: string;
  description: string;
  image: string;
  content?: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface Artist {
  name: string;
  specialty: string;
  image: string;
  biography: string;
}

export interface Workshop {
  title: string;
  description: string;
  content: string;
  image: string;
}

export interface Content {
  mainHero: Hero;
  services: Record<string, Service>;
  workshop: Workshop;
  artist: Artist;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
}

const defaultContent: Content = {
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
      content: '다양한 공예 클래스를 통해 새로운 기술을 배워보세요. 초보자부터 전문가까지 모든 수준에 맞는 클래스를 제공합니다.',
    },
    customOrder: {
      title: '주문제작',
      description: '고객님의 아이디어를 특별한 작품으로 만들어드립니다',
      image: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&q=80&w=1470',
      content: '고객님의 아이디어를 특별한 작품으로 만들어드립니다. 맞춤형 디자인과 제작 서비스를 제공합니다.',
    },
    outreach: {
      title: '외부 출강',
      description: '기업 및 단체를 위한 맞춤형 공예 프로그램을 제공합니다',
      image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1469',
      content: '기업 및 단체를 위한 맞춤형 공예 프로그램을 제공합니다. 팀빌딩과 교육을 위한 특별한 경험을 제공합니다.',
    },
  },
  workshop: {
    title: '공방소개',
    description: '손재주공장은 전통 공예의 아름다움을 현대적 감각으로 재해석하여 새로운 가치를 창출하는 공예 공방입니다.',
    content: '우리는 전통 기법을 기반으로 현대적 디자인을 접목하여, 실용성과 예술성을 동시에 추구합니다.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=1470',
  },
  artist: {
    name: '김민지',
    specialty: '도자기 공예가',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    biography: '전통 도자기의 현대적 재해석을 통해 새로운 가치를 창출하는 도예가입니다.\n\n흙이 가진 순수한 물성과 전통 기법을 현대적 감각으로 재해석하여, 실용성과 예술성을 동시에 추구합니다.',
  },
  contact: {
    address: '서울특별시 강남구 테헤란로 123',
    phone: '02-123-4567',
    email: 'contact@sonjaeju.com',
    hours: '평일: 10:00 - 19:00\n토요일: 10:00 - 17:00\n일요일 및 공휴일: 휴무',
  },
};

interface ContentStore {
  content: Content;
  isLoading: boolean;
  updateContent: (newContent: Partial<Content>) => void;
}

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      content: defaultContent,
      isLoading: false,
      updateContent: (newContent) =>
        set((state) => ({
          content: {
            ...state.content,
            ...newContent,
          },
        })),
    }),
    {
      name: 'content-storage',
      getStorage: () => localStorage,
    }
  )
);