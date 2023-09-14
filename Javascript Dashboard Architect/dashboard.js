
// var bars1 = document.querySelector('.bars1')
// var navbarMain = document.querySelector('.navbarMain')
// var barStyle = document.querySelector('.barStyle')
// var barStyle2 = document.querySelector('.barStyle2')

// var sidebarMain = document.querySelector('.sidebarMain')



// barStyle.addEventListener('click', function () {
//     console.log('ggg');
//     sidebarMain.style.left = '-190px'
//     barStyle.style.display='none'
//     barStyle2.style.display='block'
//     navbarMain.style.left='100px'
//     // navbarMain.style.transition='1s'
// })


// barStyle2.addEventListener('click', function (){
//     // console.log('ggj')
//     sidebarMain.style.left = '0px'
//     barStyle2.style.display='none'
//     barStyle.style.display='block'
//     navbarMain.style.left='283px'

//   })



var dropAll = document.querySelectorAll('.dropAll')


var listWords = document.querySelectorAll('.listWords')
listHead = document.querySelectorAll('.listHead')

var arrowIconListStyle = document.querySelectorAll('.arrowIconListStyle')

var listIconStyle = document.getElementsByTagName('i')[0]
// sidebar scroll up / down 

// head 
var listHead = document.querySelectorAll('.listHead')
console.log(listHead, 'listHead')

// console.log(getComputedStyle(iconBarsStyle));
var iconCrossStyle = document.querySelector('.iconCrossStyle')

var navbar_Left_SideBar = document.querySelector('.navbar_Left_SideBar')

var navbar_Right_SideBar = document.querySelector('.navbar_Right_SideBar')


var side_Bar_Long_Main = document.querySelector('.side_Bar_Long_Main')

var dashboard_main = document.querySelector('.dashboard_main')

var logoStyle = document.querySelector('.logoStyle')

var iconBarsStyle = document.querySelector('.iconBarsStyle')

var listTitle = document.querySelectorAll('.listTitle')

var icon_container = document.querySelector('.icon_container')

var side_Bar_Long_Main = document.querySelector('.side_Bar_Long_Main ')



let CheckMate = false

iconBarsStyle.addEventListener('click', function
    () {

    CheckMate = true

    console.log('click bars is working')
    navbar_Left_SideBar.style.width = '5%'
    navbar_Left_SideBar.style.display = 'flex'
    navbar_Left_SideBar.style.justifyContent = 'center'


    console.log(CheckMate);


    iconBarsStyle.style.display = 'none'
    iconCrossStyle.style.display = 'block'
    logoStyle.style.display = 'none'
    navbar_Right_SideBar.style.width = '95%'
    side_Bar_Long_Main.style.width = '5.5%'
    dashboard_main.style.width = '95.5%'
    // dashboard_main.style.border = '4px solid blue'

    side_Bar_Long_Main.style.cursor = 'pointer'


    var a = document.querySelectorAll('.arrowIconListStyle')
    a.forEach(function (ele) {
        ele.style.display = 'none'
    })


    var b = document.querySelectorAll('.listWords')
    b.forEach(function (ele) {
        ele.style.display = 'none'
        // l.style.display = 'none'
    })

    var c = document.querySelectorAll('.listHead')
    c.forEach(function (element) {
        element.style.display = 'flex'
        element.style.justifyContent = 'center'
    })

    var d = document.querySelectorAll('.listTitle')
    d.forEach(function (element) {
        element.style.display = 'none'
    })





})

// *******************************
// ***onmouseenter start***

function trigger(anyName, id) {

    if (CheckMate) {

        side_Bar_Long_Main.style.width = '25%'

        var mouseArrow = document.querySelectorAll('.arrowIconListStyle')
        mouseArrow.forEach(function (ele) {
            ele.style.display = 'block'
        })

        var mouseWord = document.querySelectorAll('.listWords')
        mouseWord.forEach(function (ele) {
            ele.style.display = 'block'
        })

        var mouseHead = document.querySelectorAll('.listHead')
        mouseHead.forEach(function (ele) {
            ele.style.display = 'flex'
            ele.style.justifyContent = 'space-between'
        })

        // var list = document.querySelectorAll('.list')
        // list.forEach(function (ele) {
        //     ele.style.display = 'block'
        // })
    }

}

