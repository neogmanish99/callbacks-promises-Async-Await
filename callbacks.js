// // Example 1

// // writing a function that  will alert a notification
// function greeting(name) {
//     alert(`Happy birthday ${name}`);
// }

// // Using the callback function as an argument where we pass another function
// function greetingName(callback) {
//     const name = "MANISH";
//     callback(name);
// }

// greetingName(greeting);

// // Example 2
// function greet(name) {
//     alert(`Happy birthday ${name}`);
// }

// function greetings(callback) {
//     const name = prompt("Name of the birthday guy");
//     callback(name);
// }

// greetings(greet);

// Example3
const posts = [
    { title: "Post One", body: "This post One" },
    { title: "Post Two", body: "This post Two" },
];

function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

function getPost() {
    setTimeout(function () {
        let output = "";
        posts.forEach(function (post) {
            output += `
                <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPost);
