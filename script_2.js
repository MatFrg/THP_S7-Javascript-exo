 let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

 let count = 1;
 let fact = 1

 while (nbr >= count) { 
 	fact = fact * count;
 		count +=1;
}

let result = `Le résultat est : ${fact}`;

console.log(result)
