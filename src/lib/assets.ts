/** Prefix public asset paths with Vite's base (needed for GitHub Pages). */
export function asset(path: string) {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}
