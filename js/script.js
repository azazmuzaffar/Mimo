$(".open").on("click", function() {
    $(".request--access--pop--up").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".hide").on("click", function() {
    $(".request--access--pop--up").removeClass("active");
  });