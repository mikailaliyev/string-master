const selectedOperation = document.getElementById("operations");
const inputText = document.getElementById("input-text");
const resultText = document.getElementById("result-text");
const fromInputText = document.getElementById("from-input-text");
const main = document.getElementById("main");

//Template for creating <br> with appending elements to DOM
const appendElements = (target, text, operation) => {
  target.append(text);
  target.append(document.createElement("br"));
  if (operation) {
    target.append(operation);
  } else {
    target.append(inputText.value);
  }
};

//Reseting input and clearing last operation chosed
const resetInputOperations = () => {
  inputText.value = "";
  document.getElementById("operations").value = "0";
};

//Operation functions
const allUpperCase = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", inputText.value.toUpperCase());
  }
  resetInputOperations();
};

const allLowerCase = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", inputText.value.toLowerCase());
  }
  resetInputOperations();
};

const capitalize = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(
      resultText,
      "Result:",
      inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1)
    );
  }
  resetInputOperations();
};

const vowelConsonantCount = () => {
  if (inputText.value) {
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let countVowels = 0;
    let countConsonants = 0;
    for (input in inputText.value) {
      if (vowels.includes(inputText.value[input].toLowerCase())) {
        countVowels++;
      } else if (consonants.includes(inputText.value[input].toLowerCase())) {
        countConsonants++;
      }
    }

    appendElements(fromInputText, "Input:");
    appendElements(
      resultText,
      "Result:",
      `Vowels count: ${countVowels}   Consonants count: ${countConsonants}`
    );
  }
  resetInputOperations();
};

const charactersCount = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", inputText.value.length);
  }
  resetInputOperations();
};

const replaceCharacters = () => {
  if (inputText.value) {
    const replaceForm = document.createElement("div")
    replaceForm.id = 'replace-form'
    const whatToChage = document.createElement("input")
    const changeTarget = document.createElement("input")
    replaceForm.append(whatToChage)
    replaceForm.append(changeTarget)
    main.append(replaceForm)

    appendElements(fromInputText, "Input:");

    appendElements(resultText, "Result:", inputText.value.replace(changeTarget));
  }
  resetInputOperations();
};

//Listening to operation selection
selectedOperation.addEventListener("change", () => {
  if (inputText.value) {
    resultText.innerText = ""
    fromInputText.innerText = ""
    let operationText =
      selectedOperation.options[selectedOperation.selectedIndex].text;
    switch (operationText) {
      case "All letters UPPERCASE":
        allUpperCase();
        break;
      case "All letters lowercase":
        allLowerCase();
        break;
      case "Capitalize":
        capitalize();
        break;
      case "Vowels&Consonants count":
        vowelConsonantCount();
        break;
      case "Characters count":
        charactersCount();
        break;
      case "Replace Characters":
        replaceCharacters();
        break;
    }
  }
});
