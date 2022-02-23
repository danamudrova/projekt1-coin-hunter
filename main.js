// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
	
	

	// //panáček
	
	

	function start (){
 		let startTop = '800px' //startovní souřadnice
		let startLeft = '1000px' 
		let hunter = document.querySelector('#panacek');
		hunter.style.top = startTop; //umístění panáčka
		hunter.style.left = startLeft;

	}


	
	// hunter.style.left = 'movementLeft()' + 'px'; měnící se pozice podle šipek
	// hunter.style.top = 'movementTop()' + 'px'; měnící se pozice podle šipek
	
