const cards = "Magic";
let cardsMaiusculas = "";

for (let i = 0; i < cards.length; i++) {
    cardsMaiusculas += cards[i].toUpperCase()
}

const novo = cards.replace("Ma", "Nu")
console.log(novo)
//cardsMaiusculas = cards[1].toUpperCase()

//console.log(cardsMaiusculas) 