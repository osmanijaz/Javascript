

var barsIcon = document.querySelector('.barsIcon')
// console.log(barsIcon)

var dashboardMain = document.querySelector('.dashboardMain')

var navBar = document.querySelector('.navBar')

var sideBarMain = document.querySelector('.sideBarMain')




barsIcon.addEventListener('click', function () {
    console.log('Click is Working')

    // sideBarMain.style.marginLeft = '-100%'
    // dashboardMain.style.width = '100%'

    sideBarMain.classList.toggle('barActive')
    dashboardMain.classList.toggle('dashboardActive')

})



// *******************

// var box = document.querySelectorAll('.box')
// box.forEach(function (ele) {
//     ele.addEventListener('click', function () {
//         console.log('It is working..')
//     })
// })


var box = document.querySelector('.box')

var box2 = document.querySelector('.box2')

var box3 = document.querySelector('.box3')

var dropdown_design = document.querySelector('.dropdown-design')

var dropdown_design2 = document.querySelector('.dropdown-design2')

var dropdown_design3 = document.querySelector('.dropdown-design3')

var crossButtonMain = document.querySelector('.crossButtonMain')

var crossButtonMain2 = document.querySelector('.crossButtonMain2')


var crossButtonMain3 = document.querySelector('.crossButtonMain3')













box.addEventListener('click', function () {
    console.log('It is working..')
    dropdown_design.style.visibility = 'visible'
})


crossButtonMain.addEventListener('click', function () {
    console.log('hello i am cross');
    console.log(box, 'box');
    dropdown_design.style.visibility = 'hidden'

})





box2.addEventListener('click', function () {
    console.log('It is working..')
    dropdown_design2.style.visibility = 'visible'
})


crossButtonMain2.addEventListener('click', function () {
    console.log('hello i am cross');
    console.log(box, 'box');
    dropdown_design2.style.visibility = 'hidden'

})




box3.addEventListener('click', function () {
    console.log('It is working..')
    dropdown_design3.style.visibility = 'visible'
})


crossButtonMain3.addEventListener('click', function () {
    console.log('hello i am cross');
    console.log(box, 'box');
    dropdown_design3.style.visibility = 'hidden'

})


var dropboxMan = document.querySelector('.dropboxMan')


var man = document.querySelector('.man')

man.addEventListener('click', function () {
    console.log('It is working..')
    dropboxMan.classList.toggle('dropActive')
})



var bell = document.querySelector('.bell')

var dropBell = document.querySelector('.dropBell')

bell.addEventListener('click', function () {
    console.log('it is working')
    dropBell.classList.toggle('dropActive')
})



// *********************

// var sideBarLI = document.querySelectorAll('.sideBarLI')

// sideBarLI.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log(this, 'element')
//         this.classList.toggle('activeChange')


//     })


// })

// var sideBarLI = document.querySelectorAll('.sideBarLI')

// sideBarLI.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log(this, element, 'it is working')
//         element.classList.toggle('activeChange')
//     })
// })


var sideBarLI = document.querySelectorAll('.sideBarLI')
var whitedrop = document.querySelectorAll('.whitedrop')




sideBarLI.forEach(function (element, id) {
    element.addEventListener('click', function () {
        console.log(this, element, id, 'it is working')
        element.classList.toggle('activeChange')

    })
})




// ----------dropdown up down--------------

var nameV = document.querySelectorAll('.nameV')
var whitedrop = document.querySelectorAll('.whitedrop')


nameV.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element, 'element')

        var icon = this.getElementsByTagName('i')[0]
        console.log(icon, 'icon')
        var sibling = this.nextElementSibling
        console.log(sibling, 'sibling')


        if (icon.classList.contains('fa-chevron-down')) {
            console.log('If')
            removeActive()
            removeIcon()
            icon.classList.remove('fa-chevron-down')
            icon.classList.add('fa-chevron-up')
            sibling.classList.add('active123')
        } else {
            icon.classList.add('fa-chevron-down')
            icon.classList.remove('fa-chevron-up')
            sibling.classList.remove('active123')
        }
    })
})


function removeActive() {
    nameV.forEach(function (element) {

        var siblingNewName = element.nextElementSibling
        siblingNewName.classList.remove('active123')
    })
}


function removeIcon() {
    nameV.forEach(function (element) {
        var getIcon = element.getElementsByTagName('i')[0]
        getIcon.classList.add('fa-chevron-down')
        getIcon.classList.remove('fa-chevron-up')

    })
}




// ----------dropdown up down--------------


// ******************************************
// Hassan Playing with transition via JS start 
// *********************************************
// ----------dropdown up down--------------

// var nameV = document.querySelectorAll('.nameV')
// var whitedrop = document.querySelectorAll('.whitedrop')


// nameV.forEach(function (element) {
//     element.addEventListener('click', function () {
//         var nextChild = this.nextElementSibling.childNodes[1].getBoundingClientRect()
//         console.log(nextChild, 'ee');
//     })
//     // removeActive()
//     // var inHeight = this.nextElementSibling.getBoundingClientRect().height + 300
//     // this.nextElementSibling.style.height = `${inHeight}px`
//     // this.nextElementSibling.classList.add('active123')
//     // console.log(this.nextElementSibling.getBoundingClientRect().height, 'element');
//     // console.log(this.nextElementSibling.getBoundingClientRect().height, 'element');
// })
// //     whitedrop.forEach(function (ele) {
// //         ele.addEventListener('click',function(){
// //             this.classList.add('active123')
// //         })
// //     console.log(whitedrop, 'whitedrop');
// //     console.log(element, 'element')
// // whitedrop.classList.add(active123)
// // var icon = this.getElementsByTagName('i')[0]
// // console.log(icon, 'icon')
// // var sibling = this.nextElementSibling
// // console.log(sibling, 'sibling')


// // if (icon.classList.contains('fa-chevron-down')) {
// //     console.log('If')
// //     removeActive()
// //     removeIcon()

// //     icon.classList.remove('fa-chevron-down')
// //     icon.classList.add('fa-chevron-up')
// //     sibling.classList.add('active123')
// // } else {
// //     icon.classList.add('fa-chevron-down')
// //     icon.classList.remove('fa-chevron-up')
// //     sibling.classList.remove('active123')
// // }
// // })
// // })


// function removeActive() {
//     nameV.forEach(function (element) {
//         var siblingNewName = element.nextElementSibling
//         siblingNewName.classList.remove('active123')
//     })
// }


// function removeIcon() {
//     nameV.forEach(function (element) {

//         var getIcon = element.getElementsByTagName('i')[0]
//         getIcon.classList.add('fa-chevron-down')
//         getIcon.classList.remove('fa-chevron-up')


//     })
// }



// *********************************************
// ----------dropdown up down--------------
// *********************************************

// Hassan Playing with transition via JS start 









