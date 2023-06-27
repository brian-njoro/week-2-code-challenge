document.addEventListener("DOMContentLoaded", (e) => {
    const navigation = document.querySelectorAll("#character-bar")
    async function getCharacterDetails() {
      const res =  fetch("http://localhost:3000/characters")
        const characters = res.json()
        // print characters
        characters.forEach((character) => {
            const characterSpan = document.createElement("span")
            navigation.appendChild(characterSpan)
            characterSpan.id = character.id
            characterSpan.innerText = character.name
            characterSpan.style.cursor = "pointer"

            characterSpan.addEventListener("click", (e) => {
                e.preventDefault();
                const charactersName = document.getElementById("name")
                charactersName.innerText = character.name
                const charactersImage = document.getElementById("image")
                charactersImage.src = character.image;

                const charactersVotes = document.getElementById("vote-count")
                charactersVotes.innerText = character.votes

                // vote forms
                const form = document.getElementById("votes-form");
                form.addEventListener("submit", (e) => {
                    e.preventDefault()
                    const votes = document.getElementById("votes").value;
                    if (isNaN(charactersvotes)) {
                        console.error(`please provide a valid input`)
                    } else {
                        currentVotes.innerText = votes
                    }
                    console.log(votes)

                })
            })

            // Adding  new character
            const newCharacter = document.querySelector("#character-form")
            newCharacter.addEventListener("submit", (event) => {
                event.preventDefault()
                const nameNewCharacter = document.getElementById("name2").value
                const newCharacterImage = document.getElementById("image-url").value
                const addedCharacter = document.createElement("span")
                addedCharacter.innerText = nameNewCharacter;
                navigation.appendChild(addedCharacter)
                addedCharacter.addEventListener("click", () => {
                    const newCharacterTitle = document.getElementById("name")
                    newCharacterTitle.innerText = nameNewCharacter
                    const addCharacterImage = document.getElementById("image")
                    addCharacterImage.src = newCharacterImage
                    const newCharactersVotes = document.getElementById("vote-count")
                    newCharactersVotes.innerText = 0
                    const newCharacterCurrentVotes = document.getElementById("vote-count")
                    newCurrentVotes.innerText = 0
                    const formNew = document.getElementById("votes-form")
                    formNew.addEventListener("submit", (e) => {
                        e.preventDefault();
                        const votesNew = document.getElementById("votes").value;
                        if (isNaN(votesNew) === false) {
                            newCurrentVotes.innerText = votes_1;
                            form_1.reset()
                        } else {
                            alert("Votes can only be in numbers");
                        }
                    })
                    const reset = document.getElementById("reset-btn");
                    reset.addEventListener("click", (e) => {
                        e.preventDefault();
                        newCharacterCurrentVotes.innerText = 0;
                    })
                    function getNewCharacter() {
                        return fetch("http://localhost:3000/characters", {
                            method: "POST",
                            body: JSON.stringify({
                                name: nameNewCharacter,
                                image: image: newCharacterImage,
                                votes: 0,
                            }),
                        })
                    }
                    geNewCharacter()
                })
            })
        })
    }
    getCharacterDetails();
  });
