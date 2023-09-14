
// slide menu--------------------------------------------------

let sideMenu = document.getElementById('sideMenu')

function menuOpen() {
    sideMenu.style.right='0'
}

function menuClose() {
    sideMenu.style.right='-35vw'
}

let topMenu = document.getElementById('topMenu')

function menuOpenTop() {
    topMenu.style.top='0'
}

function menuCloseTop() {
    topMenu.style.top='-100vw'
}



// first slider--------------------------------------------

let smallcircle = document.querySelectorAll('.smallCircles')
let innerCircle = document.querySelectorAll('.text-sec6')



smallcircle.forEach(function(element, index) {

    element.addEventListener('mouseenter', function(){
    
    smallcircle.forEach(function(a) {
        a.classList.remove('active1')
    });

    this.classList.add('active1')

    innerCircle.forEach(function(a){
        a.classList.remove('activeBig')
    })

    innerCircle[index].classList.add('activeBig')
})
});


// second slider------------------------------------------------


let sliderImg = document.querySelectorAll('.img')
let sliderText = document.querySelectorAll('.sliderText')


sliderImg.forEach(function (element2, index) {
    
    element2.addEventListener('mouseenter', function() {

        sliderImg.forEach(function(i) {
            
            i.classList.remove('activeImg')
        });
        
        this.classList.add('activeImg')

        sliderText.forEach(function(b) {
            b.classList.remove('activeText')
        });

        sliderText[index].classList.add('activeText')
    })

});



// slider 3


let cardBoxSec8 = document.querySelectorAll('.cardboxSec8')
let textSlidesSec8 = document.querySelectorAll('.textSlidesSec8')


cardBoxSec8.forEach(function(element3, index){
    
     element3.addEventListener('click', function(){

        cardBoxSec8.forEach(function(c) {
            c.classList.remove('activeCards')
        });
        this.classList.add('activeCards')

        textSlidesSec8.forEach(function(index) {
            index.classList.remove('activeTextSlides')
        });

        textSlidesSec8[index].classList.add('activeTextSlides')
     })

});

let navBar = document.querySelector('.navBar')


window.addEventListener('scroll',function(){
    console.log(scrollY);
    if (scrollY > 50) {
        navBar.style.backgroundColor='#141414'
    }
    else{
        navBar.style.backgroundColor= 'transparent'
    }
})