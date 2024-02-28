document.addEventListener("DOMContentLoaded", function() {
    var user_Box = document.querySelector(".user_spanner");
    var Computer_box = document.querySelector(".computer_spanner");
    var userInput = document.querySelector(".userInput");
    var computerInput = document.querySelector(".computerInput");
    var arr = ["stone", "paper", "scissors"];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array; // Return the shuffled array
    }

    function getComputerDecision() {
        var shuffledArray = shuffleArray(arr);
        return shuffledArray[0];
    }

    var user_value;
    var user_score = 0;
    var computer_score = 0;

    document.querySelector(".stone").addEventListener("click", function() {
        user_value = "stone";
        computer_decision = getComputerDecision();
        checker();
    });

    document.querySelector(".paper").addEventListener("click", function() {
        user_value = "paper";
        computer_decision = getComputerDecision();
        checker();
    });

    document.querySelector(".sessiors").addEventListener("click", function() {
        user_value = "scissors";
        computer_decision = getComputerDecision();
        checker();
    });

    function checker() {
        if ((user_value === "stone" && computer_decision === "scissors") ||
            (user_value === "paper" && computer_decision === "stone") ||
            (user_value === "scissors" && computer_decision === "paper")) {
            user_score = user_score + 1;
            user_Box.innerText = user_score;
            userInput.innerText = user_value;
            computerInput.innerText = computer_decision;
            document.querySelector(".ArgumentAi_winnerHead").innerText = "YOU WON";
        } else if ((user_value === "stone" && computer_decision === "paper") ||
            (user_value === "paper" && computer_decision === "scissors") ||
            (user_value === "scissors" && computer_decision === "stone")) {
            computer_score = computer_score + 1;
            Computer_box.innerText = computer_score;
            userInput.innerText = user_value;
            computerInput.innerText = computer_decision;
            document.querySelector(".ArgumentAi_winnerHead").innerText = "Ai WON";
        } else if (user_value === computer_decision) {
            document.querySelector(".ArgumentAi_winnerHead").innerText = " MATCH DRAW ";
        }

        if (user_score === 5 || computer_score === 5) {
            message();
        }
    }

    function message() {
        if (user_score === 5) {
            document.querySelector(".UserWin_Message").style.display = "inline";
            document.querySelector(".Argument").style.display = "none";
            document.querySelector(".ArgumentAi_winner").style.display = "none";
            user_Box.innerText = 0;
            Computer_box.innerText = 0;
        } else {
            document.querySelector(".Ai").style.display = "inline";
            user_Box.innerText = 0;
            Computer_box.innerText = 0;
            document.querySelector(".Argument").style.display = "none";
            document.querySelector(".ArgumentAi_winner").style.display = "none";
        }
    }

    document.querySelector(".resetme").addEventListener("click", () => {
        user_Box.textContent = 0;
        Computer_box.innerText = 0;
        document.querySelector(".Ai").style.display = "none";
        document.querySelector(".UserWin_Message").style.display = "none";
        document.querySelector(".Argument").style.display = "none";
        document.querySelector(".ArgumentAi_winner").style.display = "none";
    });
});
