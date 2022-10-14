/* Palidroma
Chiedere all’utente di inserire una parola */

const userWord = prompt('Inserisci una parola')
console.log(userWord);


/* Divido la parola in singole lettere creando un Array */

let userLetters = userWord.split('');
console.log(userLetters);


/* Creo la parola al contrario */

let userLettersReverse = userLetters.reverse();
console.log(userLettersReverse);

var userWordReverse = userLettersReverse.join('');
console.log(userWordReverse);


/* Creare una funzione per capire se la parola inserita è palindroma */

function palindromo(parolaPalindroma) {
    if (parolaPalindroma === userWordReverse) {
        console.log('Palindromo');
        return true
    } else {
        console.log('Non Palindromo');
        return false
    }
    
}

palindromo(userWord)
console.log(userWord);


/* Pari e Dispari */
/* L’utente sceglie pari o dispari */

const userChoice = prompt('Scegli pari o dispari')
console.log(userChoice);


/* e inserisce un numero da 1 a 5.  */

const userNumber = Number(prompt('Scegli un numero da 1 a 5'))
console.log(userNumber);



/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */

let cpuNumber = Math.floor((Math.random() * 5));
console.log(cpuNumber);

/* Ho provato a creare direttamente una funzione ma non capivo come inserirla */

/* let cpuNumber = ();

function randomNumberCpu(number) {
    let number= Math.floor((Math.random() * 10));
    return number
}

randomNumberCpu(cpuNumber)
console.log(cpuNumber); */

/* Sommiamo i due numeri */

let sum = userNumber + cpuNumber;

/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)  */

function result(parametro) {
    
    if (parametro % 2 == 0){
        console.log('la somma è pari'); 
       return true
    }  else {
         console.log('la somma è dispari'); 
    return false}

}

/* Dichiariamo chi ha vinto. */

if (result(sum)){
    console.log('Pari vince')
}else{
    console.log('Dispari vince');
}