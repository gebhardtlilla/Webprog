let board = [];

document.querySelector("#gomb").addEventListener("click",Gomb)   
function Gomb()
{
    const n = document.querySelector("#elso").value;  
    const m = document.querySelector("#masodik").value;  
}
Gomb();

function createBoard() {
    
    for (let i = 0; i < n; i++) {
        row = [];
        for (let j = 0; j < m; j++) {
            //const field = createField();
            //row.push(field);
        }
        board.push(row);
    }
}

function showBoard(n,m) {
    const tablazat = document.createElement("table");
    for (let i=0;i<n;i++) {
        const tr = document.createElement("tr");
        for (let j=0;j<m;i++) {
            const td = document.createElement("td");
            td.innerText="X;"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return tablazat;
}


const tablazat = showBoard(n,m);