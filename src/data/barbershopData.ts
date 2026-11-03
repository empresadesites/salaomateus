import heroBarberCut from '../assets/images/hero_barber_cut_1793732104026.jpg';
import aboutInterior from '../assets/images/about_barbershop_interior_1793732105371.jpg';
import serviceCorteMasculino from '../assets/images/service_corte_masculino_1793732106065.jpg';
import serviceDegradeFade from '../assets/images/service_degrade_fade_1793732106832.jpg';
import serviceCorteSocial from '../assets/images/service_corte_social_1793732107981.jpg';
import serviceBarba from '../assets/images/service_barba_1793732109988.jpg';
import serviceAcabamento from '../assets/images/service_acabamento_1793732111585.jpg';
import serviceCorteEBarba from '../assets/images/service_corte_e_barba_1793732111188.jpg';

export const BUSINESS_INFO = {
  name: 'Salão Masculino Mateus',
  shortName: 'SALÃO MASCULINO MATEUS',
  category: 'Barbearia',
  address: 'R. Siquem, 150 - Loja A - Canaã, Ipatinga - MG, 35164-218',
  neighborhood: 'Canaã',
  cityState: 'Ipatinga – MG',
  postalCode: '35164-218',
  whatsappDisplay: '(31) 99526-0974',
  whatsappNumber: '5531995260974',
  rating: '4,8',
  ratingNumeric: 4.8,
  reviewCount: 143,
  hoursText: 'Aberto até 19h',
  googleMapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Sal%C3%A3o+Masculino+Mateus+R.+Siquem,+150+-+Loja+A+-+Cana%C3%A3,+Ipatinga+-+MG,+35164-218',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=R.+Siquem,+150+-+Cana%C3%A3,+Ipatinga+-+MG,+35164-218&output=embed',
};

export const IMAGES = {
  heroBarberCut,
  aboutInterior,
  serviceCorteMasculino,
  serviceDegradeFade,
  serviceCorteSocial,
  serviceBarba,
  serviceAcabamento,
  serviceCorteEBarba,
};

