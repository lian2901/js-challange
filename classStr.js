// Str.upper('malam') // MALAM

//     Add capitalize method to capitalize all first letter of words.

// Str.capitalize('saya ingin makan') // Saya Ingin Makan

//     Add reverse method to reverse a string.

// Str.reverse('kasur') // rusak

//     Add contains method to determine a text – contains a string or more.

// Str.contains('Saya ingin makan sate', 'makan') // true
// Str.contains('Saya ingin makan sate', 'rujak') // false
// Str.contains('Saya ingin makan sate', ['sate', 'rujak']) // true

//     Create a random aplhanum string. By default it will generate 16 random chars. But if you pass a number as 1st parameter, it will generate random chars based on that number.

// Str.random()   // hef2nCi273c8D2dz
// Str.random(6)  // ckS3jP
// Str.random(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4

let str= "MAKAN";
let lowerStr=str.toLowerCase();
console.log(lowerStr);
let str1= "malam";
let upperStr=str1.toLocaleUpperCase();
console.log(upperStr);
const capitalize = (s) =>{
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}
console.log(capitalize('saya ingin makan'));

let txt = "tamat"
let tReverse = txt.split("").reverse().join("");
console.log(tReverse);

//jawaban benar 
class Str {
  //LowerCase
  static lower(string) {
    //Buat function
    return string.toLowerCase(); //ubah ke lowercase
  }
  //UpperCase
  static upper(string) {
    //Buat function
    return string.toUpperCase(); // ubahke uppercase
  }
  //Capitalize
  static capitalize(string) {
    //Buat Funtion
    return string
      .split(" ") // displit dahulu
      .map((str) => str.charAt(0).toUpperCase() + str.substr(1)) //gunakan map
      .join(" "); //lalu join
  }
  //Contain
  static contains(string, value) {
    if (typeof value === "string") {
      return string.includes(value); //include value
    }

    if (Array.isArray(value)) {
      return Boolean(value.find((val) => string.includes(val)));
    }
  }
  // Random
  static random(count = 16) {
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let text = "";

    for (let i = 0; i < count; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  // slug
  static slug_dash(string) {
    return string
      .toLowerCase()
      .replace(/\W/gi, "-") //gunakan regex
      .replace(/-{2,}/gi, "-")
      .replace(/-$/, "");
  }
  static slug_under(string) {
    return string
      .toLowerCase()
      .replace(/\W/gi, "_") //gunakan regex
      .replace(/-{2,}/gi, "_")
      .replace(/-$/, " ");
  }
}

  console.log(Str.lower('MAKAN'))
  console.log(Str.upper('makan'))
  console.log(Str.capitalize('makan dan minum'))
  console.log(Str.contains('Saya ingin makan sate', 'makan'))
  console.log(Str.contains('Saya ingin makan sate', 'rujak'))
  console.log(Str.contains('Saya ingin makan sate', ['makan', 'rujak']))
  console.log(Str.random())
  console.log(Str.random(6))
  console.log(Str.random(32))
  console.log(Str.slug_dash('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'))
  console.log(Str.slug_under('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'))

  const character = "lorem ipsum"
  const newCharacter = character.split("").length
  console.log(newCharacter);
   // 11

const word = "lorem ipsum";
const newWord = word.split(" ").length;
console.log(newWord);

const huruf = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const trimHurufDefault = huruf.slice(0,99)
console.log(trimHurufDefault+ "...");

const trimHuruf20 = huruf.slice(0, 20);
console.log(trimHuruf20+"...");

const word1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const trimWord = (word1,limit=3)=> word1.split(" ",limit).join(" ")
console.log(trimWord(word1));
