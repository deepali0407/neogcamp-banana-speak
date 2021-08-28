var btnTranslate = document.querySelector("#btn-Translate")
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL= "	https://api.funtranslations.com/translate/minion.json"

function constructURL(text){
   return serverURL + "?" + "text=" + text;
}


function errorHandler(){
    console.log("error occured",error);
    alert("Something wrong with server. Try Again after sometime");
}

function clickHandler(){

    var inputText = txtInput.value;

     fetch(constructURL(inputText))
     .then(response => response.json())
     .then(json => {
         var translatedText = json.contents.translated
         txtOutput.innerText= translatedText
        })
    }

btnTranslate.addEventListener("click", clickHandler);
