// Tool Tip

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var textElem = document.getElementById("text");
var textArray = [
  "I'm Abdul Haseeb.",
  "I'm Front End Web Developer.",
  "I'm a Freelancer.",
];
var currentText = 0;

function changeText() {
  textElem.innerHTML = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}

changeText();
setInterval(changeText, 1000);
