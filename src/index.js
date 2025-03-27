const apiUrl =
  "https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo";
const jobListingsContainer = document.getElementById("job-listings");
const jobDetailsContainer = document.getElementById("job-details");
const searchBar = document.getElementById("search-bar");
const toggleThemeButton = document.getElementById("toggle-theme");

//to fetch data
async function fetchJobs() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.jobs) {
      displayJobs(data.jobs);
    } else {
      console.error("No jobs found in the response.");
    }
  } catch (error) {
    console.error("Error fetching job data:", error);
  }
}

// to Display job listings

function displayJobs(jobs) {
  jobListingsContainer.innerHTML = "";
  jobs.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job-item");
    jobElement.innerHTML = `
            <h3>${job.jobTitle}</h3>
            <p><strong>Company:</strong> ${job.companyName}</p>
            <p><strong>Location:</strong> ${job.jobGeo}</p>
            <button class="view-details" data-job-id="${job.id}">View Details</button>
        `;
    jobListingsContainer.appendChild(jobElement);

    // Add event listener for "View Details" button
    const viewDetailsButton = jobElement.querySelector(".view-details");
    viewDetailsButton.addEventListener("click", () => showJobDetails(job));
  });
}

// to  Display job details

function showJobDetails(job) {
  jobDetailsContainer.innerHTML = `
        <h3>${job.jobTitle}</h3>
        <p><strong>Company:</strong> ${job.companyName}</p>
        <p><strong>Location:</strong> ${job.jobGeo}</p>
        <p><strong>Job Type:</strong> ${job.jobType}</p>
        <p><strong>Description:</strong> ${job.jobDescription}</p>
        <a href="${job.url}" target="_blank">Apply Now</a>
    `;
  jobDetailsContainer.style.display = "block";
}

// Toggle dark/light mode
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Initialize
fetchJobs();
