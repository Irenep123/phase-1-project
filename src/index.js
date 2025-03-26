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
