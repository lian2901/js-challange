// Input text below to check palindrome or not palindrome;

// ibu ratna antar ubi
// kasur ini rusak
// A nut for a jar of tuna.
// Borrow or rob?
// Was it a car or a cat I saw?
// Yo, banana boy!
// UFO tofu?

function palindrome(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  return newStr.split("").reverse().join("") === newStr;
}
console.log(palindrome("ibu ratna antar ubi"));
