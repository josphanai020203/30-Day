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
var galleryImages = document.querySelectorAll('.imageItem img');
var galleryClose = document.querySelector('.close')
var galleryPrev = document.querySelector('.btnleft')
var galleryNext = document.querySelector('.btnright')
var galleryContent = document.querySelector('.gallerryShow-content img')
var galleryModal = document.querySelector('.gallerryShow')
var currentIndex = 0
function showGallery(){
    if(currentIndex == 0){
        galleryPrev.style.display = 'none';
    }
    else if (currentIndex == 7){
        galleryNext.style.display = 'none';

    }
    else {
        galleryPrev.style.display = 'block';
        galleryNext.style.display = 'block';


    }
    galleryContent.src = galleryImages[currentIndex].src;
    galleryModal.classList.add('showGallery');
}
    galleryImages.forEach(function(item,index){
        item.addEventListener('click', function(){

            currentIndex = index;
            
            showGallery();
        })

    })
galleryPrev.addEventListener('click',function(){
    currentIndex = currentIndex -1;
    showGallery();
    
})
galleryNext.addEventListener('click',function(){
    currentIndex = currentIndex + 1;
    showGallery();
    
})
galleryClose.addEventListener('click',function(){
    galleryModal.classList.remove('showGallery');

})
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
    galleryModal.classList.remove('showGallery');

    }
    alertBackground.classList.add('hideAlert')
    detectPressKey.style.display = 'block'

    cricleBox.innerHTML = `${e.keyCode}`
    contentKey__codeContent.innerHTML = `${e.code}`
    contentKey__keycontent.innerHTML = `${e.key}`
    contentKey__whichContent.innerHTML = `${e.which}`
    contentKey__locationContent.innerHTML = `${e.location}`
})
// ======================================= ===================================
var searchBtn = document.querySelector('.searchBtn')
var searchBox = document.querySelector('.searchBox')
searchBtn.addEventListener('click',function(){
    searchBox.classList.toggle('openSearchBox')
})
// ===========================================================
var cricleBox = document.querySelector('.cricleBox')
var contentKey__keycontent = document.querySelector('.contentKey__keycontent')
var contentKey__whichContent = document.querySelector('.contentKey__whichContent')
var contentKey__codeContent = document.querySelector('.contentKey__codeContent')
var contentKey__locationContent = document.querySelector('.contentKey__locationContent')
var detectPressKey = document.querySelector('.detectPressKey')
var alertBackground = document.querySelector('.alertBackground')