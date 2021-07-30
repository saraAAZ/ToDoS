let inputContent = document.getElementById("inputItem");
let addBtn = document.querySelector(".inputField button");
let timeBtn = document.querySelector(".time");
let counter = 0;



// if(inputContent.value.trim() ==0 && timeBtn.value.trim()==0){
//     addBtn.classList.add("active");
// }else (inputContent.value.trim() !=0 && timeBtn.value.trim()!=0){
//     addBtn.classList.remove("active");
// }
let toDoContainer = document.querySelector(".toDo"); 
    let objectToDo = document.createElement("div"); 
    objectToDo.className = "toDoItem , backColor";
    let itemContainer =  document.createElement("div");
    itemContainer.className = "check";
    let checkLabel = document.createElement("input");
    checkLabel.type="checkbox";
    checkLabel.className="checB";
    let item = document.createElement("span");
    item.className="itemSpan";
    let timeCr=document.createElement("small");
    let buttonTrash= document.createElement("button");
    buttonTrash.className="trash";
    buttonTrash.innerHTML='<i class="fas fa-trash-alt trashIcon"></i>';
addBtn.addEventListener('click', function() {
    

   
    if(isNaN(timeBtn.value)){
        alert("You Should Enter A number");
        timeBtn.value="";
        addBtn.classList.remove();
        return;
    }else if(timeBtn.value.trim()==0){
        alert("Enter Expired Time");
    }else if(inputContent.value.trim()==0){
        alert("Enter Expired Time");
    }else{

        item.innerHTML= inputContent.value;
        timeCr.innerHTML = timeBtn.value;
        let start=timeBtn.value;


        itemContainer.appendChild(checkLabel);
        itemContainer.appendChild(item);
        itemContainer.appendChild(timeCr);
        objectToDo.appendChild(itemContainer);
        objectToDo.appendChild(buttonTrash);
        toDoContainer.appendChild(objectToDo);

        inputContent.value="";
        timeBtn.value="";
    
    }
    
    })

    buttonTrash.addEventListener('click',function(){
    toDoContainer.removeChild(objectToDo);

    })
    checkLabel.addEventListener('click', function(){
        if(checkLabel.checked == true){
            console.log("true");
            checkLabel.classList.remove("backColor");
            checkLabel.classList.remove("done");
        }else{
            console.log("flase");
        }
        
    })
    
