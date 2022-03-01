


// sem začni psát svůj program

//function start(){
//	document.getElementById('hudba').play()
//}

function pressArrow(udalost){
	
	let hunter = document.getElementById('panacek');
	let hunterX =  window.getComputedStyle (hunter,null).getPropertyValue('top')
	let hunterY =  window.getComputedStyle (hunter,null).getPropertyValue('left')
	let currentPositionX = parseInt(hunterX);
	let currentPositionY = parseFloat(hunterY);

//window.innerWidth = 0
//window.innerHeight = 0
	
	if (udalost.key=='ArrowLeft') {
				hunter.style.left = (currentPositionY - 10) + 'px';
				hunter.src = 'obrazky/panacek-vlevo.png'
			}
 		else if (udalost.key=='ArrowRight'){
			 	hunter.style.left = (currentPositionY + 10) + 'px';
				hunter.src = 'obrazky/panacek-vpravo.png'
			}
	 	else if (udalost.key=='ArrowUp'){
			 	hunter.style.top = (currentPositionX - 10) + 'px';
				hunter.src = 'obrazky/panacek-nahoru.png'
			}
		else if (udalost.key=='ArrowDown'){
				hunter.style.top = (currentPositionX + 10) + 'px';
				hunter.src = 'obrazky/panacek.png'
			}
	 	
	else {alert('Použij šipky na ovládání panáčka')
	}  
	
	if (hunter.style.left < 0){ hunter.style.left = (cureentPositionY) + 'px'}  
	
}

function coinAppear () {
	let coin = getElementById('mince');
	let minceX = Math.random('top');
	let minceY = Math.random('left');

// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
}