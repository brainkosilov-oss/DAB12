import type { ServiceCategory } from './types'

const DEFAULT_PRICE = 'Стоимость — по запросу'

export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Строительство дома под ключ',
    shortName: 'Дом под ключ',
    slug: 'stroitelstvo-doma-pod-klyuch',
    description:
      'Полный цикл строительства дома под ключ — от проектирования и фундамента до отделки и сдачи готового объекта. Берём на себя все этапы работ и координацию подрядчиков.',
    heroDescription: 'Строительство дома под ключ — от фундамента до отделки и заселения.',
    keywords: ['строительство дома', 'дом под ключ', 'строительство коттеджа', 'каркасный дом', 'дом из блоков'],
    serviceTypes: [
      { id: '1-1', name: 'Каркасный дом', slug: 'karkasnyy-dom', description: 'Строительство каркасного дома по проекту.', characteristics: ['Каркасная технология', 'Утепление по выбору'], priceLabel: DEFAULT_PRICE, keywords: ['каркасный', 'дом', 'строительство'], image: 'https://i.postimg.cc/rFpWYshs/barkas-140-vid-sboku-neokrashennyj.jpg' },
      { id: '1-2', name: 'Дом из блоков', slug: 'dom-iz-blokov', description: 'Строительство дома из газобетона или пеноблоков.', characteristics: ['Газобетон или пеноблок', 'Кладка и армирование'], priceLabel: DEFAULT_PRICE, keywords: ['блоки', 'газобетон', 'дом'], image: 'https://i.postimg.cc/3rt0p7KW/orepp-2.jpg' },
      { id: '1-3', name: 'Кирпичный дом', slug: 'kirpichnyy-dom', description: 'Строительство дома из кирпича.', characteristics: ['Кирпичная кладка', 'Фундамент под нагрузку'], priceLabel: DEFAULT_PRICE, keywords: ['кирпич', 'дом', 'строительство'], image: 'https://i.postimg.cc/NFFMb9gh/odnoetazhnyj-kirpichnyj-dom-ufa.jpg' },
    ],
    faq: [
      { q: 'Сколько времени занимает строительство?', a: 'Сроки зависят от проекта и материалов — уточняются при расчёте.' },
      { q: 'Можно ли использовать свой проект?', a: 'Да, мы работаем по вашим проектам или предлагаем типовые решения.' },
      { q: 'Включает ли стоимость отделку?', a: 'Состав работ уточняется при расчёте — от коробки до полной отделки.' },
    ],
  },
  {
    id: '2',
    name: 'Фасадные работы',
    shortName: 'Фасадные работы',
    slug: 'fasadnye-raboty',
    description:
      'Фасадные работы под ключ — облицовка, утепление, штукатурка, навесные фасады. Подбираем материалы и технологию под ваш объект и бюджет.',
    heroDescription: 'Фасадные работы — облицовка, утепление, штукатурка, навесные фасады.',
    keywords: ['фасад', 'фасадные работы', 'облицовка фасада', 'утепление фасада', 'штукатурка фасада'],
    serviceTypes: [
      { id: '2-1', name: 'Облицовка фасада', slug: 'oblitsovka-fasada', description: 'Облицовка фасада клинкером, камнем или панелями.', characteristics: ['Клинкер, камень или панели', 'Подготовка поверхности'], priceLabel: DEFAULT_PRICE, keywords: ['облицовка', 'фасад', 'клинкер'], image: 'https://i.postimg.cc/G22dnW67/images-(6).jpg' },
      { id: '2-2', name: 'Утепление фасада', slug: 'uteplenie-fasada', description: 'Утепление фасада с устройством вентилируемой системы.', characteristics: ['Минвата или пенополистирол', 'Вентфасад или мокрый фасад'], priceLabel: DEFAULT_PRICE, keywords: ['утепление', 'фасад', 'вентфасад'], image: 'https://i.postimg.cc/FR8RWF1f/Lzq-Awzdn-4Memi-Nm3WF3sy-ONOl61Hmm2hp9zi-R05p-Sgah-BDZM.jpg' },
      { id: '2-3', name: 'Штукатурка фасада', slug: 'shtukaturka-fasada', description: 'Декоративная штукатурка фасада.', characteristics: ['Декоративное покрытие', 'Армирование сеткой'], priceLabel: DEFAULT_PRICE, keywords: ['штукатурка', 'фасад', 'декоративное'], image: 'https://i.postimg.cc/pLCdNJpR/im3fqw2iv8t8g1rhcp8rvhq40wf5sbow.jpg' },
    ],
    faq: [
      { q: 'Какие материалы вы используете?', a: 'Подбираем материалы под объект и бюджет — уточняем при расчёте.' },
      { q: 'Делаете ли утепление?', a: 'Да, выполняем утепление с устройством вентилируемого или мокрого фасада.' },
      { q: 'Даёте ли гарантию?', a: 'Гарантия уточняется при заключении договора.' },
    ],
  },
  {
    id: '3',
    name: 'Кровельные работы',
    shortName: 'Кровельные работы',
    slug: 'krovelnye-raboty',
    description:
      'Кровельные работы под ключ — монтаж кровли, ремонт, утепление, водосточные системы. Работаем с металлочерепицей, профнастилом, мягкой и фальцевой кровлей.',
    heroDescription: 'Кровельные работы — монтаж, ремонт, утепление, водосточные системы.',
    keywords: ['кровля', 'кровельные работы', 'монтаж кровли', 'ремонт кровли', 'металлочерепица'],
    serviceTypes: [
      { id: '3-1', name: 'Монтаж кровли', slug: 'montazh-krovli', description: 'Монтаж кровли из металлочерепицы, профнастила или мягкой кровли.', characteristics: ['Металлочерепица, профнастил или мягкая', 'Обрешётка и гидроизоляция'], priceLabel: DEFAULT_PRICE, keywords: ['монтаж', 'кровля', 'металлочерепица'], image: 'https://i.postimg.cc/CLVMzQqc/profnastil-krovel.jpg' },
      { id: '3-2', name: 'Ремонт кровли', slug: 'remont-krovli', description: 'Ремонт и восстановление кровельного покрытия.', characteristics: ['Дефектовка и замена участков', 'Герметизация стыков'], priceLabel: DEFAULT_PRICE, keywords: ['ремонт', 'кровля', 'восстановление'], image: 'https://i.postimg.cc/zDxpf963/kogda-nuzhen-remont-krovli-priznaki-hero.jpg' },
      { id: '3-3', name: 'Водосточные системы', slug: 'vodostochnye-sistemy', description: 'Монтаж водосточной системы.', characteristics: ['Металлические или пластиковые', 'Расчёт сечения и уклона'], priceLabel: DEFAULT_PRICE, keywords: ['водосток', 'кровля', 'монтаж'], image: 'https://i.postimg.cc/KY7DhVtT/909e56a45426594a4ae34d37cc4848c6.jpg' },
    ],
    faq: [
      { q: 'С какими кровельными материалами вы работаете?', a: 'Металлочерепица, профнастил, мягкая и фальцевая кровля.' },
      { q: 'Выполняете ли ремонт старой кровли?', a: 'Да, выполняем дефектовку и ремонт существующей кровли.' },
      { q: 'Утепляете ли кровлю?', a: 'Да, выполняем утепление и гидроизоляцию кровельного пирога.' },
    ],
  },
  {
    id: '4',
    name: 'Монолитные работы',
    shortName: 'Монолитные работы',
    slug: 'monolitnye-raboty',
    description:
      'Монолитные работы — заливка фундаментов, перекрытий, колонн и стен. Армирование, опалубка, бетонирование с контролем качества.',
    heroDescription: 'Монолитные работы — фундаменты, перекрытия, колонны, стены.',
    keywords: ['монолит', 'монолитные работы', 'фундамент', 'бетонирование', 'армирование'],
    serviceTypes: [
      { id: '4-1', name: 'Фундамент', slug: 'fundament', description: 'Заливка ленточного, плитного или свайно-ростверкового фундамента.', characteristics: ['Лента, плита или сваи', 'Армирование по расчёту'], priceLabel: DEFAULT_PRICE, keywords: ['фундамент', 'монолит', 'бетон'], image: 'https://i.postimg.cc/L8KP4D94/images-(7).jpg' },
      { id: '4-2', name: 'Перекрытия', slug: 'perekrytiya', description: 'Монолитные железобетонные перекрытия.', characteristics: ['Опалубка и армирование', 'Бетонирование с виброуплотнением'], priceLabel: DEFAULT_PRICE, keywords: ['перекрытие', 'монолит', 'бетон'], image: 'https://i.postimg.cc/9QhBgCqs/monolitnaja-plita.jpg' },
      { id: '4-3', name: 'Колонны и стены', slug: 'kolonny-i-steny', description: 'Монолитные колонны и стены.', characteristics: ['Армирование и опалубка', 'Бетонирование с контролем'], priceLabel: DEFAULT_PRICE, keywords: ['колонны', 'стены', 'монолит'], image: 'https://i.postimg.cc/MTv0fGhx/object-17-preview-min.jpg' },
    ],
    faq: [
      { q: 'Какой бетон используете?', a: 'Марка бетона подбирается под проект — уточняется при расчёте.' },
      { q: 'Делаете ли армирование?', a: 'Да, армирование выполняется по проекту с контролем качества.' },
      { q: 'Можно заказать только фундамент?', a: 'Да, мы выполняем отдельные виды монолитных работ.' },
    ],
  },
]

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug)
}
