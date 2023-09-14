

// black 

var blackMain = document.querySelector('.blackMain')

var name1 = document.getElementById('name1');
function name2() {

    name1.style.color = 'grey';
    blackMain.style.top = '0px'
    input_style.style.width = '90%'
};

// cross 


var input_style = document.querySelector('.input-style')

var name3 = document.querySelector('#name3');
function name4() {
    name3.style.color = 'white';
    blackMain.style.top = '-100%'
    name1.style.color = 'white';
    input_style.style.width = '0%'
}


// cross side bar 
var sideBar = document.querySelector('.sideBar')

var name5 = document.querySelector('#name5');
function name6() {
    name5.style.color = 'grey';
    sideBar.style.right = '0px'
    name7.style.color = 'white';
}

// cross side bar 

var crossSideBar = document.querySelector('.crossSideBar')
var name7 = document.querySelector('#name7')

function name8() {
    name7.style.color = 'grey';
    name5.style.color = 'white';
    sideBar.style.right = '-380px'
}

//  scroll 

// var navbar = document.querySelector('.navbar-main')
// console.log(navbar);


var navbar_main = document.querySelector('.navbar-main')


window.addEventListener('scroll', function () {
    console.log('window is clicked')
    console.log(window.scrollY)
    if (window.scrollY >= 20) {
        navbar_main.style.backgroundColor = 'black'
    }
    else {
        navbar_main.style.backgroundColor = 'transparent'

    }

})



// window.addEventListener('scroll', function () {
//     console.log('window is clicked');
//     console.log(window.scrollY);
//     if (window.scrollY > 230) {
//         navbar.style.background = 'black'
//     } else {
//         navbar.style.background = 'transparent'
//     }
// })

// ********************
/* circle Start  */

var circles = document.querySelectorAll('.miniCircle')
console.log(circles);

var content = document.querySelectorAll('.content')
console.log(content, 'content');



function trigger(anyNAme, id) {
    console.log('it is working', id)
    removeActiveCircle()
    anyNAme.classList.add('active')
    console.log(id, 'id')

    var getContent = document.getElementById(id)
    console.log(getContent)
    removeContentActive()
    getContent.classList.add('contentActive')
}



function removeActiveCircle() {
    circles.forEach(function (element) {
        console.log(element, 'ele...');
        element.classList.remove('active')
    })
}

function removeContentActive() {
    content.forEach(function (element) {
        console.log(element);
        element.classList.remove('contentActive')
    })

}
/* circle End  */
// ********************


// **Client*****start*************

// Content

var contentTxt = document.querySelectorAll('.contentTxt')

console.log(contentTxt, 'sdjkodj');


// // Circle Button
var circlePeople = document.querySelectorAll('.circlePeople')


function change(ele, id) {
    circlePeopleRemove()
    ele.classList.add('circlePeopleStyle')

    var getContentTxt = document.getElementById(id)
    contentTxtRemove()
    getContentTxt.classList.add('ContentActive')
}


function circlePeopleRemove() {
    console.log('trifferd');
    circlePeople.forEach(function (e) {
        e.classList.remove('circlePeopleStyle')
    })
}

function contentTxtRemove() {
    console.log('content remove');
    contentTxt.forEach(function (e) {
        e.classList.remove('ContentActive')
    })
}

// **Client*****End************

// **************************
// **WE'RE ALMA**************
// **************************

// content

var contentMain = document.querySelectorAll('.contentMain')

// circle box button 

var buttoBoxButton = document.querySelectorAll('.buttoBoxButton')


function triggerChange(element, id) {
    removeButtonStyle()
    console.log('it is working', id)
    element.classList.add('activeButton')

    var Get_contentMain = document.getElementById(id)
    removeContentStyleChange()
    Get_contentMain.classList.add('changeStyleContent')
}



function removeButtonStyle() {
    buttoBoxButton.forEach(function (ele) {
        ele.classList.remove('activeButton')
    })
}

function removeContentStyleChange() {
    contentMain.forEach(function (ele) {
        ele.classList.remove('changeStyleContent')
    })
}



