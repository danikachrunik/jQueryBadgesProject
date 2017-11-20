$(function() {
  $.ajax({
   url: 'https://www.codeschool.com/users/danika87.json',
   dataType: 'jsonp',
   success: function(response) {
     for(let course of response.courses.completed) {
       $.("#badges").append("<div class='course'></div>");
     }
   }
 });
});
