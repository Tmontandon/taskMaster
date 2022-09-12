import { appState } from "../AppState.js";
import { cardsService } from "../Services/CardsService.js";
import { generateId } from "../Utils/generateId.js";

// let colors = document.querySelector('#color');

// colors.addEventListener('input' => {
//   let c = colors.value;

// });


export class Card {

  constructor(data) {
    // debugger
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    // this.color = data.color || document.getElementById('color')
  }

  get Template() {
    // debugger
    return `
    
    <div class="col-md-4 mx-1 mb-4 yo p-2 px-3 rounded"
    style="background-color:${this.color}">
    <div class="d-flex justify-content-end">
    <i onclick="app.cardsController.removeCard('${this.id}')" class="mdi mdi-close text-danger selectable rounded" title="Get Outta here"></i>
    </div>
          <div class=" justify-content-center text-center">
            <div class="bg-light text-dark p-1 mx-1 rounded"><p class="m-1">${this.name}</p></div>
            <span class="bg-light text-dark p-1 rounded-bottom">

            ${this.Uncompleted}/${this.Total}

            </span>
          </div>
            <div class="">
            <div id="tasks">
            ${this.Tasks}
            </div>
            <form onsubmit="app.tasksController.createTasks('${this.id}')" class="py-2">
              <div class="form-group d-flex justify-content-center p-1">
                <input class="form-control square-right" type="text" name="task" placeholder="Task" required />
                <label for="task" class="visually-hidden">Task</label>
                <button class="btn btn-primary square-left" type="submit"><i class="mdi mdi-plus"></i></button>
              </div>
            </form>
            </div>
        </div>
    `
  }

  get Tasks() {
    // debugger
    let template = ''
    let tasks = appState.tasks.filter(task => task.cardId == this.id)
    tasks.forEach(c => template += c.Template)
    return template
  }


  // get Taskys() {
  //   let tasks = appState.tasks.forEach
  //   return tasks
  // }
  get Total() {
    // debugger
    let total = 0
    let w = appState.tasks.filter(t => t.cardId == this.id)
    w.forEach(task => total++);
    return total
  }

  get Uncompleted() {
    // debugger
    let total = this.Total
    let w = appState.tasks.filter(t => t.cardId == this.id)
    let uncompleted = w.filter(t => t.complete)
    uncompleted.forEach(t => total--)
    let end = total
    return end
  }

  //   get Color(){
  // let w = appState.cards.filter
  //     return color
  //   }

}


