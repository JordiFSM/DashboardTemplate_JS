// Select the element with the class "menuToggle", which will be the button to toggle the menu.
const menuToggle = document.querySelector(".menuToggle");

// Select the element with the class "navigation", representing the navigation menu.
const navigation = document.querySelector(".navigation");

// Assign a function to the click event of the toggle menu button.
menuToggle.onclick = function() {
    // Toggle the 'open' class on the navigation element to show or hide the menu.
    navigation.classList.toggle('open');
}

// Select all elements with the class 'list', likely representing menu link elements.
const list = document.querySelectorAll('.list');

// Define the function to activate a link and deactivate others.
function activeLink() {
    // Remove the 'active' class from all link elements.
    list.forEach((item) => {
        item.classList.remove('active');
    });

    // Add the 'active' class only to the currently clicked link element.
    this.classList.add('active');
}

// Add a click event listener to each link element to activate the corresponding link.
list.forEach((item) => {
    item.addEventListener('click', activeLink);
});
