var pomodoroID = null;
var recessID = null;
var supriseID = null;

var pomodoro = 25;
var recess = 5;
var endtime = 0;
var endrecess = 0;

function digit(number,i){
  switch(number){
    case 0:
      $('#' + i + ' > .row > .0').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.0').addClass('transparent');
      break;
    case 1:
      $('#' + i + ' > .row > .1').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.1').addClass('transparent');
      break;
    case 2:
      $('#' + i + ' > .row > .2').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.2').addClass('transparent');
      break;
    case 3:
      $('#' + i + ' > .row > .3').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.3').addClass('transparent');
      break;
    case 4:
      $('#' + i + ' > .row > .4').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.4').addClass('transparent');
      break;
    case 5:
      $('#' + i + ' > .row > .5').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.5').addClass('transparent');
      break;
    case 6:
      $('#' + i + ' > .row > .6').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.6').addClass('transparent');
      break;
    case 7:
      $('#' + i + ' > .row > .7').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.7').addClass('transparent');
      break;
    case 8:
      $('#' + i + ' > .row > .8').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.8').addClass('transparent');
      break;
    case 9:
      $('#' + i + ' > .row > .9').removeClass('transparent');
      $('.clock > #' + i + ' > .row').children().not('.9').addClass('transparent');
      break;
    default:
      break;
  }
}

function drawDigits(time){
  for(i=0; i<time.length; i++){
    digit(time[i],i);
  }
}

function getDigits(minutes,seconds){
  // console.log(minutes + ', ' + seconds);
  var zero = parseInt(minutes/10);
  var one = minutes%10;
  var two = parseInt(seconds/10);
  var three = seconds%10;
  drawDigits([zero, one, two, three]);
}
function formatTime(time) {
  var seconds = Math.floor((time / 1000 ) % 60)
  var minutes = Math.floor((time / 1000 / 60) % 60);
  getDigits(minutes,seconds);
  if (seconds <= 0) seconds = 0;
  if (minutes <= 0) minutes = 0;
  return ('<span id="minutes">' + minutes + '</span>'
        + '<span id="seconds">' + seconds + '</span>');
}

function percentDone(time,endtime){
  return time*100000/endtime;
}

function startTimer(){
  endtime = $.now() + 60 * pomodoro * 1000;
  pomodoroID = setInterval(function(){
    if(endtime - $.now() <= 0){
      clearInterval(pomodoroID);
      startBreak();
    }
    document.getElementById('pomodoro').innerHTML = (formatTime(endtime - $.now()));
  }, 1000);
  $('#start').off('click');
  $('i').off('click');
}

function startBreak(){
  endrecess = $.now() + 60 * recess * 1000;
  recessID = setInterval(function(){
    if(endrecess - $.now() <= 0){
      clearInterval(recessID);
      reset();
    }
    else document.getElementById('recess').innerHTML = (formatTime(endrecess - $.now()));
  }, 1000);
}

function reset(){
  pomodoro = 25;
  recess = 5;
  clearInterval(pomodoroID);
  clearInterval(recessID);

  document.getElementById('pomodoro').innerHTML = (pomodoro);
  document.getElementById('recess').innerHTML = (recess);

  $('#start').on('click', startTimer);
  $('i').on('click', changeTime);
}

function changeTime() {
  switch(this.id){
    case 'p-up':
      if (pomodoro == 60) break;
      else{
        pomodoro += 1;
        document.getElementById('pomodoro').innerHTML = (pomodoro);
        break;
      }
    case 'p-down':
      if (pomodoro == 1) break;
      else{
        pomodoro -= 1;
        document.getElementById('pomodoro').innerHTML = (pomodoro);
        break;
      }
    case 'r-up':
      if (recess == 60) break;
      else{
        recess += 1;
        document.getElementById('recess').innerHTML = (recess);
        break;
      }
    case 'r-down':
      if (recess == 1) break;
      else{
        recess -= 1;
        document.getElementById('recess').innerHTML = (recess);
        break;
      }
  }
}


$(document).ready(function(){
  document.getElementById('pomodoro').innerHTML = (pomodoro);
  document.getElementById('recess').innerHTML = (recess);

  $('i').on('click', changeTime);
  $('#start').on('click', startTimer);
  $('#reset').on('click', reset);
});
