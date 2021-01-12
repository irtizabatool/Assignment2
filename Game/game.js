let gameState = 1;
    let scoreP1 = 0;
    let scoreP2 = 0;
    let count = 0;
    let tries = 5;
    let winner = " ";
    document.getElementById("submitguess").onclick = function(){
        let num = Math.round(Math.random()*100+1);
        let value = document.getElementById("guess").value;
        tries -= 1;
        if(num == 50 && value==="e")
        {
            count += 1;
            document.getElementById("display").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT AND NUMBER IS " + num + "</br>GUESSES LEFT :" + tries;
        }
        else if(num<50 && value==="l")
        {
            count += 1;
            document.getElementById("display").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT AND NUMBER IS " + num + "</br>GUESSES LEFT :" + tries;
        }
        else if(num>50 && value==="h")
        {
            count += 1;
            document.getElementById("display").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT AND NUMBER IS " + num + "</br>GUESSES LEFT :" + tries;
        }
        else
        {
            document.getElementById("display").innerHTML="YOUR GUESS IS WRONG AND THE NUMBER WAS "+ num +"</br>GUESSES LEFT :" + tries;
        }
       if(gameState === 1 && tries <= 0)
       {
           gameState = 2;
           scoreP1 = count;
           //tryP1 = tries;
           count = 0;
           tries = 5;
           document.getElementById("display").innerHTML="It is player 2's turn to guess";
       }
       else if(gameState === 2 && tries <= 0)
       {
           gameState=3;
           scoreP2=count;
           //tryP2=tries;
           count=0;
       }
       if(gameState === 3 && tries <= 0)
       {
           if(scoreP1 > scoreP2)
           {
               winner = "Player 1 is the Winner";
           }
           else if(scoreP1 < scoreP2)
           {
            winner = "Player 2 is the Winner";
           }
           else
           {
            winner = "Its a Draw";
           }
           document.getElementById("ui").innerHTML="Player 1's Score is : " + scoreP1 + "</br>Player 2's Score is : " + scoreP2 + "</br>" + winner;
           document.getElementById("top").innerHTML="Reload to play again</br>"+'<input type="button" value="Play Again" onclick="location.reload()">';
       } 
    }
    