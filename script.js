window.onload = function() {
    // Button color change
    const button = document.getElementById('colorChangeButton');
    button.addEventListener('click', function() {
        const currentColor = button.style.backgroundColor;
        const newColor = currentColor === 'green' ? 'aqua' : 'green';
        button.style.backgroundColor = newColor;
    });

    // Greeting based on time
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    alert(greeting);

    // Basic calculator
    const num1 = document.getElementById('number1');
    const num2 = document.getElementById('number2');
    const addButton = document.getElementById('addButton');
    const resultDisplay = document.getElementById('result');

    addButton.addEventListener('click', function() {
        const sum = parseFloat(num1.value) + parseFloat(num2.value);
        resultDisplay.textContent = 'Result: ' + sum;
    });
}
