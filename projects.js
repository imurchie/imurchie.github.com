$(function() {
  $("#rails_lite").on("click", function(event) {
    event.preventDefault();
    $('#myModal').modal({
      remote: "https://github.com/imurchie/rails_lite"
    });
  });

  $("#active_record_lite").on("click", function(event) {
    event.preventDefault();
  });

  $("#bibliopile").on("click", function(event) {
    event.preventDefault();
  })
});
