import {getLinkedinJobDetails} from './linkedin';


addEventListener('click', (event) => {
  if (event.target.textContent.includes('Apply')) {
    console.log(getLinkedinJobDetails());
  }
  if (event.target.textContent.includes('Save')) {
    console.log(getLinkedinJobDetails());
  }
});
