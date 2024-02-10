/** Logs All Text content within the page */
function logHTML() {
  const some = document.querySelector('main').textContent.trim();
  console.log(some);
}

addEventListener('click', (event) => {
  console.log(event.target.textContent);
  if (event.target.textContent.includes('Apply')) {
    logHTML();
    console.log('Apply clicked');
  }

  if (event.target.textContent.includes('Save')) {
    console.log('Save clicked');
  }
});

onclick = () => {};
