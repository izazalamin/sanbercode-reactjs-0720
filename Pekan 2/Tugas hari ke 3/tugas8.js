//soal 1
console.log("-------soal 1---------")
console.log("-luas-")
const phi = 3.14;

const luas = () => {
  let x = 5 ;
  return x*x*phi;
}
console.log(luas())

console.log("-keliling-")

const keliling = () => {
  let x = 5 ;
  return 2*x*phi;
}
console.log(keliling())

//soal 2
console.log("-------soal 2---------")
let kalimat = ""

var kata = () => {
  kata1="saya";
  kata2="adalah";
  kata3="seorang";
  kata4="fronted";
  kata5="developer";
  
  kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
  return kalimat
}
console.log(kata())

//soal 3
console.log("-------soal 3---------")
class Book{
    constructor(name,totalPage,price){
      this.name = name
      this.totalPage = totalPage
      this.price = price
    }
  }
  class Komik extends Book {
    constructor(name,totalPage,price){
      super(name,totalPage,price)
      this.isColorful = true
    }
    show(){
      return this.name+" "+this.totalPage+" "+this.price
    }
  }
  buku = new Komik("Nama Buku : "+ "komik"," , Halaman : " + 10," , Harga : " +10000)
  console.log(buku.show())