
// // **********************************

// // practice 1


// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')


// questBar.forEach(function (element, id) {
//     element.addEventListener('click', function () {
//         console.log(this, element, 'element', id)
//         removeActive()


//         // ---click only start---

//         // element.nextElementSibling.classList.toggle('active')

//         // this.nextElementSibling.classList.add('active')
//         // console.log();

//         // ---click only end---




//         // ---call save new out of the blue next sibling start---




//         var sibling = element.nextElementSibling
//         // local only use for dropdown
//         // can also write this
//         // var sibling = this.nextElementSibling
//         //next Element Sibling is the dropdown content
//         // it is connected linked to 'active' 


//         // ---call save new out of the blue next sibling end---



//         // ---call save new out of the blue icon start---

//         var icon = this.getElementsByTagName('i')[0]

//         // var icon = document.querySelectorAll('i')
//         // querySelectorAll creates NodeList then use forEach


//         console.log(icon, 'icon is working')

//         // ---call save new out of the blue icon end---

//         // if else start


//         // write option 1
//         // if (icon.className == 'fa fa-chevron-down') {
//         //     console.log('IF is definately 1000% working')

//         // }

//         // write option 2 
//         // no gap and no extra class fa fa-chevron-down

//         if (icon.classList.contains('fa-chevron-down')) {
//             console.log('IF is 100% working')

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         }
//         else {
//             icon.classList.remove('fa-chevron-up')
//             icon.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }
//     })
// })

// // if else end


// // global remove active 

// function removeActive() {
//     questBar.forEach(function (ele) {
//         var siblingNewName = ele.nextElementSibling
//         siblingNewName.classList.remove('active')

//     })
// }

// **********************************

// practice 2

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')


// questBar.forEach(function (element, id) {
//     element.addEventListener('click', function () {
//         console.log(this, element, 'element', id)
//         removeActive()  // global remove active

//         // ---call save new out of the blue next sibling start---

//         var sibling = element.nextElementSibling

//         // ---call save new out of the blue icon start---

//         var icon = this.getElementsByTagName('i')[0]
//         console.log(icon, 'icon is working')



//         // write option 2
//         // no gap and no extra class fa fa-chevron-down

//         // if else start
//         if (icon.classList.contains('fa-chevron-down')) {
//             console.log('IF is 100% working')

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         }
//         else {
//             icon.classList.remove('fa-chevron-up')
//             icon.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }
//     })
// })

// // if else end

// // global remove active

// function removeActive() {
//     questBar.forEach(function (ele) {
//         var siblingNewName = ele.nextElementSibling
//         siblingNewName.classList.remove('active')

//     })
// } 

// **********************************

// practice 3

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log('click is working')
//         // get call save next sibling 

//         var sibling = element.nextElementSibling

//         // get call save icon  

//         var iconLocal1 = this.getElementsByTagName('i')[0]
//         console.log('icon is working')


//         // if else 

//         // options 
//         // if (icon.className == 'fa fa-chevron-down') 
//         // if (icon.classList.contains('fa-chevron-down'))


//         if (iconLocal1.className == 'fa fa-chevron-down') {
//             console.log('IF is 100% working')
//             removeActive()

//             iconLocal1.classList.remove('fa-chevron-down')
//             // classList deals with one class only remove second class 
//             // fa fa-chevron-down to fa-chevron-down
//             iconLocal1.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         }
//         else {
//             iconLocal1.classList.remove('fa-chevron-up')
//             iconLocal1.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }

//     })
// })


// // Global Remove Active

// function removeActive() {
//     questBar.forEach(function (ele) {
//         var siblingNewName = ele.nextElementSibling
//         siblingNewName.classList.remove('active')


//     })

//     // local to global 

//     questBar.forEach(function (ele) {
//         var iconLocal2 = ele.getElementsByTagName('i')[0]
//         iconLocal2.classList.remove('fa-chevron-up')
//         iconLocal2.classList.add('fa-chevron-down')

//     })

// }

// **********************************

