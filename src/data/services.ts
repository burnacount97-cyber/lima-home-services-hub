export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  works: string[];
  testimonials: {
    name: string;
    district: string;
    text: string;
    initials: string;
  }[];
}

export const services: ServiceData[] = [
  {
    slug: "gasfiteria",
    name: "Gasfitería",
    tagline: "Soluciones rápidas para tuberías y grifería",
    description:
      "Nuestro equipo de gasfiteros certificados resuelve cualquier problema de plomería en tu hogar. Desde fugas menores hasta instalaciones completas, garantizamos un trabajo limpio y duradero.",
    works: [
      "Reparación de fugas y filtraciones",
      "Instalación de grifería y sanitarios",
      "Desatoro de tuberías y desagües",
      "Cambio de tuberías antiguas",
      "Instalación de termas y calentadores",
      "Mantenimiento preventivo de redes de agua",
    ],
    testimonials: [
      { name: "María López", district: "Chorrillos", text: "Llegaron puntual y solucionaron la fuga en menos de una hora. Muy profesionales.", initials: "ML" },
      { name: "Carlos Ramírez", district: "Surco", text: "Excelente trabajo cambiando toda la grifería del baño. Quedó impecable.", initials: "CR" },
      { name: "Ana Gutiérrez", district: "Chorrillos", text: "Servicio rápido y precio justo. Los recomiendo al 100%.", initials: "AG" },
      { name: "José Mendoza", district: "Surco", text: "Desatoraron mi desagüe en minutos. Muy buen servicio.", initials: "JM" },
    ],
  },
  {
    slug: "electricidad",
    name: "Electricidad",
    tagline: "Instalaciones eléctricas seguras y confiables",
    description:
      "Electricistas profesionales con experiencia en instalaciones residenciales y comerciales. Trabajamos con todas las medidas de seguridad para proteger tu hogar y familia.",
    works: [
      "Instalación y cambio de tableros eléctricos",
      "Cableado y recableado de viviendas",
      "Instalación de puntos de luz y tomacorrientes",
      "Reparación de cortocircuitos",
      "Instalación de sistemas de puesta a tierra",
      "Mantenimiento eléctrico preventivo",
    ],
    testimonials: [
      { name: "Pedro Salazar", district: "Surco", text: "Cambiaron todo el cableado de mi departamento. Trabajo impecable y seguro.", initials: "PS" },
      { name: "Luisa Fernández", district: "Chorrillos", text: "Instalaron nuevos puntos de luz en toda la casa. Muy ordenados.", initials: "LF" },
      { name: "Roberto Chávez", district: "Surco", text: "Resolvieron un cortocircuito que otros no pudieron detectar. Excelentes.", initials: "RC" },
    ],
  },
  {
    slug: "pintura",
    name: "Pintura",
    tagline: "Transforma tus espacios con color y calidad",
    description:
      "Pintores expertos que renuevan tus ambientes con acabados perfectos. Usamos pinturas de primera calidad y técnicas profesionales para un resultado duradero.",
    works: [
      "Pintura de interiores y exteriores",
      "Empastado y preparación de superficies",
      "Pintura decorativa y texturizada",
      "Impermeabilización de paredes",
      "Pintura de cielos rasos",
      "Retoques y mantenimiento de pintura",
    ],
    testimonials: [
      { name: "Diana Torres", district: "Chorrillos", text: "Pintaron todo mi departamento en 2 días. Acabado perfecto y limpio.", initials: "DT" },
      { name: "Miguel Ángel Soto", district: "Surco", text: "El empastado quedó increíble. Se nota la experiencia.", initials: "MS" },
      { name: "Valentina Rojas", district: "Chorrillos", text: "Muy cuidadosos con los muebles. Todo quedó protegido y limpio.", initials: "VR" },
      { name: "Fernando Díaz", district: "Surco", text: "Transformaron la fachada de mi casa. Parece nueva.", initials: "FD" },
    ],
  },
  {
    slug: "drywall",
    name: "Drywall",
    tagline: "Construcción ligera y remodelaciones rápidas",
    description:
      "Especialistas en instalación de drywall para divisiones, cielos rasos y remodelaciones. Soluciones rápidas y limpias para transformar tus espacios sin obras pesadas.",
    works: [
      "Instalación de tabiques divisorios",
      "Cielos rasos y falsos techos",
      "Muebles y repisas en drywall",
      "Reparación de paredes de drywall",
      "Diseño de nichos y arcos decorativos",
      "Aislamiento acústico y térmico",
    ],
    testimonials: [
      { name: "Sandra Huamán", district: "Surco", text: "Dividieron mi sala en dos ambientes en solo un día. Excelente calidad.", initials: "SH" },
      { name: "Raúl Espinoza", district: "Chorrillos", text: "El cielo raso quedó perfecto. Muy profesionales y puntuales.", initials: "RE" },
      { name: "Patricia Vargas", district: "Surco", text: "Hicieron un mueble empotrado en drywall que parece de carpintería fina.", initials: "PV" },
    ],
  },
  {
    slug: "cerrajeria",
    name: "Cerrajería",
    tagline: "Seguridad y acceso cuando más lo necesitas",
    description:
      "Cerrajeros de confianza disponibles para emergencias y servicios programados. Trabajamos con todo tipo de cerraduras y sistemas de seguridad residencial.",
    works: [
      "Apertura de puertas sin dañar",
      "Cambio e instalación de cerraduras",
      "Duplicado de llaves de todo tipo",
      "Instalación de cerraduras de seguridad",
      "Reparación de chapas y manijas",
      "Asesoría en sistemas de seguridad",
    ],
    testimonials: [
      { name: "Claudia Morales", district: "Chorrillos", text: "Me quedé fuera de casa a medianoche y llegaron en 20 minutos. Salvadores.", initials: "CM" },
      { name: "Alberto Ríos", district: "Surco", text: "Cambiaron todas las cerraduras de mi oficina. Trabajo rápido y seguro.", initials: "AR" },
      { name: "Gloria Paredes", district: "Chorrillos", text: "Instalaron cerraduras de seguridad en toda la casa. Muy confiables.", initials: "GP" },
      { name: "Enrique Vásquez", district: "Surco", text: "Excelente servicio de duplicado de llaves. Rápido y preciso.", initials: "EV" },
    ],
  },
];
