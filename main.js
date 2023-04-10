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
    form.classList.add('active');
    main.classList.add('inactive');
  });
};
const cancelTodo = () => {
  const cancelTodoBtn = document.querySelector('.cancel-todo');

  const form = document.querySelector('.todo-form');
  cancelTodoBtn.addEventListener('click', () => {
    form.reset();
    form.classList.remove('active');
    main.classList.remove('inactive');
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
  const descriptionPara = document.querySelector('.description-card p');
  const todoTitle = e.target.textContent;
  const { description } = currProject.todos.find((x) => x.title === todoTitle);
  descriptionPara.textContent = description;
  console.log(description);
};
function temp(e) {
  const descriptionDiv = document.querySelector('.description-card');
  descriptionDiv.classList.add('active');
  main.classList.add('inactive');
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
    main.classList.remove('inactive');
  });
};

const hideDescription = () => {
  const descriptionDiv = document.querySelector('.description-card');
  document.addEventListener('click', (e) => {
    if (!descriptionDiv.contains(e.target) && e.target.className !== 'todo') {
      descriptionDiv.classList.remove('active');
      main.classList.remove('inactive');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNCOztBQUV0QiwrQ0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgfVxuXG4gIGFkZE5ld1RvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MgPSBbLi4udGhpcy50b2RvcywgdG9kb107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuXG5jb25zdCBQcm9qZWN0cyA9IFtdO1xuY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnRG8gd29yayBBJywgJ1Rlc3RpbmcxJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ0RvIHdvcmsgQicsICdUZXN0aW5nMicsICdIaWdoJyk7XG5jb25zdCB0b2RvMyA9IG5ldyBUb2RvKCdEbyB3b3JrIEMnLCAnVGVzdGluZzMnLCAnSGlnaCcpO1xuY29uc3QgdG9kb3MgPSBbdG9kbzEsIHRvZG8yLCB0b2RvM107XG5jb25zdCBob21lID0gbmV3IFByb2plY3QoJ0hvbWUnLCB0b2Rvcyk7XG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScsIFt0b2RvMiwgdG9kbzMsIHRvZG8xXSk7XG5sZXQgY3VyclByb2plY3QgPSBob21lO1xuUHJvamVjdHMucHVzaChob21lKTtcblByb2plY3RzLnB1c2godG9kYXkpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgY3JlYXRlSGVhZGluZyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkaW5nUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaGVhZGluZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ1BhcmEudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0JztcbiAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nUGFyYSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZ0Rpdik7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzaWRlYmFyJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoc2lkZWJhckRpdik7XG59O1xuXG5jb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWZvcm0nKTtcbiAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInByb2plY3QtbmFtZVwiXG4gICAgICAgIGlkPVwicHJvamVjdC1uYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cIm5ldy1wcm9qZWN0XCI+QWRkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8L2Rpdj5gO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufTtcbmNvbnN0IGNhbmNlbFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXByb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuY29uc3Qgc2hvd1Byb2plY3RzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RzQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpO1xuICBwcm9qZWN0c0J0bi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGRpc3BsYXlUb2RvRXZlbnRMaXN0ZW5lcihwcm9qZWN0c0J0bik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xufTtcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgUHJvamVjdHMuZm9yRWFjaChzaG93UHJvamVjdHMpO1xufTtcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIFtdKTtcbiAgICBQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgc2hvd1Byb2plY3RzKHByb2plY3QpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9Eb0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ldy10b2RvJyk7XG4gIG5ld1RvRG9CdG4udGV4dENvbnRlbnQgPSAnKyAgQ3JlYXRlIFRvZG8gaXRlbSc7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1RvRG9CdG4pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWZvcm0nKTtcbiAgZm9ybS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMlwiIHJvd3M9XCIyXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCIgaWQ9XCJsb3dcIiAvPkxvd1xuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIiBpZD1cIm1lZGl1bVwiIC8+TWVkaXVtXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIiBpZD1cImhpZ2hcIi8+SGlnaFxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtdG9kb1wiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC10b2RvXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICBgO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcbmNvbnN0IGRpc3BsYXlUb2RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuICBuZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gIH0pO1xufTtcbmNvbnN0IGNhbmNlbFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRvZG8nKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICBjYW5jZWxUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheU9uZVRvZG8gPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8nKTtcbiAgdG9kb0J0bi5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gIHRvZG9CdG4udGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcCk7XG4gIHRvZG9VbC5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcbn07XG5jb25zdCBkaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWxpc3QnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgUHJvamVjdHMucHVzaChob21lKTtcbiAgaG9tZS50b2Rvcy5mb3JFYWNoKGRpc3BsYXlPbmVUb2RvKTtcbn07XG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbkNhcmQgPSAoZSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZCBwJyk7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBjdXJyUHJvamVjdC50b2Rvcy5maW5kKCh4KSA9PiB4LnRpdGxlID09PSB0b2RvVGl0bGUpO1xuICBkZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgY29uc29sZS5sb2coZGVzY3JpcHRpb24pO1xufTtcbmZ1bmN0aW9uIHRlbXAoZSkge1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jYXJkJyk7XG4gIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gIGNyZWF0ZURlc2NyaXB0aW9uQ2FyZChlKTtcbn1cbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbi1jYXJkJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gIGNvbnN0IHRvZG9CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcbiAgdG9kb0J0bnMuZm9yRWFjaCgodG9kb0J0bikgPT4ge1xuICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZW1wKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGROZXdUb2RvID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICAgKS52YWx1ZTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgIGN1cnJQcm9qZWN0LmFkZE5ld1RvZG8odG9kbyk7XG4gICAgZGlzcGxheU9uZVRvZG8odG9kbyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgaGlkZURlc2NyaXB0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1jYXJkJyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWRlc2NyaXB0aW9uRGl2LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiBlLnRhcmdldC5jbGFzc05hbWUgIT09ICd0b2RvJykge1xuICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn07XG5jb25zdCBkaXNwbGF5VG9kb0V2ZW50TGlzdGVuZXIgPSAoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICB0b2RvTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0cy5maW5kKCh4KSA9PiB4Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKGRpc3BsYXlPbmVUb2RvKTtcbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheVRvZG9PZlByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgcHJvamVjdEJ0bnMuZm9yRWFjaChkaXNwbGF5VG9kb0V2ZW50TGlzdGVuZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjcmVhdGVIZWFkaW5nKCk7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbiAgY3JlYXRlQ29udGVudCgpO1xuICBjcmVhdGVQcm9qZWN0KCk7XG4gIGNyZWF0ZVByb2plY3RGb3JtKCk7XG4gIGRpc3BsYXlQcm9qZWN0Rm9ybSgpO1xuICBjYW5jZWxQcm9qZWN0KCk7XG4gIGRpc3BsYXlQcm9qZWN0cygpO1xuICBhZGROZXdQcm9qZWN0KCk7XG4gIGNyZWF0ZU5ld1RvZG8oKTtcbiAgY3JlYXRlVG9kb0Zvcm0oKTtcbiAgZGlzcGxheVRvZG9Gb3JtKCk7XG4gIGNhbmNlbFRvZG8oKTtcbiAgZGlzcGxheVRvZG9zKCk7XG4gIGFkZE5ld1RvZG8oKTtcbiAgZGlzcGxheURlc2NyaXB0aW9uKCk7XG4gIGhpZGVEZXNjcmlwdGlvbigpO1xuICBkaXNwbGF5VG9kb09mUHJvamVjdCgpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5VSSgpO1xuLy8gY29uc3QgSG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJywgW10pO1xuLy8gUHJvamVjdHMucHVzaChIb21lKTtcbi8vIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ1N0dWR5IERhdGEgU3RydWN0dXJlcyBhbmQgYWxnb3JpdGhtcycsICd0ZXN0aW5nJyk7XG4vLyBIb21lLmFkZE5ld1RvZG8odG9kbzEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9