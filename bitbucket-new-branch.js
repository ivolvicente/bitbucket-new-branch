/**
 * Simple Extension CrossBowser to add some highlight when a new branch is created in a bitbucket repo
 * 
 * Disclaimer: Icon made by Freepik from www.flaticon.com 
 * Note: This is not the best or cleanest code, for now is just a tool for me
 * 
 * @author  Ivo Vicente <ivolvicente@gmail.com>
 * @version 1.0
 */

// Find Code
let codeElement = document.querySelector("code");

// Copy to clipboard button
let copyBtn = document.createElement("button");
copyBtn.setAttribute("class", "aui-button");
copyBtn.innerHTML = "Copy to Clipboard";
copyBtn.style.border = "solid thin orange";
copyBtn.style.borderRadius = "0px 3px 3px 0px";
copyBtn.onclick = copyToClipBoard;


// Textarea for select() method
let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("id", "gitCommand");
inputText.setAttribute("value", codeElement.textContent.trim());
inputText.style.width = "300px";
inputText.style.textAlign = "center";
inputText.style.border = "solid thin orange";
inputText.style.height = "32px";
inputText.style.fontWeight = "bold";
inputText.style.borderRadius = "3px 0 0 3px";


// Add copy to clipboard action
codeElement.innerText = "";
codeElement.appendChild(inputText);
codeElement.appendChild(copyBtn);

// Functions

/**
 * 
 */
function copyToClipBoard() {

  var copyTextarea = document.querySelector('#gitCommand');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    showToast('Copying to clipboard was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}

/**
 * 
 * @param {string} text 
 */
function showToast(text) {

  let options = {
    dir: "center",
    top: "60%",
    maxWidth: 400,
    font: 'Arial',
    fontSize: "13px",
    bold: false
  };

  aToast(options).show(text)
}