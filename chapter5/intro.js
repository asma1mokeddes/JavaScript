// notation littérale pour déclarer un nombre
const monnombre = 45; 

// utilisation de la fonction number :
// not a number
console.log(Number("test"))
// fonction constructeur :
console.log(new Number(10))


// La perte de précision par overflow ou d'arrondi :
console.log(0.1+0.2) // 0.30000000000000004
console.log(0.1*0.2) // 0.020000000000000004
console.log(0.11/0.1) // 1.0999999999999999
console.log(123456789012345678) // 123456789012345680



// La perte de précision par arrondi :

// Prenons l'exemple de 1 / 3, vous savez que cela fait 0.33333… à l'infini.
// Mais un ordinateur a besoin d'arrondir à un moment pour pouvoir stocker le nombre : c'est là qu'intervient l'erreur d'arrondi.
// Nous avons perdu en précision à cause de l'arrondi obligatoire pour stocker le nombre en binaire.



// La perte de précision par overflow :
// Pour les nombres entiers nous rencontrerons le même phénomène, au-delà de 2^53 (soit le nombre de bits de la matisse), 
// les nombres seront arrondis en binaire et vous perdrez en précision.
// La raison est cette fois-ci qu'il n'y a plus assez de bit pour sauvegarder le nombre en binaire, c'est ce qu'on appelle 
// un overflow.
