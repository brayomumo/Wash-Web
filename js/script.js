
// bussiness logic
function convertInputs(inputTime){
    this.inputTime=inputTime;
    this.convertedHours=Math.floor(inputTime/60);
      this.convertedToMinutes = Math.floor(inputTime%60);
    alert (  convertedHours + " HRS" + convertedToMinutes + " MINS");
    }


$(document).ready(function() {
    $("#car").click(function() {
      $(".platinum").fadeIn();
      $(".premium").hide();
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#pick-up").click(function() {
      $(".platinum").hide();
      $(".deluxe").fadeIn("slow");
      $(".gold").hide();
      $(".premium").hide();
      
    });
    $("#minivan").click(function() {
      $(".platinum").hide();
      $(".premium").fadeIn("slow");
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#van").click(function() {
      $(".platinum").hide();
      $(".premium").hide();
      $(".gold").fadeIn("slow");
      $(".deluxe").hide();
    });
  })