const body = document.querySelector("body");

const header = document.createElement("header");
body.prepend(header);

const pHeader = document.createElement("p");
header.appendChild(pHeader);
pHeader.classList.add("pHeader")
pHeader.innerText="Rick&Morty";

const divRoot = document.querySelector("#root");

const firstDiv = document.createElement("div");
firstDiv.classList.add("sidebar");
divRoot.appendChild(firstDiv);

const h1SideBar = document.createElement("h1");
h1SideBar.innerText = "Episodes:";
firstDiv.appendChild(h1SideBar)

fetch("https://rickandmortyapi.com/api/episode")
.then( respons => respons.json())
.then(data => console.log(data.results.forEach((episod) => {
    const aLink = document.createElement("a");
    aLink.classList.add("episodNames");
    aLink.innerText = "Episod" + " " + (episod.id);
    firstDiv.appendChild(aLink)
})))

const mainBlock = document.createElement("div");
divRoot.appendChild(mainBlock);
mainBlock.classList.add("mainBlock")