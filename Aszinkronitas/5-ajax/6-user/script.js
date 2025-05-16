const button = document.querySelector("button");
button.addEventListener("click", createUser);
async function createUser(){
    const user ={
        name: "Neo",
        job: "Chosen one"
    };

    const OPTIONS ={
        method: "POST",
        headers:{ //hogyan kommunikálunk
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    };

    const response = await fetch("https://reqres.in/api/users", OPTIONS);

    const data = await response.json();
    console.log(data);


}