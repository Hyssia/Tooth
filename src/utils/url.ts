// Legger `base` (f.eks. /Tooth) foran interne stier, slik at lenker
// fungerer både på GitHub Pages (under /Tooth) og med eget domene (base = /).
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${base}${path}` || '/';
};
