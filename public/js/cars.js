"use strict";
let group = 1
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  let carsHTML =
  carsJSON.map(car => {
    return `
    <div class="col-md-4 car">
      <h2>${car.Make}</h2>
      <p><strong>Model:</strong> ${car.Model}</p>
      <p><strong>Year:</strong> ${car.Year}</p>
    </div>
    `
  }).join("")

  return '<div class="row">' + carsHTML + '</div>'
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  group += 1
  $('#cars').append(formatCars(carsJSON))
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  let carsUrl = `http://mimeocarlisting.azurewebsites.net/api/cars/${group}/3`
  $.get(carsUrl, addCarsToDOM)
}
