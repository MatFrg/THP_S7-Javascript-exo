
arn1 = "CCGUCGUUGCGCUACAGC"
arn2 = "CCUCGCCGGUACUUCUCG"


function proteine(x){
	sequence = x.match(/.{3}/g)
	seq = []
	sequence.forEach(codon => {

	if ( codon ==  "UAU" || codon == "UAC" ){
		return seq.push("Tyrosine")
	} else if ( codon == "UUU" || codon == "UUC"){
		return seq.push("Phénylalanine")
	} else if ( codon == "UUA" || codon == "UUG"){
		return seq.push("Leucine")
	} else if ( codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG"){
		return seq.push("Arginine")
	} else if ( codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG") {
		return "Proline"
	} else {
		return seq.push("Sérine")
	}
	})

	console.log(seq.join("-"))
}

console.log("Première protéine:")
proteine(arn1)

console.log("Deuxième protéine:")
proteine(arn2)












