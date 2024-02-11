/**
 * Gets the job details from the LinkedIn job page
 * when ypou click on the Apply or Save button
 * @return {string} The job details
 */
export function getLinkedinJobDetails() {
  const allDetails = document.querySelector('main')
      ?.textContent.replace(/\s+/g, ' ')
      ?.trim();
  const jobDetails = document.getElementById('job-details')
      ?.textContent
      ?.trim();
  console.log(allDetails);

  return jobDetails ?? 'No Job details found';
}
