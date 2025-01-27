document.addEventListener('DOMContentLoaded', () => {
    const avatarSelector = document.querySelector('.avatar-selector');
    const xpDisplay = document.getElementById('xp');
    const levelDisplay = document.getElementById('level');
    const healthDisplay = document.getElementById('health');
    const taskModal = document.getElementById('task-modal');
    const addTaskBtns = document.querySelectorAll('.add-task');
    const closeModalBtn = document.getElementById('close-modal');
    const saveTaskBtn = document.getElementById('save-task');
    const taskNameInput = document.getElementById('task-name');
    const taskDetailsInput = document.getElementById('task-details');
    const taskLists = {
      todo: document.getElementById('todo-list'),
      habits: document.getElementById('habit-list'),
      challenges: document.getElementById('challenge-list'),
    };
  
    let xp = 0;
    let level = 1;
    let health = 100;
  
    // Open task modal
    addTaskBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        taskModal.style.display = 'block';
      });
    });
  
    // Close task modal
    closeModalBtn.addEventListener('click', () => {
      taskModal.style.display = 'none';
    });
  
    // Save new task
    saveTaskBtn.addEventListener('click', () => {
      const taskName = taskNameInput.value;
      const taskDetails = taskDetailsInput.value;
      if (taskName && taskDetails) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<strong>${taskName}</strong><br>${taskDetails}`;
        taskLists.todo.appendChild(taskItem);
        taskModal.style.display = 'none';
        taskNameInput.value = '';
        taskDetailsInput.value = '';
        xp += 10;
        updateStats();
      }
    });
  
    // Update XP and health on task completion
    function updateStats() {
      xpDisplay.textContent = xp;
      if (xp >= 100) {
        level++;
        xp = 0;
        levelDisplay.textContent = level;
      }
    }
  });
  