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
    nameGenitive: 'навесов',
    shortName: 'Навесы',
    slug: 'navesy',
    description:
      'Изготавливаем навесы под ваши размеры — для автомобиля, террасы, входной группы или хозяйственной зоны. Конструкция рассчитывается с учётом нагрузок и условий эксплуатации.',
    heroDescription:
      'Навесы из металлопрофиля под ваши размеры — для авто, террасы, входной группы или хозяйственной зоны.',
    keywords: ['навес', 'навес для авто', 'навес для террасы', 'козырёк навес', 'металлический навес'],
    image: 'https://i.postimg.cc/NGNMP42Q/230zc5xe176qrvty4sfb7l4yuz41ukh3.jpg',
    productTypes: [
      { id: '1-1', name: 'Навес для автомобиля', slug: 'naves-dlya-avto', description: 'Односкатный или двускатный навес для парковки автомобиля.', characteristics: ['Односкатная или двускатная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес для авто', 'парковка', 'стоянка'], image: 'https://i.postimg.cc/44MTFqyZ/CAM01033-1030x773.jpg' },
      { id: '1-2', name: 'Навес для террасы', slug: 'naves-dlya-terrasy', description: 'Пристройной навес над террасой или зоной отдыха.', characteristics: ['Пристройная или standalone конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес для террасы', 'пристройной', 'зона отдыха'], image: 'https://i.postimg.cc/Pq86JVhw/ivyd6ocfud8.jpg' },
      { id: '1-3', name: 'Навес над входом', slug: 'naves-nad-vhodom', description: 'Навес над входной группой или крыльцом.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес над входом', 'крыльцо', 'входная группа'], image: 'https://i.postimg.cc/mDC6XX5P/photo-2026-03-19-09-23-02-1024x768.jpg' },
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
    nameGenitive: 'ворот и калиток',
    shortName: 'Ворота',
    slug: 'vorota',
    description:
      'Изготавливаем ворота и калитки под ваши размеры — откатные, распашные, гаражные. Конструкция рассчитывается с учётом проёма и типа открывания.',
    heroDescription: 'Ворота и калитки под ваши размеры — откатные, распашные, гаражные.',
    keywords: ['ворота', 'откатные ворота', 'распашные ворота', 'калитка', 'гаражные ворота'],
    image: 'https://i.postimg.cc/SRjypB2B/e9cdc115b1fb5c2b5a224ecc5ea1712e.jpg',
    productTypes: [
      { id: '2-1', name: 'Откатные ворота', slug: 'otkatnye-vorota', description: 'Сдвижные ворота для проёмов различной ширины.', characteristics: ['Сдвижной механизм', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['откатные', 'сдвижные', 'ворота'], image: 'https://i.postimg.cc/nrdK0qZw/c722b70fe62c190f045697275014c2a6.jpg' },
      { id: '2-2', name: 'Распашные ворота', slug: 'raspashnye-vorota', description: 'Классические распашные ворота с одной или двумя створками.', characteristics: ['Одностворчатые или двухстворчатые', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['распашные', 'ворота', 'створки'], image: 'https://i.postimg.cc/HxzbkbJW/45af8933f99046d918695ec7ca7988ab.jpg' },
      { id: '2-3', name: 'Калитка', slug: 'kalitka', description: 'Калитка в едином стиле с воротами или забором.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['калитка', 'проход', 'вход'], image: 'https://i.postimg.cc/LX9ZwhyX/tqce61li6lih2dnb7gi2yz7cq5030o2n.jpg' },
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
    nameGenitive: 'заборов и ограждений',
    shortName: 'Заборы',
    slug: 'zabory',
    description:
      'Изготавливаем заборы и ограждения под ваши размеры — из профнастила, металлические, сварные. Конструкция рассчитывается с учётом периметра и рельефа.',
    heroDescription: 'Заборы и ограждения под ваши размеры — из профнастила, сварные, металлические.',
    keywords: ['забор', 'ограждение', 'забор из профнастила', 'сварной забор', 'металлический забор'],
    image: 'https://i.postimg.cc/GhWbZSLb/ldy5gfyih1hkszclh300373o1nhzx42b.jpg',
    productTypes: [
      { id: '3-1', name: 'Забор из профнастила', slug: 'zabor-iz-profnastila', description: 'Забор с заполнением из профнастила.', characteristics: ['Каркас из профильной трубы', 'Заполнение — профнастил'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['профнастил', 'забор', 'ограждение'], image: 'https://i.postimg.cc/d0yYF9fM/16-grey-zabor-min.jpg' },
      { id: '3-2', name: 'Сварной забор', slug: 'svarnoy-zabor', description: 'Сварной забор с металлическим заполнением.', characteristics: ['Сварная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['сварной', 'забор', 'металлический'], image: 'https://i.postimg.cc/BbZkj5mZ/image233.jpg' },
      { id: '3-3', name: 'Ворота в заборе', slug: 'vorota-v-zabore', description: 'Ворота и калитки, интегрированные в забор.', characteristics: ['В едином стиле с забором', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['ворота', 'забор', 'калитка'], image: 'https://i.postimg.cc/7LsmBvVN/otkatnye-vorota-v-moskve-44.jpg' },
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
    nameGenitive: 'металлических лестниц',
    shortName: 'Лестницы',
    slug: 'lestnicy',
    description:
      'Изготавливаем металлические лестницы под ваши размеры — прямые, поворотные, винтовые. Конструкция рассчитывается с учётом помещения и нагрузок.',
    heroDescription: 'Металлические лестницы под ваши размеры — прямые, поворотные, винтовые.',
    keywords: ['лестница', 'металлическая лестница', 'винтовая лестница', 'поворотная лестница', 'лестница на второй этаж'],
    image: 'https://i.postimg.cc/W31VMBnj/cvjfe9vsnmnmx1yyiw3rpa355f6a91oa.jpg',
    productTypes: [
      { id: '4-1', name: 'Прямая лестница', slug: 'pryamaya-lestnitsa', description: 'Прямая маршевая лестница на металлокаркасе.', characteristics: ['Маршевая конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['прямая', 'маршевая', 'лестница'], image: 'https://i.postimg.cc/TP3pRB66/images-(4).jpg' },
      { id: '4-2', name: 'Поворотная лестница', slug: 'povorotnaya-lestnitsa', description: 'Лестница с поворотом на 90° или 180°.', characteristics: ['Поворотная конструкция', 'Площадка или забежные ступени'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['поворотная', '90 градусов', 'лестница'], image: 'https://i.postimg.cc/1XwzCQpB/boston-dolle-antracyt.jpg' },
      { id: '4-3', name: 'Винтовая лестница', slug: 'vintovaya-lestnitsa', description: 'Винтовая лестница для ограниченного пространства.', characteristics: ['Винтовая конструкция', 'Центральная опора'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['винтовая', 'спиральная', 'лестница'], image: 'https://i.postimg.cc/kgfghwtp/images-(5).jpg' },
    ],
    faq: [
      { q: 'Можно ли изготовить лестницу по моим размерам?', a: 'Да, все лестницы изготавливаются по вашим размерам и эскизам.' },
      { q: 'Изготовите лестницу для улицы?', a: 'Да, мы изготавливаем уличные и внутренние лестницы.' },
      { q: 'Выполняете ли монтаж лестницы?', a: 'Да, мы выполняем доставку и монтаж.' },
    ],
  },
  {
    id: '6',
    name: 'Козырьки',
    nameGenitive: 'козырьков',
    shortName: 'Козырьки',
    slug: 'kozyrki',
    description:
      'Изготавливаем козырьки под ваши размеры — над входом, окном, балконом. Конструкция рассчитывается с учётом крепления и нагрузок.',
    heroDescription: 'Козырьки под ваши размеры — над входом, окном, балконом.',
    keywords: ['козырёк', 'козырёк над входом', 'козырёк над окном', 'козырёк над балконом', 'металлический козырёк'],
    image: 'https://i.postimg.cc/HnfC1VC6/25O0Ewu-IIWg.jpg',
    productTypes: [
      { id: '6-1', name: 'Козырёк над входом', slug: 'kozyrek-nad-vhodom', description: 'Козырёк над входной дверью или крыльцом.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'вход', 'крыльцо'], image: 'https://i.postimg.cc/Ghy9MkcJ/images.jpg' },
      { id: '6-2', name: 'Козырёк над окном', slug: 'kozyrek-nad-oknom', description: 'Козырёк для защиты окна от осадков.', characteristics: ['Консольная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'окно', 'защита'], image: 'https://i.postimg.cc/8krr384K/2578.jpg' },
      { id: '6-3', name: 'Козырёк над балконом', slug: 'kozyrek-nad-balkonom', description: 'Козырёк для защиты балкона от осадков.', characteristics: ['Консольный или на опорах', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['козырёк', 'балкон', 'защита'], image: 'https://i.postimg.cc/VN6JW25B/4-38.jpg' },
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
    nameGenitive: 'гаражей и хозпостроек',
    shortName: 'Гаражи',
    slug: 'garazhi',
    description:
      'Изготавливаем гаражи и хозпостройки под ваши размеры — металлические гаражи, сараи, навесы-хозблоки. Конструкция рассчитывается с учётом назначения.',
    heroDescription: 'Гаражи и хозпостройки под ваши размеры — металлические гаражи, сараи, хозблоки.',
    keywords: ['гараж', 'металлический гараж', 'хозпостройка', 'сарай', 'хозблок'],
    image: '/images/catalog/garages/metallokarkas_avtoboksa_-_garazha_(2).jpg',
    productTypes: [
      { id: '7-1', name: 'Металлический гараж', slug: 'metallicheskiy-garazh', description: 'Гараж из металлопрофиля на металлокаркасе.', characteristics: ['Каркас из профильной трубы', 'Заполнение — профнастил или металл'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['гараж', 'металлический', 'профнастил'], image: '/images/catalog/garages/garage_1.jpg' },
      { id: '7-2', name: 'Хозблок', slug: 'hozblok', description: 'Хозяйственная постройка для хранения инструментов и материалов.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['хозблок', 'хозпостройка', 'сарай'], image: '/images/catalog/garages/garaj4.jpg' },
      { id: '7-3', name: 'Навес-хозблок', slug: 'naves-hozblok', description: 'Комбинированный навес с закрытой зоной хранения.', characteristics: ['Открытая + закрытая зона', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес', 'хозблок', 'комбинированный'], image: '/images/catalog/garages/CPDcgg3dEmPRQApD73shnB0nNyI-960.jpg' },
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
    nameGenitive: 'террас и веранд',
    shortName: 'Террасы',
    slug: 'terrasy',
    description:
      'Изготавливаем террасы и веранды под ваши размеры — каркасы, навесы, ограждения. Конструкция рассчитывается с учётом дома и участка.',
    heroDescription: 'Террасы и веранды под ваши размеры — каркасы, навесы, ограждения.',
    keywords: ['терраса', 'веранда', 'каркас террасы', 'навес для террасы', 'ограждение террасы'],
    image: 'https://i.postimg.cc/Kcdz2YfJ/images-(8).jpg',
    productTypes: [
      { id: '8-1', name: 'Каркас террасы', slug: 'karkas-terrasy', description: 'Металлокаркас для террасы или веранды.', characteristics: ['Каркас из профильной трубы', 'Под настил по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'терраса', 'веранда'], image: 'https://i.postimg.cc/MKm0P2Kk/terassa-w-24.jpg' },
      { id: '8-2', name: 'Навес над террасой', slug: 'naves-nad-terrasoy', description: 'Навес для защиты террасы от осадков и солнца.', characteristics: ['Односкатная или двускатная конструкция', 'Каркас из профильной трубы'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['навес', 'терраса', 'крыша'], image: 'https://i.postimg.cc/DzJXKthg/images-(2).jpg' },
      { id: '8-3', name: 'Ограждение террасы', slug: 'ograzhdenie-terrasy', description: 'Перила и ограждения для террасы.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['ограждение', 'перила', 'терраса'], image: 'https://i.postimg.cc/hGcVVCR3/65f14d0d23bcb3bcb39729241f642b4b.jpg' },
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
    nameGenitive: 'беседок и павильонов',
    shortName: 'Беседки',
    slug: 'besedki',
    description:
      'Изготавливаем беседки и павильоны под ваши размеры — открытые, закрытые, с навесом. Конструкция рассчитывается с учётом участка и назначения.',
    heroDescription: 'Беседки и павильоны под ваши размеры — открытые, закрытые, с навесом.',
    keywords: ['беседка', 'павильон', 'металлическая беседка', 'беседка с навесом', 'зона отдыха'],
    image: 'https://i.postimg.cc/yYcNYzrD/images.jpg',
    productTypes: [
      { id: '9-1', name: 'Открытая беседка', slug: 'otkrytaya-besedka', description: 'Беседка с навесом без стен.', characteristics: ['Каркас из профильной трубы', 'Кровля по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['беседка', 'открытая', 'навес'], image: 'https://i.postimg.cc/k4jG6s7p/3bb54b6855190fe253a984653f5ba4aa.jpg' },
      { id: '9-2', name: 'Закрытая беседка', slug: 'zakrytaya-besedka', description: 'Беседка с частичным или полным остеклением.', characteristics: ['Каркас из профильной трубы', 'Остекление по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['беседка', 'закрытая', 'остекление'], image: 'https://i.postimg.cc/hjGPBmVj/images-(3).jpg' },
      { id: '9-3', name: 'Павильон', slug: 'pavilon', description: 'Павильон для зоны отдыха или ожидания.', characteristics: ['Каркас из профильной трубы', 'Заполнение по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['павильон', 'зона отдыха', 'навес'], image: 'https://i.postimg.cc/j59KYFxr/Pavilyon-foto-2.jpg' },
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
    nameGenitive: 'металлокаркасов',
    shortName: 'Металлокаркасы',
    slug: 'metallokarkasy',
    description:
      'Изготавливаем металлокаркасы под ваши задачи — для террас, навесов, хозпостроек, технических конструкций. Конструкция рассчитывается с учётом нагрузок.',
    heroDescription: 'Металлокаркасы под ваши задачи — для террас, навесов, хозпостроек, технических конструкций.',
    keywords: ['металлокаркас', 'каркас', 'несущий каркас', 'технический каркас', 'профильная труба'],
    image: 'https://i.postimg.cc/ZKtTQMYV/6rotm.jpg',
    productTypes: [
      { id: '10-1', name: 'Каркас под террасу', slug: 'karkas-pod-terrasu', description: 'Несущий металлокаркас под террасу или веранду.', characteristics: ['Каркас из профильной трубы', 'Под настил по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'терраса', 'веранда'], image: 'https://i.postimg.cc/zGM9Bgm3/1648996502-5-bigfoto-name-p-veranda-k-domu-proekti-iz-metallokonstrukt-7.jpg' },
      { id: '10-2', name: 'Каркас под навес', slug: 'karkas-pod-naves', description: 'Несущий каркас под навес или козырёк.', characteristics: ['Каркас из профильной трубы', 'Под кровлю по выбору'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'навес', 'козырёк'], image: 'https://i.postimg.cc/Jzy29zy8/p688563v1920x1080s0.jpg' },
      { id: '10-3', name: 'Технический каркас', slug: 'tehnicheskiy-karkas', description: 'Каркас под технические конструкции и оборудование.', characteristics: ['Каркас из профильной трубы', 'По техническому заданию'], dimensions: DEFAULT_DIM, weight: DEFAULT_WEIGHT, material: DEFAULT_MATERIAL, coating: DEFAULT_COATING, priceLabel: DEFAULT_PRICE, keywords: ['каркас', 'технический', 'оборудование'], image: 'https://i.postimg.cc/1RCMsZ1y/metallicheskiy-karkas-dlya-terrasy-i-verandy-kakiye-profilnyye-truby-vybrat-870x400.jpg' },
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
