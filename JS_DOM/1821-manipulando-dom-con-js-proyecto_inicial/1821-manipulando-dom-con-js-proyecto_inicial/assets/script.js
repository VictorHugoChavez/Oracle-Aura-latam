(() => {
    const btn = document.querySelector("[data-form-btn]")
    console.log(btn);
    ///////////////////////////////////////////////////////////////////
    const accion = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement('li');
        task.classList.add("card");
        const taskContet = document.createElement('div');
        taskContet.appendChild(chechkComplete());
        const tittleTask = document.createElement("span");
        tittleTask.classList.add("task");
        tittleTask.innerText = value;
        taskContet.appendChild(tittleTask);
        taskContet.appendChild(deleteBtn());
        const info = ` 
                <i class="fas fa-trash-alt trashIcon icon"></i>`;
        console.log(info)
        input.value = "";
        task.appendChild(taskContet)
        task.appendChild(deleteBtn());
        list.appendChild(task)
    }
    btn.addEventListener("click", accion);
    ///////////////////////////////////////////////////////////////
    const chechkComplete = () => {
            const i = document.createElement('i');
            i.classList.add("far", "fa-check-square", "icon");
            i.addEventListener("click", completeTask);
            return i;
        }
        ///////////////////////////////////////////////////////////////
    const completeTask = (event) => {
        console.log(event.target)
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");

    };

    const deleteBtn = () => {
        const i = document.createElement("i")
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
        i.addEventListener("click", deleteTask)
        return i;
    };

    const deleteTask = (event) => {
        const parent = event.target.parentElement;
        parent.remove();
    }
})();