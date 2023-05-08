const prof = document.querySelectorAll(".prof-single");
const profTittle = document.querySelectorAll(".prof-single h1");

const hover = () => {
  for (let i = 0; i < profTittle.length; i++) {
    prof[i].addEventListener("mouseover", () => {
      profTittle[i].style.opacity = "1";
    });
  }
};

const leave = () => {
  for (let i = 0; i < profTittle.length; i++) {
    prof[i].addEventListener("mouseleave", () => {
      profTittle[i].style.opacity = "0";
    });
  }
};

hover();
leave();
