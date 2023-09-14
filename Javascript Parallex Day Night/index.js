let moon = document.getElementById('moon')
let stars = document.getElementById('stars')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')


window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px'
    mountains_front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})




let sun = document.getElementById('sun')
let sky = document.getElementById('cloud')
let mountains_behind2 = document.getElementById('mountains_behind2')
let mountains_front2 = document.getElementById('mountains_front2')
let text2 = document.getElementById('text2')
let btn2 = document.getElementById('btn2')


window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    sky.style.left = value * 0.25 + 'px'
    sun.style.top = value * 1.05 + 'px'
    mountains_behind2.style.top = value * 0.5 + 'px'
    mountains_front2.style.top = value * 0 + 'px'
    text2.style.marginRight = value * 4 + 'px'
    text2.style.marginTop = value * 1.5 + 'px'
    btn2.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})


let section2 = document.querySelector('.section2')
let section1 = document.querySelector('.section1')
let section_main = document.getElementsByClassName('section_main')
let sec_main = document.querySelectorAll('.sec_main')
let toggleBtn = document.getElementById('switch')
let logo = document.querySelector('.logo')
let slider = document.querySelector('.slider')
let input = document.querySelector('.input')
let audio1 = document.querySelectorAll('.audio1')

// let audio= [
//     new Audio('night.mp3'),
//     new Audio('morning.mp3')
// ]

slider.addEventListener('click', function(){
    for(var i=0; i<2; i++){
        console.log(section_main[i]);
        section_main[i].classList.toggle("mode1")
                // new Audio('morning.mp3').play()
            }
            
            for(var i = 0; i<2; i++){
                sec_main[i].classList.toggle("mode1")
            }
            
            if(section_main[1] ){
                //  new Audio('night.mp3').play()
            }
            else if(section_main[0]){
        new Audio('morning.mp3').play()

    }



})


// if(section1.className == 'section1 section_main mode1'){
//     // new Audio('night.mp3').play()
// }
// else{
    
// }