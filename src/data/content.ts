export type Photo = { src: string; alt: string };

export const photo = (name: string): string => `${import.meta.env.BASE_URL}photos/${name}.webp`;

export const STATS = [
  { label: "Capital", value: "Harare" },
  { label: "População", value: "≈ 16 milhões" },
  { label: "Área", value: "390.757 km²" },
  { label: "Línguas oficiais", value: "16" },
  { label: "Moeda", value: "ZiG (2024)" },
  { label: "Independência", value: "18 abr 1980" },
];

export const MARQUEE = [
  ["Mhoro", "olá"],
  ["Maita basa", "obrigado"],
  ["Zvakanaka", "tudo bem"],
  ["Dzimba dza mabwe", "casas de pedra"],
  ["Sadza", "o pão de milho"],
  ["Mbira", "piano de dedos"],
  ["Mosi-oa-Tunya", "a fumaça que troveja"],
];

export const TOPICS = [
  {
    to: "/historia",
    index: "01",
    title: "História",
    desc: "De uma cidade de granito sem argamassa a um país independente: mil anos em doze capítulos.",
    img: "gz-aerial",
    alt: "Vista aérea do Grande Zimbábue ao pôr do sol, com muralhas circulares de granito",
    className: "topic-card--a",
  },
  {
    to: "/cultura",
    index: "02",
    title: "Cultura",
    desc: "Mbira, pedra esculpida, cerimônias bira e dezesseis línguas vivas.",
    img: "mbira-woman",
    alt: "Mulher tocando mbira, o instrumento nacional do Zimbábue",
    className: "topic-card--b",
  },
  {
    to: "/culinaria",
    index: "03",
    title: "Culinária",
    desc: "O sadza no centro do prato, folhas com amendoim e o gosto defumado do Kariba.",
    img: "sadza",
    alt: "Prato de sadza com folhas verdes e peixe grelhado",
    className: "topic-card--c",
  },
  {
    to: "/paisagens",
    index: "04",
    title: "Paisagens",
    desc: "Victoria Falls, as colinas de Matobo, o Zambeze e as montanhas de Nyanga.",
    img: "vic-falls-pano",
    alt: "Vista aérea de Victoria Falls, com o rio Zambeze e a névoa da queda",
    className: "topic-card--d",
  },
] as const;

export type Era = {
  year: string;
  title: string;
  text: string;
  img?: string;
  alt?: string;
  era?: boolean;
};

export const TIMELINE: Era[] = [
  {
    year: "até o século XI",
    title: "Pintores de rocha e os primeiros agricultores",
    text: "Os povos San deixaram nas pedras de Matobo e Domboshava pinturas de antílopes, pessoas e mãos — algumas com milhares de anos. A partir do primeiro milênio, agricultores e pastores de língua bantu, ancestrais dos shona, ocuparam os planaltos e passaram a trabalhar o ferro, a cerâmica e o gado.",
    img: "rock-art",
    alt: "Pinturas rupestres em tons de ocre em uma caverna de Matobo, com uma pessoa observando",
  },
  {
    year: "séculos XI–XV",
    title: "O Grande Zimbábue",
    era: true,
    text: "Uma cidade de granito cresceu no planalto: muralhas de até 11 metros erguidas sem argamassa, a Grande Cerca com sua torre cônica e o Complexo da Colina. Cerca de 18 mil pessoas viveram ali. Ouro, marfim e cobre seguiam para a costa swahili e chegavam à China e à Pérsia — contas de vidro e cerâmicas encontradas nas ruínas provam. A cidade foi abandonada por volta de 1450.",
    img: "gz-tower",
    alt: "Torre cônica de pedra da Grande Cerca do Grande Zimbábue",
  },
  {
    year: "1430–1760",
    title: "Império Mutapa",
    text: "Herdeiros do Grande Zimbábue formaram o Mutapa, no vale do Zambeze, controlando as rotas do ouro e do marfim. No século XVI, comerciantes portugueses chegaram ao interior em busca de ouro e criaram feiras e alianças instáveis. Os europeus chamavam o soberano de Monomotapa.",
  },
  {
    year: "1684–1834",
    title: "Império Rozvi",
    text: "Sob o título de Changamire, os Rozvi reuniram um exército poderoso e resistiram tanto ao Mutapa quanto aos portugueses, mantendo o domínio do planalto central por mais de um século.",
  },
  {
    year: "1830–1890",
    title: "O reino ndebele",
    text: "Fugindo das guerras zulu, Mzilikazi atravessou o Limpopo com seu povo e fundou o reino ndebele no oeste, com capital em Bulawayo. Shona e ndebele passaram a dividir o território — e a relação entre os dois grupos marcaria a política do país.",
    img: "dancers",
    alt: "Grupo de dançarinos tradicionais com trajes coloridos",
  },
  {
    year: "1890",
    title: "A Coluna dos Pioneiros",
    text: "A Companhia Britânica da África do Sul, de Cecil Rhodes, ocupa o território. Em 12 de setembro de 1890 é fundado o Forte Salisbury — hoje Harare. Seguem-se guerras: a Primeira Guerra Matabele (1893) e a Segunda Chimurenga (1896–97), uma revolta conjunta de shona e ndebele contra a companhia.",
  },
  {
    year: "1923–1963",
    title: "Rodésia do Sul",
    text: "A colônia ganha autogoverno com uma minoria branca no poder. Entre 1953 e 1963, forma com a Rodésia do Norte e a Niassalândia a Federação da Rodésia e Niassalândia.",
  },
  {
    year: "1965",
    title: "Declaração unilateral de independência",
    text: "Ian Smith rompe com Londres e proclama a independência sob domínio branco. Sanções internacionais e isolamento se somam ao início da guerra de libertação — a Segunda Chimurenga — conduzida pela ZANLA e pela ZIPRA.",
  },
  {
    year: "1980",
    title: "Independência",
    era: true,
    text: "Em 18 de abril de 1980 nasce o Zimbábue, nome derivado de dzimba dza mabwe, “casas de pedra”. Robert Mugabe assume como primeiro-ministro. O pássaro de pedra-sabão do Grande Zimbábue entra na bandeira e Harare substitui Salisbury.",
    img: "harare",
    alt: "Vista da capital Harare com prédios e árvores",
  },
  {
    year: "2000–2009",
    title: "Terra, inflação e o dólar",
    text: "A reforma agrária acelerada desorganiza a agricultura e a economia entra em colapso. A hiperinflação de 2008 ficou entre as piores da história; em 2009 o país abandonou o dólar zimbabuano e passou a usar moedas estrangeiras.",
  },
  {
    year: "2017",
    title: "O fim de uma era",
    text: "Depois de 37 anos no poder, Mugabe renuncia em novembro de 2017, pressionado pelas Forças Armadas e por protestos nas ruas. Emmerson Mnangagwa assume a presidência e é reeleito em 2023.",
  },
  {
    year: "Hoje",
    title: "Pedra, sol e recomeço",
    text: "Cerca de 16 milhões de pessoas, 16 línguas oficiais e uma economia em reconstrução. Em 2024 o país lançou o ZiG, moeda lastreada em ouro e reservas minerais. O turismo e a música zimbabuana ganham o mundo.",
    img: "gz-inside",
    alt: "Interior da Grande Cerca do Grande Zimbábue com visitantes",
  },
];

