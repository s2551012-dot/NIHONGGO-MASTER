/* ══════════════════════════════════════════════════════════
   BANK SOAL  –  20 soal per kategori per level
   Format setiap soal:
   { jp, reading, text, choices:[...4], answer:0..3, detail }
══════════════════════════════════════════════════════════ */
const QUESTIONS = {
  /* ─────────── VOCAB ─────────── */
  vocab: {
    N5: [
      {
        jp: "犬",
        reading: "いぬ",
        text: "Apa arti kata ini?",
        choices: ["Anjing", "Kucing", "Ikan", "Burung"],
        answer: 0,
        detail: "犬(いぬ) = anjing, hewan peliharaan yang umum.",
      },
      {
        jp: "水",
        reading: "みず",
        text: "Apa arti kata ini?",
        choices: ["Api", "Angin", "Air", "Tanah"],
        answer: 2,
        detail: "水(みず) = air.",
      },
      {
        jp: "食べる",
        reading: "たべる",
        text: "Apa arti kata ini?",
        choices: ["Tidur", "Makan", "Minum", "Berlari"],
        answer: 1,
        detail: "食べる(たべる) = makan.",
      },
      {
        jp: "学校",
        reading: "がっこう",
        text: "Apa arti kata ini?",
        choices: ["Rumah", "Toko", "Sekolah", "Kantor"],
        answer: 2,
        detail: "学校(がっこう) = sekolah.",
      },
      {
        jp: "大きい",
        reading: "おおきい",
        text: "Apa arti kata sifat ini?",
        choices: ["Kecil", "Besar", "Panas", "Dingin"],
        answer: 1,
        detail: "大きい(おおきい) = besar.",
      },
      {
        jp: "山",
        reading: "やま",
        text: "Apa arti kata ini?",
        choices: ["Laut", "Sungai", "Gunung", "Hutan"],
        answer: 2,
        detail: "山(やま) = gunung.",
      },
      {
        jp: "電話",
        reading: "でんわ",
        text: "Apa arti kata ini?",
        choices: ["Televisi", "Telepon", "Radio", "Komputer"],
        answer: 1,
        detail: "電話(でんわ) = telepon.",
      },
      {
        jp: "白い",
        reading: "しろい",
        text: "Apa arti kata sifat ini?",
        choices: ["Hitam", "Merah", "Putih", "Biru"],
        answer: 2,
        detail: "白い(しろい) = putih.",
      },
      {
        jp: "行く",
        reading: "いく",
        text: "Apa arti kata kerja ini?",
        choices: ["Datang", "Pergi", "Pulang", "Berhenti"],
        answer: 1,
        detail: "行く(いく) = pergi.",
      },
      {
        jp: "友達",
        reading: "ともだち",
        text: "Apa arti kata ini?",
        choices: ["Guru", "Teman", "Keluarga", "Tetangga"],
        answer: 1,
        detail: "友達(ともだち) = teman.",
      },
      {
        jp: "本",
        reading: "ほん",
        text: "Apa arti kata ini?",
        choices: ["Pena", "Buku", "Meja", "Kursi"],
        answer: 1,
        detail: "本(ほん) = buku.",
      },
      {
        jp: "猫",
        reading: "ねこ",
        text: "Apa arti kata ini?",
        choices: ["Kelinci", "Tikus", "Kucing", "Sapi"],
        answer: 2,
        detail: "猫(ねこ) = kucing.",
      },
      {
        jp: "右",
        reading: "みぎ",
        text: "Apa arti kata ini?",
        choices: ["Kiri", "Bawah", "Atas", "Kanan"],
        answer: 3,
        detail: "右(みぎ) = kanan.",
      },
      {
        jp: "新しい",
        reading: "あたらしい",
        text: "Apa arti kata sifat ini?",
        choices: ["Tua/Lama", "Baru", "Bersih", "Kotor"],
        answer: 1,
        detail: "新しい(あたらしい) = baru.",
      },
      {
        jp: "病院",
        reading: "びょういん",
        text: "Apa arti kata ini?",
        choices: ["Apotek", "Klinik", "Rumah sakit", "Puskesmas"],
        answer: 2,
        detail: "病院(びょういん) = rumah sakit.",
      },
      {
        jp: "飲む",
        reading: "のむ",
        text: "Apa arti kata kerja ini?",
        choices: ["Makan", "Minum", "Memasak", "Membeli"],
        answer: 1,
        detail: "飲む(のむ) = minum.",
      },
      {
        jp: "空",
        reading: "そら",
        text: "Apa arti kata ini?",
        choices: ["Laut", "Bumi", "Langit", "Hutan"],
        answer: 2,
        detail: "空(そら) = langit.",
      },
      {
        jp: "赤い",
        reading: "あかい",
        text: "Apa arti kata sifat ini?",
        choices: ["Kuning", "Hijau", "Biru", "Merah"],
        answer: 3,
        detail: "赤い(あかい) = merah.",
      },
      {
        jp: "駅",
        reading: "えき",
        text: "Apa arti kata ini?",
        choices: ["Halte bus", "Bandara", "Stasiun kereta", "Pelabuhan"],
        answer: 2,
        detail: "駅(えき) = stasiun (kereta).",
      },
      {
        jp: "毎日",
        reading: "まいにち",
        text: "Apa arti kata ini?",
        choices: [
          "Kadang-kadang",
          "Setiap minggu",
          "Setiap hari",
          "Setiap bulan",
        ],
        answer: 2,
        detail: "毎日(まいにち) = setiap hari.",
      },
    ],
    N4: [
      {
        jp: "医者",
        reading: "いしゃ",
        text: "Apa arti kata ini?",
        choices: ["Perawat", "Dokter", "Apoteker", "Bidan"],
        answer: 1,
        detail: "医者(いしゃ) = dokter.",
      },
      {
        jp: "電車",
        reading: "でんしゃ",
        text: "Apa arti kata ini?",
        choices: ["Bis", "Taksi", "Kereta listrik", "Pesawat"],
        answer: 2,
        detail: "電車(でんしゃ) = kereta listrik.",
      },
      {
        jp: "集める",
        reading: "あつめる",
        text: "Apa arti kata kerja ini?",
        choices: ["Menyebar", "Mengumpulkan", "Membuang", "Membagi"],
        answer: 1,
        detail: "集める(あつめる) = mengumpulkan.",
      },
      {
        jp: "安全",
        reading: "あんぜん",
        text: "Apa arti kata ini?",
        choices: ["Bahaya", "Aman", "Berani", "Sehat"],
        answer: 1,
        detail: "安全(あんぜん) = aman/keselamatan.",
      },
      {
        jp: "運動",
        reading: "うんどう",
        text: "Apa arti kata ini?",
        choices: ["Istirahat", "Tidur", "Olahraga", "Belajar"],
        answer: 2,
        detail: "運動(うんどう) = olahraga/latihan.",
      },
      {
        jp: "遅い",
        reading: "おそい",
        text: "Apa arti kata sifat ini?",
        choices: ["Cepat", "Panjang", "Lambat", "Pendek"],
        answer: 2,
        detail: "遅い(おそい) = lambat / terlambat.",
      },
      {
        jp: "辞書",
        reading: "じしょ",
        text: "Apa arti kata ini?",
        choices: ["Novel", "Kamus", "Majalah", "Ensiklopedia"],
        answer: 1,
        detail: "辞書(じしょ) = kamus.",
      },
      {
        jp: "消える",
        reading: "きえる",
        text: "Apa arti kata kerja ini?",
        choices: ["Menyala", "Menghilang", "Muncul", "Tumbuh"],
        answer: 1,
        detail: "消える(きえる) = menghilang/padam.",
      },
      {
        jp: "経験",
        reading: "けいけん",
        text: "Apa arti kata ini?",
        choices: ["Mimpi", "Pengalaman", "Harapan", "Rencana"],
        answer: 1,
        detail: "経験(けいけん) = pengalaman.",
      },
      {
        jp: "交通",
        reading: "こうつう",
        text: "Apa arti kata ini?",
        choices: ["Pertanian", "Lalu lintas", "Perdagangan", "Industri"],
        answer: 1,
        detail: "交通(こうつう) = lalu lintas/transportasi.",
      },
      {
        jp: "大切",
        reading: "たいせつ",
        text: "Apa arti kata sifat ini?",
        choices: ["Murah", "Sulit", "Penting", "Mudah"],
        answer: 2,
        detail: "大切(たいせつ) = penting/berharga.",
      },
      {
        jp: "直す",
        reading: "なおす",
        text: "Apa arti kata kerja ini?",
        choices: ["Memecahkan", "Memperbaiki", "Menghancurkan", "Membangun"],
        answer: 1,
        detail: "直す(なおす) = memperbaiki.",
      },
      {
        jp: "久しぶり",
        reading: "ひさしぶり",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Selamat datang",
          "Sampai jumpa",
          "Lama tidak jumpa",
          "Selamat pagi",
        ],
        answer: 2,
        detail: "久しぶり(ひさしぶり) = lama tidak bertemu.",
      },
      {
        jp: "普通",
        reading: "ふつう",
        text: "Apa arti kata ini?",
        choices: ["Spesial", "Biasa/Normal", "Aneh", "Mahal"],
        answer: 1,
        detail: "普通(ふつう) = biasa/normal.",
      },
      {
        jp: "文化",
        reading: "ぶんか",
        text: "Apa arti kata ini?",
        choices: ["Bahasa", "Seni", "Budaya", "Sejarah"],
        answer: 2,
        detail: "文化(ぶんか) = budaya.",
      },
      {
        jp: "迷子",
        reading: "まいご",
        text: "Apa arti kata ini?",
        choices: ["Turis", "Anak tersesat", "Pengembara", "Penjelajah"],
        answer: 1,
        detail: "迷子(まいご) = anak/orang yang tersesat.",
      },
      {
        jp: "役に立つ",
        reading: "やくにたつ",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Menyusahkan",
          "Berguna/Bermanfaat",
          "Membingungkan",
          "Menganggu",
        ],
        answer: 1,
        detail: "役に立つ(やくにたつ) = berguna/bermanfaat.",
      },
      {
        jp: "理由",
        reading: "りゆう",
        text: "Apa arti kata ini?",
        choices: ["Hasil", "Alasan", "Proses", "Tujuan"],
        answer: 1,
        detail: "理由(りゆう) = alasan.",
      },
      {
        jp: "連絡",
        reading: "れんらく",
        text: "Apa arti kata ini?",
        choices: ["Pertemuan", "Perpisahan", "Hubungan/Kontak", "Konflik"],
        answer: 2,
        detail: "連絡(れんらく) = menghubungi/kontak.",
      },
      {
        jp: "笑う",
        reading: "わらう",
        text: "Apa arti kata kerja ini?",
        choices: ["Menangis", "Berteriak", "Tertawa", "Berbisik"],
        answer: 2,
        detail: "笑う(わらう) = tertawa.",
      },
    ],
    N3: [
      {
        jp: "影響",
        reading: "えいきょう",
        text: "Apa arti kata ini?",
        choices: ["Perubahan", "Pengaruh", "Reaksi", "Tanggapan"],
        answer: 1,
        detail: "影響(えいきょう) = pengaruh.",
      },
      {
        jp: "環境",
        reading: "かんきょう",
        text: "Apa arti kata ini?",
        choices: ["Cuaca", "Iklim", "Lingkungan", "Alam"],
        answer: 2,
        detail: "環境(かんきょう) = lingkungan.",
      },
      {
        jp: "管理",
        reading: "かんり",
        text: "Apa arti kata ini?",
        choices: ["Laporan", "Manajemen/Pengelolaan", "Rencana", "Survei"],
        answer: 1,
        detail: "管理(かんり) = manajemen/pengelolaan.",
      },
      {
        jp: "議論",
        reading: "ぎろん",
        text: "Apa arti kata ini?",
        choices: ["Cerita", "Debat/Diskusi", "Pengumuman", "Siaran"],
        answer: 1,
        detail: "議論(ぎろん) = debat/diskusi.",
      },
      {
        jp: "工夫",
        reading: "くふう",
        text: "Apa arti kata ini?",
        choices: ["Kemalasan", "Kreativitas/Usaha", "Keberuntungan", "Kejutan"],
        answer: 1,
        detail: "工夫(くふう) = kreativitas/ide untuk memecahkan masalah.",
      },
      {
        jp: "激しい",
        reading: "はげしい",
        text: "Apa arti kata sifat ini?",
        choices: ["Tenang", "Intens/Sengit", "Lemah", "Lambat"],
        answer: 1,
        detail: "激しい(はげしい) = intens/sengit/deras.",
      },
      {
        jp: "支払う",
        reading: "しはらう",
        text: "Apa arti kata kerja ini?",
        choices: ["Menabung", "Membayar", "Meminjam", "Menarik"],
        answer: 1,
        detail: "支払う(しはらう) = membayar.",
      },
      {
        jp: "消費",
        reading: "しょうひ",
        text: "Apa arti kata ini?",
        choices: ["Produksi", "Konsumsi", "Distribusi", "Ekspor"],
        answer: 1,
        detail: "消費(しょうひ) = konsumsi.",
      },
      {
        jp: "推測",
        reading: "すいそく",
        text: "Apa arti kata ini?",
        choices: ["Konfirmasi", "Dugaan/Perkiraan", "Kesimpulan", "Fakta"],
        answer: 1,
        detail: "推測(すいそく) = dugaan/perkiraan.",
      },
      {
        jp: "正確",
        reading: "せいかく",
        text: "Apa arti kata ini?",
        choices: ["Kira-kira", "Tepat/Akurat", "Berlebihan", "Salah"],
        answer: 1,
        detail: "正確(せいかく) = tepat/akurat.",
      },
      {
        jp: "訴える",
        reading: "うったえる",
        text: "Apa arti kata kerja ini?",
        choices: ["Memuji", "Menggugat/Mengadu", "Menolong", "Mendukung"],
        answer: 1,
        detail: "訴える(うったえる) = menggugat/mengadu/memohon.",
      },
      {
        jp: "著しい",
        reading: "いちじるしい",
        text: "Apa arti kata sifat ini?",
        choices: ["Biasa", "Mencolok/Luar biasa", "Tersembunyi", "Tipis"],
        answer: 1,
        detail: "著しい(いちじるしい) = mencolok/sangat terlihat.",
      },
      {
        jp: "打ち明ける",
        reading: "うちあける",
        text: "Apa arti kata kerja ini?",
        choices: [
          "Menyembunyikan",
          "Berterus terang",
          "Melupakan",
          "Mengabaikan",
        ],
        answer: 1,
        detail: "打ち明ける(うちあける) = berterus terang/jujur.",
      },
      {
        jp: "促す",
        reading: "うながす",
        text: "Apa arti kata kerja ini?",
        choices: [
          "Mencegah",
          "Mendorong/Memotivasi",
          "Menghentikan",
          "Melarang",
        ],
        answer: 1,
        detail: "促す(うながす) = mendorong/memotivasi.",
      },
      {
        jp: "丁寧",
        reading: "ていねい",
        text: "Apa arti kata ini?",
        choices: ["Kasar", "Sopan/Teliti", "Keras", "Ceroboh"],
        answer: 1,
        detail: "丁寧(ていねい) = sopan/teliti.",
      },
      {
        jp: "貿易",
        reading: "ぼうえき",
        text: "Apa arti kata ini?",
        choices: [
          "Industri",
          "Pertanian",
          "Perdagangan internasional",
          "Pariwisata",
        ],
        answer: 2,
        detail: "貿易(ぼうえき) = perdagangan internasional.",
      },
      {
        jp: "摩擦",
        reading: "まさつ",
        text: "Apa arti kata ini?",
        choices: ["Kerjasama", "Gesekan/Konflik", "Persatuan", "Harmoni"],
        answer: 1,
        detail: "摩擦(まさつ) = gesekan/konflik.",
      },
      {
        jp: "免除",
        reading: "めんじょ",
        text: "Apa arti kata ini?",
        choices: [
          "Tambahan",
          "Pembebasan/Pengecualian",
          "Hukuman",
          "Kewajiban",
        ],
        answer: 1,
        detail: "免除(めんじょ) = pembebasan/pengecualian.",
      },
      {
        jp: "予防",
        reading: "よぼう",
        text: "Apa arti kata ini?",
        choices: ["Pengobatan", "Pencegahan", "Penyembuhan", "Diagnosa"],
        answer: 1,
        detail: "予防(よぼう) = pencegahan.",
      },
      {
        jp: "欲望",
        reading: "よくぼう",
        text: "Apa arti kata ini?",
        choices: ["Ketakutan", "Hasrat/Keinginan", "Kesedihan", "Ketenangan"],
        answer: 1,
        detail: "欲望(よくぼう) = hasrat/keinginan kuat.",
      },
    ],
    N2: [
      {
        jp: "遺産",
        reading: "いさん",
        text: "Apa arti kata ini?",
        choices: ["Warisan", "Inovasi", "Tradisi", "Modernitas"],
        answer: 0,
        detail: "遺産(いさん) = warisan.",
      },
      {
        jp: "一概に",
        reading: "いちがいに",
        text: "Apa arti kata ini?",
        choices: [
          "Secara rinci",
          "Tanpa terkecuali/Secara umum",
          "Perlahan",
          "Sepenuhnya",
        ],
        answer: 1,
        detail: "一概に(いちがいに) = tanpa terkecuali / secara keseluruhan.",
      },
      {
        jp: "架空",
        reading: "かくう",
        text: "Apa arti kata ini?",
        choices: ["Nyata", "Fiktif/Imajiner", "Historis", "Teoritis"],
        answer: 1,
        detail: "架空(かくう) = fiktif/imajiner.",
      },
      {
        jp: "過渡期",
        reading: "かとき",
        text: "Apa arti kata ini?",
        choices: ["Puncak", "Masa peralihan", "Kemunduran", "Zaman keemasan"],
        answer: 1,
        detail: "過渡期(かとき) = masa peralihan/transisi.",
      },
      {
        jp: "看過",
        reading: "かんか",
        text: "Apa arti kata ini?",
        choices: [
          "Mengamati dengan cermat",
          "Mengabaikan/Melewatkan",
          "Melaporkan",
          "Mencatat",
        ],
        answer: 1,
        detail: "看過(かんか) = mengabaikan/melewatkan begitu saja.",
      },
      {
        jp: "喫緊",
        reading: "きっきん",
        text: "Apa arti kata ini?",
        choices: ["Jangka panjang", "Mendesak/Urgent", "Opsional", "Sementara"],
        answer: 1,
        detail: "喫緊(きっきん) = mendesak/urgent.",
      },
      {
        jp: "際立つ",
        reading: "きわだつ",
        text: "Apa arti kata kerja ini?",
        choices: ["Menyatu", "Menonjol/Mencolok", "Menghilang", "Melebur"],
        answer: 1,
        detail: "際立つ(きわだつ) = menonjol/mencolok.",
      },
      {
        jp: "空虚",
        reading: "くうきょ",
        text: "Apa arti kata ini?",
        choices: ["Penuh", "Hampa/Kosong", "Padat", "Berat"],
        answer: 1,
        detail: "空虚(くうきょ) = hampa/kosong.",
      },
      {
        jp: "懸念",
        reading: "けねん",
        text: "Apa arti kata ini?",
        choices: ["Harapan", "Kekhawatiran", "Kegembiraan", "Kepuasan"],
        answer: 1,
        detail: "懸念(けねん) = kekhawatiran/ketakutan.",
      },
      {
        jp: "顕著",
        reading: "けんちょ",
        text: "Apa arti kata ini?",
        choices: ["Tersembunyi", "Mencolok/Jelas", "Samar", "Kecil"],
        answer: 1,
        detail: "顕著(けんちょ) = mencolok/sangat jelas.",
      },
      {
        jp: "公正",
        reading: "こうせい",
        text: "Apa arti kata ini?",
        choices: ["Berat sebelah", "Adil/Tidak berpihak", "Korup", "Palsu"],
        answer: 1,
        detail: "公正(こうせい) = adil/tidak berpihak.",
      },
      {
        jp: "根拠",
        reading: "こんきょ",
        text: "Apa arti kata ini?",
        choices: ["Dugaan", "Dasar/Bukti", "Opini", "Perasaan"],
        answer: 1,
        detail: "根拠(こんきょ) = dasar/bukti/alasan.",
      },
      {
        jp: "自覚",
        reading: "じかく",
        text: "Apa arti kata ini?",
        choices: ["Keraguan", "Kesadaran diri", "Kebingungan", "Penyesalan"],
        answer: 1,
        detail: "自覚(じかく) = kesadaran diri.",
      },
      {
        jp: "示唆",
        reading: "しさ",
        text: "Apa arti kata ini?",
        choices: ["Perintah", "Saran/Isyarat", "Larangan", "Penolakan"],
        answer: 1,
        detail: "示唆(しさ) = saran/isyarat/implikasi.",
      },
      {
        jp: "就任",
        reading: "しゅうにん",
        text: "Apa arti kata ini?",
        choices: [
          "Pengunduran diri",
          "Pengangkatan/Pelantikan",
          "Promosi",
          "Transfer",
        ],
        answer: 1,
        detail: "就任(しゅうにん) = pengangkatan/pelantikan jabatan.",
      },
      {
        jp: "措置",
        reading: "そち",
        text: "Apa arti kata ini?",
        choices: ["Masalah", "Tindakan/Langkah", "Hambatan", "Kegagalan"],
        answer: 1,
        detail: "措置(そち) = tindakan/langkah yang diambil.",
      },
      {
        jp: "対処",
        reading: "たいしょ",
        text: "Apa arti kata ini?",
        choices: [
          "Mengabaikan",
          "Menangani/Mengatasi",
          "Menyerah",
          "Menghindari",
        ],
        answer: 1,
        detail: "対処(たいしょ) = menangani/mengatasi masalah.",
      },
      {
        jp: "端的",
        reading: "たんてき",
        text: "Apa arti kata ini?",
        choices: ["Bertele-tele", "Langsung/Singkat", "Panjang lebar", "Rumit"],
        answer: 1,
        detail: "端的(たんてき) = langsung/singkat pada inti.",
      },
      {
        jp: "派生",
        reading: "はせい",
        text: "Apa arti kata ini?",
        choices: ["Asal-usul", "Turunan/Derivasi", "Puncak", "Akhir"],
        answer: 1,
        detail: "派生(はせい) = turunan/derivasi.",
      },
      {
        jp: "普及",
        reading: "ふきゅう",
        text: "Apa arti kata ini?",
        choices: [
          "Kemerosotan",
          "Penyebaran/Popularisasi",
          "Pembatasan",
          "Penghapusan",
        ],
        answer: 1,
        detail: "普及(ふきゅう) = penyebaran/popularisasi.",
      },
    ],
    N1: [
      {
        jp: "逡巡",
        reading: "しゅんじゅん",
        text: "Apa arti kata ini?",
        choices: [
          "Tekad kuat",
          "Keraguan/Keragu-raguan",
          "Keberanian",
          "Keyakinan",
        ],
        answer: 1,
        detail: "逡巡(しゅんじゅん) = keragu-raguan/tidak bisa memutuskan.",
      },
      {
        jp: "諦観",
        reading: "ていかん",
        text: "Apa arti kata ini?",
        choices: [
          "Harapan besar",
          "Penerimaan pasrah",
          "Ambisi tinggi",
          "Perlawanan",
        ],
        answer: 1,
        detail: "諦観(ていかん) = pandangan pasrah/penerimaan akan kenyataan.",
      },
      {
        jp: "徒労",
        reading: "とろう",
        text: "Apa arti kata ini?",
        choices: [
          "Kerja keras berbuah",
          "Usaha sia-sia",
          "Prestasi besar",
          "Keberhasilan",
        ],
        answer: 1,
        detail: "徒労(とろう) = usaha yang sia-sia.",
      },
      {
        jp: "忌憚",
        reading: "きたん",
        text: "Apa arti kata ini?",
        choices: [
          "Sanjungan",
          "Keengganan berbicara jujur",
          "Persetujuan",
          "Pujian",
        ],
        answer: 1,
        detail:
          "忌憚(きたん) = keengganan untuk berbicara jujur karena sungkan.",
      },
      {
        jp: "齟齬",
        reading: "そご",
        text: "Apa arti kata ini?",
        choices: [
          "Kesepakatan",
          "Ketidakcocokan/Kesenjangan",
          "Harmoni",
          "Sinergi",
        ],
        answer: 1,
        detail: "齟齬(そご) = ketidakcocokan/kesenjangan antara dua hal.",
      },
      {
        jp: "敷衍",
        reading: "ふえん",
        text: "Apa arti kata ini?",
        choices: [
          "Meringkas",
          "Mengelaborasi/Menjelaskan lebih lanjut",
          "Menyembunyikan",
          "Menyederhanakan",
        ],
        answer: 1,
        detail: "敷衍(ふえん) = mengelaborasi/menjelaskan secara lebih rinci.",
      },
      {
        jp: "憂慮",
        reading: "ゆうりょ",
        text: "Apa arti kata ini?",
        choices: [
          "Ketenangan",
          "Kekhawatiran mendalam",
          "Kebahagiaan",
          "Kepercayaan",
        ],
        answer: 1,
        detail: "憂慮(ゆうりょ) = kekhawatiran yang mendalam.",
      },
      {
        jp: "乖離",
        reading: "かいり",
        text: "Apa arti kata ini?",
        choices: ["Menyatu", "Menjauh/Menyimpang", "Mendekati", "Bergabung"],
        answer: 1,
        detail: "乖離(かいり) = menjauh/menyimpang dari sesuatu.",
      },
      {
        jp: "吟味",
        reading: "ぎんみ",
        text: "Apa arti kata ini?",
        choices: [
          "Mengabaikan",
          "Memeriksa secara teliti",
          "Menyetujui tanpa pikir",
          "Menolak",
        ],
        answer: 1,
        detail: "吟味(ぎんみ) = memeriksa/mempertimbangkan secara teliti.",
      },
      {
        jp: "醸成",
        reading: "じょうせい",
        text: "Apa arti kata ini?",
        choices: [
          "Menghancurkan",
          "Menumbuhkan/Memupuk",
          "Menghalangi",
          "Membekukan",
        ],
        answer: 1,
        detail:
          "醸成(じょうせい) = menumbuhkan/memupuk (suasana, kepercayaan, dll.).",
      },
      {
        jp: "刹那",
        reading: "せつな",
        text: "Apa arti kata ini?",
        choices: ["Keabadian", "Sejenak/Sesaat", "Masa lalu", "Masa depan"],
        answer: 1,
        detail: "刹那(せつな) = sejenak/sesaat — momen yang sangat singkat.",
      },
      {
        jp: "拙速",
        reading: "せっそく",
        text: "Apa arti kata ini?",
        choices: [
          "Lambat tapi sempurna",
          "Cepat tapi ceroboh",
          "Penuh persiapan",
          "Sangat teliti",
        ],
        answer: 1,
        detail: "拙速(せっそく) = terburu-buru sehingga hasil kurang baik.",
      },
      {
        jp: "懊悩",
        reading: "おうのう",
        text: "Apa arti kata ini?",
        choices: [
          "Ketenangan batin",
          "Penderitaan/Kesedihan mendalam",
          "Kegembiraan",
          "Kepuasan",
        ],
        answer: 1,
        detail: "懊悩(おうのう) = penderitaan batin yang mendalam.",
      },
      {
        jp: "蓋然性",
        reading: "がいぜんせい",
        text: "Apa arti kata ini?",
        choices: [
          "Kepastian",
          "Kemungkinan/Probabilitas",
          "Kemustahilan",
          "Keacakan",
        ],
        answer: 1,
        detail: "蓋然性(がいぜんせい) = kemungkinan/probabilitas.",
      },
      {
        jp: "俯瞰",
        reading: "ふかん",
        text: "Apa arti kata ini?",
        choices: [
          "Pandangan sempit",
          "Pandangan menyeluruh dari atas",
          "Pandangan subjektif",
          "Pandangan parsial",
        ],
        answer: 1,
        detail:
          "俯瞰(ふかん) = pandangan menyeluruh dari atas/bird's eye view.",
      },
      {
        jp: "斟酌",
        reading: "しんしゃく",
        text: "Apa arti kata ini?",
        choices: [
          "Mengabaikan",
          "Mempertimbangkan situasi",
          "Memaksakan kehendak",
          "Bersikap acuh",
        ],
        answer: 1,
        detail:
          "斟酌(しんしゃく) = mempertimbangkan keadaan/situasi orang lain.",
      },
      {
        jp: "逐一",
        reading: "ちくいち",
        text: "Apa arti kata ini?",
        choices: [
          "Secara acak",
          "Satu per satu/Secara rinci",
          "Sekaligus",
          "Sebagian saja",
        ],
        answer: 1,
        detail:
          "逐一(ちくいち) = satu per satu / secara rinci / satu demi satu.",
      },
      {
        jp: "截然",
        reading: "せつぜん",
        text: "Apa arti kata ini?",
        choices: [
          "Samar-samar",
          "Jelas/Tegas (memisahkan)",
          "Rumit",
          "Bertahap",
        ],
        answer: 1,
        detail: "截然(せつぜん) = jelas/tegas dalam memisahkan.",
      },
      {
        jp: "頓挫",
        reading: "とんざ",
        text: "Apa arti kata ini?",
        choices: [
          "Kemajuan pesat",
          "Terhenti tiba-tiba/Gagal di tengah jalan",
          "Selesai sempurna",
          "Permulaan bagus",
        ],
        answer: 1,
        detail: "頓挫(とんざ) = terhenti tiba-tiba di tengah jalan.",
      },
      {
        jp: "瓦解",
        reading: "がかい",
        text: "Apa arti kata ini?",
        choices: [
          "Tumbuh pesat",
          "Runtuh/Hancur total",
          "Bertahan kuat",
          "Pulih kembali",
        ],
        answer: 1,
        detail:
          "瓦解(がかい) = runtuh/hancur total (seperti runtuhnya organisasi/sistem).",
      },
    ],
  },

  /* ─────────── KANJI ─────────── */
  kanji: {
    N5: [
      {
        jp: "日",
        reading: "にち/じつ",
        text: "Apa bacaan ON-yomi kanji ini?",
        choices: ["げつ", "にち", "ねん", "じかん"],
        answer: 1,
        detail: "日 = にち(hari) / じつ. Contoh: 日曜日(にちようび) = Minggu.",
      },
      {
        jp: "山",
        reading: "さん/やま",
        text: "Apa bacaan KUN-yomi kanji ini?",
        choices: ["やま", "さん", "うみ", "かわ"],
        answer: 0,
        detail: "山 = やま(gunung). Contoh: 富士山(ふじさん).",
      },
      {
        jp: "水",
        reading: "すい/みず",
        text: "Apa bacaan KUN-yomi kanji ini?",
        choices: ["みず", "すい", "ひ", "かぜ"],
        answer: 0,
        detail: "水 = みず(air). Contoh: 水曜日(すいようび) = Rabu.",
      },
      {
        jp: "大",
        reading: "だい/おお",
        text: "Apa ON-yomi kanji ini?",
        choices: ["おお", "ちい", "だい", "なか"],
        answer: 2,
        detail: "大 = だい(besar). Contoh: 大学(だいがく) = universitas.",
      },
      {
        jp: "人",
        reading: "じん/ひと",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["ひと", "じん", "もの", "かた"],
        answer: 0,
        detail: "人 = ひと(orang). Contoh: 外国人(がいこくじん).",
      },
      {
        jp: "木",
        reading: "もく/き",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["き", "もく", "はな", "みず"],
        answer: 0,
        detail: "木 = き(pohon/kayu). Contoh: 木曜日(もくようび) = Kamis.",
      },
      {
        jp: "火",
        reading: "か/ひ",
        text: "Apa ON-yomi kanji ini?",
        choices: ["ひ", "か", "みず", "き"],
        answer: 1,
        detail: "火 = か(api). Contoh: 火曜日(かようび) = Selasa.",
      },
      {
        jp: "金",
        reading: "きん/かね",
        text: "Apa arti utama kanji ini?",
        choices: ["Besi", "Emas/Uang", "Perak", "Batu"],
        answer: 1,
        detail: "金 = emas/uang. 金曜日(きんようび) = Jumat.",
      },
      {
        jp: "土",
        reading: "ど/つち",
        text: "Apa arti utama kanji ini?",
        choices: ["Air", "Api", "Tanah", "Angin"],
        answer: 2,
        detail: "土 = tanah. 土曜日(どようび) = Sabtu.",
      },
      {
        jp: "月",
        reading: "げつ/つき",
        text: "Apa arti utama kanji ini?",
        choices: ["Matahari", "Bulan", "Bintang", "Bumi"],
        answer: 1,
        detail: "月 = bulan. 月曜日(げつようび) = Senin.",
      },
      {
        jp: "年",
        reading: "ねん/とし",
        text: "Apa ON-yomi kanji ini?",
        choices: ["とし", "つき", "ひ", "ねん"],
        answer: 3,
        detail: "年 = ねん(tahun). Contoh: 今年(ことし) = tahun ini.",
      },
      {
        jp: "子",
        reading: "し/こ",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["こ", "し", "ちゃん", "くん"],
        answer: 0,
        detail: "子 = こ(anak). Contoh: 子供(こども) = anak-anak.",
      },
      {
        jp: "白",
        reading: "はく/しろ",
        text: "Apa arti kanji ini?",
        choices: ["Hitam", "Merah", "Putih", "Kuning"],
        answer: 2,
        detail: "白 = putih. 白い(しろい) = putih.",
      },
      {
        jp: "口",
        reading: "こう/くち",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["め", "みみ", "くち", "はな"],
        answer: 2,
        detail: "口 = くち(mulut).",
      },
      {
        jp: "上",
        reading: "じょう/うえ",
        text: "Apa arti kanji ini?",
        choices: ["Bawah", "Atas", "Kiri", "Kanan"],
        answer: 1,
        detail: "上 = atas. Lawan katanya 下(した) = bawah.",
      },
      {
        jp: "下",
        reading: "か/した",
        text: "Apa arti kanji ini?",
        choices: ["Atas", "Kanan", "Bawah", "Kiri"],
        answer: 2,
        detail: "下 = bawah. Contoh: 地下鉄(ちかてつ) = kereta bawah tanah.",
      },
      {
        jp: "中",
        reading: "ちゅう/なか",
        text: "Apa arti kanji ini?",
        choices: ["Luar", "Dalam/Tengah", "Atas", "Bawah"],
        answer: 1,
        detail: "中 = dalam/tengah. Contoh: 中学校(ちゅうがっこう).",
      },
      {
        jp: "百",
        reading: "ひゃく",
        text: "Angka berapa kanji ini?",
        choices: ["10", "100", "1000", "10000"],
        answer: 1,
        detail: "百(ひゃく) = 100 (seratus).",
      },
      {
        jp: "千",
        reading: "せん",
        text: "Angka berapa kanji ini?",
        choices: ["100", "1000", "10000", "10"],
        answer: 1,
        detail: "千(せん) = 1000 (seribu).",
      },
      {
        jp: "万",
        reading: "まん",
        text: "Angka berapa kanji ini?",
        choices: ["100", "1000", "10000", "100000"],
        answer: 2,
        detail: "万(まん) = 10.000 (sepuluh ribu).",
      },
    ],
    N4: [
      {
        jp: "運",
        reading: "うん/はこ",
        text: "Apa ON-yomi kanji ini?",
        choices: ["はこ", "うん", "どう", "こう"],
        answer: 1,
        detail: "運 = うん(nasib/membawa). Contoh: 運動(うんどう) = olahraga.",
      },
      {
        jp: "意",
        reading: "い",
        text: "Apa arti kanji ini?",
        choices: ["Pikiran", "Niat/Makna", "Hati", "Tubuh"],
        answer: 1,
        detail: "意 = niat/makna. Contoh: 意見(いけん) = pendapat.",
      },
      {
        jp: "院",
        reading: "いん",
        text: "Apa arti kanji ini?",
        choices: ["Sekolah", "Institusi/Gedung besar", "Toko", "Kantor"],
        answer: 1,
        detail: "院 = institusi. Contoh: 病院(びょういん) = rumah sakit.",
      },
      {
        jp: "英",
        reading: "えい",
        text: "Kanji ini sering mewakili bahasa apa?",
        choices: ["Perancis", "Jerman", "Inggris", "Spanyol"],
        answer: 2,
        detail: "英 = Inggris. Contoh: 英語(えいご) = bahasa Inggris.",
      },
      {
        jp: "屋",
        reading: "や/おく",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["みせ", "や", "たな", "かど"],
        answer: 1,
        detail: "屋 = や(toko/orang). Contoh: 本屋(ほんや) = toko buku.",
      },
      {
        jp: "化",
        reading: "か/け",
        text: "Apa arti kanji ini?",
        choices: ["Perubahan", "Tetap", "Stabil", "Sama"],
        answer: 0,
        detail: "化 = perubahan. Contoh: 文化(ぶんか) = budaya.",
      },
      {
        jp: "界",
        reading: "かい",
        text: "Apa arti kanji ini?",
        choices: ["Kelompok", "Dunia/Bidang", "Negara", "Kota"],
        answer: 1,
        detail: "界 = dunia/bidang. Contoh: 世界(せかい) = dunia.",
      },
      {
        jp: "活",
        reading: "かつ",
        text: "Apa arti kanji ini?",
        choices: ["Mati", "Aktif/Hidup", "Diam", "Tidur"],
        answer: 1,
        detail: "活 = aktif/hidup. Contoh: 生活(せいかつ) = kehidupan.",
      },
      {
        jp: "感",
        reading: "かん",
        text: "Apa arti kanji ini?",
        choices: ["Pikiran", "Perasaan/Merasakan", "Tubuh", "Jiwa"],
        answer: 1,
        detail: "感 = perasaan. Contoh: 感謝(かんしゃ) = rasa terima kasih.",
      },
      {
        jp: "漢",
        reading: "かん",
        text: "Kanji ini biasanya merujuk kepada?",
        choices: ["Korea", "China/Han", "Jepang", "Vietnam"],
        answer: 1,
        detail: "漢 = Han/China. Contoh: 漢字(かんじ) = huruf kanji.",
      },
      {
        jp: "館",
        reading: "かん",
        text: "Apa arti kanji ini?",
        choices: ["Toko kecil", "Gedung besar/Aula", "Taman", "Jalan"],
        answer: 1,
        detail: "館 = gedung/aula. Contoh: 図書館(としょかん) = perpustakaan.",
      },
      {
        jp: "帰",
        reading: "き/かえ",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["いく", "くる", "かえる", "のる"],
        answer: 2,
        detail:
          "帰 = かえ(る) (pulang). Contoh: 帰国(きこく) = pulang ke negara asal.",
      },
      {
        jp: "急",
        reading: "きゅう",
        text: "Apa arti kanji ini?",
        choices: ["Lambat", "Mendadak/Cepat", "Terencana", "Lama"],
        answer: 1,
        detail:
          "急 = mendadak/cepat. Contoh: 急行(きゅうこう) = kereta ekspres.",
      },
      {
        jp: "究",
        reading: "きゅう",
        text: "Apa arti kanji ini?",
        choices: [
          "Membuat",
          "Meneliti/Menyelidiki",
          "Membangun",
          "Menghancurkan",
        ],
        answer: 1,
        detail: "究 = meneliti. Contoh: 研究(けんきゅう) = penelitian.",
      },
      {
        jp: "局",
        reading: "きょく",
        text: "Apa arti kanji ini?",
        choices: ["Taman", "Kantor/Biro", "Sekolah", "Rumah"],
        answer: 1,
        detail:
          "局 = kantor/biro. Contoh: 郵便局(ゆうびんきょく) = kantor pos.",
      },
      {
        jp: "計",
        reading: "けい",
        text: "Apa arti kanji ini?",
        choices: ["Mendapat", "Mengukur/Menghitung", "Memberi", "Menarik"],
        answer: 1,
        detail: "計 = mengukur. Contoh: 時計(とけい) = jam.",
      },
      {
        jp: "決",
        reading: "けつ/き",
        text: "Apa arti kanji ini?",
        choices: ["Ragu", "Memutuskan", "Menunggu", "Bertanya"],
        answer: 1,
        detail: "決 = memutuskan. Contoh: 決定(けってい) = keputusan.",
      },
      {
        jp: "健",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: ["Sakit", "Sehat", "Lelah", "Lemah"],
        answer: 1,
        detail: "健 = sehat. Contoh: 健康(けんこう) = kesehatan.",
      },
      {
        jp: "験",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: ["Teori", "Pengalaman/Ujian", "Konsep", "Fiksi"],
        answer: 1,
        detail: "験 = pengalaman/ujian. Contoh: 試験(しけん) = ujian.",
      },
      {
        jp: "古",
        reading: "こ/ふる",
        text: "Apa KUN-yomi kanji ini?",
        choices: ["あたらしい", "ふるい", "おおきい", "ちいさい"],
        answer: 1,
        detail: "古 = ふる(い) (tua/lama). Contoh: 古い(ふるい) = tua/lama.",
      },
    ],
    N3: [
      {
        jp: "寧",
        reading: "ねい",
        text: "Kanji ini sering dipakai dalam kata sifat apa?",
        choices: ["速い", "丁寧な", "大きい", "優しい"],
        answer: 1,
        detail:
          "丁寧(ていねい) = sopan/teliti. 寧 sendiri berarti tenang/hati-hati.",
      },
      {
        jp: "批",
        reading: "ひ",
        text: "Apa arti kanji ini?",
        choices: ["Memuji", "Mengkritik/Meninjau", "Menyetujui", "Mengabaikan"],
        answer: 1,
        detail: "批 = mengkritik. Contoh: 批判(ひはん) = kritikan.",
      },
      {
        jp: "敗",
        reading: "はい",
        text: "Apa arti kanji ini?",
        choices: ["Menang", "Kalah/Gagal", "Bermain", "Berlatih"],
        answer: 1,
        detail: "敗 = kalah/gagal. Contoh: 失敗(しっぱい) = kegagalan.",
      },
      {
        jp: "認",
        reading: "にん",
        text: "Apa arti kanji ini?",
        choices: [
          "Menyangkal",
          "Mengakui/Mengenali",
          "Memungkiri",
          "Melupakan",
        ],
        answer: 1,
        detail:
          "認 = mengakui. Contoh: 認める(みとめる) = mengakui/menyetujui.",
      },
      {
        jp: "納",
        reading: "のう",
        text: "Apa arti kanji ini?",
        choices: ["Mengambil", "Membayar/Menyerahkan", "Meminjam", "Mencuri"],
        answer: 1,
        detail:
          "納 = membayar/menyerahkan. Contoh: 納税(のうぜい) = membayar pajak.",
      },
      {
        jp: "脳",
        reading: "のう",
        text: "Apa arti kanji ini?",
        choices: ["Jantung", "Otak", "Paru-paru", "Perut"],
        answer: 1,
        detail: "脳 = otak. Contoh: 脳科学(のうかがく) = neurosains.",
      },
      {
        jp: "背",
        reading: "せ/はい",
        text: "Apa arti kanji ini?",
        choices: ["Muka/Wajah", "Punggung/Tinggi badan", "Tangan", "Kaki"],
        answer: 1,
        detail:
          "背 = punggung/tinggi badan. Contoh: 背景(はいけい) = latar belakang.",
      },
      {
        jp: "吸",
        reading: "きゅう",
        text: "Apa arti kanji ini?",
        choices: [
          "Mengeluarkan",
          "Menghirup/Menyedot",
          "Membuang",
          "Mendorong",
        ],
        answer: 1,
        detail: "吸 = menghirup. Contoh: 呼吸(こきゅう) = pernapasan.",
      },
      {
        jp: "均",
        reading: "きん",
        text: "Apa arti kanji ini?",
        choices: ["Tidak rata", "Merata/Sama rata", "Berbeda", "Miring"],
        answer: 1,
        detail: "均 = merata. Contoh: 平均(へいきん) = rata-rata.",
      },
      {
        jp: "境",
        reading: "きょう/さかい",
        text: "Apa arti kanji ini?",
        choices: ["Pusat", "Batas/Perbatasan", "Persatuan", "Persamaan"],
        answer: 1,
        detail: "境 = batas. Contoh: 国境(こっきょう) = perbatasan negara.",
      },
      {
        jp: "輸",
        reading: "ゆ/しゅ",
        text: "Apa arti kanji ini?",
        choices: [
          "Menerima",
          "Mengangkut/Mengekspor",
          "Menyimpan",
          "Memproduksi",
        ],
        answer: 1,
        detail: "輸 = mengangkut. Contoh: 輸出(ゆしゅつ) = ekspor.",
      },
      {
        jp: "逃",
        reading: "とう/に",
        text: "Apa arti kanji ini?",
        choices: ["Maju", "Melarikan diri", "Menyerang", "Berdiam"],
        answer: 1,
        detail: "逃 = melarikan diri. Contoh: 逃げる(にげる) = lari/kabur.",
      },
      {
        jp: "担",
        reading: "たん",
        text: "Apa arti kanji ini?",
        choices: [
          "Melepaskan",
          "Menanggung/Memikul",
          "Menghindar",
          "Menyerahkan",
        ],
        answer: 1,
        detail: "担 = menanggung. Contoh: 担当(たんとう) = penanggung jawab.",
      },
      {
        jp: "測",
        reading: "そく",
        text: "Apa arti kanji ini?",
        choices: ["Membuat", "Mengukur", "Menghitung", "Menggambar"],
        answer: 1,
        detail: "測 = mengukur. Contoh: 観測(かんそく) = observasi.",
      },
      {
        jp: "績",
        reading: "せき",
        text: "Apa arti kanji ini?",
        choices: ["Awal", "Prestasi/Hasil", "Rencana", "Kerugian"],
        answer: 1,
        detail: "績 = prestasi. Contoh: 成績(せいせき) = nilai/prestasi.",
      },
      {
        jp: "制",
        reading: "せい",
        text: "Apa arti kanji ini?",
        choices: ["Kebebasan", "Kontrol/Sistem", "Ketidakaturan", "Anarki"],
        answer: 1,
        detail: "制 = kontrol/sistem. Contoh: 制度(せいど) = sistem/institusi.",
      },
      {
        jp: "誠",
        reading: "せい/まこと",
        text: "Apa arti kanji ini?",
        choices: [
          "Kebohongan",
          "Kejujuran/Ketulusan",
          "Keraguan",
          "Kepura-puraan",
        ],
        answer: 1,
        detail:
          "誠 = kejujuran/ketulusan. Contoh: 誠実(せいじつ) = tulus/jujur.",
      },
      {
        jp: "接",
        reading: "せつ",
        text: "Apa arti kanji ini?",
        choices: ["Memisahkan", "Menyambung/Berkontak", "Memotong", "Menjauh"],
        answer: 1,
        detail: "接 = menyambung/berkontak. Contoh: 接続(せつぞく) = koneksi.",
      },
      {
        jp: "節",
        reading: "せつ/ふし",
        text: "Apa arti kanji ini?",
        choices: ["Keseluruhan", "Ruas/Bagian/Hemat", "Lebihan", "Puncak"],
        answer: 1,
        detail: "節 = ruas/hemat. Contoh: 季節(きせつ) = musim.",
      },
      {
        jp: "設",
        reading: "せつ",
        text: "Apa arti kanji ini?",
        choices: [
          "Menghancurkan",
          "Membangun/Mendirikan",
          "Mengabaikan",
          "Menghapus",
        ],
        answer: 1,
        detail:
          "設 = membangun/mendirikan. Contoh: 設定(せってい) = pengaturan.",
      },
    ],
    N2: [
      {
        jp: "憾",
        reading: "かん",
        text: "Apa arti kanji ini?",
        choices: ["Kesenangan", "Penyesalan", "Kegembiraan", "Kepuasan"],
        answer: 1,
        detail:
          "憾 = penyesalan. Contoh: 遺憾(いかん) = penyesalan/keprihatinan.",
      },
      {
        jp: "駆",
        reading: "く",
        text: "Apa arti kanji ini?",
        choices: [
          "Berhenti",
          "Berlari kencang/Membalap",
          "Berjalan lambat",
          "Diam",
        ],
        answer: 1,
        detail: "駆 = berlari kencang. Contoh: 駆動(くどう) = penggerak/drive.",
      },
      {
        jp: "棄",
        reading: "き",
        text: "Apa arti kanji ini?",
        choices: [
          "Mengumpulkan",
          "Membuang/Meninggalkan",
          "Menyimpan",
          "Menjaga",
        ],
        answer: 1,
        detail: "棄 = membuang. Contoh: 廃棄(はいき) = membuang/pembuangan.",
      },
      {
        jp: "却",
        reading: "きゃく",
        text: "Apa arti kanji ini?",
        choices: ["Menerima", "Menolak/Melainkan", "Menyetujui", "Mendukung"],
        answer: 1,
        detail: "却 = menolak/malah. Contoh: 却下(きゃっか) = penolakan.",
      },
      {
        jp: "矯",
        reading: "きょう",
        text: "Apa arti kanji ini?",
        choices: [
          "Memperburuk",
          "Memperbaiki/Meluruskan",
          "Membengkokkan",
          "Menghancurkan",
        ],
        answer: 1,
        detail:
          "矯 = memperbaiki/meluruskan. Contoh: 矯正(きょうせい) = koreksi/ortopedi.",
      },
      {
        jp: "拒",
        reading: "きょ",
        text: "Apa arti kanji ini?",
        choices: ["Menerima", "Menolak/Menghalangi", "Meminta", "Mendukung"],
        answer: 1,
        detail: "拒 = menolak. Contoh: 拒否(きょひ) = penolakan.",
      },
      {
        jp: "緊",
        reading: "きん",
        text: "Apa arti kanji ini?",
        choices: ["Longgar", "Tegang/Ketat", "Santai", "Lembut"],
        answer: 1,
        detail: "緊 = tegang/ketat. Contoh: 緊張(きんちょう) = tegang.",
      },
      {
        jp: "謹",
        reading: "きん",
        text: "Apa arti kanji ini?",
        choices: ["Sombong", "Rendah hati/Hormat", "Acuh", "Kasar"],
        answer: 1,
        detail:
          "謹 = rendah hati/hormat. Contoh: 謹慎(きんしん) = hukuman penahanan.",
      },
      {
        jp: "掘",
        reading: "くつ",
        text: "Apa arti kanji ini?",
        choices: ["Membangun", "Menggali", "Menghancurkan", "Menanam"],
        answer: 1,
        detail: "掘 = menggali. Contoh: 発掘(はっくつ) = penggalian.",
      },
      {
        jp: "繰",
        reading: "く",
        text: "Apa arti kanji ini?",
        choices: ["Merobek", "Mengulang/Memgulung", "Memotong", "Menghapus"],
        answer: 1,
        detail:
          "繰 = mengulang/menggulung. Contoh: 繰り返す(くりかえす) = mengulang.",
      },
      {
        jp: "携",
        reading: "けい",
        text: "Apa arti kanji ini?",
        choices: [
          "Meninggalkan",
          "Membawa/Menggenggam",
          "Membuang",
          "Menyembunyikan",
        ],
        answer: 1,
        detail: "携 = membawa. Contoh: 携帯(けいたい) = ponsel/membawa.",
      },
      {
        jp: "遣",
        reading: "けん/つか",
        text: "Apa arti kanji ini?",
        choices: ["Menerima", "Mengirim/Menggunakan", "Meminta", "Menyimpan"],
        answer: 1,
        detail:
          "遣 = mengirim/menggunakan. Contoh: 派遣(はけん) = pengiriman/penugasan.",
      },
      {
        jp: "顕",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: ["Tersembunyi", "Nyata/Jelas", "Kabur", "Samar"],
        answer: 1,
        detail: "顕 = nyata/jelas. Contoh: 顕著(けんちょ) = mencolok/jelas.",
      },
      {
        jp: "献",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: [
          "Mengambil",
          "Mempersembahkan/Berkontribusi",
          "Menolak",
          "Merusak",
        ],
        answer: 1,
        detail: "献 = mempersembahkan. Contoh: 献血(けんけつ) = donor darah.",
      },
      {
        jp: "懸",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: ["Santai", "Khawatir/Bergantung", "Percaya", "Tenang"],
        answer: 1,
        detail:
          "懸 = khawatir/bergantung. Contoh: 懸念(けねん) = kekhawatiran.",
      },
      {
        jp: "倹",
        reading: "けん",
        text: "Apa arti kanji ini?",
        choices: ["Boros", "Hemat/Sederhana", "Mewah", "Berlebihan"],
        answer: 1,
        detail: "倹 = hemat. Contoh: 倹約(けんやく) = penghematan.",
      },
      {
        jp: "孤",
        reading: "こ",
        text: "Apa arti kanji ini?",
        choices: ["Bersama", "Sendiri/Terisolasi", "Ramai", "Populer"],
        answer: 1,
        detail: "孤 = sendiri/terisolasi. Contoh: 孤独(こどく) = kesepian.",
      },
      {
        jp: "誇",
        reading: "こ",
        text: "Apa arti kanji ini?",
        choices: ["Malu", "Bangga", "Sedih", "Takut"],
        answer: 1,
        detail: "誇 = bangga. Contoh: 誇り(ほこり) = kebanggaan.",
      },
      {
        jp: "枯",
        reading: "こ",
        text: "Apa arti kanji ini?",
        choices: ["Tumbuh subur", "Layu/Mengering", "Berbunga", "Berkembang"],
        answer: 1,
        detail: "枯 = layu/mengering. Contoh: 枯れる(かれる) = layu/kering.",
      },
      {
        jp: "控",
        reading: "こう",
        text: "Apa arti kanji ini?",
        choices: [
          "Maju terus",
          "Menahan diri/Menunggu",
          "Bertindak bebas",
          "Mengabaikan",
        ],
        answer: 1,
        detail: "控 = menahan diri. Contoh: 控える(ひかえる) = menahan diri.",
      },
    ],
    N1: [
      {
        jp: "轟",
        reading: "ごう",
        text: "Apa arti kanji ini?",
        choices: ["Berbisik", "Gemuruh/Bergemuruh", "Diam", "Berbunyi pelan"],
        answer: 1,
        detail: "轟 = gemuruh. 轟く(とどろく) = bergemuruh/bergema.",
      },
      {
        jp: "贖",
        reading: "しょく",
        text: "Apa arti kanji ini?",
        choices: ["Menghukum", "Menebus (dosa)", "Menambah", "Mengabaikan"],
        answer: 1,
        detail: "贖 = menebus. 贖罪(しょくざい) = penebusan dosa.",
      },
      {
        jp: "蔑",
        reading: "べつ",
        text: "Apa arti kanji ini?",
        choices: ["Menghormati", "Meremehkan/Menghina", "Memuji", "Mendukung"],
        answer: 1,
        detail: "蔑 = meremehkan. 蔑む(さげすむ) = meremehkan/menghina.",
      },
      {
        jp: "憚",
        reading: "はばか",
        text: "Apa arti kanji ini?",
        choices: ["Berani", "Segan/Takut", "Percaya diri", "Tegas"],
        answer: 1,
        detail: "憚 = segan. 憚る(はばかる) = merasa segan/takut.",
      },
      {
        jp: "諦",
        reading: "てい",
        text: "Apa arti kanji ini?",
        choices: [
          "Berusaha keras",
          "Menyerah/Menerima",
          "Berjuang",
          "Mengejar",
        ],
        answer: 1,
        detail: "諦 = menyerah/menerima. 諦める(あきらめる) = menyerah.",
      },
      {
        jp: "嗚",
        reading: "お",
        text: "Kanji ini biasanya dipakai dalam kata apa?",
        choices: ["挨拶", "嗚咽", "音楽", "言葉"],
        answer: 1,
        detail: "嗚 dipakai dalam 嗚咽(おえつ) = isak tangis.",
      },
      {
        jp: "逝",
        reading: "せい",
        text: "Apa arti kanji ini?",
        choices: ["Lahir", "Meninggal/Pergi selamanya", "Tumbuh", "Hidup"],
        answer: 1,
        detail: "逝 = meninggal/pergi. 逝く(ゆく/いく) = meninggal dunia.",
      },
      {
        jp: "慟",
        reading: "どう",
        text: "Apa arti kanji ini?",
        choices: ["Tertawa", "Menangis meraung", "Tersenyum", "Diam"],
        answer: 1,
        detail:
          "慟 = menangis meraung. 慟哭(どうこく) = tangisan yang mengharukan.",
      },
      {
        jp: "煩",
        reading: "はん/わずら",
        text: "Apa arti kanji ini?",
        choices: ["Tenang", "Terganggu/Resah", "Senang", "Bersemangat"],
        answer: 1,
        detail: "煩 = terganggu/resah. 煩わしい(わずらわしい) = merepotkan.",
      },
      {
        jp: "賜",
        reading: "し/たまわ",
        text: "Apa arti kanji ini?",
        choices: [
          "Meminta",
          "Menganugerahkan (dari atas)",
          "Mencuri",
          "Meminjam",
        ],
        answer: 1,
        detail:
          "賜 = menganugerahkan (dipakai untuk pemberian dari yang lebih tinggi).",
      },
      {
        jp: "勃",
        reading: "ぼつ",
        text: "Apa arti kanji ini?",
        choices: ["Berakhir", "Bangkit tiba-tiba", "Menurun", "Melemah"],
        answer: 1,
        detail:
          "勃 = bangkit tiba-tiba. 勃発(ぼっぱつ) = meletus/pecahnya (perang dll).",
      },
      {
        jp: "矜",
        reading: "きん",
        text: "Apa arti kanji ini?",
        choices: ["Rendah hati", "Bangga/Teguh pada prinsip", "Acuh", "Malu"],
        answer: 1,
        detail: "矜 = bangga/teguh. 矜持(きょうじ) = kebanggaan/harga diri.",
      },
      {
        jp: "嗤",
        reading: "し",
        text: "Apa arti kanji ini?",
        choices: ["Menangis", "Menertawakan/Mengejek", "Memuji", "Mendukung"],
        answer: 1,
        detail:
          "嗤 = menertawakan/mengejek. 嗤う(わらう) = menertawakan dengan hina.",
      },
      {
        jp: "塞",
        reading: "そく/ふさ",
        text: "Apa arti kanji ini?",
        choices: [
          "Membuka",
          "Menyumbat/Memblokir",
          "Mengalirkan",
          "Membersihkan",
        ],
        answer: 1,
        detail: "塞 = menyumbat. 閉塞(へいそく) = penyumbatan/kebuntuan.",
      },
      {
        jp: "宥",
        reading: "ゆう",
        text: "Apa arti kanji ini?",
        choices: ["Menghukum", "Memaafkan/Mengampuni", "Memarahi", "Mengancam"],
        answer: 1,
        detail: "宥 = memaafkan. 宥める(なだめる) = menenangkan/meredakan.",
      },
      {
        jp: "瞑",
        reading: "めい",
        text: "Apa arti kanji ini?",
        choices: [
          "Membuka mata",
          "Memejamkan mata/Bermeditasi",
          "Melihat jauh",
          "Menatap",
        ],
        answer: 1,
        detail: "瞑 = memejamkan mata. 瞑想(めいそう) = meditasi.",
      },
      {
        jp: "窟",
        reading: "くつ",
        text: "Apa arti kanji ini?",
        choices: ["Istana", "Gua/Sarang", "Menara", "Jembatan"],
        answer: 1,
        detail: "窟 = gua/sarang. 洞窟(どうくつ) = gua.",
      },
      {
        jp: "慟",
        reading: "どう",
        text: "Apa kanji ini ketika digabung dengan 哭?",
        choices: ["嗚咽", "慟哭", "落涙", "号泣"],
        answer: 1,
        detail: "慟哭(どうこく) = tangisan yang sangat mengharukan/meraung.",
      },
      {
        jp: "遁",
        reading: "とん",
        text: "Apa arti kanji ini?",
        choices: [
          "Menghadapi",
          "Melarikan diri/Bersembunyi",
          "Menyerang",
          "Bertahan",
        ],
        answer: 1,
        detail:
          "遁 = melarikan diri/bersembunyi. 遁走(とんそう) = melarikan diri.",
      },
      {
        jp: "闊",
        reading: "かつ",
        text: "Apa arti kanji ini?",
        choices: ["Sempit", "Luas/Lapang", "Rendah", "Kecil"],
        answer: 1,
        detail: "闊 = luas/lapang. 闊歩(かっぽ) = berjalan dengan gagah.",
      },
    ],
  },

  /* ─────────── GRAMMAR ─────────── */
  grammar: {
    N5: [
      {
        jp: "私___学生です。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "は", "が", "で"],
        answer: 1,
        detail: "は adalah partikel topik. 私は学生です = Saya adalah pelajar.",
      },
      {
        jp: "本___読みます。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["は", "を", "が", "に"],
        answer: 1,
        detail: "を menandai objek langsung. 本を読みます = Membaca buku.",
      },
      {
        jp: "学校___行きます。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["に", "を", "は", "が"],
        answer: 0,
        detail:
          "に dipakai untuk tujuan pergerakan. 学校に行きます = Pergi ke sekolah.",
      },
      {
        jp: "これ___何ですか？",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "に", "は", "で"],
        answer: 2,
        detail: "は dipakai sebagai topik. これは何ですか = Ini apa?",
      },
      {
        jp: "明日___雨___降る。",
        reading: "",
        text: "Pilih kombinasi partikel yang tepat!",
        choices: ["に・が", "は・に", "が・を", "に・を"],
        answer: 0,
        detail:
          "明日に雨が降る = Besok hujan akan turun. に=waktu, が=subjek fenomena alam.",
      },
      {
        jp: "猫___いません。",
        reading: "",
        text: "Pilih partikel yang tepat! (猫 = kucing, tidak ada)",
        choices: ["を", "が", "に", "は"],
        answer: 1,
        detail: "が dipakai dengan いる/ある. 猫がいません = Tidak ada kucing.",
      },
      {
        jp: "日本語___話せます。",
        reading: "",
        text: "Pilih partikel yang tepat! (bisa berbicara)",
        choices: ["を", "に", "が", "で"],
        answer: 2,
        detail:
          "が dipakai dengan kata kerja potensial. 日本語が話せます = Bisa berbicara bahasa Jepang.",
      },
      {
        jp: "机___上___本があります。",
        reading: "",
        text: "Pilih partikel yang benar!",
        choices: ["に・の", "の・に", "が・を", "を・が"],
        answer: 1,
        detail:
          "机の上に本があります = Di atas meja ada buku. の=milik/posisi, に=lokasi keberadaan.",
      },
      {
        jp: "友達___映画を見ました。",
        reading: "",
        text: "Pilih partikel yang tepat! (bersama teman)",
        choices: ["を", "に", "で", "と"],
        answer: 3,
        detail:
          "と = bersama. 友達と映画を見ました = Menonton film bersama teman.",
      },
      {
        jp: "バス___来ました。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["に", "で", "を", "が"],
        answer: 3,
        detail:
          "が dipakai untuk subjek yang baru muncul. バスが来ました = Bis datang.",
      },
      {
        jp: "七時___起きます。",
        reading: "",
        text: "Pilih partikel waktu yang tepat!",
        choices: ["に", "で", "を", "は"],
        answer: 0,
        detail:
          "に dipakai untuk waktu spesifik. 七時に起きます = Bangun jam 7.",
      },
      {
        jp: "図書館___勉強します。",
        reading: "",
        text: "Pilih partikel lokasi aksi yang tepat!",
        choices: ["に", "を", "で", "が"],
        answer: 2,
        detail:
          "で = tempat berlangsungnya aksi. 図書館で勉強します = Belajar di perpustakaan.",
      },
      {
        jp: "これは___ですか？",
        reading: "",
        text: "Apa arti kalimat ini?",
        choices: [
          "Ini milik siapa?",
          "Ini apa?",
          "Ini di mana?",
          "Ini bagaimana?",
        ],
        answer: 1,
        detail: "これは何ですか = Ini apa? (menanyakan identitas benda).",
      },
      {
        jp: "私は毎朝コーヒー___飲みます。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["が", "に", "を", "は"],
        answer: 2,
        detail:
          "を menandai objek langsung kata kerja transitif. コーヒーを飲みます = Minum kopi.",
      },
      {
        jp: "日本___行きたい。",
        reading: "",
        text: "Pilih partikel tujuan yang tepat!",
        choices: ["で", "から", "に", "を"],
        answer: 2,
        detail:
          "に dipakai untuk tujuan. 日本に行きたい = Ingin pergi ke Jepang.",
      },
      {
        jp: "これ___あれ___同じです。",
        reading: "",
        text: "Pilih partikel perbandingan yang tepat!",
        choices: ["が・は", "と・は", "は・が", "に・で"],
        answer: 1,
        detail:
          "これとあれは同じです = Ini dan itu sama. と = 'dan' untuk perbandingan.",
      },
      {
        jp: "電車___乗ります。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["で", "に", "を", "は"],
        answer: 1,
        detail:
          "に dipakai untuk kendaraan yang dinaiki. 電車に乗ります = Naik kereta.",
      },
      {
        jp: "どこ___行きますか？",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["に", "を", "で", "が"],
        answer: 0,
        detail: "に = ke mana. どこに行きますか = Mau pergi ke mana?",
      },
      {
        jp: "りんご___みかん___好きです。",
        reading: "",
        text: "Pilih partikel 'dan' yang tepat!",
        choices: ["か・か", "も・も", "と・と", "が・が"],
        answer: 1,
        detail: "も = juga. りんごもみかんも好きです = Suka apel maupun jeruk.",
      },
      {
        jp: "日本語___難しい___楽しいです。",
        reading: "",
        text: "Pilih partikel yang benar!",
        choices: ["が・で", "は・が", "が・は", "を・は"],
        answer: 1,
        detail:
          "日本語は難しいが楽しいです = Bahasa Jepang sulit tapi menyenangkan. は=topik, が=kontrastif.",
      },
    ],
    N4: [
      {
        jp: "彼女は歌___上手です。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["に", "を", "が", "は"],
        answer: 2,
        detail:
          "が dipakai dengan kata sifat kemampuan seperti 上手・下手・好き・嫌い.",
      },
      {
        jp: "雨___降ったら、家にいます。",
        reading: "",
        text: "Pilih pola kondisional yang tepat!",
        choices: ["が", "は", "に", "で"],
        answer: 0,
        detail: "〜たら = jika/kalau. 雨が降ったら = Kalau hujan turun.",
      },
      {
        jp: "もっと早く来___よかった。",
        reading: "",
        text: "Pilih pola penyesalan yang tepat!",
        choices: ["ば", "たら", "れば", "て"],
        answer: 2,
        detail:
          "〜ればよかった = seharusnya... (penyesalan). 早く来ればよかった = Seharusnya datang lebih awal.",
      },
      {
        jp: "彼は医者___なりました。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "に", "が", "は"],
        answer: 1,
        detail: "に = menjadi. 医者になりました = Menjadi dokter.",
      },
      {
        jp: "日本に行く___、日本語を勉強しています。",
        reading: "",
        text: "Pilih ekspresi tujuan yang tepat!",
        choices: ["ために", "から", "ので", "のに"],
        answer: 0,
        detail: "〜ために = untuk/demi tujuan. 行くために = untuk pergi.",
      },
      {
        jp: "宿題を___しまいました。",
        reading: "",
        text: "Pilih bentuk yang tepat (sudah selesai / tidak disengaja)!",
        choices: ["する", "して", "した", "しない"],
        answer: 1,
        detail: "〜てしまう = sudah selesai / menyesal melakukan sesuatu.",
      },
      {
        jp: "彼は来___かもしれない。",
        reading: "",
        text: "Pilih bentuk yang tepat!",
        choices: ["る", "た", "ない", "なかった"],
        answer: 0,
        detail:
          "〜かもしれない = mungkin. 来るかもしれない = Mungkin akan datang.",
      },
      {
        jp: "この映画は見___があります。",
        reading: "",
        text: "Pilih bentuk yang tepat!",
        choices: ["た", "ること", "ている", "て"],
        answer: 1,
        detail:
          "〜ることがある = kadang-kadang. 見ることがあります = Kadang-kadang menonton.",
      },
      {
        jp: "電気を___ままで寝た。",
        reading: "",
        text: "Pilih bentuk yang tepat!",
        choices: ["つけた", "つける", "つけて", "つけない"],
        answer: 0,
        detail:
          "〜たまま = membiarkan dalam keadaan. 電気をつけたまま寝た = Tidur dengan lampu menyala.",
      },
      {
        jp: "この本は子供___読めます。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["が", "も", "に", "を"],
        answer: 2,
        detail:
          "に dipakai untuk menunjukkan siapa yang bisa melakukan. 子供にも読めます = Bahkan anak-anak pun bisa membaca.",
      },
      {
        jp: "友達___手紙を書きました。",
        reading: "",
        text: "Pilih partikel penerima yang tepat!",
        choices: ["が", "に", "を", "と"],
        answer: 1,
        detail:
          "に = kepada (penerima). 友達に手紙を書きました = Menulis surat kepada teman.",
      },
      {
        jp: "この仕事は難し___です。",
        reading: "",
        text: "Pilih akhiran yang tepat!",
        choices: ["い", "な", "く", "さ"],
        answer: 0,
        detail: "難しい adalah kata sifat -i. 難しいです = Ini sulit.",
      },
      {
        jp: "彼は疲れ___います。",
        reading: "",
        text: "Pilih bentuk yang tepat! (keadaan kelelahan berlanjut)",
        choices: ["て", "で", "に", "と"],
        answer: 0,
        detail:
          "〜ている = keadaan yang berlanjut. 疲れています = Sedang/masih kelelahan.",
      },
      {
        jp: "彼女___部屋に入りました。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["の", "を", "が", "に"],
        answer: 0,
        detail: "の = milik/posesif. 彼女の部屋 = kamar miliknya.",
      },
      {
        jp: "雨___降っています。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["は", "が", "を", "に"],
        answer: 1,
        detail:
          "が menandai subjek fenomena alam. 雨が降っています = Sedang hujan.",
      },
      {
        jp: "彼は英語___日本語___話せます。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["と・に", "も・も", "が・を", "に・で"],
        answer: 1,
        detail:
          "も〜も = baik...maupun. 英語も日本語も話せます = Bisa berbicara Inggris maupun Jepang.",
      },
      {
        jp: "病気___なったので、学校を休みました。",
        reading: "",
        text: "Pilih bentuk yang tepat!",
        choices: ["に", "で", "が", "を"],
        answer: 0,
        detail: "〜になる = menjadi. 病気になった = menjadi sakit.",
      },
      {
        jp: "もし時間が___、来てください。",
        reading: "",
        text: "Pilih pola kondisional yang tepat!",
        choices: ["あれば", "あると", "あって", "あるで"],
        answer: 0,
        detail: "〜ば = jika (kondisi). 時間があれば = Jika ada waktu.",
      },
      {
        jp: "先生___教えていただきました。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["が", "に", "を", "は"],
        answer: 1,
        detail:
          "に dipakai dengan 〜ていただく. 先生に教えていただきました = Diajarkan oleh guru.",
      },
      {
        jp: "電車が遅れ___、授業に遅刻しました。",
        reading: "",
        text: "Pilih bentuk alasan yang tepat!",
        choices: ["ので", "のに", "から", "ために"],
        answer: 0,
        detail:
          "〜ので = karena (alasan objektif). 遅れたので = Karena terlambat.",
      },
    ],
    N3: [
      {
        jp: "彼女は歌___上手なだけ___、踊りも得意だ。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["が・で", "が・でなく", "に・だけ", "を・なく"],
        answer: 1,
        detail:
          "〜だけでなく = tidak hanya. 歌が上手なだけでなく = Tidak hanya pandai menyanyi.",
      },
      {
        jp: "彼が成功した___には、努力がある。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["背景", "場合", "理由", "わけ"],
        answer: 0,
        detail:
          "〜の背景には = di balik latar belakang. 成功した背景には努力がある = Di balik kesuksesan ada kerja keras.",
      },
      {
        jp: "どんなに疲れて___、諦めない。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["も", "から", "ので", "が"],
        answer: 0,
        detail: "〜ても = meskipun. どんなに疲れても = Betapapun lelahnya.",
      },
      {
        jp: "会議が終わり___、食事に行きましょう。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["次第", "ながら", "てから", "ために"],
        answer: 2,
        detail: "〜てから = setelah melakukan. 終わってから = Setelah selesai.",
      },
      {
        jp: "子供___、そんな難しい本は読めない。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["にしては", "では", "だから", "ので"],
        answer: 1,
        detail:
          "〜では = untuk (ekspektasi). 子供では = Untuk anak kecil (tidak mungkin bisa).",
      },
      {
        jp: "彼は怒って___。",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: [
          "怒っているようだ",
          "怒りが収まった",
          "怒らないようだ",
          "怒りを隠している",
        ],
        answer: 0,
        detail: "〜ている = keadaan yang berlanjut. 怒っている = Sedang marah.",
      },
      {
        jp: "わざわざ来て___ありがとう。",
        reading: "",
        text: "Pilih bentuk yang tepat!",
        choices: ["くれて", "もらって", "あげて", "いただいて"],
        answer: 0,
        detail:
          "〜てくれる = melakukan untuk saya (perspektif pemberian). わざわざ来てくれて = Sudah mau jauh-jauh datang.",
      },
      {
        jp: "あの映画は見る___がある。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["こと", "価値", "べき", "はず"],
        answer: 1,
        detail:
          "〜る価値がある = layak untuk ditonton. 見る価値がある = Layak ditonton.",
      },
      {
        jp: "彼女___と思っていたが、違った。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["だ", "が来る", "来る", "くるだろう"],
        answer: 2,
        detail:
          "〜と思っていた = mengira bahwa. 来ると思っていた = Mengira dia akan datang.",
      },
      {
        jp: "この問題は解く___だ。",
        reading: "",
        text: "Pilih pola keharusan yang tepat!",
        choices: ["べき", "はず", "ため", "から"],
        answer: 0,
        detail:
          "〜べき = seharusnya. この問題は解くべきだ = Masalah ini seharusnya dipecahkan.",
      },
      {
        jp: "雨が降り___、試合は中止になった。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["ので", "そうで", "たので", "から"],
        answer: 2,
        detail:
          "〜たので = karena (sudah terjadi). 降ったので = Karena hujan turun.",
      },
      {
        jp: "試験に合格した___うれしい。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["ので", "から", "のに", "ため"],
        answer: 0,
        detail:
          "〜ので = karena. 合格したのでうれしい = Senang karena lulus ujian.",
      },
      {
        jp: "彼は医者___かかわらず、不健康だ。",
        reading: "",
        text: "Pilih pola kontrastif yang tepat!",
        choices: ["なのに", "でありながら", "にも", "だのに"],
        answer: 2,
        detail:
          "〜にもかかわらず = meskipun/walaupun. 医者にもかかわらず = Meskipun (dia) dokter.",
      },
      {
        jp: "彼は急いで出かけた___、財布を忘れた。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["ので", "結果", "のに", "くせに"],
        answer: 1,
        detail:
          "〜た結果 = sebagai hasilnya. 急いだ結果、財布を忘れた = Karena terburu-buru, lupa dompet.",
      },
      {
        jp: "どんな状況___あきらめないでください。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["でも", "だって", "なら", "でなく"],
        answer: 0,
        detail:
          "〜でも = bahkan dalam/apapun. どんな状況でも = Dalam situasi apapun.",
      },
      {
        jp: "彼女は仕事___家事もこなす。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["のみならず", "だけでなく", "ばかりか", "のほかに"],
        answer: 1,
        detail:
          "〜だけでなく = tidak hanya. 仕事だけでなく家事も = Tidak hanya pekerjaan, juga urusan rumah.",
      },
      {
        jp: "このレポートは明日___提出してください。",
        reading: "",
        text: "Pilih partikel batas waktu yang tepat!",
        choices: ["に", "まで", "までに", "まで間に"],
        answer: 2,
        detail:
          "〜までに = paling lambat. 明日までに提出 = Kumpulkan paling lambat besok.",
      },
      {
        jp: "彼が来ない___、会議を始めましょう。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["から", "ので", "限り", "うちに"],
        answer: 2,
        detail: "〜限り = selama tidak. 来ない限り = Selama dia tidak datang.",
      },
      {
        jp: "食べ過ぎた___、お腹が痛い。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["せいで", "おかげで", "ため", "から"],
        answer: 0,
        detail:
          "〜せいで = gara-gara (konotasi negatif). 食べ過ぎたせいで = Gara-gara makan terlalu banyak.",
      },
      {
        jp: "彼女___頼んだが、断られた。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "に", "が", "と"],
        answer: 1,
        detail:
          "に dipakai untuk sasaran permintaan. 彼女に頼んだ = Meminta kepada dia.",
      },
    ],
    N2: [
      {
        jp: "努力した___、結果が出なかった。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["にもかかわらず", "せいで", "おかげで", "ために"],
        answer: 0,
        detail:
          "〜にもかかわらず = meskipun. 努力したにもかかわらず = Meskipun sudah berusaha.",
      },
      {
        jp: "彼は医者___、毎日タバコを吸う。",
        reading: "",
        text: "Pilih pola kontrastif yang tepat!",
        choices: ["でありながら", "だから", "ので", "たら"],
        answer: 0,
        detail:
          "〜でありながら = sementara menjadi. 医者でありながら毎日タバコを吸う = Meski dokter, merokok tiap hari.",
      },
      {
        jp: "この計画は実現不可能___言わざるを得ない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["と", "が", "に", "を"],
        answer: 0,
        detail:
          "〜と言わざるを得ない = tidak bisa tidak mengatakan. ～と言う → と引用.",
      },
      {
        jp: "彼女の歌声___、聴衆は魅了された。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["に", "によって", "を", "から"],
        answer: 1,
        detail:
          "〜によって = oleh/dengan. 歌声によって魅了された = Terpesona oleh suara nyanyiannya.",
      },
      {
        jp: "経験___、判断が変わることがある。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["によっては", "にわたって", "に際して", "をもとに"],
        answer: 0,
        detail:
          "〜によっては = tergantung pada. 経験によっては = Tergantung pengalamannya.",
      },
      {
        jp: "環境問題___取り組むべきだ。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "に", "が", "と"],
        answer: 1,
        detail:
          "〜に取り組む = menangani/bekerja pada. 環境問題に取り組む = Menangani masalah lingkungan.",
      },
      {
        jp: "研究___基づいた政策が必要だ。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["に", "を", "から", "による"],
        answer: 3,
        detail:
          "〜に基づいた = berdasarkan. 研究に基づいた政策 = kebijakan berdasarkan penelitian.",
      },
      {
        jp: "彼は失敗___ものの、諦めなかった。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["した", "して", "したが", "したとは"],
        answer: 0,
        detail:
          "〜したものの = meskipun sudah. 失敗したものの、諦めなかった = Meski gagal, tidak menyerah.",
      },
      {
        jp: "法律___違反する行為は許されない。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["を", "に", "が", "と"],
        answer: 1,
        detail: "〜に違反する = melanggar. 法律に違反する = Melanggar hukum.",
      },
      {
        jp: "この映画は子供___、大人も楽しめる。",
        reading: "",
        text: "Pilih pola inklusif yang tepat!",
        choices: ["はおろか", "だけでなく", "のみならず", "に限らず"],
        answer: 3,
        detail:
          "〜に限らず = tidak terbatas pada. 子供に限らず = Tidak terbatas pada anak-anak.",
      },
      {
        jp: "彼の言葉___、誰もが感動した。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["に", "によって", "にとって", "について"],
        answer: 1,
        detail:
          "〜によって = oleh karena. 彼の言葉によって感動した = Tergerak oleh kata-katanya.",
      },
      {
        jp: "彼女は泣き___で駅を出た。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["ながら", "そうな顔", "じゃく", "べき顔"],
        answer: 1,
        detail:
          "泣きそうな顔 = wajah yang tampak mau menangis. 〜そうな = tampaknya akan.",
      },
      {
        jp: "その話は信じ___。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["がたい", "にくい", "づらい", "がたく"],
        answer: 0,
        detail:
          "〜がたい = sulit untuk dipercaya (perasaan emosional). 信じがたい = Sulit dipercaya.",
      },
      {
        jp: "問題解決___、まず原因を特定する必要がある。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["のために", "にあたって", "において", "にわたって"],
        answer: 1,
        detail:
          "〜にあたって = pada saat/dalam rangka. 問題解決にあたって = Dalam rangka memecahkan masalah.",
      },
      {
        jp: "どんな困難___乗り越えられる。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["にも", "でも", "もが", "まで"],
        answer: 1,
        detail: "〜でも = bahkan/apapun. どんな困難でも = Kesulitan apapun.",
      },
      {
        jp: "この政策は経済___悪影響を与えた。",
        reading: "",
        text: "Pilih partikel yang tepat!",
        choices: ["が", "に", "を", "と"],
        answer: 1,
        detail:
          "〜に悪影響を与える = memberikan dampak negatif pada. 経済に悪影響 = dampak buruk pada ekonomi.",
      },
      {
        jp: "チームの努力___、プロジェクトが成功した。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["のおかげで", "のせいで", "によって", "のために"],
        answer: 0,
        detail:
          "〜のおかげで = berkat. チームの努力のおかげで = Berkat kerja keras tim.",
      },
      {
        jp: "予算___限り、この計画は実現できない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["のない", "がない", "の足りる", "が足りない"],
        answer: 3,
        detail: "予算が足りない限り = Selama anggarannya tidak cukup.",
      },
      {
        jp: "この研究結果___、新たな治療法が開発された。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["をもとに", "によって", "において", "にわたって"],
        answer: 0,
        detail:
          "〜をもとに = berdasarkan. 研究結果をもとに = Berdasarkan hasil penelitian.",
      },
      {
        jp: "彼女は優秀___、謙虚だ。",
        reading: "",
        text: "Pilih pola kontrastif yang tepat!",
        choices: ["ながら", "にもかかわらず", "でありながら", "のに"],
        answer: 2,
        detail:
          "〜でありながら = sambil/sementara. 優秀でありながら謙虚だ = Meski berprestasi tetap rendah hati.",
      },
    ],
    N1: [
      {
        jp: "彼の発言___、会議の雰囲気が変わった。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["によって", "にかかわらず", "をもって", "において"],
        answer: 0,
        detail:
          "〜によって = oleh/karena. 発言によって = Karena/oleh pernyataannya.",
      },
      {
        jp: "この条約は全会一致___採択された。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["によって", "をもって", "において", "にわたって"],
        answer: 1,
        detail:
          "〜をもって = dengan menggunakan/melalui. 全会一致をもって採択 = Diadopsi dengan suara bulat.",
      },
      {
        jp: "彼は苦境___、決して諦めなかった。",
        reading: "",
        text: "Pilih pola yang tepat!",
        choices: ["にあって", "によって", "において", "にかけて"],
        answer: 0,
        detail:
          "〜にあって = dalam situasi. 苦境にあって = Dalam situasi sulit.",
      },
      {
        jp: "今更後悔した___、取り返しはつかない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["ところで", "としても", "とて", "ものを"],
        answer: 0,
        detail:
          "〜したところで = bahkan jika melakukan (tetapi tidak berguna). 今更後悔したところで = Bahkan jika menyesal sekarang.",
      },
      {
        jp: "状況___では、即断は難しい。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["いかんによって", "にかかわらず", "はともかく", "に至っては"],
        answer: 0,
        detail:
          "〜いかんによって = tergantung bagaimana. 状況いかんによって = Tergantung bagaimana situasinya.",
      },
      {
        jp: "彼女は微動___せず、その場に立っていた。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["だに", "にも", "すら", "をも"],
        answer: 0,
        detail:
          "微動だにせず = tanpa bergerak sedikitpun. だに = bahkan (dalam ekspresi negatif).",
      },
      {
        jp: "当局の対応___、批判が相次いだ。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["をめぐって", "によって", "において", "にかかわらず"],
        answer: 0,
        detail:
          "〜をめぐって = seputar/terkait. 対応をめぐって批判が相次いだ = Kritik bermunculan seputar respons otoritas.",
      },
      {
        jp: "彼が来ない___、会議を始めるしかない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["以上", "ものの", "ながら", "にもかかわらず"],
        answer: 0,
        detail:
          "〜以上 = karena sudah. 来ない以上 = Karena dia tidak datang (situasi yang ada).",
      },
      {
        jp: "どんな理由___あれ、暴力は許されない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["が", "と", "で", "にも"],
        answer: 0,
        detail:
          "どんな〜があれ = apapun alasannya. = Apapun alasannya, kekerasan tidak bisa dibenarkan.",
      },
      {
        jp: "政策の失敗___、多くの国民が苦しんだ。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["によって", "によると", "において", "にもかかわらず"],
        answer: 0,
        detail:
          "〜によって = oleh karena. 政策の失敗によって = Karena kegagalan kebijakan.",
      },
      {
        jp: "彼女___言わせれば、その計画は無謀だ。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["に", "と", "が", "を"],
        answer: 0,
        detail:
          "〜に言わせれば = jika meminta pendapatnya/menurut dia. 彼女に言わせれば = Menurut dia.",
      },
      {
        jp: "そんな無理な要求に応じる___がない。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["わけ", "はず", "べき", "もの"],
        answer: 0,
        detail:
          "〜わけがない = mustahil/tidak mungkin. 応じるわけがない = Mustahil memenuhi permintaan itu.",
      },
      {
        jp: "新技術の導入___、業務効率が大幅に改善した。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["にともない", "によって", "において", "をめぐって"],
        answer: 0,
        detail:
          "〜にともない = seiring dengan. 新技術の導入にともない = Seiring dengan pengenalan teknologi baru.",
      },
      {
        jp: "その問題は重要性___認識されていなかった。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["が十分に", "を十分に", "は十分に", "の十分に"],
        answer: 0,
        detail:
          "重要性が十分に認識されていなかった = Pentingnya tidak cukup disadari. が = subjek kalimat pasif.",
      },
      {
        jp: "彼はその事実を知り___も、黙っていた。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["つつ", "ながら", "たとえ", "すら"],
        answer: 0,
        detail:
          "〜つつ(も) = sementara/meskipun. 知りつつも黙っていた = Meski tahu, diam saja.",
      },
      {
        jp: "先人の知恵___、現代の問題を解決できる。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["をもって", "によって", "をもとに", "にわたって"],
        answer: 2,
        detail:
          "〜をもとに = berdasarkan. 先人の知恵をもとに = Berdasarkan kebijaksanaan para pendahulu.",
      },
      {
        jp: "彼の才能___、業績は目覚ましい。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["にしては", "にしても", "にして", "としては"],
        answer: 2,
        detail:
          "〜にして = mengingat/dengan kemampuan sebesar. 彼の才能にして = Dengan bakat sebesar itu.",
      },
      {
        jp: "一度決めた___には、貫くべきだ。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["から", "以上", "もの", "こと"],
        answer: 1,
        detail:
          "〜以上(は) = karena sudah memutuskan/setelah memutuskan. 決めた以上には = Setelah memutuskan.",
      },
      {
        jp: "経済発展___環境破壊は切り離せない問題だ。",
        reading: "",
        text: "Pilih yang tepat!",
        choices: ["と", "との", "にとっての", "における"],
        answer: 1,
        detail:
          "〜との = dan (dalam frasa nominal). 経済発展と環境破壊との = antara perkembangan ekonomi dan kerusakan lingkungan.",
      },
      {
        jp: "不正を見て見ぬふり___。",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Mengakui kesalahan",
          "Pura-pura tidak melihat ketidakjujuran",
          "Melaporkan kecurangan",
          "Menghentikan ketidakadilan",
        ],
        answer: 1,
        detail:
          "見て見ぬふりをする = Pura-pura tidak melihat / mengabaikan (padahal tahu).",
      },
    ],
  },

  /* ─────────── LISTENING ─────────── */
  listening: {
    N5: [
      {
        jp: "「おはようございます」",
        reading: "",
        text: "Kapan salam ini diucapkan?",
        choices: ["Siang hari", "Malam hari", "Pagi hari", "Saat perpisahan"],
        answer: 2,
        detail: "おはようございます = Selamat pagi. Digunakan di pagi hari.",
      },
      {
        jp: "「ありがとうございます」",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: ["Maaf", "Terima kasih", "Selamat datang", "Permisi"],
        answer: 1,
        detail: "ありがとうございます = Terima kasih (formal).",
      },
      {
        jp: "「すみません」",
        reading: "",
        text: "Kapan ungkapan ini TIDAK digunakan?",
        choices: [
          "Minta maaf",
          "Memanggil perhatian",
          "Terima kasih informal",
          "Mengucapkan selamat",
        ],
        answer: 3,
        detail:
          "すみません = Maaf/Permisi/Excuse me. Tidak dipakai untuk mengucapkan selamat.",
      },
      {
        jp: "「いただきます」",
        reading: "",
        text: "Kapan ungkapan ini diucapkan?",
        choices: [
          "Setelah makan",
          "Saat menerima hadiah",
          "Sebelum makan",
          "Saat tidur",
        ],
        answer: 2,
        detail:
          "いただきます diucapkan sebelum makan, sebagai ungkapan syukur.",
      },
      {
        jp: "「ごちそうさまでした」",
        reading: "",
        text: "Kapan ungkapan ini diucapkan?",
        choices: [
          "Sebelum makan",
          "Setelah makan",
          "Saat lapar",
          "Saat kenyang tapi masih makan",
        ],
        answer: 1,
        detail: "ごちそうさまでした diucapkan setelah selesai makan.",
      },
      {
        jp: "「はい」",
        reading: "",
        text: "Apa arti kata ini?",
        choices: ["Tidak", "Ya", "Mungkin", "Entah"],
        answer: 1,
        detail: "はい = Ya (persetujuan / konfirmasi).",
      },
      {
        jp: "「いいえ」",
        reading: "",
        text: "Apa arti kata ini?",
        choices: ["Ya", "Mungkin", "Tidak", "Entah"],
        answer: 2,
        detail: "いいえ = Tidak (penolakan / sangkalan).",
      },
      {
        jp: "「どうぞ」",
        reading: "",
        text: "Kapan ungkapan ini digunakan?",
        choices: ["Meminta sesuatu", "Mempersilakan", "Menolak", "Memanggil"],
        answer: 1,
        detail:
          "どうぞ = Silakan/Monggo. Digunakan untuk mempersilakan seseorang.",
      },
      {
        jp: "「もう一度お願いします」",
        reading: "",
        text: "Apa yang diminta?",
        choices: [
          "Berbicara lebih pelan",
          "Mengulangi sekali lagi",
          "Berhenti berbicara",
          "Berbicara lebih keras",
        ],
        answer: 1,
        detail:
          "もう一度 = sekali lagi. もう一度お願いします = Tolong ulangi sekali lagi.",
      },
      {
        jp: "「ゆっくり話してください」",
        reading: "",
        text: "Apa yang diminta?",
        choices: [
          "Berbicara lebih keras",
          "Berhenti berbicara",
          "Berbicara lebih pelan",
          "Mengulangi",
        ],
        answer: 2,
        detail:
          "ゆっくり = perlahan. ゆっくり話してください = Tolong berbicara lebih pelan.",
      },
      {
        jp: "「どこですか？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: ["Siapa", "Apa", "Di mana", "Kapan"],
        answer: 2,
        detail: "どこ = di mana. どこですか = Di mana?",
      },
      {
        jp: "「何時ですか？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: [
          "Berapa harganya",
          "Jam berapa",
          "Tanggal berapa",
          "Hari apa",
        ],
        answer: 1,
        detail: "何時(なんじ) = jam berapa. 何時ですか = Jam berapa sekarang?",
      },
      {
        jp: "「いくらですか？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: [
          "Berapa beratnya",
          "Berapa umurnya",
          "Berapa harganya",
          "Berapa jauhnya",
        ],
        answer: 2,
        detail: "いくら = berapa (harga). いくらですか = Berapa harganya?",
      },
      {
        jp: "「トイレはどこですか？」",
        reading: "",
        text: "Apa yang dicari?",
        choices: ["Pintu keluar", "Kasir", "Toilet", "Lift"],
        answer: 2,
        detail: "トイレ = toilet. トイレはどこですか = Di mana toiletnya?",
      },
      {
        jp: "「わかりました」",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Tidak mengerti",
          "Mengerti/Sudah paham",
          "Belum paham",
          "Tidak setuju",
        ],
        answer: 1,
        detail: "わかりました = Mengerti/Sudah paham.",
      },
      {
        jp: "「少し待ってください」",
        reading: "",
        text: "Apa yang diminta?",
        choices: [
          "Pergi sebentar",
          "Tunggu sebentar",
          "Datang sebentar",
          "Duduk sebentar",
        ],
        answer: 1,
        detail:
          "少し待ってください = Tolong tunggu sebentar. 少し = sedikit/sebentar.",
      },
      {
        jp: "「お名前は？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: ["Alamat", "Nomor telepon", "Nama", "Pekerjaan"],
        answer: 2,
        detail: "お名前(おなまえ) = nama (sopan). お名前は = Siapa nama Anda?",
      },
      {
        jp: "「今日は暑いですね」",
        reading: "",
        text: "Apa yang dikomentari?",
        choices: [
          "Cuaca dingin hari ini",
          "Cuaca panas hari ini",
          "Cuaca cerah hari ini",
          "Cuaca berangin hari ini",
        ],
        answer: 1,
        detail: "暑い(あつい) = panas. 今日は暑いですね = Hari ini panas ya.",
      },
      {
        jp: "「電車は何番線ですか？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: [
          "Nomor kursi",
          "Jalur kereta berapa",
          "Harga tiket",
          "Tujuan kereta",
        ],
        answer: 1,
        detail:
          "何番線(なんばんせん) = jalur nomor berapa. Menanyakan jalur peron kereta.",
      },
      {
        jp: "「お会計をお願いします」",
        reading: "",
        text: "Apa yang diminta?",
        choices: [
          "Menu makanan",
          "Tambahan nasi",
          "Minta tagihan/bayar",
          "Kotak bungkus",
        ],
        answer: 2,
        detail:
          "お会計(おかいけい) = tagihan/pembayaran. お会計をお願いします = Minta tagihan/bill.",
      },
    ],
    N4: [
      {
        jp: "「お世話になっております」",
        reading: "",
        text: "Kapan ungkapan ini sering digunakan?",
        choices: [
          "Percakapan bisnis formal",
          "Percakapan antar teman",
          "Saat bertemu pertama kali",
          "Saat berpamitan",
        ],
        answer: 0,
        detail:
          "お世話になっております = Terima kasih atas bantuannya (ungkapan bisnis formal).",
      },
      {
        jp: "「よろしくお願いいたします」",
        reading: "",
        text: "Apa fungsi ungkapan ini?",
        choices: [
          "Ucapan terima kasih",
          "Permintaan kerja sama/tolong",
          "Permintaan maaf",
          "Ucapan selamat",
        ],
        answer: 1,
        detail: "よろしくお願いいたします = Mohon kerja samanya (formal).",
      },
      {
        jp: "「少々お待ちください」",
        reading: "",
        text: "Di mana ungkapan ini sering terdengar?",
        choices: [
          "Di antara teman",
          "Di toko/pelayanan",
          "Di sekolah",
          "Di rumah",
        ],
        answer: 1,
        detail:
          "少々お待ちください = Mohon tunggu sebentar (formal untuk pelayanan).",
      },
      {
        jp: "「申し訳ありません」",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Terima kasih",
          "Permisi",
          "Sangat minta maaf (formal)",
          "Selamat datang",
        ],
        answer: 2,
        detail:
          "申し訳ありません = Sangat minta maaf (lebih formal dari すみません).",
      },
      {
        jp: "「ただいま」",
        reading: "",
        text: "Kapan ungkapan ini diucapkan?",
        choices: [
          "Saat keluar rumah",
          "Saat pulang ke rumah",
          "Saat tamu datang",
          "Saat bangun pagi",
        ],
        answer: 1,
        detail: "ただいま = Aku pulang! Diucapkan saat kembali ke rumah.",
      },
      {
        jp: "「おかえりなさい」",
        reading: "",
        text: "Ini adalah balasan dari ungkapan apa?",
        choices: ["いただきます", "ただいま", "おはよう", "さようなら"],
        answer: 1,
        detail: "おかえりなさい = Selamat datang (balasan dari ただいま).",
      },
      {
        jp: "「いってきます」",
        reading: "",
        text: "Kapan ungkapan ini diucapkan?",
        choices: [
          "Saat tamu datang",
          "Saat akan berangkat dari rumah",
          "Saat pulang",
          "Saat tidur",
        ],
        answer: 1,
        detail:
          "いってきます = Aku berangkat dulu. Diucapkan saat akan pergi dari rumah.",
      },
      {
        jp: "「いってらっしゃい」",
        reading: "",
        text: "Ini adalah balasan dari ungkapan apa?",
        choices: ["ただいま", "おやすみ", "いってきます", "ありがとう"],
        answer: 2,
        detail: "いってらっしゃい = Hati-hati (balasan dari いってきます).",
      },
      {
        jp: "「ご苦労様でした」",
        reading: "",
        text: "Siapa yang biasanya mengucapkan ini?",
        choices: [
          "Bawahan kepada atasan",
          "Atasan kepada bawahan",
          "Antara teman sebaya",
          "Orang tua kepada anak kecil",
        ],
        answer: 1,
        detail:
          "ご苦労様でした = Terima kasih sudah bekerja keras. Diucapkan atasan kepada bawahan.",
      },
      {
        jp: "「お疲れ様でした」",
        reading: "",
        text: "Kapan ungkapan ini digunakan?",
        choices: [
          "Hanya untuk bawahan",
          "Untuk semua kalangan setelah bekerja",
          "Hanya untuk atasan",
          "Hanya untuk teman",
        ],
        answer: 1,
        detail:
          "お疲れ様でした = Terima kasih sudah bekerja keras. Lebih umum dipakai lintas jabatan.",
      },
      {
        jp: "「それはいかがでしょうか？」",
        reading: "",
        text: "Apa fungsi kalimat ini?",
        choices: [
          "Memerintah",
          "Menolak",
          "Menawarkan/Meminta pendapat sopan",
          "Mengeluh",
        ],
        answer: 2,
        detail:
          "いかがでしょうか = Bagaimana menurut Anda? (penawaran/permintaan pendapat yang sopan).",
      },
      {
        jp: "「折り返しご連絡いたします」",
        reading: "",
        text: "Apa yang dijanjikan?",
        choices: [
          "Datang langsung",
          "Menghubungi kembali",
          "Mengirim surat",
          "Bertemu besok",
        ],
        answer: 1,
        detail: "折り返しご連絡いたします = Akan segera menghubungi kembali.",
      },
      {
        jp: "「よかったら～」",
        reading: "",
        text: "Apa fungsi ungkapan pembuka ini?",
        choices: [
          "Memaksa",
          "Mengajak/Menawarkan dengan sopan",
          "Melarang",
          "Memerintah",
        ],
        answer: 1,
        detail:
          "よかったら = Kalau kamu mau/tidak keberatan. Digunakan untuk mengajak atau menawarkan secara sopan.",
      },
      {
        jp: "「失礼いたします」",
        reading: "",
        text: "Kapan ungkapan ini digunakan?",
        choices: [
          "Saat makan",
          "Saat masuk/keluar ruangan formal",
          "Saat tidur",
          "Saat olahraga",
        ],
        answer: 1,
        detail:
          "失礼いたします = Permisi (formal). Dipakai saat masuk/keluar dari ruangan orang lain.",
      },
      {
        jp: "「こちらこそ」",
        reading: "",
        text: "Apa fungsi ungkapan ini?",
        choices: [
          "Menolak",
          "Membalas ungkapan terima kasih/maaf",
          "Menyetujui",
          "Mengkritik",
        ],
        answer: 1,
        detail:
          "こちらこそ = Saya yang seharusnya (balik mengucapkan). Membalas ucapan terima kasih atau maaf.",
      },
      {
        jp: "「〜でございます」",
        reading: "",
        text: "Apa perbedaan dengan 「〜です」?",
        choices: [
          "Tidak ada perbedaan",
          "Lebih sopan dan formal",
          "Lebih kasual",
          "Lebih pendek",
        ],
        answer: 1,
        detail:
          "〜でございます adalah bentuk sangat formal/honorific dari 〜です, dipakai dalam konteks bisnis/pelayanan.",
      },
      {
        jp: "「どうかよろしくお伝えください」",
        reading: "",
        text: "Apa yang diminta?",
        choices: [
          "Tolong sampaikan salam",
          "Tolong beri tahu kabar buruk",
          "Tolong hubungi langsung",
          "Tolong datang",
        ],
        answer: 0,
        detail:
          "よろしくお伝えください = Tolong sampaikan salam saya (kepada orang lain).",
      },
      {
        jp: "「ご都合はいかがでしょうか？」",
        reading: "",
        text: "Apa yang ditanyakan?",
        choices: ["Kesehatan", "Ketersediaan waktu/Jadwal", "Alamat", "Harga"],
        answer: 1,
        detail:
          "ご都合(ごつごう) = kenyamanan/ketersediaan waktu. Menanyakan apakah orang tersebut punya waktu.",
      },
      {
        jp: "「恐れ入りますが」",
        reading: "",
        text: "Apa fungsi ungkapan pembuka ini?",
        choices: [
          "Mengancam",
          "Mohon maaf telah merepotkan (sebelum meminta)",
          "Menolak dengan tegas",
          "Mengucapkan selamat",
        ],
        answer: 1,
        detail:
          "恐れ入りますが = Mohon maaf merepotkan, tapi... (dipakai sebelum permintaan formal).",
      },
      {
        jp: "「承知いたしました」",
        reading: "",
        text: "Apa arti ungkapan ini?",
        choices: [
          "Saya tidak setuju",
          "Saya mengerti dan menyanggupi (formal)",
          "Saya tidak tahu",
          "Saya akan coba",
        ],
        answer: 1,
        detail:
          "承知いたしました = Saya mengerti dan siap melaksanakan (sangat formal, dipakai dalam konteks kerja).",
      },
    ],
    N3: [
      {
        jp: "「〜ということだ」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Bertanya",
          "Menyatakan keraguan",
          "Menyampaikan informasi yang didengar",
          "Memberi perintah",
        ],
        answer: 2,
        detail:
          "〜ということだ = Katanya/Konon. Dipakai untuk menyampaikan informasi yang didengar/dilaporkan.",
      },
      {
        jp: "「〜わけではない」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Konfirmasi penuh",
          "Menyangkal dengan nuansa",
          "Setuju sepenuhnya",
          "Melarang",
        ],
        answer: 1,
        detail:
          "〜わけではない = Bukan berarti/tidak selalu demikian. Menyangkal sebagian (bukan penyangkalan total).",
      },
      {
        jp: "「〜に決まっている」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Kemungkinan kecil",
          "Keyakinan penuh/Pasti",
          "Keraguan besar",
          "Ketidaktahuan",
        ],
        answer: 1,
        detail:
          "〜に決まっている = Pasti/sudah pasti. Mengungkapkan keyakinan yang sangat kuat.",
      },
      {
        jp: "「〜ものだから」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Tujuan",
          "Kontras",
          "Alasan/Penjelasan (sedikit membela diri)",
          "Kondisi",
        ],
        answer: 2,
        detail:
          "〜ものだから = Karena (dipakai untuk menjelaskan/membela diri atas sesuatu).",
      },
      {
        jp: "「〜にしたって」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Kecuali",
          "Bahkan jika/Dalam kasus pun",
          "Sebagai akibat",
          "Karena",
        ],
        answer: 1,
        detail:
          "〜にしたって = Bahkan dalam kasus/bahkan jika. Mengungkapkan kondisi apapun.",
      },
      {
        jp: "「〜ところを見ると」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Menyatakan tujuan",
          "Membuat kesimpulan dari pengamatan",
          "Menggambarkan lokasi",
          "Menunjukkan kontras",
        ],
        answer: 1,
        detail:
          "〜ところを見ると = Melihat fakta bahwa.../Mempertimbangkan bahwa... (membuat inferensi).",
      },
      {
        jp: "「〜かねる」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Mudah untuk melakukan",
          "Tidak bisa melakukan (dengan sopan)",
          "Sangat suka",
          "Terpaksa melakukan",
        ],
        answer: 1,
        detail:
          "〜かねる = Tidak bisa melakukan (penolakan sopan). Sering dipakai dalam konteks bisnis.",
      },
      {
        jp: "「〜ずにはいられない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak perlu melakukan",
          "Tidak bisa tidak melakukan/Tak tertahankan",
          "Dilarang melakukan",
          "Bisa menghindari",
        ],
        answer: 1,
        detail:
          "〜ずにはいられない = Tidak bisa tidak melakukan/Tak tertahankan. Menggambarkan dorongan kuat.",
      },
      {
        jp: "「〜ようがない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Ada cara untuk melakukan",
          "Tidak ada cara untuk melakukan",
          "Mudah dilakukan",
          "Perlu dilakukan",
        ],
        answer: 1,
        detail:
          "〜ようがない = Tidak ada cara untuk melakukan. Mengungkapkan ketidakmungkinan.",
      },
      {
        jp: "「〜をきっかけに」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Menyatakan hasil",
          "Menyatakan pemicu/awal dari sesuatu",
          "Menyatakan tujuan",
          "Menyatakan kondisi",
        ],
        answer: 1,
        detail:
          "〜をきっかけに = Berawal dari/Dipicu oleh. Menyatakan momen yang memulai perubahan.",
      },
      {
        jp: "「〜に反して」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Sesuai dengan",
          "Bertentangan dengan",
          "Tergantung pada",
          "Bersamaan dengan",
        ],
        answer: 1,
        detail:
          "〜に反して = Bertentangan dengan/Berlawanan dengan. Menyatakan kontradiksi dengan harapan/norma.",
      },
      {
        jp: "「〜はもちろん」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Penegasan eksklusif",
          "Tentunya/Sudah pasti (inklusif)",
          "Pengecualian",
          "Ketidakpastian",
        ],
        answer: 1,
        detail:
          "〜はもちろん = Sudah pasti/Tentu saja. Menegaskan sesuatu sudah jelas, lalu menambahkan hal lain.",
      },
      {
        jp: "「〜てはじめて」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Sebelum melakukan",
          "Baru menyadari/bisa setelah melakukan",
          "Tanpa melakukan",
          "Setelah berhenti",
        ],
        answer: 1,
        detail:
          "〜てはじめて = Baru pertama kali menyadari/bisa setelah melakukan sesuatu.",
      },
      {
        jp: "「〜とは限らない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Pasti",
          "Belum tentu/Tidak selalu",
          "Mustahil",
          "Sudah terbukti",
        ],
        answer: 1,
        detail:
          "〜とは限らない = Tidak selalu/Belum tentu. Menyatakan pengecualian dari asumsi umum.",
      },
      {
        jp: "「〜にかかわらず」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tergantung pada",
          "Tanpa memandang/Terlepas dari",
          "Berhubungan dengan",
          "Karena",
        ],
        answer: 1,
        detail:
          "〜にかかわらず = Tanpa memandang/Terlepas dari. Menyatakan sesuatu berlaku dalam kondisi apapun.",
      },
      {
        jp: "「〜をもとに」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: ["Tujuan", "Berdasarkan", "Hasil dari", "Setelah"],
        answer: 1,
        detail:
          "〜をもとに = Berdasarkan. Menyatakan bahwa sesuatu dibuat/dilakukan berdasarkan sesuatu.",
      },
      {
        jp: "「〜に際して」",
        reading: "",
        text: "Kapan pola ini digunakan?",
        choices: [
          "Setelah kejadian biasa",
          "Pada saat/Dalam rangka kejadian penting",
          "Sebelum semua aktivitas",
          "Tanpa hubungan waktu",
        ],
        answer: 1,
        detail:
          "〜に際して = Pada saat/Dalam rangka. Dipakai untuk kejadian penting atau formal.",
      },
      {
        jp: "「〜あげく」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Hasil positif",
          "Hasil negatif setelah usaha panjang",
          "Hasil netral",
          "Hasil acak",
        ],
        answer: 1,
        detail:
          "〜あげく(に) = Setelah (panjang lebar), akhirnya (konotasi negatif/tidak diinginkan).",
      },
      {
        jp: "「〜に即して」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Bertentangan dengan",
          "Sesuai dengan/Mengikuti",
          "Mengabaikan",
          "Tanpa mempertimbangkan",
        ],
        answer: 1,
        detail:
          "〜に即して = Sesuai dengan/Berdasarkan (fakta/standar yang ada).",
      },
      {
        jp: "「〜かと思えば」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Konfirmasi",
          "Kontras yang mengejutkan",
          "Alasan logis",
          "Kesamaan",
        ],
        answer: 1,
        detail:
          "〜かと思えば = Baru saja... eh ternyata/sudah. Mengungkapkan kontras atau kejadian yang terjadi bergantian.",
      },
    ],
    N2: [
      {
        jp: "「〜をもってして」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Menyatakan tujuan",
          "Menyatakan kemampuan/sarana (bahkan dengan X pun)",
          "Menyatakan waktu",
          "Menyatakan tempat",
        ],
        answer: 1,
        detail:
          "〜をもってしても = Bahkan dengan X pun. Menekankan bahwa sesuatu yang luar biasa sekalipun tidak cukup.",
      },
      {
        jp: "「〜ならいざしらず」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "X pun bisa, Y pun bisa",
          "X mungkin dimaklumi, tapi Y tidak",
          "X sama saja dengan Y",
          "X tergantung Y",
        ],
        answer: 1,
        detail:
          "〜ならいざしらず = Mungkin bisa dimaklumi kalau X, tapi (Y tidak bisa diterima).",
      },
      {
        jp: "「〜にたえる」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak layak untuk",
          "Layak untuk/Tahan terhadap",
          "Sulit untuk",
          "Berbahaya untuk",
        ],
        answer: 1,
        detail:
          "〜にたえる = Layak untuk/Tahan terhadap. Sesuatu memiliki kualitas yang cukup untuk X.",
      },
      {
        jp: "「〜をよそに」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Memperhatikan",
          "Mengabaikan/Tidak peduli dengan",
          "Tergantung pada",
          "Berkaitan dengan",
        ],
        answer: 1,
        detail:
          "〜をよそに = Mengabaikan/Tidak peduli dengan. Melakukan sesuatu tanpa mempedulikan X.",
      },
      {
        jp: "「〜ともなると」",
        reading: "",
        text: "Kapan pola ini digunakan?",
        choices: [
          "Untuk hal biasa",
          "Untuk kondisi/posisi luar biasa yang membawa konsekuensi",
          "Untuk masa lalu",
          "Untuk dugaan",
        ],
        answer: 1,
        detail:
          "〜ともなると = Jika sudah sampai pada tingkat/kondisi (yang luar biasa) itu, maka wajar jika...",
      },
      {
        jp: "「〜にほかならない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Bukan merupakan",
          "Tidak lain adalah/Persis",
          "Mungkin saja",
          "Berbeda dari",
        ],
        answer: 1,
        detail:
          "〜にほかならない = Tidak lain adalah/Persis sama dengan. Penegasan kuat tentang identitas sesuatu.",
      },
      {
        jp: "「〜とあれば」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Meskipun",
          "Jika memang demikian (alasan yang kuat)",
          "Setelah",
          "Sebelum",
        ],
        answer: 1,
        detail:
          "〜とあれば = Jika memang demikian/karena alasan yang kuat. Menyatakan kondisi spesial yang membenarkan tindakan.",
      },
      {
        jp: "「〜ないまでも」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Harus melakukan",
          "Meski tidak X, setidaknya Y",
          "Tidak akan melakukan",
          "Sudah melakukan",
        ],
        answer: 1,
        detail:
          "〜ないまでも = Meski tidak sampai X, setidaknya Y. Menyatakan harapan yang lebih rendah.",
      },
      {
        jp: "「〜ずじまい」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Akhirnya berhasil melakukan",
          "Akhirnya tidak pernah melakukan",
          "Terpaksa melakukan",
          "Senang melakukan",
        ],
        answer: 1,
        detail:
          "〜ずじまい = Akhirnya tidak pernah melakukan (hasil yang disesalkan).",
      },
      {
        jp: "「〜のみならず」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: ["Hanya", "Tidak hanya...tapi juga", "Kecuali", "Sampai"],
        answer: 1,
        detail:
          "〜のみならず = Tidak hanya...tapi juga. Bentuk formal dari 〜だけでなく.",
      },
      {
        jp: "「〜べからず」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Harus melakukan",
          "Dilarang/Jangan (formal/tertulis)",
          "Boleh melakukan",
          "Tidak perlu",
        ],
        answer: 1,
        detail:
          "〜べからず = Dilarang/Jangan (sering dalam pengumuman/aturan tertulis).",
      },
      {
        jp: "「〜に足りない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Cukup untuk",
          "Tidak cukup untuk/Tidak layak",
          "Lebih dari cukup",
          "Tepat untuk",
        ],
        answer: 1,
        detail: "〜に足りない = Tidak cukup/tidak layak untuk X.",
      },
      {
        jp: "「〜に至っては」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Netral",
          "Menekankan ekstrem (terutama negatif)",
          "Menyatakan kondisi normal",
          "Menyatakan harapan",
        ],
        answer: 1,
        detail:
          "〜に至っては = Bahkan sampai pada... (menekankan hal yang paling ekstrem, sering negatif).",
      },
      {
        jp: "「〜かたわら」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Setelah melakukan X",
          "Sambil/Di samping melakukan X",
          "Sebelum melakukan X",
          "Karena melakukan X",
        ],
        answer: 1,
        detail:
          "〜かたわら = Sambil/Di samping (melakukan aktivitas utama, juga melakukan yang lain).",
      },
      {
        jp: "「〜なしには」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Dengan adanya X",
          "Tanpa X (tidak bisa)",
          "Tergantung X",
          "Setelah X",
        ],
        answer: 1,
        detail:
          "〜なしには = Tanpa X (tidak bisa terjadi). Menekankan keharusan adanya X.",
      },
      {
        jp: "「〜ゆえに」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Kontras",
          "Sebab/Karena (formal/sastra)",
          "Kondisi",
          "Tujuan",
        ],
        answer: 1,
        detail:
          "〜ゆえに = Karena/Oleh karena itu (bahasa formal/sastra). Sama dengan 〜だから.",
      },
      {
        jp: "「〜まじき」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Yang seharusnya dilakukan",
          "Yang seharusnya tidak dilakukan",
          "Yang bisa dilakukan",
          "Yang mudah dilakukan",
        ],
        answer: 1,
        detail:
          "〜まじき = Yang seharusnya tidak dilakukan (sering dalam konteks etika/moral, contoh: あるまじき行為).",
      },
      {
        jp: "「〜いかんで」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak peduli bagaimanapun",
          "Tergantung bagaimana/kondisi X",
          "Meskipun X",
          "Setelah X",
        ],
        answer: 1,
        detail:
          "〜いかんで = Tergantung bagaimana X. Menyatakan bahwa hasil bergantung pada kondisi tertentu.",
      },
      {
        jp: "「〜てやまない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Berhenti melakukan",
          "Tidak pernah berhenti (merasakan/melakukan)",
          "Sulit melakukan",
          "Mulai melakukan",
        ],
        answer: 1,
        detail:
          "〜てやまない = Tidak pernah berhenti/Terus-menerus (ekspresi perasaan yang kuat dan tulus).",
      },
      {
        jp: "「〜とも」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak/Belum tentu",
          "Pasti/Tentu saja (konfirmasi kuat)",
          "Mungkin",
          "Kadang-kadang",
        ],
        answer: 1,
        detail:
          "〜とも = Tentu saja/Sudah pasti (konfirmasi yang sangat kuat).",
      },
    ],
    N1: [
      {
        jp: "「〜にもまして」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Lebih dari biasanya/sebelumnya",
          "Sama seperti biasanya",
          "Lebih sedikit dari biasanya",
          "Tidak ada perubahan",
        ],
        answer: 0,
        detail:
          "〜にもまして = Lebih dari biasanya/sebelumnya. 以前にもまして = Lebih dari sebelumnya.",
      },
      {
        jp: "「〜はおろか」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Termasuk X dan Y",
          "Jangankan X, bahkan Y pun tidak",
          "Hanya X",
          "X atau Y",
        ],
        answer: 1,
        detail:
          "〜はおろか = Jangankan X, Y pun (tidak bisa). Menekankan bahwa bahkan hal yang lebih mudah pun tidak bisa.",
      },
      {
        jp: "「〜をおいて」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Selain X",
          "Tidak ada yang lain selain X",
          "Tergantung X",
          "Termasuk X",
        ],
        answer: 1,
        detail:
          "〜をおいて(ほかに)ない = Tidak ada lain kecuali X. Menegaskan X adalah satu-satunya.",
      },
      {
        jp: "「〜ともあろう」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Biasa saja",
          "Mengejutkan karena X yang terhormat melakukan Y",
          "Diharapkan dari X",
          "Cocok dengan X",
        ],
        answer: 1,
        detail:
          "〜ともあろう(ものが) = Mengejutkan bahwa seseorang setinggi X melakukan Y (konotasi kritik).",
      },
      {
        jp: "「〜にしてはじめて」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Sebelum X bisa terjadi",
          "Hanya ketika X barulah Y bisa terjadi",
          "Setelah X, Y tidak perlu",
          "X tidak berhubungan dengan Y",
        ],
        answer: 1,
        detail:
          "〜にして(はじめて) = Hanya ketika/karena X barulah Y bisa terwujud. Kondisi X adalah prasyarat mutlak Y.",
      },
      {
        jp: "「〜に即した」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Bertentangan dengan",
          "Berdasarkan/Sesuai dengan (realitas/standar)",
          "Mengabaikan",
          "Tidak relevan dengan",
        ],
        answer: 1,
        detail:
          "〜に即した = Berdasarkan/Sesuai dengan (fakta, keadaan yang ada).",
      },
      {
        jp: "「〜ともすれば」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Selalu positif",
          "Cenderung (sering ke arah negatif)",
          "Tidak pernah terjadi",
          "Pasti terjadi",
        ],
        answer: 1,
        detail:
          "〜ともすれば(もすると) = Cenderung/Mudah untuk (sering digunakan dengan makna negatif).",
      },
      {
        jp: "「〜でなくてなんだろう」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Bukan X",
          "Tidak lain adalah X (retorika kuat)",
          "Mungkin X",
          "Sulit mengatakan X",
        ],
        answer: 1,
        detail:
          "〜でなくてなんだろう = Kalau bukan X, apa lagi? (Penegasan retorika yang sangat kuat).",
      },
      {
        jp: "「〜さることながら」",
        reading: "",
        text: "Apa fungsi pola ini?",
        choices: [
          "Mengecualikan X",
          "Tidak hanya X (yang sudah jelas), tapi Y juga",
          "Hanya X saja",
          "X sudah tidak perlu disebutkan",
        ],
        answer: 1,
        detail:
          "〜さることながら = Tidak hanya X (yang sudah jelas), tapi Y juga. Mengakui X dan menambahkan Y.",
      },
      {
        jp: "「〜をきわめる」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Rata-rata",
          "Mencapai puncak/ekstrem dari",
          "Berada di bawah",
          "Normal saja",
        ],
        answer: 1,
        detail:
          "〜をきわめる = Mencapai puncak/titik ekstrem dari. 困難をきわめる = Sangat sulit (mencapai puncak kesulitan).",
      },
      {
        jp: "「〜ならでは」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak dimiliki X",
          "Hanya bisa dari/khas X",
          "Juga dimiliki X",
          "Mirip dengan X",
        ],
        answer: 1,
        detail:
          "〜ならでは(の) = Khas/Hanya bisa dari X. Menggambarkan keunikan yang hanya dimiliki X.",
      },
      {
        jp: "「〜にたる」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak layak",
          "Layak/Cukup untuk",
          "Berlebihan untuk",
          "Tidak relevan dengan",
        ],
        answer: 1,
        detail:
          "〜にたる = Layak/Cukup untuk (dipakai dengan kata yang positif seperti 信頼・尊敬にたる).",
      },
      {
        jp: "「〜といえども」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Oleh karena itu",
          "Meskipun X (konsesi formal)",
          "Karena X",
          "Setelah X",
        ],
        answer: 1,
        detail:
          "〜といえども = Meskipun/Bahkan... (konsesi yang formal/sastra).",
      },
      {
        jp: "「〜ずとも」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Harus melakukan",
          "Meski tidak melakukan (tetapi)",
          "Karena melakukan",
          "Setelah melakukan",
        ],
        answer: 1,
        detail: "〜ずとも = Meski tidak melakukan/Bahkan tanpa melakukan.",
      },
      {
        jp: "「〜をかぎりに」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Mulai dari",
          "Berakhir pada/Sebatas",
          "Selama",
          "Di sekitar",
        ],
        answer: 1,
        detail:
          "〜をかぎりに = Berakhir pada/Sebatas (waktu/momen). 今日をかぎりに = Mulai dari hari ini seterusnya (atau: selesai hari ini).",
      },
      {
        jp: "「〜にたえない」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Cukup untuk",
          "Tidak tertahankan/Sangat X",
          "Tidak perlu",
          "Biasa saja",
        ],
        answer: 1,
        detail:
          "〜にたえない = Tidak tertahankan/Sangat (perasaan kuat). 感謝にたえない = Rasa terima kasih yang tak terhingga.",
      },
      {
        jp: "「〜ときたら」",
        reading: "",
        text: "Apa nuansa pola ini?",
        choices: [
          "Memuji X",
          "Mengeluhkan/Mengkritik X",
          "Netral tentang X",
          "Tidak yakin tentang X",
        ],
        answer: 1,
        detail:
          "〜ときたら = Soal X... (diikuti keluhan/kritik). あの人ときたら = Soal orang itu (selalu...).",
      },
      {
        jp: "「〜に足る」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Tidak cukup",
          "Layak/Cukup untuk (positif)",
          "Berlebihan",
          "Tidak relevan",
        ],
        answer: 1,
        detail: "〜に足る = Layak/Cukup untuk. 信頼に足る = Layak dipercaya.",
      },
      {
        jp: "「〜もさることながら」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Hanya X",
          "Tidak hanya X tapi Y juga penting",
          "Bukan X",
          "X lebih penting dari Y",
        ],
        answer: 1,
        detail:
          "〜もさることながら = X sudah jelas, tapi Y juga (penting). Memperluas pembahasan.",
      },
      {
        jp: "「〜をものともせず」",
        reading: "",
        text: "Apa makna pola ini?",
        choices: [
          "Takut terhadap X",
          "Tidak gentar menghadapi X",
          "Menghindari X",
          "Tergantung X",
        ],
        answer: 1,
        detail:
          "〜をものともせず = Tidak gentar menghadapi/Tanpa mempedulikan X (yang berat/sulit).",
      },
    ],
  },
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let selectedCat = null,
  selectedLvl = "N5";
