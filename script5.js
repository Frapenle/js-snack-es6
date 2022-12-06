/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const persons = [
    {
        "name": "Francesco",
        lastName: "Trudu",
        age: 38,
    },
    {
        "name": "Domenico",
        lastName: "Montrone",
        age: 26,
    },
    {
        "name": "Aniello",
        lastName: "Piscopo",
        age: 28,
    },
    {
        "name": "Giada",
        lastName: "Gallitto",
        age: 22,
    },
    {
        "name": "Riccardo",
        lastName: "Nestola",
        age: 28,
    },
    {
        "name": "Monica",
        lastName: "De Bona",
        age: 23,
    },
    {
        "name": "Roberto",
        lastName: "Carta",
        age: 28,
    },
    {
        "name": "Alessio",
        lastName: "Napoletano",
        age: 17,
    },
    {
        "name": "Sebastiano",
        lastName: "Urban",
        age: 16,
    },
    {
        "name": "Luca",
        lastName: "Castellucci",
        age: 15,
    },
    {
        "name": "Sara",
        lastName: "Donzellini",
        age: 13,
    },
];


const newPersonsArray = persons.map((person) => {
    const isMaggiorenne = person.age >= 18;
    return `${person.name} ${person.lastName}, ${isMaggiorenne ? 'può guidare' : 'non può guidare'}}`
})
console.log(newPersonsArray)
