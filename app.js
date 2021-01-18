let outputQuote = document.querySelector("#outputQuote");
let outputAuthor = document.querySelector("#outputAuthor");
let submitButton = document.querySelector("#btnSubmit");

// API source: https://breakingbadapi.com/documentation

// const serverUrl = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
const serverUrl = "https://www.breakingbadapi.com/api/quote/random";


function errorHandler(error)
{
    console.log("Error occured",error);
    alert("Server error! Try after sometime");
}
function btnClick()
{
    // console.log("Btn clicked:", inputValue);
    fetch(serverUrl)
    .then(response => response.json())
    .then(json => {
        let myQuote = json["0"].quote;
        let author = json["0"].author;
        console.log("Quote: ",myQuote);
        console.log("Author: ",author);
        outputQuote.innerText = myQuote;
        outputAuthor.innerText = "~ "+author;
    })
    .catch(errorHandler);
}

// window.addEventListener("load", btnClick);
submitButton.addEventListener("click", btnClick);

window.addEventListener('load', (event) => {
    btnClick();
  });