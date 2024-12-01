let button = document.querySelector("button");
let jokeDiv = document.querySelector("#joke");
let intro = document.querySelector("#intro");

let typewriter = new Typewriter(intro, {
  loop: false,
  delay: 75,
});

typewriter
  .typeString("Click the button below & prepare to LoL 🤡 😂 !")
  .start();

function fetchJoke() {
  let jokeSite = "https://official-joke-api.appspot.com/random_joke";

  fetch(jokeSite)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      jokeDiv.innerHTML = data.setup + " " + data.punchline;
    });
}

button.addEventListener("click", fetchJoke);
