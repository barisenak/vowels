let text = prompt ("Введите любой текст");
let letters = ["а", "е", "у", "ю", "и", "э", "я", "о", "ы", "ё"];
let score = 0;
nextPrime: 
for (let i=0; i<text.length; i++) {

    for (let j=0; j<=letters.length ; j++){
        if (text[i] === letters[j]) {
            score += 1
            break;
        }
    }
}

alert (score)
