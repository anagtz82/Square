var btn = document.createElement("button");
btn.className = "btn1";
var text = document.createTextNode("Click Here");
btn.appendChild(text);

document.body.appendChild(btn);

btn.onclick = function() {
    createDiv();
};

function addRow() {
    var row = document.createElement("div");
    row.className = 'row1';
    row.id = "rowId";
    document.body.appendChild(row);
}
addRow();


var squares = [];

function createDiv(div) {
    var div = document.createElement('div');
    div.className = "square";
    div.id = squares.length;
    div.style.backgroundColor = 'black';
    div.style.height = '50px';
    div.style.width = '50px';
    div.style.margin = '10px';
    div.style.color = "white";
    div.addEventListener('mouseover', showNumber);
    div.addEventListener('mouseout', hideNumber);
    div.addEventListener('click', getRandomColor);
    div.addEventListener('dblclick', removeSquare);

    squares.push(div);

    document.getElementById('rowId').appendChild(div);


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        div.style.backgroundColor = color;
    };

    function removeSquare() {
        if (squares.length % 2 === 0) {
            console.log('remove the next box');
            console.log(div);
            div.nextElementSibling.remove();
        } else {
            console.log('remove the previous box!');
            div.previousElementSibling.remove();
        }
    };
};

function showNumber(e) {
    e.target.innerHTML = e.target.id;
}

function hideNumber(e) {
    e.target.innerHTML = "";
}

var square = document.getElementById('squares');
if (myElem === null) alert('does not exist!');