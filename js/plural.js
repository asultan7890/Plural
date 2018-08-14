$(document).ready(function(){

  $("#add_text").keyup(function(evt){
      //adds new item on "enter" press
      if(evt.which === 13){

          //get input word
          var add_data = $("#add_text").val();
          add_data = add_data.toLowerCase();

          //change word to character array
          var word_array = [...add_data];

          //get string length
          var len = add_data.length;

          //initialize new word
          var new_word = add_data

          //if word ends in y
          if (word_array[len-1] == "y"){
            if ($.inArray((word_array[len-2]), ['a', 'e', 'i', 'o', 'u']) >= 0){
              new_word = add_data + 's';
            }
            else {
              new_word = add_data.substr(0, (len-1)) + "ies";
            }
          }

          //word ends in ch/sh
          else if (word_array[len-1] == 'h'){
            if ($.inArray((word_array[len-2]), ['c', 's']) >= 0){
              new_word = add_data + 'es';
            }
          }

          else if ((word_array[len-1] == 's') && (word_array[len-2] == 's')){
            new_word = add_data + 'es';
          }

          //word ends in f
          else if (word_array[len-1] == "f"){
            if (word_array[len-2] == 'l'){
              if ($.inArray((word_array[len-3]), ['a', 'e', 'o']) >= 0){
                new_word = add_data.substr(0, (len-1)) + "ves";
              }
            }
            else if ((word_array[len-2] == 'a') && (word_array[len-3] == 'e') && (word_array[len-4] == 'l')) {
              new_word = add_data.substr(0, (len-1)) + "ves";
            }
          }

          //word ends in fe
          else if ((word_array[len-1] == 'e') && (word_array[len-2] == 'f') && (word_array[len-3] == 'i')) {
            if ($.inArray((word_array[len-4]), ['n', 'l', 'w']) >= 0){
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
