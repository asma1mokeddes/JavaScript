// Les structures de contrôle > servent à contrôler le flux des instructions
// Remarque : le premier ! sert à convertir la valeur de condition en "boolean" et le second "!"
// pour donner le résultat inverse :
const condition = true;
console.log(!!condition);


// 1 -> Les alternatives ou instructions conditionnelles :

const langue = "français";
if(langue === "anglais"){
    console.log("HELLO !!")
}else if(langue === "français"){
    console.log("BONJOUR !!")
}else{
    console.log("coucou toi ")
}


// 2 -> Les ternaires : condition ? expression1 : expression2;
// L'opérateur ternaire est le seul opérateur JavaScript qui agit sur trois éléments
const age = 18;
const statut = age > 17 ? "majeur" : age < 3 ? "baby" : "mineur";
console.log(statut);


// 3 -> Switch :
const roues = 4;
let vehiculeType;
switch (roues){
    case 4 : { // on pourra déclarer comme ça une var à l'intérieur
        vehiculeType = "voiture"
        break
    }
    case 2 : {
        vehiculeType = "moto"
        break
    }
    default : {
        vehiculeType = "camion"
        break;
    }
}
console.log(vehiculeType)


// Cas pratique : exécuter les mêmes instructions pour plusieurs cas
const pays = 'France';
switch (pays) {
    case 'France':
    case 'Allemagne':
    case 'Italie':
    case 'Espagne':
        console.log('Tu es européen !');
        break;
    case 'Corée':
    default:
        console.log("Tu n’es pas européen.");
}
