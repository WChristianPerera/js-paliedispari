// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma





function palindrome(userWord) {
    console.log('Sto verificando la parola' + userWord);
    let checkWord = userWord.split('').reverse().join('');
    
    if (checkWord == userWord) {
        console.log('La parola inserita è un palindromo');
    } else {
        console.log('La parola inserita non è un palindromo');
    }
}


let userWord = palindrome(prompt('Inserisci una parola'));