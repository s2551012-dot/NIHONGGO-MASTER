(function () {
  // ─── Helper: ambil terjemahan dengan fallback ke 'id' ───────────────────────
  function t(key) {
    var lang = localStorage.getItem("lang") || "id";
    return (
      (translations[lang] && translations[lang][key]) ||
      (translations["id"] && translations["id"][key]) ||
      key
    );
  }

  // ─── Apply semua terjemahan ─────────────────────────────────────────────────
  function applyTranslations() {
    // ── index.html ────────────────────────────────────────────────────────────

    var tagline = document.getElementById("tagline");
    if (tagline) tagline.innerText = t("tagline");

    var linkHome = document.querySelector('a[href="home.html"]');
    if (linkHome) linkHome.innerText = t("menu_home");

    var linkMjlpt = document.querySelector('a[href="mjlpt.html"]');
    if (linkMjlpt) linkMjlpt.innerText = t("menu_mjlpt");

    var linkQuiz = document.querySelector('a[href="quiz.html"]');
    if (linkQuiz) linkQuiz.innerText = t("menu_quiz");

    var linkListening = document.querySelector('a[href="listening.html"]');
    if (linkListening) linkListening.innerText = t("menu_listening");

    var linkSetting = document.querySelector('a[href="setting.html"]');
    if (linkSetting) linkSetting.innerText = t("menu_setting");

    var vocabTitle = document.getElementById("vocab-title");
    if (vocabTitle) vocabTitle.innerText = t("vocab_section_title");

    var vocab1 = document.getElementById("vocab-1-meaning");
    if (vocab1) vocab1.innerText = t("vocab_hello");

    var vocab2 = document.getElementById("vocab-2-meaning");
    if (vocab2) vocab2.innerText = t("vocab_thanks");

    var vocab3 = document.getElementById("vocab-3-meaning");
    if (vocab3) vocab3.innerText = t("vocab_dog");

    // ── home.html ─────────────────────────────────────────────────────────────

    var homeTitle = document.getElementById("title");
    if (homeTitle) homeTitle.innerText = t("title");

    var vocabText = document.getElementById("vocabText");
    if (vocabText) vocabText.innerText = t("vocab");

    var kanjiText = document.getElementById("kanjiText");
    if (kanjiText) kanjiText.innerText = t("kanji");

    var grammarText = document.getElementById("grammarText");
    if (grammarText) grammarText.innerText = t("grammar");

    var n5Text = document.getElementById("n5Text");
    if (n5Text) n5Text.innerText = t("n5");

    var n4Text = document.getElementById("n4Text");
    if (n4Text) n4Text.innerText = t("n4");

    var n3Text = document.getElementById("n3Text");
    if (n3Text) n3Text.innerText = t("n3");

    var n2Text = document.getElementById("n2Text");
    if (n2Text) n2Text.innerText = t("n2");

    var n1Text = document.getElementById("n1Text");
    if (n1Text) n1Text.innerText = t("n1");

    // ── setting.html ──────────────────────────────────────────────────────────

    var settingsTitle = document.querySelector(".settings-page > h2");
    if (settingsTitle) settingsTitle.innerText = t("settings_title");

    var profileTitle = document.getElementById("profile-title");
    if (profileTitle) profileTitle.innerText = t("profile_title");

    var profileSub = document.getElementById("profile-sub");
    if (profileSub) profileSub.innerText = t("profile_sub");

    var cardLangTitle = document.getElementById("card-lang-title");
    if (cardLangTitle) cardLangTitle.innerText = t("lang_card_title");

    var langLabel = document.getElementById("lang-label");
    if (langLabel) langLabel.innerText = t("lang_label");

    var cardDarkTitle = document.getElementById("card-dark-title");
    if (cardDarkTitle) cardDarkTitle.innerText = t("dark_card_title");

    var darkLabel = document.getElementById("dark-label");
    if (darkLabel) darkLabel.innerText = t("dark_label");
  }

  // ─── Dropdown ganti bahasa ─────────────────────────────────────────────────
  function initLanguageSelect() {
    var select = document.getElementById("languageSelect");
    if (!select) return;
    select.value = localStorage.getItem("lang") || "id";
    select.addEventListener("change", function () {
      localStorage.setItem("lang", this.value);
      applyTranslations();
    });
  }

  // ─── Quiz helper (index.html) ──────────────────────────────────────────────
  window.checkAnswer = function (answer) {
    alert(answer === "B" ? t("quiz_correct") : t("quiz_wrong"));
  };

  // ─── Init ──────────────────────────────────────────────────────────────────
  applyTranslations();
  initLanguageSelect();
})();
