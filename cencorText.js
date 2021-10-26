// Censors these words: dolor, elit, quis, nisi, fugiat, proident, laborum; of this paragraph.

// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru

let words ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"

const newWords = words.split(" ")
    for(let i = 0; i<newWords.length; i++){
          if (newWords[i] == "dolor"){
              newWords[i] = "****"
          }
          if (newWords[i] == "elit") {
            newWords[i] = "****";
          }
          if (newWords[i] == "quis") {
            newWords[i] = "****";
          }
          if (newWords[i] == "nisi") {
            newWords[i] = "****";
          }
          if (newWords[i] == "fugiat") {
            newWords[i] = "****";
          }
          if (newWords[i] == "proident") {
            newWords[i] = "****";
          }
          if (newWords[i] == "laborum") {
            newWords[i] = "****";
          }
    }
   

console.log(newWords.join(" "));