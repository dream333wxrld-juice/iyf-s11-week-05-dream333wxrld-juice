// Task 10.1: Event Listeners

// Click Counter
let count = 0;
const counterDisplay = document.getElementById("counter-display");

document.getElementById("increment").addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function() {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    counterDisplay.textContent = count;
});

// Task 10.2: The Event Object

document.addEventListener("click", function(event) {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
});

document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);
    console.log("Code:", event.code);

    // Keyboard Shortcuts
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    if (event.key === "Escape") {
        document.querySelectorAll("input").forEach(input => input.value = "");
    }

    if (event.ctrlKey && event.key === "Enter") {
        document.getElementById("contact-form").requestSubmit();
    }
});

// Task 10.3: Event Bubbling & Delegation

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Delegated Task List
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");

addTaskBtn.addEventListener("click", function() {
    const text = newTaskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    newTaskInput.value = "";
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});

// Task 10.4: Form Handling

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    if (nameInput.value.length >= 2 && emailInput.value.includes("@")) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    input.classList.add("error");
    console.log("Error:", message);
}

function clearError(input) {
    input.classList.remove("error");
}