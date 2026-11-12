// Every visible text lives here. Add a key to `en` first; TypeScript then
// flags any locale that is missing it.

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  'meta.title': 'Antonio Beltrán | Frontend Developer',
  'meta.description':
    'Portfolio of Antonio Beltrán, a self-taught frontend developer building clean, accessible and responsive web interfaces.',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'lang.switch': 'Ver en español',
  'hero.role': 'Frontend Developer',
  'hero.contact': 'Contact me',
};

const es: Record<keyof typeof en, string> = {
  'meta.title': 'Antonio Beltrán | Desarrollador Frontend',
  'meta.description':
    'Portafolio de Antonio Beltrán, desarrollador frontend autodidacta que construye interfaces web limpias, accesibles y responsivas.',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.skills': 'Habilidades',
  'nav.contact': 'Contacto',
  'lang.switch': 'View in English',
  'hero.role': 'Desarrollador Frontend',
  'hero.contact': 'Contáctame',
};

export const ui = { en, es } as const;

export type UiKey = keyof typeof en;

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}
