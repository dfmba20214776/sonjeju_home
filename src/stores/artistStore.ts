import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Artist {
  name: string;
  specialty: string;
  image: string;
  biography: string;
  history: string[];
}

interface ArtistState {
  artist: Artist;
  updateArtist: (artist: Partial<Artist>) => void;
}

const defaultArtist: Artist = {
  name: "김민지",
  specialty: "도자기 공예",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  biography: "전통 도자기의 현대적 재해석을 통해 새로운 가치를 창출하는 도예가입니다.\n\n흙이 가진 순수한 물성과 전통 기법을 현대적 감각으로 재해석하여, 실용성과 예술성을 동시에 추구합니다.",
  history: [
    "2020 - 개인전 '흙과 대화하다' (서울)",
    "2019 - 국제 도예 비엔날레 우수상",
    "2018 - 전국 공예 작가전 대상",
    "2017 - 홍익대학교 도예과 졸업",
    "2016 - 단체전 '현대 도예의 흐름' 참가"
  ]
};

export const useArtistStore = create<ArtistState>()(
  persist(
    (set) => ({
      artist: defaultArtist,
      updateArtist: (newArtist) => 
        set((state) => ({
          artist: { ...state.artist, ...newArtist }
        })),
    }),
    {
      name: 'artist-storage',
    }
  )
);