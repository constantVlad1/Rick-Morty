const body = document.querySelector("body");

const header = document.createElement("header");
body.prepend(header);

const pHeader = document.createElement("p");
header.appendChild(pHeader);
pHeader.classList.add("pHeader")
pHeader.innerText="Rick&Morty";

const divRoot = document.querySelector("#root");

const sideBar = document.createElement("div");
sideBar.classList.add("sidebar");
divRoot.appendChild(sideBar);

const episodsDiv = document.createElement("div");
episodsDiv.classList.add("episodsDiv");
sideBar.prepend(episodsDiv);

function sideBarFetch(url){
 episodsDiv.innerHTML = "";
 fetch(url)
 .then( respons => respons.json())
 .then(data => console.log(data.results.forEach((episod) => {
    const aLink = document.createElement("a");
    aLink.href = "#"
    aLink.classList.add("episodNames");
    aLink.innerText = episod.name
    episodsDiv.appendChild(aLink)
})))
}

let currentPage = 1;
function addMoreEpisodios () {
    fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
    .then( respons => respons.json())
    .then(data => data.results.forEach((episod) => {
    const aLink = document.createElement("a");
    aLink.href = "#"
    aLink.classList.add("episodNames");
    aLink.innerText = episod.name
    episodsDiv.appendChild(aLink)
}));
currentPage++;
if(currentPage > 4) {
    alert("Stop")
};
}
addMoreEpisodios();

const buttonPage = document.createElement("button");
buttonPage.id = "buttonPage";
sideBar.appendChild(buttonPage);
buttonPage.innerText = "Load Episodes ";
buttonPage.addEventListener("click", (event) => {
    event.preventDefault();
    addMoreEpisodios();
})



const mainBlock = document.createElement("div");
divRoot.appendChild(mainBlock);
mainBlock.classList.add("mainBlock");
