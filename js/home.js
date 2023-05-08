const helloUserTitle = document.querySelector("h1#helloName");
const addPhoto = document.querySelector(".photo-user");
const materiaItems = document.querySelectorAll(".materias-single");
const searchInput = document.querySelector("input#procurar");
const errorMensage = document.querySelector(".error");

// Funções de Utilidade
const getLocalStorageItem = (key) => {
  return localStorage.getItem(key) || "";
};

// Funções
const helloUser = () => {
  const nameUser = getLocalStorageItem("nameUser");
  helloUserTitle.innerHTML = nameUser ? `Olá, ${nameUser}` : "Olá";
};
// Verifição da foto
const verificAutoPhoto = () => {
  const userImg = getLocalStorageItem("userImg");
  if (userImg) {
    addPhoto.innerHTML = userImg;
  }
};
// Filtragem de materias
const filterQuiz = (searchQuiz) => {
  searchQuiz = searchQuiz.toLowerCase();
  let foundQuiz = false;

  materiaItems.forEach((quiz) => {
    let tittle = quiz.querySelector("h1").textContent.toLowerCase();
    let shouldDisplay = tittle.includes(searchQuiz);

    quiz.classList.toggle("hidden", !shouldDisplay);

    if (shouldDisplay) {
      foundQuiz = true;
    }

    if (tittle.indexOf(searchQuiz) !== -1) {
      quiz.style.display = "block";
    } else {
      quiz.style.display = "none";
    }
  });

  if (!foundQuiz) {
    errorMensage.style.display = "block";
  } else {
    errorMensage.style.display = "none";
  }
};

searchInput.addEventListener("input", function () {
  const searchItem = this.value;
  filterQuiz(searchItem);
});

helloUser();
verificAutoPhoto();
