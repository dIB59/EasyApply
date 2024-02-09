function logHTML() {
    const html = document.documentElement.outerHTML;
    console.log(html);
}

addEventListener("click", (event) => {

    if (event.target.textContent.includes("Apply")) {
        console.log("Apply clicked");
        console.log(event.target);
    }

    if (event.target.textContent.includes("Save")) {
        console.log("Save clicked");
        console.log(event.target);
    }

});

onclick = (event) => {};
