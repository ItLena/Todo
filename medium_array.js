const addNew =document.getElementById('btn-save')
const todoList =document.getElementById('todoList')
const newItem = document.getElementById('addTodo')
const row = document.getElementsByTagName('tr');



const items = [];

function addTodo(text){
  
    const todo = {
        id: Date.now(),
        text,
        isChecked: false
    }
    items.push(todo);
    getItems()

    console.log(items)
    console.log(todo)
}

function getItems(){
    todoList.innerHTML = " ";
    for(var i = 0; i < items.length; i++){
        todoList.innerHTML +=
        `<tr > 
          <td><input type="checkbox" onclick= "onCheck(id)" class="check-box" id = "${items[i].id}" /></td>
            <td>${items[i].text}</td>             
            <td><button onclick= "deleteTodo(id)" id = "${items[i].id}"  class="btn-delete">Delete</button></td>            
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

function deleteTodo(id){  
     
   const foundElement =  items.findIndex(item => item.id == id);
    
   if(foundElement > -1){
       items.splice(foundElement, 1);
   }
    getItems();
}

function onCheck(id){
    const foundElement =  items.findIndex(item => item.id == id);
   
    if(foundElement.isChecked == 'checked'){
        isChecked = true;
    }else{
        false
    }
}