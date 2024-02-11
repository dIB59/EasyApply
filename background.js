/** Logs All Text content within the page */
function logHTML() {
  const allDetails = document.querySelector('main')
      .textContent.replace(/\s+/g, ' ').trim();
  const jobDetails = document.getElementById('job-details').textContent.trim();
  console.log(allDetails);
  console.log(jobDetails);
}

addEventListener('click', (event) => {
  if (event.target.textContent.includes('Apply')) {
    logHTML();
    console.log('Apply clicked');
  }
  if (event.target.textContent.includes('Save')) {
    logHTML();
    console.log('Save clicked');
  }
});
