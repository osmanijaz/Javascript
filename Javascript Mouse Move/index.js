let eyeball = document.querySelectorAll(".eyes");

console.log(eyeball);

document.onmousemove = function (event) {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 60) / window.innerHeight + "%";
  //   console.log(x);
  //   console.log(y);

  eyeball.forEach((e) => {
    e.style.left = x;
    e.style.top = y;
    // console.log(e);
  });
};