// ***onmouseenter end***


// *******************************
// ********mouse leave***************
// *********************************
// ***onmouseleave start***

function triggerLeave(anyName2, id) {
    console.log('anyName2', 'id')
    console.log(CheckMate)

    if (CheckMate) {


        console.log('its Working');

        side_Bar_Long_Main.style.cursor = 'pointer'
        side_Bar_Long_Main.style.width = '5.5%'
        dashboard_main.style.width = '95.5%'


        var mouseArrow = document.querySelectorAll('.arrowIconListStyle')
        mouseArrow.forEach(function (ele) {
            ele.style.display = 'none'
        })


        var mouseWord = document.querySelectorAll('.listWords')
        mouseWord.forEach(function (ele) {
            ele.style.display = 'none'
        })


        var mouseHead = document.querySelectorAll('.listHead')
        mouseHead.forEach(function (ele) {
            ele.style.display = 'flex'
            ele.style.justifyContent = 'center'
        })

        var mouseWord = document.querySelectorAll('.listWords')
        mouseWord.forEach(function (ele) {
            ele.style.display = 'none'
        })

        var list = document.querySelectorAll('.list')
        list.forEach(function (ele) {
            ele.style.display = 'none'
        })

        side_Bar_Long_Main.classList.remove('usman')

    }

}


// ***onmouseleave end***
// *******************************






iconCrossStyle.addEventListener('click', function () {
    console.log('click cross is working')
    navbar_Left_SideBar.style.width = '25%'
    iconBarsStyle.style.display = 'block'
    iconCrossStyle.style.display = 'none'
    logoStyle.style.display = 'block'
    navbar_Right_SideBar.style.width = '75%'
    side_Bar_Long_Main.style.width = '25%'
    dashboard_main.style.width = '75%'
    navbar_Left_SideBar.style.justifyContent = 'space-between'
    CheckMate = false
    var a = document.querySelectorAll('.arrowIconListStyle')
    a.forEach(function (ele) {
        ele.style.display = 'block'
    })

    var b = document.querySelectorAll('.listWords')
    b.forEach(function (ele) {
        ele.style.display = 'block'


        // l.style.display = 'none'
    })


    var c = document.querySelectorAll('.listHead')
    c.forEach(function (element) {
        element.style.display = 'flex'
        element.style.justifyContent = 'space-between'

    })

    var d = document.querySelectorAll('.listTitle')
    d.forEach(function (element) {
        element.style.display = 'block'

    })




})






// search bar 


var searchContainerCross = document.querySelector('.searchContainerCross')

var searchMainBar = document.querySelector('.searchMainBar')

var searchStyle = document.querySelector('.searchStyle')

var searchIconMagnify = document.querySelector('.searchIconMagnify')

var magnifyStyle = document.querySelector('.magnifyStyle')

var SearchCrossStyle = document.querySelector('.SearchCrossStyle')



searchIconMagnify.addEventListener('click', function () {
    console.log('click is working')
    searchStyle.style.width = '238px'

    // var searchSave = searchStyle.value
    // console.log(searchSave)


    // notifyChild2.innerHTML(searchSave)



    SearchCrossStyle.style.display = 'block'
    magnifyStyle.style.transform = 'rotate(0deg)'
})

SearchCrossStyle.addEventListener('click', function () {
    console.log('click cross is working')
    searchStyle.style.width = '38px'
    SearchCrossStyle.style.display = 'none'
    magnifyStyle.style.transform = 'rotate(90deg)'

})

// dropdown1 

var dropdown1 = document.querySelector('.dropdown1')