let questions = [],
  current = 0,
  score = 0,
  correct = 0,
  wrong = 0;
let timerInterval = null,
  timeLeft = 30;
let answers = []; // { qi, chosen, correct }
let history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
const TOTAL = 20,
  TIME = 30;

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const $ = (id) => document.getElementById(id);
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
}

/* ══════════════════════════════════════════
   CATEGORY & LEVEL SELECTION
══════════════════════════════════════════ */
document.querySelectorAll(".cat-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedCat = btn.dataset.cat;
    updateStartBtn();
  });
});
document.querySelectorAll(".lvl-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".lvl-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedLvl = btn.dataset.lvl;
  });
});
function updateStartBtn() {
  $("startBtn").disabled = !selectedCat;
}
$("startBtn").addEventListener("click", startQuiz);
document.querySelector(".back-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if ($("screenQuiz").classList.contains("active")) {
    if (confirm("Keluar dari quiz? Progres akan hilang.")) {
      clearInterval(timerInterval);
      showScreen("screenCategory");
    }
  } else {
    showScreen("screenCategory");
  }
});

/* ══════════════════════════════════════════
   START QUIZ
══════════════════════════════════════════ */
function startQuiz() {
  const pool = QUESTIONS[selectedCat][selectedLvl];
  questions = shuffle(pool).slice(0, TOTAL);
  current = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  answers = [];
  $("quizCatBadge").textContent = {
    vocab: "Kosakata",
    kanji: "Kanji",
    grammar: "Grammar",
    listening: "Listening",
  }[selectedCat];
  $("quizLvlBadge").textContent = selectedLvl;
  $("headerScore").textContent = "0 pt";
  showScreen("screenQuiz");
  loadQuestion();
}

