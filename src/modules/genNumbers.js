export default function randNumber() {
  let min = 1;
  let max = 10;

  return String(Math.floor(Math.random() * (max - min) + min));
}