var dropBox = document.querySelectorAll('.dropBox')
var dropBox2 = document.querySelectorAll('.dropBox2')
var dropdown2 = document.querySelector('.dropdown2')


dropBox.forEach((e) => {
    e.addEventListener('click', function () {
        console.log('click');
        // removeDropdown()


        // *********start*********

        // dropdown1.classList.remove('no')
        dropdown2.classList.remove('no2')
        dropdown3.classList.remove('no3')
        dropdownCircleContent1.classList.remove('active1')
        dropdownCircleContent2.classList.remove('active2')
        dropdownCircleContent3.classList.remove('active3')
        dropdownCircleContent4.classList.remove('active4')
        dropdownPersonContent.classList.remove('activeDrop')

        // *********end*********





        dropdown1.classList.toggle('no')
        // dropdown2.classList.remove('no2')
    })
})

// dropdown2 



dropBox2.forEach((e) => {
    e.addEventListener('click', function () {
        console.log('click');
        // removeDropdown()

        // *********start*********

        dropdown1.classList.remove('no')
        // dropdown2.classList.remove('no2')
        dropdown3.classList.remove('no3')
        dropdownCircleContent1.classList.remove('active1')
        dropdownCircleContent2.classList.remove('active2')
        dropdownCircleContent3.classList.remove('active3')
        dropdownCircleContent4.classList.remove('active4')
        dropdownPersonContent.classList.remove('activeDrop')

        // *********end*********





        dropdown2.classList.toggle('no2')
    })
})

// dropdown3 

var dropdown3 = document.querySelector('.dropdown3')

var dropBox3 = document.querySelector('.dropbox3')

// dropBox3.forEach((e) => {
dropBox3.addEventListener('click', function () {
    console.log('click');
    // removeDropdown()

    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    // dropdown3.classList.remove('no3')
    dropdownCircleContent1.classList.remove('active1')
    dropdownCircleContent2.classList.remove('active2')
    dropdownCircleContent3.classList.remove('active3')
    dropdownCircleContent4.classList.remove('active4')
    dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********



    dropdown3.classList.toggle('no3')
})
// })


// Circle Drop





var circleDrop = document.querySelector('.circleDrop')
var circleDrop2 = document.querySelector('.circleDrop2')

var circleDrop3 = document.querySelector('.circleDrop3')

var circleDrop4 = document.querySelector('.circleDrop4')



var dropdownCircleContent1 = document.querySelector('.dropdownCircleContent1')

var dropdownCircleContent2 = document.querySelector('.dropdownCircleContent2')

var dropdownCircleContent3 = document.querySelector('.dropdownCircleContent3')

var dropdownCircleContent4 = document.querySelector('.dropdownCircleContent4')


circleDrop.addEventListener('click', function () {
    console.log('click working')
    // removeDropdown()
    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    dropdown3.classList.remove('no3')
    // dropdownCircleContent1.classList.remove('active1')
    dropdownCircleContent2.classList.remove('active2')
    dropdownCircleContent3.classList.remove('active3')
    dropdownCircleContent4.classList.remove('active4')
    dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********



    dropdownCircleContent1.classList.toggle('active1')
})

circleDrop2.addEventListener('click', function () {
    console.log('click working')
    // removeDropdown()

    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    dropdown3.classList.remove('no3')
    dropdownCircleContent1.classList.remove('active1')
    // dropdownCircleContent2.classList.remove('active2')
    dropdownCircleContent3.classList.remove('active3')
    dropdownCircleContent4.classList.remove('active4')
    dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********


    dropdownCircleContent2.classList.toggle('active2')
})



circleDrop3.addEventListener('click', function () {
    console.log('click working')
    // removeDropdown()

    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    dropdown3.classList.remove('no3')
    dropdownCircleContent1.classList.remove('active1')
    dropdownCircleContent2.classList.remove('active2')

    // dropdownCircleContent3.classList.remove('active3')
    dropdownCircleContent4.classList.remove('active4')
    dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********


    dropdownCircleContent3.classList.toggle('active3')
})


