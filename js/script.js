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
if (button1) {button1.addEventListener('click', btn1);} 


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
        // console.log('randomName', randomName)
        let randomLastName = Math.floor(Math.random() * lastNameListCopy.length);
        // console.log('randomLastName', randomLastName)
        const liElement = document.createElement('li');
        result2.append(liElement);
        // console.log('result2', result2)
        liElement.innerHTML += (nameListCopy[randomName] + ' ' + lastNameListCopy[randomLastName])
        nameListCopy.splice(randomName, 1);
        lastNameListCopy.splice(randomLastName, 1);
        }
}
if (button2) {button2.addEventListener('click', btn2);}
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
if (button3) {button3.addEventListener('click', btn3);}
// FINE SNACK 3

// SNACK 4
const button4 = document.querySelector('#btn4');

const frutta = ['mela', 'banana', 'pesca', 'arancia', 'kiwi'];
const topping = ['cioccolato', 'fragola', 'lampone'];

const btn4 = function () {
    const result4 = document.querySelector('#result4')
    result4.innerHTML = '';

    if (frutta.length > topping.length){
        const elementiDaAgg = frutta.length - topping.length;
        console.log('elementiDaAgg', elementiDaAgg);
        for(let i = 0; i < elementiDaAgg; i++){
            topping.push(i);
        }
        console.log('topping', topping);
    } else if (topping.length > frutta.length) {
        const elementiDaAgg = topping.length - frutta.length;
    } else {
        console.log('sono uguali');
}
}



if (button4) { button4.addEventListener('click', btn4); }




// ATTIVA IL BOTTONE PER ANDARE ALL'ESERCIZIO SUCCESSIVO
const btn = document.querySelector('.next');

if (btn) {
    btn.addEventListener('click', () => {
    const button = document.querySelector('#next');

    if (button.style.display === 'none') {
        // 👇️ Facciamo comparire il bottone
        button.style.display = 'block';
    } else {
        // 👇️ Nascondiamolo
        button.style.display = 'none';
    }
});
}