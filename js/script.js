// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
// **Snack2**
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
// **Snack4 (Bonus)**
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// SNACK 1
const number = document.querySelector('#number1');
// console.log('number', number)
const button1 = document.querySelector('#btn1');
// console.log('button1', button1)
const btn1 = function () {
    const result1 = document.querySelector('#result1');
    if (number.value % 2 == 0) {
        result1.innerHTML = number.value
    } else {
        result1.innerHTML = (parseInt(number.value) + 1);
    }
    number.value = '';

}
// button1.addEventListener('click', btn1);

// FINE SNACK 1


// SNACK 2
const nameList = ['Zack', 'Nehemiah', 'John', 'Cadence', 'Cayden', 'Jaslyn', 'Harper', 'Linda', 'Annabelle', 'Salma', 'Leyla', 'Tommy', 'Pedro', 'Owen', 'Lucian'];
const lastNameList = ['Copeland', 'Melendez', 'Turner', 'Obrien', 'Moses', 'Schultz', 'Raymond', 'Browning', 'Erickson', 'Vincent', 'Oconnor', 'Gilbert', 'Maddox', 'Allison', 'Lester'];

const button2 = document.querySelector('#btn2');
// console.log('button2', button2)
const btn2 = function () {
    const result2 = document.querySelector('#result2');
    result2.innerHTML = '';
    let nameListCopy = nameList.slice();
    let lastNameListCopy = lastNameList.slice();

    for (let i = 0; i < nameList.length && i < lastNameList.length; i++) {
        let randomName = Math.floor(Math.random() * nameListCopy.length);
        let randomLastName = Math.floor(Math.random() * lastNameListCopy.length);
        const liElement = document.createElement('li');
        result2.append(liElement);
        liElement.innerHTML += (nameListCopy[randomName] + ' ' + lastNameListCopy[randomLastName])
        nameListCopy.splice(randomName, 1);
        lastNameListCopy.splice(randomLastName, 1);

        }

}
// button2.addEventListener('click', btn2);


// FINE SNACK 2

// SNACK 3
const button3 = document.querySelector('#btn3');

const number3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberLength = number3.length;

const btn3 = function () {
    const result3 = document.querySelector('#result3');

    let odd = 0;
    for (let i = 0; i < numberLength; i++) {
        if (i % 2 != 0) {
            odd += number3[i];
        }
    }
    result3.innerHTML = 'La somma di tutti i numeri dispari è:' + ' ' + odd;
}
button3.addEventListener('click', btn3);
// FINE SNACK 3



// ATTIVA IL BOTTONE PER ANDARE ALL'ESERCIZIO SUCCESSIVO
// const btn = document.querySelector('#btn1', '#btn2', '#btn3');

// btn.addEventListener('click', () => {
//     const button = document.getElementById('next');

//     if (button.style.display === 'none') {
//         // 👇️ Facciamo comparire il bottone
//         button.style.display = 'block';
//     } else {
//         // 👇️ Nascondiamolo
//         button.style.display = 'none';
//     }
// });