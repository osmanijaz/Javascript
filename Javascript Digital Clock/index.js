let display = document.getElementById("clock");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let timeOfDay = " AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour >= 12) {
    timeOfDay = " PM";
    // hour -= 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  time = hour + ":" + min + ":" + sec + "" + timeOfDay;

  display.textContent = time;

  setInterval(showTime, 1000);

  console.log(time);
}

showTime();
