const user = {
    username: "Amaan",
    price: 999,

    welcomeMessage: function () { 
        console.log(`Welcome to the website, ${this.username}`);
    }
}

// user.welcomeMessage();

// user["username"] = "Coems";

// user.welcomeMessage();

function chai() {
    let username = "Chai";
    console.log(this.username);// this only works in objects and not in functions
}

chai();