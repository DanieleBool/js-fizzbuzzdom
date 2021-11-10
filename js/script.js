const containerj = document.querySelector('.container');


for (let i = 1; i <= 100; i ++)
{
let text;    
    if (i % 3 == 0 && i % 5 == 0) {
        text = 'fizzbuzz';
    }
    else if (i % 3 == 0) {
        text = 'fizz';
        
    }
    else if (i % 5 == 0) {
        text = 'buzz';
    }
    else{
        text = i;
    }

containerj.innerHTML += `<div class="box ${text}">${text}</div>`;
}
// il mio errore era aggiungere in html la classe box!! *facepalm*

// uso il text si a per aggingere una classe css, sia per aggiungere una stringa dentro il div che js inserisce in html (quindi es. BUZZ è sia una classe css che una stringa)
