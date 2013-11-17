$(function() {
  $("#rails_lite").on("click", function(event) {
    // event.preventDefault();

    $("#rails-lite-iframe").removeClass("hide");
    $("#myModal").modal();
  });

  $("#active_record_lite").on("click", function(event) {
    event.preventDefault();
  });

  $("#bibliopile").on("click", function(event) {
    event.preventDefault();
  })
});
