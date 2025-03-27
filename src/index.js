const jobData = {
  jobs: [
    {
      id: 114143,
      url: "https://jobicy.com/jobs/114143-director-of-product-marketing",
      jobTitle: "Sr. Content Marketing Manager",
      companyName: "ActiveCampaign",
      jobType: "full-time",
      jobGeo: "USA",
      jobExcerpt:
        "As a Senior Content Marketing Manager, you’ll create content that drives business across the entire customer lifecycle.",
      pubDate: "2025-03-23 04:41:56",
    },
    {
      id: 111598,
      url: "https://jobicy.com/jobs/111598-growth-manager-3",
      jobTitle: "Growth Manager",
      companyName: "Awesome Motive",
      jobType: "full-time",
      jobGeo: "Anywhere",
      jobExcerpt:
        "We are Awesome Motive, the company behind popular web apps and business tools.",
      pubDate: "2025-03-19 05:15:32",
    },
    {
      id: 116374,
      url: "https://jobicy.com/jobs/116374-senior-content-marketing-manager-2",
      jobTitle: "Senior Content Marketing Manager",
      companyName: "Postman",
      jobType: "full-time",
      jobGeo: "USA",
      jobExcerpt:
        "We’re seeking a creative strategist who’s versed in every aspect of a content marketing ecosystem.",
      pubDate: "2025-03-18 16:13:07",
    },
    {
      id: 116301,
      url: "https://jobicy.com/jobs/116301-senior-digital-acquisition-strategist",
      jobTitle: "Senior Digital Acquisition Strategist",
      companyName: "ServiceNow",
      jobType: "full-time",
      jobGeo: "Canada, USA",
      jobExcerpt:
        "We are seeking a dynamic Senior Digital Acquisition Strategist to join our global digital marketing team.",
      pubDate: "2025-03-15 02:39:37",
    },
    {
      id: 116055,
      url: "https://jobicy.com/jobs/116055-marketing-assistant",
      jobTitle: "Marketing Assistant",
      companyName: "Scorpion",
      jobType: "full-time",
      jobGeo: "USA",
      jobExcerpt:
        "Scorpion is the leading provider of technology and services helping local businesses thrive.",
      pubDate: "2025-03-05 19:21:30",
    },
    {
      id: 111984,
      url: "https://jobicy.com/jobs/111984-manager-digital-marketing",
      jobTitle: "Manager, Digital Marketing",
      companyName: "CrossFit",
      jobType: "full-time",
      jobGeo: "Anywhere",
      jobExcerpt:
        "CrossFit is looking to hire a Manager, Digital Marketing to join our Marketing team.",
      pubDate: "2025-03-04 03:56:21",
    },
  ],
};

const jobListingsContainer = document.getElementById("job-listings");
const jobDetailsContainer = document.getElementById("job-details");
const searchBar = document.getElementById("search-bar");
const toggleThemeButton = document.getElementById("toggle-theme");

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

// Initialize by displaying all jobs
displayJobs(jobData.jobs);
