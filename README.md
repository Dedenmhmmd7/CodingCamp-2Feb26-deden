# 📝 To do List Web Application

A modern, dark-themed todo list application built with vanilla JavaScript, HTML, and CSS. Features a clean UI inspired by contemporary design principles with full CRUD functionality and local storage persistence.

![To do List App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/javascript-ES6-yellow.svg)

## ✨ Features

- ✅ **Add Tasks** - Create new todos with task name and due date
- 📅 **Date Validation** - Prevents selecting past dates
- 🔍 **Filter System** - Filter by All, Active, or Completed tasks
- ✏️ **Mark Complete** - Toggle task completion status
- 🗑️ **Delete Tasks** - Remove individual tasks or all completed tasks
- 💾 **Local Storage** - Automatic data persistence across sessions
- 🌙 **Dark Theme** - Modern dark UI with gradient background
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop
- ⚡ **Real-time Counters** - Live task count for each filter

## 🎨 Design Features

- **Modern Dark Theme** with purple accent colors
- **Status Badges** - Visual indicators (Pending/Done)
- **Grid Layout** - Clean table-like structure
- **Smooth Animations** - Subtle hover and transition effects
- **Form Validation** - Input validation with error messages
- **Empty States** - Contextual messages when no tasks exist

## 🚀 Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-list-app.git
```

2. Navigate to the project directory:
```bash
cd todo-list-app
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply drag and drop the `index.html` file into your browser.

## 📁 Project Structure

```
todo-app/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles in one file
├── js/
│   └── app.js         # Application logic
└── README.md          # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6)** - Vanilla JS with classes
- **LocalStorage API** - Data persistence

## 💡 Usage

### Adding a Task

1. Type your task in the "Add a todo..." input field
2. Select a due date (must be today or future date)
3. Click the **+** button or press Enter

### Filtering Tasks

- **All** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

### Managing Tasks

- **Complete a task** - Click the checkbox
- **Delete a task** - Click the "Delete" button
- **Delete all completed** - Click "DELETE ALL" button

## ⚙️ Validation Rules

- **Task name**: Minimum 3 characters, maximum 100 characters
- **Due date**: Cannot be in the past
- Both fields are required

## 🎯 Key Features Explained

### Local Storage Persistence

All tasks are automatically saved to browser's local storage. Your todos will persist even after:
- Closing the browser
- Refreshing the page
- System restart

### Smart Filtering

The filter system provides real-time counters:
- Shows how many tasks in each category
- Updates automatically when tasks change
- Maintains filter selection across operations

### Date Formatting

Displays dates in MM/DD/YYYY format for clarity and consistency.

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Breakpoints

- **Desktop**: 680px and above (optimal experience)
- **Tablet**: 600px - 680px
- **Mobile**: Below 600px (stacked layout)

## 🔧 Customization

### Changing Colors

Edit `css/style.css` and modify the color variables:

```css
/* Primary Purple */
background: #7c3aed;

/* Background Gradient */
background: linear-gradient(135deg, #1a1f3a 0%, #2d3561 100%);

/* Status Colors */
Pending: #fbbf24 (yellow)
Done: #10b981 (green)
```

### Modifying Validation Rules

Edit `js/app.js` in the validation functions:

```javascript
validateTodoInput() {
    // Change minimum/maximum length here
    if (value.length < 3) { ... }
    if (value.length > 100) { ... }
}
```

## 🐛 Known Issues

None at the moment. Please report issues on the GitHub issues page.

## 🚧 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Task priority levels
- [ ] Task categories/tags
- [ ] Due date notifications
- [ ] Export/Import tasks
- [ ] Drag and drop reordering
- [ ] Search functionality
- [ ] Edit task inline
- [ ] Recurring tasks
- [ ] Cloud sync

## 📝 Code Quality

### Best Practices Implemented

- ✅ Semantic HTML5
- ✅ BEM-like CSS methodology
- ✅ ES6+ JavaScript features
- ✅ Single Responsibility Principle
- ✅ DRY (Don't Repeat Yourself)
- ✅ Meaningful variable names
- ✅ Commented code sections
- ✅ Responsive design
- ✅ Accessibility considerations

### Performance Optimizations

- Minimal DOM manipulation
- Event delegation where appropriate
- Efficient data structures
- LocalStorage for persistence
- CSS transitions over JavaScript animations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Todo List App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/Dedenmhmmd7)


## 🙏 Acknowledgments

- Design inspiration from modern todo applications
- Icons and UI patterns from contemporary web design
- Thanks to the open-source community

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact: your.email@example.com

---

⭐ **Star this repository** if you find it helpful!

**Made with ❤️ and JavaScript**
