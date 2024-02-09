function logHTML() {
    const html = document.documentElement.outerHTML;
    console.log(html);
}

addEventListener("click", (event) => {

    console.log(event.target.textContent);
    if (event.target.textContent.includes("Apply")) {
        console.log("Apply clicked");
        logHTML();
    }

    if (event.target.textContent.includes("Save")) {
        console.log("Save clicked");
    }

});

onclick = (event) => {};
