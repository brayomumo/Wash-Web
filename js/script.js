$(document).ready(function() {
  $("#car").click(function() {
    $(".platinum").slideToggle("slow");
    $(".premium").hide();
    $(".gold").hide();
    $(".deluxe").hide();
  });
  $("#pick-up").click(function() {
    $(".platinum").slideUp();
    $(".premi.rowum").fadeIn("slow");
    $(".gold").hide();
    $(".deluxe").hide();
  });
  $("#minivan").click(function() {
    $(".platinum").hide();
    $(".premium").hide();
    $(".gold").slideToggle("slow");
    $(".deluxe").hide();
  });
  $("#van").click(function() {
    $(".platinum").hide();
    $(".premium").hide();
  })
})