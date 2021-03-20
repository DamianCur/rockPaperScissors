const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];



// WYBÓR GRACZA OBRAMÓWKA 
const handSelection = (e) => {
    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    e.target.style.boxShadow = "0 0 0 4px brown";
}


// WYBÓR KOMPUTERA
const aiChoice = () => {
    const aiHand = hands[Math.floor(Math.random() *3)].dataset.option;
    return aiHand;
}



//FUNKCJA STERUJĄCA
const startGame = () => {
    if (game.playerHand === "") {
        alert("Wybierz dłoń")
        return
    }
    game.aiHand = aiChoice()
    console.log(game.aiHand)
}



//DEKLARACJE FUNKCJI
hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);