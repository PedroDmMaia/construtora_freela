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
    slug: 'asfalto',
    name: 'Asfalto',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description: 'Serviços de pavimentação asfáltica em ruas, avenidas e acessos, com equipe especializada e equipamentos de compactação.',
    fullDescription: 'Realizamos serviços completos de pavimentação asfáltica, desde o preparo da base até a aplicação e compactação do asfalto. Nossa equipe atua em ruas residenciais, avenidas e acessos internos, garantindo acabamento de qualidade e durabilidade. Todos os trabalhos seguem as normas técnicas vigentes e são executados com equipamentos adequados, incluindo rolos compactadores e distribuidoras de asfalto.',
    image: '/30.jpeg',
    gallery: ['/26.jpeg', '/27.jpeg', '/28.jpeg', '/29.jpeg', '/30.jpeg', '/31.jpeg'],
    status: 'Em execução',
    area: 'Vias e acessos',
    rooms: 'Equipe em campo',
    suites: 'NR-18 e EPI',
    parking: 'Rolo e equipamentos',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Pavimentação de ruas', 'Reperfilamento', 'Compactação com rolo', 'Equipe especializada'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 2,
    slug: 'rede-esgoto',
    name: 'Pavimentação de rede de esgoto',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description: 'Abertura de valas, implantação de tubulações e recomposição de pavimento para redes de esgoto e saneamento.',
    fullDescription: 'Executamos a pavimentação e implantação de redes de esgoto, incluindo abertura mecanizada de valas com retroescavadeira, assentamento de tubulações de concreto e recomposição do pavimento. Atuamos em obras de saneamento básico, infraestrutura urbana e projetos próximos a cursos d\'água, seguindo todas as normas de segurança e meio ambiente.',
    image: '/5.jpeg',
    gallery: [
      '/1.jpeg',
      '/4.jpeg',
      '/5.jpeg',
      '/7.jpeg',
      '/8.jpeg',
      '/9.jpeg',
      '/14.jpeg',
      '/15.jpeg',
      '/obra-retroescavadeira-rio.jpeg'
    ],
    status: 'Em execução',
    area: 'Redes enterradas',
    rooms: 'Escavação mecanizada',
    suites: 'NR-10 / segurança',
    parking: 'Retro e basculante',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Abertura de valas', 'Assentamento de tubulações', 'Retroescavadeira', 'Recomposição de pavimento'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 3,
    slug: 'alvenaria',
    name: 'Alvenaria',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description: 'Execução de fundações, pilares, estruturas de concreto armado e serviços gerais de alvenaria.',
    fullDescription: 'Nossa equipe executa serviços completos de alvenaria, incluindo fundações com ferragem, concretagem de pilares e estruturas, e trabalhos de demolição controlada. Utilizamos maquinário adequado para escavação e movimentação de terra, garantindo qualidade estrutural em cada etapa da obra.',
    image: '/10.jpeg',
    gallery: ['/2.jpeg', '/3.jpeg', '/6.jpeg', '/10.jpeg', '/11.jpeg', '/12.jpeg', '/13.jpeg', '/16.jpeg'],
    status: 'Em execução',
    area: 'Estruturas e fundações',
    rooms: 'Mão de obra qualificada',
    suites: 'Concreto e ferragem',
    parking: 'Ferramentas e EPC',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Fundações', 'Pilares de concreto', 'Ferragem', 'Demolição controlada'],
    deliveryDate: 'Conforme cronograma'
  },
  {
    id: 4,
    slug: 'fechamento-canteiro',
    name: 'Fechamento de canteiro de obras',
    location: 'Região de atuação',
    neighborhood: '',
    city: '',
    description: 'Instalação de tapumes com chapas de zinco, posicionamento de containers e infraestrutura de fechamento para canteiros de obras.',
    fullDescription: 'Realizamos o fechamento completo de canteiros de obras, com instalação de tapumes em chapas metálicas (fio de zinco), posicionamento de containers de escritório e almoxarifado via caminhão munck, e toda a infraestrutura de acesso e segurança. Garantimos o isolamento adequado do canteiro conforme as normas regulamentadoras vigentes.',
    image: '/21.jpeg',
    gallery: ['/17.jpeg', '/18.jpeg', '/19.jpeg', '/20.jpeg', '/21.jpeg', '/23.jpeg', '/24.jpeg', '/25.jpeg'],
    status: 'Em execução',
    area: 'Canteiro isolado',
    rooms: 'Montagem de tapume',
    suites: 'Containers e munck',
    parking: 'Logística de içamento',
    price: 'Sob orçamento',
    featured: true,
    amenities: ['Tapumes de chapa metálica', 'Containers por caminhão munck', 'Cercamento perimetral', 'Infraestrutura de acesso'],
    deliveryDate: 'Conforme cronograma'
  }
];

export const getEmpreendimentoBySlug = (slug: string): Empreendimento | undefined => {
  return EMPREENDIMENTOS.find(e => e.slug === slug);
};

export const getFeaturedEmpreendimentos = (): Empreendimento[] => {
  return EMPREENDIMENTOS.filter(e => e.featured);
};
