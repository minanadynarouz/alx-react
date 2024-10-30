const $ = require("jquery");
// Load the full build
const _ = require("lodash");

/* 
  This block of code adds multiple elements to the body of the document:
  - A paragraph for the dashboard header
  - A button for user interaction
  - A footer paragraph with copyright information
*/

let counter = 0;

function updateCounter() {
  counter++;
  $("#count").text(`${counter} clicks on the button`);
}

document.addEventListener("DOMContentLoaded", function () {
  $('body').append("<div id='logo'></div>");
  $('body').append("<p>Holberton Dashboard</p>");
  $('body').append("<p>Dashboard data for the students</p>");
  $('body').append("<button>Click here to get started</button>");
  $('body').append("<p id='count'></p>");
  $('body').append("<p>Copyright - Holberton School</p>");

  $("button").on('click', _.debounce(updateCounter, 500, { leading: true, trailing: false }));
});

