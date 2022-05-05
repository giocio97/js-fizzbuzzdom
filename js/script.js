
// lista numeri da 1 a 100


const myQuadrato = document.querySelector(".container");
for (let index = 1; index <= 100; index++) {
    let element;
    element = `<div class= "tuttinumeri"> ${index} <div/>`;



       // multipli di 3  e 5 stampo “FizzBuzz” 
       if (index % 3 == 0 && index % 5 == 0) {
        element = `<div class= "div.tuttinumeri fizzbuzz"> FizzBuzz <div/>`;
    }
    // multipli di 3 stampo “Fizz” 
        else if (index % 3 == 0) {
            element = `<div class= "div.tuttinumeri fizz"> fizz <div/>`;
        }



        // multipli di 5 stampo “Buzz” 
        else if (index % 5 == 0) {
            element = `<div class= "div.tuttinumeri buzz"> Buzz <div/>`;
        }

        myQuadrato.innerHTML += element; 
    console.log(element);
}






