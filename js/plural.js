$(document).ready(function(){

  $("#add_text").keyup(function(evt){
      //adds new item on "enter" press
      if(evt.which === 13){

          //get input word
          var add_data = $("#add_text").val();
          add_data = add_data.toLowerCase();

          //change word to character array
          var characters = [...add_data];

          //get string length
          var len = add_data.length;

          //initialize new word
          var new_word = add_data

          //if word ends in y
          if (characters[len-1] == "y"){
            if ($.inArray((characters[len-2]), ['a', 'e', 'i', 'o', 'u']) >= 0){
              new_word = add_data + 's';
            }
            else {
              new_word = add_data.substr(0, (len-1)) + "ies";
            }
          }

          //word ends in f
          else if (characters[len-1] == "f"){
            if (characters[len-2] == 'l'){
              if ($.inArray((characters[len-3]), ['a', 'e', 'o']) >= 0){
                new_word = add_data.substr(0, (len-1)) + "ves";
              }
            }
            else if ((characters[len-2] == 'a') && (characters[len-3] == 'e') && (characters[len-4] == 'l')) {
              new_word = add_data.substr(0, (len-1)) + "ves";
            }
          }

          //word ends in fe
          else if ((characters[len-1] == 'e') && (characters[len-2] == 'f') && (characters[len-3] == 'i')) {
            if ($.inArray((characters[len-4]), ['n', 'l', 'w']) >= 0){
              new_word = add_data.substr(0, (len-2)) + "ves";
            }
          }

          //every other word
          else {
            new_word = add_data + 's';
          }

          //display plural word
          $('#list').prepend("<li>" +add_data+ " -> " +new_word+ "</li");

          //make text field blank
          $("#add_text").val("");
        }
      });
});
