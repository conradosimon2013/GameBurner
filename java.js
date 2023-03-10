

  
let positionypj1 = 20;
let positionpj1 = 10;
let pj1left  = 0;
let pj1right = 0;
let pj1up = 0;
let pj1down = 0;


setInterval(code, 8);



function code(){
	if (pj1left==1){		

		positionpj1+=4;
		document.getElementById('pj1').style.left = `${positionpj1}px`;
		document.getElementById('pj1').style.transform = 'scaleX(1)';
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
			

	}



	if (pj1right==1){
		
		positionpj1-=4;
		document.getElementById('pj1').style.left = `${positionpj1}px`;
		document.getElementById('pj1').style.transform = 'scaleX(-1)';
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
			}


	if (pj1up==1){		

		positionypj1+=1.5;

		document.getElementById('fire').style.height = '80px';
		document.getElementById('fire').style.bottom = '-80px';
		document.getElementById('pj1').style.bottom = `${positionypj1}px`;
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
			

	}

	if (pj1down==1){		

		positionypj1-=1.5;
		document.getElementById('pj1').style.bottom = `${positionypj1}px`;
		document.getElementById('pj1').style.backgroundImage = 'url(derecha.png)';
		
			

	}

	



	if (pj1left==0 && pj1right==0) {
		document.getElementById('pj1').style.backgroundImage = 'url(https://i.pinimg.com/originals/52/17/7e/52177e3843b7878a30f059b14d065f7d.png)';
	
	}

	if (pj1up == 0) {
			document.getElementById('fire').style.height = '20px';
		document.getElementById('fire').style.bottom = '-20px';
	}





};


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