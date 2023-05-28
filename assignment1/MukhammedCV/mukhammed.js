$(document).ready(function() {
    $('#myButton').click(function() {
        $('#aboutMe').text('About me text was clicked and changed');
    });
    $('#moveToTheBottom').click(function() {
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    });
  
    $('.list-group-item').hover(function() {
      $(this).addClass('active');
    }, function() {
      $(this).removeClass('active');
    });
  });