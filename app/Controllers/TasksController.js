import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


// function _drawTasks() {
//   let template = ''
//   appState.tasks.forEach(task => template += task.Template);
//   setHTML('tasks', template)
// }

export class TasksController {

  // constructor() {
  //   appState.on('tasks', _drawTasks)
  //   appState.on(cards)
  //   console.log('bruh');
  //   _drawTasks()
  // }

  removeTask(id) {
    // console.log('controller');
    if (window.confirm('Do you want to remove this item?')) {
      tasksService.removeTask(id)
    }
  }
  createTasks(cardId) {
    // debugger
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.cardId = cardId

      // console.log("new task", formData);
      tasksService.createTask(formData)
      // @ts-ignore
      form.reset()
      console.log('createTasks is running');
    } catch (error) {
      console.error(error);
    }
  }

  toggleTaskCompletion(id) {
    tasksService.toggleTaskCompletion(id)
  }
}