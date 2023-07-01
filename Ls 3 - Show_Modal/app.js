const btnOpen = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const iconClose = document.querySelector(".modal__header i");
const btnClose = document.querySelector(".modal__footer button");

btnOpen.addEventListener("click", () =>{
    modal.classList.toggle('hide');
})

iconClose.addEventListener("click", () =>{
    modal.classList.toggle('hide');
})

btnClose.addEventListener("click", () =>{
    modal.classList.toggle('hide');
})