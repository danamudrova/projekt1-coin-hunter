// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program



function pressArrow(udalost){
	
	let hunter = document.getElementById('panacek');
	let startPositionX =  window.getComputedStyle (hunter,null).getPropertyValue('top')
	let startPositionY =  window.getComputedStyle (hunter,null).getPropertyValue('left')
	let currentPositionX = parseInt(startPositionX);
	let currentPositionY = parseFloat(startPositionY);
	

	
	if (udalost.key=='ArrowLeft') {hunter.style.left = (currentPositionY - 10) + 'px';}
 		else if (udalost.key=='ArrowRight'){hunter.style.left = (currentPositionY + 10) + 'px';}
	 	else if (udalost.key=='ArrowUp'){hunter.style.top = (currentPositionX - 10) + 'px';}
		else if (udalost.key=='ArrowDown'){hunter.style.top = (currentPositionX + 10) + 'px';}
	 	
	 else {alert('Použij šipky na ovládání panáčka')}  
	
	
}
