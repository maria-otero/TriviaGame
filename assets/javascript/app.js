$(document).ready(function(){
    
    // onclick events
    window.onload = function() {
        // Start de clock
        $('#start-game').on('click', triviaGame.start);
        // console.log(trivia[0].options.opt1);
    };
    
    // Array with all questions and answer options
    var  trivia = [{
        question: 'Which is the largest ocean?',
        options: {
            opt1: 'Atlantic',
            opt2: 'Indian',
            opt3: 'Arctic',
            opt4: 'Pacific'
            }
        }, {
        question: 'Which Kardashian do not have a baby?',
        options: {
            opt1: 'Khloe',
            opt2: 'Kim',
            opt3: 'Kendall',
            opt4: 'Kylie'
            }
        }, {
        question: 'What are the first three words of the bible?',
        options: {
            opt1: 'In the beginning...',
            opt2: 'There was nothing...',
            opt3: 'Love is everywhere...',
            opt4: 'In one moment...'
            }
        }, {
        question: 'Where is the smallest bone in the body?',
        options: {
            opt1: 'Ears',
            opt2: 'Smallest finger',
            opt3: 'Wrist',
            opt4: 'Elbow'
            }
        }, {
        question: 'Which is the only mammal that can’t jump?',
        options: {
            opt1: 'Elephant',
            opt2: 'Seal',
            opt3: 'Hedgenhog',
            opt4: 'Giraffe'
            }
        }, {
        question: 'Who cut Van Gogh’s ear?',
        options: {
            opt1: 'His neighbour',
            opt2: 'His wife',
            opt3: 'His brother',
            opt4: 'He did'
            }
        }];



    // Variable showTrivia will hold the setInterval when we start the slideshow
    var showTrivia;
    // triviaIndex will keep track of the index of the currently displaying question+options.
    var triviaIndex = 0;
    


    // This function will replace display whatever triviaIndex–-question+options–-is given.
    function displayTriviaSlide() {
        $("#question").text(trivia[triviaIndex].question);
        $("#option1-holder").text(trivia[triviaIndex].options.opt1);
        $("#option2-holder").text(trivia[triviaIndex].options.opt2);
        $("#option3-holder").text(trivia[triviaIndex].options.opt3);
        $("#option4-holder").text(trivia[triviaIndex].options.opt4);
        triviaGame.reset();
                
        if (triviaIndex === trivia.length - 1) {
            // triviaIndex = 0;
            triviaGame.stop();
            console.log('stoping game');
        } else {
            nextTriviaSlide();
        };
    };

    // Show next slide
    function nextTriviaSlide() {
        console.log('going to the next slide');
        // Increment triviaIndex by 1.
        triviaIndex++;
        // Use a setTimeout to run displayTriviaSlide after 1 second.
        setTimeout(displayTriviaSlide, 5000);
        // If the tirviaIndex is the same as the length of the image array, reset the count to 0.
      };




    var triviaGame = {
        time: 5,
        wins: 2,
        losses: 3,
        unanswer: 0,
        reset: function() {
                console.log('holi');
                triviaGame.time = 5;
                clearInterval(showTrivia);
                // Change the timer to "00:00."
                $('#timer').html('00:05');
                
        },

        start: function() {
                // I wanto to perform de triviaGame.count function (que convierte en segundos y minutos, y los pone en la pantalla) cada 1 segundo.
                counter = setInterval(triviaGame.count, 1000);
                // Put the question
                showTrivia = setInterval(nextTriviaSlide, 5000);

                displayTriviaSlide();
        },

        stop: function() {
                console.log('end game');
                clearInterval(counter);
                $('#timer').html('');
                $("#question").text('GAME END!');
                $("#option1-holder").text(this.wins);
                $("#option2-holder").text(this.losses);
                $("#option3-holder").text(this.unanswer);
                $("#option4-holder").text('');
        },

        count: function() {
                triviaGame.time--;
                console.log(triviaGame.time);
                // create a var that store our time counter, and convert sec into clock sec and minutes
                var converted = triviaGame.timeConverter(triviaGame.time);
                
                // Display this converted time to the user
                $('#timer').html(converted);
        },

        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
            }
        }
});

