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


// import Todo from './Todo';
let currProject;

const Projects = [];
const todo1 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work A', 'Testing1', 'High');
const todo2 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work B', 'Testing2', 'High');
const todo3 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work C', 'Testing3', 'High');
const todos = [todo1, todo2, todo3];
const home = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Home', todos);
const today = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today', [todo2, todo3, todo1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0I7O0FBRXRCLCtDQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b2Rvcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgYWRkTmV3VG9kbyh0b2RvKSB7XG4gICAgdGhpcy50b2RvcyA9IFsuLi50aGlzLnRvZG9zLCB0b2RvXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xubGV0IGN1cnJQcm9qZWN0O1xuXG5jb25zdCBQcm9qZWN0cyA9IFtdO1xuY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnRG8gd29yayBBJywgJ1Rlc3RpbmcxJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ0RvIHdvcmsgQicsICdUZXN0aW5nMicsICdIaWdoJyk7XG5jb25zdCB0b2RvMyA9IG5ldyBUb2RvKCdEbyB3b3JrIEMnLCAnVGVzdGluZzMnLCAnSGlnaCcpO1xuY29uc3QgdG9kb3MgPSBbdG9kbzEsIHRvZG8yLCB0b2RvM107XG5jb25zdCBob21lID0gbmV3IFByb2plY3QoJ0hvbWUnLCB0b2Rvcyk7XG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KCdUb2RheScsIFt0b2RvMiwgdG9kbzMsIHRvZG8xXSk7XG5Qcm9qZWN0cy5wdXNoKGhvbWUpO1xuUHJvamVjdHMucHVzaCh0b2RheSk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG5jb25zdCBjcmVhdGVIZWFkaW5nID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRpbmdQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoZWFkaW5nRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGluZycpO1xuICBoZWFkaW5nUGFyYS50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QnO1xuICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmdQYXJhKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NpZGViYXInKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyRGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFByb2plY3RCdG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtZm9ybScpO1xuICBmb3JtLmlubmVySFRNTCA9IGA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwicHJvamVjdC1uYW1lXCJcbiAgICAgICAgaWQ9XCJwcm9qZWN0LW5hbWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgTmFtZVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibmV3LXByb2plY3RcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLXByb2plY3RcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmA7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdG4nKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuY29uc3QgY2FuY2VsUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG5jb25zdCBzaG93UHJvamVjdHMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdHNCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gIHByb2plY3RzQnRuLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgZGlzcGxheVRvZG9FdmVudExpc3RlbmVyKHByb2plY3RzQnRuKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG59O1xuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICBQcm9qZWN0cy5mb3JFYWNoKHNob3dQcm9qZWN0cyk7XG59O1xuY29uc3QgYWRkTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgW10pO1xuICAgIFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBzaG93UHJvamVjdHMocHJvamVjdCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlTmV3VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUb0RvQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3LXRvZG8nKTtcbiAgbmV3VG9Eb0J0bi50ZXh0Q29udGVudCA9ICcrICBDcmVhdGUgVG9kbyBpdGVtJztcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VG9Eb0J0bik7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tZm9ybScpO1xuICBmb3JtLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIGNvbHM9XCIyXCIgcm93cz1cIjJcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxlZ2VuZD5Qcmlvcml0eTwvbGVnZW5kPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIiBpZD1cImxvd1wiIC8+TG93XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiIGlkPVwibWVkaXVtXCIgLz5NZWRpdW1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiIGlkPVwiaGlnaFwiLz5IaWdoXG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC10b2RvXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLXRvZG9cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIGA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuY29uc3QgZGlzcGxheVRvZG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJyk7XG4gIG5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgfSk7XG59O1xuY29uc3QgY2FuY2VsVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdG9kbycpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gIGNhbmNlbFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICB9KTtcbn07XG5jb25zdCBkaXNwbGF5T25lVG9kbyA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0b2RvQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kbycpO1xuICB0b2RvQnRuLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlbXApO1xuICB0b2RvVWwuYXBwZW5kQ2hpbGQodG9kb0J0bik7XG59O1xuY29uc3QgZGlzcGxheVRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1saXN0Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIFByb2plY3RzLnB1c2goaG9tZSk7XG4gIGhvbWUudG9kb3MuZm9yRWFjaChkaXNwbGF5T25lVG9kbyk7XG59O1xuY29uc3QgY3JlYXRlRGVzY3JpcHRpb25DYXJkID0gKGUpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNhcmQgcCcpO1xuICBjb25zdCB0b2RvVGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gY3VyclByb2plY3QudG9kb3MuZmluZCgoeCkgPT4geC50aXRsZSA9PT0gdG9kb1RpdGxlKTtcbiAgZGVzY3JpcHRpb25QYXJhLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcbn07XG5mdW5jdGlvbiB0ZW1wKGUpIHtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZCcpO1xuICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICBjcmVhdGVEZXNjcmlwdGlvbkNhcmQoZSk7XG59XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24tY2FyZCcpO1xuICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICBjb25zdCB0b2RvQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XG4gIHRvZG9CdG5zLmZvckVhY2goKHRvZG9CdG4pID0+IHtcbiAgICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkTmV3VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICAgICkudmFsdWU7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICBjdXJyUHJvamVjdC5hZGROZXdUb2RvKHRvZG8pO1xuICAgIGRpc3BsYXlPbmVUb2RvKHRvZG8pO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhpZGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZCcpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbkRpdi5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAndG9kbycpIHtcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheVRvZG9FdmVudExpc3RlbmVyID0gKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgdG9kb0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdHMuZmluZCgoeCkgPT4geC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY3VyclByb2plY3QgPSBwcm9qZWN0O1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaChkaXNwbGF5T25lVG9kbyk7XG4gIH0pO1xufTtcbmNvbnN0IGRpc3BsYXlUb2RvT2ZQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gIHByb2plY3RCdG5zLmZvckVhY2goZGlzcGxheVRvZG9FdmVudExpc3RlbmVyKTtcbn07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNyZWF0ZUhlYWRpbmcoKTtcbiAgY3JlYXRlU2lkZWJhcigpO1xuICBjcmVhdGVDb250ZW50KCk7XG4gIGNyZWF0ZVByb2plY3QoKTtcbiAgY3JlYXRlUHJvamVjdEZvcm0oKTtcbiAgZGlzcGxheVByb2plY3RGb3JtKCk7XG4gIGNhbmNlbFByb2plY3QoKTtcbiAgZGlzcGxheVByb2plY3RzKCk7XG4gIGFkZE5ld1Byb2plY3QoKTtcbiAgY3JlYXRlTmV3VG9kbygpO1xuICBjcmVhdGVUb2RvRm9ybSgpO1xuICBkaXNwbGF5VG9kb0Zvcm0oKTtcbiAgY2FuY2VsVG9kbygpO1xuICBkaXNwbGF5VG9kb3MoKTtcbiAgYWRkTmV3VG9kbygpO1xuICBkaXNwbGF5RGVzY3JpcHRpb24oKTtcbiAgaGlkZURlc2NyaXB0aW9uKCk7XG4gIGRpc3BsYXlUb2RvT2ZQcm9qZWN0KCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSAnLi9VSSc7XG5cblVJKCk7XG4vLyBjb25zdCBIb21lID0gbmV3IFByb2plY3QoJ0hvbWUnLCBbXSk7XG4vLyBQcm9qZWN0cy5wdXNoKEhvbWUpO1xuLy8gY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnU3R1ZHkgRGF0YSBTdHJ1Y3R1cmVzIGFuZCBhbGdvcml0aG1zJywgJ3Rlc3RpbmcnKTtcbi8vIEhvbWUuYWRkTmV3VG9kbyh0b2RvMSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=