circleDrop4.addEventListener('click', function () {
    console.log('click working')
    // removeDropdown()

    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    dropdown3.classList.remove('no3')
    dropdownCircleContent1.classList.remove('active1')
    dropdownCircleContent2.classList.remove('active2')
    dropdownCircleContent3.classList.remove('active3')
    // dropdownCircleContent4.classList.remove('active4')
    dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********


    dropdownCircleContent4.classList.toggle('active4')
})

// person circle drop 

var personMain = document.querySelector('.personMain')

var dropdownPersonContent = document.querySelector('.dropdownPersonContent')


personMain.addEventListener('click', function () {
    console.log('click is working')
    // removeDropdown()
    // *********start*********

    dropdown1.classList.remove('no')
    dropdown2.classList.remove('no2')
    dropdown3.classList.remove('no3')
    dropdownCircleContent1.classList.remove('active1')
    dropdownCircleContent2.classList.remove('active2')
    dropdownCircleContent3.classList.remove('active3')
    dropdownCircleContent4.classList.remove('active4')
    // dropdownPersonContent.classList.remove('activeDrop')

    // *********end*********


    dropdownPersonContent.classList.toggle('activeDrop')


})


// color change nav and sidebar

var yellowCog = document.querySelector('.yellowCog')

var colorSidbarMain = document.querySelector('.colorSidbarMain')
console.log(colorSidbarMain);

var whiteColorBack = document.querySelector('.whiteColorBack')


yellowCog.addEventListener('click', function () {
    console.log('click is working')

    colorSidbarMain.classList.toggle('removeSideBar')


})

// **************************************
// Get Computed Style JS component

// change navbar color 
// **************************************

// teacher lesson 

// Call 

// var navbarMain = document.querySelector('.navbarMain')
// console.log(navbarMain, 'nn');

// var navCircles = document.querySelectorAll('.colorCircle')
// console.log(navCircles, 'nav');




// navCircles.forEach(function (element, i) {
//     element.addEventListener('click', function () {
//         console.log('added event', this);

//         var getCircleBg = getComputedStyle(this)
//         console.log(getCircleBg.background, 'bg');
//         navbarMain.style.background = getCircleBg.background
//     })
// })

// practice 1 

// var colorCircle = document.querySelectorAll('.colorCircle')

// var navbarMain = document.querySelector('.navbarMain')


// colorCircle.forEach(function (element, index) {
//     element.addEventListener('click', function () {
//         console.log('click is working', this)

//         var getCircleColor = getComputedStyle(this)
//         console.log(getCircleColor, 'color')
//         navbarMain.style.background = getCircleColor.background
//     })
// })

// practice 2 

// var colorCircle = document.querySelectorAll('.colorCircle')
// var navbarMain = document.querySelector('.navbarMain')


// colorCircle.forEach(function (element, index) {
//     element.addEventListener('click', function () {
//         console.log('click', this)

//         var getCircleColor = getComputedStyle(this)
//         console.log(getCircleColor, this, 'color')
//         navbarMain.style.background = getCircleColor.background
//     })
// }) 

// practice 3 

var colorCircle = document.querySelectorAll('.colorCircle')
var navbarMain = document.querySelector('.navbarMain')

colorCircle.forEach(function (element, index) {
    element.addEventListener('click', function () {
        console.log('click is working', this)

        var getCircleColor = getComputedStyle(this)
        navbarMain.style.background = getCircleColor.background
    })
})

// sidebar 

// var colorCircle1 = document.querySelectorAll('.colorCircle1')

// var side_Bar_Long_Main = document.querySelector('.side_Bar_Long_Main')


// colorCircle1.forEach(function (element, index) {
//     element.addEventListener('click', function () {
//         console.log('click is working', this)

//         var getColorCircleSideBar = getComputedStyle(this)
//         side_Bar_Long_Main.style.background = getColorCircleSideBar.background
//     })
// })

// sidebar practice 2 

