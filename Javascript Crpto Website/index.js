
// COLOR SWICTHER

let gearIcon = document.querySelector('.sideBarIcon4')
let differentColors = document.querySelector('.differentColors')


gearIcon.addEventListener('click', function(){

    gearIcon.classList.toggle('active1')
    differentColors.classList.toggle('active2')
})


let colorSwitch = document.querySelectorAll('.colorSwitch')
let button = document.querySelectorAll('.btnAll')

let colorArr = ['linear-gradient(to right,#ffcc67 0%, #ff67cb 99%)',
                'linear-gradient(to right, #43B1FB 0%,#40f8a6 99%)',
               'linear-gradient(to right,#eea849 0%, #f46b45 99%)', 
               'linear-gradient(to right,#56d6a7 0%, #de934b  99%)',]

console.log(colorSwitch);
console.log(button);


colorSwitch.forEach(function(c, i){

    c.addEventListener('click', function(){

        let color = getComputedStyle(this).getPropertyValue('background')


        button.forEach(function(b){

            b.style.background = color
            
            console.log(color);
            b.addEventListener('mouseover', function(){

                if(b.style.background == color){
                    b.style.background = color
                }
                else{
                    b.style.background = colorArr[i]
                }
                
                b.addEventListener('mouseleave', function(){
                    b.style.background = color

                })
            })
            
        })

    })
})



// NAVBAR


let navBar = document.getElementById('navBar')


window.addEventListener('scroll', function(){

    if(scrollY > 50){
        navBar.style.background= '#1F1471'
    }
    else{
        navBar.style.backgroundColor= 'transparent'
    }
    // console.log('hello');
})

console.log(navBar);


let leftArrow = document.querySelector('.leftArrow')
let rightArrow = document.querySelector('.rightArrow')

let slidesRoadMap = document.querySelector('.slidesRoadMap')


rightArrow.addEventListener('click', function(){

    slidesRoadMap.style.marginLeft = '-16.66%'
    leftArrow.classList.add('arrowHover')
    rightArrow.classList.remove('arrowHover')
})

leftArrow.addEventListener('click', function(){

    slidesRoadMap.style.marginLeft = '0'
    leftArrow.classList.remove('arrowHover')
    rightArrow.classList.add('arrowHover')
})



// SELECT SLIDER 


let select = document.querySelectorAll('.select')

let selectItems = document.querySelectorAll('.selectItems')


select.forEach(function(s, index){
   
    s.addEventListener('click', function(){

        select.forEach(function(a){
           a.classList.remove('selectActive')
        })
        this.classList.add('selectActive')


        selectItems.forEach(function(sel){
            sel.classList.remove('showSelect')
        })
        selectItems[index].classList.add('showSelect')
    })
})




//  DROP DOWN


let textMain = document.querySelectorAll('.textMainQuestion')

let arrowDrop = document.querySelectorAll('.arrowDrop')


arrowDrop.forEach(function(i){
    console.log(i);
    
    i.addEventListener('click', function(e){
        
        let textParent = e.target.parentElement.parentElement
        console.log(textParent);
        
        if (textParent.className == 'mainQuestions') {
            removeActive()
            textParent.classList.add('showMenu')
        }
            
        else{
            textParent.classList.remove('showMenu')
        }
        
    })
})

function removeActive(){

    arrowDrop.forEach(function(a) {
        
        let textParent = a.parentElement.parentElement

        textParent.classList.remove('showMenu')

        // console.log(textParent.classList.remove('showMenu'));
    });
    
}
















