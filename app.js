


// $ (() => {
$(document).ready(function() {
	// $diceImages = [
	// 	  {
	// 	    img: 'img/p1d1.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d2.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d3.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d4.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d5.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d6.png'
	// 	  }
	// 	]

//this allows the user to enter their screen name of choice
$(document).on('click', '#enterButton', function() {
    let name = $('#enterScreenName').val();
//add screen name to body of site
    $('#enterScreenName').appendTo('body');

    // $('#enterButton').click(function(){
      $("#enterButton").on("click", function() {
        $(this).hide();
        $("#firstText").hide("slow");
        $("#enterButton").hide("slow");
        return false;
      });    // $('#hide').click('#enterButton', function () {
    //   $('p').hide();
    //     alert("The paragraph is now hidden");
    //   });
  //   $(document).ready(function(){
  //     $("#hide").on('click', '#hide', function(){
  //         $(this).parents(".ex").hide("slow");
  //     });
  // });
    // });
      });
//add player 2 (not yet functional)
    // let p2 = $('#p2').val();
    // $('#p2').appendTo('body');

$(document).on('click', '#btn', function() {
	// $diceImages = [
	// 	  {
	// 	    img: 'img/p1d1.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d2.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d3.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d4.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d5.png'
	// 	  },
	// 	  {
	// 	    img: 'img/p1d6.png'
	// 	  }
	// 	]

//this creates a button that allows the user to roll 3 dice
// $('#btn').click()
//i want function to callBack
  // let roll1 =  {
	function changeImage(){
	        var image = document.getElementByClass("diceImg");
	        switch(Math.random()){
	        case 1 :
	            image.src = "p1d1.png";
	            break;
	        case 2 :
	            image.src = "p1d2.png";
	            break;
	        case 3:
	            image.src = "p1d3.png";
	            break;
	            // document.getElememtById("image_change_button").innerHTML = Math.random();
	        }
	    }



// let $randomDice = function () {
  let $d1 = Math.floor(Math.random() * 5) + 1;
  let $d2 = Math.floor(Math.random() * 5) + 1;
  let $d3 = Math.floor(Math.random() * 5) + 1;
  //this is designed to make the 3 dice roll randomly between 1-6
//   let $d1 = $diceImages[Math.floor(Math.random() * ($diceImages.length))];
//   let $d2 = $diceImages[Math.floor(Math.random() * ($diceImages.length))];
//   let $d3 = $diceImages[Math.floor(Math.random() * ($diceImages.length))];
// }
// var $getDiceValues = function() {
// 		$d1 = parseInt($('$diceImages').attr('src')[11]);
// 		$d2 = parseInt($('$diceImages').attr('src')[11]);
// 		$d3 = parseInt($('$diceImages').attr('src')[11]);

	// };

  // console.log($d1);
  // console.log($d2);
  // console.log($d3);





  //adds each of the random dice to site body
  $('#die1').append($d1);
  $('#die2').append($d2);
  $('#die3').append($d3);

  //function roll1(num) {

  //this section applies code to every possible dice roll combo, and alert with an explanation of what that roll means to the user

  //1. when the same dice are rolled (with the exception of 1's and 6's), the user has 'Trips', a very strong roll
  if ($d1 == $d2 && $d1 == $d3 && ($d1 != 1 && $d1 != 6)) {
    alert("Trips!");
    console.log($d1);
    console.log($d2);
    console.log($d3);


    //2. when the user rolls three 1's, it's an instant loss
  } else if ($d1 == 1 && ($d2 == 1 && $d3 == 1)) {
    alert('Three 1s is an instant loss!');
    console.log($d1);
    console.log($d2);
    console.log($d3);


    //3. when a user rolls three 6's, it's an instant win
  } else if ($d1 == 6 && ($d2 == 6 && $d3 == 6)) {
    alert('Three 6s is an instant win!');
    console.log($d1);
    console.log($d2);
    console.log($d3);


    //4. when a user rolls a pair and a single, the single is their 'Point'. The alert notifies them of their Point(will add Point to alert.)
  } else if ($d1 == $d2 && ($d1 != $d3 && $d2 != $d3)) {
    alert("Your Point is: " + $d3);
    console.log($d1);
    console.log($d2);
    console.log($d3);
  } else if ($d2 == $d3 && ($d2 != $d1 && $d3 != $d1)) {
    alert("Your Point is: " + $d1);
    console.log($d1);
    console.log($d2);
    console.log($d3);
  } else if ($d1 == $d3 && ($d1 != $d2 && $d3 != $d2)) {
    alert("Your Point is: " + $d2);
    console.log($d1);
    console.log($d2);
    console.log($d3);

// 5. the user has 3 chances to roll a pair/single, (or three 6's, or 456 (instant wins)..three 1's is instant loss). if that doesn't happen, user loses that round***(NEED TO LOOP THIS)***.(WORKS)
  } else if ($d1 != $d2 && ($d1 != $d3 && $d2 != $d3)) {
      alert('You lose this round.');
      console.log($d1);
      console.log($d2);
      console.log($d3);
  };

//6. the user rolls 456, instant win (to be added).
// } else if ($d1 == 4 && $d2 == 5 && $d3 == 6 || ($d1 == 5 && $d2 ==  && $d3 == 6 ) {
//     alert('instant win!');
//   }

//7. the user rolls 123, instant loses (to be added).


//meaningless console.logs to help identify what's working/isn't
  // $('#d1').empty();
  console.log($d1);
  console.log($d2);
  console.log($d3);

});
});




// let array = ['1', '2', '3'];
//
// console.log(array);
// array.length = [];
// console.log(array.length);
