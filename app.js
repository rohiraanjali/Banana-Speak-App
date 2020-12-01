var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured" , error);
    alert("something wrong with server ! Try again after sometime")

}

function clickHandler() {
    var inputText = txtInput.value; // taking input

    //calling server for processing
     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translateText = json.contents.translated;
         outputDiv.innerHTML = translatedText;
     })
     .catch(errorHandler)



}

btnTranslate.addEventListener("click" , clickHandler)
