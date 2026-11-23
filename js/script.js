const name = "taskHup";
let maxTasks = 50;
let state = true;
let currentTasks = 0;
let tasks = [
  {
    id: 1,
    title: "Learn JavaScript",
    description: "Study JavaScript fundamentals",
    priority: "medium",
    completed: false,
  },
  {
    id: 2,
    title: "Learn kotlin",
    description: "Study kotlin fundamentals",
    priority: "high",
    completed: false,
  },
  {
    id: 3,
    title: "Learn flutter",
    description: "Study flutter fundamentals",
    priority: "high",
    completed: false,
  },
  {
    id: 4,
    title: "complete project",
    description: "complete the Hifz app",
    priority: "low",
    completed: false,
  },
  {
    id: 5,
    title: "sleep well",
    description: "sleep very well",
    priority: "medium",
    completed: false,
  },
  {
    id: 6,
    title: "eat",
    description: "eat somthing",
    priority: "low",
    completed: true,
  },
];

function getTotalTasks(tasks) {
  return tasks.length;
}
const findTaskById = (tasks, id) => {
  for (let i = 0; tasks.length > i; i++) {
    if (tasks[i].id === id) {
      return tasks[i];
    }
  }
};
const findTaskByTitle = (tasks, title) => {
  let arr = [];
  for (let i = 0; tasks.length > i; i++) {
    if (tasks[i].title.toLowerCase().includes(title.toLowerCase())) {
      arr.push(tasks[i]);
    }
  }
  return arr.length === 0 ? undefined : arr;
};

const getCompletedTasks = (tasks) => {
  let completed = [];
  for (let i = 0; tasks.length > i; i++) {
    if (tasks[i].completed) {
      completed.push(tasks[i]);
    }
  }
  return completed;
};
const getPendingTasks = (tasks) => {
  let pending = [];
  for (let i = 0; tasks.length > i; i++) {
    if (!tasks[i].completed) {
      pending.push(tasks[i]);
    }
  }
  return pending;
};
const getHighPriorityTasks = (tasks) => {
  let high = [];
  for (let i = 0; tasks.length > i; i++) {
    if (tasks[i].priority === "high") {
      high.push(tasks[i]);
    }
  }
  return high;
};
const sortTasksByPriority = (tasks) => {
  const order = { high: 1, medium: 2, low: 3 };
  return [...tasks].sort((a, b) => order[a.priority] - order[b.priority]);
};

const addTask = (tasks, newTask) => {
  let con = true;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === newTask.id) {
      console.log("you have to assigne new id");
      con = false;
      break;
    }
  }
  con ? tasks.push(newTask) : null;
};
const updateTask = (tasks, id, changes) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      for (const [key, value] of Object.entries(changes)) {
        tasks[i][key] = value;
      }
      console.log("the object is changed");
      break;
    }
    console.log("error : you prvided an non existing id");
  }
};
const deleteTask = (tasks, id) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
      break;
    }
  }
};
const getTaskReport = (tasks) => {
  let report = {};
  report.total = getTotalTasks(tasks);
  report.completed = getCompletedTasks(tasks);
  report.pending = getPendingTasks(tasks);
  report.highPriority = getHighPriorityTasks(tasks);
  report.completionPercentage =
    report.total === 0
      ? 0
      : Math.floor((report.completed.length * 100) / report.total);
  return report;
};

const pageTitle = document.querySelector("#pageTitle");
pageTitle.textContent = "My Task Manager";

const welcomeMessage = document.querySelector("#welcomeMessage");
welcomeMessage.textContent = "Let's manage your tasks!";

const taskStatus = document.querySelector("#taskStatus");
const button = document.querySelector("#changeTitleBtn");
button.addEventListener("click", function () {
  taskStatus.textContent = "TaskFlow is working!";
  taskStatus.classList.add("success");
});

const taskList = document.querySelector(".task-list");

for (let i = 0; i < tasks.length; i++) {
  let button1 = document.createElement("button");
  button1.classList.add("complete-btn");
  button1.textContent = "finished";
  const task = tasks[i];

  const card = document.createElement("div");
  card.classList.add("task-card");

  const title = document.createElement("h3");
  title.textContent = task.title;

  const description = document.createElement("p");
  description.textContent = task.description;

  const container = document.createElement("div");
  container.classList.add("on-list-container");

  const priority = document.createElement("p");
  priority.textContent = task.priority;

  const completed = document.createElement("p");
  completed.textContent = task.completed ? "Completed" : "Pending";

  container.appendChild(priority);
  container.appendChild(completed);

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(container);
  card.appendChild(button1);
  taskList.appendChild(card);
}
const buttons = document.querySelectorAll(".complete-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    tasks[i].completed = true;
    buttons[i].classList.add("success");
  });
}
/*-------------------------------------------------------*/
