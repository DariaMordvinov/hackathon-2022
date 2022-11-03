document.addEventListener("DOMContentLoaded", function () {
    newDiv = document.createElement('div');
    console.log('in this script');
    newDiv.innerText = "I made this inner text";
    body = document.querySelector('body');
    body.appendChild(newDiv);
})