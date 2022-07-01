function greeting(name) {
    alert("Greetings" + " " + name);
}

function processUserInput(callback) {
    var name = prompt("Enter your name");
    callback(name);
}
processUserInput(greeting);
