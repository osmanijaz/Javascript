let show = document.querySelector('#show-monkey')
let body = document.querySelector('#container')


function x () {
    body.style.height = '400px'
    show.style.top = '0px'
}

// ------------------

let images = [ 'images/x.png','images/x.png','images/x.png','images/x.png','images/x.png','images/x.png','images/x.png','images/p.png' ]
// -------------

let tile = document.querySelectorAll('.tile')

tile.forEach(function (y) {
    y.addEventListener( 'click',function () {
        y.classList.add('active')
        console.log(y)

        let selector = Math.floor(Math.random() * images.length)

        let select = images[selector]
        console.log(selector)

        y.style.background = `url(${select})`
        y.style.backgroundPosition = 'center'
        y.style.backgroundSize = 'cover'
        y.style.backgroundColor = 'black'


        if(selector==7){
            alert('found')
            setTimeout(function(){
                location.reload()
            },1000)
        }

    } )
})

// ---------------


