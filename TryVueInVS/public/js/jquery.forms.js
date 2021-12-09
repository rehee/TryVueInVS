jQuery(document).ready(function () {
  // Reservation Form
  var reservationform = $('#reservationform');
  var reservationMessages = $('#message');
  $(reservationform).submit(function (e) {
    var formData = $(reservationform).serialize();
    console.log(formData);
    e.preventDefault();
  });
  // Contact Form
  var contactform = $('#contactform');
  var contactMessages = $('#message');
  $(contactform).submit(function (e) {
    $(contactMessages).slideUp(750);
    $(contactMessages).hide();
    e.preventDefault();
    var formData = $(contactform).serialize();
    var action = $(this).attr('action');
    $.post(action, $(contactform).serialize(),
      function (data) {
        if (data.match('success') != null) $('#contactform .form-group, #contactform .btn').slideUp('slow');
        if (data.match('success') != null) $('#email').val('');
      }
    ).done(function (response) {
      $(contactMessages).html(response).slideDown(400);
    })
  });
});