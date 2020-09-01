import CarsController from "./Controllers/CarsController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  constructor() {
    this.carsController = new CarsController();
    this.jobsController = new JobsController();
  }
}

window["app"] = new App();
