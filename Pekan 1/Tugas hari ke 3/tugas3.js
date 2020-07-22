//soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var extra = "Senang";
var kata2 = kataKedua.substr(0,0).toUpperCase().concat(extra);
var kata3=kataKetiga.toLowerCase();
var kata4=kataKeempat.toUpperCase();
var text = kataPertama + " " + extra + " " + kata3 + " " + kata4;
//console.log(text);

//soal 2
//karena variabel banyak yang sama,saya ganti menjadi kecil
var katapertama = "1";
var katakedua = "2";
var kataketiga = "4";
var katakeempat = "5";

var hasil=Number(katapertama) + Number(katakedua) + Number(kataketiga) + Number(katakeempat);
console.log(hasil);

//soal 3
//karena variabel banyak yang sama,saya tambahkan angka
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama1 = kalimat.substring(0, 3); 
var kataKedua2= kalimat.substring(4,14); // do your own! 
var kataKetiga3=kalimat.substring(15,18) ; // do your own! 
var kataKeempat4=kalimat.substring(19,24) ; // do your own! 
var kataKelima5=kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama1); 
console.log('Kata Kedua: ' + kataKedua2); 
console.log('Kata Ketiga: ' + kataKetiga3); 
console.log('Kata Keempat: ' + kataKeempat4); 
console.log('Kata Kelima: ' + kataKelima5);

//soal 4
var nilai = 90;
var indeks = "";

if(nilai >=80) indeks ="A"
else if(nilai >=70 && nilai< 80) indeks="B"
else if(nilai >=60 && nilai<70)indeks="c"
else if(nilai>=50 && nilai <60)indeks="D"
else if(nilai <50) indeks ="E";
console.log(indeks);

//soal 5
var tanggal = 8;
var bulan = 8;
var tahun = 1997;

switch(bulan){
    case 1 : { bulan = "Januari" ; break;}
    case 2 : { bulan = "Februari" ; break;}
    case 3 : { bulan = "Maret" ; break;}
    case 4 : { bulan = "April" ; break;}
    case 5 : { bulan = "Mei" ; break;}
    case 6 : { bulan = "Juni" ; break;}
    case 7 : { bulan = "Juli" ; break;}
    case 8 : { bulan = "Agustus" ; break;}
    case 9 : { bulan = "September" ; break;}
    case 10 : { bulan = "Oktober" ; break;}
    case 11 : { bulan = "November" ; break;}
    case 12 : { bulan = "Desember" ; break;}}
console.log(tanggal lahir);