/* ══════════════════════════════════════════
   LOAD QUESTION
══════════════════════════════════════════ */
function loadQuestion() {
  const q = questions[current];
  $("quizCounter").textContent = `${current + 1} / ${TOTAL}`;
  $("progressFill").style.width = `${(current / TOTAL) * 100}%`;

  $("questionJp").textContent = q.jp;
  $("questionReading").textContent = q.reading || "";
  $("questionText").textContent = q.text;

  // Choices — shuffle while tracking correct answer
  const indices = shuffle([0, 1, 2, 3]);
  const correctNew = indices.indexOf(q.answer);
  const grid = $("choicesGrid");
  grid.innerHTML = "";
  const prefixes = ["A", "B", "C", "D"];
  indices.forEach((origIdx, newIdx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-prefix">${prefixes[newIdx]}</span>${q.choices[origIdx]}`;
    btn.dataset.index = newIdx;
    btn.dataset.correct = newIdx === correctNew ? "1" : "0";
    btn.addEventListener("click", () => handleAnswer(btn, correctNew, q));
    grid.appendChild(btn);
  });

  // Hide feedback
  const fb = $("feedbackBox");
  fb.classList.remove("show", "correct-fb", "wrong-fb");

  startTimer();
}

/* ══════════════════════════════════════════
   TIMER
══════════════════════════════════════════ */
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIME;
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeOut();
    }
  }, 1000);
}
function updateTimer() {
  const pct = (timeLeft / TIME) * 100;
  const bar = $("timerBar");
  const num = $("timerNum");
  bar.style.width = pct + "%";
  num.textContent = timeLeft;
  const warn = timeLeft <= 15 && timeLeft > 7;
  const danger = timeLeft <= 7;
  bar.className = "timer-bar" + (danger ? " danger" : warn ? " warn" : "");
  num.className = "timer-num" + (danger ? " danger" : warn ? " warn" : "");
}
function timeOut() {
  disableChoices();
  const q = questions[current];
  // Find correct btn
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    if (btn.dataset.correct === "1") btn.classList.add("correct");
  });
  answers.push({ qi: current, chosen: -1, correct: false });
  wrong++;
  showFeedback(false, q, "⏰ Waktu habis!");
}

