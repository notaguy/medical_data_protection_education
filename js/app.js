(function () {
  const views = {
    home: document.getElementById("view-home"),
    quiz: document.getElementById("view-quiz"),
    results: document.getElementById("view-results"),
    learn: document.getElementById("view-learn")
  };

  const quizEls = {
    progress: document.getElementById("quiz-progress"),
    step: document.getElementById("quiz-step"),
    prompt: document.getElementById("quiz-prompt"),
    options: document.getElementById("quiz-options"),
    back: document.getElementById("quiz-back")
  };

  const resultEls = {
    score: document.getElementById("result-score"),
    title: document.getElementById("result-title"),
    summary: document.getElementById("result-summary"),
    tips: document.getElementById("result-tips"),
    banner: document.getElementById("result-banner")
  };

  const articlesRoot = document.getElementById("articles");

  /** Răspunsurile stau doar în memoria acestei pagini. Nu se scriu pe disc, nu se trimit. */
  let answers = [];
  let index = 0;

  function show(name) {
    Object.entries(views).forEach(([key, el]) => {
      const on = key === name;
      el.hidden = !on;
      el.inert = !on;
      el.classList.toggle("is-active", on);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.getAttribute("data-nav") === name) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function resetQuiz() {
    answers = [];
    index = 0;
  }

  function renderQuestion() {
    const q = QUIZ[index];
    const total = QUIZ.length;
    quizEls.step.textContent = `Întrebarea ${index + 1} din ${total}`;
    quizEls.progress.style.width = `${((index + 1) / total) * 100}%`;
    quizEls.prompt.textContent = q.prompt;
    quizEls.back.disabled = index === 0;
    quizEls.options.replaceChildren();

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => choose(i));
      quizEls.options.appendChild(btn);
    });
  }

  function choose(optionIndex) {
    answers[index] = optionIndex;
    if (index < QUIZ.length - 1) {
      index += 1;
      renderQuestion();
    } else {
      renderResults();
      show("results");
    }
  }

  function renderResults() {
    let total = 0;
    const weak = [];

    QUIZ.forEach((q, i) => {
      const opt = q.options[answers[i]];
      total += opt ? opt.score : 0;
      if (!opt || opt.score < 2) {
        weak.push(q.tip);
      }
    });

    const max = QUIZ.length * 2;
    const band = BANDS.find((b) => total >= b.min && total <= b.max) || BANDS[0];

    resultEls.score.textContent = `${total} / ${max}`;
    resultEls.title.textContent = band.title;
    resultEls.summary.textContent = band.summary;
    resultEls.banner.className = `result-banner tone-${band.tone}`;

    resultEls.tips.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = weak.length
      ? "Pe baza alegerilor din această sesiune"
      : "Puncte de reținut";
    resultEls.tips.appendChild(heading);

    const list = document.createElement("ul");
    (weak.length ? weak : QUIZ.slice(0, 3).map((q) => q.tip)).forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      list.appendChild(li);
    });
    resultEls.tips.appendChild(list);

    const privacy = document.createElement("p");
    privacy.className = "privacy-inline";
    privacy.textContent =
      "Scorul există doar în această fereastră. Dacă reîncarci pagina, dispare. Nu am salvat răspunsurile.";
    resultEls.tips.appendChild(privacy);
  }

  function renderArticles() {
    articlesRoot.replaceChildren();
    ARTICLES.forEach((article) => {
      const el = document.createElement("article");
      el.className = "article";
      el.id = article.id;

      const kicker = document.createElement("p");
      kicker.className = "kicker";
      kicker.textContent = article.kicker;

      const h2 = document.createElement("h2");
      h2.textContent = article.title;

      const lead = document.createElement("p");
      lead.className = "lead";
      lead.textContent = article.lead;

      el.append(kicker, h2, lead);

      article.body.forEach((para) => {
        const p = document.createElement("p");
        p.textContent = para;
        el.appendChild(p);
      });

      const note = document.createElement("p");
      note.className = "draft-note";
      note.textContent = article.note;
      el.appendChild(note);

      articlesRoot.appendChild(el);
    });
  }

  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const target = el.getAttribute("data-go");
      if (target === "quiz") {
        resetQuiz();
        renderQuestion();
      }
      show(target);
    });
  });

  quizEls.back.addEventListener("click", () => {
    if (index === 0) return;
    index -= 1;
    renderQuestion();
  });

  window.addEventListener("beforeunload", () => {
    answers = [];
  });

  renderArticles();
  show("home");
})();
