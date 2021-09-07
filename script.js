const startingText = [];
// get input
const initialText = document.getElementById("input-text");
let alteredText = document.getElementById("output-text");
const submit = document.getElementById("submit-button");

// console.log(initialText);
const textToTransform = initialText.value;

function transformText() {
    // let length = text.length;

    let alteredText = document.getElementById("output-text");

    let inputValue = initialText.value;

    let newText = inputValue.toUpperCase();

    console.log(newText);

    alteredText.innerHTML = newText;

    // let clearCaps = text.string.toLowerCase();

    // console.log(clearCaps);

    // for (let i = 0; i < inputValue.length; i++) {
    //     if (inputValue[i] >= 'a' && inputValue[i] <= 'z') {
    //         alteredText.push(String.fromCharCode(i) - 32);
    //     } else if (inputValue[i] >= 'A' && inputValue[i] <= 'Z') {
    //         alteredText.push(String.fromCharCode(i) + 32);
    //     }
    //     console.log(alteredText);
    // }
};

function getText() {
    let inputValue = initialText.value;
    console.log(inputValue);
}

submit.onclick = function handleClick() {
    console.log("click");
    event.preventDefault();
    getText();
    transformText();
};

// for (let i = 0; i < inputValue.length; i++) {
//     if (inputValue[i] >= 'a' && inputValue[i] <= 'z') {
//         alteredText.write(String.String.fromCharCode(str.charCodeAt(i) - 32)
//         );
//     } else if (inputValue[i] >= 'A' && inputValue[i] <= 'Z') {
//         alteredText.write(String.String.fromCharCode(str.charCodeAt(i) + 32)
//         );
//     }
//     console.log(alteredText);
// }