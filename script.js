const jokesinnerHTML = document.querySelector(".jokes");
const btn = document.querySelector(".btn");
const optionsbox = document.querySelector(".optionsbox");
const selected = document.getElementById("jokes");
const language = document.getElementById("language");

gettingNewJoke();

let jokenumber = 0;

btn.addEventListener("click", () => {
    gettingNewJoke(selected.value);
})


async function gettingNewJoke(categories) {

    if (language.value == "Hindi") {

        optionsbox.style.display = "none";
        const responce = await fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=689cac4cdccb4f0fdb6319c47b6a");
        const hindijokes = await responce.json();
        jokesinnerHTML.textContent = hindijokes.jokeContent;

    } else {

        try {
            const newJoke = await fetch(`https://api.chucknorris.io/jokes/search?query=${categories}`);
            const jokes = await newJoke.json();

            optionsbox.style.display = "block";

            if (jokenumber < jokes.total) {
                const joke = jokes.result[jokenumber].value;
                jokesinnerHTML.textContent = joke;
                jokenumber++;

            } else {
                jokenumber = 0;
            }

        } catch (error) {
            console.log(error);
        }

    }



}

