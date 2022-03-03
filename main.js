


// sem začni psát svůj program

// mince
function showCoin(){
	let coin = document.getElementById('mince');
	let coinX = Math.floor(Math.random()*900)
	let coinY = Math.floor(Math.random()*1500)

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
function pressArrow(udalost){
	document.getElementById('hudba').play()

	let hunter = document.getElementById('panacek');
	let hunterX =  window.getComputedStyle (hunter,null).getPropertyValue('top')
	let hunterY =  window.getComputedStyle (hunter,null).getPropertyValue('left')
	let currentPositionX = parseInt(hunterX);
	let currentPositionY = parseFloat(hunterY);
    let width = window.innerWidth
	let height = window.innerHeight

	if (udalost.key=='ArrowLeft'&& hunterY >= '0px') {
				hunter.style.left = (currentPositionY - 10) + 'px';
				hunter.src = 'obrazky/panacek-vlevo.png'
				
			}
 		else if (udalost.key=='ArrowRight' && currentPositionY < width){
			 	hunter.style.left = (currentPositionY + 10) + 'px';
				hunter.src = 'obrazky/panacek-vpravo.png'
				
			}
	 	else if (udalost.key=='ArrowUp'&& hunterX >= '0px'){
			 	hunter.style.top = (currentPositionX - 10) + 'px';
				hunter.src = 'obrazky/panacek-nahoru.png'
				
			}
		else if (udalost.key=='ArrowDown'&& currentPositionX < height ){
				hunter.style.top = (currentPositionX + 10) + 'px';
				hunter.src = 'obrazky/panacek.png'
				
			}
	 	
	else {alert('Pro ovládání panáčka použij šipky na klávesnici')
	}  

}


	


