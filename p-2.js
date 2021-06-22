// Q2: Create a function that returns a list element (<li>) HTML 
// use this function to create an ordered list HTML structure of numbers from 
// 1-30 without breaking the template string invocation i.e. usage of += is disallowed.

function makeOrderList(array) {
    var ol = document.createElement("ol");
      for (var i = 1; i <= 30; i++) {
       var li = document.createElement ("li");
        ol.appendChild (li);
      }
      return ol;
  }