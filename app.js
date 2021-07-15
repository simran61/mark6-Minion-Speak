var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
   return serverURL + "?" + "text=" + input //here text is "key" and input is "value"
}

function errorHandler(error) {
   console.log("error occured", error)
   alert("Something wrong with the server, try again after some time")
}

function clickHandler(){
   //outputDiv.innerText = "fdgfhdfhdgdg "+ txtInput.value
   var inputText = txtInput.value; //taking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
   })
   .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)