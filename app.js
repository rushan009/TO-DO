let event_lst=document.getElementById('add-button');
let lists=document.getElementById('todo-list');
function main() {
    let todo=prompt('enter the todo')
   if (todo !== null && todo.trim() !== "") {
    // proceed — todo has valid non-empty input
    lists.innerHTML+=`<div class="todo-child">
                    <input type="checkbox" name="todos" class="todo" value="Todo one">
                    <label class="label_of_todo">${todo}</label>

                 </div>`
} 

    let list_of_classcheck=document.querySelectorAll(".todo");
 
    
    console.log("updated list", list_of_classcheck)
    let list_of_label=document.querySelectorAll(".label_of_todo")
    console.log("updated list second", list_of_label)

    let list_of_classcheck_arry=Array.from(list_of_classcheck)

    list_of_classcheck.forEach(element => {
        element.addEventListener('change', function() {
            let index_number=list_of_classcheck_arry.indexOf(element)
         
            if (element.checked) {
                list_of_label[index_number].classList.add('cut')
                list_of_label[index_number].classList.remove('uncut');
                console.log(index_number)
            }
            else{
                list_of_label[index_number].classList.add('uncut')
                list_of_label[index_number].classList.remove('cut')
                console.log(index_number)
            }
        })
    });
                 
                }

let mode=document.getElementById('mode')
let mode_content= document.getElementById('mode_content')
mode.addEventListener('click', function() {
    if(mode_content.innerHTML===`Light mode`){
        mode_content.innerHTML=`Dark mode`
        document.body.style.backgroundColor='#000000';
    }
    else{
        document.body.style.backgroundColor='#cfcfcf';
        mode_content.innerHTML=`Light mode`
    }
})
