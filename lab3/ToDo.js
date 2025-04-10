const addButton = document.getElementById("addButton");
const input = document.querySelector('input');
const taskList = document.getElementById('toDo');

addButton.addEventListener('click', () =>{
    let todo = input.value.trim();
    if(!todo){
        return;
    }
    addToDo(todo);
    input.value = "";
})

function addToDo(todo){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            textToDo.classList.add('completed');
        } else {
            textToDo.classList.remove('completed');
        }
    });
    
    const textToDo = document.createElement('span');
    textToDo.textContent = todo;


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>Delete item</title><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="80" y1="112" x2="432" y2="112" style="stroke:#f00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="176" x2="256" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="184" y1="176" x2="192" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="328" y1="176" x2="320" y2="400" style="fill:none;stroke:#f00;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        listItem.remove();
    }

    listItem.appendChild(checkBox);
    listItem.appendChild(textToDo);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}