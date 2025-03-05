/**
 * Use a for loop to print numbers from 1 to 10.
 * Use a for loop to print even numbers from 2 to 20. // numbers % 2 === 0   => even number
 * Use a for loop to print numbers from 10 down to 1.
 */

for (let i = 1; i <= 10; i++){
    console.log(i)
}

for (let i = 2; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}

for (let i = 10; i >= 1; i--){
    console.log(i)
}

// Use a for loop to print "{number} is even" or "{number} is odd" for numbers from 1 to 20.
for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i, "is even")
    } else {
        console.log(i, "is odd")
    }
}


const myGarage = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Mustang", year: 2020 },
  { brand: "Chevrolet", model: "Camaro", year: 2019 },
  { brand: "BMW", model: "X5", year: 2023 },
  { brand: "Mercedes-Benz", model: "C-Class", year: 2022 },
  { brand: "Audi", model: "A4", year: 2021 },
  { brand: "Tesla", model: "Model 3", year: 2023 },
  { brand: "Nissan", model: "Altima", year: 2020 },
  { brand: "Hyundai", model: "Sonata", year: 2021 },
  { brand: "Kia", model: "Sorento", year: 2022 },
  { brand: "Volkswagen", model: "Passat", year: 2019 },
  { brand: "Mazda", model: "CX-5", year: 2023 },
  { brand: "Subaru", model: "Outback", year: 2021 },
  { brand: "Lexus", model: "RX 350", year: 2022 },
  { brand: "Dodge", model: "Charger", year: 2020 },
  { brand: "Jeep", model: "Wrangler", year: 2023 },
  { brand: "Porsche", model: "911", year: 2023 },
  { brand: "Ferrari", model: "488", year: 2021 },
  { brand: "Lamborghini", model: "Huracan", year: 2022 }
 ];
 
let carCount = 0;
for(let i = 0; i < myGarage.length; i++){
  if(myGarage[i].year > 2022){
    carCount++;
  }
}
console.log(carCount) // Output: 5

// use a for loop to print the brand and model older than 2022 and count them
let carCount1 = 0
for (let i = 0; i < myGarage.length; i++){
  if(myGarage[i].year < 2022){
    console.log(myGarage[i].brand, myGarage[i].model)
    carCount1++
  }
}
// use a for loop to print the brand and model year of 2022 and count them
let carCount2 = 0
for (let i = 0; i < myGarage.length; i++){
  if(myGarage[i].year === 2022){
    console.log(myGarage[i].brand, myGarage[i].model)
    carCount2++
  }
}

/**
 * A constant representing the number 12.
 * @constant {number}
 */
const num = 12
for (let i = 1; i <= num; i++) {
    if(i % 2 === 0){
        console.log(i, "is even number")
    } else {
        console.log(i, "is odd number")
    }
}

/**
 * A counter variable to keep track of the count.
 * @type {number}
 */
let count = 0; // 1
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // count = 0 + 1
    count = count + 1
    // count++;
  }
}
console.log(count) // Output: 10

/**
 * @type {number}
 * @description The variable `sum` is used to store the cumulative total of values.
 */
let sum = 0; // 1, 3, 6, 10, 15
for (let i = 1; i <= 5; i++) {
  // sum += i;
  sum = sum + i
  //      0 + 1
  //      1 + 2
  //      3 + 3
  //      6 + 4
  //     10 + 5
}
console.log(sum); // Output: 15

// use a for loop to print the sum of even numbers from 1 to 20
// output: 110
let sumEven = 0;
let evenCount = 0;
for (let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    sumEven += i
    evenCount++
  }
} 


// use a for loop to print the sum of array of numbers
// given array const numArr = [3, 7, 2, 9, 5]
// output: 26
const numA = [3, 7, 2, 9, 5];
let sumArr = 0;
for(let i = 0; i < numA.length; i++){
  sumArr += numA[i]
}
console.log(sumArr) // Output: 26

// use a for loop to print the sum of array of odd numbers
// given array const numA = [1, 7, 2, 9, 5, 5, 6, 7, 4, 4, 6, 7, 4, 3, 2, 5, 9, 9]
// output: 67
for (let i = 0; i < numA.length; i++){
  if(numA[i] % 2 === 1){
    sumArr += numA[i]
  }
}
console.log(sumArr) // Output: 67

/**
 * An array of integers.
 * @type {number[]}
 */
const arr = [3, 7, 2, 9, 5]
let largestNum = 0 // 3, 7, 9
for (let i = 0; i < arr.length; i++) {
          // 3 > 0
          // 7 > 3
          // 9 > 7
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
console.log(largestNum) // Output: 9

// use a for loop to print the lowest number in the array of numbers 
// and number cannot be negative and cannot be greater than 10
// given array const numArr = [1, 3, 2, 7, 5, 8, 9]

/**
 * An array of fruit names.
 * @type {string[]}
 */
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:  apple         banana         cherry

/**
 * Iterates over the array of fruits in reverse order.
 *
 * @param {number} i - The current index in the iteration, starting from the last element of the fruits array.
 */
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
// Output: cherry         banana         apple

/**
 * A constant representing a word.
 * @type {string}
 */
const word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
// Output: J         a         v         a         S         c         r         i         p         t

/**
 * Iterates over the characters of a string in reverse order.
 *
 * @param {number} i - The current index in the loop, starting from the end of the string.
 */
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
  reversed += word[i];
}
console.log(reversed); 
// Output: tpircSavaJ



// use a for loop to print the sum of array of odd numbers
const numArr = [1, 7, 2, 9, 5, 5, 6, 7, 4, 4, 6, 7, 4, 3, 2, 5, 9, 9];
let sumnum = 0;
for (let i = 0; i < numArr.lenth; i++) {
  console.log("adsfdasf", numArr[i]);
  if (numArr[i] % 2 === 1) {
    // console.log(numArr[i]);
    sumnum += numArr[i];
  }
}
console.log("heyheyhey", sumnum);


// use a for loop to print the sum of array of even numbers:  given array const numArr = [3, 7, 2, 9, 5] output: 2 
// use a for loop to print the sum of array of odd numbers: given array const numArr = [3, 7, 2, 9, 5] output: 24