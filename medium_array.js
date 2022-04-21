const addNew =document.getElementById('btn-save')
const todoList =document.getElementById('todoList')
const newItem = document.getElementById('addTodo')
const row = document.getElementsByTagName('tr');

const items = [];

function addTodo(text){
  
    const todo = {
        id: Date.now(),
        text,
        checked: false
    }
    items.push(todo);
    getItems(todo)

    console.log(items)
    console.log(todo)
}

function getItems(todo){
    todoList.innerHTML = " ";

    const isChecked = todo.checked ? "done" : " ";
    
    for(var i = 0; i < items.length; i++){
        todoList.innerHTML +=
        `<tr class ="${isChecked}"> 
          <td><input type="checkbox" class="check-box" id="${todo.id}" /></td>
            <td>${items[i].text}</td> 
            <td><button class="btn-delete">Delete</button></td>            
        </tr>`

       
    }
}

addNew.addEventListener("click", function(){
 
    const text = newItem.value.trim();

    if(text == ''){
        alert ("Type a text"); 
          
    }else {
              
       addTodo(text);
        newItem.value = "";
           
    }
})