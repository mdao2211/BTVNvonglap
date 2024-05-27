let array = [];

function checkArrays() {
  displayResult("Arrays: " + array);
}

function clearResult() {
  array = [];
  displayResult("");
}

function addIntegers() {
  let n = Number(document.getElementById("integerInput").value);

  if (Number.isInteger(n) && n > 0) {
    for (let i = 0; i < n; i++) {
      let input = Number(prompt(`Enter number ${i + 1}`));
      array.push(input);
    }
    displayResult("Array: " + array);
  } else {
    alert("Please enter a valid positive integer.");
  }
}

function addFloats() {
  let input = document.getElementById("floatInput").value;
  if (input.trim() !== "") {
    let floatNumbers = input.split(",").map(Number);
    floatNumbers.forEach((num) => {
      if (!isNaN(num)) {
        array.push(num);
      }
    });
    displayResult("Array: " + array);
  } else {
    alert("Please enter valid float numbers separated by commas.");
  }
}

function sumPositive() {
  const sum = array.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
  displayResult("Sum of positive numbers: " + sum);
}

function countPositive() {
  const count = array.filter((num) => num > 0).length;
  displayResult("Count of positive numbers: " + count);
}

function findMin() {
  const min = Math.min(...array);
  displayResult("Minimum number: " + min);
}

function findMinPositive() {
  const positives = array.filter((num) => num > 0);
  const minPositive =
    positives.length > 0 ? Math.min(...positives) : "No positive numbers";
  displayResult("Minimum positive number: " + minPositive);
}

function findLastEven() {
  const lastEven = array
    .slice()
    .reverse()
    .find((num) => num % 2 === 0);
  displayResult(
    "Last even number: " + (lastEven !== undefined ? lastEven : -1)
  );
}

function swapValues() {
  const pos1 = parseInt(prompt("Enter first position to swap:"));
  const pos2 = parseInt(prompt("Enter second position to swap:"));
  if (pos1 >= 0 && pos2 >= 0 && pos1 < array.length && pos2 < array.length) {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
    displayResult("Array after swap: " + array);
  } else {
    displayResult("Invalid positions");
  }
}

function sortArray() {
  array.sort((a, b) => a - b);
  displayResult("Sorted array: " + array);
}

function findFirstPrime() {
  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
  const firstPrime = array.find(isPrime);
  displayResult(
    "First prime number: " + (firstPrime !== undefined ? firstPrime : -1)
  );
}

function countIntegersInArray() {
  const count = array.filter((num) => Number.isInteger(num)).length;
  displayResult("Count of integers in array: " + count);
}

function comparePosNeg() {
  const positives = array.filter((num) => num > 0).length;
  const negatives = array.filter((num) => num < 0).length;
  if (positives > negatives) {
    displayResult("More positive numbers");
  } else if (negatives > positives) {
    displayResult("More negative numbers");
  } else {
    displayResult("Equal number of positive and negative numbers");
  }
}

function displayResult(message) {
  document.getElementById("result").innerText = message;
}
  