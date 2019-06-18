$(document).ready(function() {
  $("#car").click(function() {
    $(".platinum").fadeIn();
    $(".premium").hide();
    $(".gold").hide();
    $(".deluxe").hide();
  });
  $("#pick-up").click(function() {
    $(".platinum").hide();
    $(".premium").fadeIn();
    $(".gold").hide();
    $(".deluxe").hide();
  });
  $("#minivan").click(function() {
    $(".platinum").hide();
    $(".premium").hide();
    $(".gold").fadeIn();
    $(".deluxe").hide();
  });
  $("#van").click(function() {
    $(".platinum").hide();
    $(".premium").hide();
    $(".gold").hide();
    $(".deluxe").fadeIn();
  });
});
