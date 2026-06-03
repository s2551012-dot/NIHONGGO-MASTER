/* ═══════════════════════════════════════════════════════════
   LISTENING.JS  —  Nihongo Master
   Web Speech API (TTS) — no external audio files needed
═══════════════════════════════════════════════════════════ */

/* ── TTS HELPER ─────────────────────────────────────────── */
const TTS = {
  synth: window.speechSynthesis,
  jpVoice: null,
  current: null,

  init() {
    const load = () => {
      const voices = this.synth.getVoices();
      this.jpVoice =
        voices.find((v) => v.lang === "ja-JP" && v.localService) ||
        voices.find((v) => v.lang === "ja-JP") ||
        voices.find((v) => v.lang.startsWith("ja")) ||
        null;
    };
    load();
    this.synth.onvoiceschanged = load;
  },

  speak(text, { rate = 0.85, pitch = 1, onStart, onEnd } = {}) {
    this.synth.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "ja-JP";
    utt.rate = rate;
    utt.pitch = pitch;
    if (this.jpVoice) utt.voice = this.jpVoice;
    if (onStart) utt.onstart = onStart;
    if (onEnd) utt.onend = onEnd;
    this.current = utt;
    this.synth.speak(utt);
    return utt;
  },

  stop() {
    this.synth.cancel();
  },
};
TTS.init();

/* ── SCREEN MANAGER ─────────────────────────────────────── */
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

/* ── BACK BUTTONS ───────────────────────────────────────── */
document.querySelectorAll(".sub-back-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    TTS.stop();
    showScreen(btn.dataset.back);
  });
});

/* ── MENU CARDS ─────────────────────────────────────────── */
document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.screen;
    if (!target) return;
    if (target === "screenJLPT") {
      const lvl = card.dataset.lvl;
      openJLPT(lvl);
    } else {
      showScreen(target);
      if (target === "screenKosakata") initKosakata();
      if (target === "screenPercakapan") initPercakapan();
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   DATA — KOSAKATA
═══════════════════════════════════════════════════════════ */
const VOCAB_DATA = {
  salam: {
    desc: "Salam umum dalam bahasa Jepang sehari-hari",
    items: [
      {
        jp: "おはようございます",
        reading: "ohayou gozaimasu",
        meaning: "Selamat pagi (formal)",
      },
      {
        jp: "こんにちは",
        reading: "konnichiwa",
        meaning: "Selamat siang / Halo",
      },
      { jp: "こんばんは", reading: "konbanwa", meaning: "Selamat malam" },
      {
        jp: "おやすみなさい",
        reading: "oyasuminasai",
        meaning: "Selamat tidur",
      },
      {
        jp: "ありがとうございます",
        reading: "arigatou gozaimasu",
        meaning: "Terima kasih (formal)",
      },
      { jp: "すみません", reading: "sumimasen", meaning: "Permisi / Maaf" },
      { jp: "はじめまして", reading: "hajimemashite", meaning: "Salam kenal" },
      {
        jp: "よろしくお願いします",
        reading: "yoroshiku onegaishimasu",
        meaning: "Mohon bantuannya",
      },
      { jp: "さようなら", reading: "sayounara", meaning: "Selamat tinggal" },
      { jp: "ただいま", reading: "tadaima", meaning: "Aku pulang!" },
    ],
  },
  angka: {
    desc: "Angka dasar dalam bahasa Jepang (hitotsu, futatsu…)",
    items: [
      { jp: "いち", reading: "ichi", meaning: "Satu (1)" },
      { jp: "に", reading: "ni", meaning: "Dua (2)" },
      { jp: "さん", reading: "san", meaning: "Tiga (3)" },
      { jp: "し・よん", reading: "shi / yon", meaning: "Empat (4)" },
      { jp: "ご", reading: "go", meaning: "Lima (5)" },
      { jp: "ろく", reading: "roku", meaning: "Enam (6)" },
      { jp: "しち・なな", reading: "shichi / nana", meaning: "Tujuh (7)" },
      { jp: "はち", reading: "hachi", meaning: "Delapan (8)" },
      { jp: "きゅう・く", reading: "kyuu / ku", meaning: "Sembilan (9)" },
      { jp: "じゅう", reading: "juu", meaning: "Sepuluh (10)" },
    ],
  },
  warna: {
    desc: "Nama-nama warna dalam bahasa Jepang",
    items: [
      { jp: "あか", reading: "aka", meaning: "Merah" },
      { jp: "あお", reading: "ao", meaning: "Biru / Hijau" },
      { jp: "しろ", reading: "shiro", meaning: "Putih" },
      { jp: "くろ", reading: "kuro", meaning: "Hitam" },
      { jp: "きいろ", reading: "kiiro", meaning: "Kuning" },
      { jp: "みどり", reading: "midori", meaning: "Hijau" },
      { jp: "むらさき", reading: "murasaki", meaning: "Ungu" },
      { jp: "ももいろ", reading: "momoiro", meaning: "Merah muda / Pink" },
      { jp: "ちゃいろ", reading: "chairo", meaning: "Cokelat" },
      { jp: "はいいろ", reading: "haiiro", meaning: "Abu-abu" },
    ],
  },
  makanan: {
    desc: "Kosakata makanan dan minuman umum",
    items: [
      { jp: "ごはん", reading: "gohan", meaning: "Nasi / Makanan" },
      { jp: "みず", reading: "mizu", meaning: "Air" },
      { jp: "おちゃ", reading: "ocha", meaning: "Teh (Jepang)" },
      { jp: "パン", reading: "pan", meaning: "Roti" },
      { jp: "さかな", reading: "sakana", meaning: "Ikan" },
      { jp: "にく", reading: "niku", meaning: "Daging" },
      { jp: "やさい", reading: "yasai", meaning: "Sayuran" },
      { jp: "たまご", reading: "tamago", meaning: "Telur" },
      { jp: "くだもの", reading: "kudamono", meaning: "Buah-buahan" },
      { jp: "ラーメン", reading: "raamen", meaning: "Ramen (mie Jepang)" },
    ],
  },
};

/* ── INIT KOSAKATA ───────────────────────────────────────── */
function initKosakata(cat = "salam") {
  // tabs
  document.querySelectorAll("#koskataTabs .tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
    btn.onclick = () => initKosakata(btn.dataset.cat);
  });

  const data = VOCAB_DATA[cat];
  document.getElementById("kosakataCatLabel").textContent = data.desc;

  const list = document.getElementById("vocabList");
  list.innerHTML = "";
  data.items.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "vocab-card";
    card.id = `vc-${idx}`;
    card.innerHTML = `
      <div class="vocab-jp">${item.jp}</div>
      <div class="vocab-info">
        <div class="vocab-meaning">${item.meaning}</div>
        <div class="vocab-romaji">${item.reading}</div>
      </div>
      <button class="vocab-play-btn" title="Putar audio">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>`;
    const btn = card.querySelector(".vocab-play-btn");
    btn.addEventListener("click", () => playVocab(item.jp, card, btn));
    list.appendChild(card);
  });
}

