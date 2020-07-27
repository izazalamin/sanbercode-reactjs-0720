//soal 1
console.log("-------SOAL 1-------")
var orang ={nama:"Asep",gender:"laki-laki",hobi:"baca buku",tahunlahir:"1992"}
console.log("Nama : " + orang.nama)
console.log("Jenis Kelamin : " + orang.gender)
console.log("Hobi : " + orang.hobi)
console.log("Tahun Lahir : " + orang.tahunlahir)

//soal 2
console.log("-------SOAL 2-------")
var buah = [{nama: "strawberry", warna: "merah", biji: "tidak",harga:"9000"}, {nama: "jeruk", warna: "oranye", biji: "ada",harga:"8000"}, {nama: "semangka", warna: "hijau dan merah", biji: "ada",harga:"10000"},{nama: "pisang", warna: "kuning", biji: "tidak",harga:"5000"}]

var arrayBuahFilter = buah.filter(function(item){
  return item.nama == "strawberry";
})
console.debug(arrayBuahFilter)

//soal 3
console.log("-------SOAL 3-------")

var dataFilm= []

var addFilm = {
  nama : "Mission Immposible",
  durasi: " 2.2 jam",
  genre : "action",
  tahun:"2015"
}
function tambah(addFilm){
  return addFilm
  
}

dataFilm.push(addFilm)
console.log(dataFilm);

//soal 4
console.log("---------SOAL 4-------")

//release 0
class Animal {
  constructor(name,legs,cold_blooded){
    this.name=name;
    this.legs=4;
    this.cold_blooded=false;
  }
 get namaDomba(){
    return this.name;
   return this.legs;
   return this.cold_blooded;
  }
  set namaDomba(item){
    this.name = item;
    this.legs= item;
    this.cold_blooded=item;
  }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
class Ape extends Animal {
  constructor(name,legs){
    super(name);
    this.legs = 2;
  }
  yell(){
    return "auoo";
  }
}
class Frog extends Animal {
  constructor(name,legs){
    super(name);
  }
  jump(){
    return "hop hop";
  }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong);
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok);

//soal 5
console.log("---------SOAL 5-------")
class Clock{
  constructor({template}){
    {
      var timer;
      function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
    }
  }
}
var clock = new Clock({template: 'h:m:s'});
clock.start(); 
