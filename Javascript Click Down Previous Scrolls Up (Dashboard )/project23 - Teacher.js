


var items = document.querySelectorAll('.faq-item-head')
console.log(items, 'items');


items.forEach(function (head, index) {
    console.log(head, 'head');
    head.addEventListener('click', function () {
        console.log(this);
        // removeShow()     

        var icon = this.getElementsByTagName('i')[0]
        console.log(icon, 'icon of targetted element');


        var sibling = this.nextElementSibling
        console.log(sibling, 'sibling');


        if (icon.className == 'fa fa-chevron-down') {
            console.log('if');

            icon.classList.remove('fa-chevron-down')

            icon.classList.add('fa-chevron-up')

            sibling.classList.add('show-para')

        }

        else {
            icon.classList.remove('fa-chevron-up')
            icon.classList.add('fa-chevron-down')
            sibling.classList.remove('show-para')
        }
    })
})



// function removeShow() {

//     items.forEach(function (head, index) {

//         var siblings = head.nextElementSibling
//         console.log(siblings);
//         siblings.classList.remove('show-para')
//     })


// }
// removeShow()