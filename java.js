

  
let positionypj1 = 20;
let positionpj1 = 0;
let pj1left  = 0;
let pj1right = 0;
let pj1up = 0;
let pj1down = 0;
let fuego = 0;
let positionenemy = -100
let positionyenemy = 500
positionybala = 0
positionbala = 0
setInterval(code, 8);

setInterval(fire, 8);


function code(){
	if (pj1left==1){		

		positionpj1+=4;
		document.getElementById('pj1').style.left = `${positionpj1}px`;
		document.getElementById('pj1').style.transform = 'scaleX(1)';
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
		if(fuego == 0){
		document.getElementById('bala').style.left = `${positionpj1}px`;
		document.getElementById('bala').style.bottom = `${positionypj1}px`;
			}
			

	}

		if((positionybala >= (positionyenemy - 70)) && (positionenemy+50 > positionbala) && (positionenemy-50 < positionbala)) {
	console.log("fuego enemigo")

}


	if (pj1right==1){
		
		positionpj1-=4;
		document.getElementById('pj1').style.left = `${positionpj1}px`;
		document.getElementById('pj1').style.transform = 'scaleX(-1)';
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
		if(fuego == 0){
		document.getElementById('bala').style.left = `${positionpj1}px`;
		document.getElementById('bala').style.bottom = `${positionypj1}px`;
			}
			}


	if (pj1up==1){		

		positionypj1+=1.5;

		document.getElementById('fire').style.height = '80px';
		document.getElementById('fire').style.bottom = '-80px';
		document.getElementById('pj1').style.bottom = `${positionypj1}px`;
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
			
		if(fuego == 0){
		document.getElementById('bala').style.left = `${positionpj1}px`;
		document.getElementById('bala').style.bottom = `${positionypj1}px`;
			}

	}

	if (pj1down==1){		

		positionypj1-=1.5;
		document.getElementById('pj1').style.bottom = `${positionypj1}px`;
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
	
		if(fuego == 0){
		document.getElementById('bala').style.left = `${positionpj1}px`;
		document.getElementById('bala').style.bottom = `${positionypj1}px`;
			}

	}

	



	if (pj1left==0 && pj1right==0) {
		document.getElementById('pj1').style.backgroundImage = 'url(https://i.pinimg.com/originals/52/17/7e/52177e3843b7878a30f059b14d065f7d.png)';
	
		document.getElementById('bala').style.left = `${positionpj1}px`;
		document.getElementById('bala').style.bottom = `${positionypj1}px`;
	}

	if (pj1up == 0) {
			document.getElementById('fire').style.height = '20px';
		document.getElementById('fire').style.bottom = '-20px';
	}



	document.getElementById('enemigo').style.left = `${positionenemy}px`;

};


	function fire() {
		 if(!fuego==1) {setTimeout(function(){fuego=1}, 100);
			document.getElementById('bala').style.left = `${positionpj1}px`;
			positionbala = `${positionpj1}`
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 100}px`;
		  positionybala = (positionypj1 + 100)}, 137.7);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 150}px`;
		  positionybala = (positionypj1 + 150)}, 175);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 200}px`;
		  positionybala = (positionypj1 + 200)}, 213);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 250}px`;
		  positionybala = (positionypj1 + 250)}, 250);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 300}px`;
		  positionybala = (positionypj1 + 300)}, 288);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 350}px`;
		  positionybala = (positionypj1 + 350)}, 326);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 400}px`;
		  positionybala = (positionypj1 + 400)}, 363);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 450}px`;
		  positionybala = (positionypj1 + 450)}, 401);
		  setTimeout(function(){document.getElementById('bala').style.bottom = `${positionypj1 + 520}px`;
		  positionybala = (positionypj1 + 520)}, 439);
		  setTimeout(function(){fuego=0}, 500);}
	}





document.addEventListener("keydown", function(event) {
    	if(event.key === "d" || event.key === "D"){
    		pj1left = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "d" || event.key === "D"){
    		pj1left = 0
    	}
    })

document.addEventListener("keydown", function(event) {
    	if(event.key === "a" || event.key === "A"){
    		pj1right = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "a"  || event.key === "A"){
    		pj1right = 0
    	}
    })



document.addEventListener("keydown", function(event) {
    	if(event.key === "w" || event.key === "W"){
    		pj1up = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "w" || event.key === "W"){
    		pj1up = 0
    	}
    })

document.addEventListener("keydown", function(event) {
    	if(event.key === "S" || event.key === "s"){
    		pj1down = 1

    	}
    })
document.addEventListener("keyup", function(event) {
    	if(event.key === "s"  || event.key === "S"){
    		pj1down = 0
    	}
    })