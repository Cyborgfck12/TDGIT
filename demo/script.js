// Structure de données
let projects = [];
let tasks = [];
let categories = ['Personnel', 'Travail', 'Courses', 'Autre'];
let currentFilter = 'all';

// Gestion du thème
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
    document.body.dataset.theme = themeToggle.checked ? 'dark' : 'light';
    saveToLocalStorage();
});

// Fonction pour sauvegarder dans le localStorage
function saveToLocalStorage() {
    localStorage.setItem('projectManager', JSON.stringify({
        projects,
        tasks,
        theme: document.body.dataset.theme
    }));
}

// Fonction pour charger depuis le localStorage
function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('projectManager') || '{}');
    projects = data.projects || [];
    tasks = data.tasks || [];
    if (data.theme) {
        document.body.dataset.theme = data.theme;
        themeToggle.checked = data.theme === 'dark';
    }
    updateProjectList();
    updateProjectSelect();
    updateTaskList();
    updateStatistics();
}

// Fonction pour ajouter un projet
function addProject() {
    const input = document.getElementById('projectInput');
    const projectName = input.value.trim();
    
    if (projectName) {
        projects.push({
            id: Date.now(),
            name: projectName,
            createdAt: new Date().toISOString()
        });
        input.value = '';
        updateProjectList();
        updateProjectSelect();
        saveToLocalStorage();
    }
}

// Fonction pour supprimer un projet
function deleteProject(projectId) {
    projects = projects.filter(p => p.id !== projectId);
    tasks = tasks.filter(t => t.projectId !== projectId);
    updateProjectList();
    updateProjectSelect();
    updateTaskList();
    updateStatistics();
    saveToLocalStorage();
}

// Fonction pour ajouter une tâche
function addTask() {
    const projectSelect = document.getElementById('projectSelect');
    const input = document.getElementById('taskInput');
    const dueDate = document.getElementById('taskDueDate');
    const priority = document.getElementById('taskPriority');
    const category = document.getElementById('taskCategory');
    
    const taskText = input.value.trim();
    const projectId = parseInt(projectSelect.value);
    
    if (taskText && projectId) {
        tasks.push({
            id: Date.now(),
            projectId: projectId,
            text: taskText,
            completed: false,
            dueDate: dueDate.value,
            priority: priority.value,
            category: category.value,
            createdAt: new Date().toISOString()
        });
        
        input.value = '';
        dueDate.value = '';
        priority.value = 'low';
        category.value = 'Autre';
        
        updateTaskList();
        updateStatistics();
        saveToLocalStorage();
    }
}

// Fonction pour supprimer une tâche
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    updateTaskList();
    updateStatistics();
    saveToLocalStorage();
}

// Fonction pour basculer l'état d'une tâche
function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        updateTaskList();
        updateStatistics();
        saveToLocalStorage();
    }
}

// Fonction pour filtrer les tâches
function filterTasks(filter) {
    currentFilter = filter;
    document.querySelectorAll('.task-filters button').forEach(btn => {
        btn.classList.toggle('active', btn.onclick.toString().includes(filter));
    });
    updateTaskList();
}

// Fonction pour mettre à jour la liste des projets
function updateProjectList() {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.name}</h3>
            <p>Créé le ${new Date(project.createdAt).toLocaleDateString()}</p>
            <button class="delete-btn" onclick="deleteProject(${project.id})">
                <i class="fas fa-trash"></i> Supprimer
            </button>
        </div>
    `).join('');
}

// Fonction pour mettre à jour le select des projets
function updateProjectSelect() {
    const projectSelect = document.getElementById('projectSelect');
    projectSelect.innerHTML = `
        <option value="">Sélectionner un projet</option>
        ${projects.map(project => `
            <option value="${project.id}">${project.name}</option>
        `).join('')}
    `;
}

// Fonction pour mettre à jour la liste des tâches
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    let filteredTasks = tasks;
    
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }
    
    taskList.innerHTML = filteredTasks.map(task => {
        const project = projects.find(p => p.id === task.projectId);
        return `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <div class="task-content">
                    <input type="checkbox" 
                           ${task.completed ? 'checked' : ''} 
                           onchange="toggleTask(${task.id})">
                    <span class="task-text">${task.text}</span>
                    <span class="task-priority priority-${task.priority}">${task.priority}</span>
                    <span class="task-category">${task.category}</span>
                    ${task.dueDate ? `<span class="task-date">
                        <i class="fas fa-calendar"></i> ${task.dueDate}
                    </span>` : ''}
                    <span class="task-project">
                        <i class="fas fa-project-diagram"></i> ${project?.name}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="delete-btn" onclick="deleteTask(${task.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Fonction pour mettre à jour les statistiques
function updateStatistics() {
    document.getElementById('totalProjects').textContent = projects.length;
    document.getElementById('totalTasks').textContent = tasks.length;
    document.getElementById('completedTasks').textContent = 
        tasks.filter(task => task.completed).length;
}

// Chargement initial
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
