// Interaction 1 - dark mode toggle

const themeButton = document.getElementById("themeButton");

let darkMode = false;

themeButton.addEventListener("click", function () {

    if (darkMode === false) {

        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";

        document.querySelector(".post").style.backgroundColor = "#333";

        darkMode = true;
    }

    else {

        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "black";

        document.querySelector(".post").style.backgroundColor = "white";

        darkMode = false;
    }

});


// Interaction 2 - submit comment

const commentButton = document.getElementById("commentButton");

commentButton.addEventListener("click", function () {

    const input = document.getElementById("commentInput");

    const comment = document.createElement("p");

    comment.classList.add("comment");

    comment.textContent = input.value;

    document.getElementById("comments").appendChild(comment);

    input.value = "";

});


// Interaction 3 - show/hide comments

const toggleComments = document.getElementById("toggleComments");

const comments = document.getElementById("comments");

toggleComments.addEventListener("click", function () {

    if (comments.style.display === "none") {

        comments.style.display = "block";
    }

    else {

        comments.style.display = "none";
    }

});


// Interaction 4 - like counter

let likes = 0;

const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", function () {

    likes++;

    document.getElementById("likeCount").textContent =
        "Likes: " + likes;

});


// Interaction 5 - hover profile popup

const profileArea = document.getElementById("profileArea");

const profileCard = document.getElementById("profileCard");

profileArea.addEventListener("mouseover", function () {

    profileCard.style.display = "block";

});

profileArea.addEventListener("mouseout", function () {

    profileCard.style.display = "none";

});