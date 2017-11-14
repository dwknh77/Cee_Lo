// $ (() => {
$(document).ready(function() {

$(document).on('click', '#enterButton', function() {
    let name = $('#enterScreenName').val();
    $('#enterScreenName').appendTo('body');
    let p2 = $('#p2').val();
    $('#p2').appendTo('body');

  });
// $(document).on('click', '#btn', function() {
$('#btn').click(function() {

  // const min = Math.ceil(min);
  // const max = Math.ceil(max);

  // const min = $("#min").val();
  // const max = $("#max").val();
  let $diceVal1 = [1, 2, 3, 4, 5, 6];
  let $diceVal2 = [1, 2, 3, 4, 5, 6];
  let $diceVal3 = [1, 2, 3, 4, 5, 6];
  // let $d1 = diceVal1[Math.round(Math.random() * diceVal1.length) + 1];
  // let $d2 = diceVal2[Math.round(Math.random() * diceVal2.length) + 1];
  // let $d3 = diceVal3[Math.round(Math.random() * diceVal3.length) + 1];
  let $d1 = $diceVal1[Math.round(Math.random() * 5) + 1];
  let $d2 = $diceVal2[Math.round(Math.random() * 5) + 1];
  let $d3 = $diceVal3[Math.round(Math.random() * 5) + 1];
  // const $d1 = $diceVal1[Math.round(Math.random() * 5) +1];
  // const $d2 = $diceVal2[Math.round(Math.random() * 5) +1];
  // const $d3 = $diceVal3[Math.round(Math.random() * 5) +1];
  console.log($d1);


  // (random).appendTo('.dice');
  // appendTo('#die1');
  // appendTo('body');
  // appendTo('<div>');
  $('#die1').append($d1);
  $('#die2').append($d2);
  $('#die3').append($d3);

  // function roll1(num) {
  if ($d1 == $d2 == $d3 && ($d1 != 0 && $d2 != 0 && $d3 != 0)) {
    alert("Trips!");
    console.log($d2);
    console.log($d3);
  } else if ($d1 == 0 && ($d2 == 0 && $d3 == 0)) {
    alert('Three 1s is an instant loss!');
  } else if ($d1 == 6 && ($d2 == 6 && $d3 == 6)) {
    alert('Three 6s is an instant win!');
  } else if ($d1 == $d2 && ($d2 != $d3)) {
    alert($d3);
    console.log($d3);
  } else if ($d2 == $d3 && ($d3 != $d1)) {
    alert($d1);
    console.log($d1);
  } else if ($d1 == $d3 && ($d3 != $d2)) {
    alert($d2);
    console.log($d2);
  } else if ($d1 != $d2 && ($d2 != $d3 && $d1 != $d3)) {
      alert('You lose this round.');
    // }
  }
  console.log($d3);
  console.log($diceVal1);
    });
      });
