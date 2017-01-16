var currentStudent = 0;
var displayedStudent = 0;

$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data) {
      console.log(data);
      var student=data[0];
      console.log(student);
      showStudent(student);



    $('.people').on('click', function() {
      var index = $(this).attr('id');
      console.log(currentStudent);

      showStudent(currentStudent);
    });

    $('#next').on('click', function() {
      console.log("Next button was clicked");
      $('.highlighted').removeClass('highlighted');
      if(currentStudent<15) {
        currentStudent = Number(currentStudent) + 1;
        var student=data[currentStudent]
        showStudent(student);
      } else {
        currentStudent = 0;
        var student=data[currentStudent]
        showStudent(student);
      }

    });

    $('#prev').on('click', function() {
      console.log("Prev button was clicked");
      $('highlighted').removeClass('highlighted');
      if(currentStudent>0) {
        currentStudent = Number(currentStudent) -1;
        var student=data[currentStudent]
        showStudent(student);
      } else {
        currentStudent = 16;
        showStudent(student);
      }

    });

    function showStudent(c) {
      // $.ajax({
        // type: "GET",
        // url: "/data",
        // success: function(data){
          $('.highlighted').removeClass('highlighted');
          console.log('GET /data returns', data);
          $('#stage').fadeOut('fast');
          $('#stage').empty();
          displayedStudent = c;
          //console.log(displayedStudent);
          $('#stage').fadeIn(2000);
          appendDom(displayedStudent);

          $('#'+ currentStudent).addClass('highlighted');
        // }
      // });
};

    function appendDom(student) {
      var $studentDiv = $('<div class="student"></div>');
      $studentDiv.append('<h2>' + student.name + '</h2>');
      $studentDiv.append('<p>' + student.githubUserName + '</p>');
      $studentDiv.append('<p>' + student.shoutout + '</p>');
      //console.log(person);
      $('#stage').append($studentDiv);
    };
  }
  });
});
