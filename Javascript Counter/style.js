    // let myAge = 22
    // let humanDogRatio =  7

    // let multiply= myAge * humanDogRatio

    // console.log(multiply)


    // let bounsPoint= 50
    // bounsPoint= bounsPoint + 50
    // bounsPoint= bounsPoint - 75
    // bounsPoint= bounsPoint + 50
    // console.log(bounsPoint);
 

    // function number(){
    //     console.log(42)
    // }
    // number()


    //---------------------------------------------------------------------------------

    // let lap1 = 34
    // let lap2 = 33
    // let lap3 = 36
    
    // function laps(){
    //     let lap = lap1 + lap2 + lap3
    //   console.log(lap);
    // }

    // laps()


    // let lapsCompleted = 0

    // function increment(){
    //     lapsCompleted = lapsCompleted + 1
    // }
    
    // increment()
    // increment()
    // increment()
    // console.log(lapsCompleted);

    //---------------------------------------------------------------------------------

    // let username= "per"
    // let message="You have three new notifications"

    // let messageToUser= message + ", " + username + "!"

    // console.log(messageToUser)


//---------------------------------------------------------------------------------


//    let myName = "Ayian"
//    let greeting = "Hi, my name is "
//    let myGreeting = greeting + myName

//    console.log(myGreeting);




// ---------------------------------------------------------------------------------


    // let countEl = document.getElementById("count-el") 

    // let saveEl = document.getElementById("save-el")

    // let resetEl = document.getElementById("reset-btn")

    // let count = 0;

    // function increment(){
    //     // count = count + 1
    //     count++
    //     countEl.innerText = count
    // }

    // function save() {
    //     let countStr = count + " - "
    //     // saveEl.innerText += sep
    //     saveEl.textContent += countStr
    //     console.log(count)
    // }

    // function reset() {
    //     countEl.innerText = count = 0 
    // }



let countEl = document.getElementById('count-el') 
let saveEl = document.getElementById('save-el') 

    let count = 0


    function increment() {
        count ++

        countEl.textContent = count
    }

    function save() {

        countStr = countEl.textContent

        saveEl.textContent += ' - ' + countStr
        
    }

    function reset() {
        countEl.textContent = count = 0
    }



    