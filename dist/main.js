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

const Projects = [];
const todo1 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work A', 'Testing1', 'High');
const todo2 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work B', 'Testing2', 'High');
const todo3 = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"]('Do work C', 'Testing3', 'High');
const todos = [todo1, todo2, todo3];
const home = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Home', todos);
Projects.push(home);

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
    const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName, {});
    Projects.push(project);
    console.log(Projects);
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
  const { description } = home.todos.find((x) => x.title === todoTitle);
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
    home.addNewTodo(todo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgfVxuXG4gIGFkZE5ld1RvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MgPSBbLi4udGhpcy50b2RvcywgdG9kb107XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuLy8gaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuY29uc3QgUHJvamVjdHMgPSBbXTtcbmNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ0RvIHdvcmsgQScsICdUZXN0aW5nMScsICdIaWdoJyk7XG5jb25zdCB0b2RvMiA9IG5ldyBUb2RvKCdEbyB3b3JrIEInLCAnVGVzdGluZzInLCAnSGlnaCcpO1xuY29uc3QgdG9kbzMgPSBuZXcgVG9kbygnRG8gd29yayBDJywgJ1Rlc3RpbmczJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG9zID0gW3RvZG8xLCB0b2RvMiwgdG9kbzNdO1xuY29uc3QgaG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJywgdG9kb3MpO1xuUHJvamVjdHMucHVzaChob21lKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmNvbnN0IGNyZWF0ZUhlYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGluZ1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhlYWRpbmdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkaW5nJyk7XG4gIGhlYWRpbmdQYXJhLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCc7XG4gIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZ1BhcmEpO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xufTtcblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2lkZWJhcicpO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXJEaXYpO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJysgQWRkIFByb2plY3QnO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1mb3JtJyk7XG4gIGZvcm0uaW5uZXJIVE1MID0gYDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJwcm9qZWN0LW5hbWVcIlxuICAgICAgICBpZD1cInByb2plY3QtbmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJuZXctcHJvamVjdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYW5jZWwtcHJvamVjdFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+YDtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KTtcbn07XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1wcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBjYW5jZWxQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcbmNvbnN0IHNob3dQcm9qZWN0cyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0c0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcbiAgcHJvamVjdHNCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xufTtcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgUHJvamVjdHMuZm9yRWFjaChzaG93UHJvamVjdHMpO1xufTtcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIHt9KTtcbiAgICBQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKFByb2plY3RzKTtcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUb2RvID0gKCkgPT4ge1xuICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1RvRG9CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXctdG9kbycpO1xuICBuZXdUb0RvQnRuLnRleHRDb250ZW50ID0gJysgIENyZWF0ZSBUb2RvIGl0ZW0nO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUb0RvQnRuKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1mb3JtJyk7XG4gIGZvcm0uaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIjJcIiByb3dzPVwiMlwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPlByaW9yaXR5PC9sZWdlbmQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiIGlkPVwibG93XCIgLz5Mb3dcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCIgaWQ9XCJtZWRpdW1cIiAvPk1lZGl1bVxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCIgaWQ9XCJoaWdoXCIvPkhpZ2hcbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkLXRvZG9cIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYW5jZWwtdG9kb1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5jb25zdCBkaXNwbGF5VG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcbiAgbmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICB9KTtcbn07XG5jb25zdCBjYW5jZWxUb2RvID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10b2RvJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcbiAgY2FuY2VsVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gIH0pO1xufTtcbmNvbnN0IGRpc3BsYXlPbmVUb2RvID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9kb1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuICBjb25zdCB0b2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZG9CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvJyk7XG4gIHRvZG9CdG4udGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcCk7XG4gIHRvZG9VbC5hcHBlbmRDaGlsZCh0b2RvQnRuKTtcbn07XG5jb25zdCBkaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWxpc3QnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgUHJvamVjdHMucHVzaChob21lKTtcbiAgaG9tZS50b2Rvcy5mb3JFYWNoKGRpc3BsYXlPbmVUb2RvKTtcbn07XG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbkNhcmQgPSAoZSkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZCBwJyk7XG4gIGNvbnN0IHRvZG9UaXRsZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBob21lLnRvZG9zLmZpbmQoKHgpID0+IHgudGl0bGUgPT09IHRvZG9UaXRsZSk7XG4gIGRlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG59O1xuZnVuY3Rpb24gdGVtcChlKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWNhcmQnKTtcbiAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgY3JlYXRlRGVzY3JpcHRpb25DYXJkKGUpO1xufVxuY29uc3QgZGlzcGxheURlc2NyaXB0aW9uID0gKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uLWNhcmQnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgY29uc3QgdG9kb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICB0b2RvQnRucy5mb3JFYWNoKCh0b2RvQnRuKSA9PiB7XG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlbXApO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZE5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcbiAgICApLnZhbHVlO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gICAgaG9tZS5hZGROZXdUb2RvKHRvZG8pO1xuICAgIGRpc3BsYXlPbmVUb2RvKHRvZG8pO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhpZGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tY2FyZCcpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbkRpdi5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAndG9kbycpIHtcbiAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjcmVhdGVIZWFkaW5nKCk7XG4gIGNyZWF0ZVNpZGViYXIoKTtcbiAgY3JlYXRlQ29udGVudCgpO1xuICBjcmVhdGVQcm9qZWN0KCk7XG4gIGNyZWF0ZVByb2plY3RGb3JtKCk7XG4gIGRpc3BsYXlQcm9qZWN0Rm9ybSgpO1xuICBjYW5jZWxQcm9qZWN0KCk7XG4gIGRpc3BsYXlQcm9qZWN0cygpO1xuICBhZGROZXdQcm9qZWN0KCk7XG4gIGNyZWF0ZU5ld1RvZG8oKTtcbiAgY3JlYXRlVG9kb0Zvcm0oKTtcbiAgZGlzcGxheVRvZG9Gb3JtKCk7XG4gIGNhbmNlbFRvZG8oKTtcbiAgZGlzcGxheVRvZG9zKCk7XG4gIGFkZE5ld1RvZG8oKTtcbiAgZGlzcGxheURlc2NyaXB0aW9uKCk7XG4gIGhpZGVEZXNjcmlwdGlvbigpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5VSSgpO1xuLy8gY29uc3QgSG9tZSA9IG5ldyBQcm9qZWN0KCdIb21lJywgW10pO1xuLy8gUHJvamVjdHMucHVzaChIb21lKTtcbi8vIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ1N0dWR5IERhdGEgU3RydWN0dXJlcyBhbmQgYWxnb3JpdGhtcycsICd0ZXN0aW5nJyk7XG4vLyBIb21lLmFkZE5ld1RvZG8odG9kbzEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9