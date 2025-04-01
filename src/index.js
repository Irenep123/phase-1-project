const apiUrl = "http://localhost:3000/jobs"; // URL for json-server
const jobListingsContainer = document.getElementById("job-listings");
const jobDetailsContainer = document.getElementById("job-details");
const searchBar = document.getElementById("search-bar");
const toggleThemeButton = document.getElementById("toggle-theme");

// Fetch job data from the local json-server
async function fetchJobs() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayJobs(data); // Call function to display jobs once data is fetched
  } catch (error) {
    console.error("Error fetching job data:", error);
  }
}

// Function to display the jobs
function displayJobs(jobs) {
  jobListingsContainer.innerHTML = ""; // Clear previous listings

  jobs.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job-item");

    jobElement.innerHTML = `
            <h3>${job.jobTitle}</h3>
            <p><strong>Company:</strong> ${job.companyName}</p>
            <p><strong>Location:</strong> ${job.jobGeo}</p>
            <p><strong>Job Type:</strong> ${job.jobType}</p>
            <button class="view-details" data-job-id="${job.id}">View Details</button>
        `;

    jobListingsContainer.appendChild(jobElement);

    // Add event listener for "View Details" button
    const viewDetailsButton = jobElement.querySelector(".view-details");
    viewDetailsButton.addEventListener("click", () => showJobDetails(job));
  });
}

// Display job details
function showJobDetails(job) {
  jobDetailsContainer.innerHTML = `
        <h3>${job.jobTitle}</h3>
        <p><strong>Company:</strong> ${job.companyName}</p>
        <p><strong>Location:</strong> ${job.jobGeo}</p>
        <p><strong>Job Type:</strong> ${job.jobType}</p>
        <p><strong>Description:</strong> ${job.jobExcerpt}</p>
        <a href="${job.url}" target="_blank">Apply Now</a>
    `;
  jobDetailsContainer.style.display = "block";
}

// Search functionality
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const jobItems = document.querySelectorAll(".job-item");
  jobItems.forEach((item) => {
    const title = item.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Toggle dark/light mode
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Initialize by fetching job data
fetchJobs();
