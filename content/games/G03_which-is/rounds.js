// content/games/G03_which-is/rounds.js
// Everything the game says: the pictures, the adjectives, the questions and the
// four mini lessons. widgets.jsx only knows how to show them.
//
// A QUESTION IS THREE KEYS — an adjective and two pictures, winner first:
//   { adj: 'bigger', win: 'elephant', lose: 'ant' }
// The sentence the teacher reads on the reveal is built from those, in both
// languages, so it can never disagree with the picture that lit up:
//   "An elephant is bigger than an ant."  /  "Con voi to hơn con kiến."
// That is why every item carries its English with the article it takes in a
// sentence (`the`), and its Vietnamese with its classifier (`con voi`). The side
// each picture appears on is chosen at random every round, so there is no
// left-right pattern for the class to learn instead of the English.
//
// THE RULE FOR ADDING A QUESTION: a Year 1 child has to be able to decide it
// from the two pictures alone, with no argument. "A giraffe is taller than an
// elephant" is fine — it is a surprise, not a debate. "A butterfly is more
// beautiful than a spider" is not, because it is an opinion, and a child who
// sits down for an opinion has been cheated. Silly is good ("A fish is wetter
// than a cat"); arguable is not.
//
// Avoid two-clap adjectives that break the rule — quiet → quieter, clever →
// cleverer, simple → simpler, narrow → narrower. They are correct English and
// they contradict the lesson on the board.
//
// A form like 'big[ger]' marks the part the lesson adds; the brackets print in
// orange and are stripped for the plain comparative.

