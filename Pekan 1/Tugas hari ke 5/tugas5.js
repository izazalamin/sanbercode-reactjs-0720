//soal 1
console.log ("-----SOAL 1------")

function halo(){
  return "Halo Sanbers!"
}
console.log(halo());

//soal 2
console.log ("-----SOAL 2------")

function kalikan(num1,num2){
  return num1*num2
}
var num1=12
var num2=4

console.log(kalikan(num1,num2));
//soal 3 
console.log ("----- SOAL 3 ------")

function introduce(name,age,address,hobby){
  var kalimat = "Nama saya " + name + " , umur saya " + age + " tahun " + " , alamat saya di " + address + " , dan saya punya hobby yaitu " + hobby + "!";
return kalimat;
  }
var name = "John"
var age = 30
var address = 'Jalan Belom Jadi'
var hobby = "Gaming"

console.log(introduce(name,age,address,hobby));
