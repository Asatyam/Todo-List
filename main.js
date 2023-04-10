/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }

  addNewTodo(todo) {
    this.todos = [...this.todos, todo];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* eslint-disable comma-dangle */


// import Todo from './Todo';

const Projects = [];
const todo1 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work A', 'Testing1', 'High');
const todo2 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work B', 'Testing2', 'High');
const todo3 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work C', 'Testing3', 'High');
const todos = [todo1, todo2, todo3];
const home = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Home', todos);
const today = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today', [todo2, todo3, todo1]);
let currProject = home;
Projects.push(home);
Projects.push(today);

const main = document.querySelector('.main');

const createHeading = () => {
  const headingDiv = document.createElement('div');
  const headingPara = document.createElement('p');
  headingDiv.setAttribute('class', 'heading');
  headingPara.textContent = 'ToDo List';
  headingDiv.appendChild(headingPara);
  main.appendChild(headingDiv);
};

const createSidebar = () => {
  const sidebarDiv = document.createElement('div');
  sidebarDiv.setAttribute('class', 'sidebar');
  main.appendChild(sidebarDiv);
};

const createContent = () => {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'content');
  main.appendChild(contentDiv);
};

const createProject = () => {
  const addProjectBtn = document.createElement('button');
  addProjectBtn.setAttribute('class', 'addProjectBtn');
  addProjectBtn.textContent = '+ Add Project';
  const sidebar = document.querySelector('.sidebar');
  sidebar.appendChild(addProjectBtn);
};

const createProjectForm = () => {
  const form = document.createElement('form');
  form.setAttribute('class', 'project-form');
  form.innerHTML = `<input
        type="text"
        name="project-name"
        id="project-name"
        placeholder="Project Name"
        required
      />
      <div class="buttons">
      <button type="submit" class="new-project">Add</button>
      <button type="button" class="cancel-project">Cancel</button>
      </div>`;
  const sidebar = document.querySelector('.sidebar');
  sidebar.appendChild(form);
};

const displayProjectForm = () => {
  const addProjectBtn = document.querySelector('.addProjectBtn');
  addProjectBtn.addEventListener('click', () => {
    const projectForm = document.querySelector('.project-form');
    projectForm.classList.add('active');
  });
};
const cancelProject = () => {
  const cancelProjectBtn = document.querySelector('.cancel-project');
  const projectForm = document.querySelector('.project-form');
  cancelProjectBtn.addEventListener('click', () => {
    projectForm.reset();
    projectForm.classList.remove('active');
  });
};
const showProjects = (project) => {
  const sidebar = document.querySelector('.sidebar');
  const projectsBtn = document.createElement('button');
  projectsBtn.setAttribute('class', 'project');
  projectsBtn.textContent = project.name;
  // eslint-disable-next-line no-use-before-define
  displayTodoEventListener(projectsBtn);
  sidebar.appendChild(projectsBtn);
};
const displayProjects = () => {
  Projects.forEach(showProjects);
};
const addNewProject = () => {
  const projectForm = document.querySelector('.project-form');
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = document.querySelector('#project-name').value;
    const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName, []);
    Projects.push(project);
    projectForm.reset();
    projectForm.classList.remove('active');
    showProjects(project);
  });
};

const createNewTodo = () => {
  const newToDoBtn = document.createElement('button');
  newToDoBtn.setAttribute('class', 'new-todo');
  newToDoBtn.textContent = '+  Create Todo item';
  const content = document.querySelector('.content');
  content.appendChild(newToDoBtn);
};

const createTodoForm = () => {
  const form = document.createElement('form');
  form.setAttribute('class', 'todo-form');
  form.innerHTML = `<input type="text" name="title" id="title" placeholder="Title" required />
      <textarea id="description" cols="2" rows="2" placeholder="Description"></textarea>
      <fieldset>
        <legend>Priority</legend>
        <input type="radio" name="priority" value="low" id="low" />Low
        <input type="radio" name="priority" value="medium" id="medium" />Medium
        <input type="radio" name="priority" value="high" id="high"/>High
      </fieldset>
      <div class="todo-buttons">
        <button type="submit" class="add-todo">Create</button>
        <button type="button" class="cancel-todo">Cancel</button>
      `;
  document.body.appendChild(form);
};
const displayTodoForm = () => {
  const newToDoBtn = document.querySelector('.new-todo');
  newToDoBtn.addEventListener('click', () => {
    const form = document.querySelector('.todo-form');
    console.log('working');
    form.classList.add('active');
    main.classList.add('inactive-todo');
  });
};
const cancelTodo = () => {
  const cancelTodoBtn = document.querySelector('.cancel-todo');

  const form = document.querySelector('.todo-form');
  cancelTodoBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('active');
    main.classList.remove('inactive-todo');
  });
};
const displayOneTodo = (todo) => {
  const todoUl = document.querySelector('.todo-list');
  const todoBtn = document.createElement('button');
  todoBtn.setAttribute('class', 'todo');
  todoBtn.classList.add(todo.priority.toLowerCase());
  todoBtn.textContent = `${todo.title}`;
  // eslint-disable-next-line no-use-before-define
  todoBtn.addEventListener('click', temp);
  todoUl.appendChild(todoBtn);
};
const displayTodos = () => {
  const content = document.querySelector('.content');
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', 'todo-list');
  content.appendChild(todoDiv);
  Projects.push(home);
  home.todos.forEach(displayOneTodo);
};
const createDescriptionCard = (e) => {
  const descriptionPara = document.querySelector('.description-card>p');
  const todoTitle = e.target.textContent;
  const { description } = currProject.todos.find((x) => x.title === todoTitle);
  descriptionPara.textContent = description;
  console.log(description);
};
function temp(e) {
  const descriptionDiv = document.querySelector('.description-card');
  descriptionDiv.classList.add('active');
  main.classList.add('inactive-description');
  createDescriptionCard(e);
}
const displayDescription = () => {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.setAttribute('class', 'description-card');
  const descriptionPara = document.createElement('p');
  descriptionDiv.appendChild(descriptionPara);
  document.body.appendChild(descriptionDiv);
  const todoBtns = document.querySelectorAll('.todo');
  todoBtns.forEach((todoBtn) => {
    todoBtn.addEventListener('click', temp);
  });
};

