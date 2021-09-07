const startingText = [];
// get input
const initialText = document.getElementById("input-text");
const submit = document.getElementById("submit-button");

function transformText() {

    let alteredText = document.getElementById("output-text");

    let inputValue = initialText.value;

    let lowerCase = inputValue.toLowerCase();

    console.log(lowerCase);

    alteredText.innerHTML = lowerCase;
};

submit.onclick = function handleClick() {
    console.log("click");
    event.preventDefault();
    transformText();
};