//soal 1
console.log ("--------Soal 1----------")

let firstname = "William";
let lastname = "Imoh";
const fullname = {
  firstname,lastname
}
console.log(fullname)

//soal 2
console.log ("--------Soal 2----------")
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const{firstName,lastName,destination,occupation,spell} = newObject

console.log(firstName + " " + lastName + " " + destination + " " + occupation + " " + spell)

//soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combinedarray =[...west,...east]
console.log(combinedarray)