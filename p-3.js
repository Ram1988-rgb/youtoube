// Q3: Now only print the even numbers. Again, breaking the template string
// invocation is disallowed

function makeOrderList(array) {
    var ol = document.createElement("ol");
      for (var i = 1; i <= 30; i++) {
        if(i%2 == 0){
            var li = document.createElement ("li");
            ol.appendChild (li);
        }
      }
      return ol;
  }