/* ══════════════════════════════════════════
   HANDLE ANSWER
══════════════════════════════════════════ */
function handleAnswer(btn, correctIdx, q) {
  clearInterval(timerInterval);
  disableChoices();
  const chosen = parseInt(btn.dataset.index);
  const isCorrect = btn.dataset.correct === "1";
  if (isCorrect) {
    btn.classList.add("correct");
    const pts = Math.max(10, Math.round((timeLeft / TIME) * 100));
    score += pts;
    correct++;
    $("headerScore").textContent = score + " pt";
    $("headerScore").classList.remove("bump");
    void $("headerScore").offsetWidth;
    $("headerScore").classList.add("bump");
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".choice-btn").forEach((b) => {
      if (b.dataset.correct === "1") b.classList.add("correct");
    });
    wrong++;
  }
  answers.push({ qi: current, chosen, correct: isCorrect });
  showFeedback(isCorrect, q);
}

function disableChoices() {
  document.querySelectorAll(".choice-btn").forEach((b) => (b.disabled = true));
}

/* ══════════════════════════════════════════
   FEEDBACK
══════════════════════════════════════════ */
function showFeedback(isCorrect, q, override = "") {
  const fb = $("feedbackBox");
  fb.classList.remove("correct-fb", "wrong-fb");
  fb.classList.add(isCorrect ? "correct-fb" : "wrong-fb", "show");
  const icon = $("feedbackIcon");
  icon.textContent = isCorrect ? "✓" : "✗";
  icon.className = "feedback-icon " + (isCorrect ? "correct" : "wrong");
  $("feedbackMsg").textContent =
    override || (isCorrect ? "🎉 Benar!" : "😅 Salah!");
  $("feedbackDetail").textContent = q.detail || "";
  const isLast = current === TOTAL - 1;
  $("nextBtn").textContent = isLast ? "Lihat Hasil →" : "Soal Berikutnya →";
}
$("nextBtn").addEventListener("click", () => {
  current++;
  if (current >= TOTAL) {
    showResult();
  } else {
    loadQuestion();
  }
});

