function changeText() {
    document.getElementById("message").innerText = "JavaScript is fun!";
    document.getElementById("greeting").innerText = "You are now code-master!";
}

// Array of food items
const foods = ["Pho", "Korean Ramyun(Spicy)", "Egg Jjim", "Popeyes", "Jja Jang Myun(only Choong Hwa Won)", "Jjam Bbong(only Morak)"];

// TO-DO
// 1. Get the <ul> element with id "food-list"
// 2. Create a <li> element for each food item in the array
// 3. Set the text content of each <li> element to a food item
// 4. Append each <li> element to the <ul> element
function renderListFavoriteFoods(){
    const ul = document.getElementById("food-list");
    ul.innerHTML = null;
    for(let i = 0; i < foods.length; i++){
        const li = document.createElement("li");
        li.textContent = foods[i];
        ul.appendChild(li);
    }
}

const hobbies = ["Reading", "Coding", "Watching movies", "Playing games", "Listening to music"];

function renderListMyHobbies(){
    const ul = document.getElementById("hobby-list");
    ul.innerHTML = null;
    for(let i = 0; i < hobbies.length; i++){
        const li = document.createElement("li");
        li.textContent = hobbies[i];
        ul.appendChild(li);
    }
}

function handleSubmit() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // let agree = document.getElementById("agree").checked;

    // TO-DO
    // display username and password inside of the div with id "message"
    const message = document.getElementById("message-3")
    message.innerText = `Username: ${username}, Password: ${password}`;

    return false
}

const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 23 },
    { name: "Eve", age: 24 },
    { name: "Frank", age: 25 },
    { name: "Grace", age: 26 },
    { name: "Hank", age: 27 },
    { name: "Ivy", age: 28 },
    { name: "Jack", age: 29 }
]

// TO-DO
// 1. Get the <ul> element with id "students-list"
// 2. Create a <li> element for each student in the array
// 3. Set the text content of each <li> element to a student's name and age
// 4. Append each <li> element to the <ul> element



const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// using a for loop, print `foo` if the number is divisible by 2, print `bar` if 
// number is divisible by 3 and print `foobar` if number is divisbile by 2 && 3

for(let i = 0; i < number.length; i++){
    if(number[i] % 2 === 0 && number[i] % 3 === 0){
        console.log("foobar");
    } else if(number[i] % 2 === 0){
        console.log("foo");
    } else if(number[i] % 3 === 0){
        console.log("bar");
    }
}