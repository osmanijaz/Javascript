// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();






// function Showtime(){
    
//     let date = new Date()
//     let hour = date.getHours()
//     let min = date.getMinutes()
//     let sec = date.getSeconds()

//     let amPm = 'AM'

//     if(hour == 0){
//         hour = 12
//     }

//     if(hour > 12){
//         hour -= 12
//         amPm = 'PM'
//     }

//     if(hour < 10){
//         hour = '0' + hour
//     }

//     if(min < 10){
//         min = '0' + hour
//     }
//     if(sec < 10){
//         sec = '0' + sec
//     }

//     let time = hour + ':' + min + ':' + sec + '' + amPm


//     display.textContent= time


//     setTimeout(Showtime, 1000)

//     console.log(hour);
//     console.log(min);
//     console.log(sec);
//     console.log(time);


// }
// Showtime()