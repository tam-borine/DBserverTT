var assert = require('assert');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// oReq.onprogress = function () {
//   console.log('Should be LOADING', oReq.status);
// };

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);

function reqListener () {
  console.log(this.responseText);
}

var test = {

  makeRequest: function(){
    oReq.open("GET", "http://localhost:4000");
    oReq.send();
  },

  serverRunning: function() {
    return (oReq.status == 200);
  }

};

test.makeRequest();
assert.deepEqual(test.serverRunning(), true);  // OK
// assert(false, 'it\'s false');
