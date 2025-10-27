# 📝 To-Do List App | تطبيق قائمة المهام

![To-Do List](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A simple, beautiful, and beginner-friendly To-Do List application built with vanilla JavaScript. Perfect for learning DOM manipulation and event handling!

## ✨ Features | المميزات

- ✅ **Add tasks** - قم بإضافة مهام جديدة بسهولة
- 🗑️ **Delete tasks** - احذف المهام المكتملة بنقرة واحدة
- 🎨 **Beautiful UI** - واجهة مستخدم جميلة وعصرية
- 📱 **Responsive Design** - يعمل على جميع الأجهزة
- ⚡ **Fast & Lightweight** - سريع وخفيف بدون مكتبات خارجية
- 🌈 **Smooth Animations** - انتقالات سلسة وجذابة

## 🎯 Demo | معاينة

![To-Do App Demo](https://raw.githubusercontent.com/KaizerAE/js-todo-app/main/demo.gif)

> Open `index.html` in your browser to see the app in action!

## 🚀 Quick Start | البداية السريعة

### Installation | التثبيت

```bash
# Clone the repository
git clone https://github.com/KaizerAE/js-todo-app.git

# Navigate to the project folder
cd js-todo-app

# Open index.html in your browser
# Or use Live Server extension in VS Code
```

### Usage | الاستخدام

1. **Add a task** - Type your task in the input field
2. **Press Enter or click Add** - The task will be added to the list
3. **Delete a task** - Click the delete button next to any task

## 📁 Project Structure | هيكل المشروع

```
js-todo-app/
│
├── index.html      # Main HTML file | الملف الرئيسي
├── script.js       # JavaScript logic | منطق التطبيق
└── README.md       # Documentation | التوثيق
```

## 💻 Code Overview | نظرة على الكود

### HTML Structure
The HTML file contains a simple structure with:
- Input field for entering tasks
- Add button
- List container for displaying tasks

### JavaScript Functions

#### Main Functions | الوظائف الرئيسية

```javascript
// Add a new task
function addTodo() {
    // Creates a new task object
    // Adds it to the todos array
    // Renders the updated list
}

// Delete a task
function deleteTodo(id) {
    // Filters out the task with matching id
    // Re-renders the list
}

// Render all tasks
function renderTodos() {
    // Clears the list
    // Creates DOM elements for each task
    // Displays empty state if no tasks
}
```

## 🎨 Customization | التخصيص

### Change Colors

Edit the CSS in `index.html` to customize colors:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button color */
background: #667eea;

/* Delete button */
background: #dc3545;
```

## 📚 Learning Points | نقاط التعلم

This project demonstrates:

- ✅ **DOM Manipulation** - querySelector, getElementById
- ✅ **Event Listeners** - click, keypress events
- ✅ **Array Methods** - push, filter, forEach
- ✅ **Dynamic HTML Creation** - createElement, appendChild
- ✅ **CSS Animations** - keyframes, transitions
- ✅ **Responsive Design** - flexbox, media queries

## 🌟 Future Enhancements | تحسينات مستقبلية

- [ ] Add local storage to save tasks
- [ ] Mark tasks as completed
- [ ] Edit existing tasks
- [ ] Filter tasks (all/active/completed)
- [ ] Add due dates
- [ ] Add categories/tags

## 🤝 Contributing | المساهمة

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License | الترخيص

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author | المطور

**KaizerAE**

- GitHub: [@KaizerAE](https://github.com/KaizerAE)

## ⭐ Show Your Support | دعمك

Give a ⭐️ if this project helped you learn something new!

---

**Made with ❤️ for beginners learning JavaScript**

*Happy Coding! 🚀*
