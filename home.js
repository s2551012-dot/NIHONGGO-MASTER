// DATABASE JLPT

const jlptData = {
  N5: [
    {
      word: "犬",
      reading: "いぬ",
      meaning: "Anjing",
    },

    {
      word: "猫",
      reading: "ねこ",
      meaning: "Kucing",
    },

    {
      word: "学校",
      reading: "がっこう",
      meaning: "Sekolah",
    },
  ],

  N4: [
    {
      word: "経験",
      reading: "けいけん",
      meaning: "Pengalaman",
    },

    {
      word: "約束",
      reading: "やくそく",
      meaning: "Janji",
    },
  ],

  N3: [
    {
      word: "環境",
      reading: "かんきょう",
      meaning: "Lingkungan",
    },
  ],

  N2: [
    {
      word: "維持",
      reading: "いじ",
      meaning: "Mempertahankan",
    },
  ],

  N1: [
    {
      word: "遂行",
      reading: "すいこう",
      meaning: "Pelaksanaan",
    },
  ],
};

// LOAD JLPT

function loadJLPT(level) {
  const container = document.getElementById("vocab-container");

  container.innerHTML = "";

  jlptData[level].forEach((item) => {
    container.innerHTML += `

        <div class="vocab-card">

            <h2>${item.word}</h2>

            <p>${item.reading}</p>

            <h3>${item.meaning}</h3>

        </div>

        `;
  });
}

// DEFAULT LOAD

loadJLPT("N5");
