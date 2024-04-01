let key = "a32db2ebfdc24645b4fbc215e539b6b3";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async (input) => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`
  );
  let jsonData = await res.json();
  console.log(jsonData.articles);

  searchType.innerText = "Search :" + input;
  inputData.value = "";

  cardData.innerHTML = "";

  jsonData.articles.forEach((article) => {
    console.log(article);
    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML = ` 
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `;

    divs.addEventListener("click", function () {
      window.open(article.url);
    });
  });
};

window.addEventListener("load", () => {
  getData("india");
});

searchBtn.addEventListener("click", () => {
  let inputValue = inputData.value;
  getData(inputValue);
});

function navClick(navName) {
  if (navName == "politics") {
    document.getElementById("politics").style.color = "yellow";
    document.getElementById("sports").style.color = "white";
    document.getElementById("technology").style.color = "white";
  }
  if (navName == "sports") {
    document.getElementById("sports").style.color = "yellow";
    document.getElementById("politics").style.color = "white";
    document.getElementById("technology").style.color = "white";
  }
  if (navName == "technology") {
    document.getElementById("technology").style.color = "yellow";
    document.getElementById("politics").style.color = "white";
    document.getElementById("sports").style.color = "white";
  }
  getData(navName);
}
