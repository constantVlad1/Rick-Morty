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

fetch("https://rickandmortyapi.com/api/episode")
.then( respons => respons.json())
.then(data => console.log(data.results.forEach((episod) => {
    const aLink = document.createElement("a");
    aLink.href = "#"
    aLink.classList.add("episodNames");
    aLink.innerText = "Episode" + " " + (episod.id);
    episodsDiv.appendChild(aLink)
})))

const buttonPage = document.createElement("button");
buttonPage.id = "buttonPage";
sideBar.appendChild(buttonPage);
buttonPage.innerText = "Load Episodes "


const mainBlock = document.createElement("div");
divRoot.appendChild(mainBlock);
mainBlock.classList.add("mainBlock");