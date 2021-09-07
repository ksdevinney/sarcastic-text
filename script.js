// get input
const initialText = document.getElementById("input-text");
const submit = document.getElementById("submit-button");

function transformText() {

    // p element for new text
    let alteredText = document.getElementById("output-text");

    // text from input box- is .value really needed?
    let inputValue = initialText.value;

    // make it all lower case before transforming
    let lowerCase = inputValue.toLowerCase();

    let newText = '';

    for (let i = 0; i < lowerCase.length; i++) {
        const current = lowerCase[i];

        if(i % 2 === 0) {
            newText += current;
        } else {
            newText += current.toUpperCase();
        }
    }

    // put the new text on the page
    alteredText.innerHTML = newText;
};

submit.onclick = function handleClick() {
    console.log("click");
    event.preventDefault();
    transformText();
};