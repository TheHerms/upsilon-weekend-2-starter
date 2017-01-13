$(function(){

}
$('button').on('click',function() {


});


  function() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(response){

        response.forEach(function(person) {

        }
        console.log(data);
      }
    });
});
function appendDom(person) {
  var $personDiv = ('<div class="person"></div>');
  $personDiv.append('<p>'+ person.name +'</p>');
  $personDiv.append('<p>' +person.githubUserName+ '</p>');
  $personDiv.append('<p>' + person.shoutout + '</p>');

  $('#classSlideShow')append($personDiv);
}
