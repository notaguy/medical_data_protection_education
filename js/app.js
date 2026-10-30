(function () {
  const quizView = document.getElementById("view-quiz");
  const resultsView = document.getElementById("view-results");
  if (!quizView || !resultsView) return;

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

  const retake = document.getElementById("quiz-retake");

  /** Answers live only in this page's memory. Nothing is written to disk or sent. */
  let answers = [];
  let index = 0;

  function showQuiz() {
    quizView.hidden = false;
    resultsView.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showResults() {
    quizView.hidden = true;
    resultsView.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetQuiz() {
    answers = [];
    index = 0;
  }

  function renderQuestion() {
    const q = QUIZ[index];
    const total = QUIZ.length;
    quizEls.step.textContent = `Question ${index + 1} of ${total}`;
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
      showResults();
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
      ? "Based on the choices in this session"
      : "Points to keep";
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
      "This score exists only in this window. Reload the page and it is gone. We did not save your answers.";
    resultEls.tips.appendChild(privacy);
  }

  quizEls.back.addEventListener("click", () => {
    if (index === 0) return;
    index -= 1;
    renderQuestion();
  });

  if (retake) {
    retake.addEventListener("click", () => {
      resetQuiz();
      renderQuestion();
      showQuiz();
    });
  }

  window.addEventListener("beforeunload", () => {
    answers = [];
  });

  resetQuiz();
  renderQuestion();
  showQuiz();
})();
