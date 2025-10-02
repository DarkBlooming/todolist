const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');


addBtn.addEventListener("click", function() {
    console.log("жмакання кнопочки");
});

const translations = {
    uk: {
        title: "Що має зробити Аліса?",
        placeholder: "Введіть завдання...",
        add: "Додати",
        clear: "Видалити все",
        delete: "Видалити"
    },
    en: {
        title: "What Alice should do?",
        placeholder: "Enter a task...",
        add: "Add",
        clear: "Clear All",
        delete: "Delete"
    },
    jp: {
        title: "アリスは何をすべき？",
        placeholder: "タスクを入力...",
        add: "追加",
        clear: "すべてクリア",
        delete: "削除"
    }
};

let currentLang = "en";

function updateUI(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById("title").textContent = t.title;
    document.getElementById("taskInput").placeholder = t.placeholder;
    document.getElementById("addBtn").textContent = t.add;
    document.getElementById("clearAllBtn").textContent = t.clear;

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.textContent = t.delete;
    });

    const quoteDiv = document.getElementById("quote");
    if (quoteDiv.textContent) {
        showRandomQuote();
    }
}

function checkTasks() {
    const container = document.querySelector('.results-container');
    if (taskList.children.length === 0) {
        container.style.display = 'none';

        const quoteDiv = document.getElementById("quote");
        quoteDiv.textContent = "";
        quoteDiv.classList.remove("show");
    }
}

document.querySelectorAll(".lang-switcher button").forEach(btn => {
    btn.addEventListener("click", () => {
        updateUI(btn.dataset.lang);
    });
});

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("pink-btn");
    deleteBtn.addEventListener('click', () => {
        li.remove();
        checkTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


    taskInput.value = "";

    const container = document.querySelector('.results-container').style.display = 'block';
    showRandomQuote();
    enableDragAndDrop();

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "#734107";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "#260c3e";
        }
    });

});

clearAllBtn.addEventListener('click', () => {
    taskList.innerHTML = "";

    const quoteDiv = document.getElementById("quote");
    quoteDiv.textContent = "";
    quoteDiv.classList.remove("show");

    const container = document.querySelector('.results-container');
    taskList.innerHTML = "";
    container.style.display = 'none';
});