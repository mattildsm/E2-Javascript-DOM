const pizzas = [
    {
        id: 1, 
        nombre: "napolitana",
        ingredientes: ["harina","levadura","salsa","muzzarella","tomate"],
        precio: 900
    },
    {
        id: 2, 
        nombre: "muzzarella",
        ingredientes: ["harina","levadura","salsa","muzzarella"],
        precio: 1000
    },
    {
        id: 3, 
        nombre: "comun",
        ingredientes: ["harina","levadura","salsa","queso fresco"],
        precio: 1900
    },
    {
        id: 4, 
        nombre: "4 quesos",
        ingredientes: ["harina","levadura","salsa","muzzarella","queso fontina","queso parmesano","queso gorgonzola"],
        precio: 1200
    },
    {
        id: 5, 
        nombre: "de chocolate",
        ingredientes: ["harina","levadura","chocolate"],
        precio: 400
    },
    {
        id: 6, 
        nombre: "con fritas",
        ingredientes: ["harina","levadura","salsa","muzzarella", "papaFritas"],
        precio: 200
    }
]

const idForm = document.getElementById('form')
const idPizza = document.getElementById('id-pizza');

//console.log(formPizzas)

const isEmpty = (value) => value.length === 0;

const showError = (input, message) => {
    const formField = input.parentElement;
    const errorContainer = formField.querySelector("small");
    errorContainer.textContent = message;
}

const checkId = () => {
    let isValid = false;
    const pizzaId = idPizza.value;
    console.log(idPizza.value);
    if (isEmpty(pizzaId)) {
        showError(idPizza, 'Ingrese un número de pizza por favor');
    } 
    else showError(idPizza, '');
    return isValid;  
};

const isValid = () => {
    const idEsValido = checkId();
}

 idForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isValid())
    console.log('ID válido')})











    