export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'corte-masculino',
    index: '01',
    name: 'Corte masculino',
    subtitle: 'Personalizado para o seu formato de rosto',
    description:
      'Corte moderno executado na tesoura e máquina com estudo de visagismo, textura no topo e caimento natural para o dia a dia.',
    highlights: ['Visagismo masculino', 'Lavagem e finalização', 'Modelagem com pomada'],
    image: serviceCorteMasculino,
    imageAlt: 'Homem com corte masculino moderno e texturizado no Salão Masculino Mateus',
  },
  {
    id: 'degrade-fade',
    index: '02',
    name: 'Degradê (Fade)',
    subtitle: 'Low Fade · Mid Fade · High Fade',
    description:
      'Transição milimétrica e sombreado limpo sem marcações, adaptado ao seu estilo preferido: discreto (Low), equilibrado (Mid) ou marcante (High).',
    highlights: ['Transição sem marcas', 'Máquinas de alta precisão', 'Acabamento na navalha'],
    image: serviceDegradeFade,
    imageAlt: 'Barbeiro profissional executando corte degradê fade com máquina dourada',
  },
  {
    id: 'corte-social',
    index: '03',
    name: 'Corte social',
    subtitle: 'Clássico, alinhado e atemporal',
    description:
      'Elegância tradicional com acabamento refinado na tesoura, laterais bem comportadas e contorno impecável para o ambiente profissional.',
    highlights: ['Técnica de tesoura', 'Caimento executivo', 'Contorno discreto'],
    image: serviceCorteSocial,
    imageAlt: 'Corte social clássico masculino executado na tesoura em barbearia sofisticada',
  },
  {
    id: 'barba',
    index: '04',
    name: 'Barba',
    subtitle: 'Alinhamento, volume e navalha',
    description:
      'Modelagem completa dos fios, desenho simétrico nas maçãs do rosto e pescoço, acompanhada de hidratação e acabamento suave na lâmina.',
    highlights: ['Desenho geométrico', 'Navalha de precisão', 'Hidratação pós-barba'],
    image: serviceBarba,
    imageAlt: 'Alinhamento de barba desenhada com navalha clássica e vapor quente',
  },
  {
    id: 'acabamento',
    index: '05',
    name: 'Acabamento',
    subtitle: 'Contorno ("pezinho") e limpeza de linhas',
    description:
      'Manutenção rápida e precisa das linhas da testa, têmporas, nuca e contorno lateral para manter o visual recém-cortado por mais tempo.',
    highlights: ['Linhas de alta definição', 'Máquina de detalhe (detailer)', 'Atendimento ágil'],
    image: serviceAcabamento,
    imageAlt: 'Detalhe de acabamento e contorno de cabelo com máquina profissional dourada',
  },
  {
    id: 'corte-e-barba',
    index: '06',
    name: 'Corte e barba',
    subtitle: 'Experiência completa de cuidado masculino',
    description:
      'A combinação perfeita entre corte personalizado (social ou degradê) e barba perfeitamente desenhada para renovar sua imagem por completo.',
    highlights: ['Harmonia cabelo e barba', 'Cuidado completo', 'Finalização premium'],
    image: serviceCorteEBarba,
    imageAlt: 'Cliente com corte masculino degradê e barba alinhada no Salão Masculino Mateus',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barba' | 'ambiente';
  categoryLabel: string;
  technique: string;
  image: string;
  alt: string;
  spanClass: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mid Fade & Topo Texturizado',
    category: 'cortes',
    categoryLabel: 'Cortes & Degradê',
    technique: 'Transição gradual na máquina e textura na tesoura',
    image: serviceDegradeFade,
    alt: 'Execução de corte Mid Fade com máquina profissional no Salão Masculino Mateus',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Ambiente Salão Masculino Mateus',
    category: 'ambiente',
    categoryLabel: 'Ambiente & Estrutura',
    technique: 'Poltronas clássicas, iluminação aconchegante e bancada equipada',
    image: aboutInterior,
    alt: 'Ambiente interno sofisticado da barbearia com cadeiras de couro e detalhes dourados',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Barba Desenhada na Navalha',
    category: 'barba',
    categoryLabel: 'Barba & Acabamento',
    technique: 'Alinhamento com toalha aquecida e lâmina de precisão',
    image: serviceBarba,
    alt: 'Barbeiro desenhando barba com navalha clássica e vapor',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Corte Masculino Moderno',
    category: 'cortes',
    categoryLabel: 'Cortes & Degradê',
    technique: 'Crop texturizado com laterais em Low Fade',
    image: serviceCorteMasculino,
    alt: 'Retrato de corte masculino moderno finalizado com pomada',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Acabamento de Alta Definição',
    category: 'barba',
    categoryLabel: 'Barba & Acabamento',
    technique: 'Contorno frontal e lateral com máquina de acabamento gold',
    image: serviceAcabamento,
    alt: 'Acabamento preciso do contorno capilar com máquina profissional',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Corte Social Executivo',
    category: 'cortes',
    categoryLabel: 'Cortes & Degradê',
    technique: 'Corte clássico na tesoura com divisão lateral alinhada',
    image: serviceCorteSocial,
    alt: 'Homem recebendo corte social clássico na tesoura',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-7',
    title: 'Combo Corte & Barba Alinhada',
    category: 'cortes',
    categoryLabel: 'Cortes & Degradê',
    technique: 'Integração perfeita entre o degradê lateral e a barba',
    image: serviceCorteEBarba,
    alt: 'Resultado final de corte degradê integrado com barba desenhada',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-8',
    title: 'Atendimento & Precisão Técnica',
    category: 'ambiente',
    categoryLabel: 'Ambiente & Estrutura',
    technique: 'Cuidado em cada detalhe durante o atendimento',
    image: heroBarberCut,
    alt: 'Barbeiro realizando corte masculino em ambiente sofisticado',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
];

export interface ReviewItem {
  id: string;
  quote: string;
  source: string;
  rating: number;
}

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Ótimos profissionais, bons preços e ambiente agradável.',
    source: 'Avaliação verificada no Google',
    rating: 5,
  },
  {
    id: 'rev-2',
    quote: 'Ótimo lugar e o preço ótimo para o serviço de qualidade.',
    source: 'Avaliação verificada no Google',
    rating: 5,
  },
  {
    id: 'rev-3',
    quote: 'Barbearia muito top e ótimo atendimento.',
    source: 'Avaliação verificada no Google',
    rating: 5,
  },
];

export const AVAILABLE_TIME_SLOTS = [
  '09:00',
  '09:45',
  '10:30',
  '11:15',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '18:30',
];

export function buildWhatsAppBookingUrl(params: {
  name: string;
  service: string;
  date: string;
  time: string;
}): string {
  const cleanName = params.name.trim() || 'Cliente';
  const cleanService = params.service.trim() || 'Corte masculino';
  const cleanDate = params.date.trim() || 'A combinar';
  const cleanTime = params.time.trim() || 'A combinar';

  const message = `Olá! Vim pelo site do Salão Masculino Mateus e gostaria de solicitar um agendamento.

Nome: ${cleanName}
Serviço: ${cleanService}
Data: ${cleanDate}
Horário: ${cleanTime}

Gostaria de confirmar a disponibilidade!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppServiceInquiryUrl(serviceName: string): string {
  const message = `Olá! Vim pelo site do Salão Masculino Mateus e gostaria de consultar valores e disponibilidade para o serviço: ${serviceName}.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
