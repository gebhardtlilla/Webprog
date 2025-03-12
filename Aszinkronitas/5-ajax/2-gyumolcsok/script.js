function show(data)
{
    const ul = document.querySelector("ul");
    const products =  data.products;
    console.log(products);
    products.forEach(product => {
        const li = document.createElement("li");
       div = createCard(product);
       li.appendChild(div);
       ul.appendChild(li);
        
    });
}

// function createCard(product)
// {
//     const div = document.createElement("div");

//     const img = document.createElement("img");
//         img.src= product.picture;
//         div.append(img);

//         const pNev = document.createElement("p");
//         pNev.innerText= 'Név: ${product.name}';
//         div.appendChild(pNev);

//         const price = document.createElement("p");
//         price.innerText= `Ár: ${product.price} Ft`;
//         div.append(price);

//         return div;
// }

function createCard(product) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src=${product.picture}>
        <p>Név: ${product.name}</p>
        <p>Ár: ${product.price} Ft</p>
    `;
    return div;
}


const button = document.querySelector("button");

async function getFruitsAsync ()
{
    const response = await fetch ("https://hur.webmania.cc//products.json");
    const data = await response.json();
    //console.log(data);
    show (data)
}

function getFruitsFetch()
{

}

function getFruitsXHR()
{

}

button.addEventListener("click", getFruits)