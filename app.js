// $ (() => {
//audio=Dipset Anthem
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/Dipset_Anthem.mp3');

    // audioElement.addEventListener('ended', function() {
    //     this.play();
    // }, false);


    $('#play').click(function() {
        audioElement.play();
    });

    $('#pause').click(function() {
        audioElement.pause();
    });


});

  //this allows the user to enter their screen name of choice
  $(document).on('click', '#enterButton', function() {
      let name = $('#enterScreenName').val();
  //add screen name to body of site
      $('#enterScreenName').appendTo('header');
  // $('#enterButton').click(function(){
        $("#enterButton").on("click", function() {
          $(this).hide();
          $("#firstText").hide("slow");
          $("#enterButton").hide("slow");
          return false;
        });
  });
  const $p1 = (function $p1() {
    let $d1 = Math.floor(Math.random() * 5) + 1;
    let $d2 = Math.floor(Math.random() * 5) + 1;
    let $d3 = Math.floor(Math.random() * 5) + 1;
    $('#die1').append($d1);
    $('#die2').append($d2);
    $('#die3').append($d3);

    // check player one rolls
    //1. when the same dice are rolled (with the exception of 1's and 6's), the user has 'Trips', a very strong roll
      if ($d1 == $d2 && $d1 == $d3 && ($d1 != 1 && $d1 != 6)) {
        alert("Trips!");
        console.log($d1);
        console.log($d2);
        console.log($d3);
        $p2()
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
        // $p2();
      } else if ($d2 == $d3 && ($d2 != $d1 && $d3 != $d1)) {
        alert("Your Point is: " + $d1);
        // $p2();
        console.log($d1);
        console.log($d2);
        console.log($d3);
      } else if ($d1 == $d3 && ($d1 != $d2 && $d3 != $d2)) {
        alert("Your Point is: " + $d2);
        // $p2();
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
  });

  let $p2 = (function $p2() {
      let $p2d1 = Math.floor(Math.random() * 5) + 1;
      let $p2d2 = Math.floor(Math.random() * 5) + 1;
      let $p2d3 = Math.floor(Math.random() * 5) + 1;
      $('#p2d1').append($p2d1);
      $('#p2d2').append($p2d2);
      $('#p2d3').append($p2d3);

  });

  $(document).on('click', '#btn', function() {
      $p1();
      $("#reset").click(function(){
        $(".dice").empty();
        $(".p2dice").empty();
      });
      // });


  //The following section applies code to every possible dice roll combo, and alerts with an explanation of what that roll means to the user

  //6. the user rolls 456, instant win (to be added).
  // } else if ($d1 == 4 && $d2 == 5 && $d3 == 6 || ($d1 == 5 && $d2 ==  && $d3 == 6 ) {
  //     alert('instant win!');

  //7. the user rolls 123, instant loses (to be added).


  });

// });





// });
// });