// ── Pictures ────────────────────────────────────────────────────────────────
// `word` is what prints under the photo; `the` is how it reads in a sentence;
// `are` marks the plurals (scissors are, chips are).
export const ITEMS = {
  ant: { word: 'ant', the: 'an ant', vn: 'con kiến' },
  apple: { word: 'apple', the: 'an apple', vn: 'quả táo' },
  ball: { word: 'ball', the: 'a ball', vn: 'quả bóng' },
  banana: { word: 'banana', the: 'a banana', vn: 'quả chuối' },
  bed: { word: 'bed', the: 'a bed', vn: 'cái giường' },
  bee: { word: 'bee', the: 'a bee', vn: 'con ong' },
  biscuit: { word: 'biscuit', the: 'a biscuit', vn: 'bánh quy' },
  boat: { word: 'boat', the: 'a boat', vn: 'con thuyền' },
  bottle: { word: 'bottle', the: 'a bottle', vn: 'cái chai' },
  bread: { word: 'bread', the: 'bread', vn: 'bánh mì' },
  broccoli: { word: 'broccoli', the: 'broccoli', vn: 'súp lơ xanh' },
  bucket: { word: 'bucket', the: 'a bucket', vn: 'cái xô' },
  bus: { word: 'bus', the: 'a bus', vn: 'xe buýt' },
  butterfly: { word: 'butterfly', the: 'a butterfly', vn: 'con bướm' },
  cake: { word: 'cake', the: 'a cake', vn: 'bánh kem' },
  car: { word: 'car', the: 'a car', vn: 'ô tô' },
  cat: { word: 'cat', the: 'a cat', vn: 'con mèo' },
  chair: { word: 'chair', the: 'a chair', vn: 'cái ghế' },
  chips: { word: 'chips', the: 'chips', vn: 'khoai tây chiên', are: true },
  chocolate: { word: 'chocolate', the: 'chocolate', vn: 'sô-cô-la' },
  chopsticks: { word: 'chopsticks', the: 'chopsticks', vn: 'đôi đũa', are: true },
  cloud: { word: 'cloud', the: 'a cloud', vn: 'đám mây' },
  coconut: { word: 'coconut', the: 'a coconut', vn: 'quả dừa' },
  coffee: { word: 'coffee', the: 'coffee', vn: 'cà phê' },
  coin: { word: 'coin', the: 'a coin', vn: 'đồng xu' },
  cow: { word: 'cow', the: 'a cow', vn: 'con bò' },
  dog: { word: 'dog', the: 'a dog', vn: 'con chó' },
  doughnut: { word: 'doughnut', the: 'a doughnut', vn: 'bánh donut' },
  duck: { word: 'duck', the: 'a duck', vn: 'con vịt' },
  dumpling: { word: 'dumpling', the: 'a dumpling', vn: 'sủi cảo' },
  egg: { word: 'egg', the: 'an egg', vn: 'quả trứng' },
  elephant: { word: 'elephant', the: 'an elephant', vn: 'con voi' },
  fish: { word: 'fish', the: 'a fish', vn: 'con cá' },
  flower: { word: 'flower', the: 'a flower', vn: 'bông hoa' },
  fork: { word: 'fork', the: 'a fork', vn: 'cái dĩa' },
  fridge: { word: 'fridge', the: 'a fridge', vn: 'tủ lạnh' },
  ginger: { word: 'ginger', the: 'ginger', vn: 'gừng' },
  giraffe: { word: 'giraffe', the: 'a giraffe', vn: 'hươu cao cổ' },
  glue: { word: 'glue', the: 'glue', vn: 'keo dán' },
  grass: { word: 'grass', the: 'grass', vn: 'cỏ' },
  hen: { word: 'hen', the: 'a hen', vn: 'con gà mái' },
  icecream: { word: 'ice cream', the: 'ice cream', vn: 'kem' },
  kite: { word: 'kite', the: 'a kite', vn: 'con diều' },
  leaf: { word: 'leaf', the: 'a leaf', vn: 'chiếc lá' },
  milk: { word: 'milk', the: 'milk', vn: 'sữa' },
  monkey: { word: 'monkey', the: 'a monkey', vn: 'con khỉ' },
  moon: { word: 'moon', the: 'the moon', vn: 'mặt trăng' },
  nail: { word: 'nail', the: 'a nail', vn: 'cái đinh' },
  onion: { word: 'onion', the: 'an onion', vn: 'hành tây' },
  orange: { word: 'orange', the: 'an orange', vn: 'quả cam' },
  oven: { word: 'oven', the: 'an oven', vn: 'lò nướng' },
  parrot: { word: 'parrot', the: 'a parrot', vn: 'con vẹt' },
  pencil: { word: 'pencil', the: 'a pencil', vn: 'bút chì' },
  penguin: { word: 'penguin', the: 'a penguin', vn: 'chim cánh cụt' },
  pig: { word: 'pig', the: 'a pig', vn: 'con lợn' },
  pillow: { word: 'pillow', the: 'a pillow', vn: 'cái gối' },
  pizza: { word: 'pizza', the: 'a pizza', vn: 'bánh pizza' },
  plane: { word: 'plane', the: 'a plane', vn: 'máy bay' },
  pot: { word: 'pot', the: 'a pot', vn: 'cái nồi' },
  potato: { word: 'potato', the: 'a potato', vn: 'củ khoai tây' },
  rainbow: { word: 'rainbow', the: 'a rainbow', vn: 'cầu vồng' },
  rug: { word: 'rug', the: 'a rug', vn: 'tấm thảm' },
  scissors: { word: 'scissors', the: 'scissors', vn: 'cái kéo', are: true },
  seesaw: { word: 'seesaw', the: 'a seesaw', vn: 'bập bênh' },
  shark: { word: 'shark', the: 'a shark', vn: 'cá mập' },
  sheep: { word: 'sheep', the: 'a sheep', vn: 'con cừu' },
  shell: { word: 'shell', the: 'a shell', vn: 'vỏ ốc' },
  shoe: { word: 'shoe', the: 'a shoe', vn: 'chiếc giày' },
  slide: { word: 'slide', the: 'a slide', vn: 'cầu trượt' },
  snake: { word: 'snake', the: 'a snake', vn: 'con rắn' },
  snow: { word: 'snow', the: 'snow', vn: 'tuyết' },
  soap: { word: 'soap', the: 'soap', vn: 'xà phòng' },
  sock: { word: 'sock', the: 'a sock', vn: 'chiếc tất' },
  sofa: { word: 'sofa', the: 'a sofa', vn: 'ghế sô-pha' },
  soup: { word: 'soup', the: 'soup', vn: 'súp' },
  spider: { word: 'spider', the: 'a spider', vn: 'con nhện' },
  spoon: { word: 'spoon', the: 'a spoon', vn: 'cái thìa' },
  starfish: { word: 'starfish', the: 'a starfish', vn: 'sao biển' },
  straw: { word: 'straw', the: 'a straw', vn: 'ống hút' },
  sun: { word: 'sun', the: 'the sun', vn: 'mặt trời' },
  tea: { word: 'tea', the: 'tea', vn: 'trà' },
  teddy: { word: 'teddy bear', the: 'a teddy bear', vn: 'gấu bông' },
  television: { word: 'TV', the: 'a TV', vn: 'cái ti vi' },
  tiger: { word: 'tiger', the: 'a tiger', vn: 'con hổ' },
  toothbrush: { word: 'toothbrush', the: 'a toothbrush', vn: 'bàn chải đánh răng' },
  towel: { word: 'towel', the: 'a towel', vn: 'khăn tắm' },
  tree: { word: 'tree', the: 'a tree', vn: 'cái cây' },
  turtle: { word: 'turtle', the: 'a turtle', vn: 'con rùa' },
  whale: { word: 'whale', the: 'a whale', vn: 'cá voi' },
  yoghurt: { word: 'yoghurt', the: 'yoghurt', vn: 'sữa chua' },
}

