// @ts-nocheck
import React from 'react';

export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'info'
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'error'
  | 'neutral'
  | 'ghost' 
  | 'outline' 
  | 'gradient'
  | 'google'
  | 'github'
  | 'discord';

export type Size = 'sm' | 'md' | 'lg';

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface NavItem {
  title: string;
  path: string;
  section: 'comenzando' | 'componentes';
}