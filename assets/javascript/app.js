$(document).ready(function(){
    
    // onclick events
    window.onload = function() {
        // Start de clock
        $('#start-game').on('click', triviaGame.start);
    };
    
    
    
    // Array with all questions and answer options
    var trivia = [{
        question: 'Which is the largest ocean?',
        options: ['Atlantic', 'Indian', 'Arctic','Pacific'],
        rightAnswer: 'Pacific'
        }, {
        question: 'Which Kardashian do not have a baby?',
        options: ['Khloe', 'Kim', 'Kendall', 'Kylie'],
        rightAnswer: 'Kendall'
        }, {
        question: 'What are the first three words of the bible?',
        options: ['In the beginning...', 'There was nothing...', 'Love is everywhere...', 'In one moment...'],
        rightAnswer: 'In the beginning...'
        }, {
        question: 'Where is the smallest bone in the body?',
        options: ['Ears', 'Smallest finger', 'Wrist', 'Elbow'],
        rightAnswer: 'Ears'
        }, {
        question: 'Which is the only mammal that can’t jump?',
        options: ['Elephant', 'Seal', 'Hedgenhog', 'Giraffe'],
        rightAnswer: 'Elephant'
        }, {
        question: 'Who cut Van Gogh’s ear?',
        options: ['His neighbour', 'His wife', 'His brother', 'He did'],
        rightAnswer: 'He did'
        }];





    // Variable showTrivia will hold the setInterval when we start the slideshow
    var showTrivia;
    // triviaIndex will keep track of the index of the currently displaying question+options.
    var triviaIndex = 0;
    
    var triviaGame = {
        time: 5,
        wins: 2,
        losses: 3,
        unanswer: 0,
        reset: function() {
                triviaGame.time = 5;
                clearInterval(showTrivia);
                // Change the timer to "00:00."
                $('#timer').html('00:05');     
        },

        start: function() {
                // Put the question
                showTrivia = setInterval(triviaGame.nextSlide, 5000);
                // hide start button when the game start
                $('#start-game').hide();
                // start displaying questions+options
                triviaGame.displaySlide();
        },

        displaySlide: function () {
            // This function will display whatever triviaIndex–-question+options–-is given.
            
            // Dislay questions
            var displayQuestion = trivia[triviaIndex].question;
            $('#question').text(displayQuestion);

            // Display a box that contains all the buttoms with the answer options
            var displayBox = $('<div>');
            displayBox.addClass('row text-center');
            
            // Display answer options
            for(var i = 0; i < trivia[triviaIndex].options.length; i++) {
                //create a var that creates buttons
                var answerDiv = $('<div>');
                answerDiv.addClass('col-md-6');
                var answerButton = $('<button>');
                // put option text inside the button 
                var triviaAnswer = trivia[triviaIndex].options[i];
                answerButton.text(triviaAnswer);
                answerButton.addClass('optionText')
                answerButton.attr('data-value', triviaAnswer);
                answerDiv.append(answerButton);
                displayBox.append(answerDiv);
            }
            $('.jumbotron').html(displayBox);

              
            if (triviaIndex === trivia.length) {
                // triviaIndex = 0;
                triviaGame.stop();
                console.log('stoping game');
            } else {
                triviaGame.nextSlide();
            };

            triviaGame.reset();
        },

        nextSlide: function () {
                // Show next slide
                console.log('going to the next slide');
                // Increment triviaIndex by 1.
                triviaIndex++;
                // Use a setTimeout to run displaySlide after 1 second.
                setTimeout(triviaGame.displaySlide, 5000);
                // If the tirviaIndex is the same as the length of the image array, reset the count to 0.
        },

        userGuess: function () {
            // alert('click option!');
            ////////////
            // HELLLLPPPP
            ////////

        },

        stop: function() {
                console.log('end game');
                clearInterval(counter);
                // $('#timer').html('');
                // $("#question").text('GAME END!');
                // $("#option1-holder").text(this.wins);
                // $("#option2-holder").text(this.losses);
                // $("#option3-holder").text(this.unanswer);
                // $("#option4-holder").text('');
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

