
var btn1 = document.querySelector('.btn1')


var contentParent = document.querySelector('.contentParent')

var inputText1 = document.querySelector('.inputText1')

var alert = document.querySelector('.alert')

var input2 = document.querySelector('.input2')

var two = document.querySelector('.two')

var buttonClick = document.querySelector('.buttonClick')

var popUp_Parent = document.querySelector('.popUp_Parent')
var cross = document.querySelector('.cross')

var boxStyleCSS = document.querySelector('.boxStyleCSS')





// ******************************************************
// move div pop up notifications to different locations
// start practice 1 ************************
// ****************************************


// var one = document.querySelectorAll('.one')

// var contentParent = document.querySelector('.contentParent')

// one.forEach(function (element, index) {
//     element.addEventListener('input', function () {


//         var text = this.alt

//         console.log(text, 'input working')

//         contentParent.className = `contentParent ${text}`



//     })
// })

// *******************************************************
// move div pop up notifications to different locations
// end practice 1***************************  


// ******************************************************
// move div pop up notifications to different locations
// start practice 2 ************************
// ******************************************************

// var one = document.querySelectorAll('.one')
// var contentParent = document.querySelector('.contentParent')

// one.forEach(function (element) {
//     element.addEventListener('input', function () {
//         console.log(this, 'input')

//         var text = this.alt
//         console.log(text, 'text is working')

//         contentParent.className = `contentParent ${text}`

// contentParent.className= 'contentParent' + `${text}`

// notes start ----
// top right second time bottom right will add both classes if you use Class List only need one class so use className it can remove replce previous class 
// contentParent.classList(`contentParent ${text}`)
// contentParent.classList('contentParent' + `${text}`)

// notes end ----

//     })
// })

// *******************************************************
// move div pop up notifications to different locations
// end practice 2***************************  
// 

// **************************************************
// move div pop up notifications to different locations
// start practice 3 ************************
// ****************************************

// var one = document.querySelectorAll('.one')
// var contentParent = document.querySelector('.contentParent')

// one.forEach(function(element){
// element.addEventListener('input', function(){
// // console.log(this, 'input is working')

// var text = this.alt
// console.log(text)

// contentParent.className=`contentParent ${text}`

// })    

// })

// *******************************************************
// move div pop up notifications to different locations
// end practice 3***************************  


// **************************************************
// move div pop up notifications to different locations
// start practice 4 ************************
// ****************************************

var one = document.querySelectorAll('.one')
var contentParent = document.querySelector('.contentParent')


// one.forEach(function (element) {
//     element.addEventListener('input', function () {
//         var text = this.alt
//         contentParent.className = `contentParent ${text}`
//     })
// })


// *******************************************************
// move div pop up notifications to different locations
// end practice 4***************************  



btn1.addEventListener('click', function () {
    console.log('click');


    // console.log(inputText1.value);


    // empty 
    // inputText1.value = ''

    // must not be empty 
    //    ! = ''
    // must not be empty run the code 
    // if empty then else attention warning 



    if (inputText1.value != '' && input2.value != '') {

        var notifyChild = document.createElement('div')
        notifyChild.classList.add('notifyChild')


        // option 1 --------------------

        // notifyChild.innerHTML = inputText1.value
        //   inputText1.value = ' '

        // notifyChild.innerHTML = input2.value
        //   input2.value = ' '

        // inputText1.value = ' '
        // input2.value = ' '

        // option 2 ----------------------

        // notifyChild.innerHTML = `${inputText1.value}<br>${input2.value}`

        // inputText1.value = ' '
        // input2.value = ' '

        // option 3 -----------------------


        if (two.checked == true) {

            notifyChild.innerHTML =

                `<p class="xyz">${inputText1.value}<p>
            <p class="abc">${input2.value}</p> 
            <i onClick="crossRemove(this)" class="fa-solid fa-xmark crossIcon"></i>
            `



        }
        else {
            notifyChild.innerHTML =
                `<p class="xyz">${inputText1.value}<p>
            <p class="abc">${input2.value}</p>
            `
        }


        inputText1.value = ''
        input2.value = ''




        // logic 

        // click button  btn
        // var btn1 = document.querySelector('.btn1')


        // dont show pink box notifyChild unless content in box 
        // var notifyChild = document.createElement('div')



        // cross 



        setTimeout(function () {
            // notifyChild.classList.remove('notifyChild')
            notifyChild.remove()
        }, 9000)


        // console.log(contentParent.childNodes)
        console.log(contentParent.childNodes, 'content');
        if (contentParent.childNodes.length < 9) {

            contentParent.appendChild(notifyChild)


        }



        // ---alert remove else------------------


    } else {

        alert.classList.add('active')


        setTimeout(function () {
            alert.classList.remove('active')

        }, 3000)

    }
})



function crossRemove(e) {
    e.parentElement.remove()
}

// console.log(buttonClick, 'hh');
buttonClick.addEventListener('click', function () {
    console.log('click is working')
    popUp_Parent.classList.add('activePopUp')

    boxStyleCSS.classList.add('activebox')







    cross.addEventListener('click', function () {



        popUp_Parent.classList.remove('activePopUp')
        boxStyleCSS.classList.remove('activebox')
        // this.remove()

    })



})