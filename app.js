$(document).ready(function() {
// $ () ( {
  // $('#btn').click(function() {
  //   let min = $('#min').val(1);
  //   let max = $('#max').val(6);
  //
  //   if(!$.isNumeric(min) || !$.isNumeric(max))
  //   {
  //     $('#res').html("error");
  //   }
  // });


//   let iRandomNumber;
//   let rollDice;
//
//   rollDice = prompt('ready to foll?', 1);
//
//   for(i=1; i<rollDice; i++) {
//   iRandomNumber = Math.ceil(Math.random()*6);
//   document.appendTo('body');
// }

function $rollDice() {
  const die1 = document.getElementById('die1');
  const die2 = document.getElementById('die2');
  const die3 = document.getElementById('die3');
  const d1 = Math.floor(Math.random() * 6) + 1;
  const d2 = Math.floor(Math.random() * 6) + 1;
  const d3 = Math.floor(Math.random() * 6) + 1;
  const diceTotal = d1 + d2 + d3;
  die1.appendTo('body');
  die2.appendTo('body');
  die3.appendTo('body');
  d1.appendTo('body');
    d2.appendTo('body');
      d3.appendTo('body');
  // if(d1 == d2) {
  {
    console.log(d3);
    console.log(rollDice);
    console.log(die2);
  }
}
// console.log(d3);
// console.log(rollDice);
// console.log(die2);
  // die1.appendTo('body') = d1;
  // die2.appendTo('body') = d2;
  // die3.appendTo('body') = d3;
  // status.appendTo('body') = 'you rolled ' + ;
//
});

if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file!')};
//players
$( () => {
const $player1 = {
  name: "You",
  bankRoll: 20,
}
const $player2 = {
  name: "Leonard Washington",
  bankRoll: 20
}
const $dice = newArray ('#dice');
//math.random

function $rollDice(button, event) {
  let $die1 = document.getElementById('#die1');
  let $die2 = document.getElementById('#die2');
  let $die3 = document.getElementById('#die3');
  let $status = document.getElementById('#status');
  function rollDice() {
    rollDice=document.getElementById('#dice').value;
  }
  for (i=rollDice; i>0; i--) {
  let $d1 = Math.floor(Math.random() * 6) + 1;
  let $d2 = Math.floor(Math.random() * 6) + 1;
  let $d3 = Math.floor(Math.random() * 6) + 1;
}
  $die1.div = d1;
  $die2.div = d2;
  $die3.div = d3;
}
let $player = 1;

$('.roll').on('click', function(event) {
  (event.currentTarget === this);
let roll = $(this);
if(roll.hasId('X') || roll.hasId('O')) {
} else {
if($roll === 1) {
  roll.addClass('die').text('X');
  if (ifPlayerWins('X')) {
  } else {
  $player = 2
    }
} else {
  square.addClass('die').text('O');
  if (ifPlayerWins('O')) {
} else {
  $player = 1;
    }
  }
}

function ifPlayerWins(event) {
  if($('#die1').hasId(event) && $('#die2').hasId(event) && $('#die3').hasId(event)) {
    return true;
  } else if ($('#die1').hasId(event) && $('#die2').hasId(event) && $('#die3').hasId(event)) {
    return true;
  } else if ($('#die1').hasId(event) && $('#die2').hasId(event) && $('#die3').hasId(event)) {
    return true;

  } else if($('#die1').hasId(event) && $('#die2').hasId(event) && $('#die3').hasId(event)) {
      return true;
  } else if ($('#die2').hasId(event) && $('#die1').hasId(event) && $('#die3').hasId(event)) {
      return true;
  } else if ($('#die3').hasId(event) && $('#die2').hasId(event) && $('#die1').hasId(event)) {
      return true;

  } else if($('#die1').hasId(event) && $('#die3').hasId(event) && $('#die2').hasId(event)) {
        return true;
  } else if ($('#die3').hasId(event) && $('#die1').hasId(event) && $('#die2').hasId(event)) {
        return true;

  } else {
    return false;
  };
};
});
});






$( () => {
  alert(Math.random());
  const $dice = $('.dice');
  const $die1 = $('#die1');
  const $die2 = $('#die2');
  const $die3 = $('#die3');
  //const $rollDice = $('#rollDice');

  let counter = 6;

  const $rollDice = () => {
    $rollDice.random();

    for (let i = 0; i < 6; i++) {
      const $rollDice = '.dice' + Math.floor(Math.random() * 6) + 1;
      const $dice = $('.dice');
      // $square.addClass('square');
      // $square.css('background-color', randHex);
      //this is event listener for each square's click event
      $rollDice.on('click', $dice.random);
      $rollDice.append($dice.random);
      alert(Math.random($dice));
      console.log($rollDice);
      console.log($dice);

      //setInterval, anonymous function
      // if (i < 150) {
      //   let interval = setInterval(() => {
      //     $colorPalette.append($square);
      //   }, counter);
        if (i < 6) {
          setTimeout(() => {
            $rollDice.append($dice);
          }, counter);
      //   counter += 100;
      // } else {
      // clearInterval(interval);
      counter += 6;

    // } else {
    // SetTimout(interval);
      }
    }
  }
  const $rollDiceee = (event) => {
    console.log($(event));


    const $dice = $('<div>');

  $rollDiceee.append($dice);
$rollDiceee.on('click', rollDiceee);

  $rollDiceee();
}
});
