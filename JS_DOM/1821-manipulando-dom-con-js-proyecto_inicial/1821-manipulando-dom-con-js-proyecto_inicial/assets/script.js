const btn = document.querySelector("[data-form-btn]")
console.log(btn);

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
    const info = ` 
                <i class="fas fa-trash-alt trashIcon icon"></i>`;
    console.log(info)
    input.value = "";
    task.appendChild(taskContet)
    list.appendChild(task)
}
btn.addEventListener("click", accion);

const chechkComplete = () => {
    const i = document.createElement('i');
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");

    return i;
}