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
      $(".premium").show();
      $(".gold").fadeIn("slow");
      $(".deluxe").hide();
    });
    $("#van").click(function() {
      $(".platinum").hide();
      $(".premium").hide();
      $(".gold").show();
      $(".deluxe").fadeIn("slow");
    });
  })