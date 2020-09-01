export default class Job {
  constructor({ _id, company, jobTitle, rate, hours, description }) {
    this.id = _id;
    this.company = company;
    this.jobTitle = jobTitle;
    this.rate = rate;
    this.hours = hours;
    this.description = description || "No job description";
  }

  get Template() {
    return `
    
    <div class="card m-2 shadow border-dark" style="width: 18rem;">
  <div class="card-header" style="height: 6.75rem;">
    <h5 class="card-title">${this.jobTitle} - ${this.company}</h5>
    <h6 class="card-subtitle mb-2 text-muted">$${this.rate}/hr - ${this.hours}hrs/week</h6>
    </div>
  <div class="card-body" style="height-min: 6.75rem;">
    <p class="card-text">${this.description}</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-secondary" onclick="app.jobsController.removeJobPosting('${this.id}')")>Remove Job</button>
    </div>  
</div>
    `;
  }
}
