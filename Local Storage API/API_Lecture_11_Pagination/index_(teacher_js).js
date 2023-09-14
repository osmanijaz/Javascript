let content = document.querySelector(".content");

let elementNumber = 10;
// let startElement = 0;

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();

  return data;
}

renderData(0, elementNumber);


//Must be in name e.g startElement, number
function renderData(startElement, number) {
  getData().then((data1) => {   //.then will then getData() into data1
    data1 = data1.splice(startElement, number);
    console.log(data1);

    let item = "";

    data1.forEach((element) => {
      item += `<p>${element.id}. ${element.title}</p>`;
    });

    content.innerHTML = item;
  });
}






let paginationLink = document.querySelectorAll(".pagination__link");

paginationLink.forEach((e) => {
  e.addEventListener("click", showNumber);
});

function showNumber() {
  let number = parseInt(this.textContent);

  renderData(number * 10 - 10, elementNumber);



}
