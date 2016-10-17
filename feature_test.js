var assert = require('assert');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

function reqListener () {
  console.log(this.responseText);
}

var test = {

 serverRunning: function() {
  console.log("hi");
  oReq.open("GET", "http://www.example.org/example.txt");
  oReq.send();
}

};

test.serverRunning()

assert(test.serverRunning);  // OK

// assert(false, 'it\'s false');
