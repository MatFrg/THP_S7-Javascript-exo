 let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

 for (let current_floor = 1; current_floor <= floor; current_floor++){
 	console.log((" ").repeat(floor - current_floor) + "#".repeat(current_floor));
  }

 
 