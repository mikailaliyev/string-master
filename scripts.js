const selectedOperation = document.getElementById("operations")
const inputText = document.getElementById("input-text")
const resultText = document.getElementById("result-text")

//Operation functions
const allUpperCase = () => {
    resultText.textContent = inputText.value.toUpperCase()
    inputText.value = ''
    selectedOperation.text = ''
}

const allLowerCase = () => {
    resultText.textContent = inputText.value.toLowerCase()
    inputText.value = ''
    selectedOperation.text = ''
}

const capitalize = () => {
    resultText.textContent = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1)
    inputText.value = ''
    selectedOperation.text = ''
}

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