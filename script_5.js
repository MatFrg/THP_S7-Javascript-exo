const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// exo 1 -----------------------------------------------------------------------
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  alreadyRented = book => book.rented > 0
  console.log(books.every(alreadyRented))

// exo 2 -----------------------------------------------------------------------
{console.log("Quel est livre le plus emprunté ?")

function compare(a,b){
  var rentedA = a.rented, rentedB = b.rented
  if (rentedA < rentedB)
    return 1 
  if (rentedA > rentedB)
    return -1
  return 0
}
  
console.log(books.sort(compare)[0])
}

// exo 3 -----------------------------------------------------------------------

{console.log("Quel est le livre le moins emprunté ?")

function compare(a,b){
  var rentedA = a.rented, rentedB = b.rented
  if (rentedA < rentedB)
    return -1 
  if (rentedA > rentedB)
    return 1
  return 0
}
  
console.log(books.sort(compare)[0])
}

// exo 4 -----------------------------------------------------------------------

{
console.log("Trouve le livre avec l'ID: 873495 ")
var found = books.find(books => books.id == 873495);
console.log(found)
}

// exo 5 -----------------------------------------------------------------------
console.log("Supprime le livre avec l'ID: 133712")
var found = books.find(books => books.id == 133712);
var index = books.indexOf(found);

if (index > -1){
  books.splice(index,1)
}
console.log(books)


// exo 6 -----------------------------------------------------------------------
{
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

function compare(a,b){
  var titleA = a.title, titleB = b.title
  if (titleA < titleB)
    return -1 
  if (titleA > titleB)
    return 1
  return 0
}
console.log(books.sort(compare))}



