// ═══════════════════════════════════════════
// DATA — 100 Kosakata
// ═══════════════════════════════════════════
const DATA = [
  // ── Salam ──
  {
    id: 1,
    cat: "Salam",
    hira: "おはようございます",
    kanji: "—",
    roma: "Ohayou gozaimasu",
    arti: "Selamat pagi (formal)",
    ex_jp: "おはようございます！今日もよろしく。",
    ex_id: "Selamat pagi! Hari ini juga mohon kerja samanya.",
  },
  {
    id: 2,
    cat: "Salam",
    hira: "おはよう",
    kanji: "—",
    roma: "Ohayou",
    arti: "Selamat pagi (kasual)",
    ex_jp: "おはよう、げんき？",
    ex_id: "Pagi, apa kabar?",
  },
  {
    id: 3,
    cat: "Salam",
    hira: "こんにちは",
    kanji: "—",
    roma: "Konnichiwa",
    arti: "Halo / Selamat siang",
    ex_jp: "こんにちは！いいてんきですね。",
    ex_id: "Halo! Cuacanya bagus ya.",
  },
  {
    id: 4,
    cat: "Salam",
    hira: "こんばんは",
    kanji: "—",
    roma: "Konbanwa",
    arti: "Selamat malam",
    ex_jp: "こんばんは、おかえり。",
    ex_id: "Selamat malam, selamat datang kembali.",
  },
  {
    id: 5,
    cat: "Salam",
    hira: "おやすみなさい",
    kanji: "—",
    roma: "Oyasumi nasai",
    arti: "Selamat tidur",
    ex_jp: "おやすみなさい、いいゆめを。",
    ex_id: "Selamat tidur, semoga mimpi indah.",
  },
  {
    id: 6,
    cat: "Salam",
    hira: "さようなら",
    kanji: "—",
    roma: "Sayounara",
    arti: "Selamat tinggal",
    ex_jp: "さようなら、またね。",
    ex_id: "Selamat tinggal, sampai jumpa.",
  },
  {
    id: 7,
    cat: "Salam",
    hira: "ありがとうございます",
    kanji: "—",
    roma: "Arigatou gozaimasu",
    arti: "Terima kasih (formal)",
    ex_jp: "ありがとうございます、たすかりました。",
    ex_id: "Terima kasih, sangat membantu.",
  },
  {
    id: 8,
    cat: "Salam",
    hira: "すみません",
    kanji: "—",
    roma: "Sumimasen",
    arti: "Permisi / Maaf",
    ex_jp: "すみません、トイレはどこですか？",
    ex_id: "Permisi, di mana toiletnya?",
  },
  {
    id: 9,
    cat: "Salam",
    hira: "ごめんなさい",
    kanji: "—",
    roma: "Gomen nasai",
    arti: "Maafkan saya",
    ex_jp: "ごめんなさい、おそくなりました。",
    ex_id: "Maaf, saya terlambat.",
  },
  {
    id: 10,
    cat: "Salam",
    hira: "はじめまして",
    kanji: "—",
    roma: "Hajimemashite",
    arti: "Senang berkenalan",
    ex_jp: "はじめまして、たなかです。",
    ex_id: "Senang berkenalan, saya Tanaka.",
  },
  {
    id: 11,
    cat: "Salam",
    hira: "よろしくおねがいします",
    kanji: "—",
    roma: "Yoroshiku onegaishimasu",
    arti: "Mohon kerja samanya",
    ex_jp: "これからよろしくおねがいします。",
    ex_id: "Mulai sekarang mohon kerja samanya.",
  },
  {
    id: 12,
    cat: "Salam",
    hira: "おげんきですか",
    kanji: "お元気ですか",
    roma: "O-genki desu ka",
    arti: "Apa kabar?",
    ex_jp: "おげんきですか？はい、げんきです！",
    ex_id: "Apa kabar? Ya, saya baik!",
  },

  // ── Angka ──
  {
    id: 13,
    cat: "Angka",
    hira: "いち",
    kanji: "一",
    roma: "Ichi",
    arti: "Satu",
    ex_jp: "りんごがいちつあります。",
    ex_id: "Ada satu apel.",
  },
  {
    id: 14,
    cat: "Angka",
    hira: "に",
    kanji: "二",
    roma: "Ni",
    arti: "Dua",
    ex_jp: "にほんにいきたいです。",
    ex_id: "Saya ingin pergi ke Jepang.",
  },
  {
    id: 15,
    cat: "Angka",
    hira: "さん",
    kanji: "三",
    roma: "San",
    arti: "Tiga",
    ex_jp: "さんじにあいましょう。",
    ex_id: "Mari bertemu jam tiga.",
  },
  {
    id: 16,
    cat: "Angka",
    hira: "し / よん",
    kanji: "四",
    roma: "Shi / Yon",
    arti: "Empat",
    ex_jp: "よんまいください。",
    ex_id: "Tolong empat lembar.",
  },
  {
    id: 17,
    cat: "Angka",
    hira: "ご",
    kanji: "五",
    roma: "Go",
    arti: "Lima",
    ex_jp: "ごふんまってください。",
    ex_id: "Tolong tunggu lima menit.",
  },
  {
    id: 18,
    cat: "Angka",
    hira: "ろく",
    kanji: "六",
    roma: "Roku",
    arti: "Enam",
    ex_jp: "ろくじにおきます。",
    ex_id: "Saya bangun jam enam.",
  },
  {
    id: 19,
    cat: "Angka",
    hira: "なな / しち",
    kanji: "七",
    roma: "Nana / Shichi",
    arti: "Tujuh",
    ex_jp: "ならびましょう、なな、はち、きゅう。",
    ex_id: "Mari berhitung, tujuh, delapan, sembilan.",
  },
  {
    id: 20,
    cat: "Angka",
    hira: "はち",
    kanji: "八",
    roma: "Hachi",
    arti: "Delapan",
    ex_jp: "はちまんえんです。",
    ex_id: "Harganya delapan puluh ribu yen.",
  },
  {
    id: 21,
    cat: "Angka",
    hira: "きゅう / く",
    kanji: "九",
    roma: "Kyuu / Ku",
    arti: "Sembilan",
    ex_jp: "きゅうじごふんにでます。",
    ex_id: "Berangkat jam sembilan lewat lima.",
  },
  {
    id: 22,
    cat: "Angka",
    hira: "じゅう",
    kanji: "十",
    roma: "Juu",
    arti: "Sepuluh",
    ex_jp: "じゅうにんでたべます。",
    ex_id: "Makan bersama sepuluh orang.",
  },
  {
    id: 23,
    cat: "Angka",
    hira: "ひゃく",
    kanji: "百",
    roma: "Hyaku",
    arti: "Seratus",
    ex_jp: "ひゃくえんショップがすきです。",
    ex_id: "Saya suka toko seratus yen.",
  },
  {
    id: 24,
    cat: "Angka",
    hira: "せん",
    kanji: "千",
    roma: "Sen",
    arti: "Seribu",
    ex_jp: "いっせんえんおかしください。",
    ex_id: "Tolong uang seribu yen.",
  },

  // ── Warna ──
  {
    id: 25,
    cat: "Warna",
    hira: "あか",
    kanji: "赤",
    roma: "Aka",
    arti: "Merah",
    ex_jp: "このはなはあかです。",
    ex_id: "Bunga ini berwarna merah.",
  },
  {
    id: 26,
    cat: "Warna",
    hira: "あお",
    kanji: "青",
    roma: "Ao",
    arti: "Biru",
    ex_jp: "そらはあおいですね。",
    ex_id: "Langit biru ya.",
  },
  {
    id: 27,
    cat: "Warna",
    hira: "しろ",
    kanji: "白",
    roma: "Shiro",
    arti: "Putih",
    ex_jp: "しろいシャツをきています。",
    ex_id: "Saya memakai baju putih.",
  },
  {
    id: 28,
    cat: "Warna",
    hira: "くろ",
    kanji: "黒",
    roma: "Kuro",
    arti: "Hitam",
    ex_jp: "くろいねこがいます。",
    ex_id: "Ada kucing hitam.",
  },
  {
    id: 29,
    cat: "Warna",
    hira: "きいろ",
    kanji: "黄色",
    roma: "Kiiro",
    arti: "Kuning",
    ex_jp: "ひまわりはきいろです。",
    ex_id: "Bunga matahari berwarna kuning.",
  },
  {
    id: 30,
    cat: "Warna",
    hira: "みどり",
    kanji: "緑",
    roma: "Midori",
    arti: "Hijau",
    ex_jp: "きはみどりです。",
    ex_id: "Pohon itu hijau.",
  },
  {
    id: 31,
    cat: "Warna",
    hira: "むらさき",
    kanji: "紫",
    roma: "Murasaki",
    arti: "Ungu",
    ex_jp: "むらさきがすきです。",
    ex_id: "Saya suka warna ungu.",
  },
  {
    id: 32,
    cat: "Warna",
    hira: "オレンジ",
    kanji: "—",
    roma: "Orenji",
    arti: "Oranye",
    ex_jp: "オレンジいろのくつをかいました。",
    ex_id: "Saya beli sepatu warna oranye.",
  },
  {
    id: 33,
    cat: "Warna",
    hira: "ピンク",
    kanji: "—",
    roma: "Pinku",
    arti: "Merah muda",
    ex_jp: "ピンクのさくらがきれいです。",
    ex_id: "Bunga sakura merah muda itu cantik.",
  },
  {
    id: 34,
    cat: "Warna",
    hira: "ちゃいろ",
    kanji: "茶色",
    roma: "Chairo",
    arti: "Cokelat",
    ex_jp: "ちゃいろのかばんがほしい。",
    ex_id: "Saya ingin tas cokelat.",
  },

  // ── Waktu ──
  {
    id: 35,
    cat: "Waktu",
    hira: "いま",
    kanji: "今",
    roma: "Ima",
    arti: "Sekarang",
    ex_jp: "いまなんじですか？",
    ex_id: "Sekarang jam berapa?",
  },
  {
    id: 36,
    cat: "Waktu",
    hira: "きょう",
    kanji: "今日",
    roma: "Kyou",
    arti: "Hari ini",
    ex_jp: "きょうはいいてんきですね。",
    ex_id: "Hari ini cuacanya bagus ya.",
  },
  {
    id: 37,
    cat: "Waktu",
    hira: "あした",
    kanji: "明日",
    roma: "Ashita",
    arti: "Besok",
    ex_jp: "あしたがっこうにいきます。",
    ex_id: "Besok saya pergi ke sekolah.",
  },
  {
    id: 38,
    cat: "Waktu",
    hira: "きのう",
    kanji: "昨日",
    roma: "Kinou",
    arti: "Kemarin",
    ex_jp: "きのうえいがをみました。",
    ex_id: "Kemarin saya nonton film.",
  },
  {
    id: 39,
    cat: "Waktu",
    hira: "あさ",
    kanji: "朝",
    roma: "Asa",
    arti: "Pagi",
    ex_jp: "まいあさろくじにおきます。",
    ex_id: "Setiap pagi saya bangun jam enam.",
  },
  {
    id: 40,
    cat: "Waktu",
    hira: "ひる",
    kanji: "昼",
    roma: "Hiru",
    arti: "Siang",
    ex_jp: "ひるごはんをたべます。",
    ex_id: "Saya makan siang.",
  },
  {
    id: 41,
    cat: "Waktu",
    hira: "よる",
    kanji: "夜",
    roma: "Yoru",
    arti: "Malam",
    ex_jp: "よるはほんをよみます。",
    ex_id: "Malam hari saya membaca buku.",
  },
  {
    id: 42,
    cat: "Waktu",
    hira: "〜じ",
    kanji: "〜時",
    roma: "~ji",
    arti: "Pukul / jam",
    ex_jp: "くじにかいぎがあります。",
    ex_id: "Ada rapat jam sembilan.",
  },
  {
    id: 43,
    cat: "Waktu",
    hira: "〜ふん",
    kanji: "〜分",
    roma: "~fun/~pun",
    arti: "Menit",
    ex_jp: "じゅうごふんまってください。",
    ex_id: "Tolong tunggu lima belas menit.",
  },
  {
    id: 44,
    cat: "Waktu",
    hira: "げつようび",
    kanji: "月曜日",
    roma: "Getsuyoubi",
    arti: "Senin",
    ex_jp: "げつようびにミーティングがある。",
    ex_id: "Ada meeting hari Senin.",
  },
  {
    id: 45,
    cat: "Waktu",
    hira: "すいようび",
    kanji: "水曜日",
    roma: "Suiyoubi",
    arti: "Rabu",
    ex_jp: "すいようびはいそがしいです。",
    ex_id: "Hari Rabu sibuk.",
  },
  {
    id: 46,
    cat: "Waktu",
    hira: "きんようび",
    kanji: "金曜日",
    roma: "Kin'youbi",
    arti: "Jumat",
    ex_jp: "きんようびがたのしみです。",
    ex_id: "Saya menantikan hari Jumat.",
  },
  {
    id: 47,
    cat: "Waktu",
    hira: "にちようび",
    kanji: "日曜日",
    roma: "Nichiyoubi",
    arti: "Minggu",
    ex_jp: "にちようびはやすみです。",
    ex_id: "Hari Minggu libur.",
  },

  // ── Keluarga ──
  {
    id: 48,
    cat: "Keluarga",
    hira: "ちち",
    kanji: "父",
    roma: "Chichi",
    arti: "Ayah (saya)",
    ex_jp: "ちちはいしゃです。",
    ex_id: "Ayah saya adalah dokter.",
  },
  {
    id: 49,
    cat: "Keluarga",
    hira: "おとうさん",
    kanji: "お父さん",
    roma: "Otousan",
    arti: "Ayah (orang lain)",
    ex_jp: "おとうさんはどこですか？",
    ex_id: "Di mana ayahmu?",
  },
  {
    id: 50,
    cat: "Keluarga",
    hira: "はは",
    kanji: "母",
    roma: "Haha",
    arti: "Ibu (saya)",
    ex_jp: "はははりょうりがじょうずです。",
    ex_id: "Ibu saya pandai memasak.",
  },
  {
    id: 51,
    cat: "Keluarga",
    hira: "おかあさん",
    kanji: "お母さん",
    roma: "Okaasan",
    arti: "Ibu (orang lain)",
    ex_jp: "おかあさんはやさしいですね。",
    ex_id: "Ibumu baik ya.",
  },
  {
    id: 52,
    cat: "Keluarga",
    hira: "あに",
    kanji: "兄",
    roma: "Ani",
    arti: "Kakak laki-laki (saya)",
    ex_jp: "あにはだいがくせいです。",
    ex_id: "Kakak saya mahasiswa.",
  },
  {
    id: 53,
    cat: "Keluarga",
    hira: "おにいさん",
    kanji: "お兄さん",
    roma: "Oniisan",
    arti: "Kakak laki-laki (orang lain)",
    ex_jp: "おにいさんはなんさいですか？",
    ex_id: "Kakakmu berumur berapa?",
  },
  {
    id: 54,
    cat: "Keluarga",
    hira: "あね",
    kanji: "姉",
    roma: "Ane",
    arti: "Kakak perempuan (saya)",
    ex_jp: "あねはとうきょうにすんでいます。",
    ex_id: "Kakak perempuan saya tinggal di Tokyo.",
  },
  {
    id: 55,
    cat: "Keluarga",
    hira: "おねえさん",
    kanji: "お姉さん",
    roma: "Oneesan",
    arti: "Kakak perempuan (orang lain)",
    ex_jp: "おねえさんはかわいいですね。",
    ex_id: "Kakak perempuanmu cantik ya.",
  },
  {
    id: 56,
    cat: "Keluarga",
    hira: "おとうと",
    kanji: "弟",
    roma: "Otouto",
    arti: "Adik laki-laki",
    ex_jp: "おとうとはちゅうがくせいです。",
    ex_id: "Adik laki-laki saya SMP.",
  },
  {
    id: 57,
    cat: "Keluarga",
    hira: "いもうと",
    kanji: "妹",
    roma: "Imouto",
    arti: "Adik perempuan",
    ex_jp: "いもうとはかわいいです。",
    ex_id: "Adik perempuan saya lucu.",
  },
  {
    id: 58,
    cat: "Keluarga",
    hira: "そふ",
    kanji: "祖父",
    roma: "Sofu",
    arti: "Kakek (saya)",
    ex_jp: "そふはいなかにいます。",
    ex_id: "Kakek saya ada di kampung.",
  },
  {
    id: 59,
    cat: "Keluarga",
    hira: "そぼ",
    kanji: "祖母",
    roma: "Sobo",
    arti: "Nenek (saya)",
    ex_jp: "そぼはまいにちさんぽします。",
    ex_id: "Nenek saya jalan kaki setiap hari.",
  },
  {
    id: 60,
    cat: "Keluarga",
    hira: "かぞく",
    kanji: "家族",
    roma: "Kazoku",
    arti: "Keluarga",
    ex_jp: "かぞくがだいすきです。",
    ex_id: "Saya sangat sayang keluarga.",
  },

  // ── Sekolah ──
  {
    id: 61,
    cat: "Sekolah",
    hira: "がっこう",
    kanji: "学校",
    roma: "Gakkou",
    arti: "Sekolah",
    ex_jp: "まいにちがっこうにいきます。",
    ex_id: "Saya pergi ke sekolah setiap hari.",
  },
  {
    id: 62,
    cat: "Sekolah",
    hira: "きょうしつ",
    kanji: "教室",
    roma: "Kyoushitsu",
    arti: "Ruang kelas",
    ex_jp: "きょうしつはにかいにあります。",
    ex_id: "Ruang kelas ada di lantai dua.",
  },
  {
    id: 63,
    cat: "Sekolah",
    hira: "せんせい",
    kanji: "先生",
    roma: "Sensei",
    arti: "Guru",
    ex_jp: "せんせいはやさしいです。",
    ex_id: "Gurunya baik hati.",
  },
  {
    id: 64,
    cat: "Sekolah",
    hira: "がくせい",
    kanji: "学生",
    roma: "Gakusei",
    arti: "Pelajar",
    ex_jp: "わたしはがくせいです。",
    ex_id: "Saya adalah pelajar.",
  },
  {
    id: 65,
    cat: "Sekolah",
    hira: "ともだち",
    kanji: "友達",
    roma: "Tomodachi",
    arti: "Teman",
    ex_jp: "ともだちとあそびます。",
    ex_id: "Bermain bersama teman.",
  },
  {
    id: 66,
    cat: "Sekolah",
    hira: "ほん",
    kanji: "本",
    roma: "Hon",
    arti: "Buku",
    ex_jp: "このほんはおもしろいです。",
    ex_id: "Buku ini menarik.",
  },
  {
    id: 67,
    cat: "Sekolah",
    hira: "ノート",
    kanji: "—",
    roma: "Nooto",
    arti: "Buku catatan",
    ex_jp: "ノートにかきます。",
    ex_id: "Saya menulis di buku catatan.",
  },
  {
    id: 68,
    cat: "Sekolah",
    hira: "えんぴつ",
    kanji: "鉛筆",
    roma: "Enpitsu",
    arti: "Pensil",
    ex_jp: "えんぴつをかしてください。",
    ex_id: "Tolong pinjami pensil.",
  },
  {
    id: 69,
    cat: "Sekolah",
    hira: "かばん",
    kanji: "鞄",
    roma: "Kaban",
    arti: "Tas",
    ex_jp: "あのかばんはいくらですか？",
    ex_id: "Tas itu harganya berapa?",
  },
  {
    id: 70,
    cat: "Sekolah",
    hira: "つくえ",
    kanji: "机",
    roma: "Tsukue",
    arti: "Meja",
    ex_jp: "つくえのうえにほんがあります。",
    ex_id: "Di atas meja ada buku.",
  },
  {
    id: 71,
    cat: "Sekolah",
    hira: "いす",
    kanji: "椅子",
    roma: "Isu",
    arti: "Kursi",
    ex_jp: "いすにすわってください。",
    ex_id: "Silakan duduk di kursi.",
  },
  {
    id: 72,
    cat: "Sekolah",
    hira: "こくばん",
    kanji: "黒板",
    roma: "Kokuban",
    arti: "Papan tulis",
    ex_jp: "こくばんをみてください。",
    ex_id: "Tolong lihat papan tulis.",
  },
  {
    id: 73,
    cat: "Sekolah",
    hira: "じゅぎょう",
    kanji: "授業",
    roma: "Jugyou",
    arti: "Pelajaran / Kelas",
    ex_jp: "じゅぎょうはくじにはじまります。",
    ex_id: "Pelajaran mulai jam sembilan.",
  },

  // ── Pekerjaan ──
  {
    id: 74,
    cat: "Pekerjaan",
    hira: "しごと",
    kanji: "仕事",
    roma: "Shigoto",
    arti: "Pekerjaan",
    ex_jp: "しごとはたのしいですか？",
    ex_id: "Apakah pekerjaanmu menyenangkan?",
  },
  {
    id: 75,
    cat: "Pekerjaan",
    hira: "かいしゃ",
    kanji: "会社",
    roma: "Kaisha",
    arti: "Perusahaan",
    ex_jp: "かいしゃまでバスでいきます。",
    ex_id: "Ke kantor naik bus.",
  },
  {
    id: 76,
    cat: "Pekerjaan",
    hira: "いしゃ",
    kanji: "医者",
    roma: "Isha",
    arti: "Dokter",
    ex_jp: "いしゃにみてもらいました。",
    ex_id: "Sudah diperiksa dokter.",
  },
  {
    id: 77,
    cat: "Pekerjaan",
    hira: "かんごし",
    kanji: "看護師",
    roma: "Kangoshi",
    arti: "Perawat",
    ex_jp: "かんごしはたいへんなしごとです。",
    ex_id: "Perawat adalah pekerjaan yang berat.",
  },
  {
    id: 78,
    cat: "Pekerjaan",
    hira: "きょうし",
    kanji: "教師",
    roma: "Kyoushi",
    arti: "Pengajar",
    ex_jp: "きょうしになりたいです。",
    ex_id: "Saya ingin menjadi pengajar.",
  },
  {
    id: 79,
    cat: "Pekerjaan",
    hira: "エンジニア",
    kanji: "—",
    roma: "Enjinia",
    arti: "Engineer",
    ex_jp: "エンジニアとしてはたらいています。",
    ex_id: "Saya bekerja sebagai engineer.",
  },
  {
    id: 80,
    cat: "Pekerjaan",
    hira: "けいさつかん",
    kanji: "警察官",
    roma: "Keisatsukan",
    arti: "Polisi",
    ex_jp: "けいさつかんがきました。",
    ex_id: "Polisi datang.",
  },
  {
    id: 81,
    cat: "Pekerjaan",
    hira: "しょうぼうし",
    kanji: "消防士",
    roma: "Shoubоushi",
    arti: "Pemadam kebakaran",
    ex_jp: "しょうぼうしはゆうかんです。",
    ex_id: "Pemadam kebakaran itu berani.",
  },
  {
    id: 82,
    cat: "Pekerjaan",
    hira: "りょうりにん",
    kanji: "料理人",
    roma: "Ryourinin",
    arti: "Koki / Juru masak",
    ex_jp: "このりょうりにんはゆうめいです。",
    ex_id: "Koki ini terkenal.",
  },
  {
    id: 83,
    cat: "Pekerjaan",
    hira: "うんてんし",
    kanji: "運転士",
    roma: "Untenshi",
    arti: "Pengemudi",
    ex_jp: "うんてんしはしんせつです。",
    ex_id: "Pengemudinya ramah.",
  },
  {
    id: 84,
    cat: "Pekerjaan",
    hira: "かいごし",
    kanji: "介護士",
    roma: "Kaigoshi",
    arti: "Perawat lansia",
    ex_jp: "かいごしはかんじゃをたすけます。",
    ex_id: "Perawat lansia membantu pasien.",
  },
  {
    id: 85,
    cat: "Pekerjaan",
    hira: "かんりしゃ",
    kanji: "管理者",
    roma: "Kanrisha",
    arti: "Manajer",
    ex_jp: "かんりしゃにほうこくします。",
    ex_id: "Laporan ke manajer.",
  },

  // ── Makanan ──
  {
    id: 86,
    cat: "Makanan",
    hira: "たべもの",
    kanji: "食べ物",
    roma: "Tabemono",
    arti: "Makanan",
    ex_jp: "すきなたべものはなんですか？",
    ex_id: "Makanan favorit kamu apa?",
  },
  {
    id: 87,
    cat: "Makanan",
    hira: "のみもの",
    kanji: "飲み物",
    roma: "Nomimono",
    arti: "Minuman",
    ex_jp: "のみものをちゅうもんします。",
    ex_id: "Saya memesan minuman.",
  },
  {
    id: 88,
    cat: "Makanan",
    hira: "ごはん",
    kanji: "ご飯",
    roma: "Gohan",
    arti: "Nasi / Makan",
    ex_jp: "ごはんをたべましょう！",
    ex_id: "Mari makan!",
  },
  {
    id: 89,
    cat: "Makanan",
    hira: "パン",
    kanji: "—",
    roma: "Pan",
    arti: "Roti",
    ex_jp: "あさごはんにパンをたべます。",
    ex_id: "Saya makan roti untuk sarapan.",
  },
  {
    id: 90,
    cat: "Makanan",
    hira: "さかな",
    kanji: "魚",
    roma: "Sakana",
    arti: "Ikan",
    ex_jp: "さかなはからだにいいです。",
    ex_id: "Ikan baik untuk tubuh.",
  },
  {
    id: 91,
    cat: "Makanan",
    hira: "にく",
    kanji: "肉",
    roma: "Niku",
    arti: "Daging",
    ex_jp: "にくがすきです。",
    ex_id: "Saya suka daging.",
  },
  {
    id: 92,
    cat: "Makanan",
    hira: "やさい",
    kanji: "野菜",
    roma: "Yasai",
    arti: "Sayuran",
    ex_jp: "やさいをたくさんたべてください。",
    ex_id: "Silakan makan banyak sayuran.",
  },
  {
    id: 93,
    cat: "Makanan",
    hira: "たまご",
    kanji: "卵",
    roma: "Tamago",
    arti: "Telur",
    ex_jp: "たまごがひとつほしいです。",
    ex_id: "Saya mau satu butir telur.",
  },
  {
    id: 94,
    cat: "Makanan",
    hira: "ラーメン",
    kanji: "—",
    roma: "Raamen",
    arti: "Ramen",
    ex_jp: "ラーメンはおいしいですね！",
    ex_id: "Ramen itu enak ya!",
  },
  {
    id: 95,
    cat: "Makanan",
    hira: "すし",
    kanji: "寿司",
    roma: "Sushi",
    arti: "Sushi",
    ex_jp: "すしがだいすきです。",
    ex_id: "Saya sangat suka sushi.",
  },
  {
    id: 96,
    cat: "Makanan",
    hira: "おちゃ",
    kanji: "お茶",
    roma: "Ocha",
    arti: "Teh",
    ex_jp: "おちゃをいっぱいどうぞ。",
    ex_id: "Silakan minum teh.",
  },
  {
    id: 97,
    cat: "Makanan",
    hira: "みず",
    kanji: "水",
    roma: "Mizu",
    arti: "Air",
    ex_jp: "みずをのみたいです。",
    ex_id: "Saya ingin minum air.",
  },
  {
    id: 98,
    cat: "Makanan",
    hira: "ジュース",
    kanji: "—",
    roma: "Juusu",
    arti: "Jus",
    ex_jp: "オレンジジュースをください。",
    ex_id: "Tolong jus jeruk.",
  },
  {
    id: 99,
    cat: "Makanan",
    hira: "くだもの",
    kanji: "果物",
    roma: "Kudamono",
    arti: "Buah-buahan",
    ex_jp: "くだものがすきですか？",
    ex_id: "Apakah kamu suka buah?",
  },
  {
    id: 100,
    cat: "Makanan",
    hira: "あまい",
    kanji: "甘い",
    roma: "Amai",
    arti: "Manis",
    ex_jp: "このケーキはとてもあまいです。",
    ex_id: "Kue ini sangat manis.",
  },
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
const CATS = [
  "Semua",
  "Salam",
  "Angka",
  "Warna",
  "Waktu",
  "Keluarga",
  "Sekolah",
  "Pekerjaan",
  "Makanan",
];
let activeTab = "Semua";
let searchQ = "";
let favorites = JSON.parse(localStorage.getItem("nh_fav") || "[]");
let openCards = new Set();

// ── DOM refs ──
const tabsWrap = document.getElementById("tabsWrap");
const vocabList = document.getElementById("vocabList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const showCount = document.getElementById("showCount");
const favCount = document.getElementById("favCount");
const headerCount = document.getElementById("headerCount");
const toast = document.getElementById("toast");

// ═══════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════
CATS.forEach((cat) => {
  const btn = document.createElement("button");
  btn.className = "tab-btn" + (cat === activeTab ? " active" : "");
  btn.textContent = cat === "Semua" ? "✦ Semua" : cat;
  btn.onclick = () => {
    activeTab = cat;
    render();
    updateTabs();
  };
  tabsWrap.appendChild(btn);
});

function updateTabs() {
  tabsWrap.querySelectorAll(".tab-btn").forEach((b, i) => {
    b.classList.toggle("active", CATS[i] === activeTab);
  });
}

// ═══════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════
searchInput.addEventListener("input", (e) => {
  searchQ = e.target.value.toLowerCase();
  render();
});

// ═══════════════════════════════════════════
// AUDIO
// ═══════════════════════════════════════════
function speak(text) {
  if (!window.speechSynthesis)
    return showToast("Audio tidak tersedia di browser ini");
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  utter.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const jpVoice = voices.find((v) => v.lang.startsWith("ja"));
  if (jpVoice) utter.voice = jpVoice;
  window.speechSynthesis.speak(utter);
}

// Preload voices
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ═══════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════
function render() {
  const filtered = DATA.filter((w) => {
    const matchCat = activeTab === "Semua" || w.cat === activeTab;
    const q = searchQ;
    const matchQ =
      !q ||
      w.hira.includes(q) ||
      w.kanji.toLowerCase().includes(q) ||
      w.roma.toLowerCase().includes(q) ||
      w.arti.toLowerCase().includes(q) ||
      w.cat.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  vocabList.innerHTML = "";
  showCount.textContent = filtered.length;
  favCount.textContent = favorites.length;
  headerCount.textContent = filtered.length;
  emptyState.style.display = filtered.length ? "none" : "block";

  filtered.forEach((w, i) => {
    const isFav = favorites.includes(w.id);
    const isOpen = openCards.has(w.id);

    const card = document.createElement("div");
    card.className = "vocab-card";
    card.style.animationDelay = Math.min(i * 0.025, 0.4) + "s";

    card.innerHTML = `
      <div class="vocab-main">
        <span class="vocab-num">${w.id}</span>
        <div class="vocab-kana">
          <div class="hira">${w.hira}<span class="cat-badge">${w.cat}</span></div>
          <div class="kanji">${w.kanji !== "—" ? w.kanji : ""}</div>
        </div>
        <span class="vocab-romaji">${w.roma}</span>
        <span class="vocab-arti">${w.arti}</span>
        <div class="vocab-actions">
          <button class="btn-icon${isFav ? " fav-active" : ""}" title="Favorit" onclick="toggleFav(${w.id}, this)">
            ${isFav ? "❤️" : "🤍"}
          </button>
          <button class="btn-icon" title="Audio" onclick="speak('${w.hira.replace(/'/g, "\\'")}')">🔊</button>
          <button class="btn-icon" title="Contoh kalimat" onclick="toggleEx(${w.id}, this)">
            ${isOpen ? "🔼" : "🔽"}
          </button>
        </div>
      </div>
      <div class="vocab-example${isOpen ? " open" : ""}" id="ex-${w.id}">
        <div class="ex-jp">${w.ex_jp}</div>
        <div class="ex-id">${w.ex_id}</div>
      </div>`;

    vocabList.appendChild(card);
  });
}

// ═══════════════════════════════════════════
// FAVORIT
// ═══════════════════════════════════════════
function toggleFav(id, btn) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    btn.textContent = "❤️";
    btn.classList.add("fav-active");
    showToast("Ditambahkan ke favorit ❤️");
  } else {
    favorites.splice(idx, 1);
    btn.textContent = "🤍";
    btn.classList.remove("fav-active");
    showToast("Dihapus dari favorit");
  }
  localStorage.setItem("nh_fav", JSON.stringify(favorites));
  favCount.textContent = favorites.length;
}

// ═══════════════════════════════════════════
// CONTOH KALIMAT TOGGLE
// ═══════════════════════════════════════════
function toggleEx(id, btn) {
  const ex = document.getElementById("ex-" + id);
  const open = ex.classList.toggle("open");
  btn.textContent = open ? "🔼" : "🔽";
  if (open) openCards.add(id);
  else openCards.delete(id);
}

// ── Init ──
render();
