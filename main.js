

// mince
function showCoin(){
	let coin = document.getElementById('mince');
	let coinH = document.getElementById('mince').height;
	let coinW = document.getElementById('mince').width; 

	let coinX = Math.floor(Math.random()* (window.innerHeight - coinH));
	let coinY = Math.floor(Math.random()* (window.innerWidth - coinW));

	coin.style.left = coinY +'px';
	coin.style.top = coinX +'px';	
}

// panáček 
function showHunter(){
	let hunter = document.getElementById('panacek');

	// výška a šířka obrázku je již přímo nalezitelná v obrázku - stačí .height/.width a načte to z obrázku samotného
	let hunterH = document.getElementById('panacek').height; 
	let hunterW = document.getElementById('panacek').width;

	let hunterX = Math.floor(Math.random()* (window.innerHeight - hunterH));
	let hunterY = Math.floor(Math.random()* (window.innerWidth - hunterW));

	hunter.style.left = hunterY +'px';
	hunter.style.top = hunterX +'px';
}

// začátek hry
function showPlayer() {
	showHunter();
	showCoin();
}

// pohyby panacka
function pressArrow(udalost){
	document.getElementById('hudba').play();

	let hunter = document.getElementById('panacek');
	let hunterX =  window.getComputedStyle(hunter).getPropertyValue('top');
	let hunterY =  window.getComputedStyle(hunter).getPropertyValue('left');
	let currentHunterX = parseInt(hunterX);
	let currentHunterY = parseFloat(hunterY);
	
	let coin = document.getElementById('mince');
	let coinX =  window.getComputedStyle(coin).getPropertyValue('top');
	let coinY =  window.getComputedStyle(coin).getPropertyValue('left');
	let currentCoinX = parseInt(coinX);
	let currentCoinY = parseFloat(coinY);

	let coinH = document.getElementById('mince').height;
	let coinW = document.getElementById('mince').width;
	let hunterH = document.getElementById('panacek').height;
	let hunterW = document.getElementById('panacek').width; 
	
	//chození uvnitř - pozor, else if neumožňuje například chození diagonálou
	if (udalost.key=='ArrowLeft'&& hunterY >= '0px') {
				hunter.style.left = (currentHunterY - 10) + 'px';
				hunter.src = 'obrazky/panacek-vlevo.png'; 
		
			} else if (udalost.key=='ArrowRight' && currentHunterY <= (window.innerWidth - hunterW)){
			 	hunter.style.left = (currentHunterY + 10) + 'px';
				hunter.src = 'obrazky/panacek-vpravo.png';
				
			} else if (udalost.key=='ArrowUp'&& hunterX >= '0px'){
			 	hunter.style.top = (currentHunterX - 10) + 'px';
				hunter.src = 'obrazky/panacek-nahoru.png';
				
			} else if (udalost.key=='ArrowDown'&& currentHunterX <= (window.innerHeight - hunterH)){
				hunter.style.top = (currentHunterX + 10) + 'px';
				hunter.src = 'obrazky/panacek.png';
			}
			
	//pokud narazí na okraj
	if (udalost.key=='ArrowLeft'&& hunterY < '0px') {
		hunter.src = 'obrazky/panacek-vpravo.png';

		} else if (udalost.key=='ArrowRight' && currentHunterY > (window.innerWidth - hunterW)){
			hunter.src = 'obrazky/panacek-vlevo.png';

		} else if (udalost.key=='ArrowUp'&& hunterX < '0px') {
			hunter.src = 'obrazky/panacek.png';

		} else if (udalost.key=='ArrowDown'&& currentHunterX > (window.innerHeight - hunterH)){
			hunter.src = 'obrazky/panacek-nahoru.png';
		}
	// pokud někdo použije něco jiného než šipky pro ovládání
		if (!(udalost.key=='ArrowLeft' || udalost.key=='ArrowRight' || udalost.key=='ArrowUp'||udalost.key=='ArrowDown')){
			alert("Pro pohyb panáčka použij šipky na klávesnici")
		}
	
    // pokud potká minci		
	if (!(currentHunterX + hunterW < currentCoinX || currentCoinX + coinW < currentHunterX || currentHunterY + hunterH < currentCoinY || currentCoinY + coinH < currentHunterY)){
				document.getElementById('zvukmince').play();
				showCoin();
				score();			
	}
	
	
	//if (!(udalost.key=='ArrowLeft' || udalost.key=='ArrowRight' || udalost.key=='ArrowUp'||udalost.key=='ArrowDown')){
	//	alert("Pro pohyb panáčka použij šipky na klávesnici")
	//}

	//if (udalost.key!='ArrowLeft'){alert("Pro pohyb panáčka použij šipky na klávesnici")}
	//if (udalost.key!='ArrowRight'){alert("Pro pohyb panáčka použij šipky na klávesnici")}
	//if (udalost.key!='ArrowUp'){alert("Pro pohyb panáčka použij šipky na klávesnici")}
	//if (udalost.key!='ArrowDown'){alert("Pro pohyb panáčka použij šipky na klávesnici")}


}

//počítadlo
let gainCoin = 1
function score(){
	document.getElementById('score').innerText = gainCoin++;
	if (gainCoin===6){
		document.getElementById('zvukfanfara').play();
		document.getElementById('winner').textContent = "Vyhrál jsi!";
	}
}

	


