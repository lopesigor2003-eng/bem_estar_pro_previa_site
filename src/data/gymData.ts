export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  benefits: string[];
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  crefOrRegister: string;
  bio: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  name: string;
  timeTraining: string;
  role: string;
  rating: number;
  comment: string;
  highlight: string;
  avatar: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  url: string;
  directImageUrl: string;
  tag: string;
}

export const GYM_INFO = {
  name: 'Bem Estar Pro',
  tagline: 'Sua Academia para um Corpo e Mente em Sintonia',
  description:
    'Localizada na região de Nossa Senhora do Rosário, a Bem Estar Academias PRO oferece equipamentos, espaços e profissionais capacitados proporcionando melhor qualidade de vida aos frequentadores.',
  address: 'Avenida Nossa Sra. Medianeira, 986 - Nossa Sra. Medianeira, Santa Maria - RS, 97060-001',
  phoneDisplay: '(55) 3217-8863',
  rawPhone: '05532178863',
  instagramUrl: 'https://www.instagram.com/bemestarproacademias/',
  instagramHandle: '@bemestarproacademias',
  googleMapsReviewUrl: 'https://maps.app.goo.gl/Q8rmkGMZLorNCr5z7',
  reviewsCount: '55+',
  averageRating: '4.9',
  logoUrl: 'https://i.postimg.cc/brvXDfJm/e48e3cdd-db78-46fb-b11f-49ebb0d28295.jpg',
  heroDriveUrl: 'https://drive.google.com/file/d/1kZGp073woercAFxn-0dfhLF0UcoYwkra/view?usp=sharing',
  heroImageUrl: '/hero-bemestarpro.jpg',
  heroVideoUrl: '/hero-bemestarpro.mp4',
  heroDirectImageUrl: '/hero-bemestarpro.jpg',
  heroFallbackImage: '/hero-bemestarpro.jpg',
  operatingHours: {
    weekdays: '07:00 – 22:00',
    saturday: '09:00 – 12:00 e 15:00 – 18:00',
    sunday: 'Fechado',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'musculacao',
    title: 'Musculação de Alta Performance',
    subtitle: 'Biomecânica, Força e Longevidade',
    badge: 'Alta Tecnologia',
    description:
      'Treinamento de força com maquinário biomecânico de última geração, projetado para máxima ativação muscular, prevenção de lesões e ganhos consistentes em hipertrofia e condicionamento físico.',
    benefits: [
      'Equipamentos convergentes com trajetória anatômica precisa',
      'Prescrição individualizada com metas de progressão de carga',
      'Instrutores presentes em tempo integral para ajuste postural',
      'Foco em saúde metabólica, queima calórica e densidade óssea',
    ],
    features: ['Área de pesos livres calibrados', 'Plataformas de levantamento', 'Monitoramento de intensidade'],
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fisiculturismo',
    title: 'Fisiculturismo & Simetria Pro',
    subtitle: 'Periodização Competitiva e Estética Extrema',
    badge: 'Nível Pro',
    description:
      'Espaço e suporte avançado para atletas e entusiastas da cultura física. Periodização de cutting e bulking, poses compulsórias, densidade muscular e acompanhamento multiprofissional com nutricionista e fisioterapeuta.',
    benefits: [
      'Análise de simetria e proporções musculares padrão IFBB/NPC',
      'Maquinário para sobrecarga máxima com estabilidade extrema',
      'Sala de poses e avaliação física detalhada',
      'Integração com equipe de nutrição esportiva e fisioterapia',
    ],
    features: ['Halteres de alta tonelagem', 'Máquinas articuladas para isolamento', 'Consultoria de poses'],
    image:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'ar-condicionado',
    name: 'Ar condicionado',
    description: 'Climatização contínua de alta precisão em todos os ambientes.',
    iconName: 'Wind',
    tag: 'Conforto',
  },
  {
    id: 'aquecedor',
    name: 'Aquecedor',
    description: 'Temperatura acolhedora durante os invernos rigorosos do RS.',
    iconName: 'Flame',
    tag: 'Clima Ideal',
  },
  {
    id: 'armarios',
    name: 'Armários',
    description: 'Armários individuais seguros para guardar seus pertences com tranquilidade.',
    iconName: 'Lock',
    tag: 'Segurança',
  },
  {
    id: 'chuveiro',
    name: 'Chuveiro',
    description: 'Duchas aquecidas de alta pressão para seu pós-treino revigorante.',
    iconName: 'Droplets',
    tag: 'Bem-estar',
  },
  {
    id: 'acessibilidade',
    name: 'Espaço adaptado para cadeira de rodas',
    description: 'Acessibilidade plena: rampas, corredores amplos e estações adaptadas.',
    iconName: 'Accessibility',
    tag: 'Inclusão',
  },
  {
    id: 'estacionamento',
    name: 'Estacionamento',
    description: 'Vagas exclusivas e seguras para alunos na Avenida Medianeira.',
    iconName: 'Car',
    tag: 'Praticidade',
  },
  {
    id: 'fisioterapeuta',
    name: 'Fisioterapeuta',
    description: 'Atendimento e prevenção de lesões com fisioterapia esportiva especializada.',
    iconName: 'Activity',
    tag: 'Saúde Pro',
  },
  {
    id: 'higiene',
    name: 'Itens de higiene pessoal',
    description: 'Disponibilidade de produtos essenciais e toalhas no vestiário.',
    iconName: 'Sparkles',
    tag: 'Cuidado',
  },
  {
    id: 'minibar',
    name: 'Mini bar',
    description: 'Bebidas isotônicas, shakes de proteína gelados e suplementação rápida.',
    iconName: 'Coffee',
    tag: 'Nutrição',
  },
  {
    id: 'nutricionista',
    name: 'Nutricionista',
    description: 'Orientação alimentar esportiva para potencializar hipertrofia e secar gordura.',
    iconName: 'Apple',
    tag: 'Performance',
  },
  {
    id: 'personal',
    name: 'Personal trainer',
    description: 'Profissionais capacitados para acompanhamento individualizado e metas claras.',
    iconName: 'UserCheck',
    tag: 'Consultoria',
  },
  {
    id: 'vestiario',
    name: 'Vestiário',
    description: 'Vestiários amplos, higienizados constantemente e com total privacidade.',
    iconName: 'ShieldCheck',
    tag: 'Estrutura',
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    description: 'Internet de ultra-velocidade liberada para sua playlist de treino e streaming.',
    iconName: 'Wifi',
    tag: 'Conectividade',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Lucas Brandão',
    role: 'Personal Trainer Chefe',
    specialty: 'Biomecânica & Treinamento de Força Avançado',
    crefOrRegister: 'CREF 028491-G/RS',
    bio: 'Mais de 10 anos de experiência lapidando físicos, corrigindo assimetrias e acelerando hipertrofia com metodologia científica e biomecânica avançada.',
    avatar:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Dra. Camila Vasconcellos',
    role: 'Nutricionista Esportiva',
    specialty: 'Bioquímica do Exercício & Composição Corporal',
    crefOrRegister: 'CRN-2 14298',
    bio: 'Especialista em periodização nutricional para ganho de massa magra, perda de gordura e otimização hormonal através de planos alimentares sustentáveis.',
    avatar:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Dr. Rafael Medeiros',
    role: 'Fisioterapeuta do Esporte',
    specialty: 'Prevenção de Lesões & Recuperação Muscular Rápida',
    crefOrRegister: 'CREFITO-5 31892-F',
    bio: 'Fisioterapia preventiva aplicada a praticantes de musculação pesada, liberação miofascial e fortalecimento do complexo articular.',
    avatar:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    name: 'Thiago Becker',
    role: 'Coach de Fisiculturismo',
    specialty: 'Preparação de Atletas & Simetria Muscular',
    crefOrRegister: 'CREF 031940-G/RS',
    bio: 'Treinador de atletas de alta performance, especialista em estratégias de pico, correções estéticas e poses compulsórias.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Matheus Silveira',
    timeTraining: 'Aluno há 1 ano e meio',
    role: 'Praticante de Musculação',
    rating: 5,
    highlight: 'Estrutura completa e moderna em Santa Maria',
    comment:
      'A Bem Estar Pro superou todas as expectativas. Os aparelhos são novíssimos, o ar condicionado realmente funciona forte no verão e o atendimento dos professores é de outro patamar. Evolução nítida no meu físico!',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'Juliana Fagundes',
    timeTraining: 'Aluna há 8 meses',
    role: 'Foco em Hipertrofia & Saúde',
    rating: 5,
    highlight: 'Acompanhamento nutricional e fisioterapia integrados',
    comment:
      'Ter nutricionista e fisioterapeuta na própria academia facilitou tudo. Recuperei uma lesão de ombro antiga e voltei a progredir carga com total segurança. Ambiente limpo, moderno e muito motivador.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Rodrigo Dornelles',
    timeTraining: 'Aluno há 2 anos',
    role: 'Atleta Amador de Fisiculturismo',
    rating: 5,
    highlight: 'Halteres pesados e biomecânica excelente',
    comment:
      'Pra quem leva o treino a sério, aqui é o lugar certo. Halteres pesados, máquinas articuladas excelentes e a energia da galera treinando com foco cria um ambiente motivador demais. 5 estrelas merecidas!',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '4',
    name: 'Carolina Mendes',
    timeTraining: 'Aluna há 1 ano',
    role: 'Treinamento Funcional & Força',
    rating: 5,
    highlight: 'Vestiários impecáveis e localização privilegiada',
    comment:
      'A localização na Medianeira com estacionamento faz toda a diferença na correria do dia a dia. Chego do trabalho, treino com música boa e saio renovada. A melhor academia de Santa Maria!',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: '1',
    title: 'Área Principal de Musculação & Linha de Força',
    description: 'Equipamentos biomecânicos de precisão com iluminação dinâmica e piso de alta absorção de impacto.',
    url: '/carousel-1.jpg',
    directImageUrl: '/carousel-1.jpg',
    tag: 'Setor de Força',
  },
  {
    id: '2',
    title: 'Estações de Halteres & Treinamento Livre',
    description: 'Grade completa de halteres maciços, bancos ajustáveis e suportes reforçados para sobrecarga progressiva.',
    url: '/carousel-2.jpg',
    directImageUrl: '/carousel-2.jpg',
    tag: 'Pesos Livres',
  },
  {
    id: '3',
    title: 'Espaço de Condicionamento & Acessibilidade',
    description: 'Ambiente climatizado com esteiras e bikes de alto rendimento, além de espaço adaptado para cadeira de rodas.',
    url: '/carousel-3.jpg',
    directImageUrl: '/carousel-3.jpg',
    tag: 'Cardio & Inclusão',
  },
  {
    id: '4',
    title: 'Maquinário de Membros Inferiores & Isolamento',
    description: 'Leg press calibrados, cadeiras extensora e flexora ergonômicas para desenvolvimento muscular sem desgaste articular.',
    url: '/carousel-4.jpg',
    directImageUrl: '/carousel-4.jpg',
    tag: 'Linha Inferiores',
  },
];
