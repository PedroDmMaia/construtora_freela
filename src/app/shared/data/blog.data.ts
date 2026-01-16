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
    title: 'Tendências de Arquitetura para 2026: O Futuro do Morar',
    excerpt: 'Descubra as principais tendências de arquitetura que estão moldando os novos empreendimentos e como elas impactam a qualidade de vida.',
    content: `A arquitetura residencial está em constante evolução, e 2026 promete ser um ano marcante para o setor. As tendências apontam para espaços mais integrados, sustentáveis e tecnológicos.

Entre as principais tendências, destacam-se os espaços multifuncionais, que permitem adaptar os ambientes às diferentes necessidades do dia a dia. O home office, que se consolidou nos últimos anos, agora ganha espaços próprios e bem planejados.

A sustentabilidade também é protagonista, com sistemas de captação de água da chuva, painéis solares integrados às fachadas e materiais de construção ecológicos se tornando padrão em empreendimentos de alto padrão.

A tecnologia smart home deixou de ser um diferencial para se tornar essencial. Automação de iluminação, climatização, segurança e entretenimento são apenas o básico. Os novos projetos já contemplam infraestrutura para as tecnologias do futuro.`,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    category: 'Arquitetura',
    author: 'Ana Beatriz Costa',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    date: '15 Jan 2026',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    slug: 'investir-imoveis-alto-padrao',
    title: 'Por Que Investir em Imóveis de Alto Padrão é uma Decisão Inteligente',
    excerpt: 'Análise completa sobre os benefícios de investir em imóveis de luxo e como escolher o melhor empreendimento.',
    content: `O mercado imobiliário de alto padrão continua sendo uma das opções mais seguras e rentáveis para investidores. Com valorização consistente e demanda estável, os imóveis de luxo oferecem benefícios únicos.

A localização premium, acabamentos de primeira linha e infraestrutura completa são fatores que garantem não apenas qualidade de vida, mas também valorização contínua do patrimônio.

Diferente de outras opções de investimento, imóveis de alto padrão são menos suscetíveis a oscilações de mercado, mantendo seu valor mesmo em períodos de instabilidade econômica.

Ao escolher um empreendimento, é fundamental avaliar a reputação da construtora, a localização, as características do projeto e o potencial de valorização da região.`,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    category: 'Investimentos',
    author: 'Carlos Eduardo Silva',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
    date: '10 Jan 2026',
    readTime: '7 min',
    featured: false
  },
  {
    id: 3,
    slug: 'sustentabilidade-construcao-civil',
    title: 'Sustentabilidade na Construção Civil: Nosso Compromisso com o Futuro',
    excerpt: 'Conheça as práticas sustentáveis adotadas em nossos empreendimentos e como contribuímos para um futuro mais verde.',
    content: `A sustentabilidade deixou de ser uma tendência para se tornar uma necessidade. Na Construtora Premium, incorporamos práticas sustentáveis em todas as etapas de nossos projetos.

Desde a escolha de materiais certificados até a implementação de sistemas de economia de energia e água, cada detalhe é pensado para minimizar o impacto ambiental.

Nossos empreendimentos contam com certificações ambientais reconhecidas internacionalmente, garantindo que os moradores vivam em harmonia com o meio ambiente.

Além dos benefícios ambientais, a sustentabilidade também representa economia para os moradores, com redução significativa nas contas de água e energia.`,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
    category: 'Sustentabilidade',
    author: 'Mariana Costa',
    authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
    date: '05 Jan 2026',
    readTime: '6 min',
    featured: false
  },
  {
    id: 4,
    slug: 'decoracao-apartamentos-luxo',
    title: 'Dicas de Decoração para Apartamentos de Luxo',
    excerpt: 'Inspirações e dicas de profissionais para decorar seu apartamento de alto padrão com elegância e personalidade.',
    content: `Decorar um apartamento de luxo é uma oportunidade de expressar personalidade e criar ambientes únicos. Confira dicas de especialistas para transformar seu espaço.

A escolha de materiais nobres é fundamental. Mármores, madeiras naturais e metais de acabamento dourado ou cromado elevam qualquer ambiente.

A iluminação é outro elemento crucial. Luminárias de design, spots direcionáveis e pendentes statement são essenciais para criar atmosferas diferenciadas.

Móveis de design assinado e obras de arte são investimentos que valorizam o imóvel e criam ambientes sofisticados. A chave é equilibrar peças statement com elementos mais neutros.`,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    category: 'Decoração',
    author: 'Patricia Almeida',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    date: '28 Dez 2025',
    readTime: '4 min',
    featured: false
  },
  {
    id: 5,
    slug: 'lancamento-terraco-ibirapuera',
    title: 'Terraço Ibirapuera: Nosso Mais Novo Lançamento',
    excerpt: 'Conheça o Terraço Ibirapuera, nosso empreendimento mais exclusivo com vista permanente para o parque.',
    content: `É com grande orgulho que apresentamos o Terraço Ibirapuera, nosso empreendimento mais exclusivo até o momento.

Localizado em Moema, com vista permanente para o Parque Ibirapuera, o Terraço oferece uma experiência de moradia incomparável. São apenas 20 unidades, garantindo exclusividade absoluta.

O projeto arquitetônico, assinado por um renomado escritório, prioriza a integração com a paisagem e a entrada de luz natural. Cada unidade possui amplos terraços que funcionam como extensão das áreas sociais.

A infraestrutura inclui serviços de concierge 24h, spa exclusivo, piscina com borda infinita e heliponto. Uma nova definição de luxo residencial em São Paulo.`,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    category: 'Lançamentos',
    author: 'Roberto Oliveira',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    date: '20 Dez 2025',
    readTime: '5 min',
    featured: false
  },
  {
    id: 6,
    slug: 'bairros-mais-valorizados-sp',
    title: 'Os Bairros Mais Valorizados de São Paulo em 2026',
    excerpt: 'Análise dos bairros que mais valorizaram e as regiões com maior potencial de crescimento para os próximos anos.',
    content: `O mercado imobiliário de São Paulo continua dinâmico, com algumas regiões apresentando valorização acima da média. Confira nossa análise.

Os Jardins mantêm sua posição como uma das regiões mais nobres da cidade, com valorização constante e alta demanda por imóveis de luxo.

A Vila Nova Conceição e o Itaim Bibi consolidaram-se como destinos preferidos de famílias que buscam qualidade de vida aliada à proximidade de serviços.

Moema, especialmente nas proximidades do Parque Ibirapuera, continua em alta, atraindo moradores que valorizam áreas verdes e infraestrutura completa.

Pinheiros destaca-se pelo perfil jovem e vibrante, com forte valorização nos últimos anos devido à revitalização de áreas e chegada de novos empreendimentos.`,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    category: 'Mercado',
    author: 'Carlos Eduardo Silva',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
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
