/**
 * Inventário das imagens em `public/` (`/1.jpeg` … `/74.jpeg`).
 * Categorias definidas pelo cliente; blocos repetidos no briefing entram na mesma categoria.
 */

export interface PhotoCategory {
  id: string;
  label: string;
}

export interface SitePhoto {
  path: string;
  alt: string;
  categoryId: string;
  isScreenshot: boolean;
}

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  { id: 'alvenaria', label: 'Alvenaria' },
  { id: 'canteiro-obras', label: 'Canteiro de obras' },
  { id: 'saneamento', label: 'Saneamento' },
  { id: 'escoamento-pluvial', label: 'Escoamento de água pluvial' },
  { id: 'asfalto', label: 'Asfalto' },
  { id: 'rede-esgoto', label: 'Rede para esgoto' },
  { id: 'intertravado', label: 'Intertravado' },
  { id: 'preparacao-solo', label: 'Preparação de solo' }
];

function rangePhotos(
  start: number,
  end: number,
  categoryId: string,
  label: string
): SitePhoto[] {
  const out: SitePhoto[] = [];
  for (let n = start; n <= end; n++) {
    out.push({
      path: `/${n}.jpeg`,
      alt: `${label} — foto ${n}`,
      categoryId,
      isScreenshot: false
    });
  }
  return out;
}

function singlePhoto(n: number, categoryId: string, label: string): SitePhoto {
  return {
    path: `/${n}.jpeg`,
    alt: `${label} — foto ${n}`,
    categoryId,
    isScreenshot: false
  };
}

/** Números soltos na mesma categoria (ex.: asfalto: 44, 57 e faixa 58–73). */
function photosByNumbers(nums: number[], categoryId: string, label: string): SitePhoto[] {
  return nums.map(n => ({
    path: `/${n}.jpeg`,
    alt: `${label} — foto ${n}`,
    categoryId,
    isScreenshot: false
  }));
}

export const SITE_PHOTOS: SitePhoto[] = [
  ...rangePhotos(1, 5, 'alvenaria', 'Alvenaria'),
  ...rangePhotos(6, 17, 'canteiro-obras', 'Canteiro de obras'),
  ...rangePhotos(18, 25, 'alvenaria', 'Alvenaria'),
  ...rangePhotos(26, 34, 'saneamento', 'Saneamento'),
  ...rangePhotos(35, 38, 'saneamento', 'Saneamento'),
  ...rangePhotos(39, 43, 'escoamento-pluvial', 'Escoamento de água pluvial'),
  ...photosByNumbers(
    [44, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73],
    'asfalto',
    'Asfalto'
  ),
  ...rangePhotos(45, 48, 'rede-esgoto', 'Rede para esgoto'),
  ...rangePhotos(49, 56, 'intertravado', 'Intertravado'),
  ...singlePhoto(74, 'preparacao-solo', 'Preparação de solo')
];

export const photosByCategory = (categoryId: string): SitePhoto[] =>
  SITE_PHOTOS.filter(p => p.categoryId === categoryId);

export const heroCandidatePhotos = (): SitePhoto[] =>
  SITE_PHOTOS.filter(p => !p.isScreenshot);

export const getPhotoByPath = (path: string): SitePhoto | undefined =>
  SITE_PHOTOS.find(p => p.path === path);
