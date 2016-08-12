$(document).ready(function(){

  var canvas = document.getElementById("tictactoe");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(4, 4, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(108.5, 4, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(213, 4, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(4, 108.5, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(108.5, 108.5, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(213, 108.5, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(4, 213, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(108.5, 213, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(213, 213, 103, 103);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  ctx.closePath();
});
