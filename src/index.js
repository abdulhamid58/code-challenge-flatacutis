// Your code here
const CHARACTER_BAR = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const voteCount = document.getElementById("vote-count");
const votesForm = document.getElementById("votes-form");
const characterVotes = document.getElementById("votes");
const resetBtn = document.getElementById("reset-btn");

// deliverable 1:
function getCharacters() {
  fetch("http://localhost:4321/characters")
    .then((response) => response.json())
    .then((data) => appendCharacterList(data));
}

function appendCharacterList(data) {
  data.forEach((item) => {
    const characterName = document.createElement("span");

    characterName.textContent = item.name;
    CHARACTER_BAR.appendChild(characterName);

    // deliverable 2:
    characterName.addEventListener("click", () => {
      updateCharacterDetails(item);
    });
  });
}

function updateCharacterDetails(item) {
  let votes = item.votes;
  characterName.textContent = item.name;
  characterImage.src = item.image;
  voteCount.textContent = votes;

  //   deliverable 3:
  votesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newVotes = parseInt(characterVotes.value);

    if (isNaN(newVotes)) {
      alert("Please enter a valid number");
      return;
    }
    votes += newVotes;
    voteCount.textContent = votes;

  });
}

getCharacters();
