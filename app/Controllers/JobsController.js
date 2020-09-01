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
      console.error(error);
    }
  }

  createJob() {
    event.preventDefault();
    let form = event.target;
    // @ts-ignore
    let newJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.description.value,
    };
    try {
      jobsService.createJob(newJob);
    } catch (error) {
      console.error(error);
    }
  }

  removeJobPosting(id) {
    try {
      jobsService.removeJob(id);
    } catch (error) {
      console.error(error);
    }
  }

  displayJobs() {
    let element = document.getElementById("jobs-display");
    element.classList.remove("d-none");
    let elem2 = document.getElementById("car-display");
    elem2.classList.add("d-none");
  }
}
