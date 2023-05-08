import matematica1YQuestions from "../quizQuestions/matematica1YQuestions.js";
// Importação das questões

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".quiz");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const imgQuiz = document.querySelector(".imgQuiz");
const questionsTrue = document.querySelector(".questionsTrue");
// Elementos do DOM

let questions = matematica1YQuestions;
let currentIndex = 0;
let questionsCorrect = 0;
// Variavel uteis

// funções de utilidade

const resetQuiz = () => {
  // função para resetar o quiz
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

const handleAnswer = (e) => {
  // Função para verificar qunatas questões o usuario acertou e saber se ele chegou no final do quiz
  if (e.target.dataset.correct === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
};

// função para quando finalizar o quiz
const finish = () => {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas.`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  showCorrectAnswers(); // Chama a função para mostrar as perguntas corretas
};

// função que mostra as perguntas corretas
const showCorrectAnswers = () => {
  questionsTrue.innerHTML = ""; // Limpa o conteúdo anterior

  questions.forEach((question) => {
    const p = document.createElement("p");
    p.textContent = question.question;
    questionsTrue.appendChild(p);

    const correctAnswers = question.answers.filter(
      (answer) => answer.correct === true
    );
    correctAnswers.forEach((answer) => {
      const span = document.createElement("span");
      span.textContent = `Resposta correta: ${answer.option}`;
      questionsTrue.appendChild(span);
    });
  });
};

// Função que carrega toda as questões
const loadQuestion = () => {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  if (item.img === undefined) {
    //verificação para saber se a questão tem imagem ou não
    imgQuiz.style.display = "none";
  } else {
    imgQuiz.style.display = "block";
    imgQuiz.innerHTML = item.img;
  }

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
      `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", handleAnswer);
  });
};

resetQuiz();
btnRestart.addEventListener("click", resetQuiz);
