let poulettes = document.getElementById('poulettestitle');
let poulettesContent = document.getElementById('poulettescontent');

poulettesContent.hidden = true;

function poulettesAppear() {
poulettesContent.hidden = false;
}
poulettes.addEventListener('mouseover', poulettesAppear)

function poulettesDisappear (){
    poulettesContent.hidden = true;
}
poulettes.addEventListener('click', poulettesDisappear)







let pizza = document.getElementById('pizzatitle');
let pizzaContent = document.getElementById('pizzacontent');

pizzaContent.hidden = true;

function pizzaAppear() {
pizzaContent.hidden = false;
}
pizza.addEventListener('mouseover', pizzaAppear)

function pizzaDisappear(){
    pizzaContent.hidden = true;
}
pizza.addEventListener('click', pizzaDisappear)