// ── Adjectives ──────────────────────────────────────────────────────────────
// `syl` is the plain adjective cut into claps; `form` is the comparative with
// the added part in brackets; `vn` is the comparative in Vietnamese.
export const ADJECTIVES = {
  // One clap → er
  bigger: { syl: ['big'], form: 'big[ger]', vn: 'to hơn' },
  smaller: { syl: ['small'], form: 'small[er]', vn: 'nhỏ hơn' },
  taller: { syl: ['tall'], form: 'tall[er]', vn: 'cao hơn' },
  shorter: { syl: ['short'], form: 'short[er]', vn: 'thấp hơn' },
  longer: { syl: ['long'], form: 'long[er]', vn: 'dài hơn' },
  faster: { syl: ['fast'], form: 'fast[er]', vn: 'nhanh hơn' },
  slower: { syl: ['slow'], form: 'slow[er]', vn: 'chậm hơn' },
  hotter: { syl: ['hot'], form: 'hot[ter]', vn: 'nóng hơn' },
  colder: { syl: ['cold'], form: 'cold[er]', vn: 'lạnh hơn' },
  softer: { syl: ['soft'], form: 'soft[er]', vn: 'mềm hơn' },
  harder: { syl: ['hard'], form: 'hard[er]', vn: 'cứng hơn' },
  sweeter: { syl: ['sweet'], form: 'sweet[er]', vn: 'ngọt hơn' },
  higher: { syl: ['high'], form: 'high[er]', vn: 'ở cao hơn' },
  louder: { syl: ['loud'], form: 'loud[er]', vn: 'kêu to hơn' },
  sharper: { syl: ['sharp'], form: 'sharp[er]', vn: 'sắc nhọn hơn' },
  thinner: { syl: ['thin'], form: 'thin[ner]', vn: 'mảnh hơn' },
  thicker: { syl: ['thick'], form: 'thick[er]', vn: 'dày hơn' },
  older: { syl: ['old'], form: 'old[er]', vn: 'nhiều tuổi hơn' },
  brighter: { syl: ['bright'], form: 'bright[er]', vn: 'sáng hơn' },
  darker: { syl: ['dark'], form: 'dark[er]', vn: 'sẫm màu hơn' },
  stronger: { syl: ['strong'], form: 'strong[er]', vn: 'khoẻ hơn' },
  wider: { syl: ['wide'], form: 'wide[r]', vn: 'rộng hơn' },
  cheaper: { syl: ['cheap'], form: 'cheap[er]', vn: 'rẻ hơn' },
  lighter: { syl: ['light'], form: 'light[er]', vn: 'nhẹ hơn' },
  wetter: { syl: ['wet'], form: 'wet[ter]', vn: 'ướt hơn' },

  // Three claps or more → more
  'more dangerous': { syl: ['dan', 'ger', 'ous'], form: '[more] dangerous', vn: 'nguy hiểm hơn' },
  'more expensive': { syl: ['ex', 'pen', 'sive'], form: '[more] expensive', vn: 'đắt hơn' },
  'more colourful': { syl: ['col', 'our', 'ful'], form: '[more] colourful', vn: 'nhiều màu hơn' },
  'more comfortable': { syl: ['com', 'for', 'ta', 'ble'], form: '[more] comfortable', vn: 'êm hơn' },
  'more delicious': { syl: ['de', 'li', 'cious'], form: '[more] delicious', vn: 'ngon hơn' },
  'more beautiful': { syl: ['beau', 'ti', 'ful'], form: '[more] beautiful', vn: 'đẹp hơn' },
  'more exciting': { syl: ['ex', 'cit', 'ing'], form: '[more] exciting', vn: 'vui hơn' },

  // Two claps ending in y → ier
  heavier: { syl: ['hea', 'vy'], form: 'heav[ier]', vn: 'nặng hơn' },
  funnier: { syl: ['fun', 'ny'], form: 'funn[ier]', vn: 'buồn cười hơn' },
  noisier: { syl: ['noi', 'sy'], form: 'nois[ier]', vn: 'ồn ào hơn' },
  hairier: { syl: ['hai', 'ry'], form: 'hair[ier]', vn: 'nhiều lông hơn' },
  spicier: { syl: ['spi', 'cy'], form: 'spic[ier]', vn: 'cay hơn' },
  juicier: { syl: ['jui', 'cy'], form: 'juic[ier]', vn: 'mọng nước hơn' },
  crunchier: { syl: ['crun', 'chy'], form: 'crunch[ier]', vn: 'giòn hơn' },
  tinier: { syl: ['ti', 'ny'], form: 'tin[ier]', vn: 'bé tí hơn' },
  scarier: { syl: ['sca', 'ry'], form: 'scar[ier]', vn: 'đáng sợ hơn' },
  saltier: { syl: ['sal', 'ty'], form: 'salt[ier]', vn: 'mặn hơn' },
  shinier: { syl: ['shi', 'ny'], form: 'shin[ier]', vn: 'sáng bóng hơn' },
  fluffier: { syl: ['fluf', 'fy'], form: 'fluff[ier]', vn: 'xù bông hơn' },
  tastier: { syl: ['tas', 'ty'], form: 'tast[ier]', vn: 'ngon hơn' },

  // Two claps not ending in y → more
  'more boring': { syl: ['bor', 'ing'], form: '[more] boring', vn: 'chán hơn' },
  'more useful': { syl: ['use', 'ful'], form: '[more] useful', vn: 'hữu ích hơn' },
  'more playful': { syl: ['play', 'ful'], form: '[more] playful', vn: 'thích chơi đùa hơn' },
}

