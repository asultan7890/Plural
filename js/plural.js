$(document).ready(function(){

  $("#add_text").keyup(function(evt){
      //adds new item on "enter" press
      if(evt.which === 13){

          //get input word
          var add_data = $("#add_text").val();

          //change word to character array
          var characters = [...add_data];

          //display plural word
          $('#list').prepend("<li>" +add_data+ " -> " +characters[0]+ "</li")

          //make text field blank
          $("#add_text").val("");
        }
      });
});
