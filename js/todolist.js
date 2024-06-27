// Fazendo a tarefa ser adc com o enter

window.addEventListener("keypress", function(e) {
    if (e.key ==="Enter") {
        adcTarefa()
    }
})

function adcTarefa() {
    // Adicionando um elemento a lista de tarefas
    let tarefa = document.querySelector(".adc-tarefa").value
    let tarefaDoc = document.querySelector(".adc-tarefa")
    if (tarefa !== "") {
        const ul = document.querySelector(".list-tarefas")
        const li = document.createElement("li")
        const div = document.createElement("div")
        const btn_edit = document.createElement("button")
        const btn_excluir = document.createElement("button")
        const btn_concluido = document.createElement("button")

        li.textContent = tarefa

        btn_edit.textContent = "Editar"
        btn_edit.onclick = function () {
            edt_tarefa(this)
        }
        btn_excluir.textContent = "Excluir"
        btn_excluir.onclick = function () {
            remTarefa(this)
        }
        btn_concluido.textContent = "Concluir"
        btn_concluido.onclick = function () {
            tarefaConcluida(this)
        }

        ul.append(li)
        li.append(div)
        div.append(btn_concluido)
        div.append(btn_edit)
        div.append(btn_excluir)

        saveToLocalStorage()

        tarefaDoc.value = ""
        if (tarefaDoc.parentElement.classList.contains("red-border")) {
            tarefaDoc.parentElement.classList.remove("red-border")
        }
    } else {
        tarefaDoc.parentElement.classList.add("red-border")
    }
    return;
}

// Adicionando remover elemento da lista de tarefas

function remTarefa(e) {
    const li = e.parentElement.parentElement
    li.remove()
    saveToLocalStorage()
    return;
}

// Adicionando a função editar tarefa

function edt_tarefa(button) {
    const li = button.parentElement.parentElement
    console.log(li)
    const edt = prompt(li.firstChild.textContent)
    if (edt !== null) {
        li.firstChild.textContent = edt
        saveToLocalStorage()
    }
    return;
}

// Adicionando as tasks para o localStorage

function saveToLocalStorage() {
    const ul = document.querySelector(".list-tarefas")
    const tasks = []
    ul.querySelectorAll("li").forEach(li => {
        tasks.push(li.firstChild.textContent)
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

//Adicionando Tarefa concluida

function tarefaConcluida(button) {
    const li = button.parentElement.parentElement
    if (li.classList.contains("tarefa_concluida")) {
        li.classList.remove("tarefa_concluida")
        saveToLocalStorage()
    } else {
        li.classList.add("tarefa_concluida")
        saveToLocalStorage()
    }
}

// carregando as Tasks do localStorage

function loadFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            const ul = document.querySelector(".list-tarefas");
            const li = document.createElement("li");
            const div = document.createElement("div");
            const btn_edit = document.createElement("button");
            const btn_excluir = document.createElement("button");
            const btn_concluido = document.createElement("button")

            li.textContent = task;

            btn_edit.textContent = "Editar";
            btn_edit.onclick = function () {
                edt_tarefa(this);
            };
            btn_excluir.textContent = "Excluir";
            btn_excluir.onclick = function () {
                remTarefa(this);
            };

            btn_concluido.textContent = "Concluir"
            btn_concluido.onclick = function () {
                tarefaConcluida(this)
            }

            ul.append(li);
            li.append(div);
            div.append(btn_concluido) 
            div.append(btn_edit);
            div.append(btn_excluir);
        });
    }
}



// Carregando as taks ao iniciar a pagina

window.onload = function() {
    loadFromLocalStorage();
}
