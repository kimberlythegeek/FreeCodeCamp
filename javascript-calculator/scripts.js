$(document).ready(function(){

  $('.btn').on('click', function(){
    switch(this.id){
      case 'AC':
        break;
      case 'CE':
        break;
      case '=':
        break;
      default:
        $('#calculate').val($('#calculate').val() + this.id);
        break;
    }
  });
});
