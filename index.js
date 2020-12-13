console.log("Hello ")


const pEl = document.querySelector('p');
var color = '';

function colorChange() {
    color = document.getElementById('colorPickerText').value;
    document.body.style.backgroundColor = color;
    pEl.innerText = color;
    
};

function colorChangeColor() {
    color = document.getElementById('colorPickerColor').value;
    document.body.style.backgroundColor = color;
    pEl.innerText = color;
}

function randomColor() {
    color = '#';
    const random = Math.random().toString(16).slice(2, 8);
    color += random;
    console.log(color)
    document.body.style.backgroundColor = color;
    pEl.innerText = color;
}