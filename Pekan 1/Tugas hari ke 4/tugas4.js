//soal 1
console.log("Soal 1")
console.log("LOOPING PERTAMA")
var iterasi = 2;
while (iterasi < 21){
    console.log(iterasi + " - I love coding");
    iterasi++ + iterasi++;
}
console.log("LOOPING KEDUA")
var angka = 20;
while (angka > 1){
    console.log(angka + " - I will become a fronted developer");
    angka-- + angka --;
}

//soal 2 
console.log("-------------------")
console.log("Soal 2")
for(var deret = 1; deret <= 20; deret ++) {
if(deret%3 === 0 && deret%2===1){
    console.log(deret + " - I Love Coding")
}else if(deret%2 === 0){
    console.log(deret + " - Berkualitas")
}else if(deret%2 ===1){
    console.log(deret + " - Santai")
}
}

//soal 3
console.log("-------------------")
console.log("Soal 3")
var a = '';
for (var b=1;b<=7;b++){
    for(var c=1;c<=b;c++){
        a += '#';
    }
    a += '\n';
}
console.log(a);

//soal4
console.log("-------------------")
console.log("Soal 4")
var kalimat="saya sangat senang belajar javascript"

var newkalimat=kalimat.split(" ")
console.log(newkalimat)

//soal5
console.log("-------------------")
console.log("Soal 5")
var daftarBuah= ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

for(var i=0;i <=4 ; i++){
  if(daftarBuah.sort()){
    console.log(daftarBuah[i])
  }
}