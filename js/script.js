// Get the button element with id "check-btn"
let checkBtn = document.getElementById("check-btn");

// Get the element with id "palindrome-word"
let palindromeWord = document.getElementById("palindrome-word");

// Add a click event listener to the button
checkBtn.addEventListener("click", function () {
    // Get the input value, trim leading/trailing spaces, and convert to lowercase
    let inputText = document.getElementById("text-input").value.trim().toLowerCase();

    // Get the result element where the output will be displayed
    let result = document.getElementById("result");

    // Check if the input field is empty and alert the user if it is
    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned text
    let reversedText = cleanedText.split("").reverse().join("");

    // Check if the cleaned text is the same as the reversed text
    if (cleanedText === reversedText) {
        // If they are the same, display that it is a palindrome
        result.innerHTML = `<span class="word">${inputText}</span> is a palindrome`;
    } else {
        // If they are not the same, display that it is not a palindrome
        result.innerHTML = `<span class="word">${inputText}</span> is not a palindrome`;
    }
});
