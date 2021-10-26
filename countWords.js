// Count each of these words: aku, ingin and dapat.

// Aku ingin begini
// Aku ingin begitu
// Ingin ini itu banyak sekali

// Semua semua semua
// Dapat dikabulkan
// Dapat dikabulkan
// Dengan kantong ajaib

// Aku ingin terbang bebas
// Di angkasa
// Hei… baling baling bambu

// La... la... la...
// Aku sayang sekali
// Doraemon

// La... la... la...
// Aku sayang sekali




const lyrics = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali
Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib
Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu
La... la... la...
Aku sayang sekali
Doraemon
La... la... la...`;

console.log("aku: " + lyrics.match(/aku/gi).length); 
console.log("ingin: " + lyrics.match(/ingin/gi).length);
console.log("dapat: " + lyrics.match(/dapat/gi).length);
