function makeDeck(){
    const deck = [];
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            const card = {
                value: values[j],
                suit: suits[i]
            }
            deck.push(card);
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

const deck = makeDeck();

card = drawCard(deck);

//console.log(card);
//console.log(deck.length);

const myDeck = {
    deck : [],
    drawCards : [],
    suits : ['hearts', 'diamonds', 'clubs', 'spades'],
    values : ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    
    initilizeDeck(){
        const {suits, values , deck} = this
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                const card = {
                    value: values[j],
                    suit: suits[i]
                }
                deck.push(card);
            }
        }
    },
    drawCard(){
        const card  =  this.deck.pop();
        this.drawCards.push(card);
        return card;
    },
    drawMultipleCards(numberOfCards){
        const cards=[];
        for(let i = 0; i < numberOfCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffleDeck(){
        for (let index = this.deck.length-1; index >= 0; index--) {
            let j = Math.floor(Math.random() * (index + 1));
            [this.deck[index], this.deck[j]] = [this.deck[j], this.deck[index]]
        }
    }
}

myDeck.initilizeDeck();
myDeck.shuffleDeck();
console.log(myDeck.deck.length);
console.log(myDeck.drawMultipleCards(10));
console.log(myDeck.deck.length);
