function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText  = taskInput.value.trim();

    if(taskText === ''){
        alert("Please Enter a Your Task.")
        return;
    }
      const taskList = document.getElementById('taskList');
      const listItme = document.createElement('li');

      const taskspan = document.createElement('span');
      taskspan.textContent = taskText;

      const completeButton = document.createElement('button');
      completeButton.innerHTML = '✔';
      completeButton.onclick = () => {
         taskspan.classList.toggle('completed');
      }; 

      const  removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className ='remove-btn';
      removeButton.onclick = () => {
        taskList.removeChild(listItme);
      };

      listItme.appendChild(completeButton);
      listItme.appendChild(taskspan);
      listItme.appendChild(removeButton);

      taskList.appendChild(listItme);

      taskInput.value =" ";


     
}