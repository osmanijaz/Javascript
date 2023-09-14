const watch = document.querySelector("#watch");

let timer;
let milliseconds = 0;

function startWatch() {
  clearInterval(timer);
  timer = setInterval(function () {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);

    watch.innerHTML =
      ("0" + dateTimer.getUTCHours()).slice(-2) +
      ":" +
      ("0" + dateTimer.getMinutes()).slice(-2) +
      ":" +
      ("0" + dateTimer.getUTCSeconds()).slice(-2) +
      ":" +
      ("0" + dateTimer.getUTCMilliseconds()).slice(-3, -1);
  }, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML = "00:00:00:00";
}

document.addEventListener("click", function (e) {
  let el = e.target;

  if (el.id == "start") {
    startWatch();
  }
  if (el.id == "pause") {
    stop();
  }
  if (el.id == "reset") {
    reset();
  }
});
