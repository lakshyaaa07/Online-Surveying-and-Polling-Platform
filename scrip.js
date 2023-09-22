// Add your JavaScript code here

// Example: Add option for survey
document.getElementById("addOption").addEventListener("click", function () {
    const optionsDiv = document.getElementById("options");
    const newOptionInput = document.createElement("input");
    newOptionInput.type = "text";
    newOptionInput.className = "option";
    newOptionInput.required = true;
    optionsDiv.appendChild(newOptionInput);
});

// Example: Add option for poll
document.getElementById("addPollOption").addEventListener("click", function () {
    const pollOptionsDiv = document.getElementById("pollOptions");
    const newPollOptionInput = document.createElement("input");
    newPollOptionInput.type = "text";
    newPollOptionInput.className = "pollOption";
    newPollOptionInput.required = true;
    pollOptionsDiv.appendChild(newPollOptionInput);
});

// Example: Handle form submission for survey
document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const question = document.getElementById("question").value;
    const options = Array.from(document.querySelectorAll(".option")).map(input => input.value);
    // Handle survey creation here (e.g., send data to server or display results)
});

// Example: Handle form submission for poll
document.getElementById("pollForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const pollQuestion = document.getElementById("pollQuestion").value;
    const pollOptions = Array.from(document.querySelectorAll(".pollOption")).map(input => input.value);
    // Handle poll creation here (e.g., send data to server or display results)
});
