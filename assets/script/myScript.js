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

// Get the button
var btnTop = document.getElementById("btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Number Container

function generateNumbers(start, end) {
  var container = document.getElementById("number-container");

  for (var i = start; i <= end; i++) {
    var numberElement = document.createElement("div");
    numberElement.textContent = i;
    container.appendChild(numberElement);
  }
}
