import { CardsController } from "./Controllers/CardsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  cardsController = new CardsController
  tasksController = new TasksController

}
// letcolorInput = document.getElementById(color)

window["app"] = new App();

