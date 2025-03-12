// Adatok kérése
//mdn-en minden fent van  pl. send()

//dogába ez is lehet külön feladat, táblázatba megjelenítés
function showData(data) {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); //rendezés függvény csökkenő sorrendbe dátum szerint
    const table = document.querySelector("table");
    table.innerHTML = `<tr>
        <th>Dátum</th>
        <th>Osztály</th>
        <th>Tömeg</th>
    </tr>`;
}

const keresButton = document.querySelector("#keres");
function getData() {

}
keresButton.addEventListener("click", getData);

// -----------------------------------------------------
// Adatok küldése
const kuldesButton = document.querySelector("#kuldes");
async function sendDataFetch() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const adat = {
        // osztaly: osztaly,
        // tomeg: tomeg
        osztaly,
        tomeg
    } //becsomagolás egy objektumba
    const options ={
        method: "POST",
        headers: {
            "Content-Type": "application/json" //ezzel jelezzük hogy jsont várunk (nem kell kiírni)
        },
        //adatok elküldése/odaadása a szervernek
        body: JSON.stringify(adat)  //objektumot stringé alakítani:
    
    };
    const response = await fetch("http://localhost/papir/create/", options ); //promiset bevárja az await és ahhoz kell az async, válaszként objektumot fog majd megadni, fetchnek kétparamétere van:init (ez lett az options), getnél nem kell második paraméter  POST=küldeni, postázni
    //kiiratás előtt (mert jsont ad vissza a szerver):
    const data = await response.json(); //itt miért kisbetűs? mit csinál?
    console.log(data);
}

function sendDataXHR() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
    const xhr = new XMLHttpRequest();  //példányosítás
    xhr.open("POST","http://localhost/papir/create/" ); //megnyitás
    xhr.onload = () =>{
        const data = JSON.parse(xhr.response); //json.parse => ez alakítja át objektummá, js objektumot ad vissza
        console.log(data);
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(adat));
}
kuldesButton.addEventListener("click", sendDataFetch);

/*
//Alap adatok
// Adatok kérése
function showData(data) {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const table = document.querySelector("table");
    table.innerHTML = `<tr>
        <th>Dátum</th>
        <th>Osztály</th>
        <th>Tömeg</th>
    </tr>`;
}

const keresButton = document.querySelector("#keres");
function getData() {

}
keresButton.addEventListener("click", getData);



// -----------------------------------------------------
// Adatok küldése 
const kuldesButton = document.querySelector("#kuldes");
function sendDataFetch() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
}

function sendDataXHR() {
    const osztaly = document.querySelector("#osztaly-kuldes").value;
    const tomeg = document.querySelector("#tomeg-kuldes").value;
}
kuldesButton.addEventListener("click", sendDataFetch);*/