let currentUser = "";

function saveUserName() {
    const name = document.getElementById("userName").value.trim();
    if (name === "") {
        return alert("Please enter your User Name");
    }

    currentUser = name;
    localStorage.setItem("currentUser", currentUser);

    document.getElementById('UserNameSec').classList.add("hidden");
    document.getElementById("appSec").classList.remove("hidden");
    document.getElementById("userDisplay").innerText = currentUser;

    showPost();
}

function addPost() {
    const title = document.getElementById("titleInput").value.trim();
    const body = document.getElementById("post").value.trim();
    const type = document.getElementById("typeSelect").value;

    if (!title || !body) {
        return alert("Fill all fields");
    }

    const newPost = {
        author: currentUser,
        title,
        body,
        type
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("titleInput").value = "";
    document.getElementById("post").value = "";

    showPost();
}

function showPost() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const yourPostDiv = document.getElementById("yourPosts");
    const publicPostDiv = document.getElementById("publicPosts");
    yourPostDiv.innerHTML = "";
    publicPostDiv.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p>By ${post.author}</p>
        `;

        if (post.author === currentUser) {
            yourPostDiv.appendChild(div);
        }

        if (post.type === "public" && post.author !== currentUser) {
            publicPostDiv.appendChild(div);
        }
    });
}

window.onload = () => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        currentUser = savedUser;

        document.getElementById("UserNameSec").classList.add("hidden");
        document.getElementById("appSec").classList.remove("hidden");

        document.getElementById("userDisplay").innerText = currentUser;
        showPost();
    }
};