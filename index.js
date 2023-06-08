

function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const heightInches = (height * 12);
    const bmi = weight / (heightInches * heightInches) * 703;
    document.getElementById("result").innerHTML = bmi.toFixed(2);
    const resultContainer = document.querySelector('.result-container');
    resultContainer.style.display = 'block';
    resultContainer.classList.remove('reveal');
    setTimeout(function() {resultContainer.classList.add('reveal');}, 10);
  
  
    // Update color zone and arrow
  const colorZone = document.querySelector('.color-zone');
  const arrow = document.querySelector('.arrow');
  
  if (bmi < 18.5) {
    resultContainer.classList.remove('green-zone', 'yellow-zone');
    resultContainer.classList.add('red-zone');
    arrow.style.marginLeft = 'calc(' + (bmi / 18.5) * 20 + '% - 5px)';
  } else if (bmi >= 18.5 && bmi <= 20) {
    resultContainer.classList.remove('red-zone', 'green-zone');
    resultContainer.classList.add('yellow-zone');
    arrow.style.marginLeft = 'calc(' + (bmi / 18.5) * 50 + '% - 5px)';
  } else if (bmi > 20 && bmi <= 24.9) {
    resultContainer.classList.remove('red-zone', 'yellow-zone');
    resultContainer.classList.add('green-zone');
    arrow.style.marginLeft = 'calc(' + (bmi / 18.5) * 70 + '% - 5px)';
  }



const calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculateBMI);
}

// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle checkbox element
    const toggleCheckbox = document.getElementById('toggle');
  
    // Get the navbar menu element
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.add('expanded');
  
    // Add an event listener to the toggle checkbox
    toggleCheckbox.addEventListener('change', function () {
      // Check if the toggle checkbox is checked
      if (toggleCheckbox.checked) {
        // Add the 'expanded' class to show the navbar menu
        navbarMenu.classList.add('expanded');
      } else {
        // Remove the 'expanded' class to hide the navbar menu
        navbarMenu.classList.remove('expanded');
      }
    });
  });
  