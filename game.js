const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: null,
    aiHand: null,
}

const hands = document.querySelectorAll(".select img");


const handSelection = (e) => {
    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    e.target.style.boxShadow = "0 0 0 4px brown";
}


hands.forEach(hand => hand.addEventListener("click", handSelection));