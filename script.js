function updateMessageBasedOnBackground() {
    const backgroundColor = window.getComputedStyle(document.querySelector('body')).backgroundColor;
    const messageElement = document.querySelector('p');

    if (backgroundColor === 'rgb(255, 0, 0)') { // Red
        messageElement.innerHTML = "Device is less than 320px in width.";
    } else if (backgroundColor === 'rgb(255, 165, 0)') { // Orange
        messageElement.innerHTML = "Device is between 320px and 480px in width.";
    } else if (backgroundColor === 'rgb(255, 255, 0)') { // Yellow
        messageElement.innerHTML = "Device is between 480px and 768px in width.";
    } else if (backgroundColor === 'rgb(0, 128, 0)') { // Green
        messageElement.innerHTML = "Device is between 768px and 992px in width.";
    } else if (backgroundColor === 'rgb(0, 0, 255)') { // Blue
        messageElement.innerHTML = "Device is between 992px and 1200px in width.";
    } else if (backgroundColor === 'rgb(128, 0, 128)') { // Purple
        messageElement.innerHTML = "Device is greater than 1200px in width.";
    } else {
        messageElement.innerHTML = "Something went wrong.";
    }
}

// Update on page load
updateMessageBasedOnBackground();

// Listen for screen size changes
window.addEventListener('resize', updateMessageBasedOnBackground);