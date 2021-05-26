
var scores = [0,0];
var roundScore = 0;
var activePlayer=0;

document.querySelector('.dice').style.display ='none';
document.querySelector('.btn-roll').addEventListener('click',function() {
	var dice = Math.floor(Math.random() * 6 ) + 1;
	var diceDOM = document.querySelector('.dice'); 
	diceDOM.style.display='block';
	diceDOM.src =  'dice-' + dice + '.JPG';

	if (dice > 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).innerHTML =  roundScore;
	}else{

		 activePlayer === 0 ? activePlayer = 1 :activePlayer =0;
		 roundScore = 0;
		 document.getElementById('current-0').innerHTML = '0';
		 document.getElementById('current-1').innerHTML = '0';
		 document.querySelector('.player-0-panel').classList.toggle('active');
		 document.querySelector('.player-1-panel').classList.toggle('active');
		 document.querySelector('.dice').style.display= 'none';
	}
}); 

document.querySelector('.btn-hold').addEventListener('click' , function() {
	  scores[activePlayer] += roundScore;
	  document.querySelector('#score-' + activePlayer).innerHTML=scores[activePlayer];
	 
	  if (scores[activePlayer]>= 100) {
	  	document.querySelector('#name-' + activePlayer).innerHTML = 'WINNER !';
	  	document.querySelector('.dice').style.display = 'none';
	  	document.querySelector('.player-'+ activePlayer +'-panel').classList.add('WINNER');
	  }else {

	   activePlayer === 0 ? activePlayer = 1 :activePlayer =0;
		 roundScore = 0;
		 document.getElementById('current-0').innerHTML = '0';
		 document.getElementById('current-1').innerHTML = '0';
		 document.querySelector('.player-0-panel').classList.toggle('active');
		 document.querySelector('.player-1-panel').classList.toggle('active');
		 document.querySelector('.dice').style.display= 'none';
	 }
});

document.querySelector('.btn-new').addEventListener('click' , function () {
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0 ;

	document.querySelector('.dice').style.display ='none';
	document.getElementById('score-0').innerHTML = '0';
	document.getElementById('score-1').innerHTML = '0';
	document.getElementById('current-0').innerHTML = '0';
	document.getElementById('current-1').innerHTML = '0';

	document.getElementById('name-0').innerHTML = 'player 1';
	document.getElementById('name-1').innerHTML = 'player 2';
})
  