// practice 4

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element, id, array) {
//     // console.log(element, id, array)

//     element.addEventListener('click', function () {
//         console.log('it is clicking')
//         removeActive()
//         removeIcon()
//         // sibling = content = active 
//         var sibling = this.nextElementSibling
//         // console.log('sibling')
//         var icon = this.getElementsByTagName('i')[0]
//         // console.log('icon')


//         if (icon.className == 'fa fa-chevron-down') {
//             console.log('IF is working')
//             removeActive()
//             removeIcon()
//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         } else {
//             icon.classList.remove('fa-chevron-up')
//             icon.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }
//     })
// })


// function removeActive() {
//     questBar.forEach(function (ele) {

//         //  we need next sibling element 
//         var siblingNewName = ele.nextElementSibling
//         siblingNewName.classList.remove('active')
//     })
// }

// function removeIcon() {
//     questBar.forEach(function (ele) {

//         var getIcon = ele.getElementsByTagName('i')[0]
//         getIcon.classList.remove('fa-chevron-up')
//         getIcon.classList.add('fa-chevron-down')

//     })
// }


// **********************************

// practice 5

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element, id, array) {
//     // console.log(element, id, array)
//     element.addEventListener('click', function () {
//         console.log('click is working')

//         //  sibling = content = active 
//         var sibling = this.nextElementSibling
//         console.log(sibling, 'sibling')

//         var icon = this.getElementsByTagName('i')[0]
//         console.log(icon, 'icon')

//         // < i class="fa fa-chevron-down"></i >


//         if (icon.classList.contains('fa-chevron-down')) {
//             console.log('IF is working')
//             removeActive()
//             removeIcon()

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         } else {

//             icon.classList.remove('fa-chevron-up')
//             icon.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }
//     })
// })

// function removeActive() {
//     questBar.forEach(function (element) {

//         var siblingNewName = element.nextElementSibling
//         siblingNewName.classList.remove('active')
//     })
// }

// function removeIcon() {
//     questBar.forEach(function (element) {

//         var getIcon = element.getElementsByTagName('i')[0]
//         getIcon.classList.add('fa-chevron-down')
//         getIcon.classList.remove('active')

//     })


// }

// **********************************

// practice 6

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log('click is working')


//         //  sibling = content = active    
//         var sibling = this.nextElementSibling

//         var icon = this.getElementsByTagName('i')[0]

//         // <i class="fa fa-chevron-down"></i>

//         if (icon.className == 'fa fa-chevron-down') {
//             removeActive()
//             removeIcon()

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         } else {
//             icon.classList.remove('fa-chevron-up')
//             icon.classList.add('fa-chevron-down')
//             sibling.classList.remove('active')
//         }
//     })
// })

// // global removeActive 

// function removeActive() {
//     questBar.forEach(function (element) {

//         var siblingNewName = element.nextElementSibling
//         siblingNewName.classList.remove('active')
//     })
// }


// // global removeIcon

// function removeIcon() {
//     questBar.forEach(function (element) {

//         var getIcon = element.getElementsByTagName('i')[0]
//         getIcon.classList.add('fa-chevron-down')
//         getIcon.classList.remove('active')

//     })


// }


// **********************************

// practice 7

// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log('click is working')

//         var sibling = this.nextElementSibling
//         var icon = this.getElementsByTagName('i')[0]

//         /* <i class="fa fa-chevron-down"></i> */

//         if (icon.classList.contains('fa-chevron-down')) {
//             console.log('IF is working')
//             removeActive()
//             removeIcon()

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         } else {
//             icon.classList.add('fa-chevron-down')
//             icon.classList.remove('fa-chevron-up')
//             sibling.classList.remove('active')
//         }
//     })
// })

// function removeActive(){
// questBar.forEach(function(element){

//     var siblingNewName = element.nextElementSibling
//     siblingNewName.classList.remove('active')
//     })
//     }

// function removeIcon(){
// questBar.forEach(function(element){

//     var getIcon = element.getElementsByTagName('i')[0]
//     getIcon.classList.add('fa-chevron-down')
//     getIcon.classList.remove('fa-chevron-up')
// })
// }

// **********************************

// practice 8


// var questBar = document.querySelectorAll('.questBar')
// var content = document.querySelectorAll('.content')

// questBar.forEach(function (element) {
//     element.addEventListener('click', function () {
//         console.log('click is working')

//         var sibling = this.nextElementSibling
//         var icon = this.getElementsByTagName('i')[0]

//         /* <i class="fa fa-chevron-down"></i> */

//         if (icon.classList.contains('fa-chevron-down')) {
//             console.log('IF is working')
//             removeActive()
//             removeIcon()

//             icon.classList.remove('fa-chevron-down')
//             icon.classList.add('fa-chevron-up')
//             sibling.classList.add('active')
//         } else {
//             icon.classList.add('fa-chevron-down')
//             icon.classList.remove('fa-chevron-up')
//             sibling.classList.remove('active')
//         }
//     })
// })

// function removeActive(){
// questBar.forEach(function(element){

//     var siblingNewName = element.nextElementSibling
//     siblingNewName.classList.remove('active')
//     })
//     }

// function removeIcon(){
// questBar.forEach(function(element){

//     var getIcon = element.getElementsByTagName('i')[0]
//     getIcon.classList.add('fa-chevron-down')
//     getIcon.classList.remove('fa-chevron-up')
// })
// }



// **********************************

// practice 9
var questBar = document.querySelectorAll('.questBar')
var content = document.querySelectorAll('.content')


questBar.forEach(function (element) {
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
            sibling.classList.add('active')
        } else {
            icon.classList.add('fa-chevron-down')
            icon.classList.remove('fa-chevron-up')
            sibling.classList.remove('active')
        }
    })
})


function removeActive() {
    questBar.forEach(function (element) {

        var siblingNewName = element.nextElementSibling
        siblingNewName.classList.remove('active')
    })
}


function removeIcon() {
    questBar.forEach(function (element) {

        var getIcon = element.getElementsByTagName('i')[0]
        getIcon.classList.add('fa-chevron-down')
        getIcon.classList.remove('fa-chevron-up')


    })


}







