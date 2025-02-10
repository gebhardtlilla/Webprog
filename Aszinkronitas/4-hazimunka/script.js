// Kutya -> Mosogatás -> Szemét

function walkDog() {
    return new Promise (resolve=>{
        setTimeout(() => {
            resolve("Kutya!");
        }, 2500);
    })
    
}

function washDishes() {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("Mosogatás!");
        }, 1000);
    });
    
}

function takeTrash() {
    return new Promise(resolve=>{
        setTimeout(() => {
            callback("Szemét!")
        }, 100);
    });
    
}


function chores() {
    walkDog().then(message=>{
        console.log(message)
        return washDishes();
    })
    .then(message=>{
        console.log(message)
        return takeTrash();
    })
    .then(message=>{
        console.log(message);
        console.log("Kész!");
    });
        
}
chores();
