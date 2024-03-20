// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  let radiusNumber = document.getElementById("radius-number").value

  // output
  document.getElementById("area-of-a-cicle").innerHTML =
    "The area of this circle is: " + (2 * Math.PI * radiusNumber) + "."
}