function playVocab(text, card, btn) {
  // reset all
  document
    .querySelectorAll(".vocab-card")
    .forEach((c) => c.classList.remove("playing"));
  document.querySelectorAll(".vocab-play-btn").forEach((b) => {
    b.classList.remove("playing");
    b.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  });

  card.classList.add("playing");
  btn.classList.add("playing");
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

  TTS.speak(text, {
    rate: 0.8,
    onEnd: () => {
      card.classList.remove("playing");
      btn.classList.remove("playing");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   DATA — PERCAKAPAN
═══════════════════════════════════════════════════════════ */
const CONV_DATA = {
  perkenalan: {
    title: "Perkenalan Diri",
    badge: "はじめまして",
    lines: [
      {
        speaker: "A",
        jp: "はじめまして。田中と申します。",
        reading: "Hajimemashite. Tanaka to moushimasu.",
        id: "Salam kenal. Saya (bernama) Tanaka.",
      },
      {
        speaker: "B",
        jp: "こちらこそはじめまして。スサントです。",
        reading: "Kochira koso hajimemashite. Susanto desu.",
        id: "Salam kenal juga. Saya Susanto.",
      },
      {
        speaker: "A",
        jp: "どうぞよろしくお願いします。",
        reading: "Douzo yoroshiku onegaishimasu.",
        id: "Mohon bantuannya.",
      },
      {
        speaker: "B",
        jp: "こちらこそ、よろしくお願いします。",
        reading: "Kochira koso, yoroshiku onegaishimasu.",
        id: "Begitu pula saya.",
      },
      {
        speaker: "A",
        jp: "お仕事は何をされているんですか？",
        reading: "Oshigoto wa nani wo sarete irun desu ka?",
        id: "Anda bekerja sebagai apa?",
      },
      {
        speaker: "B",
        jp: "会社員です。エンジニアをしています。",
        reading: "Kaishain desu. Enjinia wo shite imasu.",
        id: "Saya karyawan. Saya bekerja sebagai insinyur.",
      },
    ],
  },
  belanja: {
    title: "Berbelanja",
    badge: "お買い物",
    lines: [
      {
        speaker: "A",
        jp: "すみません、これはいくらですか？",
        reading: "Sumimasen, kore wa ikura desu ka?",
        id: "Permisi, ini berapa harganya?",
      },
      {
        speaker: "B",
        jp: "それは千五百円です。",
        reading: "Sore wa sen-gohyaku-en desu.",
        id: "Itu seharga 1.500 yen.",
      },
      {
        speaker: "A",
        jp: "じゃあ、二つください。",
        reading: "Jaa, futatsu kudasai.",
        id: "Kalau begitu, tolong dua buah.",
      },
      {
        speaker: "B",
        jp: "かしこまりました。合計三千円になります。",
        reading: "Kashikomarimashita. Goukei san-zen-en ni narimasu.",
        id: "Baik. Total menjadi 3.000 yen.",
      },
      {
        speaker: "A",
        jp: "カードで払えますか？",
        reading: "Kaado de haraemasu ka?",
        id: "Bisakah saya bayar dengan kartu?",
      },
      {
        speaker: "B",
        jp: "はい、大丈夫です。",
        reading: "Hai, daijoubu desu.",
        id: "Ya, tidak masalah.",
      },
    ],
  },
  sekolah: {
    title: "Di Sekolah",
    badge: "学校",
    lines: [
      {
        speaker: "A",
        jp: "先生、質問してもいいですか？",
        reading: "Sensei, shitsumon shite mo ii desu ka?",
        id: "Sensei, bolehkah saya bertanya?",
      },
      {
        speaker: "B",
        jp: "もちろんです。どうぞ。",
        reading: "Mochiron desu. Douzo.",
        id: "Tentu. Silakan.",
      },
      {
        speaker: "A",
        jp: "この漢字の読み方を教えてください。",
        reading: "Kono kanji no yomikata wo oshiete kudasai.",
        id: "Tolong ajarkan cara baca kanji ini.",
      },
      {
        speaker: "B",
        jp: "これは「山」と読みます。意味は山です。",
        reading: "Kore wa 'yama' to yomimasu. Imi wa yama desu.",
        id: "Ini dibaca 'yama'. Artinya gunung.",
      },
      {
        speaker: "A",
        jp: "ありがとうございます。よくわかりました。",
        reading: "Arigatou gozaimasu. Yoku wakarimashita.",
        id: "Terima kasih. Saya sudah mengerti.",
      },
      {
        speaker: "B",
        jp: "はい、また質問があれば聞いてください。",
        reading: "Hai, mata shitsumon ga areba kiite kudasai.",
        id: "Baik, kalau ada pertanyaan lagi silakan tanya.",
      },
    ],
  },
  kerja: {
    title: "Di Tempat Kerja",
    badge: "会社",
    lines: [
      {
        speaker: "A",
        jp: "田中部長、報告書ができました。",
        reading: "Tanaka buchou, houkokusho ga dekimashita.",
        id: "Manajer Tanaka, laporan sudah selesai.",
      },
      {
        speaker: "B",
        jp: "お疲れ様です。確認しますね。",
        reading: "Otsukaresama desu. Kakunin shimasu ne.",
        id: "Terima kasih sudah bekerja keras. Saya periksa ya.",
      },
      {
        speaker: "A",
        jp: "何かご意見がありましたら教えてください。",
        reading: "Nanika go-iken ga arimashitara oshiete kudasai.",
        id: "Jika ada pendapat, tolong beritahu saya.",
      },
      {
        speaker: "B",
        jp: "少し修正が必要なところがあります。",
        reading: "Sukoshi shuusei ga hitsuyou na tokoro ga arimasu.",
        id: "Ada beberapa bagian yang perlu sedikit perbaikan.",
      },
      {
        speaker: "A",
        jp: "わかりました。すぐに直します。",
        reading: "Wakarimashita. Sugu ni naoshimasu.",
        id: "Mengerti. Akan segera saya perbaiki.",
      },
      {
        speaker: "B",
        jp: "ありがとうございます。よろしくお願いします。",
        reading: "Arigatou gozaimasu. Yoroshiku onegaishimasu.",
        id: "Terima kasih. Mohon bantuannya.",
      },
    ],
  },
  transport: {
    title: "Transportasi",
    badge: "交通",
    lines: [
      {
        speaker: "A",
        jp: "すみません、渋谷駅に行きたいんですが。",
        reading: "Sumimasen, Shibuya-eki ni ikitain desu ga.",
        id: "Permisi, saya ingin pergi ke Stasiun Shibuya.",
      },
      {
        speaker: "B",
        jp: "この電車に乗って、新宿で乗り換えてください。",
        reading: "Kono densha ni notte, Shinjuku de norikaete kudasai.",
        id: "Naiki kereta ini, lalu ganti di Shinjuku.",
      },
      {
        speaker: "A",
        jp: "何番線ですか？",
        reading: "Nan-ban-sen desu ka?",
        id: "Jalur nomor berapa?",
      },
      {
        speaker: "B",
        jp: "三番線です。五分後に来ますよ。",
        reading: "San-ban-sen desu. Go-fun-go ni kimasu yo.",
        id: "Jalur nomor 3. Datang 5 menit lagi.",
      },
      {
        speaker: "A",
        jp: "ありがとうございます。助かりました。",
        reading: "Arigatou gozaimasu. Tasukarimashita.",
        id: "Terima kasih. Sangat membantu.",
      },
      {
        speaker: "B",
        jp: "お気をつけて。",
        reading: "Okiwo tsukete.",
        id: "Hati-hati di jalan.",
      },
    ],
  },
};

/* ── INIT PERCAKAPAN ─────────────────────────────────────── */
function initPercakapan(topic = "perkenalan") {
  document.querySelectorAll("#percakapanTabs .tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.topic === topic);
    btn.onclick = () => initPercakapan(btn.dataset.topic);
  });

  const data = CONV_DATA[topic];
  const player = document.getElementById("convPlayer");
  player.innerHTML = "";

  const card = document.createElement("div");
  card.className = "conv-card";
  card.innerHTML = `
    <div class="conv-header">
      <div>
        <div class="conv-title">${data.title}</div>
      </div>
      <span class="conv-badge">${data.badge}</span>
    </div>
    <div class="conv-body open">
      <div class="conv-play-all">
        <button class="play-all-btn" id="playAllBtn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Putar Semua
        </button>
        <span class="play-all-label">Klik baris untuk dengarkan per kalimat</span>
      </div>
      <div class="dialog-list" id="dialogList"></div>
      <button class="show-translation-btn" id="showTransBtn">👁 Tampilkan Terjemahan</button>
      <div class="translation-box" id="translationBox"></div>
    </div>`;
  player.appendChild(card);

  // Dialog lines
  const dl = card.querySelector("#dialogList");
  data.lines.forEach((line, i) => {
    const div = document.createElement("div");
    div.className = "dialog-line";
    div.dataset.idx = i;
    div.innerHTML = `
      <span class="dialog-speaker speaker-${line.speaker.toLowerCase()}">${line.speaker}</span>
      <div class="dialog-content">
        <div class="dialog-jp">${line.jp}</div>
        <div class="dialog-reading">${line.reading}</div>
      </div>
      <span class="dialog-play-icon">▶</span>`;
    div.addEventListener("click", () => playDialogLine(data.lines, i, dl));
    dl.appendChild(div);
  });

  // Play all
  card
    .querySelector("#playAllBtn")
    .addEventListener("click", () => playAllDialog(data.lines, dl, 0));

  // Translation
  const transBox = card.querySelector("#translationBox");
  data.lines.forEach((line) => {
    const d = document.createElement("div");
    d.className = "translation-line";
    d.innerHTML = `<strong>${line.speaker}:</strong> ${line.id}`;
    transBox.appendChild(d);
  });
  card.querySelector("#showTransBtn").addEventListener("click", function () {
    const open = transBox.classList.toggle("open");
    this.textContent = open
      ? "👁 Sembunyikan Terjemahan"
      : "👁 Tampilkan Terjemahan";
  });
}

function playDialogLine(lines, idx, dl) {
  dl.querySelectorAll(".dialog-line").forEach((l) =>
    l.classList.remove("active-line"),
  );
  dl.children[idx].classList.add("active-line");
  TTS.speak(lines[idx].jp, {
    rate: 0.8,
    onEnd: () => dl.children[idx].classList.remove("active-line"),
  });
}

function playAllDialog(lines, dl, idx) {
  if (idx >= lines.length) return;
  dl.querySelectorAll(".dialog-line").forEach((l) =>
    l.classList.remove("active-line"),
  );
  dl.children[idx].classList.add("active-line");
  dl.children[idx].scrollIntoView({ behavior: "smooth", block: "nearest" });
  TTS.speak(lines[idx].jp, {
    rate: 0.8,
    onEnd: () => {
      dl.children[idx].classList.remove("active-line");
      setTimeout(() => playAllDialog(lines, dl, idx + 1), 600);
    },
  });
}

/* ═══════════════════════════════════════════════════════════
   DATA — JLPT LISTENING
═══════════════════════════════════════════════════════════ */
const JLPT_DATA = {
  N5: {
    desc: "Percakapan sederhana dan instruksi dasar.",
    items: [
      {
        title: "Salam & Perkenalan",
        meta: "Ungkapan dasar sehari-hari",
        text: "はじめまして。わたしはアリです。インドネシアからきました。どうぞよろしくおねがいします。",
        reading:
          "Hajimemashite. Watashi wa Ari desu. Indoneshia kara kimashita. Douzo yoroshiku onegaishimasu.",
        trans:
          "Salam kenal. Saya Ari. Saya berasal dari Indonesia. Mohon bantuannya.",
      },
      {
        title: "Menanyakan Harga",
        meta: "Di toko / berbelanja",
        text: "すみません、このりんごはいくらですか？ひとつ百円です。じゃあ、みっつください。",
        reading:
          "Sumimasen, kono ringo wa ikura desu ka? Hitotsu hyaku-en desu. Jaa, mittsu kudasai.",
        trans:
          "Permisi, apel ini berapa? Satu buah 100 yen. Kalau begitu, tolong 3 buah.",
      },
      {
        title: "Menanyakan Waktu",
        meta: "Percakapan sehari-hari",
        text: "いまなんじですか？ごぜんじゅうじはんです。ありがとうございます。",
        reading: "Ima nanji desu ka? Gozen juuji han desu. Arigatou gozaimasu.",
        trans: "Sekarang jam berapa? Jam setengah sebelas pagi. Terima kasih.",
      },
      {
        title: "Petunjuk Arah",
        meta: "Di jalan / bertanya arah",
        text: "えきはどこですか？まっすぐいって、みぎにまがってください。えきはそこにあります。",
        reading:
          "Eki wa doko desu ka? Massugu itte, migi ni magatte kudasai. Eki wa soko ni arimasu.",
        trans:
          "Stasiun di mana? Jalan lurus, lalu belok kanan. Stasiun ada di sana.",
      },
    ],
  },
  N4: {
    desc: "Percakapan sehari-hari yang lebih panjang.",
    items: [
      {
        title: "Membuat Janji",
        meta: "Mengatur pertemuan",
        text: "田中さん、来週の月曜日、一緒に昼ごはんを食べませんか？いいですね。何時にしましょうか？十二時はどうですか？はい、大丈夫です。",
        reading:
          "Tanaka-san, raishuu no getsuyoubi, issho ni hirugohan wo tabemasen ka? Ii desu ne. Nanji ni shimashou ka? Juuniji wa dou desu ka? Hai, daijoubu desu.",
        trans:
          "Tanaka-san, hari Senin minggu depan, maukah kita makan siang bersama? Bagus. Jam berapa ya? Bagaimana jam 12? Ya, tidak masalah.",
      },
      {
        title: "Menelepon Teman",
        meta: "Percakapan telepon",
        text: "もしもし、ヤマダです。あ、ヤマダさん、どうしたんですか？実は、明日の予定を変えてもいいですか？もちろんです。何かありましたか？",
        reading:
          "Moshimoshi, Yamada desu. A, Yamada-san, doushitan desu ka? Jitsu wa, ashita no yotei wo kaete mo ii desu ka? Mochiron desu. Nanika arimashita ka?",
        trans:
          "Halo, ini Yamada. Oh, Yamada-san, ada apa? Sebenarnya, bolehkah saya mengubah rencana besok? Tentu saja. Ada sesuatu?",
      },
      {
        title: "Di Restoran",
        meta: "Memesan makanan",
        text: "いらっしゃいませ。何名様ですか？二人です。こちらへどうぞ。ご注文はお決まりですか？ラーメンをひとつと、餃子をふたつください。",
        reading:
          "Irasshaimase. Nannin sama desu ka? Futari desu. Kochira he douzo. Go-chuumon wa okimari desu ka? Raamen wo hitotsu to, gyouza wo futatsu kudasai.",
        trans:
          "Selamat datang. Berapa orang? Dua orang. Silakan ke sini. Sudah siap memesan? Satu ramen dan dua gyoza.",
      },
    ],
  },
  N3: {
    desc: "Percakapan dan pengumuman umum.",
    items: [
      {
        title: "Pengumuman Kereta",
        meta: "Situasi di stasiun",
        text: "まもなく、三番線に電車が参ります。危険ですので、黄色い線の内側にお下がりください。この電車は渋谷行きです。",
        reading:
          "Mamonaku, san-ban-sen ni densha ga mairimasu. Kiken desu node, kiiroi sen no uchigawa ni osagari kudasai. Kono densha wa Shibuya yuki desu.",
        trans:
          "Sebentar lagi, kereta akan tiba di jalur 3. Karena berbahaya, harap mundur ke dalam garis kuning. Kereta ini menuju Shibuya.",
      },
      {
        title: "Diskusi di Kantor",
        meta: "Rapat / pertemuan kerja",
        text: "この企画について、皆さんのご意見を聞かせてください。私は、予算が少し高すぎると思います。その点について、もう少し詳しく説明していただけますか？",
        reading:
          "Kono kikaku ni tsuite, minasan no go-iken wo kikasete kudasai. Watashi wa, yosan ga sukoshi takasugiru to omoimasu. Sono ten ni tsuite, mou sukoshi kuwashiku setsumei shite itadakemasu ka?",
        trans:
          "Tolong sampaikan pendapat Anda semua tentang rencana ini. Menurut saya, anggarannya terlalu tinggi. Bisakah Anda menjelaskan poin itu lebih detail?",
      },
      {
        title: "Berita Cuaca",
        meta: "Informasi cuaca",
        text: "今日の天気予報をお伝えします。午前中は晴れですが、午後から曇りになり、夕方には雨が降る恐れがあります。外出の際は傘をお持ちください。",
        reading:
          "Kyou no tenki yohou wo otodashimasu. Gozenchu wa hare desu ga, gogo kara kumori ni nari, yuugata ni wa ame ga furu osore ga arimasu. Gaishutsu no sai wa kasa wo omochi kudasai.",
        trans:
          "Berikut ramalan cuaca hari ini. Pagi hari cerah, namun siang hari mendung, dan sore hari kemungkinan hujan. Bawa payung saat keluar.",
      },
    ],
  },
  N2: {
    desc: "Berita dan diskusi tingkat menengah.",
    items: [
      {
        title: "Berita Ekonomi",
        meta: "Siaran berita",
        text: "先月の消費者物価指数が発表されました。前月比で二・三パーセント上昇し、エネルギー価格の高騰が主な要因とされています。政府は対策を検討中です。",
        reading:
          "Sengetsu no shouhisha bukka shisuu ga happyou saremashita. Zengetsu-hi de ni-ten-san-paasento joushou shi, enerugii kakaku no koutou ga omona youin to sarete imasu. Seifu wa taisaku wo kentouchuu desu.",
        trans:
          "Indeks harga konsumen bulan lalu telah diumumkan. Naik 2,3% dibanding bulan sebelumnya, dengan kenaikan harga energi sebagai faktor utama. Pemerintah sedang mempertimbangkan tindakan.",
      },
      {
        title: "Diskusi Panel",
        meta: "Program diskusi TV",
        text: "少子高齢化問題について、専門家の皆さんにお聞きします。この問題を解決するためには、まず若い世代が安心して子育てできる環境を整えることが最優先課題だと考えます。",
        reading:
          "Shoushi koureika mondai ni tsuite, senmonka no minasan ni okiki shimasu. Kono mondai wo kaiketsu suru tame ni wa, mazu wakai sedai ga anshin shite kosodate dekiru kankyou wo totonoeru koto ga saiyuusen kadai da to kangaemasu.",
        trans:
          "Kami bertanya kepada para ahli tentang masalah penuaan populasi. Untuk menyelesaikan masalah ini, prioritas utama adalah menciptakan lingkungan di mana generasi muda dapat membesarkan anak dengan nyaman.",
      },
    ],
  },
  N1: {
    desc: "Diskusi dan informasi tingkat lanjut.",
    items: [
      {
        title: "Ceramah Akademis",
        meta: "Kuliah / seminar",
        text: "本日の講義では、現代社会における情報倫理の問題について考察します。デジタル化が急速に進む現代において、個人情報の保護と情報の自由な流通という相反する価値観をどう調和させるかが重要な課題となっています。",
        reading:
          "Honjitsu no kougi de wa, gendai shakai ni okeru jouhou rinri no mondai ni tsuite kousatsu shimasu. Dejitaruka ga kyuusoku ni susumu gendai ni oite, kojin jouhou no hogo to jouhou no jiyuuna ryuutsuu to iu aihamiru kachikan wo dou choumwa saseru ka ga juuyou na kadai to natte imasu.",
        trans:
          "Pada kuliah hari ini, kita akan membahas masalah etika informasi di masyarakat modern. Di era digitalisasi yang pesat ini, bagaimana menyelaraskan nilai-nilai yang bertentangan antara perlindungan data pribadi dan sirkulasi informasi bebas menjadi tantangan penting.",
      },
      {
        title: "Debat Kebijakan",
        meta: "Diskusi tingkat tinggi",
        text: "環境政策の観点から申し上げますと、カーボンニュートラルの実現には産業構造の抜本的な変革が不可欠です。しかしながら、経済成長との両立を図るためには、段階的なアプローチを取ることが現実的ではないでしょうか。",
        reading:
          "Kankyou seisaku no kanten kara moushiagemasu to, kaabonnnyuutoraru no jitsugen ni wa sangyou kouzou no bapponteki na henkaku ga fukaketsu desu. Shikashinagara, keizai seichou tono ryouritsu wo hakaru tame ni wa, dankaitekina apuroochu wo toru koto ga genjitsuteki de wa nai deshou ka.",
        trans:
          "Dari sudut pandang kebijakan lingkungan, untuk mewujudkan netralitas karbon, transformasi mendasar dalam struktur industri sangat diperlukan. Namun, untuk mencapai keseimbangan dengan pertumbuhan ekonomi, bukankah pendekatan bertahap lebih realistis?",
      },
    ],
  },
};

/* ── OPEN JLPT ───────────────────────────────────────────── */
function openJLPT(lvl) {
  const data = JLPT_DATA[lvl];
  document.getElementById("jlptTitle").textContent = `🎯 Listening ${lvl}`;
  document.getElementById("jlptLevelBadge").textContent = lvl;
  document.getElementById("jlptDesc").textContent = data.desc;

  const list = document.getElementById("jlptList");
  list.innerHTML = "";

  data.items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "jlpt-card";
    card.innerHTML = `
      <div class="jlpt-card-header">
        <div>
          <div class="jlpt-card-title">${item.title}</div>
          <div class="jlpt-card-meta">${item.meta}</div>
        </div>
        <span class="jlpt-card-toggle">›</span>
      </div>
      <div class="jlpt-card-body">
        <div class="jlpt-audio-block">
          <div class="jlpt-audio-text">${item.text}</div>
          <div class="jlpt-audio-reading">${item.reading}</div>
          <div class="jlpt-audio-controls">
            <button class="jlpt-play-btn" id="jlptPlay-${i}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Putar
            </button>
            <span class="jlpt-translation">${item.trans}</span>
          </div>
        </div>
      </div>`;

    const header = card.querySelector(".jlpt-card-header");
    const body = card.querySelector(".jlpt-card-body");
    header.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    const playBtn = card.querySelector(`#jlptPlay-${i}`);
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isPlaying = playBtn.classList.contains("playing");
      // Reset all
      document.querySelectorAll(".jlpt-play-btn").forEach((b) => {
        b.classList.remove("playing");
        b.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Putar`;
      });
      if (!isPlaying) {
        playBtn.classList.add("playing");
        playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Berhenti`;
        TTS.speak(item.text, {
          rate: 0.75,
          onEnd: () => {
            playBtn.classList.remove("playing");
            playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Putar`;
          },
        });
      } else {
        TTS.stop();
      }
    });

    list.appendChild(card);
  });

  showScreen("screenJLPT");
}

/* ═══════════════════════════════════════════════════════════
   DATA — QUIZ LISTENING
═══════════════════════════════════════════════════════════ */
const QUIZ_DATA = {
  N5: [
    {
      audio: "ありがとうございます",
      question: "Apa yang diucapkan?",
      choices: ["Permisi", "Selamat pagi", "Terima kasih", "Selamat malam"],
      answer: 2,
      detail: "ありがとうございます = Terima kasih (formal)",
    },
    {
      audio: "おはようございます",
      question: "Salam apa yang diucapkan?",
      choices: ["Salam malam", "Salam pagi", "Salam siang", "Salam tidur"],
      answer: 1,
      detail: "おはようございます = Selamat pagi",
    },
    {
      audio: "いぬ",
      question: "Hewan apa yang disebutkan?",
      choices: ["Kucing", "Ikan", "Anjing", "Burung"],
      answer: 2,
      detail: "いぬ (犬) = anjing",
    },
    {
      audio: "みず",
      question: "Apa yang disebutkan?",
      choices: ["Api", "Angin", "Tanah", "Air"],
      answer: 3,
      detail: "みず (水) = air",
    },
    {
      audio: "ひとつ、ふたつ、みっつ",
      question: "Angka apa yang disebutkan?",
      choices: ["4, 5, 6", "1, 2, 3", "7, 8, 9", "10, 11, 12"],
      answer: 1,
      detail: "ひとつ=1、ふたつ=2、みっつ=3",
    },
    {
      audio: "あか",
      question: "Warna apa yang disebutkan?",
      choices: ["Biru", "Putih", "Hitam", "Merah"],
      answer: 3,
      detail: "あか (赤) = merah",
    },
    {
      audio: "がっこう",
      question: "Tempat apa yang disebutkan?",
      choices: ["Rumah", "Toko", "Sekolah", "Kantor"],
      answer: 2,
      detail: "がっこう (学校) = sekolah",
    },
    {
      audio: "たべる",
      question: "Kegiatan apa yang disebutkan?",
      choices: ["Tidur", "Berlari", "Minum", "Makan"],
      answer: 3,
      detail: "たべる (食べる) = makan",
    },
    {
      audio: "おおきい",
      question: "Kata sifat apa yang disebutkan?",
      choices: ["Kecil", "Panjang", "Besar", "Pendek"],
      answer: 2,
      detail: "おおきい (大きい) = besar",
    },
    {
      audio: "でんわ",
      question: "Benda apa yang disebutkan?",
      choices: ["Televisi", "Radio", "Komputer", "Telepon"],
      answer: 3,
      detail: "でんわ (電話) = telepon",
    },
  ],
  N4: [
    {
      audio: "電車に乗って渋谷まで行きます",
      question: "Naik apa untuk pergi ke Shibuya?",
      choices: ["Bus", "Taksi", "Kereta", "Sepeda"],
      answer: 2,
      detail: "電車(でんしゃ) = kereta listrik",
    },
    {
      audio: "明日の会議は三時から始まります",
      question: "Kapan rapat dimulai?",
      choices: ["Jam 2", "Jam 3", "Jam 4", "Jam 5"],
      answer: 1,
      detail: "三時(さんじ) = jam 3",
    },
    {
      audio: "この薬は食後に飲んでください",
      question: "Kapan harus minum obat?",
      choices: [
        "Sebelum makan",
        "Saat makan",
        "Setelah makan",
        "Sebelum tidur",
      ],
      answer: 2,
      detail: "食後(しょくご) = setelah makan",
    },
    {
      audio: "図書館で本を借りました",
      question: "Di mana meminjam buku?",
      choices: ["Toko buku", "Sekolah", "Perpustakaan", "Kantor pos"],
      answer: 2,
      detail: "図書館(としょかん) = perpustakaan",
    },
    {
      audio: "病院に行って診察を受けました",
      question: "Ke mana pergi?",
      choices: ["Apotek", "Klinik", "Rumah sakit", "Puskesmas"],
      answer: 2,
      detail: "病院(びょういん) = rumah sakit",
    },
    {
      audio: "毎朝七時に起きて、運動します",
      question: "Apa yang dilakukan setelah bangun?",
      choices: ["Sarapan", "Mandi", "Tidur lagi", "Olahraga"],
      answer: 3,
      detail: "運動(うんどう) = olahraga",
    },
    {
      audio: "辞書で単語の意味を調べました",
      question: "Apa yang digunakan untuk mencari arti kata?",
      choices: ["Internet", "Buku teks", "Kamus", "Teman"],
      answer: 2,
      detail: "辞書(じしょ) = kamus",
    },
    {
      audio: "友達に手紙を書きました",
      question: "Apa yang ditulis untuk teman?",
      choices: ["Email", "Surat", "Laporan", "Nota"],
      answer: 1,
      detail: "手紙(てがみ) = surat",
    },
    {
      audio: "久しぶりに会いましたね",
      question: "Apa makna ungkapan yang diucapkan?",
      choices: [
        "Baru pertama ketemu",
        "Lama tidak bertemu",
        "Sering bertemu",
        "Tidak pernah ketemu",
      ],
      answer: 1,
      detail: "久しぶり = lama tidak bertemu",
    },
    {
      audio: "この料理は辛すぎて食べられません",
      question: "Mengapa tidak bisa dimakan?",
      choices: [
        "Terlalu asin",
        "Terlalu manis",
        "Terlalu pedas",
        "Terlalu pahit",
      ],
      answer: 2,
      detail: "辛すぎる = terlalu pedas",
    },
  ],
  N3: [
    {
      audio: "環境問題は今や世界的な課題となっています",
      question: "Apa yang menjadi masalah?",
      choices: [
        "Ekonomi global",
        "Politik dunia",
        "Masalah lingkungan",
        "Kesehatan masyarakat",
      ],
      answer: 2,
      detail: "環境問題(かんきょうもんだい) = masalah lingkungan",
    },
    {
      audio: "この計画を実現するためには、多くの努力が必要です",
      question: "Apa yang diperlukan untuk mewujudkan rencana?",
      choices: ["Uang banyak", "Banyak waktu", "Banyak usaha", "Banyak teman"],
      answer: 2,
      detail: "努力(どりょく) = usaha/kerja keras",
    },
    {
      audio: "消費税が来年から引き上げられる予定です",
      question: "Apa yang akan naik tahun depan?",
      choices: [
        "Harga bensin",
        "Pajak konsumsi",
        "Biaya transport",
        "Harga makanan",
      ],
      answer: 1,
      detail: "消費税(しょうひぜい) = pajak konsumsi",
    },
    {
      audio: "どんなに難しくても、諦めないでください",
      question: "Apa pesan yang disampaikan?",
      choices: [
        "Beristirahatlah",
        "Jangan menyerah",
        "Minta bantuan",
        "Coba cara lain",
      ],
      answer: 1,
      detail: "諦めない = jangan menyerah",
    },
    {
      audio: "この映画は見る価値があります",
      question: "Apa pendapat tentang film tersebut?",
      choices: [
        "Film itu membosankan",
        "Film itu layak ditonton",
        "Film itu terlalu panjang",
        "Film itu terlalu mahal",
      ],
      answer: 1,
      detail: "見る価値がある = layak ditonton",
    },
    {
      audio: "交通事故のため、この道路は通行止めになっています",
      question: "Mengapa jalan ditutup?",
      choices: [
        "Perbaikan jalan",
        "Kecelakaan lalu lintas",
        "Banjir",
        "Demonstrasi",
      ],
      answer: 1,
      detail: "交通事故(こうつうじこ) = kecelakaan lalu lintas",
    },
    {
      audio: "今月末までにレポートを提出してください",
      question: "Kapan laporan harus dikumpulkan?",
      choices: ["Hari ini", "Minggu ini", "Akhir bulan ini", "Bulan depan"],
      answer: 2,
      detail: "今月末(こんげつまつ) = akhir bulan ini",
    },
    {
      audio: "この薬は副作用がほとんどありません",
      question: "Apa yang dikatakan tentang obat ini?",
      choices: [
        "Sangat mahal",
        "Hampir tidak ada efek samping",
        "Sangat efektif",
        "Sulit didapat",
      ],
      answer: 1,
      detail: "副作用(ふくさよう) = efek samping",
    },
    {
      audio: "彼は失敗にもかかわらず、諦めずに挑戦し続けました",
      question: "Apa yang dilakukan meskipun gagal?",
      choices: [
        "Menyerah dan istirahat",
        "Terus mencoba",
        "Minta bantuan orang lain",
        "Mengganti rencana",
      ],
      answer: 1,
      detail: "〜にもかかわらず = meskipun",
    },
    {
      audio: "この結果は予想に反していました",
      question: "Bagaimana hasil tersebut?",
      choices: [
        "Sesuai prediksi",
        "Lebih baik dari prediksi",
        "Bertentangan dengan prediksi",
        "Belum ada prediksi",
      ],
      answer: 2,
      detail: "予想に反して = bertentangan dengan prediksi",
    },
  ],
  N2: [
    {
      audio: "経済のグローバル化に伴い、国際競争が激化しています",
      question: "Apa yang semakin ketat seiring globalisasi ekonomi?",
      choices: [
        "Peraturan lingkungan",
        "Persaingan internasional",
        "Kerjasama antar negara",
        "Kebijakan imigrasi",
      ],
      answer: 1,
      detail: "国際競争(こくさいきょうそう) = persaingan internasional",
    },
    {
      audio: "この研究の結果は、従来の定説を覆すものでした",
      question: "Apa yang terjadi pada teori yang ada?",
      choices: [
        "Terkonfirmasi",
        "Diperbarui sedikit",
        "Terbantahkan",
        "Tidak berubah",
      ],
      answer: 2,
      detail: "覆す(くつがえす) = membantah/membalikkan",
    },
    {
      audio: "少子化対策として、育児支援の充実が急務です",
      question: "Apa yang mendesak sebagai solusi penurunan angka kelahiran?",
      choices: [
        "Perbaikan pendidikan",
        "Penguatan dukungan pengasuhan anak",
        "Peningkatan lapangan kerja",
        "Pembangunan perumahan",
      ],
      answer: 1,
      detail: "育児支援(いくじしえん) = dukungan pengasuhan anak",
    },
    {
      audio: "この政策は功罪相半ばするという評価が多い",
      question: "Bagaimana penilaian kebijakan ini?",
      choices: [
        "Sangat positif",
        "Sangat negatif",
        "Ada manfaat dan kerugiannya",
        "Tidak ada dampaknya",
      ],
      answer: 2,
      detail: "功罪相半ばする = ada baik dan buruknya",
    },
    {
      audio: "再生可能エネルギーへの転換が不可欠となっています",
      question: "Apa yang tidak bisa dihindari?",
      choices: [
        "Penggunaan batu bara",
        "Beralih ke energi terbarukan",
        "Membangun PLTN baru",
        "Mengimpor lebih banyak energi",
      ],
      answer: 1,
      detail: "再生可能エネルギー = energi terbarukan",
    },
    {
      audio: "この問題の解決には、多角的なアプローチが求められます",
      question: "Pendekatan apa yang dibutuhkan?",
      choices: [
        "Satu solusi tunggal",
        "Pendekatan dari banyak sisi",
        "Solusi teknologi saja",
        "Kebijakan pemerintah saja",
      ],
      answer: 1,
      detail: "多角的なアプローチ = pendekatan dari berbagai sudut",
    },
    {
      audio: "彼の発言は物議を醸しました",
      question: "Apa yang ditimbulkan oleh ucapannya?",
      choices: [
        "Pujian luas",
        "Kontroversi",
        "Ketidakpedulian",
        "Dukungan penuh",
      ],
      answer: 1,
      detail: "物議を醸す = menimbulkan kontroversi",
    },
    {
      audio: "この条約の批准には国会の承認が必要です",
      question: "Apa yang diperlukan untuk meratifikasi perjanjian?",
      choices: [
        "Tanda tangan presiden",
        "Persetujuan parlemen",
        "Dukungan rakyat",
        "Persetujuan PBB",
      ],
      answer: 1,
      detail: "国会の承認(こっかいのしょうにん) = persetujuan parlemen",
    },
    {
      audio: "企業の社会的責任を果たすことが求められています",
      question: "Apa yang dituntut dari perusahaan?",
      choices: [
        "Meningkatkan profit",
        "Memenuhi tanggung jawab sosial",
        "Memperluas bisnis",
        "Mengurangi karyawan",
      ],
      answer: 1,
      detail: "社会的責任(しゃかいてきせきにん) = tanggung jawab sosial",
    },
    {
      audio: "格差社会の是正に向けた政策が議論されています",
      question: "Apa yang sedang didiskusikan?",
      choices: [
        "Kebijakan untuk meningkatkan pertumbuhan",
        "Kebijakan untuk memperbaiki ketimpangan sosial",
        "Kebijakan imigrasi baru",
        "Kebijakan pertahanan",
      ],
      answer: 1,
      detail: "格差社会の是正 = perbaikan ketimpangan sosial",
    },
  ],
  N1: [
    {
      audio: "この哲学的命題は、二千年以上にわたって議論され続けています",
      question: "Sudah berapa lama masalah filosofis ini diperdebatkan?",
      choices: [
        "Sekitar 100 tahun",
        "Sekitar 500 tahun",
        "Sekitar 1000 tahun",
        "Lebih dari 2000 tahun",
      ],
      answer: 3,
      detail: "二千年以上 = lebih dari 2000 tahun",
    },
    {
      audio: "このパラドックスは、論理的に解決不能な命題を内包しています",
      question: "Apa yang terkandung dalam paradoks ini?",
      choices: [
        "Solusi matematika",
        "Proposisi yang tidak bisa diselesaikan secara logis",
        "Teori baru",
        "Bukti empiris",
      ],
      answer: 1,
      detail: "論理的に解決不能 = tidak bisa diselesaikan secara logis",
    },
    {
      audio:
        "グローバリズムへの反動として、各地でナショナリズムが台頭しています",
      question: "Apa yang bangkit sebagai reaksi terhadap globalisme?",
      choices: [
        "Internasionalisme",
        "Nasionalisme",
        "Liberalisme",
        "Sosialisme",
      ],
      answer: 1,
      detail: "ナショナリズムが台頭 = bangkitnya nasionalisme",
    },
    {
      audio: "この論文は、従来のパラダイムに根本的な疑問を投げかけています",
      question: "Apa yang dilakukan makalah ini terhadap paradigma yang ada?",
      choices: [
        "Mengkonfirmasi",
        "Melengkapi",
        "Mempertanyakan secara fundamental",
        "Mengabaikan",
      ],
      answer: 2,
      detail: "根本的な疑問を投げかける = mempertanyakan secara mendasar",
    },
    {
      audio:
        "この政策立案において、多様なステークホルダーの利害を調整することが不可欠です",
      question: "Apa yang tidak dapat dihindari dalam pembuatan kebijakan ini?",
      choices: [
        "Memprioritaskan satu kelompok",
        "Menyelaraskan kepentingan berbagai pemangku kepentingan",
        "Mengabaikan opini publik",
        "Menerapkan kebijakan dengan cepat",
      ],
      answer: 1,
      detail:
        "多様なステークホルダーの利害を調整 = menyelaraskan kepentingan berbagai pemangku kepentingan",
    },
    {
      audio:
        "言語は単なる伝達手段ではなく、世界観を規定する認知的枠組みでもあります",
      question: "Apa yang dimaksud tentang bahasa?",
      choices: [
        "Hanya alat komunikasi",
        "Juga merupakan kerangka kognitif yang mendefinisikan pandangan dunia",
        "Tidak berpengaruh pada pemikiran",
        "Hanya ekspresi budaya",
      ],
      answer: 1,
      detail:
        "世界観を規定する認知的枠組み = kerangka kognitif yang mendefinisikan pandangan dunia",
    },
    {
      audio: "社会の分断を乗り越えるためには、対話と相互理解が不可欠です",
      question: "Apa yang diperlukan untuk mengatasi perpecahan sosial?",
      choices: [
        "Kekuatan ekonomi",
        "Dialog dan saling pengertian",
        "Peraturan yang ketat",
        "Teknologi baru",
      ],
      answer: 1,
      detail: "対話と相互理解 = dialog dan saling pengertian",
    },
    {
      audio: "この芸術作品は、崇高と滑稽を同時に体現しています",
      question: "Apa yang diwujudkan karya seni ini?",
      choices: [
        "Keindahan dan kesederhanaan",
        "Keagungan dan kekomedian secara bersamaan",
        "Kesedihan dan kegembiraan",
        "Tradisi dan modernitas",
      ],
      answer: 1,
      detail:
        "崇高と滑稽を同時に体現 = mewujudkan keagungan dan komedi secara bersamaan",
    },
    {
      audio: "この危機は、既存の国際秩序の脆弱性を露わにしました",
      question: "Apa yang diperlihatkan krisis ini?",
      choices: [
        "Kekuatan tatanan internasional yang ada",
        "Kelemahan tatanan internasional yang ada",
        "Pentingnya kerjasama bilateral",
        "Kebutuhan akan teknologi baru",
      ],
      answer: 1,
      detail:
        "既存の国際秩序の脆弱性を露わにする = memperlihatkan kelemahan tatanan internasional",
    },
    {
      audio: "自己矛盾をはらんだ命題を、弁証法的な視点から解析します",
      question: "Pendekatan apa yang digunakan untuk menganalisis proposisi?",
      choices: ["Empiris", "Matematis", "Dialektis", "Historis"],
      answer: 2,
      detail: "弁証法的な視点 = sudut pandang dialektis",
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   QUIZ STATE & LOGIC
═══════════════════════════════════════════════════════════ */
let quizState = {
  lvl: "N5",
  questions: [],
  current: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  answers: [],
  timerInterval: null,
  timeLeft: 30,
  hasPlayed: false,
};
const TOTAL = 10,
  TIME = 30;

// Level selection in quiz setup
document.querySelectorAll("#quizLevelRow .lvl-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("#quizLevelRow .lvl-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    quizState.lvl = btn.dataset.lvl;
  });
});

document.getElementById("startQuizBtn").addEventListener("click", startQuiz);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  TTS.stop();
  const pool = QUIZ_DATA[quizState.lvl];
  quizState.questions = shuffle(pool).slice(0, TOTAL);
  quizState.current = 0;
  quizState.score = 0;
  quizState.correct = 0;
  quizState.wrong = 0;
  quizState.answers = [];

  document.getElementById("quizLvlBadge").textContent = quizState.lvl;
  showScreen("screenQuizSoal");
  loadQuestion();
}

function loadQuestion() {
  const q = quizState.questions[quizState.current];
  quizState.hasPlayed = false;

  document.getElementById("quizCounter").textContent =
    `${quizState.current + 1} / ${TOTAL}`;
  document.getElementById("progressFill").style.width =
    `${(quizState.current / TOTAL) * 100}%`;
  document.getElementById("questionText").textContent = q.question;

  // Reset audio card
  const audioJp = document.getElementById("audioJp");
  audioJp.textContent = q.audio;
  audioJp.classList.remove("revealed");
  document.getElementById("audioWave").classList.remove("active");
  document.getElementById("audioHint").textContent =
    "Tekan ▶ untuk mendengarkan";

  const playBtn = document.getElementById("playBtn");
  playBtn.classList.remove("playing");
  playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;

  // Build choices
  const indices = shuffle([0, 1, 2, 3]);
  const correctNew = indices.indexOf(q.answer);
  const grid = document.getElementById("choicesGrid");
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
  const fb = document.getElementById("feedbackBox");
  fb.classList.remove("show", "correct-fb", "wrong-fb");

  startTimer();
}

/* ── PLAY BUTTON ─────────────────────────────────────────── */
document.getElementById("playBtn").addEventListener("click", () => {
  const q = quizState.questions[quizState.current];
  if (!q) return;
  playQuizAudio(q.audio);
});
document.getElementById("replayBtn").addEventListener("click", () => {
  const q = quizState.questions[quizState.current];
  if (!q) return;
  playQuizAudio(q.audio);
});

function playQuizAudio(text) {
  const playBtn = document.getElementById("playBtn");
  const wave = document.getElementById("audioWave");
  const audioJp = document.getElementById("audioJp");
  const hint = document.getElementById("audioHint");

  quizState.hasPlayed = true;
  wave.classList.add("active");
  playBtn.classList.add("playing");
  playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  hint.textContent = "Sedang diputar...";

  TTS.speak(text, {
    rate: 0.75,
    onEnd: () => {
      wave.classList.remove("active");
      playBtn.classList.remove("playing");
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      audioJp.classList.add("revealed");
      hint.textContent = "Tekan 🔄 untuk putar ulang";
    },
  });
}

/* ── TIMER ───────────────────────────────────────────────── */
function startTimer() {
  clearInterval(quizState.timerInterval);
  quizState.timeLeft = TIME;
  updateTimer();
  quizState.timerInterval = setInterval(() => {
    quizState.timeLeft--;
    updateTimer();
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timerInterval);
      timeOut();
    }
  }, 1000);
}
function updateTimer() {
  const pct = (quizState.timeLeft / TIME) * 100;
  const bar = document.getElementById("timerBar");
  const num = document.getElementById("timerNum");
  bar.style.width = pct + "%";
  num.textContent = quizState.timeLeft;
  const warn = quizState.timeLeft <= 15 && quizState.timeLeft > 7;
  const danger = quizState.timeLeft <= 7;
  bar.className = "timer-bar" + (danger ? " danger" : warn ? " warn" : "");
  num.className = "timer-num" + (danger ? " danger" : warn ? " warn" : "");
}
function timeOut() {
  TTS.stop();
  disableChoices();
  document.querySelectorAll(".choice-btn").forEach((b) => {
    if (b.dataset.correct === "1") b.classList.add("correct");
  });
  const q = quizState.questions[quizState.current];
  quizState.answers.push({ qi: quizState.current, chosen: -1, correct: false });
  quizState.wrong++;
  showFeedback(false, q, "⏰ Waktu habis!");
}

/* ── HANDLE ANSWER ───────────────────────────────────────── */
function handleAnswer(btn, correctIdx, q) {
  clearInterval(quizState.timerInterval);
  TTS.stop();
  disableChoices();
  const isCorrect = btn.dataset.correct === "1";
  if (isCorrect) {
    btn.classList.add("correct");
    const pts = Math.max(10, Math.round((quizState.timeLeft / TIME) * 100));
    quizState.score += pts;
    quizState.correct++;
  } else {
    btn.classList.add("wrong");
    document.querySelectorAll(".choice-btn").forEach((b) => {
      if (b.dataset.correct === "1") b.classList.add("correct");
    });
    quizState.wrong++;
  }
  quizState.answers.push({
    qi: quizState.current,
    chosen: parseInt(btn.dataset.index),
    correct: isCorrect,
  });
  showFeedback(isCorrect, q);
}

function disableChoices() {
  document.querySelectorAll(".choice-btn").forEach((b) => (b.disabled = true));
}

function showFeedback(isCorrect, q, override = "") {
  const fb = document.getElementById("feedbackBox");
  fb.classList.remove("correct-fb", "wrong-fb");
  fb.classList.add(isCorrect ? "correct-fb" : "wrong-fb", "show");
  const icon = document.getElementById("feedbackIcon");
  icon.textContent = isCorrect ? "✓" : "✗";
  icon.className = "feedback-icon " + (isCorrect ? "correct" : "wrong");
  document.getElementById("feedbackMsg").textContent =
    override || (isCorrect ? "🎉 Benar!" : "😅 Salah!");
  document.getElementById("feedbackDetail").textContent = q.detail || "";
  const isLast = quizState.current === TOTAL - 1;
  document.getElementById("nextBtn").textContent = isLast
    ? "Lihat Hasil →"
    : "Soal Berikutnya →";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  quizState.current++;
  if (quizState.current >= TOTAL) {
    showResult();
  } else {
    loadQuestion();
  }
});

/* ── RESULT ──────────────────────────────────────────────── */
function showResult() {
  clearInterval(quizState.timerInterval);
  TTS.stop();
  document.getElementById("progressFill").style.width = "100%";

  const pct = Math.round((quizState.correct / TOTAL) * 100);
  document.getElementById("resultBadge").textContent =
    pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : pct >= 40 ? "📚" : "💪";
  document.getElementById("resultTitle").textContent =
    pct === 100
      ? "Sempurna!"
      : pct >= 80
        ? "Luar Biasa!"
        : pct >= 60
          ? "Bagus!"
          : "Terus Berlatih!";
  document.getElementById("resultSub").textContent =
    `Listening · ${quizState.lvl}`;
  document.getElementById("statScore").textContent = quizState.score;
  document.getElementById("statCorrect").textContent = quizState.correct;
  document.getElementById("statWrong").textContent = quizState.wrong;

  // Review
  const rl = document.getElementById("reviewList");
  rl.innerHTML = "";
  quizState.answers.forEach((a) => {
    const q = quizState.questions[a.qi];
    const div = document.createElement("div");
    div.className = "review-item " + (a.correct ? "correct" : "wrong");
    div.innerHTML = `
      <div class="review-dot">${a.correct ? "✓" : "✗"}</div>
      <div>
        <div class="review-q">${q.audio}</div>
        <div class="review-ans">Jawaban benar: <span>${q.choices[q.answer]}</span></div>
      </div>`;
    rl.appendChild(div);
  });

  showScreen("screenResult");
}

document.getElementById("retryBtn").addEventListener("click", () => {
  showScreen("screenQuizSetup");
});
document.getElementById("backMenuBtn").addEventListener("click", () => {
  TTS.stop();
  showScreen("screenMenu");
});

/* ── INIT ────────────────────────────────────────────────── */
// Pre-load kosakata data so first open is instant
document.addEventListener("DOMContentLoaded", () => {
  // nothing needed, lazy init on menu click
});
