/*
const cena = 12
const pocetNavstevniku = 174
const pocetPredstaveni = 15

const prijem = 12 * 174 * 15

document.body.innerHTML += "<p>" + prijem + "</p>"

const vstupneStudent = cena * 0.65
const studenti = pocetNavstevniku * 0.4
const pocetDospely = 174 - studenti

const prijem2 = ((pocetDospely * 12) + (studenti * vstupneStudent)) * 15

document.body.innerHTML += "<p>" + "celkový příjem divadla je:"+ " " + prijem2 + " " + "EUR" + "</p>"
*/

const hodKostkou = Math.ceil((Math.random()*6))

document.body.innerHTML = hodKostkou