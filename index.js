document.getElementById('printButton').addEventListener('click', function() {
    var colorInput = document.getElementById('colorInput');
    var colorBox1 = document.getElementById('colorBox1');

    colorBox1.style.backgroundColor = colorInput.value;
});

document.getElementById('randomButton').addEventListener('click', function() {
    var colorBox2 = document.getElementById('colorBox2');

    colorBox2.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById('resetButton').addEventListener('click', function() {
    var colorBox1 = document.getElementById('colorBox1');
    var colorBox2 = document.getElementById('colorBox2');

    colorBox1.style.backgroundColor = 'white';
    colorBox2.style.backgroundColor = 'white';
});