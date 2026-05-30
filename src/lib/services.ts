export interface ServiceHighlight { label: string; value: string }
export interface ServiceBenefit  { icon: string; title: string; desc: string }
export interface ServiceStep     { number: string; title: string; desc: string }
export interface ServiceFAQ      { q: string; a: string }

export interface ServiceData {
  slug: string;
  icon: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  photo: string;
  highlights: ServiceHighlight[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faq: ServiceFAQ[];
  cta: { headline: string; sub: string };
  related: string[];
  seo: { title: string; description: string; keywords: string };
}

export const SERVICES: ServiceData[] = [
  /* ─── 1. PORTARIA E CONTROLE DE ACESSO ──────────────────────────────── */
  {
    slug: "portaria-controle-acesso",
    icon: "user-check",
    eyebrow: "Portaria & Controle de Acesso",
    title: "Portaria e Controle de Acesso profissional para seu patrimônio",
    subtitle:
      "Gestão rigorosa de entrada, saída e fluxo de pessoas. Profissionais treinados, POPs customizados e cobertura garantida 24 horas.",
    description:
      "A portaria é a primeira linha de defesa do seu condomínio ou empresa. A PS Proteção fornece porteiros e controladores de acesso com treinamento específico, procedimentos operacionais padronizados (POPs) customizados ao seu perfil e supervisão ativa de toda a operação.",
    photo: "servico-portaria.webp",
    highlights: [
      { label: "Disponibilidade", value: "24 h / dia" },
      { label: "Cobertura", value: "Folgas & Férias" },
      { label: "Relatório", value: "Mensal incluso" },
    ],
    benefits: [
      { icon: "file-text", title: "POPs Customizados", desc: "Procedimentos operacionais padrão elaborados de acordo com as regras do seu condomínio ou empresa." },
      { icon: "users",     title: "Cobertura Total",   desc: "Folgas, férias e ausências cobertas sem custo extra. Seu posto nunca fica descoberto." },
      { icon: "camera",    title: "Integração com CFTV", desc: "Porteiros treinados para operar câmeras, cancelas, interfones e sistemas de controle de acesso." },
      { icon: "shield",    title: "Supervisão Ativa 24 h", desc: "Supervisor presencial e remoto monitorando a operação e garantindo padrão de qualidade." },
      { icon: "clipboard", title: "Relatório de Ocorrências", desc: "Registro de entradas, saídas e ocorrências. Relatório mensal entregue ao gestor ou síndico." },
      { icon: "award",     title: "Profissionais Certificados", desc: "Porteiros com treinamento em atendimento ao público, segurança básica e legislação condominial." },
    ],
    process: [
      { number: "01", title: "Diagnóstico gratuito",  desc: "Visitamos o local, analisamos o fluxo de pessoas e identificamos vulnerabilidades." },
      { number: "02", title: "Definição dos POPs",    desc: "Elaboramos os procedimentos alinhados às regras e à cultura do cliente." },
      { number: "03", title: "Seleção & treinamento", desc: "Profissionais selecionados e treinados conforme o perfil do posto." },
      { number: "04", title: "Implantação & supervisão", desc: "Operação inicia com supervisão intensiva nos primeiros 30 dias." },
    ],
    faq: [
      { q: "O porteiro cobre folgas e férias automaticamente?",           a: "Sim. Garantimos substituição imediata sem custo adicional. Seu posto nunca fica descoberto, independentemente de folgas, férias ou afastamentos médicos." },
      { q: "É possível integrar ao sistema de cancela e câmera?",         a: "Sim. Treinamos nossos profissionais para operar os sistemas existentes no local — cancelas, interfones digitais, biometria ou RFID." },
      { q: "Qual o tempo médio de implantação?",                          a: "Em média 7 dias úteis após a assinatura do contrato. Em casos urgentes, conseguimos mobilizar em até 48 h." },
      { q: "Há controle de frequência dos porteiros?",                    a: "Sim. Todos os profissionais registram ponto eletrônico, com relatório disponível ao gestor. O supervisor realiza rondas de verificação." },
      { q: "Posso definir procedimentos específicos para meu condomínio?", a: "Sim. Os POPs são 100 % customizados, incluindo protocolo de visitantes, fornecedores, prestadores e situações de emergência." },
      { q: "O serviço inclui uniforme e equipamentos?",                   a: "Sim. Profissionais trabalham uniformizados e com todos os EPIs necessários. Equipamentos de comunicação e controle fornecidos conforme escopo." },
    ],
    cta: { headline: "Solicite um diagnóstico gratuito para sua portaria", sub: "Avaliamos seu condomínio ou empresa sem custo e entregamos proposta personalizada." },
    related: ["seguranca-vigia", "rondas-motorizadas", "zelador-manutencao"],
    seo: {
      title:       "Portaria e Controle de Acesso | PS Proteção — Americana SP",
      description: "Terceirização de portaria para condomínios e empresas em Americana SP. POPs customizados, cobertura de folgas garantida e supervisão 24 h na Região de Campinas.",
      keywords:    "portaria condomínio americana sp, controle de acesso empresas campinas, terceirização portaria americana, porteiro condomínio campinas",
    },
  },

  /* ─── 2. LIMPEZA E CONSERVAÇÃO ──────────────────────────────────────── */
  {
    slug: "limpeza-conservacao",
    icon: "sparkles",
    eyebrow: "Limpeza & Conservação",
    title: "Limpeza e Conservação com padrão profissional",
    subtitle:
      "Equipes certificadas, produtos homologados e cronograma personalizado. Ambientes sempre limpos, organizados e seguros.",
    description:
      "A PS Proteção oferece serviços de limpeza e conservação para condomínios residenciais, empresas comerciais e indústrias. Com equipe própria treinada, produtos profissionais e supervisão constante, garantimos resultados consistentes e ambientes impecáveis.",
    photo: "servico-limpeza.webp",
    highlights: [
      { label: "Cobertura",   value: "Feriados incluso" },
      { label: "Supervisão",  value: "Checklist diário"  },
      { label: "Relatório",   value: "Fotográfico"       },
    ],
    benefits: [
      { icon: "award",    title: "Equipe Certificada",    desc: "Profissionais treinados em técnicas de limpeza, uso correto de EPI e manuseio seguro de produtos químicos." },
      { icon: "shield",   title: "Produtos Homologados",  desc: "Produtos profissionais e biodegradáveis, certificados para uso em ambientes residenciais e comerciais." },
      { icon: "file-text",title: "Cronograma Personalizado", desc: "Plano de limpeza semanal/mensal de acordo com o porte e as necessidades do ambiente." },
      { icon: "camera",   title: "Relatório Fotográfico", desc: "Checklist fotográfico após cada execução, garantindo rastreabilidade e controle de qualidade." },
      { icon: "users",    title: "Cobertura Garantida",   desc: "Feriados, folgas e férias sempre cobertos. Sem interrupção da limpeza." },
      { icon: "settings", title: "Serviços Extras",       desc: "Limpeza técnica de vidros, fachadas, pós-obra e desinsetização mediante agendamento." },
    ],
    process: [
      { number: "01", title: "Visita técnica",           desc: "Levantamos a metragem, ambientes e frequência necessária para o melhor custo-benefício." },
      { number: "02", title: "Cronograma personalizado", desc: "Criamos plano de limpeza detalhado com frequência, horários e produtos adequados." },
      { number: "03", title: "Mobilização da equipe",    desc: "Equipe treinada, uniformizada e com kit de produtos completo é designada." },
      { number: "04", title: "Execução & supervisão",    desc: "Supervisores visitam e aplicam checklist fotográfico para garantir o padrão." },
    ],
    faq: [
      { q: "Os produtos são seguros para crianças e animais?",            a: "Sim. Utilizamos produtos homologados pela ANVISA. Mediante solicitação, trabalhamos com produtos 100 % biodegradáveis e sem alérgenos." },
      { q: "A equipe cobre feriados e recessos?",                         a: "Sim. Definimos em contrato a escala de feriados, garantindo continuidade sem custo extra." },
      { q: "Vocês atendem condomínios e empresas comerciais?",            a: "Sim. Atendemos condomínios residenciais, empresas, escritórios, indústrias e estabelecimentos de saúde." },
      { q: "Como é feito o controle de qualidade?",                       a: "Via checklist fotográfico após cada execução e supervisão presencial periódica. Relatório mensal com indicadores entregue ao gestor." },
      { q: "Posso solicitar limpeza extra para eventos?",                 a: "Sim. Mediante agendamento com antecedência mínima de 48 h, realizamos limpezas extras pontuais, pré e pós-evento." },
      { q: "Vocês fazem limpeza de vidros externos e fachadas?",          a: "Sim. Temos equipe especializada em limpeza técnica de vidros e fachadas, com equipamentos de segurança para trabalho em altura." },
    ],
    cta: { headline: "Solicite uma avaliação gratuita do seu ambiente", sub: "Apresentamos proposta com cronograma e custos detalhados sem compromisso." },
    related: ["zelador-manutencao", "copeira-auxiliar", "portaria-controle-acesso"],
    seo: {
      title:       "Limpeza e Conservação | PS Proteção — Americana SP",
      description: "Terceirização de limpeza para condomínios e empresas em Americana SP. Equipe certificada, relatório fotográfico, cobertura de feriados. Região de Campinas.",
      keywords:    "limpeza condomínio americana sp, terceirização limpeza campinas, conservação predial americana, limpeza comercial americana",
    },
  },

  /* ─── 3. SEGURANÇA E VIGIA ──────────────────────────────────────────── */
  {
    slug: "seguranca-vigia",
    icon: "shield",
    eyebrow: "Segurança & Vigia",
    title: "Segurança e Vigia com presença dissuasora",
    subtitle:
      "Vigilância presencial 24 h, dissuasão de ameaças e resposta rápida a ocorrências. Proteção que você sente e o invasor respeita.",
    description:
      "O serviço de segurança e vigia da PS Proteção coloca profissionais treinados no perímetro do seu patrimônio, criando uma barreira física e psicológica contra invasores. Com relatório de ocorrências diário e supervisão ativa, você tem visibilidade total sobre a segurança do local.",
    photo: "servico-seguranca.webp",
    highlights: [
      { label: "Operação",  value: "24 h / 365 dias" },
      { label: "Resposta",  value: "Imediata"        },
      { label: "Relatório", value: "Diário incluso"  },
    ],
    benefits: [
      { icon: "shield",    title: "Vigilância 24 h",       desc: "Presença contínua de profissional treinado em plantão, com cobertura total de turnos." },
      { icon: "eye",       title: "Dissuasão Ativa",       desc: "A presença física do vigia reduz drasticamente invasões, furtos e vandalismos." },
      { icon: "phone",     title: "Acionamento Rápido",    desc: "Protocolo de comunicação imediata com o responsável e central PS em casos de ocorrência." },
      { icon: "clipboard", title: "Relatório Diário",      desc: "Registro de todas as ocorrências, entradas e saídas por turno. Consolidado mensal ao gestor." },
      { icon: "users",     title: "Cobertura de Turno",    desc: "Substituição imediata em caso de falta. Sem postos descobertos em troca de turno." },
      { icon: "award",     title: "Profissionais Treinados", desc: "Vigias com treinamento em segurança patrimonial, primeiros socorros básicos e atendimento ao público." },
    ],
    process: [
      { number: "01", title: "Análise de risco",    desc: "Avaliamos vulnerabilidades do perímetro e definimos o posicionamento estratégico dos postos." },
      { number: "02", title: "Plano de segurança",  desc: "Elaboramos escala de turnos, procedimentos e fluxo de comunicação." },
      { number: "03", title: "Mobilização",         desc: "Profissionais selecionados e treinados para o perfil do cliente são implantados no prazo." },
      { number: "04", title: "Supervisão contínua", desc: "Supervisor realiza rondas de verificação e mantém contato direto com os postos." },
    ],
    faq: [
      { q: "O vigia é armado?",                                     a: "Depende do serviço contratado. Oferecemos vigia desarmado (dissuasão e controle de acesso) e vigilante armado (registro na PCSP). Indicamos após análise de risco." },
      { q: "Qual a diferença entre vigia e vigilante?",             a: "O vigilante é formado pela SENASP e pode portar armamento. O vigia realiza vigilância patrimonial sem armamento, focado em dissuasão e controle de fluxo." },
      { q: "Há cobertura 24 h com revezamento de turno?",           a: "Sim. Operamos com 2 ou 3 turnos conforme a necessidade, sem postos descobertos na troca de turno." },
      { q: "Como é a comunicação em caso de emergência?",           a: "O profissional segue protocolo definido em contrato: aciona a central da PS, o responsável do cliente e, se necessário, os órgãos de segurança pública." },
      { q: "Vocês emitem relatório de ocorrências?",                a: "Sim. Relatório por turno com registro de entradas, saídas e ocorrências. Consolidado mensal entregue ao gestor." },
      { q: "O vigia pode acumular função de porteiro?",             a: "Em alguns casos sim, dependendo do porte do local. Avaliamos o fluxo e o perfil do posto para recomendar o escopo mais adequado." },
    ],
    cta: { headline: "Proteja seu patrimônio com presença real", sub: "Diagnóstico gratuito. Análise de risco e proposta personalizada em até 24 h." },
    related: ["portaria-controle-acesso", "rondas-motorizadas", "zelador-manutencao"],
    seo: {
      title:       "Segurança e Vigia | PS Proteção — Americana SP",
      description: "Vigilância patrimonial presencial 24 h para condomínios e empresas em Americana SP. Vigias e vigilantes treinados, relatório diário. Região de Campinas.",
      keywords:    "vigia condomínio americana sp, vigilância patrimonial campinas, segurança privada americana, vigia noturno americana",
    },
  },

  /* ─── 4. RONDAS MOTORIZADAS ─────────────────────────────────────────── */
  {
    slug: "rondas-motorizadas",
    icon: "car",
    eyebrow: "Rondas Motorizadas",
    title: "Rondas Motorizadas de Segurança eficazes",
    subtitle:
      "Cobertura de perímetro externo com rondas programadas e aleatórias. Relatório fotográfico em cada visita e resposta rápida a acionamentos.",
    description:
      "As rondas motorizadas da PS Proteção oferecem uma camada extra de segurança para condomínios, empresas e comércios que precisam de presença física periódica sem manter um posto fixo. Nossos agentes percorrem rotas variadas, reduzindo previsibilidade e aumentando o efeito dissuasório.",
    photo: "servico-rondas.webp",
    highlights: [
      { label: "Frequência", value: "Até 6×/noite"  },
      { label: "Operação",   value: "365 dias/ano"  },
      { label: "Relatório",  value: "Por ronda"     },
    ],
    benefits: [
      { icon: "car",       title: "Rondas Variadas",       desc: "Horários e rotas aleatórias para eliminar previsibilidade e maximizar o efeito dissuasório." },
      { icon: "camera",    title: "Relatório Fotográfico", desc: "Cada ronda gera relatório com horário, local e status do perímetro, enviado ao gestor." },
      { icon: "zap",       title: "Resposta a Acionamentos", desc: "Plantão 24 h para acionamentos urgentes. Agente mais próximo deslocado em tempo mínimo." },
      { icon: "map-pin",   title: "Cobertura de Perímetro", desc: "Verificação de portões, muros, iluminação e pontos vulneráveis do perímetro externo." },
      { icon: "shield",    title: "Viaturas Identificadas", desc: "Veículos com marca PS Proteção reforçam o efeito dissuasório perante invasores." },
      { icon: "clock",     title: "Operação Anual",         desc: "Sem interrupção em feriados ou recessos. 365 dias por ano garantidos." },
    ],
    process: [
      { number: "01", title: "Mapeamento do local", desc: "Levantamos pontos de entrada, vulnerabilidades e as melhores rotas de ronda." },
      { number: "02", title: "Definição da escala", desc: "Programamos frequência, horários e setores de acordo com o perfil de risco." },
      { number: "03", title: "Implantação",         desc: "Agentes treinados para a rota específica iniciam a operação com supervisão." },
      { number: "04", title: "Relatório & melhoria", desc: "Relatórios periódicos geram ajustes de rota e frequência para otimizar a efetividade." },
    ],
    faq: [
      { q: "Com qual frequência são realizadas as rondas?",              a: "De 2 a 6 rondas por noite, com horários variados. Também oferecemos rondas diurnas para comércios." },
      { q: "Tenho acesso aos relatórios fotográficos?",                  a: "Sim. Enviados após cada ronda via e-mail ou sistema de gestão, arquivados para consulta." },
      { q: "Os veículos de ronda são identificados?",                    a: "Sim. Viaturas identificadas com a marca PS Proteção, reforçando o efeito dissuasório." },
      { q: "O serviço funciona em feriados e fins de semana?",           a: "Sim. Operamos 365 dias por ano, incluindo feriados nacionais e estaduais, sem custo adicional." },
      { q: "É possível acionar a equipe em caso de emergência?",        a: "Sim. Mantemos plantão 24 h para acionamentos urgentes. O agente mais próximo é deslocado no menor tempo possível." },
      { q: "As rondas substituem a necessidade de um vigia fixo?",      a: "Para muitos perfis de risco, sim. Avaliamos o seu caso e podemos recomendar composição entre rondas e posto fixo para o melhor custo-benefício." },
    ],
    cta: { headline: "Adicione uma camada extra de segurança ao seu patrimônio", sub: "Diagnóstico gratuito e proposta personalizada. Rondas que fazem a diferença." },
    related: ["seguranca-vigia", "portaria-controle-acesso", "zelador-manutencao"],
    seo: {
      title:       "Rondas Motorizadas de Segurança | PS Proteção — Americana SP",
      description: "Rondas motorizadas para condomínios e empresas em Americana SP. Relatório fotográfico por ronda, plantão 24 h, 365 dias. Região de Campinas.",
      keywords:    "rondas motorizadas americana sp, segurança perímetro campinas, ronda noturna americana, viatura segurança americana",
    },
  },

  /* ─── 5. COPEIRA E AUXILIAR ─────────────────────────────────────────── */
  {
    slug: "copeira-auxiliar",
    icon: "coffee",
    eyebrow: "Copeira & Auxiliar",
    title: "Copeira e Auxiliar para o dia a dia da sua empresa",
    subtitle:
      "Preparo de café, organização de copa, apoio em reuniões e eventos internos. Discrição, pontualidade e apresentação impecável.",
    description:
      "A PS Proteção fornece copeiras e auxiliares treinados para manter a copa e a cozinha da sua empresa organizadas, limpas e sempre abastecidas. O serviço é personalizado conforme a rotina do cliente, com cobertura de folgas garantida e sem burocracia de contratação direta.",
    photo: "servico-copeira.webp",
    highlights: [
      { label: "Horário",  value: "Flexível"     },
      { label: "Cobertura",value: "Folgas incluso"},
      { label: "Eventos",  value: "Apoio incluso" },
    ],
    benefits: [
      { icon: "coffee",    title: "Preparo de Bebidas",   desc: "Café, chás, sucos e lanches preparados conforme a rotina e preferências da equipe." },
      { icon: "settings",  title: "Organização de Copa",  desc: "Higienização diária de utensílios, organização de armários e controle de insumos." },
      { icon: "star",      title: "Apoio a Reuniões",     desc: "Preparação e organização de salas para reuniões e eventos internos com padrão profissional." },
      { icon: "shield",    title: "Higiene & Segurança",  desc: "Treinamento em boas práticas de manipulação de alimentos e uso de EPIs adequados." },
      { icon: "users",     title: "Cobertura Garantida",  desc: "Folgas e férias sempre cobertas. Sem perder o padrão em nenhum dia." },
      { icon: "clock",     title: "Horário Flexível",     desc: "Carga horária adaptável: integral, meio período ou horário específico para a sua rotina." },
    ],
    process: [
      { number: "01", title: "Diagnóstico de rotina",   desc: "Entendemos horários, volumes e preferências para definir o perfil ideal." },
      { number: "02", title: "Seleção do profissional", desc: "Selecionamos copeira com perfil adequado à cultura da empresa." },
      { number: "03", title: "Treinamento & integração",desc: "Alinhamos procedimentos específicos e integramos o profissional à equipe." },
      { number: "04", title: "Supervisão contínua",     desc: "Visitas periódicas do supervisor e avaliações de qualidade." },
    ],
    faq: [
      { q: "A copeira pode fazer pequenas compras de insumos?",         a: "Pode gerenciar listas de compras e receber pedidos. As compras ficam a cargo do cliente ou de um responsável designado." },
      { q: "O serviço inclui cobertura de almoço e jantar?",            a: "Dependendo do escopo, podemos incluir auxiliar de cozinha para refeições completas. Avaliamos o caso e adequamos a proposta." },
      { q: "Qual a carga horária padrão?",                              a: "Geralmente 8 h/dia, podendo ser ajustada para meio período (4 h) ou horários específicos conforme a necessidade." },
      { q: "Vocês cobrem feriados?",                                    a: "Sim. A cobertura de feriados é definida em contrato, com escala programada para não interromper o serviço." },
      { q: "É possível contratar para eventos pontuais?",               a: "Sim. Temos modalidade de contrato por evento ou temporada para treinamentos, convenções e confraternizações." },
      { q: "Como funciona a substituição em caso de falta?",            a: "Imediata — em até 2 horas a partir da comunicação da ausência, conforme definido em contrato." },
    ],
    cta: { headline: "Profissionalismo no dia a dia da sua empresa", sub: "Copeira treinada sem burocracia de contratação direta. Solicite uma proposta." },
    related: ["auxiliar-administrativo", "recepcionista", "limpeza-conservacao"],
    seo: {
      title:       "Copeira e Auxiliar | PS Proteção — Americana SP",
      description: "Terceirização de copeira e auxiliar para empresas em Americana SP. Cobertura de folgas, apoio a eventos, horário flexível. Região de Campinas.",
      keywords:    "copeira empresa americana sp, terceirização copeira campinas, auxiliar copa empresa, copeira terceirizada americana",
    },
  },

  /* ─── 6. AUXILIAR ADMINISTRATIVO ───────────────────────────────────── */
  {
    slug: "auxiliar-administrativo",
    icon: "briefcase",
    eyebrow: "Auxiliar Administrativo",
    title: "Auxiliar Administrativo terceirizado com competência",
    subtitle:
      "Suporte operacional ao back-office da sua empresa. Profissionais organizados, discretos e comprometidos — sem encargo de CLT direto.",
    description:
      "A PS Proteção fornece auxiliares administrativos treinados para apoiar os processos internos da sua empresa com eficiência e discrição. Desde o arquivamento de documentos até o atendimento de chamadas, o auxiliar absorve demandas operacionais que liberam sua equipe para o core do negócio.",
    photo: "servico-auxiliar-admin.webp",
    highlights: [
      { label: "Perfil",     value: "Médio/Técnico/Superior" },
      { label: "Cobertura",  value: "Férias incluso"         },
      { label: "Supervisão", value: "Periódica PS"           },
    ],
    benefits: [
      { icon: "file-text",  title: "Organização & Arquivo",  desc: "Triagem, classificação e arquivamento físico e digital de documentos conforme os processos internos." },
      { icon: "phone",      title: "Atendimento Telefônico", desc: "Recebimento e encaminhamento de chamadas com cordialidade e protocolo definido pelo cliente." },
      { icon: "settings",   title: "Suporte a Processos",    desc: "Apoio a rotinas administrativas: emissão de documentos, controle de agenda e cadastros." },
      { icon: "briefcase",  title: "Sem Encargo CLT",        desc: "Conte com o profissional sem os custos de contratação direta (férias, 13º, FGTS, INSS)." },
      { icon: "users",      title: "Cobertura Garantida",    desc: "Férias, folgas e afastamentos cobertos. Sem interrupção das suas rotinas administrativas." },
      { icon: "award",      title: "Perfil Customizado",     desc: "Selecionamos o profissional conforme o nível de escolaridade, ferramentas e sistemas exigidos." },
    ],
    process: [
      { number: "01", title: "Briefing de demanda",      desc: "Mapeamos tarefas, sistemas e o perfil ideal para a função na sua empresa." },
      { number: "02", title: "Seleção personalizada",    desc: "Recrutamos profissionais com perfil técnico e comportamental alinhado ao cliente." },
      { number: "03", title: "Treinamento & integração", desc: "Realizamos treinamento nos sistemas e processos do cliente antes do início." },
      { number: "04", title: "Supervisão & avaliação",   desc: "Supervisor da PS acompanha periodicamente e aplica avaliação de desempenho." },
    ],
    faq: [
      { q: "O auxiliar pode operar sistemas específicos da minha empresa?", a: "Sim. Realizamos treinamento nos sistemas e ferramentas indicados pelo cliente (ERPs, planilhas, sistemas de atendimento, etc.)." },
      { q: "Qual o perfil dos profissionais?",                              a: "Ensino médio completo com domínio de pacote Office, organização e discrição. Temos também profissionais de nível técnico e superior para demandas especializadas." },
      { q: "É possível solicitar nível superior?",                          a: "Sim. Temos profissionais com graduação e experiência em áreas como financeiro, RH e logística." },
      { q: "Vocês cobrem férias e licenças?",                               a: "Sim. Substituição garantida durante o período de ausência, sem interrupção das suas rotinas administrativas." },
      { q: "Há supervisão da PS sobre o profissional?",                     a: "Sim. Um supervisor realiza visitas periódicas, aplica avaliação de desempenho e está disponível para o gestor do cliente." },
      { q: "Qual a diferença entre contratar via PS e contratar direto?",   a: "Ao contratar via PS você elimina encargos trabalhistas diretos, reduz risco de passivo trabalhista e tem substituição imediata garantida." },
    ],
    cta: { headline: "Profissional administrativo pronto para começar", sub: "Sem seleção, sem burocracia CLT. Solicite uma proposta e tenha o suporte que sua equipe precisa." },
    related: ["recepcionista", "copeira-auxiliar", "zelador-manutencao"],
    seo: {
      title:       "Auxiliar Administrativo Terceirizado | PS Proteção — Americana SP",
      description: "Terceirização de auxiliar administrativo para empresas em Americana SP. Perfil customizado, cobertura de férias, sem encargo CLT. Região de Campinas.",
      keywords:    "auxiliar administrativo terceirizado americana sp, terceirização administrativa campinas, auxiliar escritório americana, back office terceirizado",
    },
  },

  /* ─── 7. RECEPCIONISTA ──────────────────────────────────────────────── */
  {
    slug: "recepcionista",
    icon: "monitor",
    eyebrow: "Recepcionista",
    title: "Recepcionista terceirizada com alto padrão",
    subtitle:
      "Primeira impressão que encanta. Recepção de visitantes, triagem de chamadas e agendamentos com postura impecável e identidade alinhada à sua marca.",
    description:
      "A recepcionista da PS Proteção é o rosto da sua empresa. Selecionamos profissionais com perfil de atendimento de alto padrão, treinamos na cultura do cliente e garantimos cobertura integral — sua recepção nunca fica desassistida.",
    photo: "servico-recepcionista.webp",
    highlights: [
      { label: "Apresentação",  value: "Alto padrão" },
      { label: "Substituição",  value: "Em até 2 h"  },
      { label: "Uniforme",      value: "Incluso"     },
    ],
    benefits: [
      { icon: "smile",     title: "Atendimento de Alto Padrão", desc: "Profissionais com postura, linguagem e apresentação alinhados à identidade da sua empresa." },
      { icon: "phone",     title: "Triagem de Chamadas",        desc: "Atendimento telefônico e virtual com protocolo definido, encaminhamento correto e registro de recados." },
      { icon: "settings",  title: "Agendamentos & Controle",   desc: "Gestão da agenda de visitantes, salas de reunião e controle de acesso à recepção." },
      { icon: "award",     title: "Uniforme Profissional",      desc: "Uniforme padrão PS Proteção incluso. Personalização disponível conforme a identidade da empresa." },
      { icon: "users",     title: "Cobertura Imediata",         desc: "Substituição em até 2 h em caso de ausência. Sua recepção nunca fica sem profissional." },
      { icon: "briefcase", title: "Sem Encargo CLT",            desc: "Recepcionista qualificada sem os custos e burocracia de contratação direta." },
    ],
    process: [
      { number: "01", title: "Alinhamento de perfil",    desc: "Entendemos a cultura, o volume de atendimento e o padrão esperado para selecionar o perfil ideal." },
      { number: "02", title: "Seleção & treinamento",    desc: "Recrutamos e treinamos a profissional nos processos, sistemas e linguagem do cliente." },
      { number: "03", title: "Implantação acompanhada",  desc: "Início com supervisor nos primeiros dias para garantir alinhamento total." },
      { number: "04", title: "Avaliação contínua",       desc: "Supervisão periódica e canal aberto com o gestor para ajustes rápidos." },
    ],
    faq: [
      { q: "A recepcionista faz atendimento telefônico e presencial?",    a: "Sim. O escopo pode incluir ambos. Definimos em contrato quais canais serão cobertos: presencial, telefone, e-mail e/ou chat." },
      { q: "Qual o nível de apresentação exigido?",                       a: "Alto padrão — uniforme, postura, vocabulário e linguagem alinhados à cultura da empresa. Realizamos treinamento específico antes do início." },
      { q: "Vocês fornecem o uniforme?",                                  a: "Sim. Uniforme padrão PS Proteção incluso. Personalização com as cores ou logotipo do cliente disponível mediante custo adicional." },
      { q: "É possível ter recepcionista bilíngue?",                      a: "Temos profissionais com inglês básico e intermediário. Para inglês fluente ou outros idiomas, realizamos seleção específica sob consulta." },
      { q: "Como é feita a substituição em caso de falta?",               a: "Imediata — em até 2 h a partir da comunicação da ausência, garantida em contrato." },
      { q: "A recepcionista pode acumular funções administrativas?",      a: "Sim. Mediante escopo definido em contrato, pode acumular arquivamento, digitação e controle de documentos." },
    ],
    cta: { headline: "A primeira impressão da sua empresa merece o melhor", sub: "Solicite uma proposta e tenha uma recepcionista de alto padrão sem burocracia." },
    related: ["auxiliar-administrativo", "copeira-auxiliar", "portaria-controle-acesso"],
    seo: {
      title:       "Recepcionista Terceirizada | PS Proteção — Americana SP",
      description: "Terceirização de recepcionista para empresas em Americana SP. Alto padrão de atendimento, uniforme incluso, cobertura imediata. Região de Campinas.",
      keywords:    "recepcionista terceirizada americana sp, terceirização recepção campinas, recepcionista empresa americana, recepção corporativa americana",
    },
  },

  /* ─── 8. ZELADOR E MANUTENÇÃO ───────────────────────────────────────── */
  {
    slug: "zelador-manutencao",
    icon: "wrench",
    eyebrow: "Zelador & Manutenção",
    title: "Zelador e Manutenção para seu condomínio ou empresa",
    subtitle:
      "Conservação de áreas comuns, manutenção preventiva e corretiva, gestão de prestadores externos. Menos preocupação, mais qualidade de vida.",
    description:
      "O zelador da PS Proteção garante o bom funcionamento e a conservação do seu patrimônio no dia a dia. Com treinamento em manutenção básica, gestão de demandas e relacionamento com moradores e colaboradores, é um ponto de apoio fundamental para a administração.",
    photo: "servico-zelador.webp",
    highlights: [
      { label: "Manutenção",  value: "Preventiva & Corretiva" },
      { label: "Demandas",    value: "Registro & Controle"    },
      { label: "EPI",         value: "Fornecido"              },
    ],
    benefits: [
      { icon: "wrench",    title: "Manutenção Preventiva", desc: "Inspeções e manutenções programadas que evitam falhas e reduzem custos com reparos emergenciais." },
      { icon: "zap",       title: "Atendimento Corretivo", desc: "Reparo rápido de problemas de elétrica básica, hidráulica, serralheria e conservação geral." },
      { icon: "settings",  title: "Gestão de Prestadores", desc: "Coordenação e recepção de prestadores externos, acompanhamento de serviços e controle de acesso." },
      { icon: "file-text", title: "Registro de Demandas",  desc: "Sistema de chamados ou planilha para registro, priorização e acompanhamento de todas as demandas." },
      { icon: "shield",    title: "EPI Fornecido",         desc: "Todos os equipamentos de proteção individual necessários para execução segura das atividades." },
      { icon: "users",     title: "Cobertura Garantida",   desc: "Férias e folgas cobertas pela PS. Seu condomínio nunca fica sem zelador." },
    ],
    process: [
      { number: "01", title: "Levantamento de demandas", desc: "Visitamos o local e levantamos as principais necessidades de manutenção e conservação." },
      { number: "02", title: "Definição do escopo",      desc: "Elaboramos o plano de trabalho com atividades diárias, semanais e mensais." },
      { number: "03", title: "Seleção do profissional",  desc: "Zelador selecionado com perfil técnico adequado ao porte do condomínio ou empresa." },
      { number: "04", title: "Supervisão & relatório",   desc: "Supervisão periódica e relatório de demandas para o síndico ou gestor." },
    ],
    faq: [
      { q: "O zelador executa serviços de elétrica e hidráulica?",    a: "Serviços básicos e emergenciais, sim. Para obras de maior complexidade, acionamos parceiros credenciados." },
      { q: "Há um sistema para registro de demandas?",                a: "Sim. Utilizamos planilha ou sistema de chamados conforme a preferência do cliente, com visibilidade total para o síndico ou gestor." },
      { q: "O zelador pode gerenciar prestadores externos?",          a: "Sim. Coordena entrada, acompanhamento e saída de prestadores externos dentro do escopo contratado." },
      { q: "Qual a disponibilidade em emergências fora do horário?",  a: "Temos suporte de plantão para emergências fora do horário padrão. O protocolo de acionamento é definido em contrato." },
      { q: "Os EPIs são fornecidos pela PS Proteção?",                a: "Sim. Todos os EPIs necessários para execução segura das atividades estão inclusos no contrato." },
      { q: "Vocês cobrem as férias do zelador?",                      a: "Sim. Substituição garantida durante todo o período de férias ou afastamento, sem interrupção do serviço." },
    ],
    cta: { headline: "Seu patrimônio bem cuidado todos os dias", sub: "Zelador comprometido sem burocracia de contratação. Solicite uma proposta agora." },
    related: ["limpeza-conservacao", "portaria-controle-acesso", "seguranca-vigia"],
    seo: {
      title:       "Zelador e Manutenção | PS Proteção — Americana SP",
      description: "Terceirização de zelador para condomínios e empresas em Americana SP. Manutenção preventiva e corretiva, gestão de prestadores, cobertura de férias. Região de Campinas.",
      keywords:    "zelador condomínio americana sp, manutenção predial campinas, zelador terceirizado americana, conservação condomínio americana",
    },
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find(s => s.slug === slug);
}

export function getRelatedServices(service: ServiceData): ServiceData[] {
  return service.related
    .map(slug => SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as ServiceData[];
}
