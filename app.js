/*
What is the canvas.
How to create a canvas.
How to set canvas properties and style.
What is the 2d context.
*/

//Use the load event handler to start the canvas, its is better this way to allow the browser to load any files needed, like sound, images.
window.addEventListener('load', init, false);

function init() {

    //Create the canvas object amd add it to the document body.
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Gett the 2d context from the canvas
    let context = canvas.getContext('2d');

    // context.beginPath()
    context.fillStyle = 'red';
    context.rect(50, 50, 100, 100);
    context.fill();

    context.fillStyle = 'yellow';
    context.fillRect(170, 50, 100, 100);
}