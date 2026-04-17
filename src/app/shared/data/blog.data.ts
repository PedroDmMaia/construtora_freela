export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'tendencias-arquitetura-2026',
    title: 'O que muda na obra civil em 2026: normas, materiais e planejamento',
    excerpt: 'Checklist para quem fecha contrato de infraestrutura: NR, condicionantes ambientais e controle de qualidade em pavimentação e redes.',
    content: `O setor de construção pesada continua evoluindo com foco em segurança do trabalho, rastreabilidade de materiais e digitalização de medições.

As obras de saneamento e pavimentação passam a exigir mais fotos de etapa, cadastro de resíduos de escavação e relatórios de compactação quando o contratante exige PBQP-H ou aderência a manuais municipais.

Em valas para rede de esgoto, o monitoramento da lastragem e do assentamento de tubos ganha importância em fiscalizações. Já no asfalto, a temperatura de aplicação e a taxa de compactação continuam sendo pontos críticos para evitar trincas precoces.

Para o gestor público ou contratante privado, vale alinhar cronograma com a disponibilidade de máquinas e equipe fixa — gargalo comum em obras de vias.`,
    image: '/12.jpeg',
    category: 'Obra civil',
    author: 'Ana Beatriz Costa',
    authorImage: '/18.jpeg',
    date: '15 Jan 2026',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    slug: 'investir-imoveis-alto-padrao',
    title: 'Como avaliar um contratante antes de fechar obra de infraestrutura',
    excerpt: 'Da documentação da máquina ao histórico em obras semelhantes: critérios práticos para escolher quem vai para o campo.',
    content: `Contratos de terraplenagem, rede de esgoto ou pavimentação exigem análise diferente da compra de imóvel. O que pesa é capacidade operacional real.

Pergunte sobre registro em conselhos, ART quando aplicável, equipe própria x subempreiteiros e frota disponível nas datas do cronograma. Em licitações, confira edital contra a proposta técnica que sua empresa consegue cumprir.

Garantia e pós-obra devem estar claras: prazo de recôncavo, responsabilidade por infiltração em trechos de tubulação e reparo de pavimento após vala.

Comparar sempre três cenários: preço, prazo e escopo — não só o menor valor por metro linear ou por tonelada de asfalto.`,
    image: '/6.jpeg',
    category: 'Gestão de obra',
    author: 'Carlos Eduardo Silva',
    authorImage: '/18.jpeg',
    date: '10 Jan 2026',
    readTime: '7 min',
    featured: false
  },
  {
    id: 3,
    slug: 'sustentabilidade-construcao-civil',
    title: 'Sustentabilidade em valas e pavimentação: lama, reuso e erosão',
    excerpt: 'Como reduzir impacto em obras de saneamento próximas a rios e córregos sem perder produtividade.',
    content: `Escavação mecanizada gera volume alto de material úmido. O destino correto em CTR evita multas e conflito com a comunidade.

Em trechos marginais, barreiras de sedimentos e bombeamento controlado ajudam a preservar leito. Após a instalação da tubulação, a recomposição do pavimento e o paisagismo mínimo (quando exigido) fecham o processo junto ao órgão ambiental.

Economia circular aparece no reuso de sub-base quando a geotecnia permite — sempre com ensaio. Na pavimentação, evitar refugo de CBUQ mal armazenado é competência de canteiro organizado.

A sustentabilidade, aqui, é operações limpas e documentadas — não só marketing.`,
    image: '/4.jpeg',
    category: 'Meio ambiente',
    author: 'Mariana Costa',
    authorImage: '/18.jpeg',
    date: '05 Jan 2026',
    readTime: '6 min',
    featured: false
  },
  {
    id: 4,
    slug: 'decoracao-apartamentos-luxo',
    title: 'Segurança no canteiro: EPI, isolamento e comunicação com moradores',
    excerpt: 'Checklist rápido para fechamento de rua, sinalização de vala e incidência sonora em obras urbanas.',
    content: `Tapume bem instalado não é estética — é NR-18 e convivência. Chapas alinhadas, acesso para pedestres e rotas alternativas sinalizadas evitam acidente e conversas difíceis na portaria.

Em retroescavadeira abrindo vala, fita zebrada à noite e iluminação portátil são essenciais. Para moradores, aviso com data de impacto e canal WhatsApp da obra reduzem ruído social.

Martelete e compactador pedem turnos combinados com a fiscalização e, quando possível, horários menos sensíveis.

Lembre-se: obra segura é obra que termina sem incidente grave na vizinhança.`,
    image: '/25.jpeg',
    category: 'Segurança',
    author: 'Patricia Almeida',
    authorImage: '/18.jpeg',
    date: '28 Dez 2025',
    readTime: '4 min',
    featured: false
  },
  {
    id: 5,
    slug: 'lancamento-terraco-ibirapuera',
    title: 'Fechamento de canteiro: containers, munck e tempo de montagem',
    excerpt: 'Da logística do içamento ao posicionamento dos módulos — o que define o sucesso do cercamento.',
    content: `O fechamento com containers e tapume exige estudo de carga, raio do guindaste e resistência do solo onde a máquina apoia. Caminhão munck posicionado errado atrasa o dia inteiro.

Chapas de zinco ou metálicas precisam de painéis alinhados e aterramento quando houver quadro elétrico no módulo. Acesso de caminhões e pipa deve entrar no desenho antes da ordem de serviço.

Após a montagem, o canteiro ganha barreira física contra invasão e melhor controle de entrada de pessoal e materiais.

Planejar içamento em dia de baixo tráfego ajuda a cidade e a equipe.`,
    image: '/23.jpeg',
    category: 'Canteiro',
    author: 'Roberto Oliveira',
    authorImage: '/18.jpeg',
    date: '20 Dez 2025',
    readTime: '5 min',
    featured: false
  },
  {
    id: 6,
    slug: 'bairros-mais-valorizados-sp',
    title: 'Planejamento de vias: quando priorizar rede ou pavimento primeiro',
    excerpt: 'Ordem de serviço em obras urbanas: cenários em que abrir vala antes do binder evita retrabalho.',
    content: `Em ruas sem saneamento adequado, instalar tubulação antes do revestimento definitivo evita picotar asfalto novo. Já em revestimento superficial com rede ok, o foco é preparo de base e drenagem longitudinal.

Calendário de chuvas importa: vala aberta no período úmido exige bomba e plano B para escoamento.

A articulação com outros concessionários (água, gás, fibra) reduz corte sucessivo de pavimento — sinergia que parece burocrática mas economiza dinheiro público ou CAPEX privado.

O melhor projeto é aquele que a rua aguenta cinco anos sem buraco de retorno.`,
    image: '/1.jpeg',
    category: 'Infraestrutura',
    author: 'Carlos Eduardo Silva',
    authorImage: '/18.jpeg',
    date: '15 Dez 2025',
    readTime: '8 min',
    featured: false
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getFeaturedPost = (): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.featured);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return BLOG_POSTS.slice(0, limit);
};

export const getCategories = (): string[] => {
  return [...new Set(BLOG_POSTS.map(post => post.category))];
};
