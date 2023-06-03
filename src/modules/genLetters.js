export default function randUpperCaseLetters() {
  let min = 97;
  let max = 123;
  let randomicLetters = Math.floor(Math.random() * (max - min) + min);

  return String.fromCharCode(randomicLetters);
}