export const LANGUAGES = [
  "Chewa",
  "Chibarwe",
  "Inglês",
  "Kalanga",
  "Koisan",
  "Nambya",
  "Ndau",
  "Ndebele",
  "Shangani",
  "Shona",
  "Língua de sinais",
  "Sotho",
  "Tonga",
  "Tswana",
  "Venda",
  "Xhosa",
];

export const DISHES = [
  {
    no: "01",
    name: "Sadza",
    tag: "Base",
    desc: "Farinha de milho branca cozida lentamente até virar um creme firme, servido em bolos generosos. É o centro de quase toda refeição: come-se com as mãos, moldando uma bolinha que vira colher para o molho. Em ndebele, chama-se isitshwala.",
  },
  {
    no: "02",
    name: "Muriwo une dovi",
    tag: "Acompanhamento",
    desc: "Folhas verdes — couve, espinafre ou folhas de abóbora — cozidas com pasta de amendoim. Cremoso, levemente doce e o par perfeito do sadza.",
  },
  {
    no: "03",
    name: "Huku e nyama",
    tag: "Proteína",
    desc: "O frango caipira, criado solto e chamado de roadrunner chicken, é cozido com tomate e cebola até o caldo reduzir. A carne de vaca segue o mesmo caminho, em ensopados escuros e perfumados.",
  },
  {
    no: "04",
    name: "Kapenta",
    tag: "Do lago",
    desc: "Pequenos peixes secos ao sol nas margens do lago Kariba, fritos com tomate e cebola. Crocantes, salgados, com um sabor de água doce que lembra o Zambeze.",
  },
  {
    no: "05",
    name: "Madora",
    tag: "Tradição",
    desc: "Lagartas de mopane secas e depois fritas, crocantes por fora. Ricas em proteína, são um petisco muito apreciado — e uma das comidas mais comentadas por quem visita o país.",
  },
  {
    no: "06",
    name: "Bota",
    tag: "Manhã",
    desc: "Mingau de milho, doce ou salgado, servido quente no café da manhã. A versão salgada leva um toque de manteiga; a doce, açúcar e às vezes leite.",
  },
  {
    no: "07",
    name: "Mazoe",
    tag: "Bebida",
    desc: "O refresco de laranja que virou símbolo nacional. Gelado, cítrico e doce, acompanha churrascos, almoços de domingo e conversas longas à sombra.",
  },
  {
    no: "08",
    name: "Mapopo",
    tag: "Doce",
    desc: "Doce feito de mamão verde cozido com açúcar e um fio de limão. Simples, dourado e com gosto de infância zimbabuana.",
  },
];

