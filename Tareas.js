const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Introduce la descripción de la tarea: ', (description) => {
    const task = {
      id: tasks.length + 1,
      description: description,
      completed: false
    };
    tasks.push(task);
    console.log(`Tarea "${description}" agregada con éxito.`);
    showMenu();
  });
}

function listTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach((task) => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`[${task.id}] ${task.description} - ${status}`);
  });
  showMenu();
}

function markTaskAsCompleted() {
  rl.question('Introduce el número de tarea a marcar como completada: ', (taskId) => {
    const task = tasks.find((t) => t.id === parseInt(taskId));
    if (task) {
      task.completed = true;
      console.log(`Tarea "${task.description}" marcada como completada.`);
    } else {
      console.log('Tarea no encontrada.');
    }
    showMenu();
  });
}

function deleteTask() {
  rl.question('Introduce el número de tarea a eliminar: ', (taskId) => {
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(taskId));
    if (taskIndex !== -1) {
      const deletedTask = tasks.splice(taskIndex, 1);
      console.log(`Tarea "${deletedTask[0].description}" eliminada.`);
    } else {
      console.log('Tarea no encontrada.');
    }
    showMenu();
  });
}

function showMenu() {
  console.log('\nOpciones:');
  console.log('1. Agregar tarea');
  console.log('2. Listar tareas');
  console.log('3. Marcar tarea como completada');
  console.log('4. Eliminar tarea');
  console.log('5. Salir');

  rl.question('Selecciona una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        listTasks();
        break;
      case '3':
        markTaskAsCompleted();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Por favor, selecciona una opción válida.');
        showMenu();
        break;
    }
  });
}

console.log('Bienvenido a la Lista de Tareas\n');
showMenu();
