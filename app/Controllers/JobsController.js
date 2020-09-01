import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";

function _drawJobs() {
  let template = "";
  let jobs = ProxyState.jobs;
  jobs.forEach((j) => (template += j.Template));
  document.getElementById("jobs").innerHTML = template;
}

export default class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs);

    this.getJobs();
  }

  getJobs() {
    try {
      jobsService.getJobs();
    } catch (error) {
      console.error("error");
    }
  }

  displayJobs() {
    let element = document.getElementById("jobs-display");
    element.classList.remove("d-none");
    let elem2 = document.getElementById("car-display");
    elem2.classList.add("d-none");
  }
}
