let ul  = document.querySelector(".list");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let rst = document.querySelector(".rst");

btn.addEventListener("click", add);

function add(){
    let task = document.createElement("li");
    task.innerText= inp.value;

    if(inp.value!=""){
        ul.append(task);
    }
    else{
        alert("task cannot be empty");
    }
    inp.value="";
}

// ul.addEventListener("click",remove);

// function remove(event){
//     if(event.target.nodeName = "BUTTON"){
//         event.target.parentElement.remove();
//     }
// }

ul.addEventListener("click", cut)

function cut(event){
   if(event.target.nodeName = "LI"){
        event.target.style.textDecoration= "line-through";
        setTimeout(()=>{
                if(event.target.style.textDecoration= "line-through"){
                    event.target.remove();
                }
        },1500);
   }
}


rst.addEventListener("click", reset);

function reset(){
    ul.innerHTML= "";
}
