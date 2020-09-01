import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";

function _drawJobs() {}

export default class JobsController {
  constructor() {}

  displayJobs() {
    let element = document.getElementById("jobs-display");
    element.classList.remove("d-none");
    let elem2 = document.getElementById("car-display");
    elem2.classList.add("d-none");
  }
}
