/** some */
function logHTML() {
  const pageContent = Node.textContent;
  console.log(pageContent);
}

addEventListener('click', (event) => {
  console.log(event.target.textContent);
  if (event.target.textContent.includes('Apply')) {
    console.log('Apply clicked');
    logHTML();
  }

  if (event.target.textContent.includes('Save')) {
    console.log('Save clicked');
  }
});

onclick = () => {};
