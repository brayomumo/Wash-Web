$(document).ready(function() {
    $("#car").click(function() {
      $(".platinum").show();
      $(".premium").hide();
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#pick-up").click(function() {
      $(".platinum").hide();
      $(".premium").fadeIn("slow");
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#minivan").click(function() {
      $(".platinum").show();
      $(".premium").hide();
      $(".gold").fadeToggle("slow");
      $(".deluxe").hide();
    });
    $("#van").click(function() {
      $(".platinum").show();
      $(".premium").hide();
      $(".gold").hide();
      $(".deluxe").fadeToggle("slow");
    });
  })