// ── Questions ───────────────────────────────────────────────────────────────
const q = (adj, win, lose, extra = {}) => ({ adj, win, lose, ...extra })

const ONE_CLAP = [
  q('bigger', 'elephant', 'ant'),
  q('bigger', 'whale', 'fish'),
  q('bigger', 'bus', 'car'),
  q('bigger', 'pizza', 'egg'),
  q('bigger', 'cow', 'hen'),
  q('smaller', 'bee', 'cow'),
  q('smaller', 'coin', 'television'),
  q('smaller', 'starfish', 'whale'),
  q('smaller', 'egg', 'coconut'),
  q('taller', 'giraffe', 'pig'),
  q('taller', 'tree', 'flower'),
  q('taller', 'giraffe', 'elephant'),
  q('shorter', 'penguin', 'giraffe'),
  q('shorter', 'grass', 'tree'),
  q('longer', 'snake', 'sock'),
  q('longer', 'whale', 'shark'),
  q('longer', 'chopsticks', 'spoon'),
  q('faster', 'plane', 'boat'),
  q('faster', 'car', 'turtle'),
  q('faster', 'tiger', 'cow'),
  q('slower', 'turtle', 'dog'),
  q('slower', 'bus', 'plane'),
  q('hotter', 'sun', 'snow'),
  q('hotter', 'coffee', 'icecream'),
  q('hotter', 'soup', 'yoghurt'),
  q('colder', 'snow', 'soup'),
  q('colder', 'icecream', 'tea'),
  q('colder', 'fridge', 'oven'),
  q('softer', 'pillow', 'coconut'),
  q('softer', 'teddy', 'shell'),
  q('harder', 'coconut', 'bread'),
  q('harder', 'coin', 'cake'),
  q('sweeter', 'chocolate', 'onion'),
  q('sweeter', 'doughnut', 'broccoli'),
  q('sweeter', 'banana', 'potato'),
  q('higher', 'moon', 'kite'),
  q('higher', 'cloud', 'tree'),
  q('louder', 'dog', 'fish'),
  q('louder', 'plane', 'butterfly'),
  q('sharper', 'scissors', 'spoon'),
  q('sharper', 'nail', 'ball'),
  q('thinner', 'straw', 'bottle'),
  q('thicker', 'pillow', 'sock'),
  q('older', 'hen', 'egg'),
  q('brighter', 'sun', 'moon'),
  q('darker', 'coffee', 'milk'),
  q('stronger', 'elephant', 'monkey'),
  q('stronger', 'tiger', 'cat'),
  q('wider', 'sofa', 'chair'),
  q('cheaper', 'biscuit', 'television'),
  q('cheaper', 'pencil', 'car'),
  q('lighter', 'leaf', 'potato'),
  q('lighter', 'butterfly', 'cow'),
  q('wetter', 'fish', 'cat'),
]

