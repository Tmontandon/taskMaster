import { generateId } from "../Utils/generateId.js";

export class Task {


  constructor(data) {
    // debugger
    this.id = data.id || generateId()
    this.task = data.task
    // NOTE I dont know what this is for - probably relstes to making each task share an id with parent card
    this.cardId = data.cardId
    this.complete = data.complete || false
  }

  get Template() {
    return `
      <div class="d-flex justify-content-between">
        <div class="mt-2 p-1 w-100 bg-light Iamsomad">
          <input onchange="app.tasksController.toggleTaskCompletion('${this.id}')" class="ms-2" type="checkbox" ${this.complete ? 'checked' : ''}>
        <i onclick="app.tasksController.removeTask('${this.id}')" class="mdi mdi-close text-danger selectable rounded" title="Get Outta here"></i>
          ${this.task}
        </div >
      </div >
      `

  }

}