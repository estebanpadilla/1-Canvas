/*
What is the canvas.
How to create a canvas.
How to set canvas properties and style.
What is the 2d context.
*/

//Use the load event handler to start the canvas, its is better this way to allow the browser to load any files needed, like sound, images.
window.addEventListener('load', init, false);

function init() {

    var canvas = null;
    var context = null;

    //Create the canvas object amd add it to the document body.
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = '#ee3344';

    //Gett the 2d context from the canvas
    context = canvas.getContext('2d');

    context.fillStyle = 'yellow';
    context.fillRect(100, 100, 100, 100);
}