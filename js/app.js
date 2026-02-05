// To-Do List Application
class TodoApp {
    constructor() {
        this.todos = this.loadTodos();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.setMinDate();
        this.render();
    }

    cacheDOM() {
        // Form elements
        this.form = document.getElementById('todoForm');
        this.todoInput = document.getElementById('todoInput');
        this.dateInput = document.getElementById('dateInput');
        this.todoError = document.getElementById('todoError');
        this.dateError = document.getElementById('dateError');

        // Todo list
        this.todoList = document.getElementById('todoList');

        // Filter buttons
        this.filterButtons = document.querySelectorAll('.btn-filter');
        
        // Clear completed button
        this.clearCompletedBtn = document.getElementById('clearCompleted');

        // Counters
        this.countAll = document.getElementById('countAll');
        this.countActive = document.getElementById('countActive');
        this.countCompleted = document.getElementById('countCompleted');
    }

    bindEvents() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Input validation
        this.todoInput.addEventListener('input', () => this.validateTodoInput());
        this.dateInput.addEventListener('input', () => this.validateDateInput());

        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });

        // Clear completed
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
    }

    setMinDate() {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        this.dateInput.setAttribute('min', today);
    }

    validateTodoInput() {
        const value = this.todoInput.value.trim();
        
        if (value === '') {
            this.todoError.textContent = '';
            this.todoInput.classList.remove('error');
            return false;
        }

        if (value.length < 3) {
            this.todoError.textContent = 'Tugas minimal 3 karakter';
            this.todoInput.classList.add('error');
            return false;
        }

        if (value.length > 100) {
            this.todoError.textContent = 'Tugas maksimal 100 karakter';
            this.todoInput.classList.add('error');
            return false;
        }

        this.todoError.textContent = '';
        this.todoInput.classList.remove('error');
        return true;
    }

    validateDateInput() {
        const value = this.dateInput.value;
        
        if (!value) {
            this.dateError.textContent = '';
            this.dateInput.classList.remove('error');
            return false;
        }

        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            this.dateError.textContent = 'Tanggal tidak boleh di masa lalu';
            this.dateInput.classList.add('error');
            return false;
        }

        this.dateError.textContent = '';
        this.dateInput.classList.remove('error');
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();

        const isTodoValid = this.validateTodoInput();
        const isDateValid = this.validateDateInput();

        if (!isTodoValid || !isDateValid) {
            if (!isTodoValid && this.todoInput.value.trim() === '') {
                this.todoError.textContent = 'Tugas tidak boleh kosong';
                this.todoInput.classList.add('error');
            }
            if (!isDateValid && !this.dateInput.value) {
                this.dateError.textContent = 'Tanggal harus diisi';
                this.dateInput.classList.add('error');
            }
            return;
        }

        this.addTodo();
    }

    addTodo() {
        const todoText = this.todoInput.value.trim();
        const todoDate = this.dateInput.value;

        const todo = {
            id: Date.now(),
            text: todoText,
            date: todoDate,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(todo);
        this.saveTodos();
        this.render();
        this.resetForm();
    }

    resetForm() {
        this.form.reset();
        this.todoError.textContent = '';
        this.dateError.textContent = '';
        this.todoInput.classList.remove('error');
        this.dateInput.classList.remove('error');
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    deleteTodo(id) {
        if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveTodos();
            this.render();
        }
    }

    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            alert('Tidak ada tugas yang selesai untuk dihapus');
            return;
        }

        if (confirm(`Hapus ${completedCount} tugas yang selesai?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveTodos();
            this.render();
        }
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter;
        if (!filter) return;

        this.currentFilter = filter;
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        this.render();
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    updateCounters() {
        const allCount = this.todos.length;
        const activeCount = this.todos.filter(t => !t.completed).length;
        const completedCount = this.todos.filter(t => t.completed).length;

        this.countAll.textContent = allCount;
        this.countActive.textContent = activeCount;
        this.countCompleted.textContent = completedCount;
    }

    render() {
        this.updateCounters();
        
        const filteredTodos = this.getFilteredTodos();

        if (filteredTodos.length === 0) {
            let message = 'No task found';
            
            if (this.currentFilter === 'active' && this.todos.length > 0) {
                message = 'All tasks completed!';
            } else if (this.currentFilter === 'completed') {
                message = 'No completed tasks';
            } else if (this.todos.length > 0) {
                message = 'No tasks with this filter';
            }

            this.todoList.innerHTML = `
                <div class="empty-state">
                    <p>${message}</p>
                </div>
            `;
            return;
        }

        this.todoList.innerHTML = filteredTodos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="app.toggleTodo(${todo.id})"
                >
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                </div>
                <div class="todo-date">${this.formatDate(todo.date)}</div>
                <button class="btn-delete" onclick="app.deleteTodo(${todo.id})">
                    Delete
                </button>
            </div>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadTodos() {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});