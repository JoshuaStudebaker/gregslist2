export default class Job {
  constructor(_id, company, jobTitle, rate, hours, description) {
    this.id = _id;
    this.company = company;
    this.jobTitle = jobTitle;
    this.rate = rate;
    this.hours = hours;
    this.description = description || "No description";
  }

  get Template() {
    return `
    <p>${this.id}
    `;
  }
}
