
const addNew =document.getElementById('btn-save')
const todoList =document.getElementById('todoList')
const newItem = document.getElementById('addTodo')


addNew.addEventListener("click", function(){

    if(newItem.value.length == 0){
    alert ("Type a text"); 
          
    }else {
        todoList.innerHTML +=
        `<tr class="todoItems"> 
            <td >${newItem.value}</td> 
            <td><button class="btn-delete">Delete</button></td> 
        </tr>`
       
    }

    let deleteBtn = document.getElementsByClassName('btn-delete')
    
    for(var i = 0; i  < deleteBtn.length; i++){
        deleteBtn[i].onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }  

    // Uncheck with line throught
    const todoItems = document.querySelectorAll(".todoItems")

    for(var i = 0; i <todoItems.length; i++){
        todoItems[i].addEventListener("click", function(){
            this.classList.add("check")
        })
    }

    newItem.value = "";
})

