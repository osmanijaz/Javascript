let hour = document.querySelector("#pin-hour");
let min = document.querySelector("#pin-min");
let sec = document.querySelector("#pin-sec");

let time = document.querySelector(".time");

function clock() {
  let date = new Date();
  let hourHand = date.getHours();
  let minHand = date.getMinutes();
  let secHand = date.getSeconds();

  let timeNew = hourHand + ":" + minHand + ":" + secHand;

  time.textContent = timeNew;

  let hourRot = (hourHand * 360) / 12;
  let minRot = (minHand * 360) / 60;
  let secRot = (secHand * 360) / 60;

  hour.style.transform = `rotate(${hourRot}deg)`;
  min.style.transform = `rotate(${minRot}deg)`;
  sec.style.transform = `rotate(${secRot}deg)`;

  //   console.log(secHand);
  setInterval(function () {
    clock();
  }, 1000);
}

clock();