var colorCircle1 = document.querySelectorAll('.colorCircle1')

var side_Bar_Long_Main = document.querySelector('.side_Bar_Long_Main')


colorCircle1.forEach(function (element, index) {
    element.addEventListener('click', function () {
        console.log('click is working', this)

        var getCircleColorSideBar = getComputedStyle(this)
        side_Bar_Long_Main.style.background = getCircleColorSideBar.background
    })
})




// sibling content 
var listContent = document.querySelectorAll('.listContent')



// icon 


listHead.forEach(function (element, index) {
    element.addEventListener('click', function () {
        console.log(element, index, 'click is working')

        var icon = this.getElementsByTagName('i')[1]
        console.log(icon, 'icon')
        var sibling = this.nextElementSibling
        console.log(sibling, 'sibling')

        // /* <i class="fa-solid fa-chevron-down arrowIconListStyle"></i> 

        if (icon.className == 'fa-chevron-down') {



        } else


            if (icon.classList.contains('fa-chevron-down')) {
                console.log('if')
                removeActive()
                removeIcon()
                icon.classList.remove('fa-chevron-down')
                icon.classList.add('fa-chevron-up')
                sibling.classList.add('contentChange')
            } else {
                icon.classList.add('fa-chevron-down')
                icon.classList.remove('fa-chevron-up')
                sibling.classList.remove('contentChange')
            }
    })
})

function removeActive() {
    listHead.forEach(function (element) {
        var siblingNewName = element.nextElementSibling
        siblingNewName.classList.remove('contentChange')
    })
}


function removeIcon() {
    listHead.forEach(function (element) {
        var getIcon = element.getElementsByTagName('i')[1]
        getIcon.classList.add('fa-chevron-down')
        getIcon.classList.remove('fa-chevron-up')


    })

}

// remove Dropdown


// *********start*********

//     dropdown1.classList.remove('no')
//     dropdown2.classList.remove('no2')
//     dropdown3.classList.remove('no3')
//     dropdownCircleContent1.classList.remove('active1')
//     dropdownCircleContent2.classList.remove('active2')
//     dropdownCircleContent3.classList.remove('active3')
//     dropdownCircleContent4.classList.remove('active4')
//     dropdownPersonContent.classList.remove('activeDrop')

// *********end*********

// *************
// ********
// ***

// TEACHER PRACTICE start 


// Set Time OUT 
// Set Interval 
//  ************************************************** */ set time out set interval
//  ************ START ****************
// ***********************************

// blue box 

// **** Calling Start ****

// button 

// var blueBoxMain_CLICK_BUTTON = document.querySelector('.blueBoxMain_CLICK_BUTTON');

// // content 
// var blueParent = document.querySelector('.blueParent')

// // **** Calling End ****



// // ****ADD EVENT LISTENER FUNCTION START****

// blueBoxMain_CLICK_BUTTON.addEventListener('click', function () {

//     // ****ADD EVENT LISTENER FUNCTION START****  


//     // **** Calling NEW Calling Start content creating a DIV****

//     var notificationChild = document.createElement('div');

//     // **** NEW Calling END ****

//     // **** ADDING NEW CALL TO CONTENT WITHOUT HTML ****
//     notificationChild.classList.add('notificationChild')
//     // **** ADDING NEW CALL TO CONTENT WITHOUT HTML ****

//     // style 




//     notificationChild.style.backgroundColor = 'green'
//     notificationChild.style.color = 'white'



//     //    ADDING INNER HTML VIA JS CREATE DIV DIRECT JS
//     // can style in CSS  


//     // only elements tags e.g. p, h1, etc. style in css  

//     // back ticks cam style line by line normal ticks cannot
//     notificationChild.innerHTML = `<div class="inner">

//     </div>`


//     //    ADDING INNER HTML VIA JS CREATE DIV DIRECT JS 

//     // append child 
//     blueParent.appendChild(notificationChild)

//     // *****
//     // set interval keeps going Infinately without stopping
//     // ********

