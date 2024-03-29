const selectedOperation = document.getElementById("operations");
const inputText = document.getElementById("input-text");
const resultText = document.getElementById("result-text");
const fromInputText = document.getElementById("from-input-text");
const main = document.getElementById("main");

//Template for creating <br> with appending elements to DOM
const appendElements = (target, text, operation) => {
  target.append(text, document.createElement("br"));
  if (operation) {
    target.append(operation, document.createElement("br"));
  } else {
    target.append(inputText.value);
  }
};

const copyToClipboard = () => {
  const copyButton = document.createElement("button");
  copyButton.innerText = "Copy";
  copyButton.id = "copy-button";
  copyButton.onclick = () => {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(resultText.innerText.slice(7, -5).trim());
  };
  resultText.append(copyButton);
};

//Reseting input and clearing last operation chosed
const resetInputOperations = () => {
  fromInputText.innerText = "Input:"
  resultText.innerText = "Result:"
  document.getElementById("operations").value = "0";
};

//Operation functions
const allUpperCase = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", inputText.value.toUpperCase());
  }
  copyToClipboard();
};

const allLowerCase = () => {
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", inputText.value.toLowerCase());
  }
  copyToClipboard();
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
  copyToClipboard();
};

const capitalizeAllStrings = () => {
  if (inputText.value) {
    let strings = inputText.value.split(" ");
    let stringsArray = [];
    for (string in strings) {
      if (strings[string] != "") {
        stringsArray.push(
          strings[string][0].toUpperCase() + strings[string].slice(1)
        );
      } else {
        stringsArray.push(strings[string]);
      }
    }
    appendElements(fromInputText, "Input:");
    appendElements(resultText, "Result:", stringsArray.join(" "));
  }
  copyToClipboard();
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
};

const charactersCount = () => {
  let countCharacters = 0;
  if (inputText.value) {
    appendElements(fromInputText, "Input:");
    for (n in inputText.value) {
      if (inputText.value[n] !== " ") {
        countCharacters++;
      }
    }
    appendElements(resultText, "Result:", countCharacters);
  }
  copyToClipboard();
};

const wordsNumbersCount = () => {
  let countWords = 0;
  let countDigits = 0;
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (inputText.value) {
    let arrayFromInput = inputText.value.split(" ");
    for (n in arrayFromInput) {
      if (arrayFromInput[n][0]) {
        if (abc.includes(arrayFromInput[n][0].toLowerCase())) {
          countWords++;
        } else if (numbers.includes(arrayFromInput[n][0])) {
          countDigits++;
        }
      }
    }
    appendElements(fromInputText, "Input:");
    appendElements(
      resultText,
      "Result:",
      `Words count: ${countWords}  Numbers count: ${countDigits}`
    );
  }
  copyToClipboard();
};

const replaceSingleCharacter = () => {
  if (inputText.value) {
    //Creating form to get additional data from user
    const replaceForm = document.createElement("div");
    const inputTextValue = document.createElement("p");
    const whatToChange = document.createElement("input");
    const changeTarget = document.createElement("input");
    const sendButton = document.createElement("button");

    //Adding id's
    replaceForm.id = "replace-form";
    sendButton.id = "send-button";

    //Texts
    whatToChange.placeholder = "what to change";
    changeTarget.placeholder = "to what change";
    sendButton.innerText = "Send";

    //Putting all together
    inputTextValue.append(inputText.value);
    replaceForm.append(inputTextValue);
    replaceForm.append(whatToChange);
    replaceForm.append(changeTarget);
    replaceForm.append(sendButton);
    main.append(replaceForm);

    //Getting value to use it inside eventListener
    let input = inputText.value;

    //Listening to button events to execute operational function
    sendButton.addEventListener("click", () => {
      if (whatToChange.value && changeTarget.value) {
        appendElements(
          resultText,
          "Result:",
          input.replace(whatToChange.value, changeTarget.value)
        );
        replaceForm.style.display = "none";
      }
      copyToClipboard();
    });
    appendElements(fromInputText, "Input:");
  }
};

const replaceAllCharacters = () => {
  if (inputText.value) {
    //Creating form to get additional data from user
    const replaceForm = document.createElement("div");
    const inputTextValue = document.createElement("p");
    const whatToChange = document.createElement("input");
    const changeTarget = document.createElement("input");
    const sendButton = document.createElement("button");

    //Adding id's
    replaceForm.id = "replace-form";
    sendButton.id = "send-button";

    //Texts
    whatToChange.placeholder = "what to change";
    changeTarget.placeholder = "to what change";
    sendButton.innerText = "Send";

    //Putting all together
    inputTextValue.append(inputText.value);
    replaceForm.append(inputTextValue);
    replaceForm.append(whatToChange);
    replaceForm.append(changeTarget);
    replaceForm.append(sendButton);
    main.append(replaceForm);

    //Getting value to use it inside eventListener
    let input = inputText.value;

    //Listening to button events to execute operational function
    sendButton.addEventListener("click", () => {
      if (whatToChange.value && changeTarget.value) {
        const replaceText = new RegExp(whatToChange.value, "g");
        appendElements(
          resultText,
          "Result:",
          input.replace(replaceText, changeTarget.value)
        );
        replaceForm.style.display = "none";
      }
      copyToClipboard();
    });
    appendElements(fromInputText, "Input:");
  }
};

const removeWhitespaces = () => {
  appendElements(fromInputText, "Input:");
  appendElements(resultText,"Result:", inputText.value.split("").filter(i => i !== " ").join("")
  );
  copyToClipboard()
}

//Listening to operation selection
selectedOperation.addEventListener("change", () => {
  if (inputText.value) {
    resultText.innerText = "";
    fromInputText.innerText = "";
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
      case "Capitalize All Strings":
        capitalizeAllStrings();
        break;
      case "Vowels&Consonants Count":
        vowelConsonantCount();
        break;
      case "Characters Count":
        charactersCount();
        break;
      case "Words&Numbers Count":
        wordsNumbersCount();
        break;
      case "Replace Single Character":
        replaceSingleCharacter();
        break;
      case "Replace All Characters":
        replaceAllCharacters();
        break;
      case "Remove Whitespaces":
        removeWhitespaces();
        break;
    }
  }
});

//Listening to user input to clear previous operation selection
inputText.addEventListener("focus", () => {
  resetInputOperations()
})

//Selecting all input text in one click for convenience 
inputText.addEventListener("click", () => {
  inputText.select()
})