const addNewTodo = () => {
  const form = document.querySelector('.todo-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    form.reset();
    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, priority);
    currProject.addNewTodo(todo);
    displayOneTodo(todo);
    form.classList.remove('active');
    main.classList.remove('inactive-todo');
  });
};

const hideDescription = () => {
  const descriptionDiv = document.querySelector('.description-card');
  document.addEventListener('click', (e) => {
    // check if the target is div or todo button
    if (
      !descriptionDiv.contains(e.target) &&
      e.target.className.split(' ')[0] !== 'todo' // since there are multiple classes
    ) {
      descriptionDiv.classList.remove('active');
      console.log();
      main.classList.remove('inactive-description');
    }
  });
};
const displayTodoEventListener = (btn) => {
  btn.addEventListener('click', (e) => {
    const projectName = e.target.textContent;
    const todoList = document.querySelector('.todo-list');
    todoList.textContent = '';
    const project = Projects.find((x) => x.name === projectName);
    currProject = project;
    project.todos.forEach(displayOneTodo);
  });
};
const displayTodoOfProject = () => {
  const projectBtns = document.querySelectorAll('.project');
  projectBtns.forEach(displayTodoEventListener);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  createHeading();
  createSidebar();
  createContent();
  createProject();
  createProjectForm();
  displayProjectForm();
  cancelProject();
  displayProjects();
  addNewProject();
  createNewTodo();
  createTodoForm();
  displayTodoForm();
  cancelTodo();
  displayTodos();
  addNewTodo();
  displayDescription();
  hideDescription();
  displayTodoOfProject();
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


(0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
// const Home = new Project('Home', []);
// Projects.push(Home);
// const todo1 = new Todo('Study Data Structures and algorithms', 'testing');
// Home.addNewTodo(todo1);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNCOztBQUV0QiwrQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgfVxuXG4gIGFkZE5ld1RvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MgPSBbLi4udGhpcy50b2RvcywgdG9kb107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuXG5jb25zdCBQcm9qZWN0cyA9IFtdO1xuY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnRG8gd29yayBBJywgJ1Rlc3RpbmcxJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ0RvIHdvcmsgQicsICdUZXN0aW5nMicsICdIaWdoJyk7XG5jb25zdCB0b2RvMyA9IG5ldyBUb2RvKCdEbyB3b3JrIEMnLCAnVGVzdGluZzMnLCAnSGlnaCcpO1xuY29uc3QgdG9kb3MgPSBbdG9kbzEsIHRvZG8yLCB0b2RvM107XG5jb25zdCBob21lID0gbmV3IFByb2plY3QoJ0hvbWUnLCB0b2Rvcyk7XG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScsIFt0b2RvMiwgdG9kbzMsIHRvZG8xXSk7XG5sZXQgY3VyclByb2plY3QgPSBob21lO1xuUHJvamVjdHMucHVzaChob21lKTtcblByb2plY3RzLnB1c2godG9kYXkpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgY3JlYXRlSGVhZGluZyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkaW5nUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGVhZGluZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ1BhcmEudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0JztcbiAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nUGFyYSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZ0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhckRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcbiAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInByb2plY3QtbmFtZVwiXG4gICAgICAgIGlkPVwicHJvamVjdC1uYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm5ldy1wcm9qZWN0XCI+QWRkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8L2Rpdj5gO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuY29uc3Qgc2hvd1Byb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RzQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpO1xuICBwcm9qZWN0c0J0bi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGRpc3BsYXlUb2RvRXZlbnRMaXN0ZW5lcihwcm9qZWN0c0J0bik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xufTtcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgUHJvamVjdHMuZm9yRWFjaChzaG93UHJvamVjdHMpO1xufTtcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIFtdKTtcbiAgICBQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3QpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy10b2RvJyk7XG4gIG5ld1RvRG9CdG4udGV4dENvbnRlbnQgPSAnKyAgQ3JlYXRlIFRvZG8gaXRlbSc7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1RvRG9CdG4pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWZvcm0nKTtcbiAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMlwiIHJvd3M9XCIyXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIgaWQ9XCJsb3dcIiAvPkxvd1xuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiIC8+TWVkaXVtXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIiBpZD1cImhpZ2hcIi8+SGlnaFxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtdG9kb1wiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC10b2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICBgO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcbmNvbnN0IGRpc3BsYXlUb2RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuICBuZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUtdG9kbycpO1xuICB9KTtcbn07XG5jb25zdCBjYW5jZWxUb2RvID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10b2RvJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgY2FuY2VsVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlLXRvZG8nKTtcbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheU9uZVRvZG8gPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8nKTtcbiAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gIHRvZG9CdG4udGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcCk7XG4gIHRvZG9VbC5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcbn07XG5jb25zdCBkaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWxpc3QnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgUHJvamVjdHMucHVzaChob21lKTtcbiAgaG9tZS50b2Rvcy5mb3JFYWNoKGRpc3BsYXlPbmVUb2RvKTtcbn07XG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbkNhcmQgPSAoZSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZD5wJyk7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBjdXJyUHJvamVjdC50b2Rvcy5maW5kKCh4KSA9PiB4LnRpdGxlID09PSB0b2RvVGl0bGUpO1xuICBkZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xufTtcbmZ1bmN0aW9uIHRlbXAoZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jYXJkJyk7XG4gIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlLWRlc2NyaXB0aW9uJyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uQ2FyZChlKTtcbn1cbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbi1jYXJkJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gIGNvbnN0IHRvZG9CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcbiAgdG9kb0J0bnMuZm9yRWFjaCgodG9kb0J0bikgPT4ge1xuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZW1wKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGROZXdUb2RvID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICAgKS52YWx1ZTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgIGN1cnJQcm9qZWN0LmFkZE5ld1RvZG8odG9kbyk7XG4gICAgZGlzcGxheU9uZVRvZG8odG9kbyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlLXRvZG8nKTtcbiAgfSk7XG59O1xuXG5jb25zdCBoaWRlRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNhcmQnKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIHRoZSB0YXJnZXQgaXMgZGl2IG9yIHRvZG8gYnV0dG9uXG4gICAgaWYgKFxuICAgICAgIWRlc2NyaXB0aW9uRGl2LmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJylbMF0gIT09ICd0b2RvJyAvLyBzaW5jZSB0aGVyZSBhcmUgbXVsdGlwbGUgY2xhc3Nlc1xuICAgICkge1xuICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZS1kZXNjcmlwdGlvbicpO1xuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheVRvZG9FdmVudExpc3RlbmVyID0gKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgdG9kb0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdHMuZmluZCgoeCkgPT4geC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY3VyclByb2plY3QgPSBwcm9qZWN0O1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaChkaXNwbGF5T25lVG9kbyk7XG4gIH0pO1xufTtcbmNvbnN0IGRpc3BsYXlUb2RvT2ZQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gIHByb2plY3RCdG5zLmZvckVhY2goZGlzcGxheVRvZG9FdmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY3JlYXRlSGVhZGluZygpO1xuICBjcmVhdGVTaWRlYmFyKCk7XG4gIGNyZWF0ZUNvbnRlbnQoKTtcbiAgY3JlYXRlUHJvamVjdCgpO1xuICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICBkaXNwbGF5UHJvamVjdEZvcm0oKTtcbiAgY2FuY2VsUHJvamVjdCgpO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgYWRkTmV3UHJvamVjdCgpO1xuICBjcmVhdGVOZXdUb2RvKCk7XG4gIGNyZWF0ZVRvZG9Gb3JtKCk7XG4gIGRpc3BsYXlUb2RvRm9ybSgpO1xuICBjYW5jZWxUb2RvKCk7XG4gIGRpc3BsYXlUb2RvcygpO1xuICBhZGROZXdUb2RvKCk7XG4gIGRpc3BsYXlEZXNjcmlwdGlvbigpO1xuICBoaWRlRGVzY3JpcHRpb24oKTtcbiAgZGlzcGxheVRvZG9PZlByb2plY3QoKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuVUkoKTtcbi8vIGNvbnN0IEhvbWUgPSBuZXcgUHJvamVjdCgnSG9tZScsIFtdKTtcbi8vIFByb2plY3RzLnB1c2goSG9tZSk7XG4vLyBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKCdTdHVkeSBEYXRhIFN0cnVjdHVyZXMgYW5kIGFsZ29yaXRobXMnLCAndGVzdGluZycpO1xuLy8gSG9tZS5hZGROZXdUb2RvKHRvZG8xKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==