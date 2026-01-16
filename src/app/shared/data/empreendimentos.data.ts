export interface Empreendimento {
  id: number;
  slug: string;
  name: string;
  location: string;
  neighborhood: string;
  city: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  status: string;
  area: string;
  rooms: string;
  suites: string;
  parking: string;
  price: string;
  featured: boolean;
  amenities: string[];
  deliveryDate: string;
}

export const EMPREENDIMENTOS: Empreendimento[] = [
  {
    id: 1,
    slug: 'reserva-jardins',
    name: 'Reserva Jardins',
    location: 'Jardins, São Paulo',
    neighborhood: 'Jardins',
    city: 'São Paulo',
    description: 'Apartamentos de alto padrão em uma das regiões mais nobres da cidade, com vista privilegiada e acabamentos premium.',
    fullDescription: 'O Reserva Jardins representa o ápice do luxo residencial em São Paulo. Localizado no coração dos Jardins, este empreendimento exclusivo oferece apartamentos espaçosos com acabamentos de altíssima qualidade, vista panorâmica para a cidade e uma infraestrutura completa de lazer. Cada detalhe foi pensado para proporcionar uma experiência de moradia incomparável.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
    ],
    status: 'Lançamento',
    area: '180m² a 320m²',
    rooms: '3 a 4 quartos',
    suites: '3 suítes',
    parking: '3 a 4 vagas',
    price: 'A partir de R$ 3.500.000',
    featured: true,
    amenities: ['Piscina aquecida', 'Academia completa', 'Spa', 'Salão de festas', 'Playground', 'Quadra poliesportiva', 'Churrasqueira', 'Coworking'],
    deliveryDate: 'Dezembro 2027'
  },
  {
    id: 2,
    slug: 'vista-paulista',
    name: 'Vista Paulista',
    location: 'Bela Vista, São Paulo',
    neighborhood: 'Bela Vista',
    city: 'São Paulo',
    description: 'Sofisticação e praticidade no coração da cidade, com design contemporâneo e infraestrutura completa.',
    fullDescription: 'O Vista Paulista é a escolha perfeita para quem busca morar no centro de São Paulo com todo conforto e sofisticação. Com design contemporâneo assinado por renomados arquitetos, o empreendimento oferece plantas inteligentes e uma vista deslumbrante para a Avenida Paulista.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ],
    status: 'Em obras',
    area: '95m² a 145m²',
    rooms: '2 a 3 quartos',
    suites: '2 suítes',
    parking: '2 vagas',
    price: 'A partir de R$ 1.800.000',
    featured: false,
    amenities: ['Piscina', 'Academia', 'Salão de festas', 'Brinquedoteca', 'Pet place', 'Coworking'],
    deliveryDate: 'Junho 2026'
  },
  {
    id: 3,
    slug: 'parque-das-artes',
    name: 'Parque das Artes',
    location: 'Vila Nova Conceição, São Paulo',
    neighborhood: 'Vila Nova Conceição',
    city: 'São Paulo',
    description: 'Inspirado na arte e na natureza, oferece uma experiência única de moradia com áreas verdes e espaços de convivência.',
    fullDescription: 'O Parque das Artes é um empreendimento único que une arte, natureza e arquitetura de forma harmoniosa. Localizado na privilegiada Vila Nova Conceição, próximo ao Parque Ibirapuera, oferece apartamentos amplos com acabamentos exclusivos e áreas de lazer integradas ao paisagismo exuberante.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80'
    ],
    status: 'Pronto para morar',
    area: '220m² a 380m²',
    rooms: '4 quartos',
    suites: '4 suítes',
    parking: '4 vagas',
    price: 'A partir de R$ 5.200.000',
    featured: false,
    amenities: ['Piscina climatizada', 'Spa completo', 'Academia', 'Quadra de tênis', 'Salão gourmet', 'Adega', 'Cinema', 'Jardim contemplativo'],
    deliveryDate: 'Pronto'
  },
  {
    id: 4,
    slug: 'terraco-ibirapuera',
    name: 'Terraço Ibirapuera',
    location: 'Moema, São Paulo',
    neighborhood: 'Moema',
    city: 'São Paulo',
    description: 'Residências exclusivas com vista para o parque, arquitetura premiada e serviços personalizados.',
    fullDescription: 'O Terraço Ibirapuera redefine o conceito de moradia de luxo em São Paulo. Com arquitetura premiada e vista permanente para o Parque Ibirapuera, este empreendimento oferece serviços de concierge, segurança 24h e uma infraestrutura de lazer incomparável.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
    ],
    status: 'Lançamento',
    area: '250m² a 450m²',
    rooms: '4 a 5 quartos',
    suites: '4 suítes',
    parking: '4 a 6 vagas',
    price: 'A partir de R$ 6.800.000',
    featured: false,
    amenities: ['Piscina com borda infinita', 'Spa', 'Academia premium', 'Golf simulator', 'Wine bar', 'Concierge 24h', 'Heliponto'],
    deliveryDate: 'Março 2028'
  },
  {
    id: 5,
    slug: 'essence-pinheiros',
    name: 'Essence Pinheiros',
    location: 'Pinheiros, São Paulo',
    neighborhood: 'Pinheiros',
    city: 'São Paulo',
    description: 'Studios e apartamentos compactos com design inteligente em uma das regiões mais desejadas da cidade.',
    fullDescription: 'O Essence Pinheiros é perfeito para quem busca praticidade e estilo de vida urbano. Localizado no coração de Pinheiros, oferece studios e apartamentos compactos com design inteligente, próximo a restaurantes, bares e transporte público.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80'
    ],
    status: 'Em obras',
    area: '35m² a 75m²',
    rooms: '1 a 2 quartos',
    suites: '1 suíte',
    parking: '1 vaga',
    price: 'A partir de R$ 650.000',
    featured: false,
    amenities: ['Rooftop', 'Coworking', 'Academia', 'Lavanderia compartilhada', 'Bicicletário', 'Pet friendly'],
    deliveryDate: 'Setembro 2026'
  },
  {
    id: 6,
    slug: 'grand-itaim',
    name: 'Grand Itaim',
    location: 'Itaim Bibi, São Paulo',
    neighborhood: 'Itaim Bibi',
    city: 'São Paulo',
    description: 'O endereço mais exclusivo do Itaim Bibi, com apenas 20 unidades e serviços five stars.',
    fullDescription: 'O Grand Itaim é sinônimo de exclusividade absoluta. Com apenas 20 unidades, este empreendimento boutique oferece o mais alto padrão de moradia em São Paulo, com serviços de hotel cinco estrelas e privacidade incomparável.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80'
    ],
    status: 'Lançamento',
    area: '350m² a 500m²',
    rooms: '4 quartos',
    suites: '4 suítes',
    parking: '5 vagas',
    price: 'Sob consulta',
    featured: false,
    amenities: ['Piscina privativa', 'Spa exclusivo', 'Butler service', 'Valet parking', 'Adega climatizada', 'Terraço gourmet'],
    deliveryDate: 'Dezembro 2028'
  }
];

export const getEmpreendimentoBySlug = (slug: string): Empreendimento | undefined => {
  return EMPREENDIMENTOS.find(e => e.slug === slug);
};

export const getFeaturedEmpreendimentos = (): Empreendimento[] => {
  return EMPREENDIMENTOS.slice(0, 4);
};
