let inputContent = document.getElementById("inputItem");
let addBtn = document.querySelector(".inputField button");
let timeBtn = document.querySelector(".time");
let spanCounter = document.querySelector(".counterItem");
let counter = 0;
let clearItem = document.querySelector(".clear");



// if(inputContent.value.trim() ==0 && timeBtn.value.trim()==0){
//     addBtn.classList.add("active");
// }else (inputContent.value.trim() !=0 && timeBtn.value.trim()!=0){
//     addBtn.classList.remove("active");
// }

addBtn.addEventListener('click', function() {
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
    let minute=document.createElement("small");
    minute.innerHTML=" m"
    let buttonTrash= document.createElement("button");
    buttonTrash.className="trash";
    buttonTrash.innerHTML='<i class="fas fa-trash-alt trashIcon"></i>';
    
    timeCr.innerHTML =timeBtn.value;
    console.log(timeBtn.value);
    let x = setInterval(function() {
       
        let currentTime = timeBtn.value;
        let updateTime = currentTime -1;
        console.log(currentTime);
        console.log(updateTime);
        timeCr.innerHTML =updateTime;
        if(updateTime == -1){
            checkLabel.disabled=true;
            console.log("late");
            objectToDo.classList.remove("backColor");
            objectToDo.classList.add("late");
            timeCr.innerHTML="late";
        } 
       
      }, 60000);
      
   
    if(isNaN(timeBtn.value)){
        alert("You Should Enter A number");
        timeBtn.value="";
        addBtn.classList.remove();
        return;
    }else if(timeBtn.value.trim()==0){
        alert("Enter Expired Time");
    }else if(inputContent.value.trim()==0){
        alert("Enter what you wont to do");
    }else{

        item.innerHTML= inputContent.value;
        itemContainer.appendChild(checkLabel);
        itemContainer.appendChild(item);
        itemContainer.appendChild(timeCr);
        itemContainer.appendChild(minute);
        objectToDo.appendChild(itemContainer);
        objectToDo.appendChild(buttonTrash);
        toDoContainer.appendChild(objectToDo);

        inputContent.value="";
        timeBtn.value="";
        counter++;
        if(counter>0){
            clearItem.classList.add("buttonApperance");
        }
    
    }
    
    console.log(counter);
    spanCounter.innerHTML=counter;
    buttonTrash.addEventListener('click',function(){
        toDoContainer.removeChild(objectToDo);
        counter--;
        spanCounter.innerHTML=counter;
    
        })
        checkLabel.addEventListener('change', function(){
            if(checkLabel.checked == true){
                console.log("true");
                checkLabel.disabled=true;
                timeCr.innerHTML="Done";
                objectToDo.classList.remove("backColor");
                objectToDo.classList.add("done");
                
            }else{
                objectToDo.classList.add("backColor");
                objectToDo.classList.remove("done");
        
            }
            
        })
        
        clearItem.addEventListener('click',function(){
            toDoContainer.removeChild(objectToDo);
            spanCounter.innerHTML= 0;
        
            })

    
    })

    
