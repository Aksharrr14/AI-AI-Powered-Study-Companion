import { create } from 'zustand';
import { StudyMaterial, Quiz, Progress } from '../types';

interface StoreState {
  materials: StudyMaterial[];
  quizzes: Quiz[];
  progress: { [materialId: string]: Progress };
  addMaterial: (material: StudyMaterial) => void;
  addQuiz: (quiz: Quiz) => void;
  updateProgress: (materialId: string, progress: Progress) => void;
}

export const useStore = create<StoreState>((set) => ({
  materials: [],
  quizzes: [],
  progress: {},
  
  addMaterial: (material) =>
    set((state) => ({
      materials: [...state.materials, material],
    })),
    
  addQuiz: (quiz) =>
    set((state) => ({
      quizzes: [...state.quizzes, quiz],
    })),
    
  updateProgress: (materialId, progress) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [materialId]: progress,
      },
    })),
}));