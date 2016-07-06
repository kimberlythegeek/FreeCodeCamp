var answer = 0;

function calculateInput(input){
  input = input.replace(/Ans/g, answer);
  if(input.match(/[^0-9\%\*\/\+\^\(\)\.\-]/g) !== null){
    // flash();
    $('#calculate').addClass('red');
  }
  else{
    answer = eval(input);
    $('#calculate').val(eval(input));
  }
}

function inputKeys(id){

}

$(document).ready(function(){

  //remove focus after click
  $(".btn").mouseup(function(){
    $(this).blur();
  });

  $('html').keyup(function(k){
      if(k.keyCode == 13){
           calculateInput($('#calculate').val());
      }
      else inputKeys(String.fromCharCode(k.keyCode));
  });

  $('.btn').on('click', function(){
    $('#calculate').removeClass('red');
    switch(this.id){
      case 'AC':
        $('#calculate').val('');
        break;

      case 'CE':
        $('#calculate').val(function(index, value){
          if (value.substr(value.length-3,value.length) === 'Ans') return value.substr(0,value.length-3);
          else return value.substr(0, value.length-1);
        });
        break;

      case '=':
        calculateInput($('#calculate').val());
        break;

      default:
        $('#calculate').val($('#calculate').val() + this.id);
        break;
    }
  });
});


// switch(this.id){
//   case 'AC':
//     $('#calculate').val('');
//     break;
//
//   case 'CE':
//     $('#calculate').val(function(index, value){
//       if (value.substr(value.length-3,value.length) === 'Ans') return value.substr(0,value.length-3);
//       else return value.substr(0, value.length-1);
//     });
//     break;
//
//   case '=':
//     else calculateInput(value);
//     break;
//
//   default:
//     $('#calculate').val($('#calculate').val() + this.id);
//     break;
// }
