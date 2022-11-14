
const btn = document.querySelector("[data-fn='callACat']")
console.log(btn);
btn.addEventListener("click", callCats);



async function callCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const resDataCats = await res.json();
  console.log(resDataCats);
  printcats(resDataCats)
}

function printcats(cats) {
  console.log(cats);
  let div = document.createElement ("div")
  div.innerHTML = `<img src="${cats[0].url}"></img>`

  document.body.appendChild(div)

  let btn = document.createElement("button")
  btn.textContent = "remove"
  div.appendChild(btn)
  btn.addEventListener("click", function() {
    div.remove();
})


  
} 