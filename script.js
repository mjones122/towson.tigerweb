document.addEventListener('DOMContentLoaded', function () {
    var changeColorBtn = document.getElementById('changeColorBtn');
    var body = document.body;

    changeColorBtn.addEventListener('click', function () {
        // Change background color on button click
        body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('Reference and Feedback page loaded.');

    // Add event listeners or other functionality as needed
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add code to handle form submission
    });
});
