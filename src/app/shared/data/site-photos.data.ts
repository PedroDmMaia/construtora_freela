/**
 * Inventário das imagens em `public/` (servidas na raiz do site: `/arquivo.jpeg`).
 * Categorias definidas pelo cliente.
 * `isScreenshot` marca capturas da galeria do celular (UI visível). Evitar em hero e destaques.
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
  { id: 'asfalto', label: 'Asfalto' },
  { id: 'rede-esgoto', label: 'Pavimentação de rede de esgoto' },
  { id: 'alvenaria', label: 'Alvenaria' },
  { id: 'fechamento-canteiro', label: 'Fechamento de canteiro de obras' }
];

export const SITE_PHOTOS: SitePhoto[] = [
  // ── ASFALTO ──────────────────────────────────────────────────────────────
  { path: '/26.jpeg', alt: 'Equipe pavimentando rua com asfalto', categoryId: 'asfalto', isScreenshot: true },
  { path: '/27.jpeg', alt: 'Via recém-pavimentada com asfalto', categoryId: 'asfalto', isScreenshot: true },
  { path: '/28.jpeg', alt: 'Pavimentação asfáltica com rolo compactador', categoryId: 'asfalto', isScreenshot: true },
  { path: '/29.jpeg', alt: 'Trabalhadores espalhando asfalto em via', categoryId: 'asfalto', isScreenshot: true },
  { path: '/30.jpeg', alt: 'Pavimentação noturna com rolo e equipe', categoryId: 'asfalto', isScreenshot: true },
  { path: '/31.jpeg', alt: 'Pavimentação em rua com declive', categoryId: 'asfalto', isScreenshot: true },

  // ── PAVIMENTAÇÃO DE REDE DE ESGOTO ───────────────────────────────────────
  { path: '/1.jpeg', alt: 'Retroescavadeira abrindo vala em área de obra', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/4.jpeg', alt: 'Vala para rede de esgoto com retroescavadeira e fita de isolamento', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/5.jpeg', alt: 'Vala profunda para implantação de rede de esgoto', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/7.jpeg', alt: 'Retroescavadeira e caminhão basculante escavando rede', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/8.jpeg', alt: 'Retroescavadeira carregando caminhão com solo de escavação', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/9.jpeg', alt: 'Vala longa de rede de esgoto com retroescavadeira', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/14.jpeg', alt: 'Operário cavando fundação de rede próximo a curso d\'água', categoryId: 'rede-esgoto', isScreenshot: false },
  { path: '/15.jpeg', alt: 'Trabalhador abrindo vala em calçamento junto à margem do rio', categoryId: 'rede-esgoto', isScreenshot: false },
  {
    path: '/obra-retroescavadeira-rio.jpeg',
    alt: 'Retroescavadeira implantando rede de esgoto próximo a rio',
    categoryId: 'rede-esgoto',
    isScreenshot: false
  },

  // ── ALVENARIA ─────────────────────────────────────────────────────────────
  { path: '/2.jpeg', alt: 'Retroescavadeira em canteiro de obra de alvenaria', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/3.jpeg', alt: 'Fundação com ferragem e retroescavadeira em obra', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/6.jpeg', alt: 'Pilar de fundação com ferragem em canteiro', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/10.jpeg', alt: 'Pilares de concreto com ferragem em implantação', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/11.jpeg', alt: 'Estrutura circular de concreto com ferragem', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/12.jpeg', alt: 'Colunas de concreto em andamento de obra', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/13.jpeg', alt: 'Retroescavadeira trabalhando ao lado de pilar com ferragem', categoryId: 'alvenaria', isScreenshot: false },
  { path: '/16.jpeg', alt: 'Operário com martelete demolidor em obra de alvenaria', categoryId: 'alvenaria', isScreenshot: false },

  // ── FECHAMENTO DE CANTEIRO DE OBRAS ───────────────────────────────────────
  { path: '/17.jpeg', alt: 'Equipe instalando chapas de zinco para fechamento de canteiro', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/18.jpeg', alt: 'Operário medindo no canteiro com tapume de chapas', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/19.jpeg', alt: 'Canteiro com tapume de chapas metálicas instalado', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/20.jpeg', alt: 'Caminhão transportando container para fechamento de canteiro', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/21.jpeg', alt: 'Caminhão munck içando container de fechamento', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/23.jpeg', alt: 'Guindaste posicionando container COMPASS em canteiro', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/24.jpeg', alt: 'Içamento de container para fechamento de canteiro de obras', categoryId: 'fechamento-canteiro', isScreenshot: false },
  { path: '/25.jpeg', alt: 'Estacas e chapas de zinco na preparação de fechamento', categoryId: 'fechamento-canteiro', isScreenshot: false }
];

export const photosByCategory = (categoryId: string): SitePhoto[] =>
  SITE_PHOTOS.filter(p => p.categoryId === categoryId);

/** Fotos adequadas para hero e banners largos (sem UI de celular). */
export const heroCandidatePhotos = (): SitePhoto[] =>
  SITE_PHOTOS.filter(p => !p.isScreenshot);

export const getPhotoByPath = (path: string): SitePhoto | undefined =>
  SITE_PHOTOS.find(p => p.path === path);
