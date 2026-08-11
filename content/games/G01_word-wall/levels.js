// content/games/G01_word-wall/levels.js
// Every Word Wall puzzle, easiest first.
//
// Shape: a level is four groups of four. A group is { name, note, items }.
// An item is either a plain string (a word tile) or an object with `img`
// (a picture tile) — `word` is what the picture is called, shown on the solved
// row and behind the teacher's "show the words" toggle. `img` is a key into
// images.js.
//
// A note on language. Category names, notes and hints all carry a `…Vn` twin
// like every other string in this repo. The TILES stay in English on purpose:
// they are the vocabulary being taught, and half the levels are phonics puzzles
// ("rhymes with cat", "starts with S") that a translation would destroy. The
// three Kindergarten/Year 1 levels do carry a `vn` gloss per item, because
// there the picture, the English word and the Vietnamese word together are the
// point — those glosses print on the solved row in VN mode.
//
// `band` splits the level menu: 'early' is Kindergarten–Year 1 (pictures and
// three-letter words), 'words' is the Year 1–4 word puzzles.

export const LEVELS = [
  // ── Kindergarten / Year 1 ────────────────────────────────────────────────
  {
    id: 'picture-sort',
    band: 'early',
    icon: 'Images',
    title: 'Picture Sort',
    titleVn: 'Xếp Tranh',
    hint: 'No reading! Look at the pictures. Find four that go together.',
    hintVn: 'Không cần đọc! Nhìn tranh và tìm bốn tranh cùng một nhóm.',
    groups: [
      {
        name: 'Farm Animals', nameVn: 'Con Vật Ở Nông Trại',
        note: 'These four animals all live on a farm.',
        noteVn: 'Bốn con vật này đều sống ở nông trại.',
        items: [
          { img: 'cow', word: 'COW', vn: 'con bò' },
          { img: 'pig', word: 'PIG', vn: 'con lợn' },
          { img: 'sheep', word: 'SHEEP', vn: 'con cừu' },
          { img: 'hen', word: 'HEN', vn: 'con gà mái' },
        ],
      },
      {
        name: 'Fruit', nameVn: 'Trái Cây',
        note: 'Sweet food that grows on a tree or a vine. We eat it!',
        noteVn: 'Thức ăn ngọt mọc trên cây hoặc dây leo. Chúng ta ăn được!',
        items: [
          { img: 'apple', word: 'APPLE', vn: 'quả táo' },
          { img: 'banana', word: 'BANANA', vn: 'quả chuối' },
          { img: 'orange', word: 'ORANGE', vn: 'quả cam' },
          { img: 'grapes', word: 'GRAPES', vn: 'chùm nho' },
        ],
      },
      {
        name: 'Things That Go', nameVn: 'Phương Tiện Đi Lại',
        note: 'We ride inside all of these to travel somewhere.',
        noteVn: 'Chúng ta ngồi bên trong những thứ này để đi đến nơi khác.',
        items: [
          { img: 'bus', word: 'BUS', vn: 'xe buýt' },
          { img: 'car', word: 'CAR', vn: 'ô tô' },
          { img: 'boat', word: 'BOAT', vn: 'chiếc thuyền' },
          { img: 'plane', word: 'PLANE', vn: 'máy bay' },
        ],
      },
      {
        name: 'Clothes', nameVn: 'Quần Áo',
        note: 'We put all of these on our body when we get dressed.',
        noteVn: 'Chúng ta mặc, đội và đi những thứ này khi thay đồ.',
        items: [
          { img: 'hat', word: 'HAT', vn: 'cái mũ' },
          { img: 'shoe', word: 'SHOE', vn: 'chiếc giày' },
          { img: 'sock', word: 'SOCK', vn: 'chiếc tất' },
          { img: 'tshirt', word: 'T-SHIRT', vn: 'áo phông' },
        ],
      },
    ],
  },
  {
    id: 'read-and-match',
    band: 'early',
    icon: 'BookOpenText',
    title: 'Read and Match',
    titleVn: 'Đọc và Ghép',
    hint: 'Every group has two pictures and two words. Read the words out loud.',
    hintVn: 'Mỗi nhóm có hai bức tranh và hai chữ. Hãy đọc to các chữ lên.',
    groups: [
      {
        name: 'Pets', nameVn: 'Thú Cưng',
        note: 'Animals we keep at home and look after.',
        noteVn: 'Những con vật chúng ta nuôi ở nhà và chăm sóc.',
        items: [
          { img: 'dog', word: 'DOG', vn: 'con chó' },
          { img: 'cat', word: 'CAT', vn: 'con mèo' },
          { word: 'RABBIT', vn: 'con thỏ' },
          { word: 'BIRD', vn: 'con chim' },
        ],
      },
      {
        name: 'Toys', nameVn: 'Đồ Chơi',
        note: 'Things we play with.',
        noteVn: 'Những thứ chúng ta chơi cùng.',
        items: [
          { img: 'ball', word: 'BALL', vn: 'quả bóng' },
          { img: 'teddy', word: 'TEDDY', vn: 'gấu bông' },
          { word: 'DOLL', vn: 'búp bê' },
          { word: 'DRUM', vn: 'cái trống' },
        ],
      },
      {
        name: 'Things We Eat', nameVn: 'Thức Ăn',
        note: 'Food that goes on our plate at dinner time.',
        noteVn: 'Thức ăn được bày lên đĩa vào bữa cơm.',
        items: [
          { img: 'bread', word: 'BREAD', vn: 'bánh mì' },
          { img: 'egg', word: 'EGG', vn: 'quả trứng' },
          { word: 'CAKE', vn: 'bánh ngọt' },
          { word: 'RICE', vn: 'cơm' },
        ],
      },
      {
        name: 'Weather', nameVn: 'Thời Tiết',
        note: 'What the sky is doing outside today.',
        noteVn: 'Bầu trời bên ngoài hôm nay như thế nào.',
        items: [
          { img: 'sun', word: 'SUN', vn: 'mặt trời' },
          { img: 'snow', word: 'SNOW', vn: 'tuyết' },
          { word: 'RAIN', vn: 'mưa' },
          { word: 'WIND', vn: 'gió' },
        ],
      },
    ],
  },
  {
    id: 'first-sounds',
    band: 'early',
    icon: 'Ear',
    title: 'First Sounds',
    titleVn: 'Âm Đầu',
    hint: 'Say every word out loud. Sort them by the FIRST sound you hear.',
    hintVn: 'Đọc to từng từ. Xếp nhóm theo ÂM ĐẦU mà em nghe được.',
    groups: [
      {
        name: 'Starts with S', nameVn: 'Bắt Đầu Bằng S',
        note: 'sun, snake, sock, star — every one begins with the "sss" sound.',
        noteVn: 'sun, snake, sock, star — tất cả đều bắt đầu bằng âm "sss".',
        items: [
          { img: 'sun', word: 'SUN', vn: 'mặt trời' },
          { img: 'snake', word: 'SNAKE', vn: 'con rắn' },
          { word: 'SOCK', vn: 'chiếc tất' },
          { word: 'STAR', vn: 'ngôi sao' },
        ],
      },
      {
        name: 'Starts with B', nameVn: 'Bắt Đầu Bằng B',
        note: 'ball, bus, bed, bag — every one begins with the "buh" sound.',
        noteVn: 'ball, bus, bed, bag — tất cả đều bắt đầu bằng âm "bờ".',
        items: [
          { img: 'ball', word: 'BALL', vn: 'quả bóng' },
          { img: 'bus', word: 'BUS', vn: 'xe buýt' },
          { word: 'BED', vn: 'cái giường' },
          { word: 'BAG', vn: 'cái túi' },
        ],
      },
      {
        name: 'Starts with C', nameVn: 'Bắt Đầu Bằng C',
        note: 'cat, cake, cup, car — every one begins with the "kuh" sound.',
        noteVn: 'cat, cake, cup, car — tất cả đều bắt đầu bằng âm "cờ".',
        items: [
          { img: 'cat', word: 'CAT', vn: 'con mèo' },
          { img: 'cake', word: 'CAKE', vn: 'bánh ngọt' },
          { word: 'CUP', vn: 'cái cốc' },
          { word: 'CAR', vn: 'ô tô' },
        ],
      },
      {
        name: 'Starts with M', nameVn: 'Bắt Đầu Bằng M',
        note: 'moon, milk, map, mat — every one begins with the "mmm" sound.',
        noteVn: 'moon, milk, map, mat — tất cả đều bắt đầu bằng âm "mờ".',
        items: [
          { img: 'moon', word: 'MOON', vn: 'mặt trăng' },
          { img: 'milk', word: 'MILK', vn: 'sữa' },
          { word: 'MAP', vn: 'bản đồ' },
          { word: 'MAT', vn: 'tấm thảm' },
        ],
      },
    ],
  },

  // ── Year 1–4 word puzzles ────────────────────────────────────────────────
  {
    id: 'hungry-caterpillar',
    band: 'words',
    icon: 'Apple',
    title: 'The Hungry Caterpillar',
    titleVn: 'Chú Sâu Háu Ăn',
    hint: 'Find four groups of four words that belong together.',
    hintVn: 'Tìm bốn nhóm, mỗi nhóm bốn từ đi cùng nhau.',
    groups: [
      {
        name: 'Red Fruits', nameVn: 'Trái Cây Màu Đỏ',
        note: 'Healthy foods that are red on the outside.',
        noteVn: 'Thức ăn lành mạnh có vỏ ngoài màu đỏ.',
        items: ['APPLE', 'CHERRY', 'BERRY', 'TOMATO'],
      },
      {
        name: 'Drinks', nameVn: 'Đồ Uống',
        note: 'Things we drink when we are thirsty.',
        noteVn: 'Những thứ chúng ta uống khi khát.',
        items: ['WATER', 'MILK', 'JUICE', 'TEA'],
      },
      {
        name: 'Sweet Treats', nameVn: 'Món Ngọt',
        note: 'Yummy desserts with a lot of sugar in them.',
        noteVn: 'Món tráng miệng ngon có nhiều đường.',
        items: ['CAKE', 'CANDY', 'DONUT', 'PIE'],
      },
      {
        name: 'Things with Wings', nameVn: 'Loài Có Cánh',
        note: 'Animals and bugs that can fly.',
        noteVn: 'Con vật và côn trùng biết bay.',
        items: ['BIRD', 'BEE', 'BAT', 'BUTTERFLY'],
      },
    ],
  },
  {
    id: 'sensory-mix',
    band: 'words',
    icon: 'Hand',
    title: 'The Sensory Fun Mix',
    titleVn: 'Trò Chơi Giác Quan',
    hint: 'Find four groups of four words that belong together.',
    hintVn: 'Tìm bốn nhóm, mỗi nhóm bốn từ đi cùng nhau.',
    groups: [
      {
        name: 'Loud Noises', nameVn: 'Tiếng Động Lớn',
        note: 'Words that sound exactly like the noise they make.',
        noteVn: 'Những từ nghe giống hệt âm thanh mà chúng tạo ra.',
        items: ['BOOM', 'POP', 'BANG', 'CRASH'],
      },
      {
        name: 'Sticky Things', nameVn: 'Thứ Dính',
        note: 'Things that hold other things together, or feel messy on your hands.',
        noteVn: 'Những thứ gắn đồ vật lại với nhau, hoặc dính nhớp trên tay.',
        items: ['GLUE', 'HONEY', 'GUM', 'TAPE'],
      },
      {
        name: 'Cold Things', nameVn: 'Thứ Lạnh',
        note: 'Things that are freezing, or very chilly to touch.',
        noteVn: 'Những thứ đóng băng, hoặc chạm vào thấy rất lạnh.',
        items: ['ICE', 'SNOW', 'FRIDGE', 'IGLOO'],
      },
      {
        name: 'Things with Wheels', nameVn: 'Thứ Có Bánh Xe',
        note: 'Vehicles that roll along the ground to move.',
        noteVn: 'Phương tiện lăn bánh trên mặt đất để di chuyển.',
        items: ['CAR', 'BIKE', 'BUS', 'TRUCK'],
      },
    ],
  },
  {
    id: 'me-and-my-day',
    band: 'words',
    icon: 'Smile',
    title: 'Me and My Day',
    titleVn: 'Em và Một Ngày Của Em',
    hint: 'Find four groups of four words that belong together.',
    hintVn: 'Tìm bốn nhóm, mỗi nhóm bốn từ đi cùng nhau.',
    groups: [
      {
        name: 'Face Parts', nameVn: 'Bộ Phận Trên Mặt',
        note: 'Parts of the face we use to see, to smell and to eat.',
        noteVn: 'Các bộ phận trên mặt dùng để nhìn, để ngửi và để ăn.',
        items: ['EYES', 'NOSE', 'MOUTH', 'CHIN'],
      },
      {
        name: 'Things You Wear', nameVn: 'Đồ Mặc Trên Người',
        note: 'Clothes we put on to stay warm and to look smart.',
        noteVn: 'Quần áo chúng ta mặc để giữ ấm và trông gọn gàng.',
        items: ['SHIRT', 'SOCKS', 'SHOES', 'HAT'],
      },
      {
        name: 'Action Words', nameVn: 'Từ Chỉ Hành Động',
        note: 'Verbs — things you can do with your body.',
        noteVn: 'Động từ — những việc em làm được bằng cơ thể mình.',
        items: ['RUN', 'JUMP', 'SWIM', 'SIT'],
      },
      {
        name: 'Family', nameVn: 'Gia Đình',
        note: 'People who live in our home and love us.',
        noteVn: 'Những người sống chung nhà và yêu thương chúng ta.',
        items: ['MUM', 'DAD', 'SISTER', 'BABY'],
      },
    ],
  },
  {
    id: 'phonics-and-shapes',
    band: 'words',
    icon: 'Shapes',
    title: 'Phonics and Shapes',
    titleVn: 'Ngữ Âm và Hình Khối',
    hint: 'Two groups are about meaning and two are about spelling. Listen carefully.',
    hintVn: 'Hai nhóm về nghĩa của từ, hai nhóm về cách đánh vần. Hãy nghe kỹ.',
    groups: [
      {
        name: 'Rhymes with CAT', nameVn: 'Vần Với CAT',
        note: 'Words that end with the "-at" sound.',
        noteVn: 'Những từ kết thúc bằng âm "-at".',
        items: ['HAT', 'BAT', 'MAT', 'RAT'],
      },
      {
        name: 'Double O', nameVn: 'Hai Chữ O',
        note: 'Spelling: every word has "oo" in the middle.',
        noteVn: 'Chính tả: mỗi từ đều có "oo" ở giữa.',
        items: ['MOON', 'BOOT', 'SPOON', 'POOL'],
      },
      {
        name: 'Shapes', nameVn: 'Hình Khối',
        note: 'Simple shapes we can draw.',
        noteVn: 'Những hình đơn giản chúng ta vẽ được.',
        items: ['STAR', 'HEART', 'CIRCLE', 'SQUARE'],
      },
      {
        name: 'Weather', nameVn: 'Thời Tiết',
        note: 'What it looks like outside, up in the sky.',
        noteVn: 'Bên ngoài trông ra sao, trên bầu trời kia.',
        items: ['RAIN', 'SUN', 'WIND', 'SNOW'],
      },
    ],
  },
  {
    id: 'rhyme-time',
    band: 'words',
    icon: 'Music',
    title: 'Rhyme Time',
    titleVn: 'Giờ Vần Điệu',
    hint: 'Careful — one word looks like a shape but belongs with the rhymes.',
    hintVn: 'Cẩn thận — một từ trông giống tên hình nhưng lại thuộc nhóm vần.',
    groups: [
      {
        name: 'Wild Animals', nameVn: 'Thú Hoang Dã',
        note: 'Animals you might see on a safari or in the jungle.',
        noteVn: 'Những con vật em có thể gặp trong chuyến safari hoặc trong rừng.',
        items: ['LION', 'TIGER', 'MONKEY', 'ZEBRA'],
      },
      {
        name: 'Fruit', nameVn: 'Trái Cây',
        note: 'Healthy snacks that grow on trees or on vines.',
        noteVn: 'Món ăn vặt lành mạnh mọc trên cây hoặc dây leo.',
        items: ['APPLE', 'BANANA', 'LEMON', 'GRAPE'],
      },
      {
        name: 'Shapes', nameVn: 'Hình Khối',
        note: 'Maths shapes with different numbers of sides.',
        noteVn: 'Các hình trong toán học, có số cạnh khác nhau.',
        items: ['CIRCLE', 'TRIANGLE', 'OVAL', 'RECTANGLE'],
      },
      {
        name: 'Rhymes with BEAR', nameVn: 'Vần Với BEAR',
        note: 'They all sound the same at the end — even the one that is a shape.',
        noteVn: 'Tất cả đều có âm cuối giống nhau — kể cả từ vốn là tên một hình.',
        items: ['PEAR', 'CHAIR', 'HAIR', 'SQUARE'],
      },
    ],
  },
  {
    id: 'school-days',
    band: 'words',
    icon: 'School',
    title: 'School Days',
    titleVn: 'Ngày Đến Trường',
    hint: 'Find four groups of four words that belong together.',
    hintVn: 'Tìm bốn nhóm, mỗi nhóm bốn từ đi cùng nhau.',
    groups: [
      {
        name: 'In Your Pencil Case', nameVn: 'Trong Hộp Bút',
        note: 'Things we use to write and to draw at school.',
        noteVn: 'Những thứ dùng để viết và vẽ ở trường.',
        items: ['PEN', 'PENCIL', 'RULER', 'ERASER'],
      },
      {
        name: 'Double L Words', nameVn: 'Từ Có Hai Chữ L',
        note: 'Spelling: these words all end with two Ls.',
        noteVn: 'Chính tả: những từ này đều kết thúc bằng hai chữ L.',
        items: ['BELL', 'BALL', 'TALL', 'FALL'],
      },
      {
        name: 'Numbers', nameVn: 'Số Đếm',
        note: 'Words we use when we are counting.',
        noteVn: 'Những từ chúng ta dùng khi đếm.',
        items: ['ONE', 'TWO', 'THREE', 'FOUR'],
      },
      {
        name: 'Places in School', nameVn: 'Nơi Chốn Trong Trường',
        note: 'Rooms and areas where we learn and play.',
        noteVn: 'Các phòng và khu vực nơi chúng ta học và chơi.',
        items: ['CLASS', 'GYM', 'HALL', 'YARD'],
      },
    ],
  },
  {
    id: 'magic-words',
    band: 'words',
    icon: 'Wand2',
    title: 'Magic Words',
    titleVn: 'Từ Ngữ Phép Thuật',
    hint: 'One group only works when you stick another word on the end.',
    hintVn: 'Có một nhóm chỉ đúng khi em ghép thêm một từ vào phía sau.',
    groups: [
      {
        name: 'Ends with FISH', nameVn: 'Ghép Thêm FISH',
        note: 'Wordplay: add FISH to the end of each one to make a sea creature.',
        noteVn: 'Chơi chữ: ghép FISH vào cuối mỗi từ để được một loài vật biển.',
        items: ['STAR', 'JELLY', 'GOLD', 'SUN'],
      },
      {
        name: 'Things in the Sky', nameVn: 'Những Thứ Trên Bầu Trời',
        note: 'Look up! You can see all of these high above you.',
        noteVn: 'Nhìn lên! Em thấy được tất cả những thứ này ở trên cao.',
        items: ['MOON', 'CLOUD', 'BIRD', 'KITE'],
      },
      {
        name: 'Rhymes with STAR', nameVn: 'Vần Với STAR',
        note: 'Listen closely — these words all have the "ar" sound.',
        noteVn: 'Nghe kỹ nhé — những từ này đều có âm "ar".',
        items: ['CAR', 'FAR', 'JAR', 'BAR'],
      },
      {
        name: 'Colours', nameVn: 'Màu Sắc',
        note: 'Colours you can find in a box of crayons.',
        noteVn: 'Những màu em tìm thấy trong hộp bút sáp.',
        items: ['RED', 'BLUE', 'GREEN', 'PINK'],
      },
    ],
  },
  {
    id: 'at-the-park',
    band: 'words',
    icon: 'Trees',
    title: 'At the Park',
    titleVn: 'Ở Công Viên',
    hint: 'Find four groups of four words that belong together.',
    hintVn: 'Tìm bốn nhóm, mỗi nhóm bốn từ đi cùng nhau.',
    groups: [
      {
        name: 'Things to Ride', nameVn: 'Thứ Để Chơi Và Ngồi Lên',
        note: 'Fun things that move you around at the playground.',
        noteVn: 'Những thứ vui nhộn đưa em di chuyển ở sân chơi.',
        items: ['SWING', 'SLIDE', 'BIKE', 'SCOOTER'],
      },
      {
        name: 'Starts with S', nameVn: 'Bắt Đầu Bằng S',
        note: 'Phonics: all of these begin with the "sss" sound.',
        noteVn: 'Ngữ âm: tất cả đều bắt đầu bằng âm "sss".',
        items: ['SAND', 'SEED', 'SNAIL', 'SNAKE'],
      },
      {
        name: 'Action Words', nameVn: 'Từ Chỉ Hành Động',
        note: 'Verbs — things you do with a lot of energy.',
        noteVn: 'Động từ — những việc em làm với thật nhiều sức lực.',
        items: ['RUN', 'JUMP', 'PLAY', 'CLIMB'],
      },
      {
        name: 'Flying Bugs', nameVn: 'Côn Trùng Biết Bay',
        note: 'Tiny insects that have wings.',
        noteVn: 'Những con côn trùng nhỏ xíu có cánh.',
        items: ['BEE', 'FLY', 'MOTH', 'GNAT'],
      },
    ],
  },
  {
    id: 'opposites-and-animals',
    band: 'words',
    icon: 'Cat',
    title: 'Opposites and Animals',
    titleVn: 'Từ Trái Nghĩa và Con Vật',
    hint: 'One animal also fits a spelling group. Find the other three first.',
    hintVn: 'Một con vật cũng hợp với nhóm chính tả. Hãy tìm ba từ kia trước.',
    groups: [
      {
        name: 'Words with OW', nameVn: 'Từ Có OW',
        note: 'Phonics: these words all have the "ow" sound in them.',
        noteVn: 'Ngữ âm: những từ này đều chứa âm "ow".',
        items: ['HOW', 'NOW', 'BROWN', 'TOWN'],
      },
      {
        name: 'Farm Animals', nameVn: 'Con Vật Ở Nông Trại',
        note: 'Friendly animals that live in a barn or out in a field.',
        noteVn: 'Những con vật hiền lành sống trong chuồng hoặc ngoài đồng.',
        items: ['COW', 'PIG', 'HORSE', 'SHEEP'],
      },
      {
        name: 'Opposites of BIG', nameVn: 'Trái Nghĩa Với BIG',
        note: 'Adjectives that all mean something is not large.',
        noteVn: 'Tính từ mang nghĩa một vật không to lớn.',
        items: ['SMALL', 'TINY', 'LITTLE', 'MINI'],
      },
      {
        name: 'Colours', nameVn: 'Màu Sắc',
        note: 'Words we use to describe what something looks like.',
        noteVn: 'Những từ dùng để tả một vật trông như thế nào.',
        items: ['BLACK', 'WHITE', 'GREY', 'ORANGE'],
      },
    ],
  },
  {
    id: 'tricky-sounds',
    band: 'words',
    icon: 'Ear',
    title: 'Tricky Sounds',
    titleVn: 'Âm Khó',
    hint: 'Every group here is a spelling trick, not a meaning.',
    hintVn: 'Mỗi nhóm ở đây là một mẹo chính tả, không phải về nghĩa.',
    groups: [
      {
        name: 'Sounds Like a Number', nameVn: 'Nghe Giống Một Con Số',
        note: 'Homophones — they sound exactly like 1, 2, 8 and 4.',
        noteVn: 'Từ đồng âm — nghe hệt như 1, 2, 8 và 4.',
        items: ['WON', 'TOO', 'ATE', 'FOR'],
      },
      {
        name: 'Silent K', nameVn: 'Chữ K Câm',
        note: 'Spelling trick: the K at the start of each word is completely silent.',
        noteVn: 'Mẹo chính tả: chữ K ở đầu mỗi từ hoàn toàn không đọc.',
        items: ['KNEE', 'KNOT', 'KNIFE', 'KNIGHT'],
      },
      {
        name: 'Things with Teeth', nameVn: 'Vật Có Răng',
        note: 'None of them is a mouth, but every one of them has teeth.',
        noteVn: 'Không cái nào là miệng, nhưng cái nào cũng có răng.',
        items: ['COMB', 'SAW', 'GEAR', 'ZIPPER'],
      },
      {
        name: 'Same Backwards', nameVn: 'Đọc Ngược Vẫn Thế',
        note: 'Palindromes — spelled the same way forwards and backwards.',
        noteVn: 'Từ đối xứng — đánh vần xuôi hay ngược đều giống nhau.',
        items: ['NOON', 'LEVEL', 'MADAM', 'RADAR'],
      },
    ],
  },
  {
    id: 'clever-connections',
    band: 'words',
    icon: 'Link',
    title: 'Clever Connections',
    titleVn: 'Kết Nối Thông Minh',
    hint: 'The hardest wall. Two groups are wordplay, two are real meanings.',
    hintVn: 'Bức tường khó nhất. Hai nhóm là chơi chữ, hai nhóm là nghĩa thật.',
    groups: [
      {
        name: 'Ends with ROOM', nameVn: 'Ghép Thêm ROOM',
        note: 'Wordplay: add ROOM to the end of each one to make a new word.',
        noteVn: 'Chơi chữ: ghép ROOM vào cuối mỗi từ để tạo một từ mới.',
        items: ['BED', 'BATH', 'MUSH', 'SUN'],
      },
      {
        name: 'Things You Can Catch', nameVn: 'Những Thứ Có Thể "Catch"',
        note: 'You can catch a bug — but you can also catch a cold and catch a train.',
        noteVn: 'Ta bắt được con bọ — nhưng cũng "catch a cold" (bị cảm) và "catch a train" (kịp chuyến tàu).',
        items: ['BUG', 'COLD', 'FISH', 'TRAIN'],
      },
      {
        name: 'Directions', nameVn: 'Phương Hướng',
        note: 'Compass directions that help you find your way.',
        noteVn: 'Các hướng trên la bàn giúp em tìm đường.',
        items: ['NORTH', 'SOUTH', 'EAST', 'WEST'],
      },
      {
        name: 'Double Letters', nameVn: 'Chữ Cái Đôi',
        note: 'Spelling: look closely — each one has a doubled letter in the middle.',
        noteVn: 'Chính tả: nhìn kỹ — mỗi từ đều có một chữ cái lặp đôi ở giữa.',
        items: ['APPLE', 'BUTTER', 'SUMMER', 'HAPPY'],
      },
    ],
  },
]

export const BANDS = {
  early: { label: 'Kindergarten – Year 1', labelVn: 'Mẫu giáo – Lớp 1' },
  words: { label: 'Year 1 – Year 4', labelVn: 'Lớp 1 – Lớp 4' },
}
