
export interface Question {
  id: number;
  text: string;
  options: string[];
}

export type AppView = 'LANDING' | 'QUIZ' | 'LOADING' | 'RESULT' | 'MAIN_SITE';

export interface GalleryImage {
  url: string;
  alt: string;
}
