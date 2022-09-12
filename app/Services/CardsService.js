import { appState } from "../AppState.js"
import { Card } from "../Models/card.js"
import { saveState } from "../Utils/Store.js"

const elems = {}


class CardsService {
  removeCard(id) {
    let remainingCards = appState.cards.filter(card => card.id !== id)
    appState.cards = remainingCards
    saveState('cards', appState.cards)
  }

  createCard(formData) {
    // debugger
    let card = new Card(formData)
    appState.cards = [card, ...appState.cards]
    // console.log('hey');
    saveState('cards', appState.cards)
    console.log(appState.cards);
    appState.emit('cards')
  }

  // getElem(id) {
  //   elems[id] = document.getElementById(id)
  //   console.log("get Elem in service is connected, this is its parameter", elems[id])
  // }

}

export const cardsService = new CardsService()