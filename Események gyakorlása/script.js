console.log("kapcsolat");

const button = document.getElementById("buttonGenerate");
button.addEventListener("click",TableGenerate);

function TableGenerate(){
    //adatok
    const row = document.getElementById("rowInput").value;
    const col = document.getElementById("columnInput").value;

    //tablamegjelenítés - tábla visszaadása

    const table = ShowTable(row, col);
    //mibe generálja
    const div = document.getElementById("tableDiv");
    div.appendChild(table);
}

function ShowTable(row, col)
{
    const table = document.createElement("table");
    table.innerHTML="";
    for(let i = 0; i<row; i++)
    {
        const tr = document.createElement("tr");
        for(let j = 0; j<col;j++)
        {
            const td = document.createElement("td");
            td.innerText = Numbers();
            td.addEventListener("click", Szinezes);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function randint(a,b)
{
    return Math.floor(Math.random()*(b-a+1))+a;
}

function Numbers()
{
    const szam = randint(0,255);
    const szam2 = randint(0,255);
    const szam3 = randint(0,255); 
    return szam+","+szam2+","+szam3;
}



function Szinezes()
{
    const szoveg = Numbers().split(",");
    const szam1=szoveg[0];
    const szam2=szoveg[1];
    const szam3=szoveg[2];
    td.style.backgrondColor = `rgb(${szam},${szam2},${szam3})`;
    //td.style.backgrondColor = Numbers();

}

