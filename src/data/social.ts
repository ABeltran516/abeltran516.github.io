import type { ImageMetadata } from 'astro';
import githubIcon from '../assets/icons/github-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import gmailIcon from '../assets/icons/gmail-icon.svg';

export interface SocialLink {
  name: string;
  href: string;
  icon: ImageMetadata;
  external: boolean;
}

// Used by the Hero now, and by Contact and Footer later.
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/ABeltran516', icon: githubIcon, external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abeltran516/', icon: linkedinIcon, external: true },
  { name: 'Email', href: 'mailto:beltran1606@gmail.com', icon: gmailIcon, external: false },
];
