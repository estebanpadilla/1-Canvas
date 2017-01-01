/*
What is the canvas.
How to create a canvas.
How to set canvas properties and style.
What is the 2d context.
*/

window.addEventListener('load', init, false);
function init() {

    var canvas = undefined;
    var context = undefined;
    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    canvas.style.background = '#ee3344';

    document.body.appendChild(canvas);

    context = canvas.getContext('2d');

    context.fillStyle = 'yellow';
    context.fillRect(100, 100, 100, 100);
}