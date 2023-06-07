// Get the calculator's result input element
const result = document.getElementById('result');

// Add event listener to handle button clicks
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    // If a button is clicked
    if (clickedElement.tagName === 'BUTTON') {
        const buttonValue = clickedElement.textContent;
        
        // If the button is 'C', clear the result
        if (buttonValue === 'C') {
            result.value = '';
        }
        // If the button is '=', evaluate the expression
        else if (buttonValue === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        }
        // Otherwise, append the button's value to the result
        else {
            result.value += buttonValue;
        }
    }
});
