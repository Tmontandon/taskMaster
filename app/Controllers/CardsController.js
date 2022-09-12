import { appState } from "../AppState.js";
import { Card } from "../Models/card.js";
import { cardsService } from "../Services/CardsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCards() {
  let template = ''
  appState.cards.forEach(card => template += card.Template);
  setHTML('cards', template)

}
export class CardsController {


  constructor() {
    appState.on('cards', _drawCards)
    appState.on('tasks', _drawCards)
    _drawCards()

  }

  removeCard(id) {
    // console.log('controller');
    if (window.confirm('Do you want to remove this item?')) {
      cardsService.removeCard(id)
    }
  }
  createCard() {
    try {
      // debugger
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      // cardsService.getElem(color)
      // console.log(formData);
      cardsService.createCard(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error);
    }
  }
}