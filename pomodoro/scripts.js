var pomodoroID = null;
var recessID = null;
var supriseID = null;

var pomodoro = 25;
var recess = 5;
var endtime = 0;
var endrecess = 0;
var pausedAt = 0;
var paused = false;

function digit(number,i){
  switch(number){
    case 0:
      $('#' + i + ' > .row > .0').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.0').addClass('transparent');
      break;
    case 1:
      $('#' + i + ' > .row > .1').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.1').addClass('transparent');
      break;
    case 2:
      $('#' + i + ' > .row > .2').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.2').addClass('transparent');
      break;
    case 3:
      $('#' + i + ' > .row > .3').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.3').addClass('transparent');
      break;
    case 4:
      $('#' + i + ' > .row > .4').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.4').addClass('transparent');
      break;
    case 5:
      $('#' + i + ' > .row > .5').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.5').addClass('transparent');
      break;
    case 6:
      $('#' + i + ' > .row > .6').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.6').addClass('transparent');
      break;
    case 7:
      $('#' + i + ' > .row > .7').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.7').addClass('transparent');
      break;
    case 8:
      $('#' + i + ' > .row > .8').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.8').addClass('transparent');
      break;
    case 9:
      $('#' + i + ' > .row > .9').removeClass('transparent');
      $('#' + i + ' > .row').children().not('.9').addClass('transparent');
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
  console.log('starting');
  $('#pause').prop("disabled",false);
  endtime = $.now() + 60 * pomodoro * 1000;
  pomodoroID = setInterval(function(){
    if(endtime - $.now() <= 0){
      clearInterval(pomodoroID);
      startBreak();
    }
    document.getElementById('pomodoro').innerHTML = (formatTime(endtime - $.now()));
  }, 1000);
  $('#start').off('click');
  $('i').not('.fa-pause').off('click');
}

function pauseTimer(){
  if(paused) resumeTimer();
  else {
    paused = true;
    var remainingPomodoro = parseInt($('#pomodoro #minutes').html()) + (parseInt($('#pomodoro #seconds').html())/60);
    var remainingRecess = parseInt($('#recess #minutes').html()) + (parseInt($('#recess #seconds').html())/60);
    if (remainingPomodoro > 0) pomodoro = remainingPomodoro;
    else pomodoro = remainingRecess;

    if(pomodoroID !== null) clearInterval(pomodoroID);
    if(recessID !== null) clearInterval(recessID);
    document.getElementById('pause').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    $('#pause').removeClass('pause');
    $('#pause').addClass('play');
    console.log('pausing');
  }
}
function resumeTimer() {
  if(!paused) pauseTimer();
  else {
    paused = false;
    console.log('resuming');
    endtime += ($.now() - pausedAt);
    document.getElementById('pause').innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    $('#pause').addClass('pause');
    $('#pause').removeClass('play');
    startTimer();
  }
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

  getDigits(0,0);
  document.getElementById('pomodoro').innerHTML = (pomodoro);
  document.getElementById('recess').innerHTML = (recess);
  document.getElementById('pause').innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

  endtime = $.now() + 60 * pomodoro * 1000;
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
  getDigits(0,0);
  document.getElementById('pomodoro').innerHTML = (pomodoro);
  document.getElementById('recess').innerHTML = (recess);



  $('#pause').prop("disabled",true);
  $('i').not('#pause').on('click', changeTime);
  $('#start').on('click', function(){
     endtime = $.now() + 60 * pomodoro * 1000;
     startTimer();
  });
  $('#reset').on('click', reset);
  $('.play').on('click', resumeTimer);
  $('.pause').on('click', pauseTimer);
});
