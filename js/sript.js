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
