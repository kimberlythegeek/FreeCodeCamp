var channels = [
  'freecodecamp',
  'blizzheroes',
  'ronimogames',
  'callofduty',
  'aimilita_sou',
  'towelliee',
  'spb_89',
  'hydramist',
  'followgrubby',
  'miramisu',
  'loserfruit',
  'timthetatman',
  'nl_kripp',
  'kimberlythegeek',
  'comster404',
  'brunofin'
];
var htmlData = [];

function getChannelStatus(callback) {
  $(channels).each(function(i){
    $.getJSON('https://api.twitch.tv/kraken/streams/' + channels[i] + '?callback=?', function(data){
      if(data.stream){
        var viewing = (data.stream.viewers == 1) ? ' person viewing.' : ' people viewing.';
        $('tbody	').prepend('<tr class="channel online">' +
        '<td id="logo" class="col-xs-1"><img class="logo" src="' + data.stream.channel.logo + '"></td>' +
        '<td id="name" class="col-xs-2"><a href="' + data.stream.channel.url + '">' + data.stream.channel.display_name + '</a></td>' +
        '<td id="game" class="col-xs-3">Playing ' + data.stream.game + '</td>' +
        '<td id="viewers" class="col-xs-2">' + data.stream.viewers + viewing + '</td>' +
        '<td id="status" class="col-xs-4"><em>' + data.stream.channel.status + '</em></td></tr>');
      }
      else if(data.stream === null){
        $('tbody').append('<tr class="channel offline">' +
        '<td id="logo" class="col-xs-1"><i class="fa fa-twitch" aria-hidden="true"></i></td>' +
        '<td id="name" class="col-xs-2"><a href="https://www.twitch.tv/' + channels[i] + '">' + channels[i] + '</a></td>' +
        '<td id="game" class="col-xs-3">Offline</td>' +
        '<td id="viewers" class="col-xs-2"></td>' +
        '<td id="status" class="col-xs-4"></td></tr>');
      }
      else if (data.status == 422){
        $('tbody').append('<tr class="channel undefined">' +
        '<td id="logo" class="col-xs-1"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>' +
        '<td id="name" class="col-xs-2">' + channels[i] + '</td>' +
        '<td id="game" class="col-xs-3">User not found</td>' +
        '<td id="viewers" class="col-xs-2"></td>' +
        '<td id="status" class="col-xs-4"></td></tr>');
      }
      else {
        $('footer').append(JSON.stringify(data));
      }
    });
  });
}


$(document).ready(function(){

  getChannelStatus();

  $('#all').on('click',function(){
    $('tr').removeClass('hidden');
  });
  $('#online').on('click', function(){
    $('.offline').addClass('hidden');
    $('.undefined').addClass('hidden');
    $('.online').removeClass('hidden');
  });
  $('#offline').on('click', function(){
    $('.online').addClass('hidden');
    $('.undefined').addClass('hidden');
    $('.offline').removeClass('hidden');
  });
});
