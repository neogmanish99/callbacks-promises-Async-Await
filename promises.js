// Example 1
function greet(name) {
    alert(`Happy birthday ${name}`);
}

function greetings() {
    return new Promise((resolve, reject) => {
        const name = prompt("Name of the birthday guy");
        let err = false;
        if (!err) {
            resolve(name);
        } else {
            reject((err) => console.log(err));
        }
    });
}

//Example 2

const posts = [
    { title: "Post One", body: "This post One" },
    { title: "Post Two", body: "This post Two" },
];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            let err = false;

            if (!err) {
                resolve();
            } else {
                reject(`Something went wrong`);
            }
        }, 2000);
    });
}

function getPost() {
    setTimeout(function () {
        let output = "";
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: "Post 3 ", body: "This is post 3" })
    .then(getPost)
    .catch((err) => {
        console.log(err);
    });
