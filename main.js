// Modal About me

const btnAboutMe = document.querySelector(".btn__aboutMe");
const modalAboutMe = document.querySelector(".modal__aboutMe");
const btnModalCloseAbout = document.querySelector(".modal__close__aboutme");

btnAboutMe.addEventListener("click", function (e) {
  e.preventDefault();
  modalAboutMe.classList.add("modal--show");
});

btnModalCloseAbout.addEventListener("click", function (e) {
  e.preventDefault();
  modalAboutMe.classList.remove("modal--show");
});

// Modal Adoptions

const btnAdoptions = document.querySelector(".btn__adoptions");
const modalAdoptions = document.querySelector(".modal__adoptions");
const btnCloseAdoptions = document.querySelector(".modal__close__adoptions");
const closeAdoptions = document.querySelector(".modal__x");

btnAdoptions.addEventListener("click", function (e) {
  e.preventDefault();
  modalAdoptions.classList.add("modal--show");
});

btnCloseAdoptions.addEventListener("click", function (e) {
  e.preventDefault();
  modalAdoptions.classList.remove("modal--show");
  resetModalContent();
});

closeAdoptions.addEventListener("click", function (e) {
  e.preventDefault();
  modalAdoptions.classList.remove("modal--show");
  resetModalContent();
});

// Reseteando el formulario
const btnCloseModal = document.querySelector(".modal__close__global");
const btnSend = document.querySelector(".modal__close__adoptions");

function resetModalContent() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
