function changeText() {
    document.getElementById("message").innerText = "JavaScript가 재미있어요!";
}


// Array of food items
const foods = ["Pizza", "Sushi", "Burger", "Pasta", "Salad"];

// Function to render list
function renderList() {
    const listContainer = document.getElementById("food-list"); // Get <ul> element
    listContainer.innerHTML = ""; // Clear existing list (if any)

    for(let i = 0; i < foods.length; i++){
        const listItem = document.createElement("li"); // Create <li> element
        listItem.textContent = foods[i]; // Set text content
        listContainer.appendChild(listItem); // Append <li> to <ul>
    }
}