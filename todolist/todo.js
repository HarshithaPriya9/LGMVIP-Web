const Input = document.querySelector(".input input");
const addBtn = document.querySelector(".input button");
const Tasks = document.querySelector(".todotasks");
const Remove = document.querySelector(".last button");
Input.onkeyup = ()=>{
  let user = Input.value; 
  if(user.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active");
  }
}
showTasks(); 
addBtn.onclick = ()=>{ 
  let user = Input.value; 
  let getLocalStorageData = localStorage.getItem("todotasks"); 
  if(getLocalStorageData == null){ 
    array = []; 
  }else{
    todoarr= JSON.parse(getLocalStorageData);  
  }
  todoarr.push(user); 
  localStorage.setItem("todotasks", JSON.stringify(todoarr)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("todotasks");
  if(getLocalStorageData == null){
    todoarr= [];
  }else{
    todoarr= JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".availabletasks");
  pendingTasksNumb.textContent =todoarr.length; 
  if(todoarr.length > 0){ 
    Remove.classList.add("active"); 
  }else{
    Remove.classList.remove("active"); 
  }
  let newLiTag = "";
  todoarr.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  Tasks.innerHTML = newLiTag; 
  Input.value = ""; 
}
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("todotasks");
  todoarr= JSON.parse(getLocalStorageData);
  todoarr.splice(index, 1); 
  localStorage.setItem("todotasks", JSON.stringify(todoarr));
  showTasks(); 
}
Remove.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("todotasks"); 
  if(getLocalStorageData == null){ 
    todoarr= []; 
  }else{
    todoarr= JSON.parse(getLocalStorageData);  
    todoarr= []; 
  }
  localStorage.setItem("todotasks", JSON.stringify(todoarr)); 
  showTasks(); 
}