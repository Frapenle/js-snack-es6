// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animals = [{
    "name": "leone",
    family: "felidi",
    class: "mammiferi",
},
{
    "name": "cane",
    family: "canidi",
    class: "mammiferi",
},
{
    "name": "gallina",
    family: "fasianidi",
    class: "aves",
},
{
    "name": "falco",
    family: "falconidae",
    class: "aves",
},
{
    "name": "tigre",
    family: "felidi",
    class: "mammiferi",
},
{
    "name": "gatto",
    family: "felidi",
    class: "mammiferi",
},
{
    "name": "elefante",
    family: "elephantidae",
    class: "mammiferi",
},
];

const mammiferi = animals.filter((mammiferi) => {
    if (mammiferi.class = mammiferi) {
        return true;
    }
    return false;
});

console.log(mammiferi);