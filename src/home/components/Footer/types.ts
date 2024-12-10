import { ComponentType } from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
} 