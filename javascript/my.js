let inputData=document.getElementById('taskData');
let btnAdd=document.getElementById('btnAdd');
let noTask=document.getElementById('noTask');
let tasks=document.getElementById('tasks');
let modal=document.getElementById('modal');
let btnModel=document.getElementById('btnModel');


let showModel = ()=>{
    modal.classList.toggle('block');
}
btnModel.addEventListener('click',showModel)

let addTask = () => {
    let task = inputData.value;
    if(inputData.value===('')){
        alert("you must enter data");
    }
    else{
        noTask.classList.add('none');
        tasks.innerHTML +=`
        <div class="alert alert-info task">
        ${task}
        <button class="del btn btn-danger float-right">
        Delete
        </button>
        </div>
        `
        ;
        showModel();
        inputData.value='';

       
        // let newDiv=document.createElement('div');
        // newDiv.classList="alert alert-info";
        // newDiv.innerText = task;
        
        // let btnDelete=document.createElement('button');
        // btnDelete.classList="btn btn-danger";
        // btnDelete.innerText="Delete"
        // newDiv.append(btnDelete);
        // tasks.append(newDiv);  

    }


}




btnAdd.addEventListener('click',addTask);

// ********to delete 
document.addEventListener('click',function(e){

    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
        // function to showNoTasks
        showNoTask();

    }
})
// ****to show no task
let showNoTask=()=>{
    if(tasks.childElementCount==0){
        noTask.classList.remove('none')
    }
}

// to showFinished
let check = (e)=>{
    if(e.target.classList.contains('task')){
        e.target.classList.toggle('check');
    }

}


tasks.addEventListener('click', check);



