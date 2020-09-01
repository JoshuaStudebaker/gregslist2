import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "../Services/AxiosService.js";

class JobsService {
  createJob(newJob) {
    throw new Error("Method not implemented.");
  }
  async getJobs() {
    let jobResults = await api.get("jobs");
    ProxyState.jobs = jobResults.data.data.map((j) => new Job(j));
  }
}

const SERVICE = new JobsService();
export default SERVICE;
