

// mince
function showCoin(){
	let coin = document.getElementById('mince');
	let coinX = Math.floor(Math.random()* window.innerHeight);
	let coinY = Math.floor(Math.random()* window.innerWidth);

	coin.style.left = coinY +'px';
	coin.style.top = coinX +'px';	
}


// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// panáček 
function showHunter(){
	let hunter = document.getElementById('panacek');
	let hunterX = Math.floor(Math.random()* window.innerHeight);
	let hunterY = Math.floor(Math.random()* window.innerWidth);

	hunter.style.left = hunterY +'px';
	hunter.style.top = hunterX +'px';
}

function showPlayer() {
	showHunter()
	showCoin()
}


function pressArrow(udalost){
	document.getElementById('hudba').play();

	let hunter = document.getElementById('panacek');
	let hunterX =  window.getComputedStyle (hunter).getPropertyValue('top');
	let hunterY =  window.getComputedStyle (hunter).getPropertyValue('left');
	let currentHunterX = parseInt(hunterX);
	let currentHunterY = parseFloat(hunterY);
	let hunterHeight
	let hunterWidth

	let coin = document.getElementById('mince');
	let coinX =  window.getComputedStyle (coin).getPropertyValue('top');
	let coinY =  window.getComputedStyle (coin).getPropertyValue('left');
	let currentCoinX = parseInt(coinX);
	let currentCoinY = parseFloat(coinY);
	let coinHeight
	let coinWidth

    let width = window.innerWidth;
	let height = window.innerHeight;

	if (udalost.key=='ArrowLeft'&& hunterY >= '0px') {
				hunter.style.left = (currentHunterY - 10) + 'px';
				hunter.src = 'obrazky/panacek-vlevo.png';
				
			} else if (udalost.key=='ArrowRight' && currentHunterY < width){
			 	hunter.style.left = (currentHunterY + 10) + 'px';
				hunter.src = 'obrazky/panacek-vpravo.png';
				
			} else if (udalost.key=='ArrowUp'&& hunterX >= '0px'){
			 	hunter.style.top = (currentHunterX - 10) + 'px';
				hunter.src = 'obrazky/panacek-nahoru.png';
				
			} else if (udalost.key=='ArrowDown'&& currentHunterX < height ){
				hunter.style.top = (currentHunterX + 10) + 'px';
				hunter.src = 'obrazky/panacek.png';
				
			} else {
				alert('Pro ovládání panáčka použij šipky na klávesnici');
			}  
	
	if (!(currentHunterX === currentCoinX || currentHunterY === currentCoinY)){
				document.getElementById('zvukmince').play();
				showCoin();
				score();

				
	}

	console.log(currentCoinX,currentCoinY,currentHunterX,currentHunterY)
}

let gainCoin = 1
function score(){
	document.getElementById('score').innerText = gainCoin++
	if (gainCoin===6){
		document.getElementById('zvukfanfara').play();
		document.getElementById('winner').textContent = "Vyhrál jsi!"
}
}

	


