"use strict";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Clicked: ", message);
}
button.addEventListener("click", clickHandler.bind(null, "Your're welcome"));
//# sourceMappingURL=app.js.map