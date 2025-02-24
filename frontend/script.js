async function fetchTasks() {
    const response=await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    const taskList=document.getElementById('taskList');
    taskList.innerHTML= '';


    tasks.forEach(task=> {
        const li = document.createElement('li');
        li.textContent=task.name;
        taskList.appendChild(li);
    });
    
}
async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task={name: taskInput.value};
    await fetch('http://localhost:3000/tasks',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(task)});

        taskInput.value='';
        fetchTasks();
    
}
//adicionar as tarefa
document.getElementById('addTaskButton').addEventListener('click',addTask);

//buscar tarefa
fetchTasks();