import type { Category } from './types'

const DEFAULT_PRICE = 'Стоимость — по запросу'
const DEFAULT_DIM = 'Уточняется при расчёте'
const DEFAULT_WEIGHT = 'Уточняется при расчёте'
const DEFAULT_MATERIAL = 'Уточняется при расчёте'
const DEFAULT_COATING = 'Уточняется при расчёте'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Навесы',
    shortName: 'Навесы',
    slug: 'navesy',
    description:
      'Изготавливаем навесы под ваши размеры — для автомобиля, террасы, входной группы или хозяйственной зоны. Конструкция рассчитывается с учётом нагрузок и условий эксплуатации.',
    heroDescription:
      'Навесы из металлопрофиля под ваши размеры — для авто, террасы, входной группы или хозяйственной зоны.',
    keywords: ['навес', 'навес для авто', 'навес для террасы', 'козырёк навес', 'металлический навес'],
    productTypes: [
      { id: '1-1', name: 'Навес для автомобиля', slug: 'naves-dlya-avto', description: 'Односкатный или двускатный навес для парковки автомобиля.', characteristics: ['Односкатная или двускатная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес для авто', 'парковка', 'стоянка'] },
      { id: '1-2', name: 'Навес для террасы', slug: 'naves-dlya-terrasy', description: 'Пристройной навес над террасой или зоной отдыха.', characteristics: ['Пристройная или standalone конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес для террасы', 'пристройной', 'зона отдыха'] },
      { id: '1-3', name: 'Навес над входом', slug: 'naves-nad-vhodom', description: 'Навес над входной группой или крыльцом.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес над входом', 'крыльцо', 'входная группа'] },
    ],
    faq: [
      { q: 'Можно ли изготовить навес по моим размерам?', a: 'Да, все навесы изготавливаются по вашим размерам и эскизам.' },
      { q: 'Какие покрытия доступны?', a: 'Информация уточняется при расчёте.' },
      { q: 'Выполняете ли монтаж навеса?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '2',
    name: 'Ворота и калитки',
    shortName: 'Ворота',
    slug: 'vorota',
    description:
      'Изготавливаем ворота и калитки под ваши размеры — откатные, распашные, гаражные. Конструкция рассчитывается с учётом проёма и типа открывания.',
    heroDescription: 'Ворота и калитки под ваши размеры — откатные, распашные, гаражные.',
    keywords: ['ворота', 'откатные ворота', 'распашные ворота', 'калитка', 'гаражные ворота'],
    productTypes: [
      { id: '2-1', name: 'Откатные ворота', slug: 'otkatnye-vorota', description: 'Сдвижные ворота для проёмов различной ширины.', characteristics: ['Сдвижной механизм', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['откатные', 'сдвижные', 'ворота'] },
      { id: '2-2', name: 'Распашные ворота', slug: 'raspashnye-vorota', description: 'Классические распашные ворота с одной или двумя створками.', characteristics: ['Одностворчатые или двухстворчатые', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['распашные', 'ворота', 'створки'] },
      { id: '2-3', name: 'Калитка', slug: 'kalitka', description: 'Калитка в едином стиле с воротами или забором.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['калитка', 'проход', 'вход'] },
    ],
    faq: [
      { q: 'Можно ли заказать ворота с калиткой?', a: 'Да, мы изготавливаем ворота и калитки в едином стиле.' },
      { q: 'Какой тип открывания выбрать?', a: 'Зависит от проёма и условий участка — проконсультируем при расчёте.' },
      { q: 'Поставляется ли автоматики?', a: 'Информация уточняется при расчёте.' },
    ],
  },
  {
    id: '3',
    name: 'Заборы и ограждения',
    shortName: 'Заборы',
    slug: 'zabory',
    description:
      'Изготавливаем заборы и ограждения под ваши размеры — из профнастила, металлические, сварные. Конструкция рассчитывается с учётом периметра и рельефа.',
    heroDescription: 'Заборы и ограждения под ваши размеры — из профнастила, сварные, металлические.',
    keywords: ['забор', 'ограждение', 'забор из профнастила', 'сварной забор', 'металлический забор'],
    productTypes: [
      { id: '3-1', name: 'Забор из профнастила', slug: 'zabor-iz-profnastila', description: 'Забор с заполнением из профнастила.', characteristics: ['Каркас из профильной трубы', 'Заполнение — профнастил'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['профнастил', 'забор', 'ограждение'] },
      { id: '3-2', name: 'Сварной забор', slug: 'svarnoy-zabor', description: 'Сварной забор с металлическим заполнением.', characteristics: ['Сварная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['сварной', 'забор', 'металлический'] },
      { id: '3-3', name: 'Ворота в заборе', slug: 'vorota-v-zabore', description: 'Ворота и калитки, интегрированные в забор.', characteristics: ['В едином стиле с забором', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['ворота', 'забор', 'калитка'] },
    ],
    faq: [
      { q: 'Можно ли заказать забор с воротами и калиткой?', a: 'Да, мы изготавливаем полный комплект ограждения.' },
      { q: 'Какой высоты можно сделать забор?', a: 'Высота уточняется при расчёте под ваш участок.' },
      { q: 'Выполняете ли монтаж забора?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '4',
    name: 'Металлические лестницы',
    shortName: 'Лестницы',
    slug: 'lestnicy',
    description:
      'Изготавливаем металлические лестницы под ваши размеры — прямые, поворотные, винтовые. Конструкция рассчитывается с учётом помещения и нагрузок.',
    heroDescription: 'Металлические лестницы под ваши размеры — прямые, поворотные, винтовые.',
    keywords: ['лестница', 'металлическая лестница', 'винтовая лестница', 'поворотная лестница', 'лестница на второй этаж'],
    productTypes: [
      { id: '4-1', name: 'Прямая лестница', slug: 'pryamaya-lestnitsa', description: 'Прямая маршевая лестница на металлокаркасе.', characteristics: ['Маршевая конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['прямая', 'маршевая', 'лестница'] },
      { id: '4-2', name: 'Поворотная лестница', slug: 'povorotnaya-lestnitsa', description: 'Лестница с поворотом на 90° или 180°.', characteristics: ['Поворотная конструкция', 'Площадка или забежные ступени'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['поворотная', '90 градусов', 'лестница'] },
      { id: '4-3', name: 'Винтовая лестница', slug: 'vintovaya-lestnitsa', description: 'Винтовая лестница для ограниченного пространства.', characteristics: ['Винтовая конструкция', 'Центральная опора'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['винтовая', 'спиральная', 'лестница'] },
    ],
    faq: [
      { q: 'Можно ли изготовить лестницу по моим размерам?', a: 'Да, все лестницы изготавливаются по вашим размерам и эскизам.' },
      { q: 'Изготовите лестницу для улицы?', a: 'Да, мы изготавливаем уличные и внутренние лестницы.' },
      { q: 'Выполняете ли монтаж лестницы?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '5',
    name: 'Перила и ограждения',
    shortName: 'Перила',
    slug: 'perila',
    description:
      'Изготавливаем перила и ограждения под ваши размеры — для лестниц, балконов, террас. Конструкция рассчитывается с учётом назначения и стиля.',
    heroDescription: 'Перила и ограждения под ваши размеры — для лестниц, балконов, террас.',
    keywords: ['перила', 'ограждение лестницы', 'перила для балкона', 'перила для террасы', 'балясины'],
    productTypes: [
      { id: '5-1', name: 'Перила для лестницы', slug: 'perila-dlya-lestnitsy', description: 'Перила и ограждения для внутренних и уличных лестниц.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['перила', 'лестница', 'ограждение'] },
      { id: '5-2', name: 'Перила для балкона', slug: 'perila-dlya-balkona', description: 'Ограждения для балконов и лоджий.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['перила', 'балкон', 'ограждение'] },
      { id: '5-3', name: 'Перила для террасы', slug: 'perila-dlya-terrasy', description: 'Ограждения для террас и открытых площадок.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['перила', 'терраса', 'ограждение'] },
    ],
    faq: [
      { q: 'Можно ли изготовить перила по моему эскизу?', a: 'Да, мы изготавливаем перила по вашим эскизам и размерам.' },
      { q: 'Какие стили доступны?', a: 'Стиль уточняется при расчёте — от минимализма до более декоративных решений.' },
      { q: 'Выполняете ли монтаж перил?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '6',
    name: 'Козырьки',
    shortName: 'Козырьки',
    slug: 'kozyrki',
    description:
      'Изготавливаем козырьки под ваши размеры — над входом, окном, балконом. Конструкция рассчитывается с учётом крепления и нагрузок.',
    heroDescription: 'Козырьки под ваши размеры — над входом, окном, балконом.',
    keywords: ['козырёк', 'козырёк над входом', 'козырёк над окном', 'козырёк над балконом', 'металлический козырёк'],
    productTypes: [
      { id: '6-1', name: 'Козырёк над входом', slug: 'kozyrek-nad-vhodom', description: 'Козырёк над входной дверью или крыльцом.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'вход', 'крыльцо'] },
      { id: '6-2', name: 'Козырёк над окном', slug: 'kozyrek-nad-oknom', description: 'Козырёк для защиты окна от осадков.', characteristics: ['Консольная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'окно', 'защита'] },
      { id: '6-3', name: 'Козырёк над балконом', slug: 'kozyrek-nad-balkonom', description: 'Козырёк для защиты балкона от осадков.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'балкон', 'защита'] },
    ],
    faq: [
      { q: 'Можно ли изготовить козырёк по моим размерам?', a: 'Да, все козырьки изготавливаются по вашим размерам.' },
      { q: 'Какой материал покрытия?', a: 'Информация уточняется при расчёте.' },
      { q: 'Выполняете ли монтаж козырька?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '7',
    name: 'Гаражи и хозпостройки',
    shortName: 'Гаражи',
    slug: 'garazhi',
    description:
      'Изготавливаем гаражи и хозпостройки под ваши размеры — металлические гаражи, сараи, навесы-хозблоки. Конструкция рассчитывается с учётом назначения.',
    heroDescription: 'Гаражи и хозпостройки под ваши размеры — металлические гаражи, сараи, хозблоки.',
    keywords: ['гараж', 'металлический гараж', 'хозпостройка', 'сарай', 'хозблок'],
    productTypes: [
      { id: '7-1', name: 'Металлический гараж', slug: 'metallicheskiy-garazh', description: 'Гараж из металлопрофиля на металлокаркасе.', characteristics: ['Каркас из профильной трубы', 'Заполнение — профнастил или металл'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['гараж', 'металлический', 'профнастил'] },
      { id: '7-2', name: 'Хозблок', slug: 'hozblok', description: 'Хозяйственная постройка для хранения инструментов и материалов.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['хозблок', 'хозпостройка', 'сарай'] },
      { id: '7-3', name: 'Навес-хозблок', slug: 'naves-hozblok', description: 'Комбинированный навес с закрытой зоной хранения.', characteristics: ['Открытая + закрытая зона', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес', 'хозблок', 'комбинированный'] },
    ],
    faq: [
      { q: 'Можно ли изготовить гараж по моим размерам?', a: 'Да, все гаражи изготавливаются по вашим размерам.' },
      { q: 'Какие размеры доступны?', a: 'Размеры уточняются при расчёте под ваш участок.' },
      { q: 'Выполняете ли монтаж?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '8',
    name: 'Террасы и веранды',
    shortName: 'Террасы',
    slug: 'terrasy',
    description:
      'Изготавливаем террасы и веранды под ваши размеры — каркасы, навесы, ограждения. Конструкция рассчитывается с учётом дома и участка.',
    heroDescription: 'Террасы и веранды под ваши размеры — каркасы, навесы, ограждения.',
    keywords: ['терраса', 'веранда', 'каркас террасы', 'навес для террасы', 'ограждение террасы'],
    productTypes: [
      { id: '8-1', name: 'Каркас террасы', slug: 'karkas-terrasy', description: 'Металлокаркас для террасы или веранды.', characteristics: ['Каркас из профильной трубы', 'Под настил по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'терраса', 'веранда'] },
      { id: '8-2', name: 'Навес над террасой', slug: 'naves-nad-terrasoy', description: 'Навес для защиты террасы от осадков и солнца.', characteristics: ['Односкатная или двускатная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес', 'терраса', 'крыша'] },
      { id: '8-3', name: 'Ограждение террасы', slug: 'ograzhdenie-terrasy', description: 'Перила и ограждения для террасы.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['ограждение', 'перила', 'терраса'] },
    ],
    faq: [
      { q: 'Можно ли изготовить террасу по моим размерам?', a: 'Да, мы изготавливаем террасы по вашим размерам и эскизам.' },
      { q: 'Изготовите только каркас?', a: 'Да, мы можем изготовить только металлокаркас террасы.' },
      { q: 'Выполняете ли монтаж?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '9',
    name: 'Беседки и павильоны',
    shortName: 'Беседки',
    slug: 'besedki',
    description:
      'Изготавливаем беседки и павильоны под ваши размеры — открытые, закрытые, с навесом. Конструкция рассчитывается с учётом участка и назначения.',
    heroDescription: 'Беседки и павильоны под ваши размеры — открытые, закрытые, с навесом.',
    keywords: ['беседка', 'павильон', 'металлическая беседка', 'беседка с навесом', 'зона отдыха'],
    productTypes: [
      { id: '9-1', name: 'Открытая беседка', slug: 'otkrytaya-besedka', description: 'Беседка с навесом без стен.', characteristics: ['Каркас из профильной трубы', 'Кровля по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['беседка', 'открытая', 'навес'] },
      { id: '9-2', name: 'Закрытая беседка', slug: 'zakrytaya-besedka', description: 'Беседка с частичным или полным остеклением.', characteristics: ['Каркас из профильной трубы', 'Остекление по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['беседка', 'закрытая', 'остекление'] },
      { id: '9-3', name: 'Павильон', slug: 'pavilon', description: 'Павильон для зоны отдыха или ожидания.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['павильон', 'зона отдыха', 'навес'] },
    ],
    faq: [
      { q: 'Можно ли изготовить беседку по моим размерам?', a: 'Да, мы изготавливаем беседки по вашим размерам и эскизам.' },
      { q: 'Какие размеры доступны?', a: 'Размеры уточняются при расчёте под ваш участок.' },
      { q: 'Выполняете ли монтаж?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '10',
    name: 'Металлокаркасы',
    shortName: 'Металлокаркасы',
    slug: 'metallokarkasy',
    description:
      'Изготавливаем металлокаркасы под ваши задачи — для террас, навесов, хозпостроек, технических конструкций. Конструкция рассчитывается с учётом нагрузок.',
    heroDescription: 'Металлокаркасы под ваши задачи — для террас, навесов, хозпостроек, технических конструкций.',
    keywords: ['металлокаркас', 'каркас', 'несущий каркас', 'технический каркас', 'профильная труба'],
    productTypes: [
      { id: '10-1', name: 'Каркас под террасу', slug: 'karkas-pod-terrasu', description: 'Несущий металлокаркас под террасу или веранду.', characteristics: ['Каркас из профильной трубы', 'Под настил по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'терраса', 'веранда'] },
      { id: '10-2', name: 'Каркас под навес', slug: 'karkas-pod-naves', description: 'Несущий каркас под навес или козырёк.', characteristics: ['Каркас из профильной трубы', 'Под кровлю по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'навес', 'козырёк'] },
      { id: '10-3', name: 'Технический каркас', slug: 'tehnicheskiy-karkas', description: 'Каркас под технические конструкции и оборудование.', characteristics: ['Каркас из профильной трубы', 'По техническому заданию'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'технический', 'оборудование'] },
    ],
    faq: [
      { q: 'Можно ли изготовить каркас по моему чертежу?', a: 'Да, мы изготавливаем металлокаркасы по вашим чертежам и техническим заданиям.' },
      { q: 'Какие нагрузки выдерживает каркас?', a: 'Расчёт нагрузок выполняется при расчёте конкретного проекта.' },
      { q: 'Выполняете ли монтаж?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function searchCategories(query: string): Category[] {
  const q = query.toLowerCase().trim()
  if (!q) return categories
  return categories.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      c.keywords.some((k) => k.toLowerCase().includes(q)) ||
      c.productTypes.some((p) => p.name.toLowerCase().includes(q) || p.keywords.some((k) => k.toLowerCase().includes(q)))
  )
}
