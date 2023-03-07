'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Colors', [
      {
        "id": 1,
        "color": "#FFFFFF",
        "DMC": "blanc",
        "nameColorEng": "White",
        "nameColorRu": "Белый"
      },
      {
        "id": 2,
        "color": "#E9E9D4",
        "DMC": "Ecru",
        "nameColorEng": "Ecru",
        "nameColorRu": "Кремовый"
      },
      {
        "id": 3,
        "color": "#FFFFFF",
        "DMC": "B5200",
        "nameColorEng": "Ultra white",
        "nameColorRu": "Белоснежный"
      },
      {
        "id": 4,
        "color": "#9F3845",
        "DMC": "150",
        "nameColorEng": "Dusty Rose — ultra vy dk",
        "nameColorRu": "Пыльная роза, ультра очень тёмный (оч. Т. )"
      },
      {
        "id": 5,
        "color": "#F2BCC5",
        "DMC": "151",
        "nameColorEng": "Dusty Rose — vy lt",
        "nameColorRu": "Пыльная роза, очень светлый (оч. Св. )"
      },
      {
        "id": 6,
        "color": "#CFA296",
        "DMC": "152",
        "nameColorEng": "Shell Pink — med lt",
        "nameColorRu": "Розовых ракушек, средне светлый (ср. Св. )"
      },
      {
        "id": 7,
        "color": "#DEBCD9",
        "DMC": "153",
        "nameColorEng": "Violet — vy lt",
        "nameColorRu": "Фиолетовый, очень светлый (оч. Св)"
      },
      {
        "id": 8,
        "color": "#4D2E3D",
        "DMC": "154",
        "nameColorEng": "Grape — vy dk",
        "nameColorRu": "Красного винограда, оч. Т. "
      },
      {
        "id": 9,
        "color": "#908BC3",
        "DMC": "155",
        "nameColorEng": "Blue Violet — med dk",
        "nameColorRu": "Сине-фиолетовый, ср. Т. "
      },
      {
        "id": 10,
        "color": "#8B9AC5",
        "DMC": "156",
        "nameColorEng": "Blue Violet — med lt",
        "nameColorRu": "Сине-фиолетовый, ср. Св. "
      },
      {
        "id": 11,
        "color": "#ABC2DE",
        "DMC": "157",
        "nameColorEng": "Cornflower Blue — vy lt",
        "nameColorRu": "Васильковый, кобальтовый, оч. Св. "
      },
      {
        "id": 12,
        "color": "#465082",
        "DMC": "158",
        "nameColorEng": "Cornflower Blue-med vy dk",
        "nameColorRu": "Васильковый, кобальтовый, ср. Оч. Т. "
      },
      {
        "id": 13,
        "color": "#A7B4CD",
        "DMC": "159",
        "nameColorEng": "Gray Blue-lt",
        "nameColorRu": "Серо-синий, св. "
      },
      {
        "id": 14,
        "color": "#8290AE",
        "DMC": "160",
        "nameColorEng": "Gray Blue-med",
        "nameColorRu": "Серо-синий, ср. "
      },
      {
        "id": 15,
        "color": "#667594",
        "DMC": "161",
        "nameColorEng": "Gray Blue",
        "nameColorRu": "Серо-синий"
      },
      {
        "id": 16,
        "color": "#BDDBE6",
        "DMC": "162",
        "nameColorEng": "Blue-ultra vy lt",
        "nameColorRu": "Голубой, ультра оч. Св. "
      },
      {
        "id": 17,
        "color": "#569571",
        "DMC": "163",
        "nameColorEng": "Celadon Green-med",
        "nameColorRu": "Серовато-зеленый, ср. "
      },
      {
        "id": 18,
        "color": "#9FCC8D",
        "DMC": "164",
        "nameColorEng": "Forest Green-lt",
        "nameColorRu": "Зеленый лесной, св. "
      },
      {
        "id": 19,
        "color": "#DAD878",
        "DMC": "165",
        "nameColorEng": "Moss Green-vylt",
        "nameColorRu": "Мох, оч. Св. "
      },
      {
        "id": 20,
        "color": "#BFBB20",
        "DMC": "166",
        "nameColorEng": "Moss Green-med lt",
        "nameColorRu": "Мох, ср. Св. "
      },
      {
        "id": 21,
        "color": "#9F8447",
        "DMC": "167",
        "nameColorEng": "Yellow Beige-vy dk",
        "nameColorRu": "Желтовато-бежевый, оч. Т. "
      },
      {
        "id": 22,
        "color": "#B4C3C1",
        "DMC": "168",
        "nameColorEng": "Pewter-vy lt",
        "nameColorRu": "Оловянный, оч. Св. "
      },
      {
        "id": 23,
        "color": "#8B9A94",
        "DMC": "169",
        "nameColorEng": "Pewter-lt",
        "nameColorRu": "Оловянный, св. "
      },
      {
        "id": 24,
        "color": "#9870AC",
        "DMC": "208",
        "nameColorEng": "Lavender-vy dk",
        "nameColorRu": "Лаванда, оч. Т. "
      },
      {
        "id": 25,
        "color": "#B693B6",
        "DMC": "209",
        "nameColorEng": "Lavender-dk",
        "nameColorRu": "Лаванда, т. "
      },
      {
        "id": 26,
        "color": "#C9AFDD",
        "DMC": "210",
        "nameColorEng": "Lavender-med",
        "nameColorRu": "Лаванда, ср. "
      },
      {
        "id": 27,
        "color": "#D4C3E4",
        "DMC": "211",
        "nameColorEng": "Lavender-lt",
        "nameColorRu": "Лаванда, св. "
      },
      {
        "id": 28,
        "color": "#884238",
        "DMC": "221",
        "nameColorEng": "Shel lPink-vy dk",
        "nameColorRu": "Розовых ракушек, оч. Т. "
      },
      {
        "id": 29,
        "color": "#BB817B",
        "DMC": "223",
        "nameColorEng": "Shell Pink-lt",
        "nameColorRu": "Розовых ракушек, св. "
      },
      {
        "id": 30,
        "color": "#DFB3A6",
        "DMC": "224",
        "nameColorEng": "ShellPink-vy lt",
        "nameColorRu": "Розовых ракушек, оч. Св. "
      },
      {
        "id": 31,
        "color": "#784E24",
        "DMC": "225",
        "nameColorEng": "ShellPink-ultra vy lt",
        "nameColorRu": "Розовых ракушек, ультра св. "
      },
      {
        "id": 32,
        "color": "#784E24",
        "DMC": "300",
        "nameColorEng": "Mahogany-vy dk",
        "nameColorRu": "Красного дерева, оч. Т. "
      },
      {
        "id": 33,
        "color": "#AA6730",
        "DMC": "301",
        "nameColorEng": "Mahogany-med",
        "nameColorRu": "Красного дерева, ср. "
      },
      {
        "id": 34,
        "color": "#9E3332",
        "DMC": "304",
        "nameColorEng": "Christmas Red-med",
        "nameColorRu": "Рождественский красный, ср. "
      },
      {
        "id": 35,
        "color": "#F6E311",
        "DMC": "307",
        "nameColorEng": "Lemon",
        "nameColorRu": "Лимонный"
      },
      {
        "id": 36,
        "color": "#B84351",
        "DMC": "309",
        "nameColorEng": "Rose-dk",
        "nameColorRu": "Розы, т. "
      },
      {
        "id": 37,
        "color": "#000000",
        "DMC": "310",
        "nameColorEng": "Black",
        "nameColorRu": "Черный"
      },
      {
        "id": 38,
        "color": "#30506F",
        "DMC": "311",
        "nameColorEng": "Navy Blue-med",
        "nameColorRu": "Темно-синий, ср. "
      },
      {
        "id": 39,
        "color": "#386189",
        "DMC": "312",
        "nameColorEng": "Navy Blue-lt",
        "nameColorRu": "Темно-синий, св. "
      },
      {
        "id": 40,
        "color": "#8E5D5C",
        "DMC": "315",
        "nameColorEng": "Antique Mauve-med dk",
        "nameColorRu": "Античный розовато-лиловый, ср. Т. "
      },
      {
        "id": 41,
        "color": "#BF889C",
        "DMC": "316",
        "nameColorEng": "Antique Mauve-med",
        "nameColorRu": "Античный розовато-лиловый, ср. "
      },
      {
        "id": 42,
        "color": "#697275",
        "DMC": "317",
        "nameColorEng": "Pewter Grey",
        "nameColorRu": "Оловянносерый"
      },
      {
        "id": 43,
        "color": "#A0A7B0",
        "DMC": "318",
        "nameColorEng": "Steel Grey-lt",
        "nameColorRu": "Стальной, св. "
      },
      {
        "id": 44,
        "color": "#35633D",
        "DMC": "319",
        "nameColorEng": "Pistachio Green-vy dk",
        "nameColorRu": "Фисташково-зеленый, оч. Т. "
      },
      {
        "id": 45,
        "color": "#71a072",
        "DMC": "320",
        "nameColorEng": "Pistachio Green-med",
        "nameColorRu": "Фисташково-зеленый, ср. "
      },
      {
        "id": 46,
        "color": "#ce1f32",
        "DMC": "321",
        "nameColorEng": "Christmas Red",
        "nameColorRu": "Рождественскийкрасный"
      },
      {
        "id": 47,
        "color": "#647e9d",
        "DMC": "322",
        "nameColorEng": "NavyBlue-vy lt",
        "nameColorRu": "Темно-синий, оч. Св. "
      },
      {
        "id": 48,
        "color": "#a92332",
        "DMC": "326",
        "nameColorEng": "Rose-vy dk",
        "nameColorRu": "Розы, оч. Т. "
      },
      {
        "id": 49,
        "color": "#723657",
        "DMC": "327",
        "nameColorEng": "Violet-vy dk",
        "nameColorRu": "Фиолетовый, оч. Т. "
      },
      {
        "id": 50,
        "color": "#6c5086",
        "DMC": "333",
        "nameColorEng": "BlueViolet-vy dk",
        "nameColorRu": "Сине-фиолетовый, оч. Т. "
      },
      {
        "id": 51,
        "color": "#4c698c",
        "DMC": "334",
        "nameColorEng": "BabyBlue-med",
        "nameColorRu": "Нежноголубой, ср. "
      },
      {
        "id": 52,
        "color": "#e56d7f",
        "DMC": "335",
        "nameColorEng": "Rose",
        "nameColorRu": "Розы"
      },
      {
        "id": 53,
        "color": "#0c1225",
        "DMC": "336",
        "nameColorEng": "Navy Blue",
        "nameColorRu": "Темно-синий"
      },
      {
        "id": 54,
        "color": "#9389c1",
        "DMC": "340",
        "nameColorEng": "Blue Violet-med",
        "nameColorRu": "Сине-фиолетовый, ср. "
      },
      {
        "id": 55,
        "color": "#a2accd",
        "DMC": "341",
        "nameColorEng": "Blue Violet-lt",
        "nameColorRu": "Сине-фиолетовый, св. "
      },
      {
        "id": 56,
        "color": "#bf3e31",
        "DMC": "347",
        "nameColorEng": "Salmon — vy dk",
        "nameColorRu": "Лососевый, оч. Т. "
      },
      {
        "id": 57,
        "color": "#c24731",
        "DMC": "349",
        "nameColorEng": "Coral-dk",
        "nameColorRu": "Коралловокрасный, т. "
      },
      {
        "id": 58,
        "color": "#e46647",
        "DMC": "350",
        "nameColorEng": "Coral-med",
        "nameColorRu": "Кораллово красный, ср. "
      },
      {
        "id": 59,
        "color": "#f78465",
        "DMC": "351",
        "nameColorEng": "Coral",
        "nameColorRu": "Кораллово красный"
      },
      {
        "id": 60,
        "color": "#f69d80",
        "DMC": "352",
        "nameColorEng": "Coral-lt",
        "nameColorRu": "Коралловокрасный, св. "
      },
      {
        "id": 61,
        "color": "#fdbca1",
        "DMC": "353",
        "nameColorEng": "Peach",
        "nameColorRu": "Персиковый"
      },
      {
        "id": 62,
        "color": "#9a3b2d",
        "DMC": "355",
        "nameColorEng": "TerraCotta-dk",
        "nameColorRu": "Терракотовый, т. "
      },
      {
        "id": 63,
        "color": "#a06757",
        "DMC": "356",
        "nameColorEng": "TerraCotta-med",
        "nameColorRu": "Терракотовый, ср. "
      },
      {
        "id": 64,
        "color": "#4c7047",
        "DMC": "367",
        "nameColorEng": "PistachioGreen-dk",
        "nameColorRu": "Фисташково-зеленый, т. "
      },
      {
        "id": 65,
        "color": "#91ab84",
        "DMC": "368",
        "nameColorEng": "PistachioGreen-lt",
        "nameColorRu": "Фисташково-зеленый, св. "
      },
      {
        "id": 66,
        "color": "#ccdcbe",
        "DMC": "369",
        "nameColorEng": "PistachioGreen-vy lt",
        "nameColorRu": "Фисташково-зеленый, оч. Св. "
      },
      {
        "id": 67,
        "color": "#bbaa55",
        "DMC": "370",
        "nameColorEng": "Mustard-med",
        "nameColorRu": "Горчичный, ср. "
      },
      {
        "id": 68,
        "color": "#a08f4d",
        "DMC": "371",
        "nameColorEng": "Mustard",
        "nameColorRu": "Горчичный"
      },
      {
        "id": 69,
        "color": "#9c8c4a",
        "DMC": "372",
        "nameColorEng": "Mustard — lt",
        "nameColorRu": "Горчичный, св. "
      },
      {
        "id": 70,
        "color": "#934d29",
        "DMC": "400",
        "nameColorEng": "Mahogany — dk",
        "nameColorRu": "Красного дерева, т. "
      },
      {
        "id": 71,
        "color": "#e8a76d",
        "DMC": "402",
        "nameColorEng": "Mahogany — vy lt",
        "nameColorRu": "Красного дерева, оч. Св. "
      },
      {
        "id": 72,
        "color": "#c49a87",
        "DMC": "407",
        "nameColorEng": "Desert Sand — dk",
        "nameColorRu": "Пустынного песка, т. "
      },
      {
        "id": 73,
        "color": "#535657",
        "DMC": "413",
        "nameColorEng": "Pewter Grey — dk",
        "nameColorRu": "Оловянно серый, т. "
      },
      {
        "id": 74,
        "color": "#95909d",
        "DMC": "414",
        "nameColorEng": "Steel Grey — dk",
        "nameColorRu": "Стальной, т. "
      },
      {
        "id": 75,
        "color": "#d3d4db",
        "DMC": "415",
        "nameColorEng": "Pearl Grey",
        "nameColorRu": "Жемчужно серый"
      },
      {
        "id": 76,
        "color": "#866226",
        "DMC": "420",
        "nameColorEng": "Hazelnut Brown — dk",
        "nameColorRu": "Фундука, т. "
      },
      {
        "id": 77,
        "color": "#d0ba79",
        "DMC": "422",
        "nameColorEng": "Hazelnut Brown — lt",
        "nameColorRu": "Фундука, св. "
      },
      {
        "id": 78,
        "color": "#775437",
        "DMC": "433",
        "nameColorEng": "Brown — med",
        "nameColorRu": "Коричневый, ср. "
      },
      {
        "id": 79,
        "color": "#b78237",
        "DMC": "434",
        "nameColorEng": "Brown — lt",
        "nameColorRu": "Коричневый, св. "
      },
      {
        "id": 80,
        "color": "#c4863a",
        "DMC": "435",
        "nameColorEng": "Brown — vy lt",
        "nameColorRu": "Коричневый, оч. Св. "
      },
      {
        "id": 81,
        "color": "#c09557",
        "DMC": "436",
        "nameColorEng": "Tan",
        "nameColorRu": "Желто-коричневый"
      },
      {
        "id": 82,
        "color": "#d9b879",
        "DMC": "437",
        "nameColorEng": "Tan — lt",
        "nameColorRu": "Желто-коричневый, св. "
      },
      {
        "id": 83,
        "color": "#f5d500",
        "DMC": "444",
        "nameColorEng": "Lemon — dk",
        "nameColorRu": "Лимонный, т. "
      },
      {
        "id": 84,
        "color": "#f0ed85",
        "DMC": "445",
        "nameColorEng": "Lemon — lt",
        "nameColorRu": "Лимонный, св. "
      },
      {
        "id": 85,
        "color": "#978b81",
        "DMC": "451",
        "nameColorEng": "Shell Grey — dk",
        "nameColorRu": "Серых ракушек, т. "
      },
      {
        "id": 86,
        "color": "#bbaea6",
        "DMC": "452",
        "nameColorEng": "Shell Grey — med",
        "nameColorRu": "Серых ракушек, ср. "
      },
      {
        "id": 87,
        "color": "#e3dcdb",
        "DMC": "453",
        "nameColorEng": "Shell Grey — lt",
        "nameColorRu": "Серых ракушек, св. "
      },
      {
        "id": 88,
        "color": "#798738",
        "DMC": "469",
        "nameColorEng": "Avocado Green",
        "nameColorRu": "Авокадо"
      },
      {
        "id": 89,
        "color": "#98a859",
        "DMC": "470",
        "nameColorEng": "Avocado Green — lt",
        "nameColorRu": "Авокадо, св. "
      },
      {
        "id": 90,
        "color": "#929937",
        "DMC": "471",
        "nameColorEng": "Avocado Green — vy lt",
        "nameColorRu": "Авокадо, оч. Св. "
      },
      {
        "id": 91,
        "color": "#dee077",
        "DMC": "472",
        "nameColorEng": "Avocado Green — ultra lt",
        "nameColorRu": "Авокадо, ультра св. "
      },
      {
        "id": 92,
        "color": "#98232c",
        "DMC": "498",
        "nameColorEng": "Christmas Red — dk",
        "nameColorRu": "Рождественский красный, т. "
      },
      {
        "id": 93,
        "color": "#14361e",
        "DMC": "500",
        "nameColorEng": "Blue Green — vy dk",
        "nameColorRu": "Сине-зеленый, оч. Т. "
      },
      {
        "id": 94,
        "color": "#496f5c",
        "DMC": "501",
        "nameColorEng": "Blue Green — dk",
        "nameColorRu": "Сине-зеленый, т. "
      },
      {
        "id": 95,
        "color": "#799a83",
        "DMC": "502",
        "nameColorEng": "Blue Green",
        "nameColorRu": "Сине-зеленый"
      },
      {
        "id": 96,
        "color": "#8ebea9",
        "DMC": "503",
        "nameColorEng": "Blue Green — med",
        "nameColorRu": "Сине-зеленый, ср. "
      },
      {
        "id": 97,
        "color": "#d1e2d7",
        "DMC": "504",
        "nameColorEng": "Blue Green — vy lt",
        "nameColorRu": "Сине-зеленый, оч. Св. "
      },
      {
        "id": 98,
        "color": "#418253",
        "DMC": "505",
        "nameColorEng": "Jade",
        "nameColorRu": "Нефрит"
      },
      {
        "id": 99,
        "color": "#166d92",
        "DMC": "517",
        "nameColorEng": "Wedgwood — dk",
        "nameColorRu": "Пыльно-синий, т. "
      },
      {
        "id": 100,
        "color": "#6b9cb9",
        "DMC": "518",
        "nameColorEng": "Wedgwood — lt",
        "nameColorRu": "Пыльно-синий, св. "
      },
      {
        "id": 101,
        "color": "#a8c6d8",
        "DMC": "519",
        "nameColorEng": "Sky Blue",
        "nameColorRu": "Небесно голубой"
      },
      {
        "id": 102,
        "color": "#4f6035",
        "DMC": "520",
        "nameColorEng": "Fern Green — dk",
        "nameColorRu": "Папоротниковый, т. "
      },
      {
        "id": 103,
        "color": "#93a181",
        "DMC": "522",
        "nameColorEng": "Fern Green",
        "nameColorRu": "Папоротниковый"
      },
      {
        "id": 104,
        "color": "#a5a888",
        "DMC": "523",
        "nameColorEng": "Fern Green — lt",
        "nameColorRu": "Папоротниковый, св. "
      },
      {
        "id": 105,
        "color": "#bec0a8",
        "DMC": "524",
        "nameColorEng": "Fern Green — vy lt",
        "nameColorRu": "Папоротниковый, оч. Св. "
      },
      {
        "id": 106,
        "color": "#504f50",
        "DMC": "535",
        "nameColorEng": "Ash Grey — vy lt",
        "nameColorRu": "Пепельный, оч. Св. "
      },
      {
        "id": 107,
        "color": "#f0e3d4",
        "DMC": "543",
        "nameColorEng": "Beige Brown — ultra vy lt",
        "nameColorRu": "Бежево-коричневый, ультра св. "
      },
      {
        "id": 108,
        "color": "#541244",
        "DMC": "550",
        "nameColorEng": "Violet — vy dk",
        "nameColorRu": "Фиолетовый, оч. Т. "
      },
      {
        "id": 109,
        "color": "#7b3f6c",
        "DMC": "552",
        "nameColorEng": "Violet — med",
        "nameColorRu": "Фиолетовый, ср. "
      },
      {
        "id": 110,
        "color": "#a772a4",
        "DMC": "553",
        "nameColorEng": "Violet",
        "nameColorRu": "Фиолетовый"
      },
      {
        "id": 111,
        "color": "#ae99b1",
        "DMC": "554",
        "nameColorEng": "Violet — lt",
        "nameColorRu": "Фиолетовый, св. "
      },
      {
        "id": 112,
        "color": "#377557",
        "DMC": "561",
        "nameColorEng": "Jade — vy dk",
        "nameColorRu": "Нефрит, оч. Т. "
      },
      {
        "id": 113,
        "color": "#599b6d",
        "DMC": "562",
        "nameColorEng": "Jade — med",
        "nameColorRu": "Нефрит, ср. "
      },
      {
        "id": 114,
        "color": "#87c39e",
        "DMC": "563",
        "nameColorEng": "Jade — lt",
        "nameColorRu": "Нефрит, св. "
      },
      {
        "id": 115,
        "color": "#9cd0ab",
        "DMC": "564",
        "nameColorEng": "Jade — vy lt",
        "nameColorRu": "Нефрит, оч. Св. "
      },
      {
        "id": 116,
        "color": "#68772d",
        "DMC": "580",
        "nameColorEng": "Moss Green — dk",
        "nameColorRu": "Мох, т. "
      },
      {
        "id": 117,
        "color": "#9fa146",
        "DMC": "581",
        "nameColorEng": "Moss Green",
        "nameColorRu": "Мох"
      },
      {
        "id": 118,
        "color": "#70aeb4",
        "DMC": "597",
        "nameColorEng": "Turquoise",
        "nameColorRu": "Бирюзовый"
      },
      {
        "id": 119,
        "color": "#97ccca",
        "DMC": "598",
        "nameColorEng": "Turquoise — lt",
        "nameColorRu": "Бирюзовый, св. "
      },
      {
        "id": 120,
        "color": "#bf1c48",
        "DMC": "600",
        "nameColorEng": "Cranberry — vy dk",
        "nameColorRu": "Клюквенный, оч. Т. "
      },
      {
        "id": 121,
        "color": "#d34067",
        "DMC": "601",
        "nameColorEng": "Cranberry — dk",
        "nameColorRu": "Клюквенный, т. "
      },
      {
        "id": 122,
        "color": "#ca0b51",
        "DMC": "602",
        "nameColorEng": "Cranberry — med",
        "nameColorRu": "Клюквенный, ср. "
      },
      {
        "id": 123,
        "color": "#ef7ba1",
        "DMC": "603",
        "nameColorEng": "Cranberry",
        "nameColorRu": "Клюквенный"
      },
      {
        "id": 124,
        "color": "#ec9ab9",
        "DMC": "604",
        "nameColorEng": "Cranberry — lt",
        "nameColorRu": "Клюквенный, св. "
      },
      {
        "id": 125,
        "color": "#faccdb",
        "DMC": "605",
        "nameColorEng": "Cranberry — vy lt",
        "nameColorRu": "Клюквенный, оч. Св. "
      },
      {
        "id": 126,
        "color": "#ea592c",
        "DMC": "606",
        "nameColorEng": "Bright Orange Red",
        "nameColorRu": "Яркий красно-оранжевый"
      },
      {
        "id": 127,
        "color": "#f06e46",
        "DMC": "608",
        "nameColorEng": "Bright Orange",
        "nameColorRu": "Ярко оранжевый"
      },
      {
        "id": 128,
        "color": "#806638",
        "DMC": "610",
        "nameColorEng": "Drab Brown — vy dk",
        "nameColorRu": "Тускло-коричневый, оч. Т. "
      },
      {
        "id": 129,
        "color": "#9e9072",
        "DMC": "611",
        "nameColorEng": "Drab Brown — dk",
        "nameColorRu": "Тускло-коричневый, т. "
      },
      {
        "id": 130,
        "color": "#917d4a",
        "DMC": "612",
        "nameColorEng": "Drab Brown — med",
        "nameColorRu": "Тускло-коричневый, ср. "
      },
      {
        "id": 131,
        "color": "#bcae83",
        "DMC": "613",
        "nameColorEng": "Drab Brown — lt",
        "nameColorRu": "Тускло-коричневый, св. "
      },
      {
        "id": 132,
        "color": "#8c593e",
        "DMC": "632",
        "nameColorEng": "Desert Sand — ultra vy dk",
        "nameColorRu": "Пустынного песка, ультра т. "
      },
      {
        "id": 133,
        "color": "#938962",
        "DMC": "640",
        "nameColorEng": "Beige Grey — vy dk",
        "nameColorRu": "Бежево-серый, оч. Т. "
      },
      {
        "id": 134,
        "color": "#bab599",
        "DMC": "642",
        "nameColorEng": "Beige Grey — dk",
        "nameColorRu": "Бежево-серый, т. "
      },
      {
        "id": 135,
        "color": "#d6d3c1",
        "DMC": "644",
        "nameColorEng": "Beige Grey — med",
        "nameColorRu": "Бежево-серый, ср. "
      },
      {
        "id": 136,
        "color": "#747e65",
        "DMC": "645",
        "nameColorEng": "Beaver Grey — vy dk",
        "nameColorRu": "Боброво-серый, оч. Т. "
      },
      {
        "id": 137,
        "color": "#97978e",
        "DMC": "646",
        "nameColorEng": "Beaver Grey — dk",
        "nameColorRu": "Боброво-серый, т. "
      },
      {
        "id": 138,
        "color": "#abafa3",
        "DMC": "647",
        "nameColorEng": "Beaver Grey — med",
        "nameColorRu": "Боброво-серый, ср. "
      },
      {
        "id": 139,
        "color": "#babfad",
        "DMC": "648",
        "nameColorEng": "Beaver Grey — lt",
        "nameColorRu": "Боброво-серый, св. "
      },
      {
        "id": 140,
        "color": "#d12627",
        "DMC": "666",
        "nameColorEng": "Christmas Red — bright",
        "nameColorRu": "Рождественский красный, яркий"
      },
      {
        "id": 141,
        "color": "#eed7a1",
        "DMC": "676",
        "nameColorEng": "Old Gold — lt",
        "nameColorRu": "Старого золота, св. "
      },
      {
        "id": 142,
        "color": "#ede0ba",
        "DMC": "677",
        "nameColorEng": "Old Gold — vy lt",
        "nameColorRu": "Старого золота, оч. Св. "
      },
      {
        "id": 143,
        "color": "#af8334",
        "DMC": "680",
        "nameColorEng": "Old Gold — dk",
        "nameColorRu": "Старого золота, т. "
      },
      {
        "id": 144,
        "color": "#015731",
        "DMC": "699",
        "nameColorEng": "Christmas Green",
        "nameColorRu": "Рождественский зеленый"
      },
      {
        "id": 145,
        "color": "#2e9148",
        "DMC": "700",
        "nameColorEng": "Christmas Green — bright",
        "nameColorRu": "Рождественский зеленый, яркий"
      },
      {
        "id": 146,
        "color": "#007a3f",
        "DMC": "701",
        "nameColorEng": "Christmas Green — lt",
        "nameColorRu": "Рождественский зеленый, св. "
      },
      {
        "id": 147,
        "color": "#59a052",
        "DMC": "702",
        "nameColorEng": "Kelly Green",
        "nameColorRu": "Мутновато-зеленый"
      },
      {
        "id": 148,
        "color": "#81b85e",
        "DMC": "703",
        "nameColorEng": "Chartreuse",
        "nameColorRu": "Бледно-зеленый"
      },
      {
        "id": 149,
        "color": "#bad765",
        "DMC": "704",
        "nameColorEng": "Chartreuse — bright",
        "nameColorRu": "Бледно-зеленый, яркий"
      },
      {
        "id": 150,
        "color": "#e1e1d9",
        "DMC": "712",
        "nameColorEng": "Cream",
        "nameColorRu": "Кремовый"
      },
      {
        "id": 151,
        "color": "#9f2d6f",
        "DMC": "718",
        "nameColorEng": "Plum",
        "nameColorRu": "Сливовый"
      },
      {
        "id": 152,
        "color": "#ec6810",
        "DMC": "720",
        "nameColorEng": "Orange Spice — dk",
        "nameColorRu": "Красновато-рыжеватый, т. "
      },
      {
        "id": 153,
        "color": "#e4752b",
        "DMC": "721",
        "nameColorEng": "Orange Spice — med",
        "nameColorRu": "Красновато-рыжеватый, ср. "
      },
      {
        "id": 154,
        "color": "#faa463",
        "DMC": "722",
        "nameColorEng": "Orange Spice — lt",
        "nameColorRu": "Красновато-рыжеватый, св. "
      },
      {
        "id": 155,
        "color": "#fad558",
        "DMC": "725",
        "nameColorEng": "Topaz",
        "nameColorRu": "Топаз"
      },
      {
        "id": 156,
        "color": "#ffe35f",
        "DMC": "726",
        "nameColorEng": "Topaz — lt",
        "nameColorRu": "Топаз, св. "
      },
      {
        "id": 157,
        "color": "#feee89",
        "DMC": "727",
        "nameColorEng": "Topaz — vy lt",
        "nameColorRu": "Топаз, оч. Св. "
      },
      {
        "id": 158,
        "color": "#ecbf3b",
        "DMC": "728",
        "nameColorEng": "Topaz",
        "nameColorRu": "Топаз"
      },
      {
        "id": 159,
        "color": "#cc993d",
        "DMC": "729",
        "nameColorEng": "Old Gold — med",
        "nameColorRu": "Старого золота, ср. "
      },
      {
        "id": 160,
        "color": "#746d2b",
        "DMC": "730",
        "nameColorEng": "Olive Green — vy dk",
        "nameColorRu": "Оливково-зеленый, оч. Т. "
      },
      {
        "id": 161,
        "color": "#837d2f",
        "DMC": "731",
        "nameColorEng": "Olive Green — dk",
        "nameColorRu": "Оливково-зеленый, т. "
      },
      {
        "id": 162,
        "color": "#91852a",
        "DMC": "732",
        "nameColorEng": "Olive Green",
        "nameColorRu": "Оливково-зеленый"
      },
      {
        "id": 163,
        "color": "#a6a036",
        "DMC": "733",
        "nameColorEng": "Olive Green — med",
        "nameColorRu": "Оливково-зеленый, ср. "
      },
      {
        "id": 164,
        "color": "#d1c66d",
        "DMC": "734",
        "nameColorEng": "Olive Green — lt",
        "nameColorRu": "Оливково-зеленый, св. "
      },
      {
        "id": 165,
        "color": "#d9c38f",
        "DMC": "738",
        "nameColorEng": "Tan — vy lt",
        "nameColorRu": "Желто-коричневый, оч. Св. "
      },
      {
        "id": 166,
        "color": "#e5dab2",
        "DMC": "739",
        "nameColorEng": "Tan — ultra vy lt",
        "nameColorRu": "Желто-коричневый, ультра св. "
      },
      {
        "id": 167,
        "color": "#ff7600",
        "DMC": "740",
        "nameColorEng": "Tangerine",
        "nameColorRu": "Мандариновый"
      },
      {
        "id": 168,
        "color": "#f69726",
        "DMC": "741",
        "nameColorEng": "Tangerine — med",
        "nameColorRu": "Мандариновый, ср. "
      },
      {
        "id": 169,
        "color": "#ffc33a",
        "DMC": "742",
        "nameColorEng": "Tangerine — lt",
        "nameColorRu": "Мандариновый, св. "
      },
      {
        "id": 170,
        "color": "#ffda5a",
        "DMC": "743",
        "nameColorEng": "Yellow — med",
        "nameColorRu": "Желтый, ср. "
      },
      {
        "id": 171,
        "color": "#ffe276",
        "DMC": "744",
        "nameColorEng": "Yellow — pale",
        "nameColorRu": "Желтый, бледный"
      },
      {
        "id": 172,
        "color": "#ffeda9",
        "DMC": "745",
        "nameColorEng": "Yellow — lt pale",
        "nameColorRu": "Желтый, бледно св. "
      },
      {
        "id": 173,
        "color": "#f5f0df",
        "DMC": "746",
        "nameColorEng": "Off White",
        "nameColorRu": "Белесый"
      },
      {
        "id": 174,
        "color": "#d3e9e7",
        "DMC": "747",
        "nameColorEng": "Sky Blue — vy lt",
        "nameColorRu": "Небесно голубой, оч. Св. "
      },
      {
        "id": 175,
        "color": "#efc1aa",
        "DMC": "754",
        "nameColorEng": "Peach — lt",
        "nameColorRu": "Персиковый, св. "
      },
      {
        "id": 176,
        "color": "#eac0b4",
        "DMC": "758",
        "nameColorEng": "Terra Cotta — vy lt",
        "nameColorRu": "Терракотовый, оч. Св. "
      },
      {
        "id": 177,
        "color": "#e29690",
        "DMC": "760",
        "nameColorEng": "Salmon",
        "nameColorRu": "Лососевый"
      },
      {
        "id": 178,
        "color": "#f4c4c1",
        "DMC": "761",
        "nameColorEng": "Salmon — lt",
        "nameColorRu": "Лососевый, св. "
      },
      {
        "id": 179,
        "color": "#e9e9eb",
        "DMC": "762",
        "nameColorEng": "Pearl Grey — vy lt",
        "nameColorRu": "Жемчужно серый, оч. Св. "
      },
      {
        "id": 180,
        "color": "#f3f6d4",
        "DMC": "772",
        "nameColorEng": "Yellow Green — vy lt",
        "nameColorRu": "Желто-зеленый, оч. Св. "
      },
      {
        "id": 181,
        "color": "#ceddea",
        "DMC": "775",
        "nameColorEng": "Baby Blue — vy lt",
        "nameColorRu": "Нежно голубой, оч. Св. "
      },
      {
        "id": 182,
        "color": "#eeaeb0",
        "DMC": "776",
        "nameColorEng": "Pink — med",
        "nameColorRu": "Розовый, ср. "
      },
      {
        "id": 183,
        "color": "#8a373b",
        "DMC": "777",
        "nameColorEng": "Raspberry — vy dk",
        "nameColorRu": "Малина оч. Т"
      },
      {
        "id": 184,
        "color": "#ddb3b1",
        "DMC": "778",
        "nameColorEng": "Antique Mauve — vy lt",
        "nameColorRu": "Античный розовато-лиловый, оч. Св. "
      },
      {
        "id": 185,
        "color": "#6d5748",
        "DMC": "779",
        "nameColorEng": "Cocoa — dk",
        "nameColorRu": "Какао т. "
      },
      {
        "id": 186,
        "color": "#936626",
        "DMC": "780",
        "nameColorEng": "Topaz — ultra vy dk",
        "nameColorRu": "Топаз, ультра т. "
      },
      {
        "id": 187,
        "color": "#ba8225",
        "DMC": "781",
        "nameColorEng": "Topaz — vy dk",
        "nameColorRu": "Топаз, оч. Т. "
      },
      {
        "id": 188,
        "color": "#b38132",
        "DMC": "782",
        "nameColorEng": "Topaz — dk",
        "nameColorRu": "Топаз, т. "
      },
      {
        "id": 189,
        "color": "#d19d2f",
        "DMC": "783",
        "nameColorEng": "Topaz — med",
        "nameColorRu": "Топаз, ср. Т. "
      },
      {
        "id": 190,
        "color": "#161151",
        "DMC": "791",
        "nameColorEng": "Cornflower Blue — vy dk",
        "nameColorRu": "Васильковый, кобальтовый, оч. Т. "
      },
      {
        "id": 191,
        "color": "#7971a0",
        "DMC": "792",
        "nameColorEng": "Cornflower Blue — dk",
        "nameColorRu": "Васильковый, кобальтовый, т. "
      },
      {
        "id": 192,
        "color": "#686d8d",
        "DMC": "793",
        "nameColorEng": "Cornflower Blue — med",
        "nameColorRu": "Васильковый, кобальтовый, ср. "
      },
      {
        "id": 193,
        "color": "#8ea7c0",
        "DMC": "794",
        "nameColorEng": "Cornflower Blue — lt",
        "nameColorRu": "Васильковый, кобальтовый, св. Т. "
      },
      {
        "id": 194,
        "color": "#181f66",
        "DMC": "796",
        "nameColorEng": "Royal Blue — dk",
        "nameColorRu": "Чисто синий, т. "
      },
      {
        "id": 195,
        "color": "#2c4180",
        "DMC": "797",
        "nameColorEng": "Royal Blue",
        "nameColorRu": "Чисто синий"
      },
      {
        "id": 196,
        "color": "#445997",
        "DMC": "798",
        "nameColorEng": "Delft — dk",
        "nameColorRu": "Фарфоровый, т. "
      },
      {
        "id": 197,
        "color": "#6e8db5",
        "DMC": "799",
        "nameColorEng": "Delft — med",
        "nameColorRu": "Фарфоровый, ср. "
      },
      {
        "id": 198,
        "color": "#c1d3df",
        "DMC": "800",
        "nameColorEng": "Delft — pale",
        "nameColorRu": "Фарфоровый, бледный"
      },
      {
        "id": 199,
        "color": "#63461f",
        "DMC": "801",
        "nameColorEng": "Coffee Brown — dk",
        "nameColorRu": "Кофейный, т. "
      },
      {
        "id": 200,
        "color": "#437490",
        "DMC": "806",
        "nameColorEng": "Peacock Blue — dk",
        "nameColorRu": "Переливчатый синий, т. "
      },
      {
        "id": 201,
        "color": "#70a8b3",
        "DMC": "807",
        "nameColorEng": "Peacock Blue",
        "nameColorRu": "Переливчатый синий"
      },
      {
        "id": 202,
        "color": "#6c91c0",
        "DMC": "809",
        "nameColorEng": "Delft",
        "nameColorRu": "Фарфоровый"
      },
      {
        "id": 203,
        "color": "#91b4ce",
        "DMC": "813",
        "nameColorEng": "Blue — lt",
        "nameColorRu": "Синий, св. "
      },
      {
        "id": 204,
        "color": "#711f2e",
        "DMC": "814",
        "nameColorEng": "Garnet — dk",
        "nameColorRu": "Гранатовый, т. "
      },
      {
        "id": 205,
        "color": "#9d3030",
        "DMC": "815",
        "nameColorEng": "Garnet — med",
        "nameColorRu": "Гранатовый, ср. "
      },
      {
        "id": 206,
        "color": "#811024",
        "DMC": "816",
        "nameColorEng": "Garnet",
        "nameColorRu": "Гранатовый"
      },
      {
        "id": 207,
        "color": "#bd2e2e",
        "DMC": "817",
        "nameColorEng": "Coral Red — vy dk",
        "nameColorRu": "Кораллово красный, оч. Т. "
      },
      {
        "id": 208,
        "color": "#f9d6dd",
        "DMC": "818",
        "nameColorEng": "Baby Pink",
        "nameColorRu": "Нежно розовый"
      },
      {
        "id": 209,
        "color": "#fbe2df",
        "DMC": "819",
        "nameColorEng": "Baby Pink — lt",
        "nameColorRu": "Нежно розовый, св. "
      },
      {
        "id": 210,
        "color": "#190f60",
        "DMC": "820",
        "nameColorEng": "Royal Blue — vy dk",
        "nameColorRu": "Чисто синий, оч. Т. "
      },
      {
        "id": 211,
        "color": "#e2dfd3",
        "DMC": "822",
        "nameColorEng": "Beige Grey — lt",
        "nameColorRu": "Бежево-серый, св. "
      },
      {
        "id": 212,
        "color": "#124477",
        "DMC": "823",
        "nameColorEng": "Navy Blue — dk",
        "nameColorRu": "Темно-синий, т. "
      },
      {
        "id": 213,
        "color": "#3b6292",
        "DMC": "824",
        "nameColorEng": "Blue — vy dk",
        "nameColorRu": "Синий, оч. Т. "
      },
      {
        "id": 214,
        "color": "#366390",
        "DMC": "825",
        "nameColorEng": "Blue — dk",
        "nameColorRu": "Синий, т. "
      },
      {
        "id": 215,
        "color": "#5a82a2",
        "DMC": "826",
        "nameColorEng": "Blue — med",
        "nameColorRu": "Синий, ср. "
      },
      {
        "id": 216,
        "color": "#b4d3e3",
        "DMC": "827",
        "nameColorEng": "Blue — vy lt",
        "nameColorRu": "Синий, оч. Св. "
      },
      {
        "id": 217,
        "color": "#cae2eb",
        "DMC": "828",
        "nameColorEng": "Blue — ultra vy lt",
        "nameColorRu": "Синий, ультра св. "
      },
      {
        "id": 218,
        "color": "#6f5422",
        "DMC": "829",
        "nameColorEng": "Golden Olive — vy dk",
        "nameColorRu": "Оливково-золотой, оч. Т. "
      },
      {
        "id": 219,
        "color": "#806c26",
        "DMC": "830",
        "nameColorEng": "Golden Olive — dk",
        "nameColorRu": "Оливково-золотой, т. "
      },
      {
        "id": 220,
        "color": "#957b2f",
        "DMC": "831",
        "nameColorEng": "Golden Olive — med",
        "nameColorRu": "Оливково-золотой, ср. "
      },
      {
        "id": 221,
        "color": "#b19a3f",
        "DMC": "832",
        "nameColorEng": "Golden Olive",
        "nameColorRu": "Оливково-золотой"
      },
      {
        "id": 222,
        "color": "#bfa43a",
        "DMC": "833",
        "nameColorEng": "Golden Olive — lt",
        "nameColorRu": "Оливково-золотой, св. "
      },
      {
        "id": 223,
        "color": "#cab751",
        "DMC": "834",
        "nameColorEng": "Golden Olive — vy lt",
        "nameColorRu": "Оливково-золотой, оч. Св. "
      },
      {
        "id": 224,
        "color": "#573c2a",
        "DMC": "838",
        "nameColorEng": "Beige Brown — vy dk",
        "nameColorRu": "Бежево-коричневый, оч. Т. "
      },
      {
        "id": 225,
        "color": "#684e37",
        "DMC": "839",
        "nameColorEng": "Beige Brown — dk",
        "nameColorRu": "Бежево-коричневый, т. "
      },
      {
        "id": 226,
        "color": "#977e65",
        "DMC": "840",
        "nameColorEng": "Beige Brown — med",
        "nameColorRu": "Бежево-коричневый, ср. "
      },
      {
        "id": 227,
        "color": "#b39f8c",
        "DMC": "841",
        "nameColorEng": "Beige Brown — lt",
        "nameColorRu": "Бежево-коричневый, св. "
      },
      {
        "id": 228,
        "color": "#cdb9a4",
        "DMC": "842",
        "nameColorEng": "Beige Brown — vy lt",
        "nameColorRu": "Бежево-коричневый, оч. Св. "
      },
      {
        "id": 229,
        "color": "#6c6e58",
        "DMC": "844",
        "nameColorEng": "Beaver Grey — ultra dk",
        "nameColorRu": "Боброво-серый, ультра т. "
      },
      {
        "id": 230,
        "color": "#775820",
        "DMC": "869",
        "nameColorEng": "Hazelnut Brown — vy dk",
        "nameColorRu": "Фундука, оч. Т. "
      },
      {
        "id": 231,
        "color": "#043810",
        "DMC": "890",
        "nameColorEng": "Pistachio Green — ultra dk",
        "nameColorRu": "Фисташково зеленый, ультра т. "
      },
      {
        "id": 232,
        "color": "#ef4949",
        "DMC": "891",
        "nameColorEng": "Carnation — dk",
        "nameColorRu": "Гвоздичный, т. "
      },
      {
        "id": 233,
        "color": "#f85b64",
        "DMC": "892",
        "nameColorEng": "Carnation — med",
        "nameColorRu": "Гвоздичный, ср. "
      },
      {
        "id": 234,
        "color": "#fc6a84",
        "DMC": "893",
        "nameColorEng": "Carnation — lt",
        "nameColorRu": "Гвоздичный, св. "
      },
      {
        "id": 235,
        "color": "#f999a5",
        "DMC": "894",
        "nameColorEng": "Carnation — vy lt",
        "nameColorRu": "Гвоздичный, оч. Св. "
      },
      {
        "id": 236,
        "color": "#29542f",
        "DMC": "895",
        "nameColorEng": "Hunter Green — vy dk",
        "nameColorRu": "Защитный, грязновато зеленый, оч. Т. "
      },
      {
        "id": 237,
        "color": "#502f1b",
        "DMC": "898",
        "nameColorEng": "Coffee Brown — vy dk",
        "nameColorRu": "Кофейный, оч. Т. "
      },
      {
        "id": 238,
        "color": "#ee8593",
        "DMC": "899",
        "nameColorEng": "Rose — med",
        "nameColorRu": "Розы, ср. "
      },
      {
        "id": 239,
        "color": "#d45d28",
        "DMC": "900",
        "nameColorEng": "Burnt Orange — dk",
        "nameColorRu": "Оранжево-жженный, т. "
      },
      {
        "id": 240,
        "color": "#6b3b33",
        "DMC": "902",
        "nameColorEng": "Garnet — vy dk",
        "nameColorRu": "Гранатовый, оч. Т. "
      },
      {
        "id": 241,
        "color": "#4f6c33",
        "DMC": "904",
        "nameColorEng": "Parrot Green — vy dk",
        "nameColorRu": "Зеленый попугаевый, оч. Т. "
      },
      {
        "id": 242,
        "color": "#759a3e",
        "DMC": "905",
        "nameColorEng": "Parrot Green — dk",
        "nameColorRu": "Зеленый попугаевый, т. "
      },
      {
        "id": 243,
        "color": "#82ae44",
        "DMC": "906",
        "nameColorEng": "Parrot Green — med",
        "nameColorRu": "Зеленый попугаевый, ср. "
      },
      {
        "id": 244,
        "color": "#a9c33e",
        "DMC": "907",
        "nameColorEng": "Parrot Green — lt",
        "nameColorRu": "Зеленый попугаевый, св. "
      },
      {
        "id": 245,
        "color": "#00793b",
        "DMC": "909",
        "nameColorEng": "Emerald Green — vy dk",
        "nameColorRu": "Изумрудный, оч. Т. "
      },
      {
        "id": 246,
        "color": "#008c4c",
        "DMC": "910",
        "nameColorEng": "Emerald Green — dk",
        "nameColorRu": "Изумрудный, т. "
      },
      {
        "id": 247,
        "color": "#40a756",
        "DMC": "911",
        "nameColorEng": "Emerald Green — med",
        "nameColorRu": "Изумрудный, ср. "
      },
      {
        "id": 248,
        "color": "#58a96b",
        "DMC": "912",
        "nameColorEng": "Emerald Green — lt",
        "nameColorRu": "Изумрудный, св. "
      },
      {
        "id": 249,
        "color": "#88c78d",
        "DMC": "913",
        "nameColorEng": "Nile Green — med",
        "nameColorRu": "Мутно-зеленый, ср. "
      },
      {
        "id": 250,
        "color": "#800137",
        "DMC": "915",
        "nameColorEng": "Plum — dk",
        "nameColorRu": "Сливовый, т. "
      },
      {
        "id": 251,
        "color": "#832a58",
        "DMC": "917",
        "nameColorEng": "Plum — med",
        "nameColorRu": "Сливовый, ср. "
      },
      {
        "id": 252,
        "color": "#8c3b1a",
        "DMC": "918",
        "nameColorEng": "Red Copper — dk",
        "nameColorRu": "Красной меди, т. "
      },
      {
        "id": 253,
        "color": "#9b3b1b",
        "DMC": "919",
        "nameColorEng": "Red Copper",
        "nameColorRu": "Красной меди"
      },
      {
        "id": 254,
        "color": "#a74f2a",
        "DMC": "920",
        "nameColorEng": "Copper — med",
        "nameColorRu": "Медный, ср. "
      },
      {
        "id": 255,
        "color": "#c36b29",
        "DMC": "921",
        "nameColorEng": "Copper",
        "nameColorRu": "Медный"
      },
      {
        "id": 256,
        "color": "#d6834d",
        "DMC": "922",
        "nameColorEng": "Copper — lt",
        "nameColorRu": "Медный, св. "
      },
      {
        "id": 257,
        "color": "#42605c",
        "DMC": "924",
        "nameColorEng": "Grey Green — vy dk",
        "nameColorRu": "Серо-зеленый, оч. Т. "
      },
      {
        "id": 258,
        "color": "#789899",
        "DMC": "926",
        "nameColorEng": "Grey Green — med",
        "nameColorRu": "Серо-зеленый, ср. "
      },
      {
        "id": 259,
        "color": "#c5d2cf",
        "DMC": "927",
        "nameColorEng": "Grey Green — lt",
        "nameColorRu": "Серо-зеленый, св. "
      },
      {
        "id": 260,
        "color": "#e5eae9",
        "DMC": "928",
        "nameColorEng": "Grey Green — vy lt",
        "nameColorRu": "Серо-зеленый, оч. Св. "
      },
      {
        "id": 261,
        "color": "#435e67",
        "DMC": "930",
        "nameColorEng": "Antique Blue — dk",
        "nameColorRu": "Античный синий, т. "
      },
      {
        "id": 262,
        "color": "#678997",
        "DMC": "931",
        "nameColorEng": "Antique Blue — med",
        "nameColorRu": "Античный синий, ср. "
      },
      {
        "id": 263,
        "color": "#8faeb9",
        "DMC": "932",
        "nameColorEng": "Antique Blue — lt",
        "nameColorRu": "Античный синий, св. "
      },
      {
        "id": 264,
        "color": "#4d4c34",
        "DMC": "934",
        "nameColorEng": "Black Avocado Green — dk",
        "nameColorRu": "Черно-зеленого авокадо, т. "
      },
      {
        "id": 265,
        "color": "#4b5035",
        "DMC": "935",
        "nameColorEng": "Black Avocado Green — med",
        "nameColorRu": "Черно-зеленого авокадо, ср. "
      },
      {
        "id": 266,
        "color": "#5d5c2b",
        "DMC": "936",
        "nameColorEng": "Avocado Green — vy dk",
        "nameColorRu": "Авокадо, оч. Т. "
      },
      {
        "id": 267,
        "color": "#4f5925",
        "DMC": "937",
        "nameColorEng": "Avocado Green — med",
        "nameColorRu": "Авокадо, ср. "
      },
      {
        "id": 268,
        "color": "#3b2811",
        "DMC": "938",
        "nameColorEng": "Coffee Brown — ultra dk",
        "nameColorRu": "Кофейный, ультра т. "
      },
      {
        "id": 269,
        "color": "#02101c",
        "DMC": "939",
        "nameColorEng": "Navy Blue — vy dk",
        "nameColorRu": "Темно-синий, оч. Т. "
      },
      {
        "id": 270,
        "color": "#009a7b",
        "DMC": "943",
        "nameColorEng": "Aquamarine — med",
        "nameColorRu": "Аквамарин, ср. "
      },
      {
        "id": 271,
        "color": "#e3be8e",
        "DMC": "945",
        "nameColorEng": "Tawny",
        "nameColorRu": "Рыжевато-коричневый"
      },
      {
        "id": 272,
        "color": "#e15729",
        "DMC": "946",
        "nameColorEng": "Burnt Orange — med",
        "nameColorRu": "Оранжево-жженный, ср. "
      },
      {
        "id": 273,
        "color": "#f26922",
        "DMC": "947",
        "nameColorEng": "Burnt Orange",
        "nameColorRu": "Оранжево-жженный"
      },
      {
        "id": 274,
        "color": "#feebe2",
        "DMC": "948",
        "nameColorEng": "Peach — vy lt",
        "nameColorRu": "Персиковый, оч. Св. "
      },
      {
        "id": 275,
        "color": "#e7ceb9",
        "DMC": "950",
        "nameColorEng": "Desert Sand — lt",
        "nameColorRu": "Пустынного песка, св. "
      },
      {
        "id": 276,
        "color": "#f2e0ce",
        "DMC": "951",
        "nameColorEng": "Tawny — lt",
        "nameColorRu": "Рыжевато-коричневый, св. "
      },
      {
        "id": 277,
        "color": "#abd58b",
        "DMC": "954",
        "nameColorEng": "Nile Green",
        "nameColorRu": "Мутно-зеленый"
      },
      {
        "id": 278,
        "color": "#b4e8b3",
        "DMC": "955",
        "nameColorEng": "Nile Green — lt",
        "nameColorRu": "Мутно-зеленый, св. "
      },
      {
        "id": 279,
        "color": "#ff7a90",
        "DMC": "956",
        "nameColorEng": "Geranium",
        "nameColorRu": "Герань"
      },
      {
        "id": 280,
        "color": "#f9afb7",
        "DMC": "957",
        "nameColorEng": "Geranium — pale",
        "nameColorRu": "Герань, бледный"
      },
      {
        "id": 281,
        "color": "#51c0bb",
        "DMC": "958",
        "nameColorEng": "Seagreen — dk",
        "nameColorRu": "Морской воды, т. "
      },
      {
        "id": 282,
        "color": "#8fd3d4",
        "DMC": "959",
        "nameColorEng": "Seagreen — med",
        "nameColorRu": "Морской воды, ср. "
      },
      {
        "id": 283,
        "color": "#df6877",
        "DMC": "961",
        "nameColorEng": "Dusty Rose — dk",
        "nameColorRu": "Пыльной розы, т. "
      },
      {
        "id": 284,
        "color": "#f08d9f",
        "DMC": "962",
        "nameColorEng": "Dusty Rose — med",
        "nameColorRu": "Пыльной розы, ср. "
      },
      {
        "id": 285,
        "color": "#fad0d5",
        "DMC": "963",
        "nameColorEng": "Dusty Rose — ultra vy lt",
        "nameColorRu": "Пыльной розы, очень св. "
      },
      {
        "id": 286,
        "color": "#9cd3cc",
        "DMC": "964",
        "nameColorEng": "Seagreen — lt",
        "nameColorRu": "Морской воды, св. "
      },
      {
        "id": 287,
        "color": "#bbd7ae",
        "DMC": "966",
        "nameColorEng": "Baby Green — med",
        "nameColorRu": "Нежно зеленый, ср. "
      },
      {
        "id": 288,
        "color": "#fbdbcd",
        "DMC": "967",
        "nameColorEng": "Apricot — vy lt",
        "nameColorRu": "Абрикосовый оч. Св. "
      },
      {
        "id": 289,
        "color": "#ff781e",
        "DMC": "970",
        "nameColorEng": "Pumpkin — bright",
        "nameColorRu": "Тыквенный, яркий"
      },
      {
        "id": 290,
        "color": "#fc7e0c",
        "DMC": "971",
        "nameColorEng": "Pumpkin",
        "nameColorRu": "Тыквенный"
      },
      {
        "id": 291,
        "color": "#ffb401",
        "DMC": "972",
        "nameColorEng": "Canary — deep",
        "nameColorRu": "Канареечный, глубокий"
      },
      {
        "id": 292,
        "color": "#ffe21a",
        "DMC": "973",
        "nameColorEng": "Canary — bright",
        "nameColorRu": "Канареечный, яркий"
      },
      {
        "id": 293,
        "color": "#945c2d",
        "DMC": "975",
        "nameColorEng": "Golden Brown — dk",
        "nameColorRu": "Золотисто-коричневый, т. "
      },
      {
        "id": 294,
        "color": "#e6973f",
        "DMC": "976",
        "nameColorEng": "Golden Brown — med",
        "nameColorRu": "Золотисто-коричневый, ср. "
      },
      {
        "id": 295,
        "color": "#e59034",
        "DMC": "977",
        "nameColorEng": "Golden Brown — lt",
        "nameColorRu": "Золотисто-коричневый, св. "
      },
      {
        "id": 296,
        "color": "#1f561f",
        "DMC": "986",
        "nameColorEng": "Forest Green — vy dk",
        "nameColorRu": "Зеленый лесной, оч. Т. "
      },
      {
        "id": 297,
        "color": "#568357",
        "DMC": "987",
        "nameColorEng": "Forest Green — dk",
        "nameColorRu": "Зеленый лесной, т. "
      },
      {
        "id": 298,
        "color": "#76996c",
        "DMC": "988",
        "nameColorEng": "Forest Green — med",
        "nameColorRu": "Зеленый лесной, ср. "
      },
      {
        "id": 299,
        "color": "#87a462",
        "DMC": "989",
        "nameColorEng": "Forest Green",
        "nameColorRu": "Зеленый лесной"
      },
      {
        "id": 300,
        "color": "#176a59",
        "DMC": "991",
        "nameColorEng": "Aquamarine — dk",
        "nameColorRu": "Аквамарин, т. "
      },
      {
        "id": 301,
        "color": "#6cbfa8",
        "DMC": "992",
        "nameColorEng": "Aquamarine — lt",
        "nameColorRu": "Аквамарин, св. "
      },
      {
        "id": 302,
        "color": "#8ec2b3",
        "DMC": "993",
        "nameColorEng": "Aquamarine — vy lt",
        "nameColorRu": "Аквамарин, оч. Св. "
      },
      {
        "id": 303,
        "color": "#0064b0",
        "DMC": "995",
        "nameColorEng": "Electric Blue — dk",
        "nameColorRu": "Электрик синий, т. "
      },
      {
        "id": 304,
        "color": "#57baf5",
        "DMC": "996",
        "nameColorEng": "Electric Blue — med",
        "nameColorRu": "Электрик синий, ср. "
      },
      {
        "id": 305,
        "color": "#635f2f",
        "DMC": "3011",
        "nameColorEng": "Khaki Green — dk",
        "nameColorRu": "Хаки, т. "
      },
      {
        "id": 306,
        "color": "#9b9648",
        "DMC": "3012",
        "nameColorEng": "Khaki Green — med",
        "nameColorRu": "Хаки, ср. "
      },
      {
        "id": 307,
        "color": "#999c6c",
        "DMC": "3013",
        "nameColorEng": "Khaki Green — lt",
        "nameColorRu": "Хаки, св. "
      },
      {
        "id": 308,
        "color": "#3b2e08",
        "DMC": "3021",
        "nameColorEng": "Brown Grey — vy dk",
        "nameColorRu": "Коричнево-серый, оч. Т. "
      },
      {
        "id": 309,
        "color": "#938e6e",
        "DMC": "3022",
        "nameColorEng": "Brown Grey — med",
        "nameColorRu": "Коричнево-серый, ср. "
      },
      {
        "id": 310,
        "color": "#b2ae95",
        "DMC": "3023",
        "nameColorEng": "Brown Grey — lt",
        "nameColorRu": "Коричнево-серый, св. "
      },
      {
        "id": 311,
        "color": "#dcdcd7",
        "DMC": "3024",
        "nameColorEng": "Brown Grey — vy lt",
        "nameColorRu": "Коричнево-серый, оч. Св. "
      },
      {
        "id": 312,
        "color": "#442e10",
        "DMC": "3031",
        "nameColorEng": "Mocha Brown — vy dk",
        "nameColorRu": "Мокка, оч. Т. "
      },
      {
        "id": 313,
        "color": "#ada183",
        "DMC": "3032",
        "nameColorEng": "Mocha Brown — med",
        "nameColorRu": "Мокка, ср. "
      },
      {
        "id": 314,
        "color": "#d7d0c2",
        "DMC": "3033",
        "nameColorEng": "Mocha Brown — vy lt",
        "nameColorRu": "Мокка, оч. Св. "
      },
      {
        "id": 315,
        "color": "#966e6e",
        "DMC": "3041",
        "nameColorEng": "Antique Violet — med",
        "nameColorRu": "Антично фиолетовый, ср. "
      },
      {
        "id": 316,
        "color": "#ccc1d0",
        "DMC": "3042",
        "nameColorEng": "Antique Violet — lt",
        "nameColorRu": "Антично фиолетовый, св. "
      },
      {
        "id": 317,
        "color": "#b19563",
        "DMC": "3045",
        "nameColorEng": "Yellow Beige — dk",
        "nameColorRu": "Желтовато-бежевый, т. "
      },
      {
        "id": 318,
        "color": "#ccbc7d",
        "DMC": "3046",
        "nameColorEng": "Yellow Beige — med",
        "nameColorRu": "Желтовато-бежевый, ср. "
      },
      {
        "id": 319,
        "color": "#ececd2",
        "DMC": "3047",
        "nameColorEng": "Yellow Beige — lt",
        "nameColorRu": "Желтовато-бежевый, св. "
      },
      {
        "id": 320,
        "color": "#6d6f42",
        "DMC": "3051",
        "nameColorEng": "Green Grey — dk",
        "nameColorRu": "Серо-зеленый, т. "
      },
      {
        "id": 321,
        "color": "#899770",
        "DMC": "3052",
        "nameColorEng": "Green Grey — med",
        "nameColorRu": "Серо-зеленый, ср. "
      },
      {
        "id": 322,
        "color": "#bac28b",
        "DMC": "3053",
        "nameColorEng": "Green Grey",
        "nameColorRu": "Серо-зеленый"
      },
      {
        "id": 323,
        "color": "#cda072",
        "DMC": "3064",
        "nameColorEng": "Desert Sand",
        "nameColorRu": "Пустынного песка"
      },
      {
        "id": 324,
        "color": "#e3e6dc",
        "DMC": "3072",
        "nameColorEng": "Beaver Grey — vy lt",
        "nameColorRu": "Боброво-серый, оч. Св. "
      },
      {
        "id": 325,
        "color": "#fff3ad",
        "DMC": "3078",
        "nameColorEng": "Golden Yellow — vy lt",
        "nameColorRu": "Желтый золотой, оч. Св. "
      },
      {
        "id": 326,
        "color": "#c6d3e1",
        "DMC": "3325",
        "nameColorEng": "Baby Blue — lt",
        "nameColorRu": "Нежно голубой, св. "
      },
      {
        "id": 327,
        "color": "#f7b4b7",
        "DMC": "3326",
        "nameColorEng": "Rose — lt",
        "nameColorRu": "Розы, св. "
      },
      {
        "id": 328,
        "color": "#c36154",
        "DMC": "3328",
        "nameColorEng": "Salmon — dk",
        "nameColorRu": "Лососевый, т. "
      },
      {
        "id": 329,
        "color": "#f38351",
        "DMC": "3340",
        "nameColorEng": "Apricot — med",
        "nameColorRu": "Абрикосовый, ср. "
      },
      {
        "id": 330,
        "color": "#fbbe9d",
        "DMC": "3341",
        "nameColorEng": "Apricot",
        "nameColorRu": "Абрикосовый"
      },
      {
        "id": 331,
        "color": "#486131",
        "DMC": "3345",
        "nameColorEng": "Hunter Green — dk",
        "nameColorRu": "Защитный, грязновато зеленый, т. "
      },
      {
        "id": 332,
        "color": "#6a823d",
        "DMC": "3346",
        "nameColorEng": "Hunter Green",
        "nameColorRu": "Защитный, грязновато зеленый"
      },
      {
        "id": 333,
        "color": "#78983b",
        "DMC": "3347",
        "nameColorEng": "Yellow Green — med",
        "nameColorRu": "Желто-зеленый, ср. "
      },
      {
        "id": 334,
        "color": "#e3ee9f",
        "DMC": "3348",
        "nameColorEng": "Yellow Green — lt",
        "nameColorRu": "Желто-зеленый, св. "
      },
      {
        "id": 335,
        "color": "#b95569",
        "DMC": "3350",
        "nameColorEng": "Dusty Rose — ultra dk",
        "nameColorRu": "Пыльной розы, ультра т. "
      },
      {
        "id": 336,
        "color": "#e3a5aa",
        "DMC": "3354",
        "nameColorEng": "Dusty Rose — lt",
        "nameColorRu": "Пыльной розы, св. "
      },
      {
        "id": 337,
        "color": "#2e3d1a",
        "DMC": "3362",
        "nameColorEng": "Pine Green — dk",
        "nameColorRu": "Сосновый, т. "
      },
      {
        "id": 338,
        "color": "#72885f",
        "DMC": "3363",
        "nameColorEng": "Pine Green — med",
        "nameColorRu": "Сосновый, ср. "
      },
      {
        "id": 339,
        "color": "#85905c",
        "DMC": "3364",
        "nameColorEng": "Pine Green",
        "nameColorRu": "Сосновый"
      },
      {
        "id": 340,
        "color": "#2d1705",
        "DMC": "3371",
        "nameColorEng": "Black Brown",
        "nameColorRu": "Черно-коричневый"
      },
      {
        "id": 341,
        "color": "#b34e8c",
        "DMC": "3607",
        "nameColorEng": "Plum — lt",
        "nameColorRu": "Сливовый, св. "
      },
      {
        "id": 342,
        "color": "#c07ba3",
        "DMC": "3608",
        "nameColorEng": "Plum — vy lt",
        "nameColorRu": "Сливовый, оч. Св. "
      },
      {
        "id": 343,
        "color": "#e9afd3",
        "DMC": "3609",
        "nameColorEng": "Plum — ultra lt",
        "nameColorRu": "Сливовый, ультра св. "
      },
      {
        "id": 344,
        "color": "#7d3248",
        "DMC": "3685",
        "nameColorEng": "Mauve — vy dk",
        "nameColorRu": "Розовато-лиловый, оч. Т. "
      },
      {
        "id": 345,
        "color": "#c2596d",
        "DMC": "3687",
        "nameColorEng": "Mauve",
        "nameColorRu": "Розовато-лиловый"
      },
      {
        "id": 346,
        "color": "#e6849a",
        "DMC": "3688",
        "nameColorEng": "Mauve — med",
        "nameColorRu": "Розовато-лиловый, ср. "
      },
      {
        "id": 347,
        "color": "#e8b9c5",
        "DMC": "3689",
        "nameColorEng": "Mauve — lt",
        "nameColorRu": "Розовато-лиловый, св. "
      },
      {
        "id": 348,
        "color": "#f65d5b",
        "DMC": "3705",
        "nameColorEng": "Melon — dk",
        "nameColorRu": "Дыни, т. "
      },
      {
        "id": 349,
        "color": "#ff988e",
        "DMC": "3706",
        "nameColorEng": "Melon — med",
        "nameColorRu": "Дыни, ср. "
      },
      {
        "id": 350,
        "color": "#fcbbc1",
        "DMC": "3708",
        "nameColorEng": "Melon — lt",
        "nameColorRu": "Дыни, св. "
      },
      {
        "id": 351,
        "color": "#db7d73",
        "DMC": "3712",
        "nameColorEng": "Salmon — med",
        "nameColorRu": "Лососевый, ср. "
      },
      {
        "id": 352,
        "color": "#fcdcda",
        "DMC": "3713",
        "nameColorEng": "Salmon — vy lt",
        "nameColorRu": "Лососевый, оч. Св. "
      },
      {
        "id": 353,
        "color": "#fcb1ba",
        "DMC": "3716",
        "nameColorEng": "Dusty Rose — vy lt",
        "nameColorRu": "Пыльной розы, оч. Св. "
      },
      {
        "id": 354,
        "color": "#aa5048",
        "DMC": "3721",
        "nameColorEng": "Shell Pink — dk",
        "nameColorRu": "Розовых ракушек, т. "
      },
      {
        "id": 355,
        "color": "#a45d55",
        "DMC": "3722",
        "nameColorEng": "Shell Pink — med",
        "nameColorRu": "Розовых ракушек, ср. "
      },
      {
        "id": 356,
        "color": "#874c49",
        "DMC": "3726",
        "nameColorEng": "Antique Mauve — dk",
        "nameColorRu": "Античный розовато-лиловый, т. "
      },
      {
        "id": 357,
        "color": "#e6bcc3",
        "DMC": "3727",
        "nameColorEng": "Antique Mauve — lt",
        "nameColorRu": "Античный розовато-лиловый, св. "
      },
      {
        "id": 358,
        "color": "#c65a6b",
        "DMC": "3731",
        "nameColorEng": "Dusty Rose — vy dk",
        "nameColorRu": "Пыльной розы, оч. Т. "
      },
      {
        "id": 359,
        "color": "#eda6ac",
        "DMC": "3733",
        "nameColorEng": "Dusty Rose",
        "nameColorRu": "Пыльной розы"
      },
      {
        "id": 360,
        "color": "#72535a",
        "DMC": "3740",
        "nameColorEng": "Antique Violet — dk",
        "nameColorRu": "Антично фиолетовый, т. "
      },
      {
        "id": 361,
        "color": "#c7bac7",
        "DMC": "3743",
        "nameColorEng": "Antique Violet — vy lt",
        "nameColorRu": "Антично фиолетовый, оч. Св. "
      },
      {
        "id": 362,
        "color": "#8572a4",
        "DMC": "3746",
        "nameColorEng": "Blue Violet — dk",
        "nameColorRu": "Сине-фиолетовый, т. "
      },
      {
        "id": 363,
        "color": "#bcc0d8",
        "DMC": "3747",
        "nameColorEng": "Blue Violet — vy lt",
        "nameColorRu": "Сине-фиолетовый, оч. Св. "
      },
      {
        "id": 364,
        "color": "#444d58",
        "DMC": "3750",
        "nameColorEng": "Antique Blue — vy dk",
        "nameColorRu": "Античный синий, оч. Т. "
      },
      {
        "id": 365,
        "color": "#bbc8d6",
        "DMC": "3752",
        "nameColorEng": "Antique Blue — vy lt",
        "nameColorRu": "Античный синий, оч. Св. "
      },
      {
        "id": 366,
        "color": "#ccd5da",
        "DMC": "3753",
        "nameColorEng": "Antique Blue — ultra vy lt",
        "nameColorRu": "Античный синий, ультра св. "
      },
      {
        "id": 367,
        "color": "#9fbbd5",
        "DMC": "3755",
        "nameColorEng": "Baby Blue",
        "nameColorRu": "Нежно голубой"
      },
      {
        "id": 368,
        "color": "#e8edf3",
        "DMC": "3756",
        "nameColorEng": "Baby Blue — ultra vy lt",
        "nameColorRu": "Нежно голубой, ультра св. "
      },
      {
        "id": 369,
        "color": "#4f819d",
        "DMC": "3760",
        "nameColorEng": "Wedgwood — med",
        "nameColorRu": "Пыльно-синий, ср. (гжель)"
      },
      {
        "id": 370,
        "color": "#b8dae9",
        "DMC": "3761",
        "nameColorEng": "Sky Blue — lt",
        "nameColorRu": "Небесно голубой, св. "
      },
      {
        "id": 371,
        "color": "#296e87",
        "DMC": "3765",
        "nameColorEng": "Peacock Blue — vy dk",
        "nameColorRu": "Переливчатый синий, оч. Т. "
      },
      {
        "id": 372,
        "color": "#7cbec6",
        "DMC": "3766",
        "nameColorEng": "Peacock Blue — lt",
        "nameColorRu": "Переливчатый синий, св. "
      },
      {
        "id": 373,
        "color": "#6b8084",
        "DMC": "3768",
        "nameColorEng": "Grey Green — dk",
        "nameColorRu": "Серо-зеленый"
      },
      {
        "id": 374,
        "color": "#f8eedc",
        "DMC": "3770",
        "nameColorEng": "Tawny — vy lt",
        "nameColorRu": "Рыжевато-коричневый, оч. Св. "
      },
      {
        "id": 375,
        "color": "#e8b58f",
        "DMC": "3771",
        "nameColorEng": "Terra Cotta — ultra vy lt",
        "nameColorRu": "Терракотовый, ультра оч. Св. "
      },
      {
        "id": 376,
        "color": "#b8846c",
        "DMC": "3772",
        "nameColorEng": "Desert Sand — vy dk",
        "nameColorRu": "Пустынного песка, оч. Т. "
      },
      {
        "id": 377,
        "color": "#d8b39d",
        "DMC": "3773",
        "nameColorEng": "Desert Sand — med",
        "nameColorRu": "Пустынного песка, ср. "
      },
      {
        "id": 378,
        "color": "#f6e1d0",
        "DMC": "3774",
        "nameColorEng": "Desert Sand — vy lt",
        "nameColorRu": "Пустынного песка, оч. Св. "
      },
      {
        "id": 379,
        "color": "#c27d45",
        "DMC": "3776",
        "nameColorEng": "Mahogany — lt",
        "nameColorRu": "Красного дерева, св. "
      },
      {
        "id": 380,
        "color": "#892b21",
        "DMC": "3777",
        "nameColorEng": "Terra Cotta — vy dk",
        "nameColorRu": "Терракотовый, оч. Т. "
      },
      {
        "id": 381,
        "color": "#c4856f",
        "DMC": "3778",
        "nameColorEng": "Terra Cotta — lt",
        "nameColorRu": "Терракотовый, св. "
      },
      {
        "id": 382,
        "color": "#f2c6b8",
        "DMC": "3779",
        "nameColorEng": "Terra Cotta — ultra vy lt",
        "nameColorRu": "Терракотовый, ультра св. "
      },
      {
        "id": 383,
        "color": "#5c4c2d",
        "DMC": "3781",
        "nameColorEng": "Mocha Brown — dk",
        "nameColorRu": "Мокка, т. "
      },
      {
        "id": 384,
        "color": "#d2caba",
        "DMC": "3782",
        "nameColorEng": "Mocha Brown — lt",
        "nameColorRu": "Мокка, св. "
      },
      {
        "id": 385,
        "color": "#605b45",
        "DMC": "3787",
        "nameColorEng": "Brown Grey — dk",
        "nameColorRu": "Коричнево-серый, т. "
      },
      {
        "id": 386,
        "color": "#978266",
        "DMC": "3790",
        "nameColorEng": "Beige Grey — ultra dk",
        "nameColorRu": "Бежево-серый, ультра т. "
      },
      {
        "id": 387,
        "color": "#2f3b36",
        "DMC": "3799",
        "nameColorEng": "Pewter Grey — vy dk",
        "nameColorRu": "Оловянно серый, оч. Т. "
      },
      {
        "id": 388,
        "color": "#e65952",
        "DMC": "3801",
        "nameColorEng": "Christmas Red — lt",
        "nameColorRu": "Рождественский красный, св. "
      },
      {
        "id": 389,
        "color": "#6f2e35",
        "DMC": "3802",
        "nameColorEng": "Antique Mauve — vy dk",
        "nameColorRu": "Античный розовато-лиловый, оч. Т. "
      },
      {
        "id": 390,
        "color": "#863248",
        "DMC": "3803",
        "nameColorEng": "Mauve — dk",
        "nameColorRu": "Розовато-лиловый, т. "
      },
      {
        "id": 391,
        "color": "#c33c62",
        "DMC": "3804",
        "nameColorEng": "Cyclamen Pink — dk",
        "nameColorRu": "Розового цикламена, т. "
      },
      {
        "id": 392,
        "color": "#ce507f",
        "DMC": "3805",
        "nameColorEng": "Cyclamen Pink",
        "nameColorRu": "Розового цикламена"
      },
      {
        "id": 393,
        "color": "#f19ac2",
        "DMC": "3806",
        "nameColorEng": "Cyclamen Pink — lt",
        "nameColorRu": "Розового цикламена, св. "
      },
      {
        "id": 394,
        "color": "#073563",
        "DMC": "3807",
        "nameColorEng": "Cornflower Blue",
        "nameColorRu": "Васильковый, кобальтовый"
      },
      {
        "id": 395,
        "color": "#0c464b",
        "DMC": "3808",
        "nameColorEng": "Turquoise — ultra vy dk",
        "nameColorRu": "Бирюзовый, ультра т. "
      },
      {
        "id": 396,
        "color": "#1c869b",
        "DMC": "3809",
        "nameColorEng": "Turquoise — vy dk",
        "nameColorRu": "Бирюзовый, оч. Т. "
      },
      {
        "id": 397,
        "color": "#4fa1a9",
        "DMC": "3810",
        "nameColorEng": "Turquoise — dk",
        "nameColorRu": "Бирюзовый, т. "
      },
      {
        "id": 398,
        "color": "#c4e7e8",
        "DMC": "3811",
        "nameColorEng": "Turquoise — vy lt",
        "nameColorRu": "Бирюзовый, оч. Св. "
      },
      {
        "id": 399,
        "color": "#008679",
        "DMC": "3812",
        "nameColorEng": "Seagreen — vy dk",
        "nameColorRu": "Морской воды, оч. Т. "
      },
      {
        "id": 400,
        "color": "#b8cebe",
        "DMC": "3813",
        "nameColorEng": "Blue Green — lt",
        "nameColorRu": "Сине-зеленый, св. "
      },
      {
        "id": 401,
        "color": "#3f8878",
        "DMC": "3814",
        "nameColorEng": "Aquamarine",
        "nameColorRu": "Аквамарин"
      },
      {
        "id": 402,
        "color": "#538a6d",
        "DMC": "3815",
        "nameColorEng": "Celadon Green — dk",
        "nameColorRu": "Серовато-зеленый, т. "
      },
      {
        "id": 403,
        "color": "#699d85",
        "DMC": "3816",
        "nameColorEng": "Celadon Green",
        "nameColorRu": "Серовато-зеленый"
      },
      {
        "id": 404,
        "color": "#a6c5b4",
        "DMC": "3817",
        "nameColorEng": "Celadon Green — lt",
        "nameColorRu": "Серовато-зеленый, св. "
      },
      {
        "id": 405,
        "color": "#005d2e",
        "DMC": "3818",
        "nameColorEng": "Emerald Green — ultra vy dk",
        "nameColorRu": "Изумрудный, ультра т. "
      },
      {
        "id": 406,
        "color": "#d2d057",
        "DMC": "3819",
        "nameColorEng": "Moss Green — lt",
        "nameColorRu": "Мох, св. "
      },
      {
        "id": 407,
        "color": "#ddb442",
        "DMC": "3820",
        "nameColorEng": "Straw — dk",
        "nameColorRu": "Соломенный, т. "
      },
      {
        "id": 408,
        "color": "#e2b73a",
        "DMC": "3821",
        "nameColorEng": "Straw",
        "nameColorRu": "Соломенный"
      },
      {
        "id": 409,
        "color": "#f1d863",
        "DMC": "3822",
        "nameColorEng": "Straw — lt",
        "nameColorRu": "Соломенный, св. "
      },
      {
        "id": 410,
        "color": "#fffcdc",
        "DMC": "3823",
        "nameColorEng": "Yellow — ultra pale",
        "nameColorRu": "Желтый, ультра бледный"
      },
      {
        "id": 411,
        "color": "#fbccb8",
        "DMC": "3824",
        "nameColorEng": "Apricot — lt",
        "nameColorRu": "Абрикосовый, св. "
      },
      {
        "id": 412,
        "color": "#fdc391",
        "DMC": "3825",
        "nameColorEng": "Pumpkin — pale",
        "nameColorRu": "Тыквенный, бледный"
      },
      {
        "id": 413,
        "color": "#c38c55",
        "DMC": "3826",
        "nameColorEng": "Golden Brown",
        "nameColorRu": "Золотовато-коричневый"
      },
      {
        "id": 414,
        "color": "#e8aa5f",
        "DMC": "3827",
        "nameColorEng": "Golden Brown — pale",
        "nameColorRu": "Золотовато-коричневый, бледный"
      },
      {
        "id": 415,
        "color": "#af8846",
        "DMC": "3828",
        "nameColorEng": "Hazelnut Brown",
        "nameColorRu": "Фундука"
      },
      {
        "id": 416,
        "color": "#a47829",
        "DMC": "3829",
        "nameColorEng": "Old Gold — vy dk",
        "nameColorRu": "Старого золота, оч. Т. "
      },
      {
        "id": 417,
        "color": "#b97161",
        "DMC": "3830",
        "nameColorEng": "Terra Cotta",
        "nameColorRu": "Терракотовый"
      },
      {
        "id": 418,
        "color": "#b33034",
        "DMC": "3831",
        "nameColorEng": "Raspberry — dk",
        "nameColorRu": "Малиновый, т. "
      },
      {
        "id": 419,
        "color": "#b33034",
        "DMC": "3832",
        "nameColorEng": "Raspberry — med",
        "nameColorRu": "Малиновый, ср. "
      },
      {
        "id": 420,
        "color": "#e8868c",
        "DMC": "3833",
        "nameColorEng": "Raspberry — lt",
        "nameColorRu": "Малиновый, св. "
      },
      {
        "id": 421,
        "color": "#642441",
        "DMC": "3834",
        "nameColorEng": "Grape — dk",
        "nameColorRu": "Красного винограда, т. "
      },
      {
        "id": 422,
        "color": "#784775",
        "DMC": "3835",
        "nameColorEng": "Grape — med",
        "nameColorRu": "Красного винограда, ср. "
      },
      {
        "id": 423,
        "color": "#c1aec2",
        "DMC": "3836",
        "nameColorEng": "Grape — lt",
        "nameColorRu": "Красного винограда, св. "
      },
      {
        "id": 424,
        "color": "#7c4087",
        "DMC": "3837",
        "nameColorEng": "Lavender — ultra dk",
        "nameColorRu": "Лаванда, ультра тёмный"
      },
      {
        "id": 425,
        "color": "#62669a",
        "DMC": "3838",
        "nameColorEng": "Lavender Blue — dk",
        "nameColorRu": "Лавандово-синий, т. "
      },
      {
        "id": 426,
        "color": "#94a8c9",
        "DMC": "3839",
        "nameColorEng": "Lavender Blue — med",
        "nameColorRu": "Лавандово-синий, ср. "
      },
      {
        "id": 427,
        "color": "#c1d4ec",
        "DMC": "3840",
        "nameColorEng": "Lavender Blue — lt",
        "nameColorRu": "Лавандово-синий, св. "
      },
      {
        "id": 428,
        "color": "#cbdde7",
        "DMC": "3841",
        "nameColorEng": "Baby Blue — pale",
        "nameColorRu": "Нежно голубой, бледный"
      },
      {
        "id": 429,
        "color": "#12557e",
        "DMC": "3842",
        "nameColorEng": "Wedgwood — dk",
        "nameColorRu": "Пыльно-синий, т. "
      },
      {
        "id": 430,
        "color": "#0095d3",
        "DMC": "3843",
        "nameColorEng": "Electric Blue",
        "nameColorRu": "Волнующе синий"
      },
      {
        "id": 431,
        "color": "#0095d3",
        "DMC": "3844",
        "nameColorEng": "Bright Turquoise — dk",
        "nameColorRu": "Ярко-бирюзовый, т. "
      },
      {
        "id": 432,
        "color": "#01cbec",
        "DMC": "3845",
        "nameColorEng": "Bright Turquoise — med",
        "nameColorRu": "Ярко-бирюзовый, ср. "
      },
      {
        "id": 433,
        "color": "#63d3e1",
        "DMC": "3846",
        "nameColorEng": "Bright Turquoise — lt",
        "nameColorRu": "Ярко-бирюзовый, св. "
      },
      {
        "id": 434,
        "color": "#00604e",
        "DMC": "3847",
        "nameColorEng": "Teal Green — dk",
        "nameColorRu": "Цвет рабочего стола Windows, т. "
      },
      {
        "id": 435,
        "color": "#42917f",
        "DMC": "3848",
        "nameColorEng": "Teal Green — med",
        "nameColorRu": "Цвет рабочего стола Windows, ср. "
      },
      {
        "id": 436,
        "color": "#6eb2a7",
        "DMC": "3849",
        "nameColorEng": "Teal Green — lt",
        "nameColorRu": "Цвет рабочего стола Windows, св. "
      },
      {
        "id": 437,
        "color": "#08926f",
        "DMC": "3850",
        "nameColorEng": "Bright Green — dk",
        "nameColorRu": "Ярко-зеленый, т. "
      },
      {
        "id": 438,
        "color": "#56b69c",
        "DMC": "3851",
        "nameColorEng": "Bright Green — lt",
        "nameColorRu": "Ярко-зеленый, св. "
      },
      {
        "id": 439,
        "color": "#cc972b",
        "DMC": "3852",
        "nameColorEng": "Straw — vy dk",
        "nameColorRu": "Соломенный, оч. Т. "
      },
      {
        "id": 440,
        "color": "#fc9749",
        "DMC": "3853",
        "nameColorEng": "Autumn Gold — dk",
        "nameColorRu": "Золотой осенний, т. "
      },
      {
        "id": 441,
        "color": "#f7b25c",
        "DMC": "3854",
        "nameColorEng": "Autumn Gold — med",
        "nameColorRu": "Золотой осенний, ср. "
      },
      {
        "id": 442,
        "color": "#f7ca84",
        "DMC": "3855",
        "nameColorEng": "Autumn Gold — lt",
        "nameColorRu": "Золотой осенний, св. "
      },
      {
        "id": 443,
        "color": "#ebbc9a",
        "DMC": "3856",
        "nameColorEng": "Mahogany — ultra vy lt",
        "nameColorRu": "Красного дерева, ультра св. "
      },
      {
        "id": 444,
        "color": "#804133",
        "DMC": "3857",
        "nameColorEng": "Rosewood — dk",
        "nameColorRu": "Розового дерева, т. "
      },
      {
        "id": 445,
        "color": "#8d5745",
        "DMC": "3858",
        "nameColorEng": "Rosewood — med",
        "nameColorRu": "Розового дерева, ср. "
      },
      {
        "id": 446,
        "color": "#b68472",
        "DMC": "3859",
        "nameColorEng": "Rosewood — lt",
        "nameColorRu": "Розового дерева, св. "
      },
      {
        "id": 447,
        "color": "#947974",
        "DMC": "3860",
        "nameColorEng": "Cocoa",
        "nameColorRu": "Какао"
      },
      {
        "id": 448,
        "color": "#9e887f",
        "DMC": "3861",
        "nameColorEng": "Cocoa — lt",
        "nameColorRu": "Какао, св. "
      },
      {
        "id": 449,
        "color": "#845f2e",
        "DMC": "3862",
        "nameColorEng": "Mocha Beige — dk",
        "nameColorRu": "Темно-коричневый бежевый, т. "
      },
      {
        "id": 450,
        "color": "#a4866c",
        "DMC": "3863",
        "nameColorEng": "Mocha Beige — med",
        "nameColorRu": "Темно-коричневый бежевый, ср. "
      },
      {
        "id": 451,
        "color": "#c9af93",
        "DMC": "3864",
        "nameColorEng": "Mocha Beige — lt",
        "nameColorRu": "Темно-коричневый бежевый, св. "
      },
      {
        "id": 452,
        "color": "#faf9f5",
        "DMC": "3865",
        "nameColorEng": "Winter White",
        "nameColorRu": "Снежно белый"
      },
      {
        "id": 453,
        "color": "#e7e5dd",
        "DMC": "3866",
        "nameColorEng": "Mocha Brown — ultra vy lt",
        "nameColorRu": "Мокка, ультра св. "
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Colors', null, {})
  }
};
