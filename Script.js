
function greeting(){
	var name=  prompt("Whats your name");
	alert(" hello "+name);
}

function thirdangle() {
	let angle1 = prompt("give 1st angle");
	let angle2 = prompt("give 2nd angle");
	let angle3 = 180 - angle1-angle2 ;
	alert (" the third angle is " + angle3);
}


function multiplesOfTenAndFour(){
	for (let i = 0; i <= 100; i++){
		if(i % 10 == 0 && i % 4 ==0) { 
			console.log("tenfour");
		   }
		else if (i % 4 ==0){
			console.log("four");
		 }
		else if (i%10 == 0){
			console.log("ten");
		}
		
		else { 
			console.log(i)
		}
	}
}
