/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchina = [{
   varieta: "romana",
   peso: 100,
   lunghezza: 20,
},
{
   varieta: "verde",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "verdeScuro",
   peso: 120,
   lunghezza: 10,
},
{
   varieta: "siciliana",
   peso: 150,
   lunghezza: 15,
},
{
   varieta: "lombarda",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "sarda",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "campana",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "bolognese",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "milanese",
   peso: 150,
   lunghezza: 30,
},
{
   varieta: "milanese",
   peso: 150,
   lunghezza: 30,
},
]

let sum = 0;
for ( let i = 0; i < zucchina.length; i++) {
   sum += zucchina[i].peso
}
console.log(sum)

let media = sum / zucchina.length;
console.log (media);