const THREE_CLAPS = [
  q('more dangerous', 'shark', 'fish'),
  q('more dangerous', 'tiger', 'cat'),
  q('more dangerous', 'snake', 'duck'),
  q('more dangerous', 'scissors', 'sock'),
  q('more dangerous', 'spider', 'butterfly'),
  q('more expensive', 'car', 'shoe'),
  q('more expensive', 'plane', 'bus'),
  q('more expensive', 'television', 'pencil'),
  q('more expensive', 'fridge', 'spoon'),
  q('more colourful', 'rainbow', 'cloud'),
  q('more colourful', 'parrot', 'penguin'),
  q('more colourful', 'butterfly', 'snow'),
  q('more colourful', 'doughnut', 'bread'),
  q('more comfortable', 'bed', 'rug'),
  q('more comfortable', 'pillow', 'fork'),
  q('more comfortable', 'sofa', 'bucket'),
  q('more delicious', 'pizza', 'soap'),
  q('more delicious', 'cake', 'glue'),
  q('more delicious', 'icecream', 'toothbrush'),
  q('more beautiful', 'rainbow', 'bucket'),
  q('more beautiful', 'flower', 'nail'),
  q('more exciting', 'slide', 'chair'),
  q('more exciting', 'seesaw', 'pillow'),
  q('more exciting', 'kite', 'towel'),
]

