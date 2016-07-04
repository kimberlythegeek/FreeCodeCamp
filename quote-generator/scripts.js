//quotes[0]  = credit
//quotes[1] = quote
//quotes[2 - n] = 'tweetable' quote segments
//if quotes[i].length > 3, tweet each segment till end of array
quotes = [
  ["Edward Gibbon",
  "Religion is regarded by the common people as true, by the wise as false, and by the rulers as useful. [adapted]",
  "Religion is regarded by the common people as true, by the wise as false, and by the rulers as useful. - Edward Gibbon"],
  ["Epicurus",
  "Is god willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God?",
  "Is god willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent...",
  "...Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God? - Epicurus"],
  ["Sam Harris",
  "George Bush says he speaks to god every day, and Christians love him for it. If George Bush said he spoke to god through his hair dryer, they would think he was mad. I fail to see how the addition of a hair dryer makes it any more absurd.",
  "George Bush says he speaks to god every day, and Christians love him for it. If George Bush said he spoke to god through his hair dryer...",
  "...they would think he was mad. I fail to see how the addition of a hair dryer makes it any more absurd. - Sam Harris"],
  ["Bertrand Russell",
  "And if there were a god, I think it very unlikely that he would have such an uneasy vanity as to be offended by those who doubt his existence.",
  "And if there were a god, I think it very unlikely that he would have such an uneasy vanity ...",
  "...as to be offended by those who doubt his existence. - Bertrand Russell"],
  ["Anonymous",
  "Give a man a fish and he will eat for a day; teach a man to fish and he will eat for a lifetime; give a man religion and he will die praying for a fish.",
  "Give a man a fish and he will eat for a day; teach a man to fish and he will eat for a lifetime...",
  "...give a man religion and he will die praying for a fish. - Anonymous"],
  ["Blaise Pascal",
  "Men never commit evil so fully and joyfully as when they do it for religious convictions.",
  "Men never commit evil so fully and joyfully as when they do it for religious convictions. - Blaise Pascal"],
  ["Mark Twain",
  "It's easier to fool people than to convince them that they have been fooled.",
  "It's easier to fool people than to convince them that they have been fooled. - Mark Twain"],
  ["Don Hirschberg",
  "Calling Atheism a religion is like calling bald a hair color.",
  "Calling Atheism a religion is like calling bald a hair color. - Don Hirschberg"],
  ["John Buchan",
  "An atheist is a man who has no invisible means of support.",
  "An atheist is a man who has no invisible means of support. - John Buchan"],
  ["Anonymous",
  "You know your god is man-made when he hates all the same people you do.",
  "You know your god is man-made when he hates all the same people you do. - Anonymous"],
  ["Ferdinand Magellan",
  "The church says the earth is flat, but I know that it is round, for I have seen the shadow on the moon, and I have more faith in a shadow than in the church.",
  "The church says the earth is flat, but I know that it is round...",
  "...for I have seen the shadow on the moon, and I have more faith in a shadow than in the church. - Ferdinand Magellan"],
  ["George Bernard Shaw",
  "The fact that a believer is happier than a skeptic is no more to the point than the fact that a drunken man is happier than a sober one.",
  "The fact that a believer is happier than a skeptic is no more to the point...",
  "...than the fact that a drunken man is happier than a sober one. - George Bernard Shaw"],
  ["Carl Sagan",
  "Extraordinary claims require extraordinary evidence.",
  "Extraordinary claims require extraordinary evidence. - Carl Sagan"],
  ["Chapman Cohen",
  "Gods are fragile things; they may be killed by a whiff of science or a dose of common sense.",
  "Gods are fragile things; they may be killed by a whiff of science or a dose of common sense. - Chapman Cohen"],
  ["Graham Chapman",
  "The universe itself keeps on expanding and expanding</li><li>In all of the directions it can whizz</li><li>As fast as it can go, at the speed of light, you know,</li><li>Twelve million miles a minute, and that's the fastest speed there is.</li><li>So remember, when you're feeling very small and insecure,</li><li>How amazingly unlikely is your birth,</li><li>And pray that there's intelligent life somewhere up in space,</li><li>'Cause there's bugger all down here on Earth.</li></ul>",
  "The universe itself keeps on expanding and expanding, In all of the directions it can whizz. As fast as it can go...",
  "...at the speed of light, you know, Twelve million miles a minute, and that's the fastest speed there is...",
  "...So remember, when you're feeling very small and insecure, How amazingly unlikely is your birth, And pray that there's intelligent life...",
  "...somewhere up in space, 'Cause there's bugger all down here on Earth. - Graham Chapman, Monty Python's The Meaning of Life"],
  ["Henny Youngman",
  "I once wanted to become an atheist, but I gave up - they have no holidays.",
  "I once wanted to become an atheist, but I gave up - they have no holidays. - Henny Youngman"],
  ["Keira Knightley",
  "If only I wasn't an atheist, I could get away with anything. You'd just ask for forgiveness and then you'd be forgiven. It sounds much better than having to live with guilt.",
  "If only I wasn't an atheist, I could get away with anything. You'd just ask for forgiveness...",
  "...and then you'd be forgiven. It sounds much better than having to live with guilt. - Keira Knightley"],
  ["Emma Thompson",
  "I'm an atheist; I suppose you can call me a sort of libertarian anarchist. I regard religion with fear and suspicion. It's not enough to say that I don't believe in God. I actually regard the system as distressing: I am offended by some of the things said in the Bible and the Koran, and I refute them.",
  "I'm an atheist; I suppose you can call me a sort of libertarian anarchist. I regard religion with fear and suspicion...",
  "...It's not enough to say that I don't believe in God. I actually regard the system as distressing...",
  "...I am offended by some of the things said in the Bible and the Koran, and I refute them. - Emma Thompson"],
  ["Seth MacFarlane",
  "It's like the civil rights movement. There have to be people who are vocal about the advancement of knowledge over faith.",
  "It's like the civil rights movement. There have to be people who are vocal about the advancement of knowledge over faith. - Seth MacFarlane"],
  ["Katharine Hepburn",
  "I'm an atheist, and that's it. I believe there's nothing we can know except that we should be kind to each other and do what we can for each other.",
  "I'm an atheist, and that's it. I believe there's nothing we can know except...",
  "...that we should be kind to each other and do what we can for each other. - Katharine Hepburn"],
  ["Voltaire",
  "The first clergyman was the first rascal who met the first fool.",
  "The first clergyman was the first rascal who met the first fool. - Voltaire"],
  ["Robert G. Ingersoll",
  "Why should I allow that same God to tell me how to raise my kids, who had to drown his own?",
  "Why should I allow that same God to tell me how to raise my kids, who had to drown his own? - Robert G. Ingersoll"]
];

