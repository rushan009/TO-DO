let event_lst=document.getElementById('add-button');
let lists=document.getElementById('todo-list');
function main() {
    let todo=prompt('enter the todo')
    lists.innerHTML+=`<div class="todo-child">
                    <input type="checkbox" name="todos" class="todo" value="Todo one">
                    <label class="label_of_todo">${todo}</label>

                 </div>`
    let list_of_classcheck=document.querySelectorAll(".todo");
    console.log("updated list", list_of_classcheck)
    let list_of_label=document.querySelectorAll(".label_of_todo")
    list_of_classcheck.forEach(element => {
        element.addEventListener('change', function() {
            if (element.checked) {
                list_of_label.forEach(cut_Text => {
                    cut_Text.classList.add("cut")
                });
                console.log("check")
            }
        })
    });
                 
                }