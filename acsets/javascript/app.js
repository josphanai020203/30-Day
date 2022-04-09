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
// ========================7===============================
var tagContent = document.querySelector('.searchTags__content')
var tagInput= document.querySelector('.searchTags__content input')
var searchTags__btn= document.querySelector('.searchTags__btn')
var tagCloses = document.querySelectorAll('.tagClose')
var tagHtmls = [];
function remove(index){
    tagHtmls.splice(index,1);
    renderHtml()
}
function renderHtml() {
    tagContent.innerHTML = ``;
    for (let i = 0; i < tagHtmls.length; i++) {
       
       tagContent.innerHTML  += `<li data-index="${i}" class="searchTags__tagItem">${tagHtmls[i]}<i class="fa-solid fa-xmark tagClose" onclick = 'remove(${i})'></i></li> `
    }
    tagContent.appendChild(tagInput)
    tagInput.focus()
}
tagInput.onkeydown = function(e){
    if(e.keyCode == 13) {
        tagHtmls.push(tagInput.value.trim())
        tagInput.value = '';
        renderHtml()
    }
}
searchTags__btn.addEventListener('click',function(){
    tagHtmls = [];
    renderHtml();
})
// ========================================= 8 =========================================
var userName = document.querySelector('.userName')
var email = document.querySelector('.email')
var password = document.querySelector('.password')
var password2 = document.querySelector('.password2')
var form = document.querySelector('.validateForm form')
function showError(input,message){
     let parent = input.parentElement
     let small = parent.querySelector("small")
     parent.classList.remove('success')

     parent.classList.add('error')
     small.innerText = message
}
function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector("small")
    parent.classList.add('success')
    parent.classList.remove('error')
    small.innerText = '';
}
function checkEmailError(input){
    input.value = input.value.trim();
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   let isEmailError = !regexEmail.test(input.value);
   if (isEmailError) {
       showError(input,'Email Invalid')
   }

} 
function CheckPassword(input)  {
   let PasswordValue = input.value.trim()
   let ConfirmPass = password.value.trim()
   console.log(input.value)
   if (PasswordValue === ConfirmPass) {
    }
    else {
        showError(input,'Incorrect password 2')
        
    }

    if (passwordValue = "") {
        showError(input,'Password2 is required')
    }
}
function checkInput(listinput){
    let isInputEmpty = false;
    listinput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isInputEmpty = true
            showError(input,`${input.className} is required`);
        }
        else {
            showSuccess(input);
        }

    })
    return isInputEmpty;
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    let isInputEmpty =  checkInput([userName,email,password,password2]);
    checkEmailError(email);
    CheckPassword(password2);
})

// ============================================= Day 9 ======================================
var weather = document.querySelector('#weather')
var searchPlace = document.querySelector('.searchPlace')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var times = document.querySelector('.times')
var temperature = document.querySelector('.temperature span')
var moreDetail = document.querySelector('.moreDetail')
var foresight = document.querySelector('.foresight span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var contentWeather = document.querySelector('.contentWeather')
var bg9 = document.querySelector('.backgroundDay9')
console.log(weather)
async function changeWeatherUI(value){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=164b2c95f472d9b5716ce762ba90ae93`;
    let data = await fetch(apiURL).then(res=>res.json())
    if(data.cod == 200){
        contentWeather.classList.remove('hideContent')
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        foresight.innerHTML = data.visibility + ' (m)'
        wind.innerHTML = data.wind.speed + ' (m/s)'
        humidity.innerHTML = data.main.humidity + ' (%)'
        let temp = (data.main.temp - 273.15).toFixed()
        temperature.innerHTML = temp + `<sup>o</sup>C`
        moreDetail.innerHTML = data.weather[0].main 
        times.innerHTML = new Date().toLocaleDateString('vi')
        if(temp >= 25){
            weather.classList.remove('cold')
            bg9.classList.remove('cold')
            bg9.classList.add('hot')
            weather.classList.add('hot')
        }
        else {
            weather.classList.remove('hot')
            bg9.classList.remove('hot')
            bg9.classList.add('cold')
            weather.classList.add('cold')
        }
    } else {
        contentWeather.classList.add('hideContent')
    }

} 
searchPlace.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let cityS = searchPlace.value.trim()
        changeWeatherUI(cityS);
    }
})