$(document).ready(function(){

  $(".rotate").textrotator({
    animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

  var random = Math.floor(Math.random() * quotes.length);
  var quote = quotes[random];
  if(random==14) {
    $("#quote").html("<div class='quote-content'><ul><li><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br>" +
    "<div class='tweet'><i class='fa fa-twitter' aria-hidden='true'></i></div><!--.tweet--><div class='credit'> - " + quote[0] + "</ul></div>");
  }
  else {
    $("#quote").html("<div class='quote-content'><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br>" +
    "<div class='tweet'><i class='fa fa-twitter' aria-hidden='true'></i></div><!--.tweet--><div class='credit'> - " + quote[0] + "</div>");
  }
  $(".fa-twitter").on("click", function(){

    $.ajax({
      url : "https://api.twitter.com/1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk",
        dataType : "jsonp",
        headers: { "Content-Type":"application/x-www-form-urlencoded","Accept": "*/*", "Connection": "close", "User-Agent": "OAuth gem v0.4.4","Authorization": "OAuth oauth_token=ACCESSTOKEN" },
        type : 'POST',
        contentType: "application/json",
        data : {"firstName" : "FirstName", "lastName" : "lastNAme", "email" : "abc@xyz.com"},
        beforeSend : function( xhr ) {
            xhr.setRequestHeader( "Authorization", "BEARER " + access_token );
        },
        success : function (data) {
          console.log(data);
        },
        error : function (data, errorThrown) {
          alert(3);
        }
    })
    // if quote requires more than one 'tweetable' segment, run till all segments are tweeted.
    // %20 - space, %23 - #, %40 - @
  //   if(quote.length > 3){
  //     for(i=2; i<quote.length; i++){
  //
  //     }
  //   }
  //   // else just print once
  //   else {
  //
  //   }
  });

  $("#generate").on("click",function(){
    var random = Math.floor(Math.random() * quotes.length);
    var quote = quotes[random];
    if(random==14) {
      $("#quote").html("<div class='quote-content'><ul><li><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br>" +
      "<div class='tweet'><i class='fa fa-twitter' aria-hidden='true'></i></div><!--.tweet--><div class='credit'> - " + quote[0] + "</ul></div>");
    }
    else {
      $("#quote").html("<div class='quote-content'><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br>" +
      "<div class='tweet'><i class='fa fa-twitter' aria-hidden='true'></i></div><!--.tweet--><div class='credit'> - " + quote[0] + "</div>");
    }
  });

});
