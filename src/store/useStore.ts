// This file is deprecated. Use stores/contentStore.ts instead
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useContentStore } from '../stores/contentStore';

// Re-export contentStore to maintain compatibility
export const useStore = useContentStore;