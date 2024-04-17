let input = document.querySelector('#taskInput');
let text = document.querySelector('.text');
// Add a new task to the list
function Add(){
    if(input.value == ""){
        alert("write task");
    }
    else{
        let list = document.createElement("ul");
        list.innerHTML = `${input.value}<img src="remove.png"/>`;
        text.appendChild(list); 
        // Clearing the input field after adding a task
        input.value = ""
        // Adding click event listener for removing tasks from the list
        list.querySelector('img').addEventListener("click",remove);
        function remove(){
            list.remove()
        }

    }
}
Add();