/* ══════════════════════════════════════════
   RESULT
══════════════════════════════════════════ */
function showResult() {
  clearInterval(timerInterval);
  $("progressFill").style.width = "100%";

  const pct = Math.round((correct / TOTAL) * 100);
  $("resultBadge").textContent =
    pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : pct >= 40 ? "📚" : "💪";
  $("resultTitle").textContent =
    pct === 100
      ? "Sempurna!"
      : pct >= 80
        ? "Luar Biasa!"
        : pct >= 60
          ? "Bagus!"
          : "Terus Berlatih!";
  $("resultSub").textContent =
    `Kategori: ${{ vocab: "Kosakata", kanji: "Kanji", grammar: "Grammar", listening: "Listening" }[selectedCat]} · ${selectedLvl}`;
  $("statScore").textContent = score;
  $("statCorrect").textContent = correct;
  $("statWrong").textContent = wrong;

  // Review
  const rl = $("reviewList");
  rl.innerHTML = "";
  answers.forEach((a, i) => {
    const q = questions[a.qi];
    const div = document.createElement("div");
    div.className = "review-item " + (a.correct ? "correct" : "wrong");
    div.innerHTML = `
      <div class="review-dot">${a.correct ? "✓" : "✗"}</div>
      <div>
        <div class="review-q">${q.jp}</div>
        <div class="review-ans">
          ${!a.correct && a.chosen >= 0 ? `<span class="wrong-ans">Jawaban kamu</span>` : ""}
          Jawaban benar: <span>${q.choices[q.answer]}</span>
        </div>
      </div>`;
    rl.appendChild(div);
  });

  // History
  const entry = {
    date: new Date().toLocaleDateString("id-ID"),
    cat: selectedCat,
    lvl: selectedLvl,
    score,
    correct,
    total: TOTAL,
  };
  history.unshift(entry);
  if (history.length > 10) history.pop();
  localStorage.setItem("quizHistory", JSON.stringify(history));

  const hl = $("historyList");
  hl.innerHTML = "";
  history.forEach((h) => {
    const catName =
      {
        vocab: "Kosakata",
        kanji: "Kanji",
        grammar: "Grammar",
        listening: "Listening",
      }[h.cat] || h.cat;
    const d = document.createElement("div");
    d.className = "history-item";
    d.innerHTML = `<span class="history-meta">${h.date} · ${catName} ${h.lvl}</span><span class="history-score">${h.score} pt (${h.correct}/${h.total})</span>`;
    hl.appendChild(d);
  });

  showScreen("screenResult");
}

$("retryBtn").addEventListener("click", startQuiz);
$("backCatBtn").addEventListener("click", () => showScreen("screenCategory"));
