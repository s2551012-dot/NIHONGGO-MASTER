(function () {
  // ══════════════════════════════════════════════════
  // DATA — LENGKAP JLPT N5
  // ══════════════════════════════════════════════════

  var VOCAB = [
    // Verba
    {
      jp: "食べる",
      hira: "たべる",
      meaning: "Makan",
      example: "私はご飯を食べます。",
      trans: "Saya makan nasi.",
    },
    {
      jp: "飲む",
      hira: "のむ",
      meaning: "Minum",
      example: "水を飲みます。",
      trans: "Saya minum air.",
    },
    {
      jp: "見る",
      hira: "みる",
      meaning: "Melihat / Menonton",
      example: "テレビを見ます。",
      trans: "Saya menonton TV.",
    },
    {
      jp: "行く",
      hira: "いく",
      meaning: "Pergi",
      example: "学校に行きます。",
      trans: "Saya pergi ke sekolah.",
    },
    {
      jp: "来る",
      hira: "くる",
      meaning: "Datang",
      example: "友達が来ます。",
      trans: "Teman saya datang.",
    },
    {
      jp: "する",
      hira: "する",
      meaning: "Melakukan",
      example: "勉強をします。",
      trans: "Saya belajar.",
    },
    {
      jp: "ある",
      hira: "ある",
      meaning: "Ada (benda)",
      example: "本があります。",
      trans: "Ada buku.",
    },
    {
      jp: "いる",
      hira: "いる",
      meaning: "Ada (makhluk)",
      example: "猫がいます。",
      trans: "Ada kucing.",
    },
    {
      jp: "買う",
      hira: "かう",
      meaning: "Membeli",
      example: "本を買います。",
      trans: "Saya membeli buku.",
    },
    {
      jp: "読む",
      hira: "よむ",
      meaning: "Membaca",
      example: "本を読みます。",
      trans: "Saya membaca buku.",
    },
    {
      jp: "書く",
      hira: "かく",
      meaning: "Menulis",
      example: "手紙を書きます。",
      trans: "Saya menulis surat.",
    },
    {
      jp: "聞く",
      hira: "きく",
      meaning: "Mendengar / Bertanya",
      example: "音楽を聞きます。",
      trans: "Saya mendengarkan musik.",
    },
    {
      jp: "話す",
      hira: "はなす",
      meaning: "Berbicara",
      example: "日本語を話します。",
      trans: "Saya berbicara bahasa Jepang.",
    },
    {
      jp: "寝る",
      hira: "ねる",
      meaning: "Tidur",
      example: "早く寝ます。",
      trans: "Saya tidur lebih awal.",
    },
    {
      jp: "起きる",
      hira: "おきる",
      meaning: "Bangun tidur",
      example: "六時に起きます。",
      trans: "Saya bangun jam enam.",
    },
    {
      jp: "帰る",
      hira: "かえる",
      meaning: "Pulang",
      example: "家に帰ります。",
      trans: "Saya pulang ke rumah.",
    },
    {
      jp: "出る",
      hira: "でる",
      meaning: "Keluar / Pergi",
      example: "七時に家を出ます。",
      trans: "Saya keluar rumah jam 7.",
    },
    {
      jp: "入る",
      hira: "はいる",
      meaning: "Masuk",
      example: "部屋に入ります。",
      trans: "Saya masuk ke kamar.",
    },
    {
      jp: "乗る",
      hira: "のる",
      meaning: "Naik (kendaraan)",
      example: "電車に乗ります。",
      trans: "Saya naik kereta.",
    },
    {
      jp: "降りる",
      hira: "おりる",
      meaning: "Turun (kendaraan)",
      example: "バスを降ります。",
      trans: "Saya turun dari bus.",
    },
    {
      jp: "開ける",
      hira: "あける",
      meaning: "Membuka",
      example: "窓を開けます。",
      trans: "Saya membuka jendela.",
    },
    {
      jp: "閉める",
      hira: "しめる",
      meaning: "Menutup",
      example: "ドアを閉めます。",
      trans: "Saya menutup pintu.",
    },
    {
      jp: "つける",
      hira: "つける",
      meaning: "Menyalakan",
      example: "電気をつけます。",
      trans: "Saya menyalakan lampu.",
    },
    {
      jp: "消す",
      hira: "けす",
      meaning: "Mematikan / Menghapus",
      example: "電気を消します。",
      trans: "Saya mematikan lampu.",
    },
    {
      jp: "洗う",
      hira: "あらう",
      meaning: "Mencuci",
      example: "手を洗います。",
      trans: "Saya mencuci tangan.",
    },
    {
      jp: "着る",
      hira: "きる",
      meaning: "Memakai (pakaian)",
      example: "シャツを着ます。",
      trans: "Saya memakai kemeja.",
    },
    {
      jp: "脱ぐ",
      hira: "ぬぐ",
      meaning: "Melepas (pakaian)",
      example: "靴を脱ぎます。",
      trans: "Saya melepas sepatu.",
    },
    {
      jp: "待つ",
      hira: "まつ",
      meaning: "Menunggu",
      example: "ここで待ちます。",
      trans: "Saya menunggu di sini.",
    },
    {
      jp: "会う",
      hira: "あう",
      meaning: "Bertemu",
      example: "友達に会います。",
      trans: "Saya bertemu teman.",
    },
    {
      jp: "分かる",
      hira: "わかる",
      meaning: "Mengerti / Paham",
      example: "日本語が分かります。",
      trans: "Saya mengerti bahasa Jepang.",
    },
    {
      jp: "知る",
      hira: "しる",
      meaning: "Mengetahui",
      example: "彼を知っています。",
      trans: "Saya mengenal dia.",
    },
    {
      jp: "思う",
      hira: "おもう",
      meaning: "Berpikir / Merasa",
      example: "おいしいと思います。",
      trans: "Saya pikir itu enak.",
    },
    {
      jp: "言う",
      hira: "いう",
      meaning: "Mengatakan / Berkata",
      example: "何を言いましたか。",
      trans: "Apa yang Anda katakan?",
    },
    {
      jp: "教える",
      hira: "おしえる",
      meaning: "Mengajar / Memberitahu",
      example: "日本語を教えます。",
      trans: "Saya mengajar bahasa Jepang.",
    },
    {
      jp: "もらう",
      hira: "もらう",
      meaning: "Menerima",
      example: "プレゼントをもらいました。",
      trans: "Saya menerima hadiah.",
    },
    {
      jp: "あげる",
      hira: "あげる",
      meaning: "Memberi (kepada orang lain)",
      example: "花をあげます。",
      trans: "Saya memberi bunga.",
    },
    {
      jp: "くれる",
      hira: "くれる",
      meaning: "Memberi (kepada saya)",
      example: "友達がくれました。",
      trans: "Teman memberikan kepada saya.",
    },
    {
      jp: "借りる",
      hira: "かりる",
      meaning: "Meminjam",
      example: "本を借ります。",
      trans: "Saya meminjam buku.",
    },
    {
      jp: "貸す",
      hira: "かす",
      meaning: "Meminjamkan",
      example: "傘を貸します。",
      trans: "Saya meminjamkan payung.",
    },
    {
      jp: "使う",
      hira: "つかう",
      meaning: "Menggunakan",
      example: "電話を使います。",
      trans: "Saya menggunakan telepon.",
    },
    {
      jp: "作る",
      hira: "つくる",
      meaning: "Membuat",
      example: "料理を作ります。",
      trans: "Saya memasak.",
    },
    {
      jp: "切る",
      hira: "きる",
      meaning: "Memotong",
      example: "紙を切ります。",
      trans: "Saya memotong kertas.",
    },
    {
      jp: "飛ぶ",
      hira: "とぶ",
      meaning: "Terbang / Melompat",
      example: "鳥が飛びます。",
      trans: "Burung terbang.",
    },
    {
      jp: "走る",
      hira: "はしる",
      meaning: "Berlari",
      example: "毎朝走ります。",
      trans: "Saya berlari setiap pagi.",
    },
    {
      jp: "歩く",
      hira: "あるく",
      meaning: "Berjalan",
      example: "駅まで歩きます。",
      trans: "Saya berjalan ke stasiun.",
    },
    {
      jp: "泳ぐ",
      hira: "およぐ",
      meaning: "Berenang",
      example: "海で泳ぎます。",
      trans: "Saya berenang di laut.",
    },
    {
      jp: "弾く",
      hira: "ひく",
      meaning: "Memainkan (alat musik)",
      example: "ピアノを弾きます。",
      trans: "Saya memainkan piano.",
    },
    {
      jp: "歌う",
      hira: "うたう",
      meaning: "Bernyanyi",
      example: "歌を歌います。",
      trans: "Saya bernyanyi.",
    },
    {
      jp: "働く",
      hira: "はたらく",
      meaning: "Bekerja",
      example: "会社で働きます。",
      trans: "Saya bekerja di perusahaan.",
    },
    {
      jp: "休む",
      hira: "やすむ",
      meaning: "Beristirahat / Libur",
      example: "日曜日に休みます。",
      trans: "Saya libur hari Minggu.",
    },
    {
      jp: "遊ぶ",
      hira: "あそぶ",
      meaning: "Bermain / Bersenang-senang",
      example: "公園で遊びます。",
      trans: "Saya bermain di taman.",
    },
    // Kata benda — orang & keluarga
    {
      jp: "私",
      hira: "わたし",
      meaning: "Saya",
      example: "私は学生です。",
      trans: "Saya adalah siswa.",
    },
    {
      jp: "あなた",
      hira: "あなた",
      meaning: "Kamu / Anda",
      example: "あなたの名前は？",
      trans: "Nama Anda siapa?",
    },
    {
      jp: "彼",
      hira: "かれ",
      meaning: "Dia (laki-laki)",
      example: "彼は先生です。",
      trans: "Dia adalah guru.",
    },
    {
      jp: "彼女",
      hira: "かのじょ",
      meaning: "Dia (perempuan) / Pacar",
      example: "彼女は学生です。",
      trans: "Dia adalah siswa.",
    },
    {
      jp: "人",
      hira: "ひと",
      meaning: "Orang",
      example: "あの人は誰ですか。",
      trans: "Orang itu siapa?",
    },
    {
      jp: "友達",
      hira: "ともだち",
      meaning: "Teman",
      example: "友達と行きます。",
      trans: "Saya pergi bersama teman.",
    },
    {
      jp: "家族",
      hira: "かぞく",
      meaning: "Keluarga",
      example: "家族と住んでいます。",
      trans: "Saya tinggal dengan keluarga.",
    },
    {
      jp: "お父さん",
      hira: "おとうさん",
      meaning: "Ayah",
      example: "お父さんは医者です。",
      trans: "Ayah adalah dokter.",
    },
    {
      jp: "お母さん",
      hira: "おかあさん",
      meaning: "Ibu",
      example: "お母さんが作りました。",
      trans: "Ibu yang membuatnya.",
    },
    {
      jp: "お兄さん",
      hira: "おにいさん",
      meaning: "Kakak laki-laki",
      example: "お兄さんは大学生です。",
      trans: "Kakak laki-laki adalah mahasiswa.",
    },
    {
      jp: "お姉さん",
      hira: "おねえさん",
      meaning: "Kakak perempuan",
      example: "お姉さんは会社員です。",
      trans: "Kakak perempuan adalah karyawan.",
    },
    {
      jp: "弟",
      hira: "おとうと",
      meaning: "Adik laki-laki",
      example: "弟は中学生です。",
      trans: "Adik laki-laki adalah siswa SMP.",
    },
    {
      jp: "妹",
      hira: "いもうと",
      meaning: "Adik perempuan",
      example: "妹はかわいいです。",
      trans: "Adik perempuan itu lucu.",
    },
    {
      jp: "先生",
      hira: "せんせい",
      meaning: "Guru",
      example: "田中先生は親切です。",
      trans: "Guru Tanaka baik hati.",
    },
    {
      jp: "学生",
      hira: "がくせい",
      meaning: "Pelajar / Siswa",
      example: "私は大学生です。",
      trans: "Saya adalah mahasiswa.",
    },
    {
      jp: "会社員",
      hira: "かいしゃいん",
      meaning: "Karyawan",
      example: "父は会社員です。",
      trans: "Ayah adalah karyawan.",
    },
    // Tempat
    {
      jp: "学校",
      hira: "がっこう",
      meaning: "Sekolah",
      example: "学校に行きます。",
      trans: "Saya pergi ke sekolah.",
    },
    {
      jp: "大学",
      hira: "だいがく",
      meaning: "Universitas",
      example: "大学で勉強します。",
      trans: "Saya belajar di universitas.",
    },
    {
      jp: "病院",
      hira: "びょういん",
      meaning: "Rumah sakit",
      example: "病院に行きます。",
      trans: "Saya pergi ke rumah sakit.",
    },
    {
      jp: "銀行",
      hira: "ぎんこう",
      meaning: "Bank",
      example: "銀行でお金をおろします。",
      trans: "Saya mengambil uang di bank.",
    },
    {
      jp: "郵便局",
      hira: "ゆうびんきょく",
      meaning: "Kantor pos",
      example: "郵便局で手紙を出します。",
      trans: "Saya mengirim surat di kantor pos.",
    },
    {
      jp: "駅",
      hira: "えき",
      meaning: "Stasiun",
      example: "駅まで歩きます。",
      trans: "Saya berjalan ke stasiun.",
    },
    {
      jp: "空港",
      hira: "くうこう",
      meaning: "Bandara",
      example: "空港まで行きます。",
      trans: "Saya pergi ke bandara.",
    },
    {
      jp: "デパート",
      hira: "デパート",
      meaning: "Departemen store",
      example: "デパートで買い物します。",
      trans: "Saya belanja di dept. store.",
    },
    {
      jp: "スーパー",
      hira: "スーパー",
      meaning: "Supermarket",
      example: "スーパーで野菜を買います。",
      trans: "Saya membeli sayuran di supermarket.",
    },
    {
      jp: "レストラン",
      hira: "レストラン",
      meaning: "Restoran",
      example: "レストランで食べます。",
      trans: "Saya makan di restoran.",
    },
    {
      jp: "図書館",
      hira: "としょかん",
      meaning: "Perpustakaan",
      example: "図書館で本を読みます。",
      trans: "Saya membaca buku di perpustakaan.",
    },
    {
      jp: "公園",
      hira: "こうえん",
      meaning: "Taman",
      example: "公園で遊びます。",
      trans: "Saya bermain di taman.",
    },
    {
      jp: "家",
      hira: "いえ / うち",
      meaning: "Rumah",
      example: "家に帰ります。",
      trans: "Saya pulang ke rumah.",
    },
    {
      jp: "部屋",
      hira: "へや",
      meaning: "Kamar",
      example: "部屋を掃除します。",
      trans: "Saya membersihkan kamar.",
    },
    {
      jp: "トイレ",
      hira: "トイレ",
      meaning: "Toilet",
      example: "トイレはどこですか。",
      trans: "Toilet ada di mana?",
    },
    // Makanan & minuman
    {
      jp: "ご飯",
      hira: "ごはん",
      meaning: "Nasi / Makan",
      example: "ご飯を食べます。",
      trans: "Saya makan nasi.",
    },
    {
      jp: "パン",
      hira: "パン",
      meaning: "Roti",
      example: "朝ごはんにパンを食べます。",
      trans: "Saya makan roti saat sarapan.",
    },
    {
      jp: "肉",
      hira: "にく",
      meaning: "Daging",
      example: "肉が好きです。",
      trans: "Saya suka daging.",
    },
    {
      jp: "魚",
      hira: "さかな",
      meaning: "Ikan",
      example: "魚を食べます。",
      trans: "Saya makan ikan.",
    },
    {
      jp: "野菜",
      hira: "やさい",
      meaning: "Sayuran",
      example: "野菜を食べましょう。",
      trans: "Ayo makan sayuran.",
    },
    {
      jp: "果物",
      hira: "くだもの",
      meaning: "Buah-buahan",
      example: "果物が好きです。",
      trans: "Saya suka buah-buahan.",
    },
    {
      jp: "水",
      hira: "みず",
      meaning: "Air",
      example: "水を飲みます。",
      trans: "Saya minum air.",
    },
    {
      jp: "お茶",
      hira: "おちゃ",
      meaning: "Teh (Jepang)",
      example: "お茶を飲みます。",
      trans: "Saya minum teh.",
    },
    {
      jp: "コーヒー",
      hira: "コーヒー",
      meaning: "Kopi",
      example: "コーヒーが好きです。",
      trans: "Saya suka kopi.",
    },
    {
      jp: "牛乳",
      hira: "ぎゅうにゅう",
      meaning: "Susu sapi",
      example: "毎日牛乳を飲みます。",
      trans: "Saya minum susu setiap hari.",
    },
    {
      jp: "卵",
      hira: "たまご",
      meaning: "Telur",
      example: "卵を食べます。",
      trans: "Saya makan telur.",
    },
    // Waktu
    {
      jp: "今日",
      hira: "きょう",
      meaning: "Hari ini",
      example: "今日は暑いです。",
      trans: "Hari ini panas.",
    },
    {
      jp: "昨日",
      hira: "きのう",
      meaning: "Kemarin",
      example: "昨日映画を見ました。",
      trans: "Kemarin saya menonton film.",
    },
    {
      jp: "明日",
      hira: "あした",
      meaning: "Besok",
      example: "明日会いましょう。",
      trans: "Mari bertemu besok.",
    },
    {
      jp: "今",
      hira: "いま",
      meaning: "Sekarang",
      example: "今何時ですか。",
      trans: "Sekarang jam berapa?",
    },
    {
      jp: "毎日",
      hira: "まいにち",
      meaning: "Setiap hari",
      example: "毎日勉強します。",
      trans: "Saya belajar setiap hari.",
    },
    {
      jp: "毎朝",
      hira: "まいあさ",
      meaning: "Setiap pagi",
      example: "毎朝ジョギングします。",
      trans: "Saya jogging setiap pagi.",
    },
    {
      jp: "毎晩",
      hira: "まいばん",
      meaning: "Setiap malam",
      example: "毎晩本を読みます。",
      trans: "Saya membaca buku setiap malam.",
    },
    {
      jp: "今週",
      hira: "こんしゅう",
      meaning: "Minggu ini",
      example: "今週は忙しいです。",
      trans: "Minggu ini sibuk.",
    },
    {
      jp: "来週",
      hira: "らいしゅう",
      meaning: "Minggu depan",
      example: "来週テストがあります。",
      trans: "Minggu depan ada ujian.",
    },
    {
      jp: "先週",
      hira: "せんしゅう",
      meaning: "Minggu lalu",
      example: "先週旅行しました。",
      trans: "Minggu lalu saya traveling.",
    },
    {
      jp: "今月",
      hira: "こんげつ",
      meaning: "Bulan ini",
      example: "今月誕生日です。",
      trans: "Bulan ini ulang tahun saya.",
    },
    {
      jp: "来月",
      hira: "らいげつ",
      meaning: "Bulan depan",
      example: "来月日本へ行きます。",
      trans: "Bulan depan saya pergi ke Jepang.",
    },
    {
      jp: "今年",
      hira: "ことし",
      meaning: "Tahun ini",
      example: "今年二十歳になります。",
      trans: "Tahun ini saya berusia 20.",
    },
    {
      jp: "来年",
      hira: "らいねん",
      meaning: "Tahun depan",
      example: "来年結婚します。",
      trans: "Tahun depan saya menikah.",
    },
    {
      jp: "午前",
      hira: "ごぜん",
      meaning: "Pagi / AM",
      example: "午前九時に来てください。",
      trans: "Datanglah jam 9 pagi.",
    },
    {
      jp: "午後",
      hira: "ごご",
      meaning: "Sore / PM",
      example: "午後から雨が降ります。",
      trans: "Hujan turun dari siang.",
    },
    {
      jp: "朝",
      hira: "あさ",
      meaning: "Pagi",
      example: "朝ご飯を食べます。",
      trans: "Saya sarapan.",
    },
    {
      jp: "昼",
      hira: "ひる",
      meaning: "Siang",
      example: "昼ご飯は何ですか。",
      trans: "Makan siang apa?",
    },
    {
      jp: "夜",
      hira: "よる",
      meaning: "Malam",
      example: "夜遅く寝ます。",
      trans: "Saya tidur larut malam.",
    },
    // Angka & jumlah
    {
      jp: "一つ",
      hira: "ひとつ",
      meaning: "Satu (benda)",
      example: "りんごを一つください。",
      trans: "Tolong satu apel.",
    },
    {
      jp: "二つ",
      hira: "ふたつ",
      meaning: "Dua (benda)",
      example: "ケーキを二つ買いました。",
      trans: "Saya membeli dua kue.",
    },
    {
      jp: "いくら",
      hira: "いくら",
      meaning: "Berapa harganya?",
      example: "これはいくらですか。",
      trans: "Ini berapa harganya?",
    },
    {
      jp: "いくつ",
      hira: "いくつ",
      meaning: "Berapa banyak?",
      example: "いくつありますか。",
      trans: "Ada berapa?",
    },
    // Kata sifat
    {
      jp: "大きい",
      hira: "おおきい",
      meaning: "Besar",
      example: "大きい犬です。",
      trans: "Anjing yang besar.",
    },
    {
      jp: "小さい",
      hira: "ちいさい",
      meaning: "Kecil",
      example: "小さい猫がいます。",
      trans: "Ada kucing kecil.",
    },
    {
      jp: "高い",
      hira: "たかい",
      meaning: "Mahal / Tinggi",
      example: "この本は高いです。",
      trans: "Buku ini mahal.",
    },
    {
      jp: "安い",
      hira: "やすい",
      meaning: "Murah",
      example: "スーパーは安いです。",
      trans: "Supermarket itu murah.",
    },
    {
      jp: "長い",
      hira: "ながい",
      meaning: "Panjang",
      example: "髪が長いです。",
      trans: "Rambutnya panjang.",
    },
    {
      jp: "短い",
      hira: "みじかい",
      meaning: "Pendek",
      example: "夏は夜が短いです。",
      trans: "Di musim panas malamnya pendek.",
    },
    {
      jp: "多い",
      hira: "おおい",
      meaning: "Banyak",
      example: "人が多いです。",
      trans: "Orangnya banyak.",
    },
    {
      jp: "少ない",
      hira: "すくない",
      meaning: "Sedikit",
      example: "時間が少ないです。",
      trans: "Waktunya sedikit.",
    },
    {
      jp: "新しい",
      hira: "あたらしい",
      meaning: "Baru",
      example: "新しい車を買いました。",
      trans: "Saya membeli mobil baru.",
    },
    {
      jp: "古い",
      hira: "ふるい",
      meaning: "Lama / Tua",
      example: "古い家です。",
      trans: "Rumahnya tua.",
    },
    {
      jp: "暑い",
      hira: "あつい",
      meaning: "Panas (cuaca)",
      example: "今日は暑いです。",
      trans: "Hari ini panas.",
    },
    {
      jp: "寒い",
      hira: "さむい",
      meaning: "Dingin (cuaca)",
      example: "冬は寒いです。",
      trans: "Musim dingin itu dingin.",
    },
    {
      jp: "熱い",
      hira: "あつい",
      meaning: "Panas (benda)",
      example: "コーヒーが熱いです。",
      trans: "Kopinya panas.",
    },
    {
      jp: "冷たい",
      hira: "つめたい",
      meaning: "Dingin (benda)",
      example: "水が冷たいです。",
      trans: "Airnya dingin.",
    },
    {
      jp: "いい／よい",
      hira: "いい／よい",
      meaning: "Bagus / Baik",
      example: "天気がいいです。",
      trans: "Cuacanya bagus.",
    },
    {
      jp: "悪い",
      hira: "わるい",
      meaning: "Buruk / Jelek",
      example: "天気が悪いです。",
      trans: "Cuacanya buruk.",
    },
    {
      jp: "難しい",
      hira: "むずかしい",
      meaning: "Sulit",
      example: "日本語は難しいです。",
      trans: "Bahasa Jepang itu sulit.",
    },
    {
      jp: "易しい",
      hira: "やさしい",
      meaning: "Mudah",
      example: "この問題は易しいです。",
      trans: "Soal ini mudah.",
    },
    {
      jp: "楽しい",
      hira: "たのしい",
      meaning: "Menyenangkan",
      example: "旅行は楽しいです。",
      trans: "Perjalanan itu menyenangkan.",
    },
    {
      jp: "おいしい",
      hira: "おいしい",
      meaning: "Enak / Lezat",
      example: "この料理はおいしいです。",
      trans: "Masakan ini enak.",
    },
    {
      jp: "まずい",
      hira: "まずい",
      meaning: "Tidak enak",
      example: "この薬はまずいです。",
      trans: "Obat ini tidak enak.",
    },
    {
      jp: "白い",
      hira: "しろい",
      meaning: "Putih",
      example: "白いシャツです。",
      trans: "Kemeja putih.",
    },
    {
      jp: "黒い",
      hira: "くろい",
      meaning: "Hitam",
      example: "黒い猫がいます。",
      trans: "Ada kucing hitam.",
    },
    {
      jp: "赤い",
      hira: "あかい",
      meaning: "Merah",
      example: "赤いバラです。",
      trans: "Mawar merah.",
    },
    {
      jp: "青い",
      hira: "あおい",
      meaning: "Biru / Hijau (alami)",
      example: "青い空です。",
      trans: "Langit biru.",
    },
    // Kata keterangan
    {
      jp: "とても",
      hira: "とても",
      meaning: "Sangat",
      example: "とても嬉しいです。",
      trans: "Saya sangat senang.",
    },
    {
      jp: "少し",
      hira: "すこし",
      meaning: "Sedikit",
      example: "少し待ってください。",
      trans: "Tolong tunggu sebentar.",
    },
    {
      jp: "たくさん",
      hira: "たくさん",
      meaning: "Banyak",
      example: "たくさん食べました。",
      trans: "Saya makan banyak.",
    },
    {
      jp: "もう",
      hira: "もう",
      meaning: "Sudah / Lagi",
      example: "もう食べました。",
      trans: "Sudah makan.",
    },
    {
      jp: "まだ",
      hira: "まだ",
      meaning: "Masih / Belum",
      example: "まだ食べていません。",
      trans: "Belum makan.",
    },
    {
      jp: "また",
      hira: "また",
      meaning: "Lagi / Lain kali",
      example: "またきてください。",
      trans: "Silakan datang lagi.",
    },
    {
      jp: "一緒に",
      hira: "いっしょに",
      meaning: "Bersama-sama",
      example: "一緒に行きましょう。",
      trans: "Mari pergi bersama.",
    },
    {
      jp: "ゆっくり",
      hira: "ゆっくり",
      meaning: "Pelan-pelan",
      example: "ゆっくり話してください。",
      trans: "Tolong bicara pelan-pelan.",
    },
    {
      jp: "どうぞ",
      hira: "どうぞ",
      meaning: "Silakan",
      example: "どうぞ食べてください。",
      trans: "Silakan makan.",
    },
    {
      jp: "どうも",
      hira: "どうも",
      meaning: "Terima kasih / Permisi",
      example: "どうもありがとう。",
      trans: "Terima kasih banyak.",
    },
    // Benda sehari-hari
    {
      jp: "本",
      hira: "ほん",
      meaning: "Buku",
      example: "本を読みます。",
      trans: "Saya membaca buku.",
    },
    {
      jp: "雑誌",
      hira: "ざっし",
      meaning: "Majalah",
      example: "雑誌を買います。",
      trans: "Saya membeli majalah.",
    },
    {
      jp: "新聞",
      hira: "しんぶん",
      meaning: "Koran",
      example: "毎朝新聞を読みます。",
      trans: "Saya membaca koran setiap pagi.",
    },
    {
      jp: "電話",
      hira: "でんわ",
      meaning: "Telepon",
      example: "電話をかけます。",
      trans: "Saya menelepon.",
    },
    {
      jp: "テレビ",
      hira: "テレビ",
      meaning: "Televisi",
      example: "テレビを見ます。",
      trans: "Saya menonton TV.",
    },
    {
      jp: "ラジオ",
      hira: "ラジオ",
      meaning: "Radio",
      example: "ラジオを聞きます。",
      trans: "Saya mendengarkan radio.",
    },
    {
      jp: "時計",
      hira: "とけい",
      meaning: "Jam / Arloji",
      example: "時計を見ます。",
      trans: "Saya melihat jam.",
    },
    {
      jp: "鍵",
      hira: "かぎ",
      meaning: "Kunci",
      example: "鍵をなくしました。",
      trans: "Saya kehilangan kunci.",
    },
    {
      jp: "財布",
      hira: "さいふ",
      meaning: "Dompet",
      example: "財布を忘れました。",
      trans: "Saya lupa membawa dompet.",
    },
    {
      jp: "傘",
      hira: "かさ",
      meaning: "Payung",
      example: "傘を持ちます。",
      trans: "Saya membawa payung.",
    },
    {
      jp: "眼鏡",
      hira: "めがね",
      meaning: "Kacamata",
      example: "眼鏡をかけます。",
      trans: "Saya memakai kacamata.",
    },
    {
      jp: "服",
      hira: "ふく",
      meaning: "Pakaian",
      example: "服を着ます。",
      trans: "Saya memakai pakaian.",
    },
    {
      jp: "靴",
      hira: "くつ",
      meaning: "Sepatu",
      example: "靴を脱いでください。",
      trans: "Tolong lepas sepatu.",
    },
    // Alam & lingkungan
    {
      jp: "犬",
      hira: "いぬ",
      meaning: "Anjing",
      example: "犬を飼っています。",
      trans: "Saya memelihara anjing.",
    },
    {
      jp: "猫",
      hira: "ねこ",
      meaning: "Kucing",
      example: "猫が好きです。",
      trans: "Saya suka kucing.",
    },
    {
      jp: "花",
      hira: "はな",
      meaning: "Bunga",
      example: "花が咲いています。",
      trans: "Bunga sedang mekar.",
    },
    {
      jp: "木",
      hira: "き",
      meaning: "Pohon",
      example: "公園に木があります。",
      trans: "Di taman ada pohon.",
    },
    {
      jp: "山",
      hira: "やま",
      meaning: "Gunung",
      example: "山に登ります。",
      trans: "Saya mendaki gunung.",
    },
    {
      jp: "川",
      hira: "かわ",
      meaning: "Sungai",
      example: "川で泳ぎます。",
      trans: "Saya berenang di sungai.",
    },
    {
      jp: "海",
      hira: "うみ",
      meaning: "Laut",
      example: "夏は海に行きます。",
      trans: "Di musim panas saya pergi ke laut.",
    },
    {
      jp: "空",
      hira: "そら",
      meaning: "Langit",
      example: "空が青いです。",
      trans: "Langitnya biru.",
    },
    {
      jp: "雨",
      hira: "あめ",
      meaning: "Hujan",
      example: "雨が降っています。",
      trans: "Hujan sedang turun.",
    },
    {
      jp: "雪",
      hira: "ゆき",
      meaning: "Salju",
      example: "雪が降りました。",
      trans: "Salju turun.",
    },
    // Kata tanya
    {
      jp: "何",
      hira: "なに／なん",
      meaning: "Apa",
      example: "これは何ですか。",
      trans: "Ini apa?",
    },
    {
      jp: "誰",
      hira: "だれ",
      meaning: "Siapa",
      example: "あの人は誰ですか。",
      trans: "Orang itu siapa?",
    },
    {
      jp: "どこ",
      hira: "どこ",
      meaning: "Di mana",
      example: "トイレはどこですか。",
      trans: "Toilet di mana?",
    },
    {
      jp: "いつ",
      hira: "いつ",
      meaning: "Kapan",
      example: "いつ来ますか。",
      trans: "Kapan datang?",
    },
    {
      jp: "どれ",
      hira: "どれ",
      meaning: "Yang mana",
      example: "どれがいいですか。",
      trans: "Yang mana yang baik?",
    },
    {
      jp: "どんな",
      hira: "どんな",
      meaning: "Seperti apa / Apa jenis",
      example: "どんな音楽が好きですか。",
      trans: "Suka musik jenis apa?",
    },
    {
      jp: "どうして",
      hira: "どうして",
      meaning: "Mengapa",
      example: "どうして来ませんでしたか。",
      trans: "Mengapa tidak datang?",
    },
    {
      jp: "どのくらい",
      hira: "どのくらい",
      meaning: "Seberapa / Berapa lama",
      example: "どのくらいかかりますか。",
      trans: "Berapa lama?",
    },
    // Kata penunjuk
    {
      jp: "これ",
      hira: "これ",
      meaning: "Ini (dekat pembicara)",
      example: "これは何ですか。",
      trans: "Ini apa?",
    },
    {
      jp: "それ",
      hira: "それ",
      meaning: "Itu (dekat lawan bicara)",
      example: "それをください。",
      trans: "Tolong berikan itu.",
    },
    {
      jp: "あれ",
      hira: "あれ",
      meaning: "Itu (jauh dari keduanya)",
      example: "あれは何ですか。",
      trans: "Itu apa?",
    },
    {
      jp: "ここ",
      hira: "ここ",
      meaning: "Di sini",
      example: "ここに座ってください。",
      trans: "Tolong duduk di sini.",
    },
    {
      jp: "そこ",
      hira: "そこ",
      meaning: "Di sana (dekat lawan bicara)",
      example: "そこに置いてください。",
      trans: "Tolong taruh di sana.",
    },
    {
      jp: "あそこ",
      hira: "あそこ",
      meaning: "Di sana (jauh)",
      example: "あそこがトイレです。",
      trans: "Toilet ada di sana.",
    },
    {
      jp: "こちら",
      hira: "こちら",
      meaning: "Ke sini / Ini (formal)",
      example: "こちらへどうぞ。",
      trans: "Silakan ke sini.",
    },
    // Kata sifat-na
    {
      jp: "きれい",
      hira: "きれい",
      meaning: "Cantik / Bersih",
      example: "花がきれいです。",
      trans: "Bunganya cantik.",
    },
    {
      jp: "有名",
      hira: "ゆうめい",
      meaning: "Terkenal",
      example: "富士山は有名です。",
      trans: "Gunung Fuji terkenal.",
    },
    {
      jp: "便利",
      hira: "べんり",
      meaning: "Praktis / Nyaman",
      example: "スマホは便利です。",
      trans: "Smartphone itu praktis.",
    },
    {
      jp: "不便",
      hira: "ふべん",
      meaning: "Tidak nyaman / Repot",
      example: "ここは不便です。",
      trans: "Di sini tidak nyaman.",
    },
    {
      jp: "大切",
      hira: "たいせつ",
      meaning: "Penting / Berharga",
      example: "友達は大切です。",
      trans: "Teman itu berharga.",
    },
    {
      jp: "好き",
      hira: "すき",
      meaning: "Suka",
      example: "音楽が好きです。",
      trans: "Saya suka musik.",
    },
    {
      jp: "嫌い",
      hira: "きらい",
      meaning: "Tidak suka",
      example: "野菜が嫌いです。",
      trans: "Saya tidak suka sayuran.",
    },
    {
      jp: "上手",
      hira: "じょうず",
      meaning: "Pandai / Mahir",
      example: "日本語が上手です。",
      trans: "Bahasa Jepangnya mahir.",
    },
    {
      jp: "下手",
      hira: "へた",
      meaning: "Tidak pandai",
      example: "料理が下手です。",
      trans: "Saya tidak pandai memasak.",
    },
    {
      jp: "静か",
      hira: "しずか",
      meaning: "Tenang / Sepi",
      example: "図書館は静かです。",
      trans: "Perpustakaan itu tenang.",
    },
    {
      jp: "賑やか",
      hira: "にぎやか",
      meaning: "Ramai / Meriah",
      example: "駅前は賑やかです。",
      trans: "Depan stasiun itu ramai.",
    },
    {
      jp: "暇",
      hira: "ひま",
      meaning: "Luang / Tidak sibuk",
      example: "今日は暇です。",
      trans: "Hari ini saya luang.",
    },
    {
      jp: "元気",
      hira: "げんき",
      meaning: "Sehat / Bersemangat",
      example: "元気ですか。",
      trans: "Apa kabar?",
    },
    {
      jp: "丈夫",
      hira: "じょうぶ",
      meaning: "Kuat / Tahan lama",
      example: "丈夫な靴です。",
      trans: "Sepatu yang kuat.",
    },
    {
      jp: "親切",
      hira: "しんせつ",
      meaning: "Baik hati / Ramah",
      example: "先生は親切です。",
      trans: "Gurunya baik hati.",
    },
  ];

  var KANJI = [
    {
      char: "日",
      on: "ニチ・ジツ",
      kun: "ひ・か",
      meaning: "Hari / Matahari",
      examples: [
        { jp: "日本（にほん）", id: "Jepang" },
        { jp: "今日（きょう）", id: "Hari ini" },
        { jp: "日曜日（にちようび）", id: "Hari Minggu" },
      ],
    },
    {
      char: "月",
      on: "ゲツ・ガツ",
      kun: "つき",
      meaning: "Bulan",
      examples: [
        { jp: "月曜日（げつようび）", id: "Hari Senin" },
        { jp: "三月（さんがつ）", id: "Maret" },
        { jp: "毎月（まいつき）", id: "Setiap bulan" },
      ],
    },
    {
      char: "火",
      on: "カ",
      kun: "ひ",
      meaning: "Api",
      examples: [
        { jp: "火曜日（かようび）", id: "Hari Selasa" },
        { jp: "火山（かざん）", id: "Gunung berapi" },
      ],
    },
    {
      char: "水",
      on: "スイ",
      kun: "みず",
      meaning: "Air",
      examples: [
        { jp: "水曜日（すいようび）", id: "Hari Rabu" },
        { jp: "水（みず）", id: "Air" },
      ],
    },
    {
      char: "木",
      on: "モク・ボク",
      kun: "き",
      meaning: "Pohon / Kayu",
      examples: [
        { jp: "木曜日（もくようび）", id: "Hari Kamis" },
        { jp: "木（き）", id: "Pohon" },
      ],
    },
    {
      char: "金",
      on: "キン・コン",
      kun: "かね・かな",
      meaning: "Emas / Uang",
      examples: [
        { jp: "金曜日（きんようび）", id: "Hari Jumat" },
        { jp: "お金（おかね）", id: "Uang" },
      ],
    },
    {
      char: "土",
      on: "ド・ト",
      kun: "つち",
      meaning: "Tanah",
      examples: [
        { jp: "土曜日（どようび）", id: "Hari Sabtu" },
        { jp: "土（つち）", id: "Tanah" },
      ],
    },
    {
      char: "山",
      on: "サン",
      kun: "やま",
      meaning: "Gunung",
      examples: [
        { jp: "富士山（ふじさん）", id: "Gunung Fuji" },
        { jp: "山（やま）", id: "Gunung" },
      ],
    },
    {
      char: "川",
      on: "セン",
      kun: "かわ",
      meaning: "Sungai",
      examples: [
        { jp: "川（かわ）", id: "Sungai" },
        { jp: "川口（かわぐち）", id: "Kawaguchi (nama kota)" },
      ],
    },
    {
      char: "人",
      on: "ジン・ニン",
      kun: "ひと",
      meaning: "Orang",
      examples: [
        { jp: "日本人（にほんじん）", id: "Orang Jepang" },
        { jp: "一人（ひとり）", id: "Satu orang" },
      ],
    },
    {
      char: "口",
      on: "コウ・ク",
      kun: "くち",
      meaning: "Mulut",
      examples: [
        { jp: "人口（じんこう）", id: "Jumlah penduduk" },
        { jp: "口（くち）", id: "Mulut" },
      ],
    },
    {
      char: "目",
      on: "モク・ボク",
      kun: "め",
      meaning: "Mata",
      examples: [
        { jp: "目（め）", id: "Mata" },
        { jp: "目標（もくひょう）", id: "Tujuan/target" },
      ],
    },
    {
      char: "耳",
      on: "ジ",
      kun: "みみ",
      meaning: "Telinga",
      examples: [{ jp: "耳（みみ）", id: "Telinga" }],
    },
    {
      char: "手",
      on: "シュ",
      kun: "て",
      meaning: "Tangan",
      examples: [
        { jp: "手（て）", id: "Tangan" },
        { jp: "手紙（てがみ）", id: "Surat" },
      ],
    },
    {
      char: "足",
      on: "ソク",
      kun: "あし",
      meaning: "Kaki",
      examples: [
        { jp: "足（あし）", id: "Kaki" },
        { jp: "足りない（たりない）", id: "Tidak cukup" },
      ],
    },
    {
      char: "大",
      on: "ダイ・タイ",
      kun: "おお",
      meaning: "Besar",
      examples: [
        { jp: "大学（だいがく）", id: "Universitas" },
        { jp: "大きい（おおきい）", id: "Besar" },
      ],
    },
    {
      char: "小",
      on: "ショウ",
      kun: "ちい・こ・お",
      meaning: "Kecil",
      examples: [
        { jp: "小学校（しょうがっこう）", id: "Sekolah dasar" },
        { jp: "小さい（ちいさい）", id: "Kecil" },
      ],
    },
    {
      char: "中",
      on: "チュウ",
      kun: "なか",
      meaning: "Tengah / Dalam",
      examples: [
        { jp: "中学校（ちゅうがっこう）", id: "SMP" },
        { jp: "中（なか）", id: "Di dalam" },
      ],
    },
    {
      char: "上",
      on: "ジョウ・ショウ",
      kun: "うえ・あ・のぼ",
      meaning: "Atas",
      examples: [
        { jp: "上（うえ）", id: "Di atas" },
        { jp: "上手（じょうず）", id: "Pandai" },
      ],
    },
    {
      char: "下",
      on: "カ・ゲ",
      kun: "した・さ・くだ",
      meaning: "Bawah",
      examples: [
        { jp: "下（した）", id: "Di bawah" },
        { jp: "下手（へた）", id: "Tidak pandai" },
      ],
    },
    {
      char: "左",
      on: "サ",
      kun: "ひだり",
      meaning: "Kiri",
      examples: [
        { jp: "左（ひだり）", id: "Kiri" },
        { jp: "左手（ひだりて）", id: "Tangan kiri" },
      ],
    },
    {
      char: "右",
      on: "ウ・ユウ",
      kun: "みぎ",
      meaning: "Kanan",
      examples: [
        { jp: "右（みぎ）", id: "Kanan" },
        { jp: "右手（みぎて）", id: "Tangan kanan" },
      ],
    },
    {
      char: "前",
      on: "ゼン",
      kun: "まえ",
      meaning: "Depan / Sebelum",
      examples: [
        { jp: "前（まえ）", id: "Depan/Sebelum" },
        { jp: "午前（ごぜん）", id: "AM / Pagi hari" },
      ],
    },
    {
      char: "後",
      on: "ゴ・コウ",
      kun: "あと・うし・のち",
      meaning: "Belakang / Sesudah",
      examples: [
        { jp: "後（あと）", id: "Setelah/Sesudah" },
        { jp: "午後（ごご）", id: "PM / Sore hari" },
      ],
    },
    {
      char: "東",
      on: "トウ",
      kun: "ひがし",
      meaning: "Timur",
      examples: [
        { jp: "東京（とうきょう）", id: "Tokyo" },
        { jp: "東（ひがし）", id: "Timur" },
      ],
    },
    {
      char: "西",
      on: "セイ・サイ",
      kun: "にし",
      meaning: "Barat",
      examples: [
        { jp: "西（にし）", id: "Barat" },
        { jp: "関西（かんさい）", id: "Kansai (wilayah)" },
      ],
    },
    {
      char: "南",
      on: "ナン・ナ",
      kun: "みなみ",
      meaning: "Selatan",
      examples: [
        { jp: "南（みなみ）", id: "Selatan" },
        { jp: "南口（みなみぐち）", id: "Pintu keluar selatan" },
      ],
    },
    {
      char: "北",
      on: "ホク",
      kun: "きた",
      meaning: "Utara",
      examples: [
        { jp: "北（きた）", id: "Utara" },
        { jp: "北海道（ほっかいどう）", id: "Hokkaido" },
      ],
    },
    {
      char: "一",
      on: "イチ・イツ",
      kun: "ひと",
      meaning: "Satu",
      examples: [
        { jp: "一つ（ひとつ）", id: "Satu (benda)" },
        { jp: "一月（いちがつ）", id: "Januari" },
      ],
    },
    {
      char: "二",
      on: "ニ",
      kun: "ふた",
      meaning: "Dua",
      examples: [
        { jp: "二つ（ふたつ）", id: "Dua (benda)" },
        { jp: "二月（にがつ）", id: "Februari" },
      ],
    },
    {
      char: "三",
      on: "サン",
      kun: "み・みっ",
      meaning: "Tiga",
      examples: [
        { jp: "三つ（みっつ）", id: "Tiga (benda)" },
        { jp: "三月（さんがつ）", id: "Maret" },
      ],
    },
    {
      char: "四",
      on: "シ",
      kun: "よ・よっ",
      meaning: "Empat",
      examples: [
        { jp: "四つ（よっつ）", id: "Empat (benda)" },
        { jp: "四月（しがつ）", id: "April" },
      ],
    },
    {
      char: "五",
      on: "ゴ",
      kun: "いつ",
      meaning: "Lima",
      examples: [
        { jp: "五つ（いつつ）", id: "Lima (benda)" },
        { jp: "五月（ごがつ）", id: "Mei" },
      ],
    },
    {
      char: "六",
      on: "ロク",
      kun: "むっ・む",
      meaning: "Enam",
      examples: [
        { jp: "六つ（むっつ）", id: "Enam (benda)" },
        { jp: "六月（ろくがつ）", id: "Juni" },
      ],
    },
    {
      char: "七",
      on: "シチ",
      kun: "なな・なの",
      meaning: "Tujuh",
      examples: [
        { jp: "七つ（ななつ）", id: "Tujuh (benda)" },
        { jp: "七月（しちがつ）", id: "Juli" },
      ],
    },
    {
      char: "八",
      on: "ハチ",
      kun: "やっ・や",
      meaning: "Delapan",
      examples: [
        { jp: "八つ（やっつ）", id: "Delapan (benda)" },
        { jp: "八月（はちがつ）", id: "Agustus" },
      ],
    },
    {
      char: "九",
      on: "キュウ・ク",
      kun: "ここの",
      meaning: "Sembilan",
      examples: [
        { jp: "九つ（ここのつ）", id: "Sembilan (benda)" },
        { jp: "九月（くがつ）", id: "September" },
      ],
    },
    {
      char: "十",
      on: "ジュウ・ジッ",
      kun: "とお・と",
      meaning: "Sepuluh",
      examples: [
        { jp: "十（じゅう）", id: "Sepuluh" },
        { jp: "十月（じゅうがつ）", id: "Oktober" },
      ],
    },
    {
      char: "百",
      on: "ヒャク",
      kun: "—",
      meaning: "Seratus",
      examples: [
        { jp: "百円（ひゃくえん）", id: "100 yen" },
        { jp: "三百（さんびゃく）", id: "300" },
      ],
    },
    {
      char: "千",
      on: "セン",
      kun: "ち",
      meaning: "Seribu",
      examples: [
        { jp: "千円（せんえん）", id: "1000 yen" },
        { jp: "三千（さんぜん）", id: "3000" },
      ],
    },
    {
      char: "万",
      on: "マン・バン",
      kun: "—",
      meaning: "Sepuluh ribu",
      examples: [
        { jp: "一万円（いちまんえん）", id: "10.000 yen" },
        { jp: "何万（なんまん）", id: "Puluhan ribu" },
      ],
    },
    {
      char: "年",
      on: "ネン",
      kun: "とし",
      meaning: "Tahun",
      examples: [
        { jp: "今年（ことし）", id: "Tahun ini" },
        { jp: "来年（らいねん）", id: "Tahun depan" },
      ],
    },
    {
      char: "時",
      on: "ジ",
      kun: "とき",
      meaning: "Waktu / Jam",
      examples: [
        { jp: "何時（なんじ）", id: "Jam berapa" },
        { jp: "時間（じかん）", id: "Waktu/durasi" },
      ],
    },
    {
      char: "分",
      on: "フン・プン",
      kun: "わ・ぶん",
      meaning: "Menit / Bagian",
      examples: [
        { jp: "五分（ごふん）", id: "Lima menit" },
        { jp: "半分（はんぶん）", id: "Setengah" },
      ],
    },
    {
      char: "半",
      on: "ハン",
      kun: "なか",
      meaning: "Setengah",
      examples: [
        { jp: "半分（はんぶん）", id: "Setengah" },
        { jp: "三時半（さんじはん）", id: "Jam setengah empat" },
      ],
    },
    {
      char: "今",
      on: "コン・キン",
      kun: "いま",
      meaning: "Sekarang / Saat ini",
      examples: [
        { jp: "今（いま）", id: "Sekarang" },
        { jp: "今日（きょう）", id: "Hari ini" },
      ],
    },
    {
      char: "本",
      on: "ホン・ポン・ボン",
      kun: "もと",
      meaning: "Buku / Asal",
      examples: [
        { jp: "本（ほん）", id: "Buku" },
        { jp: "日本（にほん）", id: "Jepang" },
      ],
    },
    {
      char: "語",
      on: "ゴ",
      kun: "かた",
      meaning: "Bahasa / Kata",
      examples: [
        { jp: "日本語（にほんご）", id: "Bahasa Jepang" },
        { jp: "英語（えいご）", id: "Bahasa Inggris" },
      ],
    },
    {
      char: "国",
      on: "コク",
      kun: "くに",
      meaning: "Negara",
      examples: [
        { jp: "国（くに）", id: "Negara" },
        { jp: "外国（がいこく）", id: "Negara asing" },
      ],
    },
    {
      char: "学",
      on: "ガク",
      kun: "まな",
      meaning: "Belajar / Ilmu",
      examples: [
        { jp: "学校（がっこう）", id: "Sekolah" },
        { jp: "大学（だいがく）", id: "Universitas" },
      ],
    },
    {
      char: "校",
      on: "コウ",
      kun: "—",
      meaning: "Sekolah",
      examples: [
        { jp: "学校（がっこう）", id: "Sekolah" },
        { jp: "小学校（しょうがっこう）", id: "SD" },
      ],
    },
    {
      char: "生",
      on: "セイ・ショウ",
      kun: "い・う・なま",
      meaning: "Hidup / Lahir",
      examples: [
        { jp: "学生（がくせい）", id: "Pelajar" },
        { jp: "先生（せんせい）", id: "Guru" },
      ],
    },
    {
      char: "先",
      on: "セン",
      kun: "さき",
      meaning: "Duluan / Depan",
      examples: [
        { jp: "先生（せんせい）", id: "Guru" },
        { jp: "先週（せんしゅう）", id: "Minggu lalu" },
      ],
    },
    {
      char: "父",
      on: "フ",
      kun: "ちち",
      meaning: "Ayah",
      examples: [
        { jp: "父（ちち）", id: "Ayah (sendiri)" },
        { jp: "お父さん（おとうさん）", id: "Ayah (sopan)" },
      ],
    },
    {
      char: "母",
      on: "ボ",
      kun: "はは",
      meaning: "Ibu",
      examples: [
        { jp: "母（はは）", id: "Ibu (sendiri)" },
        { jp: "お母さん（おかあさん）", id: "Ibu (sopan)" },
      ],
    },
    {
      char: "子",
      on: "シ・ス",
      kun: "こ",
      meaning: "Anak",
      examples: [
        { jp: "子供（こども）", id: "Anak-anak" },
        { jp: "女子（じょし）", id: "Perempuan/siswi" },
      ],
    },
    {
      char: "女",
      on: "ジョ・ニョ",
      kun: "おんな・め",
      meaning: "Perempuan",
      examples: [
        { jp: "女（おんな）", id: "Perempuan" },
        { jp: "女の子（おんなのこ）", id: "Anak perempuan" },
      ],
    },
    {
      char: "男",
      on: "ダン・ナン",
      kun: "おとこ",
      meaning: "Laki-laki",
      examples: [
        { jp: "男（おとこ）", id: "Laki-laki" },
        { jp: "男の子（おとこのこ）", id: "Anak laki-laki" },
      ],
    },
    {
      char: "白",
      on: "ハク・ビャク",
      kun: "しろ・しら",
      meaning: "Putih",
      examples: [
        { jp: "白い（しろい）", id: "Putih" },
        { jp: "白紙（はくし）", id: "Kertas putih/kosong" },
      ],
    },
    {
      char: "黒",
      on: "コク",
      kun: "くろ",
      meaning: "Hitam",
      examples: [
        { jp: "黒い（くろい）", id: "Hitam" },
        { jp: "黒板（こくばん）", id: "Papan tulis" },
      ],
    },
    {
      char: "赤",
      on: "セキ・シャク",
      kun: "あか・あか",
      meaning: "Merah",
      examples: [
        { jp: "赤い（あかい）", id: "Merah" },
        { jp: "赤ちゃん（あかちゃん）", id: "Bayi" },
      ],
    },
    {
      char: "青",
      on: "セイ・ショウ",
      kun: "あお",
      meaning: "Biru / Hijau",
      examples: [
        { jp: "青い（あおい）", id: "Biru" },
        { jp: "青空（あおぞら）", id: "Langit biru" },
      ],
    },
    {
      char: "花",
      on: "カ",
      kun: "はな",
      meaning: "Bunga",
      examples: [
        { jp: "花（はな）", id: "Bunga" },
        { jp: "花火（はなび）", id: "Kembang api" },
      ],
    },
    {
      char: "雨",
      on: "ウ",
      kun: "あめ・あま",
      meaning: "Hujan",
      examples: [
        { jp: "雨（あめ）", id: "Hujan" },
        { jp: "雨天（うてん）", id: "Hujan" },
      ],
    },
    {
      char: "空",
      on: "クウ",
      kun: "そら・から",
      meaning: "Langit / Kosong",
      examples: [
        { jp: "空（そら）", id: "Langit" },
        { jp: "空港（くうこう）", id: "Bandara" },
      ],
    },
    {
      char: "気",
      on: "キ・ケ",
      kun: "—",
      meaning: "Semangat / Udara",
      examples: [
        { jp: "元気（げんき）", id: "Sehat/Bersemangat" },
        { jp: "天気（てんき）", id: "Cuaca" },
      ],
    },
    {
      char: "天",
      on: "テン",
      kun: "あま・あめ",
      meaning: "Langit / Surga",
      examples: [
        { jp: "天気（てんき）", id: "Cuaca" },
        { jp: "天井（てんじょう）", id: "Langit-langit" },
      ],
    },
    {
      char: "電",
      on: "デン",
      kun: "—",
      meaning: "Listrik / Petir",
      examples: [
        { jp: "電車（でんしゃ）", id: "Kereta listrik" },
        { jp: "電話（でんわ）", id: "Telepon" },
      ],
    },
    {
      char: "車",
      on: "シャ",
      kun: "くるま",
      meaning: "Kendaraan / Mobil",
      examples: [
        { jp: "車（くるま）", id: "Mobil" },
        { jp: "電車（でんしゃ）", id: "Kereta listrik" },
      ],
    },
    {
      char: "道",
      on: "ドウ・トウ",
      kun: "みち",
      meaning: "Jalan",
      examples: [
        { jp: "道（みち）", id: "Jalan" },
        { jp: "北海道（ほっかいどう）", id: "Hokkaido" },
      ],
    },
    {
      char: "駅",
      on: "エキ",
      kun: "—",
      meaning: "Stasiun",
      examples: [
        { jp: "駅（えき）", id: "Stasiun" },
        { jp: "駅前（えきまえ）", id: "Depan stasiun" },
      ],
    },
    {
      char: "店",
      on: "テン",
      kun: "みせ",
      meaning: "Toko",
      examples: [
        { jp: "お店（おみせ）", id: "Toko" },
        { jp: "食堂（しょくどう）", id: "Kafetaria" },
      ],
    },
    {
      char: "食",
      on: "ショク・ジキ",
      kun: "た・く",
      meaning: "Makan / Makanan",
      examples: [
        { jp: "食べる（たべる）", id: "Makan" },
        { jp: "食堂（しょくどう）", id: "Kafetaria" },
      ],
    },
    {
      char: "飲",
      on: "イン",
      kun: "の",
      meaning: "Minum",
      examples: [
        { jp: "飲む（のむ）", id: "Minum" },
        { jp: "飲み物（のみもの）", id: "Minuman" },
      ],
    },
    {
      char: "見",
      on: "ケン",
      kun: "み",
      meaning: "Melihat",
      examples: [
        { jp: "見る（みる）", id: "Melihat" },
        { jp: "見物（けんぶつ）", id: "Tamasya/wisata" },
      ],
    },
    {
      char: "聞",
      on: "ブン・モン",
      kun: "き・きこ",
      meaning: "Mendengar",
      examples: [
        { jp: "聞く（きく）", id: "Mendengar" },
        { jp: "新聞（しんぶん）", id: "Koran" },
      ],
    },
    {
      char: "書",
      on: "ショ",
      kun: "か",
      meaning: "Menulis",
      examples: [
        { jp: "書く（かく）", id: "Menulis" },
        { jp: "辞書（じしょ）", id: "Kamus" },
      ],
    },
    {
      char: "読",
      on: "ドク・トク",
      kun: "よ",
      meaning: "Membaca",
      examples: [
        { jp: "読む（よむ）", id: "Membaca" },
        { jp: "読書（どくしょ）", id: "Membaca buku" },
      ],
    },
    {
      char: "話",
      on: "ワ",
      kun: "はな・はなし",
      meaning: "Berbicara / Cerita",
      examples: [
        { jp: "話す（はなす）", id: "Berbicara" },
        { jp: "会話（かいわ）", id: "Percakapan" },
      ],
    },
    {
      char: "来",
      on: "ライ",
      kun: "く・き・こ",
      meaning: "Datang",
      examples: [
        { jp: "来る（くる）", id: "Datang" },
        { jp: "来週（らいしゅう）", id: "Minggu depan" },
      ],
    },
    {
      char: "行",
      on: "コウ・ギョウ",
      kun: "い・ゆ・おこな",
      meaning: "Pergi",
      examples: [
        { jp: "行く（いく）", id: "Pergi" },
        { jp: "銀行（ぎんこう）", id: "Bank" },
      ],
    },
    {
      char: "出",
      on: "シュツ・スイ",
      kun: "で・だ",
      meaning: "Keluar",
      examples: [
        { jp: "出る（でる）", id: "Keluar" },
        { jp: "出口（でぐち）", id: "Pintu keluar" },
      ],
    },
    {
      char: "入",
      on: "ニュウ",
      kun: "い・はい",
      meaning: "Masuk",
      examples: [
        { jp: "入る（はいる）", id: "Masuk" },
        { jp: "入口（いりぐち）", id: "Pintu masuk" },
      ],
    },
    {
      char: "何",
      on: "カ",
      kun: "なに・なん",
      meaning: "Apa / Berapa",
      examples: [
        { jp: "何（なに）", id: "Apa" },
        { jp: "何時（なんじ）", id: "Jam berapa" },
      ],
    },
  ];

  var PARTICLES = [
    {
      char: "は",
      func: "Menandai topik kalimat (topic marker). Dibaca 'wa' bukan 'ha'.",
      example: "私は学生です。",
      trans: "Saya adalah siswa.",
    },
    {
      char: "が",
      func: "Menandai subjek (subject marker), khususnya untuk penekanan atau kalimat eksistensial.",
      example: "猫がいます。",
      trans: "Ada kucing.",
    },
    {
      char: "を",
      func: "Menandai objek langsung dari kata kerja transitif.",
      example: "本を読みます。",
      trans: "Saya membaca buku.",
    },
    {
      char: "に",
      func: "Menandai tujuan (ke), waktu spesifik, atau lokasi keberadaan.",
      example: "学校に行きます。",
      trans: "Saya pergi ke sekolah.",
    },
    {
      char: "で",
      func: "Menandai tempat aktivitas berlangsung, atau alat/cara.",
      example: "バスで行きます。",
      trans: "Saya pergi dengan bus.",
    },
    {
      char: "の",
      func: "Menandai kepemilikan (punya) atau menerangkan nomina.",
      example: "私の本です。",
      trans: "Ini buku saya.",
    },
    {
      char: "と",
      func: "Berarti 'dan' (menghubungkan kata benda) atau 'bersama'.",
      example: "友達と行きます。",
      trans: "Saya pergi bersama teman.",
    },
    {
      char: "も",
      func: "Berarti 'juga' atau 'pun', menggantikan は/が/を.",
      example: "私も学生です。",
      trans: "Saya juga siswa.",
    },
    {
      char: "か",
      func: "Penanda kalimat tanya (question marker). Ditaruh di akhir kalimat.",
      example: "これは本ですか。",
      trans: "Apakah ini buku?",
    },
    {
      char: "へ",
      func: "Menandai arah tujuan (ke arah). Dibaca 'e' bukan 'he'.",
      example: "東京へ行きます。",
      trans: "Saya pergi ke Tokyo.",
    },
    {
      char: "から",
      func: "Berarti 'dari' (asal tempat/waktu mulai) atau 'karena'.",
      example: "九時から始まります。",
      trans: "Dimulai dari jam sembilan.",
    },
    {
      char: "まで",
      func: "Berarti 'sampai' (batas waktu atau tempat).",
      example: "五時まで働きます。",
      trans: "Saya bekerja sampai jam lima.",
    },
    {
      char: "より",
      func: "Berarti 'daripada' (perbandingan).",
      example: "電車よりバスが好きです。",
      trans: "Saya lebih suka bus daripada kereta.",
    },
    {
      char: "ね",
      func: "Partikel akhir kalimat, meminta konfirmasi atau persetujuan ('kan?').",
      example: "いい天気ですね。",
      trans: "Cuacanya bagus, kan?",
    },
    {
      char: "よ",
      func: "Partikel akhir kalimat, memberikan penegasan atau informasi baru.",
      example: "これはおいしいですよ。",
      trans: "Ini enak, lho!",
    },
    {
      char: "な",
      func: "Partikel larangan (jangan) atau partikel akhir informal (versi kasual ね).",
      example: "走るな！",
      trans: "Jangan berlari!",
    },
    {
      char: "や",
      func: "Berarti 'dan lain-lain' (daftar tak lengkap, berbeda dengan と).",
      example: "本やペンがあります。",
      trans: "Ada buku, pena, dan lain-lain.",
    },
    {
      char: "しか",
      func: "Berarti 'hanya' (digunakan dengan bentuk negatif).",
      example: "百円しかありません。",
      trans: "Hanya ada 100 yen.",
    },
    {
      char: "だけ",
      func: "Berarti 'hanya' (digunakan dengan bentuk positif maupun negatif).",
      example: "これだけでいいです。",
      trans: "Cukup ini saja.",
    },
    {
      char: "ので",
      func: "Menyatakan alasan/sebab (lebih sopan dari から).",
      example: "雨なので、行きません。",
      trans: "Karena hujan, saya tidak pergi.",
    },
  ];

  var BUNPOU = [
    {
      pattern: "〜です",
      desc: "Kalimat pernyataan positif formal (kopula). Setara dengan 'adalah/ialah'.",
      example: "私は学生です。",
      trans: "Saya adalah siswa.",
    },
    {
      pattern: "〜ではありません／じゃないです",
      desc: "Negatif dari 〜です. ではありません lebih formal.",
      example: "私は先生ではありません。",
      trans: "Saya bukan guru.",
    },
    {
      pattern: "〜でした",
      desc: "Bentuk lampau dari 〜です.",
      example: "昨日は休みでした。",
      trans: "Kemarin hari libur.",
    },
    {
      pattern: "〜ますか？",
      desc: "Kalimat tanya formal. Diakhiri dengan nada naik.",
      example: "今、時間がありますか。",
      trans: "Apakah sekarang ada waktu?",
    },
    {
      pattern: "〜ます",
      desc: "Bentuk formal kata kerja (present/future).",
      example: "毎日勉強します。",
      trans: "Saya belajar setiap hari.",
    },
    {
      pattern: "〜ません",
      desc: "Bentuk negatif formal kata kerja.",
      example: "肉を食べません。",
      trans: "Saya tidak makan daging.",
    },
    {
      pattern: "〜ました",
      desc: "Bentuk lampau positif formal kata kerja.",
      example: "昨日映画を見ました。",
      trans: "Kemarin saya menonton film.",
    },
    {
      pattern: "〜ませんでした",
      desc: "Bentuk lampau negatif formal kata kerja.",
      example: "昨日学校に行きませんでした。",
      trans: "Kemarin saya tidak pergi ke sekolah.",
    },
    {
      pattern: "〜ましょう",
      desc: "Mengajak melakukan sesuatu bersama ('Ayo…!').",
      example: "一緒に行きましょう。",
      trans: "Ayo pergi bersama!",
    },
    {
      pattern: "〜ましょうか",
      desc: "Menawarkan diri untuk melakukan sesuatu ('Boleh saya…?').",
      example: "窓を開けましょうか。",
      trans: "Boleh saya buka jendelanya?",
    },
    {
      pattern: "〜てください",
      desc: "Permintaan/perintah sopan ('Tolong…').",
      example: "ここに書いてください。",
      trans: "Tolong tulis di sini.",
    },
    {
      pattern: "〜ている／〜ています",
      desc: "Menyatakan keadaan yang sedang berlangsung (progressive).",
      example: "今、食べています。",
      trans: "Sekarang saya sedang makan.",
    },
    {
      pattern: "〜たい",
      desc: "Menyatakan keinginan pembicara ('Ingin…'). Termasuk kata sifat-i.",
      example: "日本へ行きたいです。",
      trans: "Saya ingin pergi ke Jepang.",
    },
    {
      pattern: "〜たいです",
      desc: "Bentuk formal dari 〜たい.",
      example: "寿司を食べたいです。",
      trans: "Saya ingin makan sushi.",
    },
    {
      pattern: "〜が好きです",
      desc: "Menyatakan kesukaan ('Suka…').",
      example: "音楽が好きです。",
      trans: "Saya suka musik.",
    },
    {
      pattern: "〜が嫌いです",
      desc: "Menyatakan ketidaksukaan ('Tidak suka…').",
      example: "野菜が嫌いです。",
      trans: "Saya tidak suka sayuran.",
    },
    {
      pattern: "〜が上手です",
      desc: "Menyatakan keahlian ('Pandai dalam…').",
      example: "彼は料理が上手です。",
      trans: "Dia pandai memasak.",
    },
    {
      pattern: "〜から",
      desc: "Menyatakan alasan ('Karena…'). Ditaruh setelah klausa alasan.",
      example: "寒いから、コートを着ます。",
      trans: "Karena dingin, saya memakai mantel.",
    },
    {
      pattern: "〜ので",
      desc: "Menyatakan alasan dengan lebih sopan dari 〜から.",
      example: "雨なので、家にいます。",
      trans: "Karena hujan, saya di rumah.",
    },
    {
      pattern: "〜と思います",
      desc: "Menyatakan pendapat/pikiran ('Saya pikir…').",
      example: "明日晴れると思います。",
      trans: "Saya pikir besok cerah.",
    },
    {
      pattern: "〜ませんか",
      desc: "Mengajak dengan nada lebih sopan atau pertanyaan negatif ('Tidakkah Anda mau…?').",
      example: "一緒に食べませんか。",
      trans: "Tidakkah Anda mau makan bersama?",
    },
    {
      pattern: "N は N より〜です",
      desc: "Perbandingan ('N lebih … daripada N').",
      example: "電車はバスより速いです。",
      trans: "Kereta lebih cepat daripada bus.",
    },
    {
      pattern: "N が一番〜です",
      desc: "Superlative ('N paling … [di antara semuanya]').",
      example: "富士山が一番高いです。",
      trans: "Gunung Fuji adalah yang paling tinggi.",
    },
    {
      pattern: "〜前に",
      desc: "Menyatakan 'sebelum melakukan…' (urutan waktu).",
      example: "寝る前に歯を磨きます。",
      trans: "Saya menggosok gigi sebelum tidur.",
    },
    {
      pattern: "〜後で",
      desc: "Menyatakan 'setelah melakukan…' (urutan waktu).",
      example: "食べた後で、散歩します。",
      trans: "Setelah makan, saya berjalan-jalan.",
    },
    {
      pattern: "〜でしょう",
      desc: "Menyatakan kemungkinan atau perkiraan ('Mungkin…, Kemungkinan…').",
      example: "明日は雨でしょう。",
      trans: "Besok mungkin hujan.",
    },
    {
      pattern: "〜ことができます",
      desc: "Menyatakan kemampuan ('Bisa…, Dapat…').",
      example: "日本語を話すことができます。",
      trans: "Saya bisa berbicara bahasa Jepang.",
    },
    {
      pattern: "〜なければなりません",
      desc: "Menyatakan keharusan ('Harus…'). Bentuk formal.",
      example: "早く寝なければなりません。",
      trans: "Saya harus tidur lebih awal.",
    },
    {
      pattern: "〜てもいいです",
      desc: "Menyatakan izin ('Boleh…').",
      example: "ここで写真を撮ってもいいです。",
      trans: "Boleh mengambil foto di sini.",
    },
    {
      pattern: "〜てはいけません",
      desc: "Menyatakan larangan ('Tidak boleh…, Dilarang…').",
      example: "ここで食べてはいけません。",
      trans: "Tidak boleh makan di sini.",
    },
  ];
  // ══════════════════════════════════════════════════
  // KANA DATA
  // ══════════════════════════════════════════════════

  // null = sel kosong (padding grid 5 kolom)
  var HIRAGANA_BASE = [
    { char: "あ", roma: "a", ex: "あか (aka) = merah" },
    { char: "い", roma: "i", ex: "いぬ (inu) = anjing" },
    { char: "う", roma: "u", ex: "うみ (umi) = laut" },
    { char: "え", roma: "e", ex: "えき (eki) = stasiun" },
    { char: "お", roma: "o", ex: "おかあさん (okaasan) = ibu" },
    { char: "か", roma: "ka", ex: "かさ (kasa) = payung" },
    { char: "き", roma: "ki", ex: "きって (kitte) = perangko" },
    { char: "く", roma: "ku", ex: "くに (kuni) = negara" },
    { char: "け", roma: "ke", ex: "けむり (kemuri) = asap" },
    { char: "こ", roma: "ko", ex: "こえ (koe) = suara" },
    { char: "さ", roma: "sa", ex: "さかな (sakana) = ikan" },
    { char: "し", roma: "shi", ex: "しろ (shiro) = putih" },
    { char: "す", roma: "su", ex: "すし (sushi) = sushi" },
    { char: "せ", roma: "se", ex: "せんせい (sensei) = guru" },
    { char: "そ", roma: "so", ex: "そら (sora) = langit" },
    { char: "た", roma: "ta", ex: "たべる (taberu) = makan" },
    { char: "ち", roma: "chi", ex: "ちず (chizu) = peta" },
    { char: "つ", roma: "tsu", ex: "つき (tsuki) = bulan" },
    { char: "て", roma: "te", ex: "てがみ (tegami) = surat" },
    { char: "と", roma: "to", ex: "とり (tori) = burung" },
    { char: "な", roma: "na", ex: "なまえ (namae) = nama" },
    { char: "に", roma: "ni", ex: "にほん (Nihon) = Jepang" },
    { char: "ぬ", roma: "nu", ex: "ぬの (nuno) = kain" },
    { char: "ね", roma: "ne", ex: "ねこ (neko) = kucing" },
    { char: "の", roma: "no", ex: "のみもの (nomimono) = minuman" },
    { char: "は", roma: "ha", ex: "はな (hana) = bunga" },
    { char: "ひ", roma: "hi", ex: "ひと (hito) = orang" },
    { char: "ふ", roma: "fu", ex: "ふゆ (fuyu) = musim dingin" },
    { char: "へ", roma: "he", ex: "へや (heya) = kamar" },
    { char: "ほ", roma: "ho", ex: "ほん (hon) = buku" },
    { char: "ま", roma: "ma", ex: "まち (machi) = kota" },
    { char: "み", roma: "mi", ex: "みず (mizu) = air" },
    { char: "む", roma: "mu", ex: "むし (mushi) = serangga" },
    { char: "め", roma: "me", ex: "め (me) = mata" },
    { char: "も", roma: "mo", ex: "もり (mori) = hutan" },
    { char: "や", roma: "ya", ex: "やま (yama) = gunung" },
    null,
    { char: "ゆ", roma: "yu", ex: "ゆき (yuki) = salju" },
    null,
    { char: "よ", roma: "yo", ex: "よる (yoru) = malam" },
    { char: "ら", roma: "ra", ex: "らいねん (rainen) = tahun depan" },
    { char: "り", roma: "ri", ex: "りんご (ringo) = apel" },
    { char: "る", roma: "ru", ex: "るす (rusu) = tidak di rumah" },
    { char: "れ", roma: "re", ex: "れんしゅう (renshuu) = latihan" },
    { char: "ろ", roma: "ro", ex: "ろく (roku) = enam" },
    { char: "わ", roma: "wa", ex: "わたし (watashi) = saya" },
    null,
    null,
    null,
    { char: "を", roma: "wo", ex: "を (wo) = partikel objek" },
    { char: "ん", roma: "n", ex: "ほん (hon) = buku" },
    null,
    null,
    null,
    null,
  ];

  var HIRAGANA_DAKU = [
    { char: "が", roma: "ga", ex: "がっこう (gakkou) = sekolah" },
    { char: "ぎ", roma: "gi", ex: "ぎんこう (ginkou) = bank" },
    { char: "ぐ", roma: "gu", ex: "ぐあい (guai) = kondisi" },
    { char: "げ", roma: "ge", ex: "げんき (genki) = sehat" },
    { char: "ご", roma: "go", ex: "ごはん (gohan) = nasi" },
    { char: "ざ", roma: "za", ex: "ざっし (zasshi) = majalah" },
    { char: "じ", roma: "ji", ex: "じかん (jikan) = waktu" },
    { char: "ず", roma: "zu", ex: "ずつう (zutsuu) = sakit kepala" },
    { char: "ぜ", roma: "ze", ex: "ぜんぶ (zenbu) = semua" },
    { char: "ぞ", roma: "zo", ex: "ぞう (zou) = gajah" },
    { char: "だ", roma: "da", ex: "だいがく (daigaku) = universitas" },
    { char: "ぢ", roma: "ji", ex: "ぢ (ji) = jarang digunakan" },
    { char: "づ", roma: "zu", ex: "づつ (zutsu) = jarang digunakan" },
    { char: "で", roma: "de", ex: "でんしゃ (densha) = kereta" },
    { char: "ど", roma: "do", ex: "どこ (doko) = di mana" },
    { char: "ば", roma: "ba", ex: "ばんごはん (bangohan) = makan malam" },
    { char: "び", roma: "bi", ex: "びょういん (byouin) = rumah sakit" },
    { char: "ぶ", roma: "bu", ex: "ぶんか (bunka) = budaya" },
    { char: "べ", roma: "be", ex: "べんきょう (benkyou) = belajar" },
    { char: "ぼ", roma: "bo", ex: "ぼうし (boushi) = topi" },
    { char: "ぱ", roma: "pa", ex: "ぱーてぃ (paatii) = pesta" },
    { char: "ぴ", roma: "pi", ex: "ぴかぴか (pikapika) = berkilau" },
    { char: "ぷ", roma: "pu", ex: "ぷれぜんと (purezento) = hadiah" },
    { char: "ぺ", roma: "pe", ex: "ぺん (pen) = pena" },
    { char: "ぽ", roma: "po", ex: "ぽすと (posuto) = kotak surat" },
  ];

  var HIRAGANA_COMBO = [
    { char: "きゃ", roma: "kya", ex: "きゃく (kyaku) = tamu" },
    { char: "きゅ", roma: "kyu", ex: "きゅう (kyuu) = sembilan" },
    { char: "きょ", roma: "kyo", ex: "きょう (kyou) = hari ini" },
    { char: "しゃ", roma: "sha", ex: "しゃしん (shashin) = foto" },
    { char: "しゅ", roma: "shu", ex: "しゅみ (shumi) = hobi" },
    { char: "しょ", roma: "sho", ex: "しょうがっこう (shougakkou) = SD" },
    { char: "ちゃ", roma: "cha", ex: "おちゃ (ocha) = teh" },
    { char: "ちゅ", roma: "chu", ex: "ちゅうごく (Chuugoku) = China" },
    { char: "ちょ", roma: "cho", ex: "ちょっと (chotto) = sebentar" },
    { char: "にゃ", roma: "nya", ex: "にゃー (nyaa) = suara kucing" },
    { char: "にゅ", roma: "nyu", ex: "にゅうがく (nyuugaku) = masuk sekolah" },
    { char: "にょ", roma: "nyo", ex: "にょろにょろ (nyoronyoro) = berkelok" },
    { char: "ひゃ", roma: "hya", ex: "ひゃく (hyaku) = seratus" },
    { char: "ひゅ", roma: "hyu", ex: "ひゅーひゅー (hyuuhyuu) = bunyi angin" },
    { char: "ひょ", roma: "hyo", ex: "ひょう (hyou) = tabel" },
    { char: "みゃ", roma: "mya", ex: "みゃく (myaku) = denyut nadi" },
    { char: "みゅ", roma: "myu", ex: "みゅーじっく (myuujikku) = musik" },
    { char: "みょ", roma: "myo", ex: "みょう (myou) = aneh" },
    { char: "りゃ", roma: "rya", ex: "りゃく (ryaku) = singkatan" },
    { char: "りゅ", roma: "ryu", ex: "りゅう (ryuu) = naga" },
    { char: "りょ", roma: "ryo", ex: "りょこう (ryokou) = perjalanan" },
    { char: "ぎゃ", roma: "gya", ex: "ぎゃく (gyaku) = sebaliknya" },
    { char: "ぎゅ", roma: "gyu", ex: "ぎゅうにゅう (gyuunyuu) = susu sapi" },
    { char: "ぎょ", roma: "gyo", ex: "ぎょうぎ (gyougi) = tata krama" },
    { char: "じゃ", roma: "ja", ex: "じゃあ (jaa) = kalau begitu" },
    { char: "じゅ", roma: "ju", ex: "じゅう (juu) = sepuluh" },
    { char: "じょ", roma: "jo", ex: "じょうず (jouzu) = pandai" },
    { char: "びゃ", roma: "bya", ex: "びゃく (byaku) = jarang" },
    {
      char: "びゅ",
      roma: "byu",
      ex: "びゅーびゅー (byuubyuu) = bunyi angin kencang",
    },
    { char: "びょ", roma: "byo", ex: "びょうき (byouki) = sakit" },
    { char: "ぴゃ", roma: "pya", ex: "ぴゃー (pyaa) = bunyi" },
    { char: "ぴゅ", roma: "pyu", ex: "ぴゅー (pyuu) = bunyi angin" },
    { char: "ぴょ", roma: "pyo", ex: "ぴょんぴょん (pyonpyon) = melompat" },
  ];

  // ── KATAKANA ──
  var KATAKANA_BASE = [
    { char: "ア", roma: "a", ex: "アイス (aisu) = es krim" },
    { char: "イ", roma: "i", ex: "イギリス (Igirisu) = Inggris" },
    { char: "ウ", roma: "u", ex: "ウサギ (usagi) = kelinci" },
    { char: "エ", roma: "e", ex: "エアコン (eakon) = AC" },
    { char: "オ", roma: "o", ex: "オレンジ (orenji) = jeruk" },
    { char: "カ", roma: "ka", ex: "カメラ (kamera) = kamera" },
    { char: "キ", roma: "ki", ex: "キッチン (kicchin) = dapur" },
    { char: "ク", roma: "ku", ex: "クラス (kurasu) = kelas" },
    { char: "ケ", roma: "ke", ex: "ケーキ (keeki) = kue" },
    { char: "コ", roma: "ko", ex: "コーヒー (koohii) = kopi" },
    { char: "サ", roma: "sa", ex: "サッカー (sakkaa) = sepak bola" },
    { char: "シ", roma: "shi", ex: "シャツ (shatsu) = kemeja" },
    { char: "ス", roma: "su", ex: "スポーツ (supootsu) = olahraga" },
    { char: "セ", roma: "se", ex: "セーター (seetaa) = sweater" },
    { char: "ソ", roma: "so", ex: "ソファ (sofa) = sofa" },
    { char: "タ", roma: "ta", ex: "タクシー (takushii) = taksi" },
    { char: "チ", roma: "chi", ex: "チョコレート (chokoreeto) = cokelat" },
    { char: "ツ", roma: "tsu", ex: "ツアー (tsuaa) = tur" },
    { char: "テ", roma: "te", ex: "テレビ (terebi) = TV" },
    { char: "ト", roma: "to", ex: "トイレ (toire) = toilet" },
    { char: "ナ", roma: "na", ex: "ナイフ (naifu) = pisau" },
    { char: "ニ", roma: "ni", ex: "ニュース (nyuusu) = berita" },
    { char: "ヌ", roma: "nu", ex: "ヌードル (nuudoru) = mie" },
    { char: "ネ", roma: "ne", ex: "ネクタイ (nekutai) = dasi" },
    { char: "ノ", roma: "no", ex: "ノート (nooto) = buku catatan" },
    { char: "ハ", roma: "ha", ex: "ハンバーガー (hanbaagaa) = hamburger" },
    { char: "ヒ", roma: "hi", ex: "ヒーター (hiitaa) = pemanas" },
    { char: "フ", roma: "fu", ex: "フランス (Furansu) = Prancis" },
    { char: "ヘ", roma: "he", ex: "ヘルメット (herumetto) = helm" },
    { char: "ホ", roma: "ho", ex: "ホテル (hoteru) = hotel" },
    { char: "マ", roma: "ma", ex: "マスク (masuku) = masker" },
    { char: "ミ", roma: "mi", ex: "ミルク (miruku) = susu" },
    { char: "ム", roma: "mu", ex: "ムード (muudo) = suasana" },
    { char: "メ", roma: "me", ex: "メニュー (menyuu) = menu" },
    { char: "モ", roma: "mo", ex: "モデル (moderu) = model" },
    { char: "ヤ", roma: "ya", ex: "ヤード (yaado) = yard" },
    null,
    { char: "ユ", roma: "yu", ex: "ユーモア (yuumoa) = humor" },
    null,
    { char: "ヨ", roma: "yo", ex: "ヨーロッパ (Yooroppa) = Eropa" },
    { char: "ラ", roma: "ra", ex: "ラジオ (rajio) = radio" },
    { char: "リ", roma: "ri", ex: "リモコン (rimokon) = remote" },
    { char: "ル", roma: "ru", ex: "ルーム (ruumu) = kamar" },
    { char: "レ", roma: "re", ex: "レストラン (resutoran) = restoran" },
    { char: "ロ", roma: "ro", ex: "ロボット (robotto) = robot" },
    { char: "ワ", roma: "wa", ex: "ワイン (wain) = anggur" },
    null,
    null,
    null,
    { char: "ヲ", roma: "wo", ex: "ヲ (wo) = partikel objek (jarang)" },
    { char: "ン", roma: "n", ex: "パン (pan) = roti" },
    null,
    null,
    null,
    null,
  ];

  var KATAKANA_DAKU = [
    { char: "ガ", roma: "ga", ex: "ガム (gamu) = permen karet" },
    { char: "ギ", roma: "gi", ex: "ギター (gitaa) = gitar" },
    { char: "グ", roma: "gu", ex: "グラス (gurasu) = gelas" },
    { char: "ゲ", roma: "ge", ex: "ゲーム (geemu) = permainan" },
    { char: "ゴ", roma: "go", ex: "ゴルフ (gorufu) = golf" },
    { char: "ザ", roma: "za", ex: "ザラザラ (zarazara) = kasar" },
    { char: "ジ", roma: "ji", ex: "ジュース (juusu) = jus" },
    { char: "ズ", roma: "zu", ex: "ズボン (zubon) = celana" },
    { char: "ゼ", roma: "ze", ex: "ゼロ (zero) = nol" },
    { char: "ゾ", roma: "zo", ex: "ゾーン (zoon) = zona" },
    { char: "ダ", roma: "da", ex: "ダンス (dansu) = tari" },
    { char: "ヂ", roma: "ji", ex: "ヂ (ji) = jarang digunakan" },
    { char: "ヅ", roma: "zu", ex: "ヅ (zu) = jarang digunakan" },
    { char: "デ", roma: "de", ex: "デザイン (dezain) = desain" },
    { char: "ド", roma: "do", ex: "ドア (doa) = pintu" },
    { char: "バ", roma: "ba", ex: "バス (basu) = bus" },
    { char: "ビ", roma: "bi", ex: "ビール (biiru) = bir" },
    { char: "ブ", roma: "bu", ex: "ブランド (burando) = merek" },
    { char: "ベ", roma: "be", ex: "ベッド (beddo) = tempat tidur" },
    { char: "ボ", roma: "bo", ex: "ボール (booru) = bola" },
    { char: "パ", roma: "pa", ex: "パソコン (pasokon) = komputer" },
    { char: "ピ", roma: "pi", ex: "ピアノ (piano) = piano" },
    { char: "プ", roma: "pu", ex: "プール (puuru) = kolam renang" },
    { char: "ペ", roma: "pe", ex: "ペット (petto) = hewan peliharaan" },
    { char: "ポ", roma: "po", ex: "ポスター (posutaa) = poster" },
  ];

  var KATAKANA_COMBO = [
    { char: "キャ", roma: "kya", ex: "キャンプ (kyanpu) = berkemah" },
    { char: "キュ", roma: "kyu", ex: "キューブ (kyuubu) = kubus" },
    { char: "キョ", roma: "kyo", ex: "キョウト (Kyouto) = Kyoto" },
    { char: "シャ", roma: "sha", ex: "シャワー (shawaa) = shower" },
    {
      char: "シュ",
      roma: "shu",
      ex: "シュークリーム (shuukuriimu) = krim sus",
    },
    { char: "ショ", roma: "sho", ex: "ショッピング (shoppingu) = belanja" },
    { char: "チャ", roma: "cha", ex: "チャンス (chansu) = kesempatan" },
    { char: "チュ", roma: "chu", ex: "チューリップ (chuurippu) = tulip" },
    { char: "チョ", roma: "cho", ex: "チョコレート (chokoreeto) = cokelat" },
    { char: "ニャ", roma: "nya", ex: "ニャー (nyaa) = meong" },
    { char: "ニュ", roma: "nyu", ex: "ニュース (nyuusu) = berita" },
    { char: "ニョ", roma: "nyo", ex: "ニョッキ (nyokki) = gnocchi" },
    { char: "ヒャ", roma: "hya", ex: "ヒャク (hyaku) = seratus" },
    { char: "ヒュ", roma: "hyu", ex: "ヒューズ (hyuuzu) = sekering" },
    { char: "ヒョ", roma: "hyo", ex: "ヒョウ (hyou) = macan tutul" },
    { char: "ミャ", roma: "mya", ex: "ミャンマー (Myanmar) = Myanmar" },
    { char: "ミュ", roma: "myu", ex: "ミュージック (myuujikku) = musik" },
    { char: "ミョ", roma: "myo", ex: "ミョウガ (myouga) = jahe Jepang" },
    { char: "リャ", roma: "rya", ex: "リャク (ryaku) = singkatan" },
    { char: "リュ", roma: "ryu", ex: "リュック (ryukku) = ransel" },
    { char: "リョ", roma: "ryo", ex: "リョコウ (ryokou) = perjalanan" },
    { char: "ギャ", roma: "gya", ex: "ギャラリー (gyararii) = galeri" },
    { char: "ギュ", roma: "gyu", ex: "ギュー (gyuu) = pelukan erat" },
    { char: "ギョ", roma: "gyo", ex: "ギョウザ (gyouza) = gyoza" },
    { char: "ジャ", roma: "ja", ex: "ジャケット (jaketto) = jaket" },
    { char: "ジュ", roma: "ju", ex: "ジュース (juusu) = jus" },
    { char: "ジョ", roma: "jo", ex: "ジョギング (jogingu) = jogging" },
    { char: "ビャ", roma: "bya", ex: "ビャク (byaku) = jarang" },
    { char: "ビュ", roma: "byu", ex: "ビュッフェ (byuffe) = prasmanan" },
    { char: "ビョ", roma: "byo", ex: "ビョーキ (byouki) = sakit" },
    { char: "ピャ", roma: "pya", ex: "ピャー (pyaa) = bunyi" },
    { char: "ピュ", roma: "pyu", ex: "ピューマ (pyuuma) = puma" },
    { char: "ピョ", roma: "pyo", ex: "ピョン (pyon) = melompat" },
  ];

  // ══════════════════════════════════════════════════
  // STORAGE
  // ══════════════════════════════════════════════════

  var PROGRESS_KEY = "n5_progress";

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }

  // ══════════════════════════════════════════════════
  // TAB SWITCHING
  // ══════════════════════════════════════════════════

  document.querySelectorAll(".tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".tab-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      document.querySelectorAll(".tab-section").forEach(function (s) {
        s.classList.remove("active");
      });
      btn.classList.add("active");
      var tab = btn.getAttribute("data-tab");
      document.getElementById("tab-" + tab).classList.add("active");
      if (tab === "progress") renderProgress();
    });
  });

  // ══════════════════════════════════════════════════
  // RENDER VOCAB
  // ══════════════════════════════════════════════════

  function renderVocab(filter) {
    var progress = loadProgress();
    var learnedVocab = progress.learnedVocab || [];
    var list = document.getElementById("vocab-list");
    var data = filter
      ? VOCAB.filter(function (v) {
          var q = filter.toLowerCase();
          return (
            v.jp.includes(q) ||
            v.hira.includes(q) ||
            v.meaning.toLowerCase().includes(q)
          );
        })
      : VOCAB;

    document.getElementById("vocab-count").textContent = data.length + " kata";
    list.innerHTML = "";
    data.forEach(function (v) {
      var learned = learnedVocab.indexOf(v.jp) !== -1;
      var card = document.createElement("div");
      card.className = "vocab-card" + (learned ? " learned" : "");
      card.innerHTML =
        '<div class="vocab-top">' +
        '<span class="vocab-jp">' +
        v.jp +
        "</span>" +
        '<span class="vocab-hira">（' +
        v.hira +
        "）</span>" +
        '<span class="vocab-badge">✓ Dipelajari</span>' +
        "</div>" +
        '<div class="vocab-meaning">' +
        v.meaning +
        "</div>" +
        '<div class="vocab-detail">' +
        '<div class="vocab-example">例: ' +
        v.example +
        "</div>" +
        '<div class="vocab-trans">' +
        v.trans +
        "</div>" +
        '<div class="vocab-actions">' +
        '<button class="btn-learn" data-jp="' +
        v.jp +
        '">' +
        (learned ? "✓ Sudah dipelajari" : "+ Tandai dipelajari") +
        "</button></div></div>";

      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-learn")) return;
        card.classList.toggle("open");
      });

      card.querySelector(".btn-learn").addEventListener("click", function (e) {
        e.stopPropagation();
        var p = loadProgress();
        var arr = p.learnedVocab || [];
        if (arr.indexOf(v.jp) === -1) arr.push(v.jp);
        else arr.splice(arr.indexOf(v.jp), 1);
        p.learnedVocab = arr;
        saveProgress(p);
        renderVocab(document.getElementById("vocab-search").value);
      });

      list.appendChild(card);
    });
  }

  document
    .getElementById("vocab-search")
    .addEventListener("input", function () {
      renderVocab(this.value);
    });

  // ══════════════════════════════════════════════════
  // RENDER KANJI
  // ══════════════════════════════════════════════════

  function renderKanji(filter) {
    var progress = loadProgress();
    var learnedKanji = progress.learnedKanji || [];
    var list = document.getElementById("kanji-list");
    var data = filter
      ? KANJI.filter(function (k) {
          var q = filter.toLowerCase();
          return (
            k.char.includes(q) ||
            k.on.toLowerCase().includes(q) ||
            k.kun.includes(q) ||
            k.meaning.toLowerCase().includes(q)
          );
        })
      : KANJI;

    document.getElementById("kanji-count").textContent = data.length + " kanji";
    list.innerHTML = "";
    data.forEach(function (k) {
      var learned = learnedKanji.indexOf(k.char) !== -1;
      var exHtml = k.examples
        .map(function (ex) {
          return (
            '<div class="kanji-example-row"><span class="kanji-ex-jp">' +
            ex.jp +
            '</span><span class="kanji-ex-id">' +
            ex.id +
            "</span></div>"
          );
        })
        .join("");

      var card = document.createElement("div");
      card.className = "kanji-card" + (learned ? " learned" : "");
      card.innerHTML =
        '<div class="kanji-char">' +
        k.char +
        "</div>" +
        '<div class="kanji-info">' +
        '<div class="kanji-reading">' +
        '<span class="reading-pill on-pill">On: ' +
        k.on +
        "</span>" +
        '<span class="reading-pill kun-pill">Kun: ' +
        k.kun +
        "</span>" +
        "</div>" +
        '<div class="kanji-meaning">' +
        k.meaning +
        "</div>" +
        '<div class="kanji-badge">✓ Dipelajari</div>' +
        '<div class="kanji-detail">' +
        exHtml +
        '<button class="kanji-learn-btn" data-char="' +
        k.char +
        '">' +
        (learned ? "✓ Sudah dipelajari" : "+ Tandai dipelajari") +
        "</button></div></div>";

      card.addEventListener("click", function (e) {
        if (e.target.classList.contains("kanji-learn-btn")) return;
        card.classList.toggle("open");
      });

      card
        .querySelector(".kanji-learn-btn")
        .addEventListener("click", function (e) {
          e.stopPropagation();
          var p = loadProgress();
          var arr = p.learnedKanji || [];
          if (arr.indexOf(k.char) === -1) arr.push(k.char);
          else arr.splice(arr.indexOf(k.char), 1);
          p.learnedKanji = arr;
          saveProgress(p);
          renderKanji(document.getElementById("kanji-search").value);
        });

      list.appendChild(card);
    });
  }

  document
    .getElementById("kanji-search")
    .addEventListener("input", function () {
      renderKanji(this.value);
    });

  // ══════════════════════════════════════════════════
  // RENDER KANA (reusable untuk hiragana & katakana)
  // ══════════════════════════════════════════════════

  function renderKanaGrid(gridId, data, progressKey, isCombo) {
    var progress = loadProgress();
    var learned = progress[progressKey] || [];
    var grid = document.getElementById(gridId);
    grid.innerHTML = "";

    data.forEach(function (item) {
      var cell = document.createElement("div");
      if (!item) {
        cell.className = "kana-cell kana-empty";
        grid.appendChild(cell);
        return;
      }
      var isLearned = learned.indexOf(item.char) !== -1;
      cell.className = "kana-cell" + (isLearned ? " kana-learned" : "");
      cell.innerHTML =
        '<span class="kana-char">' +
        item.char +
        "</span>" +
        '<span class="kana-roma">' +
        item.roma +
        "</span>";

      cell.addEventListener("click", function () {
        showKanaPopup(item, progressKey, function () {
          renderKanaGrid(gridId, data, progressKey, isCombo);
        });
      });

      grid.appendChild(cell);
    });
  }

  function showKanaPopup(item, progressKey, onToggle) {
    // Remove existing popup
    var existing = document.getElementById("kana-popup");
    if (existing) existing.remove();

    var progress = loadProgress();
    var learned = progress[progressKey] || [];
    var isLearned = learned.indexOf(item.char) !== -1;

    var overlay = document.createElement("div");
    overlay.className = "kana-popup";
    overlay.id = "kana-popup";
    overlay.innerHTML =
      '<div class="kana-popup-inner">' +
      '<span class="kana-popup-char">' +
      item.char +
      "</span>" +
      '<span class="kana-popup-roma">' +
      item.roma +
      "</span>" +
      '<div class="kana-popup-examples">' +
      item.ex +
      "</div>" +
      '<div class="kana-popup-actions">' +
      '<button class="kana-popup-close">Tutup</button>' +
      '<button class="kana-popup-learn' +
      (isLearned ? " learned" : "") +
      '">' +
      (isLearned ? "✓ Dipelajari" : "+ Tandai") +
      "</button>" +
      "</div></div>";

    overlay
      .querySelector(".kana-popup-close")
      .addEventListener("click", function () {
        overlay.remove();
      });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.remove();
    });
    overlay
      .querySelector(".kana-popup-learn")
      .addEventListener("click", function () {
        var p = loadProgress();
        var arr = p[progressKey] || [];
        if (arr.indexOf(item.char) === -1) arr.push(item.char);
        else arr.splice(arr.indexOf(item.char), 1);
        p[progressKey] = arr;
        saveProgress(p);
        overlay.remove();
        if (onToggle) onToggle();
      });

    document.body.appendChild(overlay);
  }

  function renderHiragana() {
    var total =
      HIRAGANA_BASE.filter(Boolean).length +
      HIRAGANA_DAKU.filter(Boolean).length +
      HIRAGANA_COMBO.filter(Boolean).length;
    document.getElementById("hiragana-count").textContent = total + " karakter";
    renderKanaGrid("hiragana-grid", HIRAGANA_BASE, "learnedHiragana");
    renderKanaGrid("hiragana-grid-daku", HIRAGANA_DAKU, "learnedHiragana");
    renderKanaGrid(
      "hiragana-grid-combo",
      HIRAGANA_COMBO,
      "learnedHiragana",
      true,
    );
  }

  function renderKatakana() {
    var total =
      KATAKANA_BASE.filter(Boolean).length +
      KATAKANA_DAKU.filter(Boolean).length +
      KATAKANA_COMBO.filter(Boolean).length;
    document.getElementById("katakana-count").textContent = total + " karakter";
    renderKanaGrid("katakana-grid", KATAKANA_BASE, "learnedKatakana");
    renderKanaGrid("katakana-grid-daku", KATAKANA_DAKU, "learnedKatakana");
    renderKanaGrid(
      "katakana-grid-combo",
      KATAKANA_COMBO,
      "learnedKatakana",
      true,
    );
  }

  // ══════════════════════════════════════════════════
  // RENDER PARTIKEL
  // ══════════════════════════════════════════════════

  function renderParticles() {
    var list = document.getElementById("particle-list");
    document.getElementById("particle-count").textContent =
      PARTICLES.length + " partikel";
    list.innerHTML = "";
    PARTICLES.forEach(function (p) {
      var card = document.createElement("div");
      card.className = "particle-card";
      card.innerHTML =
        '<div class="particle-char">' +
        p.char +
        "</div>" +
        "<div>" +
        '<div class="particle-func">' +
        p.func +
        "</div>" +
        '<div class="particle-ex-jp">' +
        p.example +
        "</div>" +
        '<div class="particle-ex-id">' +
        p.trans +
        "</div>" +
        "</div>";
      list.appendChild(card);
    });
  }

  // ══════════════════════════════════════════════════
  // RENDER BUNPOU
  // ══════════════════════════════════════════════════

  function renderBunpou() {
    var list = document.getElementById("bunpou-list");
    document.getElementById("bunpou-count").textContent =
      BUNPOU.length + " pola";
    list.innerHTML = "";
    BUNPOU.forEach(function (b) {
      var card = document.createElement("div");
      card.className = "bunpou-card";
      card.innerHTML =
        '<div class="bunpou-pattern">' +
        b.pattern +
        "</div>" +
        '<div class="bunpou-desc">' +
        b.desc +
        "</div>" +
        '<div class="bunpou-ex-jp">' +
        b.example +
        "</div>" +
        '<div class="bunpou-ex-id">' +
        b.trans +
        "</div>";
      list.appendChild(card);
    });
  }

  // ══════════════════════════════════════════════════
  // QUIZ
  // ══════════════════════════════════════════════════

  var quizQuestions = [];
  var quizIndex = 0;
  var quizScore = 0;
  var QUIZ_COUNT = 10;

  function buildQuizQuestions() {
    var pool = [];
    VOCAB.forEach(function (v) {
      var wrongs = VOCAB.filter(function (w) {
        return w.jp !== v.jp;
      });
      shuffle(wrongs);
      var opts = [v.meaning].concat(
        wrongs.slice(0, 3).map(function (w) {
          return w.meaning;
        }),
      );
      shuffle(opts);
      pool.push({ question: v.jp, answer: v.meaning, options: opts });
    });
    KANJI.forEach(function (k) {
      var wrongs = KANJI.filter(function (w) {
        return w.char !== k.char;
      });
      shuffle(wrongs);
      var opts = [k.meaning].concat(
        wrongs.slice(0, 3).map(function (w) {
          return w.meaning;
        }),
      );
      shuffle(opts);
      pool.push({ question: k.char, answer: k.meaning, options: opts });
    });
    shuffle(pool);
    return pool.slice(0, QUIZ_COUNT);
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function startQuiz() {
    quizQuestions = buildQuizQuestions();
    quizIndex = 0;
    quizScore = 0;
    document.getElementById("q-total").textContent = QUIZ_COUNT;
    document.getElementById("quiz-result").classList.add("hidden");
    document.getElementById("quiz-card").style.display = "";
    renderQuestion();
  }

  function renderQuestion() {
    var q = quizQuestions[quizIndex];
    document.getElementById("q-current").textContent = quizIndex + 1;
    document.getElementById("q-score").textContent = quizScore;
    document.getElementById("quiz-bar").style.width =
      (quizIndex / QUIZ_COUNT) * 100 + "%";
    document.getElementById("quiz-question").textContent = q.question;

    var optsEl = document.getElementById("quiz-options");
    optsEl.innerHTML = "";
    q.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.className = "quiz-opt";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        selectAnswer(opt, q.answer);
      });
      optsEl.appendChild(btn);
    });
  }

  function selectAnswer(selected, correct) {
    var btns = document.querySelectorAll(".quiz-opt");
    btns.forEach(function (btn) {
      btn.disabled = true;
      if (btn.textContent === correct) btn.classList.add("correct");
      else if (btn.textContent === selected && selected !== correct)
        btn.classList.add("wrong");
    });
    if (selected === correct) quizScore++;

    setTimeout(function () {
      quizIndex++;
      if (quizIndex < QUIZ_COUNT) renderQuestion();
      else showResult();
    }, 900);
  }

  function showResult() {
    document.getElementById("quiz-bar").style.width = "100%";
    document.getElementById("quiz-card").style.display = "none";
    var result = document.getElementById("quiz-result");
    result.classList.remove("hidden");

    var pct = Math.round((quizScore / QUIZ_COUNT) * 100);
    var emoji = pct >= 80 ? "🎉" : pct >= 50 ? "😊" : "💪";
    var title =
      pct >= 80
        ? "Luar Biasa!"
        : pct >= 50
          ? "Lumayan Bagus!"
          : "Terus Berlatih!";
    var sub =
      "Kamu menjawab " +
      quizScore +
      " dari " +
      QUIZ_COUNT +
      " soal dengan benar (" +
      pct +
      "%).";

    document.getElementById("result-emoji").textContent = emoji;
    document.getElementById("result-title").textContent = title;
    document.getElementById("result-sub").textContent = sub;

    var p = loadProgress();
    p.quizDone = (p.quizDone || 0) + 1;
    p.lastScore = pct + "%";
    saveProgress(p);
  }

  window.restartQuiz = function () {
    startQuiz();
  };

  // ══════════════════════════════════════════════════
  // PROGRESS
  // ══════════════════════════════════════════════════

  function renderProgress() {
    var p = loadProgress();
    var lv = (p.learnedVocab || []).length;
    var lk = (p.learnedKanji || []).length;

    document.getElementById("prog-vocab").textContent = lv;
    document.getElementById("prog-kanji").textContent = lk;
    document.getElementById("prog-quiz").textContent = p.quizDone || 0;
    document.getElementById("prog-score").textContent = p.lastScore || "—";

    var barV = Math.min((lv / VOCAB.length) * 100, 100);
    var barK = Math.min((lk / KANJI.length) * 100, 100);
    setTimeout(function () {
      document.getElementById("bar-vocab").style.width = barV + "%";
      document.getElementById("bar-kanji").style.width = barK + "%";
    }, 100);
  }

  // ══════════════════════════════════════════════════
  // INIT
  // ══════════════════════════════════════════════════

  renderVocab();
  renderKanji();
  renderHiragana();
  renderKatakana();
  renderParticles();
  renderBunpou();
  startQuiz();
})();