const TWO_CLAPS = [
  q('heavier', 'elephant', 'cat'),
  q('heavier', 'cow', 'hen'),
  q('heavier', 'pot', 'spoon'),
  q('heavier', 'fridge', 'banana'),
  q('funnier', 'monkey', 'fridge'),
  q('noisier', 'parrot', 'fish'),
  q('noisier', 'plane', 'leaf'),
  q('hairier', 'monkey', 'fish'),
  q('hairier', 'dog', 'egg'),
  q('spicier', 'ginger', 'banana'),
  q('juicier', 'orange', 'bread'),
  q('juicier', 'apple', 'biscuit'),
  q('crunchier', 'chips', 'yoghurt'),
  q('tinier', 'ant', 'dog'),
  q('tinier', 'bee', 'whale'),
  q('scarier', 'shark', 'duck'),
  q('scarier', 'tiger', 'sheep'),
  q('saltier', 'chips', 'apple'),
  q('shinier', 'coin', 'bread'),
  q('fluffier', 'sheep', 'snake'),
  q('fluffier', 'teddy', 'fork'),
  q('tastier', 'dumpling', 'sock'),
  q('more boring', 'chair', 'slide'),
  q('more boring', 'sock', 'kite'),
  q('more useful', 'spoon', 'fork', { for: 'for soup', forVn: 'để ăn súp' }),
  q('more useful', 'pencil', 'banana', { for: 'for writing', forVn: 'để viết' }),
  q('more useful', 'scissors', 'spoon', { for: 'for cutting', forVn: 'để cắt' }),
  q('more playful', 'cat', 'fridge'),
  q('more playful', 'monkey', 'turtle'),
]

// ── Sentences ───────────────────────────────────────────────────────────────
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

export const promptEn = (question) =>
  `Which is ${question.adj}${question.for ? ` ${question.for}` : ''}?`

export const promptVn = (question) =>
  `Cái nào ${ADJECTIVES[question.adj].vn}${question.forVn ? ` ${question.forVn}` : ''}?`

export const sentenceEn = (question) => {
  const win = ITEMS[question.win]
  const lose = ITEMS[question.lose]
  const extra = question.for ? ` ${question.for}` : ''
  return `${cap(win.the)} ${win.are ? 'are' : 'is'} ${question.adj}${extra} than ${lose.the}.`
}

export const sentenceVn = (question) => {
  const extra = question.forVn ? ` ${question.forVn}` : ''
  return `${cap(ITEMS[question.win].vn)} ${ADJECTIVES[question.adj].vn} ${ITEMS[question.lose].vn}${extra}.`
}

// 'big[ger]' → [{ t: 'big' }, { t: 'ger', hi: true }]
export const splitForm = (form) =>
  form.split(/(\[[^\]]+\])/).filter(Boolean).map((part) =>
    part.startsWith('[') ? { t: part.slice(1, -1), hi: true } : { t: part })

