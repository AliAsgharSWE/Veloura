export interface HeroSlide {
  id: string;
  title: string;
  price: string;
  buttonText: string;
  image: string;
  alt: string;
  description?: string;
  category?: string;
  featured?: boolean;
}

export interface HeroSectionProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showProgressBar?: boolean;
  className?: string;
}

export interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export type SlideDirection = 'next' | 'previous';

export interface SlideTransition {
  duration: number;
  easing: string;
  type: 'fade' | 'slide' | 'zoom';
}