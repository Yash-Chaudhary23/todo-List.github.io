 const inputTask=document.getElementById('input-task');
 const taskList=document.getElementById('task-list')
 const addButton=document.getElementById('add-button')

 addButton.addEventListener('click' , function(){
    let task=inputTask.value;
    if(task.trim()!==''){
    
        let li=document.createElement('li');
        li.textContent=task;
        li.className='list'
        taskList.appendChild(li);

        let checkButton=document.createElement('button');
        checkButton.innerHTML='<i class="fa-solid fa-check"></i>';
        checkButton.className='checkbtn';
        li.appendChild(checkButton);

        let deleteButton=document.createElement('button');
        deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        deleteButton.className='deletebtn';
        li.appendChild(deleteButton);

        checkButton.addEventListener('click' , function(){
            checkButton.parentElement.style.textDecoration="line-through";
        });

        deleteButton.addEventListener('click' , function(){
            taskList.removeChild(li);
        });
        inputTask.value='';
    } else{
        alert(" please enter the task ");
    }

 });
