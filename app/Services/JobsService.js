import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "../Services/AxiosService.js";

class JobsService {
  async removeJob(id) {
    await api.delete(`jobs/${id}`);
    ProxyState.jobs = ProxyState.jobs.filter((j) => j.id !== id);
  }
  async createJob(newJob) {
    let jobsResults = await api.post("jobs", newJob);
    let job = new Job(jobsResults.data.data);
    ProxyState.jobs = [...ProxyState.jobs, job];
  }
  async getJobs() {
    let jobResults = await api.get("jobs");
    ProxyState.jobs = jobResults.data.data.map((j) => new Job(j));
  }
}

const SERVICE = new JobsService();
export default SERVICE;
