
const $$btn = document.querySelector("[data-fn='callACat']")
console.log($$btn);
$$btn.addEventListener("click", callCats);



async function callCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const resDataCats = await res.json();
  console.log(resDataCats);
  printcats(resDataCats)
}

function printcats(cats) {
  console.log(cats);
  let $$div = document.createElement ("div")
  $$div.innerHTML = `<img src="${cats[0].url}"></img>`

  document.body.appendChild($$div)

  let $$btn = document.createElement("button")
  $$btn.textContent = "remove"
  $$div.appendChild($$btn)
  $$btn.addEventListener("click", function() {
    $$div.remove();
})


  
} 







/*const btn$$ = document.querySelector("[data-fn='callACat']");

btn$$.addEventListener("click", getACat);

function getACat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then(printCat);
}

function printCat(cat) {
  const div$$ = document.createElement("div");

  div$$.addEventListener("click", () => {expandCat(div$$)})
  const btn$$ = document.createElement("button");
  btn$$.textContent = "Remove";
  btn$$.addEventListener("click", () => {
    removeCat(div$$);
  });

  div$$.innerHTML = `<img width="300" src="${cat[0].url}"/>`;
  div$$.appendChild(btn$$);

  document.body.appendChild(div$$);
}

function removeCat(div$$) {
  div$$.remove();
}

function expandCat(div$$){
    const img$$ = div$$.querySelector("img");

    if(img$$.getAttribute("width") === "100%"){
        img$$.setAttribute("width", "300");
    } else{
        img$$.setAttribute("width", "100%");
    }
}*/