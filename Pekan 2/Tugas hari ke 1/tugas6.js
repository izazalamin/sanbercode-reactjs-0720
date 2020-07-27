class Orang {
    constructor(nama){
      this.nama = nama
    }
    
    get namaOrang(){
      return this.nama;
    }
    set namaOrang(item){
      this.nama = item
    }
  }
  var orang1= new Orang("Asep")
  orang1.namaOrang= "Budi"
  console.log(orang1)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*var people = [
                {nama:"asep",tinggi:165 },
                {nama:"budi",tinggi:170 },
                {nama:"john",tinggi:189 }
               ]
  //console.log(orang.nama + "punya tinggi" + orang.tinggi)
  var iteration = 1
  people.forEach(function(item){
    console.log(iteration + " " + item.nama)
    iteration++;
  })
  
  var arr =people.map(function(item){
  return item.tinggi
  })
  console.log(arr)
  
  var filterPeople = people.filter(function(item){
    return item.tinggi >= 170
  })
  console.log(filterPeople)*/
  
  /*class Orang {
    constructor(varNama,varTinggi){
    this.nama = varNama
    this.tinggi = varTinggi
    }
    //method huruf kecil
    membaca(buku){
      return "saya membaca buku" + buku;
    }
    //static method yang dilakuin sebelom bikin objek baru
    static halo(){
      return "halo";
    }
  }
  
  class Dosen extends Orang{
    constructor(varNama){
      super(varNama)
      this.pekerjaan = "Dosen"
    }
  }
  var dosen1 = new Dosen()
  console.log(dosen1)
  /*var orang1 = new Orang();
  
  console.log(orang1.membaca(" Matematika"))
  console.log(Orang.halo())*/
  