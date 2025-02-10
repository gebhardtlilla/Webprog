let nev;
function handleClick() {
    const input = document.querySelector("input[type=text]");

    nev=input.value;
    
    const p = document.createElement("p");
    p.innerText = `Szia ${input.value}!`; // "Szia FNL!"
    const oldDiv = document.querySelector("#regi");
    oldDiv.appendChild(p);

    const newDiv = document.querySelector("#uj");
    newDiv.style.display = "none";
}
const button = document.querySelector("button");
button.addEventListener("click", handleClick);


//Oldal betö



