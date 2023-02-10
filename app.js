const gotRequest = new XMLHttpRequest();
// gotRequest.open("GET", "https://thronesapi.com/api/v2/characters");
gotRequest.open(
  "GET",
  " https://newsapi.org/v2/top-headlines?country=fr&apiKey=7c0a8bedadb84895b514a81557a92397"
);

let divParent = document.getElementById("div");
gotRequest.onload = (reponse) => {
  let data = JSON.parse(reponse.target.response);
  // console.log(data);
  // let body = document.querySelector("body");
  data.articles.forEach((weather) => {
    let div = document.createElement("div");

    div.style.width = "350px";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.backgroundColor = "rgb(251, 225, 217)";

    div.innerHTML = `
      
      <h3 style="color:#333">${weather.title}</h3>
      <p class="content">${weather.content}</p>
      <p class="description">${weather.description}</p>
      <p class="actor-name">${weather.publishedAt}</p>
      <img  width="300px" src=${weather.urlToImage} />
      
      
    `;

    divParent.append(div);

    divParent.style.display = "block";
    // divParent.style.display = "block";

    divParent.style.display = "flex";

    // divParent.style.margin = "10px 10px 11px 11px";
    // divParent.style.border = "thick solid #0000FF";
    // divParent.style.flexDirection = "row";
    divParent.style.flexFlow = "row wrap";
    // div.style.display = "flex";
  });
};
gotRequest.send();

let buttonElement = document.getElementById("button");
// let form = document.getElementById("myForm");
buttonElement.addEventListener("click", function (e) {
  e.preventDefault();
  let inputElement = document.getElementById("input").value;

  const gotRequest = new XMLHttpRequest();
  gotRequest.open(
    "GET",
    "https://newsapi.org/v2/everything?q=" +
      inputElement +
      "&apiKey=7c0a8bedadb84895b514a81557a92397"
  );

  // console.dir(divParent);
  divParent.childNodes.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerText.toUpperCase().includes(inputElement.toUpperCase())) {
      divParent.childNodes[index].style.display = "block";
    } else {
      divParent.childNodes[index].style.display = "none";
    }
  });
});
