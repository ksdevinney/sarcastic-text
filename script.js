const startingText = [];
// get input
const initialText = document.getElementById("input-text");
const alteredText = document.getElementById("output-text");
const submit = document.getElementById("submit-button");

// console.log(initialText);
const textToTransform = initialText.value;

function getText() {
    let inputValue = initialText.value;
    console.log(inputValue);
}

// function transformText(text) {
//     let length = text.length;

//     // let clearCaps = text.toLowerCase();

//     // console.log(clearCaps);

//     for (let i = 0; i < length; i++) {
//         if (text[i] >= 'a' && text[i] <= 'z') {
//             alteredText.write(String.String.fromCharCode(str.charCodeAt(i) - 32)
//             );
//         } else if (text[i] >= 'A' && text[i] <= 'Z') {
//             alteredText.write(String.String.fromCharCode(str.charCodeAt(i) + 32)
//             );
//         }
//         console.log(alteredText);
//     }
// };

submit.onclick = function handleClick() {
    console.log("click");
    event.preventDefault();
    getText();
    console.log(initialText);
    console.log(textToTransform);
    // transformText(initialText);
};