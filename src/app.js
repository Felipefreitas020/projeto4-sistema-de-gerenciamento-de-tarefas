let tarefas = [];

function adicionar() {
  const input = document.getElementById("tarefa");

  if (input.value.trim() === "") {
    return;
  }

  tarefas.push({
    texto: input.value,
    concluida: false
  });

  input.value = "";

  atualizar();
}

function concluir(index) {
  tarefas[index].concluida = true;
  atualizar();
}

function atualizar() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${tarefa.concluida ? `<s>${tarefa.texto}</s>` : tarefa.texto}
      <button onclick="concluir(${index})">Concluir</button>
    `;

    lista.appendChild(li);
  });

  document.getElementById("contador").innerText =
    `Total: ${tarefas.length} tarefas`;
}