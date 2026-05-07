
export * from './components/MaguitoUI';
export * from './types';

// Utility function
export const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(' ');