export const FOOD_NOTES = [
  {
    title: "Comer com as mãos",
    text: "O sadza é moldado com os dedos da mão direita e mergulhado no molho. Talheres existem, mas a tradição pede mãos lavadas e boa companhia.",
  },
  {
    title: "Prato para dividir",
    text: "É comum um único prato grande ficar no centro da mesa, e cada pessoa se servir dele. Comer sozinho é estranho; comer junto é o normal.",
  },
  {
    title: "Milho em tudo",
    text: "Do milho vem o sadza, o bota, a farinha e boa parte da economia doméstica. A safra do milho marca o calendário do país.",
  },
];

export type Place = {
  id: string;
  name: string;
  region: string;
  text: string;
  img: string;
  alt: string;
  tag: string;
};

export const PLACES: Place[] = [
  {
    id: "Victoria Falls",
    name: "Victoria Falls",
    region: "Fronteira com a Zâmbia",
    text: "Mosi-oa-Tunya, “a fumaça que troveja”: 1.708 metros de largura e 108 metros de altura, com névoa visível a quilômetros. Patrimônio Mundial da UNESCO desde 1989.",
    img: "vic-falls-pano",
    alt: "Vista aérea de Victoria Falls e do rio Zambeze",
    tag: "UNESCO · 1989",
  },
  {
    id: "Great Zimbabwe",
    name: "Grande Zimbábue",
    region: "Planalto central, perto de Masvingo",
    text: "A maior construção de pedra da África subsaariana antiga. Muralhas secas, a Grande Cerca e o Complexo da Colina, erguidos entre os séculos XI e XV.",
    img: "gz-overview",
    alt: "Vista aérea das ruínas do Grande Zimbábue",
    tag: "UNESCO · 1986",
  },
  {
    id: "Hwange",
    name: "Parque Nacional de Hwange",
    region: "Noroeste, perto de Botswana",
    text: "O maior parque do país, com cerca de 14.650 km² de savana de teca e mopane. Abriga dezenas de milhares de elefantes e mais de 100 espécies de mamíferos.",
    img: "hwange-elephants",
    alt: "Manada de elefantes em Hwange",
    tag: "Maior parque",
  },
  {
    id: "Matobo",
    name: "Colinas de Matobo",
    region: "Sul, perto de Bulawayo",
    text: "Blocos de granito empilhados como esculturas naturais, santuários de arte rupestre San e o túmulo de Cecil Rhodes no topo de Malindidzimu.",
    img: "matobo",
    alt: "Formações rochosas das colinas de Matobo",
    tag: "UNESCO · 2003",
  },
  {
    id: "Mana Pools",
    name: "Mana Pools",
    region: "Vale do Zambeze",
    text: "Planícies de inundação à beira do rio, onde elefantes e leões circulam livremente. O nome vem de “mana”, quatro, pelas lagoas que permanecem na seca.",
    img: "mana-pools",
    alt: "Elefante às margens do Zambeze em Mana Pools",
    tag: "UNESCO · 1984",
  },
  {
    id: "Nyanga",
    name: "Montanhas de Nyanga",
    region: "Terras Altas do Leste",
    text: "O ponto mais alto do país, o Monte Nyangani (2.592 m), cachoeiras, floresta de pinheiros e a ponte suspensa sobre a garganta do Mutarazi.",
    img: "nyanga",
    alt: "Ponte suspensa sobre a garganta em Nyanga",
    tag: "2.592 m",
  },
  {
    id: "Kariba",
    name: "Lago Kariba",
    region: "Fronteira com a Zâmbia",
    text: "Um dos maiores lagos artificiais do mundo em volume, formado pela barragem de Kariba, concluída em 1959. Árvores mortas ainda emergem da água.",
    img: "kariba",
    alt: "Pôr do sol no lago Kariba com árvores na água",
    tag: "Barragem · 1959",
  },
  {
    id: "Harare",
    name: "Harare",
    region: "Planalto central",
    text: "A capital, fundada como Forte Salisbury em 1890. Jardins, galerias de escultura shona, mercados de artesanato e uma cena musical que nunca para.",
    img: "harare",
    alt: "Vista da cidade de Harare",
    tag: "Capital",
  },
  {
    id: "Gonarezhou",
    name: "Gonarezhou",
    region: "Sudeste, fronteira com Moçambique",
    text: "“Lugar de muitos elefantes”, em shona. Cânions de arenito vermelho, o rio Save e o Chilojo Cliffs, uma das paisagens mais dramáticas do país.",
    img: "gonarezhou",
    alt: "Penhascos de arenito vermelho de Chilojo em Gonarezhou",
    tag: "Cânions vermelhos",
  },
  {
    id: "Chinhoyi",
    name: "Cavernas de Chinhoyi",
    region: "Norte, perto de Harare",
    text: "Uma rede de cavernas calcárias com um lago azul-turquesa de águas cristalinas, conhecido como Sleeping Pool, onde mergulhadores descem dezenas de metros.",
    img: "chinhoyi",
    alt: "Lago azul dentro da caverna de Chinhoyi",
    tag: "Lago azul",
  },
];
