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
// three-letter words), 'y1' is a second all-picture set for Year 1 — materials,
// animal groups, rooms and places, opening with a Cambridge Primary Science
// Stage 1 wall — 'words' is the Year 1–4 word puzzles, and 'y7' is the Year 7
// set — curriculum vocabulary and NYT-Connections-style wordplay, where at
// least one tile in every wall is deliberately baited into the wrong group.

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

  {
    id: 'in-the-kitchen',
    band: 'early',
    icon: 'CookingPot',
    title: 'In the Kitchen',
    titleVn: 'Trong Nhà Bếp',
    hint: 'All pictures. Everything here lives in a kitchen — but what do we DO with each one?',
    hintVn: 'Toàn tranh. Mọi thứ ở đây đều có trong bếp — nhưng ta DÙNG mỗi thứ để làm gì?',
    groups: [
      {
        name: 'We Cook With These', nameVn: 'Dùng Để Nấu',
        note: 'These go on the hot stove. Never touch them without a grown-up!',
        noteVn: 'Những thứ này đặt lên bếp nóng. Đừng bao giờ chạm vào khi không có người lớn!',
        items: [
          { img: 'pan', word: 'PAN', vn: 'cái chảo' },
          { img: 'pot', word: 'POT', vn: 'cái nồi' },
          { img: 'wok', word: 'WOK', vn: 'cái chảo lớn' },
          { img: 'kettle', word: 'KETTLE', vn: 'ấm đun nước' },
        ],
      },
      {
        name: 'We Eat With These', nameVn: 'Dùng Để Ăn',
        note: 'We pick these up at dinner time and put the food in our mouth.',
        noteVn: 'Chúng ta cầm những thứ này vào bữa ăn để đưa thức ăn vào miệng.',
        items: [
          { img: 'spoon', word: 'SPOON', vn: 'cái thìa' },
          { img: 'fork', word: 'FORK', vn: 'cái nĩa' },
          { img: 'chopsticks', word: 'CHOPSTICKS', vn: 'đôi đũa' },
          { img: 'bowl', word: 'BOWL', vn: 'cái bát' },
        ],
      },
      {
        name: 'Big Kitchen Machines', nameVn: 'Máy Móc Lớn Trong Bếp',
        note: 'The big ones that plug in. Three make food hot and one keeps it cold.',
        noteVn: 'Những thứ to phải cắm điện. Ba cái làm nóng thức ăn, một cái giữ lạnh.',
        items: [
          { img: 'fridge', word: 'FRIDGE', vn: 'tủ lạnh' },
          { img: 'oven', word: 'OVEN', vn: 'lò nướng' },
          { img: 'microwave', word: 'MICROWAVE', vn: 'lò vi sóng' },
          { img: 'toaster', word: 'TOASTER', vn: 'máy nướng bánh mì' },
        ],
      },
      {
        name: 'Things We Drink', nameVn: 'Đồ Uống',
        note: 'We pour all of these into a cup or a glass.',
        noteVn: 'Chúng ta rót tất cả những thứ này vào cốc hoặc ly.',
        items: [
          { img: 'tea', word: 'TEA', vn: 'trà' },
          { img: 'coffee', word: 'COFFEE', vn: 'cà phê' },
          { img: 'water', word: 'WATER', vn: 'nước' },
          { img: 'juice', word: 'JUICE', vn: 'nước ép' },
        ],
      },
    ],
  },
  {
    id: 'good-food',
    band: 'early',
    icon: 'Carrot',
    title: 'Good Food',
    titleVn: 'Thức Ăn Ngon',
    hint: 'All pictures. Four kinds of food. Which four go on the same shelf?',
    hintVn: 'Toàn tranh. Bốn loại thức ăn. Bốn thứ nào cùng nằm trên một kệ?',
    groups: [
      {
        name: 'Fruit', nameVn: 'Trái Cây',
        note: 'Sweet food that grows on a tree or a vine.',
        noteVn: 'Thức ăn ngọt mọc trên cây hoặc dây leo.',
        items: [
          { img: 'apple', word: 'APPLE', vn: 'quả táo' },
          { img: 'banana', word: 'BANANA', vn: 'quả chuối' },
          { img: 'orange', word: 'ORANGE', vn: 'quả cam' },
          { img: 'grapes', word: 'GRAPES', vn: 'chùm nho' },
        ],
      },
      {
        name: 'Vegetables', nameVn: 'Rau Củ',
        note: 'These grow in a garden. They keep us strong and healthy.',
        noteVn: 'Những thứ này mọc trong vườn. Chúng giúp ta khoẻ mạnh.',
        items: [
          { img: 'carrot', word: 'CARROT', vn: 'củ cà rốt' },
          { img: 'potato', word: 'POTATO', vn: 'củ khoai tây' },
          { img: 'broccoli', word: 'BROCCOLI', vn: 'bông cải xanh' },
          { img: 'onion', word: 'ONION', vn: 'củ hành' },
        ],
      },
      {
        name: 'Sweet Treats', nameVn: 'Món Ngọt',
        note: 'Full of sugar. Lovely — but only sometimes!',
        noteVn: 'Rất nhiều đường. Ngon đấy — nhưng thỉnh thoảng thôi nhé!',
        items: [
          { img: 'cake', word: 'CAKE', vn: 'bánh ngọt' },
          { img: 'icecream', word: 'ICE CREAM', vn: 'kem' },
          { img: 'biscuit', word: 'BISCUIT', vn: 'bánh quy' },
          { img: 'chocolate', word: 'CHOCOLATE', vn: 'sô cô la' },
        ],
      },
      {
        name: 'Food from the Sea', nameVn: 'Hải Sản',
        note: 'All four of these swim in the sea before they come to the market.',
        noteVn: 'Cả bốn thứ này bơi dưới biển trước khi ra chợ.',
        items: [
          { img: 'fish', word: 'FISH', vn: 'con cá' },
          { img: 'prawn', word: 'PRAWN', vn: 'con tôm' },
          { img: 'crab', word: 'CRAB', vn: 'con cua' },
          { img: 'squid', word: 'SQUID', vn: 'con mực' },
        ],
      },
    ],
  },
  {
    id: 'where-food-comes-from',
    band: 'early',
    icon: 'Sprout',
    title: 'Where Food Comes From',
    titleVn: 'Thức Ăn Từ Đâu Đến',
    hint: 'All pictures. Not what it tastes like — where it came from BEFORE the shop.',
    hintVn: 'Toàn tranh. Không phải mùi vị — mà là nơi nó đến TRƯỚC khi ra cửa hàng.',
    groups: [
      {
        name: 'Grows on a Tree', nameVn: 'Mọc Trên Cây',
        note: 'We pick all four of these down off a tall tree.',
        noteVn: 'Cả bốn thứ này được hái xuống từ cây cao.',
        items: [
          { img: 'apple', word: 'APPLE', vn: 'quả táo' },
          { img: 'orange', word: 'ORANGE', vn: 'quả cam' },
          { img: 'banana', word: 'BANANA', vn: 'quả chuối' },
          { img: 'coconut', word: 'COCONUT', vn: 'quả dừa' },
        ],
      },
      {
        name: 'Grows Under the Ground', nameVn: 'Mọc Dưới Đất',
        note: 'You cannot see these growing. We have to dig them up out of the soil.',
        noteVn: 'Ta không nhìn thấy chúng lớn lên. Phải đào lên từ trong đất.',
        items: [
          { img: 'carrot', word: 'CARROT', vn: 'củ cà rốt' },
          { img: 'potato', word: 'POTATO', vn: 'củ khoai tây' },
          { img: 'onion', word: 'ONION', vn: 'củ hành' },
          { img: 'ginger', word: 'GINGER', vn: 'củ gừng' },
        ],
      },
      {
        name: 'From a Cow or a Hen', nameVn: 'Từ Con Bò Hoặc Con Gà',
        note: 'An animal made all four of these for us. Butter and cheese both start as milk.',
        noteVn: 'Cả bốn thứ này do con vật cho ta. Bơ và phô mai đều làm từ sữa.',
        items: [
          { img: 'milk', word: 'MILK', vn: 'sữa' },
          { img: 'cheese', word: 'CHEESE', vn: 'phô mai' },
          { img: 'egg', word: 'EGG', vn: 'quả trứng' },
          { img: 'butter', word: 'BUTTER', vn: 'bơ' },
        ],
      },
      {
        name: 'Baked in an Oven', nameVn: 'Nướng Trong Lò',
        note: 'These do not grow anywhere. Somebody mixed them and baked them.',
        noteVn: 'Những thứ này không mọc ở đâu cả. Có người trộn bột rồi đem nướng.',
        items: [
          { img: 'bread', word: 'BREAD', vn: 'bánh mì' },
          { img: 'cake', word: 'CAKE', vn: 'bánh ngọt' },
          { img: 'biscuit', word: 'BISCUIT', vn: 'bánh quy' },
          { img: 'doughnut', word: 'DOUGHNUT', vn: 'bánh vòng' },
        ],
      },
    ],
  },

  // ── Year 1 · science and the world ───────────────────────────────────────
  // Four more all-picture walls, no reading anywhere on the board. The first
  // is Cambridge Primary Science Stage 1 Chemistry — sorting objects by the
  // material they are made from — and the other three widen the same skill to
  // animals, rooms and places.
  {
    id: 'what-is-it-made-of',
    band: 'y1',
    icon: 'Blocks',
    title: 'What Is It Made Of?',
    titleVn: 'Làm Bằng Gì?',
    hint: 'All pictures. Not what it DOES — what it is MADE OF.',
    hintVn: 'Toàn tranh. Không phải công dụng — mà là VẬT LIỆU làm ra nó.',
    groups: [
      {
        name: 'Made of Wood', nameVn: 'Làm Bằng Gỗ',
        note: 'Wood comes from a tree. It is light, and it floats on water.',
        noteVn: 'Gỗ lấy từ cây. Gỗ nhẹ và nổi trên mặt nước.',
        items: [
          { img: 'pencil', word: 'PENCIL', vn: 'bút chì' },
          { img: 'chair', word: 'CHAIR', vn: 'cái ghế' },
          { img: 'woodenspoon', word: 'WOODEN SPOON', vn: 'thìa gỗ' },
          { img: 'chopsticks', word: 'CHOPSTICKS', vn: 'đôi đũa' },
        ],
      },
      {
        name: 'Made of Metal', nameVn: 'Làm Bằng Kim Loại',
        note: 'Metal is hard, cold and shiny. It is the heaviest of the four.',
        noteVn: 'Kim loại cứng, lạnh và sáng bóng. Nặng nhất trong bốn loại.',
        items: [
          { img: 'key', word: 'KEY', vn: 'chìa khoá' },
          { img: 'spoon', word: 'SPOON', vn: 'cái thìa' },
          { img: 'coin', word: 'COIN', vn: 'đồng xu' },
          { img: 'nail', word: 'NAIL', vn: 'cái đinh' },
        ],
      },
      {
        name: 'Made of Plastic', nameVn: 'Làm Bằng Nhựa',
        note: 'Plastic is light and bendy, and it can be any colour we like.',
        noteVn: 'Nhựa nhẹ, dẻo và có thể làm thành bất kỳ màu nào.',
        items: [
          { img: 'bottle', word: 'BOTTLE', vn: 'chai nhựa' },
          { img: 'bucket', word: 'BUCKET', vn: 'cái xô' },
          { img: 'straw', word: 'STRAW', vn: 'ống hút' },
          { img: 'comb', word: 'COMB', vn: 'cái lược' },
        ],
      },
      {
        name: 'Made of Glass', nameVn: 'Làm Bằng Thuỷ Tinh',
        note: 'Glass lets the light straight through — and it breaks. Careful!',
        noteVn: 'Thuỷ tinh cho ánh sáng đi xuyên qua — và dễ vỡ. Cẩn thận nhé!',
        items: [
          { img: 'windowpane', word: 'WINDOW', vn: 'cửa sổ' },
          { img: 'jar', word: 'JAR', vn: 'lọ thuỷ tinh' },
          { img: 'bulb', word: 'LIGHT BULB', vn: 'bóng đèn' },
          { img: 'glasses', word: 'GLASSES', vn: 'kính mắt' },
        ],
      },
    ],
  },
  {
    id: 'animal-groups',
    band: 'y1',
    icon: 'Bird',
    title: 'Animal Groups',
    titleVn: 'Các Nhóm Động Vật',
    hint: 'All pictures. Sort the animals by what they are and where they live.',
    hintVn: 'Toàn tranh. Xếp con vật theo loại và nơi chúng sống.',
    groups: [
      {
        name: 'In the Sea', nameVn: 'Sống Dưới Biển',
        note: 'All four live in the sea. The whale and the turtle come up for air.',
        noteVn: 'Cả bốn con sống ở biển. Cá voi và rùa phải ngoi lên thở.',
        items: [
          { img: 'whale', word: 'WHALE', vn: 'cá voi' },
          { img: 'shark', word: 'SHARK', vn: 'cá mập' },
          { img: 'turtle', word: 'TURTLE', vn: 'con rùa biển' },
          { img: 'octopus', word: 'OCTOPUS', vn: 'bạch tuộc' },
        ],
      },
      {
        name: 'Birds', nameVn: 'Loài Chim',
        note: 'Birds have feathers, two legs and a beak. The penguin cannot fly.',
        noteVn: 'Chim có lông vũ, hai chân và mỏ. Chim cánh cụt không bay được.',
        items: [
          { img: 'owl', word: 'OWL', vn: 'con cú' },
          { img: 'duck', word: 'DUCK', vn: 'con vịt' },
          { img: 'penguin', word: 'PENGUIN', vn: 'chim cánh cụt' },
          { img: 'parrot', word: 'PARROT', vn: 'con vẹt' },
        ],
      },
      {
        name: 'Minibeasts', nameVn: 'Côn Trùng Nhỏ',
        note: 'Tiny animals with lots of legs. The spider has eight, the others six.',
        noteVn: 'Những con vật tí hon nhiều chân. Nhện có tám chân, ba con kia sáu.',
        items: [
          { img: 'ant', word: 'ANT', vn: 'con kiến' },
          { img: 'bee', word: 'BEE', vn: 'con ong' },
          { img: 'butterfly', word: 'BUTTERFLY', vn: 'con bướm' },
          { img: 'spider', word: 'SPIDER', vn: 'con nhện' },
        ],
      },
      {
        name: 'Big Wild Animals', nameVn: 'Thú Hoang Dã To Lớn',
        note: 'Far too big and too wild to keep at home. They live in hot places.',
        noteVn: 'Quá to và quá hoang dã để nuôi ở nhà. Chúng sống ở xứ nóng.',
        items: [
          { img: 'elephant', word: 'ELEPHANT', vn: 'con voi' },
          { img: 'tiger', word: 'TIGER', vn: 'con hổ' },
          { img: 'monkey', word: 'MONKEY', vn: 'con khỉ' },
          { img: 'giraffe', word: 'GIRAFFE', vn: 'hươu cao cổ' },
        ],
      },
    ],
  },
  {
    id: 'around-the-house',
    band: 'y1',
    icon: 'House',
    title: 'Around the House',
    titleVn: 'Trong Ngôi Nhà',
    hint: 'All pictures. Which room does each thing live in?',
    hintVn: 'Toàn tranh. Mỗi thứ nằm ở phòng nào?',
    groups: [
      {
        name: 'In the Bathroom', nameVn: 'Trong Phòng Tắm',
        note: 'Every one of these helps us get clean.',
        noteVn: 'Mỗi thứ ở đây đều giúp chúng ta sạch sẽ.',
        items: [
          { img: 'toothbrush', word: 'TOOTHBRUSH', vn: 'bàn chải đánh răng' },
          { img: 'soap', word: 'SOAP', vn: 'xà phòng' },
          { img: 'towel', word: 'TOWEL', vn: 'khăn tắm' },
          { img: 'comb', word: 'COMB', vn: 'cái lược' },
        ],
      },
      {
        name: 'In the Bedroom', nameVn: 'Trong Phòng Ngủ',
        note: 'This is where we sleep. Soft, warm and quiet.',
        noteVn: 'Đây là nơi chúng ta ngủ. Mềm, ấm và yên tĩnh.',
        items: [
          { img: 'bed', word: 'BED', vn: 'cái giường' },
          { img: 'pillow', word: 'PILLOW', vn: 'cái gối' },
          { img: 'lamp', word: 'LAMP', vn: 'đèn ngủ' },
          { img: 'teddy', word: 'TEDDY', vn: 'gấu bông' },
        ],
      },
      {
        name: 'In the Living Room', nameVn: 'Trong Phòng Khách',
        note: 'The room where the whole family sits together in the evening.',
        noteVn: 'Căn phòng cả nhà ngồi cùng nhau vào buổi tối.',
        items: [
          { img: 'sofa', word: 'SOFA', vn: 'ghế sô pha' },
          { img: 'television', word: 'TELEVISION', vn: 'ti vi' },
          { img: 'clock', word: 'CLOCK', vn: 'đồng hồ' },
          { img: 'rug', word: 'RUG', vn: 'tấm thảm' },
        ],
      },
      {
        name: 'On the Desk', nameVn: 'Trên Bàn Học',
        note: 'We pick these up to draw, to write and to cut.',
        noteVn: 'Chúng ta cầm những thứ này để vẽ, để viết và để cắt.',
        items: [
          { img: 'pencil', word: 'PENCIL', vn: 'bút chì' },
          { img: 'crayon', word: 'CRAYON', vn: 'bút sáp' },
          { img: 'scissors', word: 'SCISSORS', vn: 'cái kéo' },
          { img: 'glue', word: 'GLUE', vn: 'keo dán' },
        ],
      },
    ],
  },
  {
    id: 'out-and-about',
    band: 'y1',
    icon: 'Sun',
    title: 'Out and About',
    titleVn: 'Ra Ngoài Chơi',
    hint: 'All pictures. Four places you go when you go outside.',
    hintVn: 'Toàn tranh. Bốn nơi em đến khi ra ngoài chơi.',
    groups: [
      {
        name: 'At the Playground', nameVn: 'Ở Sân Chơi',
        note: 'We climb, slide and bounce on all of these at the park.',
        noteVn: 'Chúng ta leo, trượt và chơi những thứ này ở công viên.',
        items: [
          { img: 'slide', word: 'SLIDE', vn: 'cầu trượt' },
          { img: 'seesaw', word: 'SEESAW', vn: 'bập bênh' },
          { img: 'sandpit', word: 'SANDPIT', vn: 'hố cát' },
          { img: 'ball', word: 'BALL', vn: 'quả bóng' },
        ],
      },
      {
        name: 'At the Seaside', nameVn: 'Ở Bờ Biển',
        note: 'You find all four of these where the sand meets the sea.',
        noteVn: 'Em tìm thấy cả bốn thứ này nơi bãi cát gặp biển.',
        items: [
          { img: 'shell', word: 'SHELL', vn: 'vỏ sò' },
          { img: 'starfish', word: 'STARFISH', vn: 'sao biển' },
          { img: 'crab', word: 'CRAB', vn: 'con cua' },
          { img: 'boat', word: 'BOAT', vn: 'chiếc thuyền' },
        ],
      },
      {
        name: 'Up in the Sky', nameVn: 'Trên Bầu Trời',
        note: 'You have to look UP to see all four of these.',
        noteVn: 'Em phải NGƯỚC LÊN mới thấy được cả bốn thứ này.',
        items: [
          { img: 'cloud', word: 'CLOUD', vn: 'đám mây' },
          { img: 'rainbow', word: 'RAINBOW', vn: 'cầu vồng' },
          { img: 'kite', word: 'KITE', vn: 'con diều' },
          { img: 'moon', word: 'MOON', vn: 'mặt trăng' },
        ],
      },
      {
        name: 'In the Garden', nameVn: 'Trong Vườn',
        note: 'All four of these grow bigger. They are alive!',
        noteVn: 'Cả bốn thứ này đều lớn lên. Chúng đang sống!',
        items: [
          { img: 'flower', word: 'FLOWER', vn: 'bông hoa' },
          { img: 'tree', word: 'TREE', vn: 'cái cây' },
          { img: 'grass', word: 'GRASS', vn: 'cỏ' },
          { img: 'leaf', word: 'LEAF', vn: 'chiếc lá' },
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

  // ── Year 7 ───────────────────────────────────────────────────────────────
  // Built the way a Connections wall is built: one group that anchors the
  // board, one that needs the curriculum, one pure wordplay, and at least one
  // tile that fits two groups and only resolves once the others are full. The
  // hint says which tile is baited, because the point is to argue about it, not
  // to be ambushed by it.
  {
    id: 'number-words',
    band: 'y7',
    icon: 'Sigma',
    title: 'Talking About Number',
    titleVn: 'Nói Về Con Số',
    hint: 'Two groups are the words a question uses. Two are the maths itself. SQUARE and CUBE belong to only one of them.',
    hintVn: 'Hai nhóm là từ ngữ trong đề bài. Hai nhóm là bản thân toán học. SQUARE và CUBE chỉ thuộc về một nhóm thôi.',
    groups: [
      {
        name: 'This Means Add', nameVn: 'Nghĩa Là Cộng',
        note: 'Every one of these in a question tells you to add: "find the sum", "the total", "8 more than 5".',
        noteVn: 'Tất cả những từ này trong đề bài đều bảo em cộng: "find the sum", "the total", "8 more than 5".',
        items: ['SUM', 'TOTAL', 'PLUS', 'MORE'],
      },
      {
        name: 'This Means Subtract', nameVn: 'Nghĩa Là Trừ',
        note: 'And these tell you to subtract. Careful with the order: "subtract 5 from 8" is 8 − 5.',
        noteVn: 'Còn những từ này bảo em trừ. Cẩn thận thứ tự: "subtract 5 from 8" là 8 − 5.',
        items: ['MINUS', 'LESS', 'TAKE', 'DIFFERENCE'],
      },
      {
        name: 'Kinds of Number', nameVn: 'Các Loại Số',
        note: '4 is a square number, 8 is a cube number, 7 is prime, 10 is triangular. SQUARE and CUBE are numbers here, not shapes.',
        noteVn: '4 là số chính phương, 8 là số lập phương, 7 là số nguyên tố, 10 là số tam giác. Ở đây SQUARE và CUBE là SỐ, không phải hình.',
        items: ['PRIME', 'SQUARE', 'CUBE', 'TRIANGULAR'],
      },
      {
        name: 'Solid Shapes', nameVn: 'Hình Khối',
        note: 'The 3D shapes — and not one of them is also the name of a kind of number, which is how you knew.',
        noteVn: 'Các hình khối 3D — và không hình nào trong số này là tên một loại số, đó chính là manh mối.',
        items: ['PRISM', 'SPHERE', 'CONE', 'PYRAMID'],
      },
    ],
  },
  {
    id: 'cells-and-life',
    band: 'y7',
    icon: 'Dna',
    title: 'Cells and Life',
    titleVn: 'Tế Bào và Sự Sống',
    hint: 'Straight from Unit 1. Two groups are parts of a cell, one is whole cells, one is what every living thing does.',
    hintVn: 'Lấy thẳng từ Bài 1. Hai nhóm là bộ phận của tế bào, một nhóm là tế bào hoàn chỉnh, một nhóm là điều mọi sinh vật đều làm.',
    groups: [
      {
        name: 'In Every Cell', nameVn: 'Có Trong Mọi Tế Bào',
        note: 'Animal and plant cells both have all four of these.',
        noteVn: 'Cả tế bào động vật và thực vật đều có đủ bốn thứ này.',
        items: ['NUCLEUS', 'MEMBRANE', 'CYTOPLASM', 'MITOCHONDRIA'],
      },
      {
        name: 'Plant Cells Only', nameVn: 'Chỉ Có Ở Tế Bào Thực Vật',
        note: 'An animal cell has none of these. The wall is why a plant stands up; the chloroplast is why it is green.',
        noteVn: 'Tế bào động vật không có thứ nào trong số này. Vách tế bào giúp cây đứng vững; lục lạp làm cây có màu xanh.',
        items: ['CELL WALL', 'CHLOROPLAST', 'VACUOLE', 'CHLOROPHYLL'],
      },
      {
        name: 'Specialised Cells', nameVn: 'Tế Bào Chuyên Hoá',
        note: 'Whole cells, not parts — each one shaped for the job it does.',
        noteVn: 'Là tế bào hoàn chỉnh, không phải bộ phận — mỗi loại có hình dạng phù hợp với nhiệm vụ của nó.',
        items: ['NEURONE', 'PALISADE', 'CILIATED', 'ROOT HAIR'],
      },
      {
        name: 'What Living Things Do', nameVn: 'Điều Sinh Vật Sống Làm',
        note: 'Four of the seven life processes. If it does all seven, it is alive.',
        noteVn: 'Bốn trong bảy quá trình sống. Nếu làm được cả bảy thì đó là vật sống.',
        items: ['GROWTH', 'MOVEMENT', 'EXCRETION', 'NUTRITION'],
      },
    ],
  },
  {
    id: 'hidden-words',
    band: 'y7',
    icon: 'Puzzle',
    title: 'Stick a Word on the End',
    titleVn: 'Ghép Thêm Một Từ',
    hint: 'Three groups need a word added to the end. FIRE fits all three — so it belongs to the one the others cannot fill.',
    hintVn: 'Ba nhóm cần ghép thêm một từ vào cuối. FIRE hợp với cả ba — nên nó thuộc về nhóm mà các từ khác không lấp được.',
    groups: [
      {
        name: 'Add BALL', nameVn: 'Ghép Thêm BALL',
        note: 'football, baseball, eyeball, snowball. Fireball is real too — but FIRE was needed elsewhere.',
        noteVn: 'football, baseball, eyeball, snowball. Fireball cũng có thật — nhưng FIRE cần cho nhóm khác.',
        items: ['FOOT', 'BASE', 'EYE', 'SNOW'],
      },
      {
        name: 'Add WORK', nameVn: 'Ghép Thêm WORK',
        note: 'homework, network, teamwork, paperwork. Firework is real too. Same trick, same answer.',
        noteVn: 'homework, network, teamwork, paperwork. Firework cũng có thật. Cùng một mẹo, cùng một đáp án.',
        items: ['HOME', 'NET', 'TEAM', 'PAPER'],
      },
      {
        name: 'Add LIGHT', nameVn: 'Ghép Thêm LIGHT',
        note: 'daylight, moonlight, highlight, firelight. FIRE lands here because BALL and WORK were already full.',
        noteVn: 'daylight, moonlight, highlight, firelight. FIRE về đây vì nhóm BALL và WORK đã đủ bốn từ rồi.',
        items: ['DAY', 'MOON', 'HIGH', 'FIRE'],
      },
      {
        name: 'Parts of a River', nameVn: 'Các Phần Của Con Sông',
        note: 'A river has a source, a bed, banks and a mouth. Four ordinary words doing a geography job.',
        noteVn: 'Con sông có nguồn, lòng sông, bờ sông và cửa sông. Bốn từ thường ngày mang nghĩa địa lý.',
        items: ['SOURCE', 'BED', 'BANK', 'MOUTH'],
      },
    ],
  },
  {
    id: 'every-class-english',
    band: 'y7',
    icon: 'Languages',
    title: 'Every Class Is an English Class',
    titleVn: 'Giờ Nào Cũng Là Giờ Tiếng Anh',
    hint: 'Every tile is a normal English word that school has stolen and given a second meaning. Which subject stole it?',
    hintVn: 'Mỗi ô là một từ tiếng Anh thường ngày đã bị nhà trường "mượn" và gán cho nghĩa thứ hai. Môn nào đã mượn nó?',
    groups: [
      {
        name: 'In a Maths Lesson', nameVn: 'Trong Giờ Toán',
        note: 'A times table, a power of 2, a square root, the volume of a cuboid. Not furniture, electricity, a plant or a radio.',
        noteVn: 'Bảng cửu chương, luỹ thừa của 2, căn bậc hai, thể tích hình hộp. Không phải cái bàn, điện, rễ cây hay âm lượng.',
        items: ['TABLE', 'POWER', 'ROOT', 'VOLUME'],
      },
      {
        name: 'In a Science Lesson', nameVn: 'Trong Giờ Khoa Học',
        note: 'A cell under a microscope, an electric current, the mass of an object, salt dissolved in water.',
        noteVn: 'Tế bào dưới kính hiển vi, dòng điện, khối lượng của vật, muối hoà tan trong nước.',
        items: ['CELL', 'CURRENT', 'MASS', 'SOLUTION'],
      },
      {
        name: 'What the Question Tells You to Do', nameVn: 'Việc Đề Bài Yêu Cầu',
        note: 'Command words. STATE wants one line; EXPLAIN wants a reason; COMPARE wants both things in one sentence.',
        noteVn: 'Từ lệnh trong đề. STATE cần một câu; EXPLAIN cần lý do; COMPARE cần cả hai vế trong một câu.',
        items: ['STATE', 'EXPLAIN', 'DESCRIBE', 'COMPARE'],
      },
      {
        name: 'Everyday Words for "a lot"', nameVn: 'Từ Thường Ngày Nghĩa Là "rất nhiều"',
        note: 'The easy group — and the reason MASS could not sit here, however much it sounded like it belonged.',
        noteVn: 'Nhóm dễ nhất — và là lý do MASS không thể ở đây, dù nghe rất giống.',
        items: ['LOADS', 'HEAPS', 'TONS', 'PILES'],
      },
    ],
  },
]

export const BANDS = {
  early: { label: 'Kindergarten – Year 1', labelVn: 'Mẫu giáo – Lớp 1' },
  y1: { label: 'Year 1 · Science and the World', labelVn: 'Lớp 1 · Khoa Học và Thế Giới' },
  words: { label: 'Year 1 – Year 4', labelVn: 'Lớp 1 – Lớp 4' },
  y7: { label: 'Year 7', labelVn: 'Lớp 7' },
}
