<<<<<<< HEAD
$(document).ready(function () {
    $('#clicked1').click(function () {
        $("#car1").show();
    })
    $('#clicked2').click(function () {
        $("#car2").show();
    })
    $('#clicked3').click(function () {
        $("#car3").show();
    })
    $('#clicked4').click(function () {
        $("#car4").show();
    })
})
=======
$(document).ready(function() {
  $("#car").click(function() {
    $(".platinum").slideToggle("slow");
    $(".premium").hide();
    $(".gold").hide();
    $(".deluxe").hide();
  });
  $("#pick-up").click(function() {
    $(".platinum").slideUp();
    $(".premium").fadeIn("slow");
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
    $(".gold").hide();
    $(".deluxe").fadeToggle("slow");
  });
});
>>>>>>> 49c0c1e4a1145b3b56539b4bf7b95df936892042
