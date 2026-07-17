// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "task-delete-btn";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;
    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    updateStats();
}

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function updateStats() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

function filterTodos(filter) {
    currentFilter = filter;
    filters.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
    renderTodos();
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;
    addTodo(text);
    input.value = "";
    input.focus();
});

todoList.addEventListener("click", function(event) {
    const li = event.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.classList.contains("task-delete-btn")) {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

filters.forEach(btn => {
    btn.addEventListener("click", function() {
        filterTodos(btn.dataset.filter);
    });
});

clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// Initialize
renderTodos();