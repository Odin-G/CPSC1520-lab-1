const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const emailModal = document.querySelector("#email-modal");

openModal.addEventListener("click", onClickOpenModal)
closeModal.addEventListener("click", onClickCloseModal)
emailModal.addEventListener("click", onClickOutsideDialog);

function onClickOpenModal(e) {
    emailModal.showModal();
}

function onClickCloseModal(e) {
    emailModal.close();
}

function onClickOutsideDialog(e) {
    const dialogDimensions = emailModal.getBoundingClientRect();
    if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom) {
        e.currentTarget.close();
    }
}