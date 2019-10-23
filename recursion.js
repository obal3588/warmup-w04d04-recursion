// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(){
    // This function returns the largest number in a given array.
}

function factorial(){
    // This function returns the factorial of a given number.
}

function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(n) {

  if (n > 1) {
    const branch = coinFlips(n - 1);
    const root = ["H", "T"];
    const outcome = [];
    for (let index = 0; index < root.length; index++) {
      const element = root[index];
      for (let j = 0; j < branch.length; j++) {
        const item = branch[j];
        const newItem = item + element;
        outcome.push(newItem);
      }
    }
    console.log(outcome);
    return outcome;
  } else {
    return ["H", "T"];
  }
}

coinFlips(5);


function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
