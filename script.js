
//1. Exploring the window.location Object:

// console.log("hraf",window.location.href);
// console.log("prototocol",window.location.protocol);
// console.log("hostname",window.location.host);
// console.log("pathname",window.location.pathname);
// console.log("query",window.location.search);
// console.log("hash",window.location.hash);

// __________________________________________________________________________________________

//2. Redirecting with window.location.assign:

function newwindow(url){
  var win = window.location.assign(url);
}

// __________________________________________________________________________________________

//3. Refreshing the Page with window.location.reload:

function refreshPage(params) {
  let win2=window.location.reload()
}

// __________________________________________________________________________________________

//4. Navigating Back/Forward with history.back and history.forward:

function assign(url){
  window.location.assign(url);
}
function goForward()
  {
    window.history.forward();
  
  }
  function backWord() {
    window.history.back();
  }

// __________________________________________________________________________________________

//5. Jumping to Specific History Entries with history.go:

function goToHistory(num){
if(num%2===0)
window.history.forward();
else{
  window.history.back();
}
}

//___________________________________________________________________________________________________________________

//6. Opening New Windows/Tabs with window.open:

function openNewWindow(url){
if(url!=null)
  window.open(url,"","width=300,height=400")
else{
  window.open("https://www.w3schools.com/"," ","width=300,height=400")
}
}
































// __________________________________________________________________________________________




































 