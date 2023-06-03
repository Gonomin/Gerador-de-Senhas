const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default function randSymbols() {
  switch (rand(1, 5)) {
    case 1: return String.fromCharCode(rand(33, 48));

    case 2: return String.fromCharCode(rand(58, 65));

    case 3: return String.fromCharCode(rand(91, 97));

    case 4: return String.fromCharCode(rand(123, 127));
  }
}