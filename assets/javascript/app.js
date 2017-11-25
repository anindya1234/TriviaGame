
$(document).ready(function() {

   	var number = 5;
	var question1,question2,question3;
	var answer;
	var question;
	var result=0;
	var intervalId;

//hide all elements till start is clicked
     $(".message").hide();
     $(".notice").hide();
     $(".refresh").hide();


//create timer
      function run() {
        intervalId = setInterval(decrement, 1000);
      }
//timer stops show results and refresh button
      function stop() {
      clearInterval(intervalId);
      $(".notice").show();
      $(".refresh").show();
      }
    //decrease timer by 1 every sec
      function decrement() {
      number--;
      $(".timer").html( number );

      if (number === 0) {
         getScore();
	            
        stop();
       }
      }

    
   

    
//on clicking start show the quiz questions and hide start button
        $(".start-button").click( function(){
           run();
          $(".message").show();
          $(".start-button").hide();
          }

        );

		function getScore(){
	       // Get the selected score 
        question1 = $("input[name='q1']:checked").val();
        question2 = $("input[name='q2']:checked").val();
        question3 = $("input[name='q3']:checked").val();
        check();
        //console.log(question1,question2,question3);
	   }
	   
	 
        //check correct answer and add to result counter  
		function check(){
		    if (question1 == "a") {
				result++;
			}
			if (question2 == "d") {
				result++;
			}
			if (question3 == "e") {
				result++;
			}
			console.log(result);
			console.log(question1,question2,question3);
			
			$(".result").append("Your score: "+result+"/3" );
	        
	        if (result === 0 || result === 1) {
				$("#image").append('<img src="assets/images/1.gif" height="200px" width="210px">');
			}
			if (result === 2 ) {
				$("#image").append('<img src="assets/images/2.gif" height="200px" width="210px">');
			}
           
			if (result === 3 ) {
				$("#image").append('<img src="assets/images/3.gif" height="200px" width="210px">');
			}
           






	    }
	
});