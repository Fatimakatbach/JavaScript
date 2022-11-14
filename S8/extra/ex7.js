fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => response.json())
.then(dibujosAnimes);

function dibujosAnimes(animes){
  console.log(animes);
  for ( const anime of animes) {

    console.log(anime.title)
    const h2 =document.createElement("h2")
    h2.textContent = anime.title;
    document.body.appendChild(h2);


    const img = document.createElement("img")
    img.setAttribute ("src",anime.image)
    document.body.appendChild(img)
  }


  }
