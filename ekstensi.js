// Toggle navbar on click
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarContent = document.getElementById('navbarSupportedContent');

navbarToggler.addEventListener('click', () => {
    navbarContent.classList.toggle('show'); // Toggle the 'show' class to display/hide the navbar
});

// Form validation on submit
document.querySelector('form').addEventListener('submit', (e) => {
    const emailInput = document.getElementById('exampleInputEmail1');
    const namaInput = document.getElementById('exampleInputPassword1');

    // Validate email and name; prevent form submission if invalid
    if (!validateEmail(emailInput.value) || !validateName(namaInput.value)) {
        e.preventDefault(); // Prevent form submission
        alert('Harap isi email dan nama dengan benar!'); // Alert message for invalid inputs
    }
});

// Function to validate email format
const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
    return emailPattern.test(email); // Return true if valid
};

// Function to check if name is not empty
const validateName = (name) => {
    return name.trim() !== ''; // Return true if name is not empty
};

// Highlight food items on hover
const foodItems = document.querySelectorAll('.food-item');

foodItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#e0f7fa'; // Highlight color on mouse enter
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = ''; // Reset color on mouse leave
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target
        }
    });
});

// Calculate total reviews from the table and display alert
const updateTotalReviews = () => {
    const reviewCells = document.querySelectorAll('.insights-table tbody tr td:nth-child(3)');
    let total = 0;

    reviewCells.forEach(cell => {
        const cellValue = parseInt(cell.textContent.replace(',', '')) || 0; // Convert to number safely
        total += cellValue; // Accumulate total
    });

    alert(`Total Reviews: ${total}`); // Display total reviews in alert
};

// Call updateTotalReviews function when DOM content is fully loaded
document.addEventListener('DOMContentLoaded', updateTotalReviews);
