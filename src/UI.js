import Project from './Project';
import Todo from './Todo';
// import Todo from './Todo';


const Projects = [];
const todo1 = new Todo('Do work A', 'Testing1', 'High');
const todo2 = new Todo('Do work B', 'Testing2', 'High');
const todo3 = new Todo('Do work C', 'Testing3', 'High');
const todos = [todo1, todo2, todo3];
const home = new Project('Home', todos);
const today = new Project('Today', [todo2, todo3, todo1]);
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
    const project = new Project(projectName, []);
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
    const todo = new Todo(title, description, priority);
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
export default () => {
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
};
