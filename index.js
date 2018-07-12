// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens,name]
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  var lastKittens = kittens.slice(0, kittens.length -1)
  return lastKittens
}

function removeFirstKitten() {
  var firstKittens = kittens.slice(1)
  return firstKittens
}
