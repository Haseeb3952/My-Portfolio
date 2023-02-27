// Tool Tip

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var textElem = document.getElementById("text");
var textArray = [
  "I'm Abdul Haseeb.",
  "I'm Web Developer.",
  "I'm a Freelancer.",
];
var currentText = 0;

function changeText() {
  textElem.innerHTML = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}

changeText();
setInterval(changeText, 1000);

// Number Container

function generateNumbers(start, end) {
  var container = document.getElementById("number-container");

  for (var i = start; i <= end; i++) {
    var numberElement = document.createElement("div");
    numberElement.textContent = i;
    container.appendChild(numberElement);
  }
}
