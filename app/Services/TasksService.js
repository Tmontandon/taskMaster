import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js"

class TasksService {
  removeTask(id) {
    let remainingTasks = appState.tasks.filter(task => task.id !== id)
    appState.tasks = remainingTasks
    saveState('tasks', appState.tasks)
  }
  createTask(formData) {
    let form = new Task(formData)
    appState.tasks = [form, ...appState.tasks]
    saveState('tasks', appState.tasks)
    console.log(appState.tasks)
  }

  toggleTaskCompletion(id) {
    let task = appState.tasks.find(t => t.id == id)

    task.complete = !task.complete

    appState.emit('cards')
    saveState('tasks', appState.tasks)
  }

}

export const tasksService = new TasksService()