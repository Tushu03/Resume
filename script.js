const typingTexts = ["  Developer.", "  Fast Learner.", " Coder."];
const typingElement = document.getElementById('typing');
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < typingTexts[textIndex].length) {
        if (!typingElement.classList.contains('typing-cursor')) {
            typingElement.classList.add('typing-cursor');
        }
        typingElement.textContent += typingTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else {
        setTimeout(erase, 2000); // Wait before starting to erase
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 40); // Erasing speed
    } else {
        typingElement.classList.remove('typing-cursor'); // Remove cursor when erasing is done
        textIndex++;
        if (textIndex >= typingTexts.length) textIndex = 0;
        setTimeout(type, 200); // Next word typing speed
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, 1000); // Start typing effect after a delay
});


document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        // Check if the menu is already open
        if (menu.style.left === '0px') {
            menu.style.left = '-128px'; // Adjust this value to match your menu's hide position
            menuToggle.textContent = 'Menu'; // Change button text to Menu
        } else {
            menu.style.left = '0px'; // Adjust this value to match your menu's show position
            menuToggle.textContent = 'Close'; // Change button text to Close
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Select all menu labels
    var labels = document.querySelectorAll('.menu a');

    labels.forEach(function(label) {
        label.addEventListener('click', function() {
            // Remove 'active' class from all labels
            labels.forEach(function(lbl) { lbl.classList.remove('active'); });
            // Add 'active' class to the clicked label
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Select all menu labels
  const labels = document.querySelectorAll('.menu label');

  labels.forEach(label => {
    label.addEventListener('click', function() {
      // Add the 'label-clicked' class
      this.classList.add('label-clicked');

      // Remove the class after 200ms
      setTimeout(() => {
        this.classList.remove('label-clicked');
      }, 200);
    });
  });
});


