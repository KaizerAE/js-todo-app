// Get elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Array to store todos
let todos = [];

// Add todo function
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert('الرجاء إدخال مهمة!');
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: todoText
    };
    
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
}

// Delete todo function
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Render todos function
function renderTodos() {
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">لا توجد مهام حالياً. أضف مهمة جديدة!</div>';
        return;
    }
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'حذف';
        deleteBtn.onclick = () => deleteTodo(todo.id);
        
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Event listeners
addBtn.addEventListener('click', addTodo);

// Add todo on Enter key press
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();
