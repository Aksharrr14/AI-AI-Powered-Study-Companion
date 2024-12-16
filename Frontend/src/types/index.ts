export interface StudyMaterial {
  id: string;
  title: string;
  content: string;
  type: 'document' | 'video' | 'audio';
  tags: string[];
  createdAt: Date;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  materialId: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Progress {
  materialId: string;
  completed: boolean;
  quizScores: { [quizId: string]: number };
  lastAccessed: Date;
}