//     // conditions function, time in ms
//     // setInterval(function, time in ms)

//     // 1000ms = 1second
//     // 60000ms = 1minute
//     // 3,600,000ms = 1hour

//     // setInterval(function () {
//     //     notificationChild.remove()
//     // }, 5000)


//      // *****
//     // set timeout stops after timer 
//     // ********

//     setTimeout(function () {
//         notificationChild.remove()
//     }, 3000)


//     // ****END ADD EVENT LISTENER FUNCTION END****    
// })
// ****END ADD EVENT LISTENER FUNCTION END****

// *************END*************
// Set Time OUT 
// Set Interval 
//  ************************************************** */ set time out set interval
//  ************ END ****************
// ***********************************

// TEACHER PRACTICE end



// --------------------------------

// Osman Practice 1 Start 
// *****OSMAN Task START*************
// Osman PRACTICE Start 
// Set Time OUT 
// Set Interval 
// ******************************//

// var blueBoxMain_CLICK_BUTTON = document.querySelector('.blueBoxMain_CLICK_BUTTON')

// var blueParent1 = document.querySelector('.blueParent1')


// blueBoxMain_CLICK_BUTTON.addEventListener('click', function () {

//     var notifyChild = document.createElement('div')

//     notifyChild.classList.add('notifyChild')


//     notifyChild.innerHTML = `<div class="inner"></div>`

//     setTimeout(function () {
//         notifyChild.remove()
//     }, 5000)

//     console.log(blueParent1.childNodes);
//     if (blueParent1.childNodes.length < 7) {
//         blueParent1.appendChild(notifyChild)
//     }


// })

// *****OSMAN TASK 1 Finished*************
// Osman PRACTICE 
// Set Time OUT
// Set Interval
// ******************************


// --------------------------------

// Osman Practice 2 Start 
// *****OSMAN Task START*************
// Osman PRACTICE Start 
// Set Time OUT 
// Set Interval 
// ******************************//


// var blueBoxMain_CLICK_BUTTON = document.querySelector('.blueBoxMain_CLICK_BUTTON')

// var blueParent2 = document.querySelector('.blueParent2')


// blueBoxMain_CLICK_BUTTON.addEventListener('click', function () {
//     console.log('click')

//     var notifyChild1 = document.createElement('div')

//     notifyChild1.classList.add('notifyChild1')

//     // blueParent2.appendChild(notifyChild1)


//     setTimeout(function () {
//         notifyChild1.remove()
//     }, 3500)


//     console.log(blueParent2.childNodes)
//     if (blueParent2.childNodes.length < 7) {
//         blueParent2.appendChild(notifyChild1)
//     }
// })


// *****OSMAN TASK 2 Finished*************
// Osman PRACTICE
// Set Time OUT
// Set Interval
// ******************************

// --------------------------------

// Osman Practice 3 Start 
// *****OSMAN Task START*************
// Osman PRACTICE Start 
// Set Time OUT 
// Set Interval 
// ******************************//

var blueBoxMain_CLICK_BUTTON = document.querySelector('.blueBoxMain_CLICK_BUTTON')


var blueParent2 = document.querySelector('.blueParent2')

blueBoxMain_CLICK_BUTTON.addEventListener('click', function () {
    // console.log('click is working')

    var notifyChild2 = document.createElement('div')

    // call from js to add into css for style 
    
    notifyChild2.classList.add('notifyChild2')

    // enter text in box start

    notifyChild2.innerHTML = searchStyle.value

    searchStyle.value = ''

       // enter text in box end

    // blueParent2.appendChild(notifyChild2)

    setTimeout(function () {
        notifyChild2.remove()
    }, 3500)


    // console.log(blueParent2.childNodes)

    if (blueParent2.childNodes.length < 6) {
        blueParent2.appendChild(notifyChild2)


    }




})




// *****OSMAN TASK 3 Finished*************
// Osman PRACTICE
// Set Time OUT
// Set Interval
// ******************************
