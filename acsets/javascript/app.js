var openModal = document.querySelector(".openModalBtn button");
var modal = document.querySelector(".modal");
var closeIcon = document.querySelector(".modal__header i");
var CloseBtn = document.querySelector(".modal__footer button");

function Toggle(e){
    modal.classList.toggle("modalHide");
}
openModal.addEventListener('click',Toggle);
modal.addEventListener('click',function (e){
    if(e.target == e.currentTarget){
        console.log(e.currentTarget)
        Toggle();
    }
});
closeIcon.addEventListener('click',Toggle);
CloseBtn.addEventListener('click',Toggle);

// =====================================================================================================================================
