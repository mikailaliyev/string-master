const selectedOperation = document.getElementById("operations")
const inputText = document.getElementById("input-text")
const resultText = document.getElementById("result-text")

//Listening to operation selection
selectedOperation.addEventListener("change", () => {
    let operationText = selectedOperation.options[selectedOperation.selectedIndex].text
    switch(operationText) {
        case "All letters UPPERCASE":
            allUpperCase();
            break;
        case "All letters lowercase":
            allLowerCase();
            break;
        case "Capitalize":
            capitalize();
            break;
    }
})