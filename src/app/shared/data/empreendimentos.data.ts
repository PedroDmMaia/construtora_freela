/** Caminhos `/n.jpeg` para galerias */
const P = (n: number) => `/${n}.jpeg`;
const R = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => P(a + i));

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
    slug: 'alvenaria',
    name: 'Alvenaria',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Estruturas em alvenaria, fundações, pilares e serviços correlatos de acordo com o projeto executivo.',
    fullDescription:
      'Execução de alvenaria estrutural e de vedação em obras de infraestrutura e edificações de apoio, com controle de argamassa, ferragem e prumo. Atendemos cronogramas de canteiro alinhados às demais frentes (saneamento, pavimentação e fechamento).',
    image: P(1),
    gallery: [...R(1, 5), ...R(18, 25)],
    status: 'Em execução',
    area: 'Estruturas e vedações',
    rooms: 'Mão de obra própria',
    suites: 'Projeto executivo',
    parking: 'Ferramentas e EPI',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Fundações e pilares', 'Alvenaria estrutural', 'Acabamento de junta', 'Leitura de projeto em campo'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 2,
    slug: 'canteiro-obras',
    name: 'Canteiro de obras',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Montagem de canteiro, logística interna, tapumes, acessos e apoio à organização da obra.',
    fullDescription:
      'Implantação e manutenção de canteiro de obras: delimitação, acessos provisórios, apoio para materiais e integração com o fechamento perimetral quando necessário. Foco em segurança de quem circula dentro e fora da obra.',
    image: P(6),
    gallery: R(6, 17),
    status: 'Em execução',
    area: 'Canteiros temporários',
    rooms: 'Encarregado em obra',
    suites: 'NR-18 e sinalização',
    parking: 'Containers e estoque',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Delimitação de área', 'Acessos e rampas', 'Apoio logístico', 'Integração com tapume'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 3,
    slug: 'saneamento',
    name: 'Saneamento',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Obras de saneamento e redes de escoamento conforme projeto, com abertura de valas e recomposição.',
    fullDescription:
      'Execução de trechos de saneamento em vias urbanas e rurais: escavação, assentamento de tubos, conexões, bem como recomposição de pavimento e calçadas quando contratado. Inclui blocos de fotos 26–34 e 35–38 (mesma categoria).',
    image: P(26),
    gallery: [...R(26, 34), ...R(35, 38)],
    status: 'Em execução',
    area: 'Redes enterradas',
    rooms: 'Escavação mecanizada',
    suites: 'NR-10 / segurança',
    parking: 'Retro e basculante',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Abertura de vala', 'Assentamento de tubos', 'Recomposição de pavimento', 'Testes de estanqueidade quando aplicável'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 4,
    slug: 'escoamento-pluvial',
    name: 'Escoamento de água pluvial',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Soluções para drenagem e escoamento de águas pluviais em vias e áreas de obra.',
    fullDescription:
      'Implantação de elementos de drenagem superficial e coleta de água pluvial, alinhada ao projeto hidráulico e às condicionantes ambientais. Trabalho em conjunto com pavimentação e saneamento quando a obra exigir.',
    image: P(39),
    gallery: R(39, 43),
    status: 'Em execução',
    area: 'Drenagem e pluvial',
    rooms: 'Topografia e níveis',
    suites: 'Projeto de drenagem',
    parking: 'Máquinas leves e retro',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Coleta pluvial', 'Declives e sarjetas', 'Conexão com PV', 'Conforme projeto'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 5,
    slug: 'asfalto',
    name: 'Asfalto',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Pavimentação asfáltica, incluindo preparação de base para receber asfalto e aplicação em rolos.',
    fullDescription:
      'Serviços de CBUQ / pavimentação asfáltica em vias e acessos. Inclui a foto 44 (asfalto), a 57 (preparação para receber asfalto) e a sequência 58–73, conforme organização do arquivo em public. Equipe e equipamentos de compactação para fechamento de camada.',
    image: P(44),
    gallery: [P(44), P(57), ...R(58, 73)],
    status: 'Em execução',
    area: 'Vias e acessos',
    rooms: 'Equipe de pavimentação',
    suites: 'Controle de temperatura e compactação',
    parking: 'Rolo e vibroacabadora',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Impermeabilização de base', 'Aplicação de ligante', 'Compactação com rolo', 'Preparação de base'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 6,
    slug: 'rede-esgoto',
    name: 'Rede para esgoto',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Implantação de trechos de rede coletora de esgoto em tubos de concreto ou projeto especificado.',
    fullDescription:
      'Montagem de rede de esgoto com escavação, leito de vala, assentamento, junta e anel de compressão conforme norma do fabricante. Recomposição de pavimento após obras. Blocos de fotos 45–48.',
    image: P(45),
    gallery: R(45, 48),
    status: 'Em execução',
    area: 'Rede coletora',
    rooms: 'Equipe de vala',
    suites: 'Projeto hidrossanitário',
    parking: 'Retroescavadeira',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Vala e lastro', 'Tubos e juntas', 'Recomposição de via', 'Ensaios quando contratados'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 7,
    slug: 'intertravado',
    name: 'Intertravado',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Execução de pavimento intertravado em calçadas, pátios e áreas de transição.',
    fullDescription:
      'Assentamento de blocos intertravados com regularização de base, assentamento em areia ou argamassa conforme especificação, juntas e acabamento final. Blocos de fotos 49–56.',
    image: P(49),
    gallery: R(49, 56),
    status: 'Em execução',
    area: 'Calçadas e pátios',
    rooms: 'Mão de obra qualificada',
    suites: 'Nível e esquadro',
    parking: 'Compactação manual',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Base de assentamento', 'Corte e ajuste', 'Junta de expansão', 'Acabamento'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 8,
    slug: 'preparacao-solo',
    name: 'Preparação de solo',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description:
      'Preparação de terreno para receber pavimentação ou camadas estruturais.',
    fullDescription:
      'Serviços de regularização, compactação e preparação de subbase para vias e plataformas, conforme projeto geotécnico. Galeria com a foto 74 do arquivo.',
    image: P(74),
    gallery: [P(74)],
    status: 'Em execução',
    area: 'Terraplenagem leve',
    rooms: 'Nível e compactação',
    suites: 'Ensaios de campo quando aplicável',
    parking: 'Rolo e equipamentos',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Escarificação', 'Umidade ótima', 'Compactação em camadas', 'Geotextil quando aplicável'],
    deliveryDate: 'Conforme cronograma'
  }
];

export const getEmpreendimentoBySlug = (slug: string): Empreendimento | undefined => {
  return EMPREENDIMENTOS.find(e => e.slug === slug);
};

export const getFeaturedEmpreendimentos = (): Empreendimento[] => {
  return EMPREENDIMENTOS.filter(e => e.featured);
};
