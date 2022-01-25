document.addEventListener("DOMContentLoaded", function(){
    var toastElementList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElementList.map(function(element){
        return new bootstrap.Toast(element, {
          autohide: false
      });
  });
});