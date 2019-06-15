
//hand0 is player 1 and hand1 is player 2
var activePlayer = 0, hand0, hand1, gamePlaying=true;






document.querySelector('.btn-play').addEventListener('click', function () {
    if(gamePlaying)

    {
    hand0 = Math.floor(Math.random() * 3);
    document.getElementById('player-' + activePlayer).src = 'hand-' + hand0 + '.png';


    nextPlayer();
    }

});

function nextPlayer() 
{
    if(gamePlaying)
    {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    hand1 = Math.floor(Math.random() * 3);
    document.getElementById('player-' + activePlayer).src = 'hand-' + hand1 + '.png';

    if (hand0 == 0) {
        if (hand1 == 1)
            document.getElementById('winner').textContent = 'Winner is Player2';
        else if (hand1 == 2)
            document.getElementById('winner').textContent = 'Winner is Player1';
    }
    else if (hand0 == 1) {
        if (hand1 == 0)
            document.getElementById('winner').textContent = 'Winner is Player1';
        else if (hand1 == 2)
            document.getElementById('winner').textContent = 'Winner is  Player2';
    }
    else if (hand0 == 2) {
        if(hand1 == 0)
        document.getElementById('winner').textContent = 'Winner is Player2';
        else if (hand1 == 1)
            document.getElementById('winner').textContent = 'Winner is  Player1';

    }
    else if(hand0===hand1)
    {
        document.getElementById('winner').textContent = 'Game is Draw!';
    }
    }
gamePlaying=false;
}


//rock is 0 , paper is 1 , scissors 2


