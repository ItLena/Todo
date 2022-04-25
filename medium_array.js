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
          <td><input  type ="checkbox"  class ="check-box" 
          id = "${items[i].id}"
          onchange = "onCheck(id)"
          ${items[i].isChecked ? 'checked':'' }          
          /></td>
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

//Check /uncheck task
function onCheck (id){
   
    const foundElement =  items.findIndex(item => item.id == id);

    if(items[foundElement].isChecked){       
        items[foundElement].isChecked = false; 
       
    } else{
        items[foundElement].isChecked = true;
    }
   
}
