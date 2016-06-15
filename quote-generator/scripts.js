quotes = [
  ["Edward Gibbon", "Religion is regarded by the common people as true, by the wise as false, and by the rulers as useful. [adapted]"],
  ["Epicurus", "Is god willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God?"],
  ["Sam Harris",    "George Bush says he speaks to god every day, and Christians love him for it. If George Bush said he spoke to god through his hair dryer, they would think he was mad. I fail to see how the addition of a hair dryer makes it any more absurd."],
  ["Bertrand Russell", "And if there were a god, I think it very unlikely that he would have such an uneasy vanity as to be offended by those who doubt his existence."],
  ["Anonymous", "Give a man a fish and he will eat for a day; teach a man to fish and he will eat for a lifetime; give a man religion and he will die praying for a fish."],
  ["Blaise Pascal", "Men never commit evil so fully and joyfully as when they do it for religious convictions."],
  ["Mark Twain", "It's easier to fool people than to convince them that they have been fooled."],
  ["Don Hirschberg", "Calling Atheism a religion is like calling bald a hair color."],
  ["John Buchan", "An atheist is a man who has no invisible means of support."],
  ["Anonymous", "You know your god is man-made when he hates all the same people you do."],
  ["Ferdinand Magellan", "The church says the earth is flat, but I know that it is round, for I have seen the shadow on the moon, and I have more faith in a shadow than in the church."],
  ["George Bernard Shaw", "The fact that a believer is happier than a skeptic is no more to the point than the fact that a drunken man is happier than a sober one."],
  ["Carl Sagan", "Extraordinary claims require extraordinary evidence."],
  ["Chapman Cohen", "Gods are fragile things; they may be killed by a whiff of science or a dose of common sense."],
  ["Graham Chapman", "The universe itself keeps on expanding and expanding</li><li>In all of the directions it can whizz</li><li>As fast as it can go, at the speed of light, you know,</li><li>Twelve million miles a minute, and that's the fastest speed there is.</li><li>So remember, when you're feeling very small and insecure,</li><li>How amazingly unlikely is your birth,</li><li>And pray that there's intelligent life somewhere up in space,</li><li>'Cause there's bugger all down here on Earth.</li></ul>"],
  ["Henny Youngman", "I once wanted to become an atheist, but I gave up - they have no holidays"],
  ["Keira Knightley", "If only I wasn't an atheist, I could get away with anything. You'd just ask for forgiveness and then you'd be forgiven. It sounds much better than having to live with guilt."],
  ["Emma Thompson", "I'm an atheist; I suppose you can call me a sort of libertarian anarchist. I regard religion with fear and suspicion. It's not enough to say that I don't believe in God. I actually regard the system as distressing: I am offended by some of the things said in the Bible and the Koran, and I refute them."],
  ["Seth MacFarlane", "It's like the civil rights movement. There have to be people who are vocal about the advancement of knowledge over faith."],
  ["Katharine Hepburn", "I'm an atheist, and that's it. I believe there's nothing we can know except that we should be kind to each other and do what we can for each other."],
  ["Voltaire", "The first clergyman was the first rascal who met the first fool."],
  ["Robert G. Ingersoll", "Why should I allow that same God to tell me how to raise my kids, who had to drown His own?"]
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
    $("#quote").html("<div class='quote-content'><ul><li><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br><div class='credit'> - " + quote[0] + "</ul></div>");
  }
  else {
    $("#quote").html("<div class='quote-content'><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br><div class='credit'> - " + quote[0] + "</div>");
  }

  $("#generate").on("click",function(){
    var random = Math.floor(Math.random() * quotes.length);
    var quote = quotes[random];
    if(random==14) {
      $("#quote").html("<div class='quote-content'><ul><li><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br><div class='credit'> - " + quote[0] + "</ul></div>");
    }
    else {
      $("#quote").html("<div class='quote-content'><div class='first'>" + quote[1].slice(0,1) + "</div>" + quote[1].slice(1) + "</div><br><br><div class='credit'> - " + quote[0] + "</div>");
    }
  });
  
});
