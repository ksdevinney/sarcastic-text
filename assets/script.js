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

  let newText = "";

  let caps = false;

  for (let i = 0; i < lowerCase.length; i++) {
    const current = lowerCase[i];

    // test to make sure it's a letter
    if (/^[a-z]$/.test(current)) {
      if (!caps) {
          // if it's a letter, add to string as is
        newText += current;
      } else {
          // if not, capitalize
        newText += current.toUpperCase();
      }
      // change the boolean so caps can alternate
      caps = !caps;
    } else {
        // numbers, special chars, and spaces go as is
      newText += current;
    }
  }

  // put the new text on the page
  alteredText.innerHTML = newText;
}

submit.onclick = function handleClick() {
  event.preventDefault();
  transformText();
};
