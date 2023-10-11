const jokesinnerHTML = document.querySelector(".jokes");
const btn = document.querySelector(".btn");
const selected = document.getElementById("jokes");

gettingNewJoke();

let jokenumber = 0;

btn.addEventListener("click", () => {
    gettingNewJoke(selected.value);
})


async function gettingNewJoke(categories) {

    try {
        const newJoke = await fetch(`https://api.chucknorris.io/jokes/search?query=${categories}`);
        const jokes = await newJoke.json();
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

