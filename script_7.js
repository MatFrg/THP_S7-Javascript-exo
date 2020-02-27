
function ado(answer){
	if (answer.substring(answer.length-1) == "?"){
		return  "Ouai Ouai...";	

	} else if (answer == answer.toUpperCase() && answer ){
	return "Pwa, calme-toi...";

	} else if (answer.toUpperCase().includes('fortnite'.toUpperCase())){
		return  "on s'fait une partie soum-soum ?";

	} else if (answer == ""){
	return  "t'es en PLS ?"

	} else {
		return  "Balek.";
	}
}


while (true){
	let answer = prompt("Kestuveu?");
	console.log(ado(answer))
}