const num = 12
for (let i = 1; i <= num; i++) {
    if(i % 2 === 0){
        console.log(i, "is even number")
    } else {
        console.log(i, "is odd number")
    }
}

let count = 0;
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum); // Output: 15

const arr = [3, 7, 2, 9, 5]
let max = 0
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

const word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
  reversed += word[i];
}
console.log(reversed); // Output: "tpircSavaJ"