// ── Stages and their lessons ────────────────────────────────────────────────
// Each stage is played until ONE child is left standing, and then the whole
// class stands up again for the next lesson. Played as one long elimination
// the class is down to a handful by round fifteen and never reaches the
// lessons on "more" — so the lessons would be for the three children still up.
//
// A lesson page is a list of rows. A row is a word cut into claps (`syl`) and,
// optionally, what it becomes (`to`, in the bracket form). `never` pages are the
// one exception: a wrong form crossed out beside the right one.
export const STAGES = [
  {
    id: 'one',
    name: 'One clap',
    nameVn: 'Một tiếng vỗ',
    rule: 'er',
    colour: '#1cb0f6',
    questions: ONE_CLAP,
    lesson: [
      {
        title: 'Say it. Clap it.',
        titleVn: 'Nói từ. Vỗ tay.',
        rows: [{ syl: ['big'] }, { syl: ['tall'] }, { syl: ['fast'] }],
      },
      {
        title: 'One clap: add er',
        titleVn: 'Một tiếng vỗ: thêm er',
        rows: [
          { syl: ['tall'], to: 'tall[er]' },
          { syl: ['small'], to: 'small[er]' },
          { syl: ['fast'], to: 'fast[er]' },
          { syl: ['long'], to: 'long[er]' },
        ],
        say: { en: 'A giraffe is taller than a pig.', hi: 'taller', vn: 'Hươu cao cổ cao hơn con lợn.' },
      },
      {
        title: 'Look at the spelling',
        titleVn: 'Chú ý cách viết',
        rows: [
          { syl: ['big'], to: 'big[ger]' },
          { syl: ['hot'], to: 'hot[ter]' },
          { syl: ['nice'], to: 'nice[r]' },
          { syl: ['wide'], to: 'wide[r]' },
        ],
      },
    ],
  },
  {
    id: 'three',
    name: 'Three claps',
    nameVn: 'Ba tiếng vỗ',
    rule: 'more',
    colour: '#8b5cf6',
    questions: THREE_CLAPS,
    lesson: [
      {
        title: 'Say it. Clap it.',
        titleVn: 'Nói từ. Vỗ tay.',
        rows: [
          { syl: ['beau', 'ti', 'ful'] },
          { syl: ['dan', 'ger', 'ous'] },
          { syl: ['ex', 'pen', 'sive'] },
        ],
      },
      {
        title: 'Three claps: use more',
        titleVn: 'Ba tiếng vỗ: dùng more',
        rows: [
          { syl: ['beau', 'ti', 'ful'], to: '[more] beautiful' },
          { syl: ['dan', 'ger', 'ous'], to: '[more] dangerous' },
          { syl: ['ex', 'pen', 'sive'], to: '[more] expensive' },
        ],
        say: { en: 'A shark is more dangerous than a fish.', hi: 'more dangerous', vn: 'Cá mập nguy hiểm hơn con cá.' },
      },
      {
        title: 'Never both!',
        titleVn: 'Không dùng cả hai!',
        never: [
          { wrong: 'more bigger', right: 'bigger' },
          { wrong: 'more taller', right: 'taller' },
          { wrong: 'dangerouser', right: 'more dangerous' },
        ],
      },
    ],
  },
  {
    id: 'two',
    name: 'Two claps',
    nameVn: 'Hai tiếng vỗ',
    rule: 'ier · more',
    colour: '#14b8a6',
    questions: TWO_CLAPS,
    lesson: [
      {
        title: 'Say it. Clap it.',
        titleVn: 'Nói từ. Vỗ tay.',
        rows: [
          { syl: ['hea', 'vy'] },
          { syl: ['fun', 'ny'] },
          { syl: ['bor', 'ing'] },
          { syl: ['use', 'ful'] },
        ],
      },
      {
        title: 'Two claps, ends in y: ier',
        titleVn: 'Hai tiếng vỗ, tận cùng là y: ier',
        rows: [
          { syl: ['hea', 'vy'], to: 'heav[ier]' },
          { syl: ['fun', 'ny'], to: 'funn[ier]' },
          { syl: ['hap', 'py'], to: 'happ[ier]' },
          { syl: ['ti', 'ny'], to: 'tin[ier]' },
        ],
        say: { en: 'A cow is heavier than a hen.', hi: 'heavier', vn: 'Con bò nặng hơn con gà mái.' },
      },
      {
        title: 'Two claps, no y: more',
        titleVn: 'Hai tiếng vỗ, không có y: more',
        rows: [
          { syl: ['bor', 'ing'], to: '[more] boring' },
          { syl: ['use', 'ful'], to: '[more] useful' },
          { syl: ['play', 'ful'], to: '[more] playful' },
        ],
        say: { en: 'A chair is more boring than a slide.', hi: 'more boring', vn: 'Cái ghế chán hơn cầu trượt.' },
      },
    ],
  },
  {
    id: 'mix',
    name: 'Everything',
    nameVn: 'Tất cả',
    rule: 'er · ier · more',
    colour: '#f59e0b',
    questions: [...ONE_CLAP, ...THREE_CLAPS, ...TWO_CLAPS],
    lesson: [
      {
        title: 'Clap, then choose',
        titleVn: 'Vỗ tay, rồi chọn',
        rows: [
          { syl: ['big'], to: 'big[ger]' },
          { syl: ['hea', 'vy'], to: 'heav[ier]' },
          { syl: ['bor', 'ing'], to: '[more] boring' },
          { syl: ['beau', 'ti', 'ful'], to: '[more] beautiful' },
        ],
      },
    ],
  },
]
