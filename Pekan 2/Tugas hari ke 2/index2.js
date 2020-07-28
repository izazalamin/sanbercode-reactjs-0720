var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function baca(){
    readBooksPromise(10000,books[0]).then(function(baca){
        console.log(baca)
        readBooksPromise(baca,books[1]).then(function(baca){
            console.log(baca)
            readBooksPromise(baca,books[2]).then(function(baca){
                console.log(baca)
                readBooksPromise(baca,books[3]).then(function(baca){
                    console.log(baca);
                })
                .catch(function(finish){
                    console.log(finish)
                })
            })
        })
    })
}
baca();