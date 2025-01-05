// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function logCats(Milo, Otis, Garfield) {
  console.log("Cats Members:", Milo, Otis, Garfield)
  
}
function destructivelyAppendCat(name) {
  cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
  }

  function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
  }

  function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
  }

  function appendCat(Broom) {
    return [...cats, Broom];
  }

  function prependCat(Arnold) {
    return [Arnold,...cats];
  }
  
  function removeLastCat() {
    cats.slice(-2)
    return cats.slice(0, 2);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }
  