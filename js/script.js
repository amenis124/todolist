// Step 1
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let showActiveButton = document.getElementById("show-active");
    let showAllButton = document.getElementById("show-all");
    let showCompletedButton = document.getElementById("show-completed");
    
    
    /* Locate where <script> tag which contains our template  */
    let templateElement = document.getElementById("list-item-template");
    /* Lets get the template, which is just all the HTML beteen the <script> tag */
    let template = templateElement.innerHTML;    
    
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
    function onAddTaskClicked(event) {
        
        let taskName = newTaskInput.value;
        /* Now clear the text box */
        newTaskInput.value = "";
    
        
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    
        /* So the HTML has been update, lets insert the HTML into the DOM tree */
        todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    }
    
    
    
    function onTodolistClicked(event) {
        /* We need to know which element triggered the click event */
        let targetElement = event.target;
    
    

        while (!targetElement.classList.contains("task")) {
            targetElement = targetElement.parentElement;
        }
    
        let checkbox = targetElement.querySelector(".checkbox");
    
        if (checkbox.checked) {
            targetElement.classList.add("completed");
        } else {
            targetElement.classList.remove("completed");
        }
    }
    
    function showActiveTasks(){
        let tasks = document.getElementsByClassName("task")
        for (let i =0; i < tasks.length; i++){
            if (tasks[i].classList.contains("completed")){
                tasks[i].style.display = "none"

            } else {
                tasks[i].style.display = "block"
            }
        }
    }

    function showAllTasks(){
        let tasks = document.getElementsByClassName("task")
        for (let i =0; i < tasks.length; i++){
                tasks[i].style.display = "block"
        }
    }

    function showCompletedTasks(){
        let tasks = document.getElementsByClassName("task")
        for (let i =0; i < tasks.length; i++){
                tasks[i].style.display = "block"
        }
    }
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', showActiveTasks);
    showAllButton.addEventListener('click', showAllTasks);
    showCompletedButton.addEventListener('click', showCompletedTasks);