export const productLines = [
  // ==========================================
  // --- MACRO-CATEGORÍA: SOBRE CHASIS ---
  // ==========================================
  {
    id: 'barandas',
    title: 'Barandas (Tipo Baranda / Madera / Telera)',
    macroCategory: 'Sobre Chasis',
    desc: 'Carrocerías abiertas de madera selecta o metal para carga general.',
    longDesc: 'Fabricamos barandas comerciales, teleras y artísticas adaptadas a cualquier chasis. Estructuras rígidas que combinan la flexibilidad de la madera tratada con parantes y bases de acero estructural, forradas opcionalmente en panagra para rotulación corporativa o trabajos de aerografía premium.',
    images: [
      '/baranda-artistica-aerografia-compleja.webp',
      '/baranda-artistica-caballo.webp',
      '/baranda-artistica-caballo (2).webp',
      '/baranda-bicolor-con-canastilla.webp',
      '/baranda-blanca-sin-panagra.webp',
      '/baranda-comercial-blanca-canastilla.webp',
      '/baranda-comercial-panagra-roja.webp',
      '/baranda-con-canastilla-ligera.webp',
      '/baranda-madera-aerografia-personalizada.webp',
      '/baranda-madera-con-canastilla.webp',
      '/baranda-madera-expuesta-towner.webp',
      '/baranda-madera-panagra-peru.webp',
      '/baranda-madera-pintura-fenix.webp',
      '/baranda-metalica-abierta-utilitario.webp',
      '/baranda-metalica-alta-canastilla.webp',
      '/baranda-panagra-fija-isuzu.webp',
      '/baranda-panagra-fija-roja.webp',
      '/baranda-panagra-verde-isuzu.webp',
      '/baranda-panagra-verde-leon.webp',
      
      '/transporte-personal-bicolor.webp'
    ],
    specs: [
      'Estructura base en acero de alta resistencia (LAF / LAC)',
      'Listones de madera selecta tratada contra la humedad y torsión',
      'Forro exterior en panagra texturizado o liso',
      'Canastillas superiores (copetes) aerodinámicas integradas',
      'Sistema de compuertas rebatibles o fijas según requerimiento'
    ]
  },
  {
    id: 'furgones',
    title: 'Furgones (Cerrados / Comerciales)',
    macroCategory: 'Sobre Chasis',
    desc: 'Carrocerías cerradas herméticas para protección total de mercancías.',
    longDesc: 'Diseño y fabricación de furgones metálicos para distribución logística urbana e interprovincial. Estructuras totalmente selladas que garantizan la seguridad de la carga contra la intemperie y robos, optimizados con deflectores de aire para reducir el consumo de combustible.',
    images: [
      '/carrocerias-metálicas.webp',
      '/furgon-cerrado-hd-isuzu-fvr.webp',
      '/furgon-cerrado-madezza.webp',
      '/furgon-cerrado-rampa-elevadora.webp',
      '/furgon-comercial-metalico-ligero.webp',
      '/furgon-con-cortaviento-aerodinamico.webp',
     
      '/furgon-con-rampa-hidraulica-azul.webp',
      '/furgon-cortaviento-plataforma-hidraulica.webp',
      '/furgon-heavy-duty-isuzu.webp',
      '/furgon-logistico-cat.webp',
      '/furgon-sin-panagra-heavy-duty.webp'
    ],
    specs: [
      'Paredes en planchas metálicas lisas o corrugadas',
      'Puertas posteriores tipo libro con empaquetaduras herméticas',
      'Puertas laterales de acceso rápido opcionales (corredizas o batientes)',
      'Forro interior adaptado al tipo de carga comercial',
      'Iluminación interior LED reglamentaria'
    ]
  },
  {
    id: 'furgon-pollero',
    title: 'Furgón Pollero y Distribución Avícola',
    macroCategory: 'Sobre Chasis',
    desc: 'Carrocerías con enrejado metálico optimizadas para transporte de aves.',
    longDesc: 'Estructuras ventiladas fabricadas especialmente para el sector avícola. Diseñadas para maximizar la capacidad de alojamiento de jabas de aves vivas, asegurando un flujo de aire constante para reducir la mortalidad en trayecto, combinando laterales de malla con cerramientos rígidos de seguridad.',
    images: [
      '/baranda-avicola-herlinda.webp',
      '/carroceria-pollero-semirremolque-roja.webp',
      '/carroceria-pollero-sobre-chasis.webp',
      '/furgon-comercial-avicola (2).webp'
    ],
    specs: [
      'Laterales en malla metálica electrosoldada de alta resistencia',
      'Estructuras internas tubulares para fijación de jabas',
      'Techo sellado para protección solar directa',
      'Compuertas posteriores reforzadas con sistemas de barra'
    ]
  },
  {
    id: 'volquetes',
    title: 'Volquetes (Tolvas de Volteo)',
    macroCategory: 'Sobre Chasis',
    desc: 'Tolvas estructurales con sistemas hidráulicos para carga pesada.',
    longDesc: 'Diseño de tolvas de volteo heavy duty para camiones de dos y tres ejes (tándem posterior). Construidas íntegramente con aceros de alta resistencia a la abrasión e impactos, ideales para el movimiento de tierras, agregados, minería y construcción civil.',
    images: [
      '/olva-volteo-amarillo-negro.webp',
      '/olva-volteo-amarillo-negro (2).webp',
      '/tolva-estructural-volteo-azul.webp'
    ],
    specs: [
      'Fabricación en planchas de acero estructural de alto límite elástico',
      'Sistema de izaje mediante cilindro hidráulico telescópico frontal',
      'Visera frontal extendida para protección completa de la cabina',
      'Compuerta posterior con apertura automática por gravedad'
    ]
  },
  {
    id: 'furgones-refrigerados',
    title: 'Furgones Refrigerados e Isotérmicos',
    macroCategory: 'Sobre Chasis',
    desc: 'Carrocerías con aislamiento térmico para transporte de cadena de frío.',
    longDesc: 'Unidades herméticas aisladas estructuralmente para el traslado de productos perecederos, lácteos, carnes y medicinas. Mantienen la temperatura interna óptima reduciendo la transferencia de calor exterior.',
    images: [
      '/furgon-frigorifico-isotermico-blanco.webp'
    ],
    specs: [
      'Aislamiento interior en poliuretano inyectado de alta densidad',
      'Revestimiento interno en fibra de vidrio de grado alimentario (PRFV)',
      'Piso de aluminio acanalado para optimizar flujo de aire frío',
      'Refuerzos estructurales listos para instalación de equipos de frío'
    ]
  },
  {
    id: 'cisterna',
    title: 'Cisternas',
    macroCategory: 'Sobre Chasis',
    desc: 'Tanques cilíndricos o elípticos para el transporte de fluidos.',
    longDesc: 'Unidades cisterna diseñadas para el transporte seguro de agua (regadío o consumo humano), combustibles o fluidos industriales, garantizando estabilidad y rompeolas internos reglamentarios.',
    images: [
      '/camion-cisterna-agua-no-potable-hino.webp',
      '/camion-cisterna-combustible-hyundai-mighty.webp',
      '/camion-cisterna-combustible-roja.webp',
      '/semirremolque-cisterna-combustible-rojo.webp'
    ],
    specs: [
      'Construcción cilíndrica o elíptica en acero LAC o acero inoxidable',
      'Sistema interno de rompeolas para control dinámico del fluido',
      'Escotillas superiores de inspección con válvulas de presión y vacío',
      'Sistema de descarga rápida con válvulas de bola industriales'
    ]
  },

  // ==========================================
  // --- MACRO-CATEGORÍA: SEMIRREMOLQUES ---
  // ==========================================
  {
    id: 'plataformas',
    title: 'Plataformas y Portacontenedores',
    macroCategory: 'Semirremolques',
    desc: 'Estructuras rodantes de múltiples ejes para carga pesada y contenedores.',
    longDesc: 'Semirremolques diseñados para el transporte de contenedores estandarizados de 20 y 40 pies, así como carga general sobredimensionada. Equipados con vigas principales robustas para soportar altas toneladas en carreteras nacionales.',
    images: [
      '/plataforma-carga-pesada-metalica.webp'
    ],
    specs: [
      'Vigas principales en perfil "I" de acero estructural de alta resistencia',
      'Configuración de ejes en tándem o tridem (según capacidad de carga)',
      'Pinzas de sujeción rápida (locks) para contenedores marinos',
      'Barandas perimetrales rebatibles de altura media'
    ]
  },
 // {
   // id: 'cama-baja',
  //  title: 'Semirremolques Tipo Cama Baja',
  //  macroCategory: 'Semirremolques',
    //desc: 'Unidades rebajadas para el transporte de maquinaria pesada.',
  //  longDesc: 'Plataformas de baja altura diseñadas especialmente para el traslado seguro de maquinaria pesada amarilla (excavadoras, tractores, rodillos) optimizando el centro de gravedad y respetando los límites de altura en ruta.',
  //  images: [],
    //specs: [
   //   'Cuello de ganso fijo o desmontable hidráulico',
    //  'Plataforma de carga rebajada con piso de madera dura o metal estriado',
   //   'Rampas de acceso posteriores de accionamiento manual o hidráulico',
   //   'Ejes de alta capacidad con suspensión mecánica o neumática'
   // ]
  //},

  // ==========================================
  // --- MACRO-CATEGORÍA: REMOLQUES ---
  // ==========================================
  //{
  //  id: 'remolques',
  //  title: 'Remolques Especiales',
   // macroCategory: 'Remolques',
  //  desc: 'Unidades de enganche directo para ampliación de capacidad de carga.',
   // longDesc: 'Unidades de remolque equilibradas para acoplar directamente a camiones rígidos, permitiendo duplicar el volumen logístico de transporte en una sola ruta de operación comercial.',
   // images: [],
   // specs: [
   //   'Lanza de enganche reforzada con ojo de tracción homologado',
   //   'Sistemas de frenos neumáticos integrados sincronizados',
   //   'Configuraciones de ejes centrales o direccionales con tornamesa',
      //'Carrocería superior configurable (baranda, furgón o plataforma)'
    //]
  //},

  // ==========================================
  // --- MACRO-CATEGORÍA: ACONDICIONAMIENTO ---
  // ==========================================
  {
    id: 'ala-gaviota',
    title: 'Furgones Tipo Ala de Gaviota',
    macroCategory: 'Acondicionamiento',
    desc: 'Sistemas de apertura lateral hidráulica para carga y descarga express.',
    longDesc: 'Modificación técnica avanzada de furgones donde las paredes laterales se elevan por completo de manera vertical mediante pistones hidráulicos. Ideal para operaciones logísticas masivas que requieren acceso inmediato a palets.',
    images: [
        '/camion-mercedes-benz-carroceria-ala-gaviota.webp',
      
      
    ],
    specs: [
      'Apertura lateral mediante cilindros hidráulicos controlados',
      'Estructura de paneles aligerados para no penalizar la carga útil',
      'Sellado perimetral de alta estanqueidad contra filtraciones',
      'Sistemas de bloqueo de seguridad mecánicos para viaje'
    ]
  },
  {
    id: 'ambulancia',
    title: 'Conversiones y Ambulancias',
    macroCategory: 'Acondicionamiento',
    desc: 'Transformación integral de vehículos para atención médica y misiones especiales.',
    longDesc: 'Acondicionamiento interno y externo de furgonetas o módulos sobre chasis para cumplir estrictamente con las normas de salud vigentes. Distribución ergonómica para el traslado y atención médica de pacientes.',
    images: [
      '/ambulancia-la industrial.webp',
      '/ambulancia-laindustrial.webp',
      '/ambulancia.webp',
    ],
    specs: [
      'Aislamiento termo-acústico y revestimiento interior de fácil asepsia',
      'Sistema eléctrico independiente con inversor de corriente y tomas de 220V/12V',
      'Anclajes estructurales certificados para camillas y balones de oxígeno',
      'Mobiliario médico integrado en materiales ligeros y lavables'
    ]
  },

  {
    id: 'deflectores',
    title: 'Deflectores Aerodinámicos (Cortavientos)',
    macroCategory: 'Acondicionamiento',
    desc: 'Estructuras en fibra de vidrio para reducir la resistencia al viento y optimizar combustible.',
    longDesc: 'Fabricación e instalación de deflectores aerodinámicos (cortavientos) a medida para todo tipo de cabinas (Isuzu, Hino, etc.). Diseñados en fibra de vidrio de alta resistencia, estos accesorios reducen drásticamente la fricción del viento contra el furgón, optimizando el consumo de combustible y mejorando la presencia corporativa del vehículo.',
    images: [
      '/deflector-aerodinamico-cortaviento-azul.webp',
      '/deflector-aerodinamico-cortaviento.webp',
      '/deflector-aerodinamico-cortaviento-blanco.webp',
      '/deflector-aerodinamico-cortaviento-rojo.webp'
    ],
    specs: [
      'Fabricación en resina y fibra de vidrio (PRFV) de alta durabilidad',
      'Diseño aerodinámico adaptado a la curvatura original de cada cabina',
      'Acabado en pintura de poliuretano horneable con colores corporativos',
      'Instalación segura con soportes metálicos integrados al techo',
      'Integración opcional de luces LED de señalización perimetral'
    ]
  }

  
];
