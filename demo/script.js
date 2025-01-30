// Tableau pour stocker les tâches
let tasks = [];

// Fonction pour ajouter une nouvelle tâche
function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    
    if (task) {
        tasks.push(task);
        input.value = '';
        updateTaskList();
    }
}

// Fonction pour supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Fonction pour mettre à jour l'affichage de la liste
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">Supprimer</button>
        `;
        taskList.appendChild(li);
    });
}
