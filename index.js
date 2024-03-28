// Crie uma instância da fila
let minhaFila = new FilaCircular(5);

// Função para adicionar um elemento à fila
function adicionarElemento() {
  const n = document.getElementById("txtnovoNome");
  const nome = document.getElementById("txtnovoNome").value;
  const cpf = document.getElementById("txtnovoCpf").value;
  
  if (nome === "" || cpf === "") {
    alert("Preencha todos os campos antes de adicionar à fila!");
    n.focus();
    return;
  }
  const novoAtendimento = new Atendimento(); ///////////*****
  novoAtendimento.nome = nome;
  novoAtendimento.cpf = cpf;
  novoAtendimento.data = obterDataAtual();
  novoAtendimento.hora = obterHoraAtual();
  console.log(novoAtendimento);
  //enqueue atendimento na fila
  if(minhaFila.isFull() == false){ //Verificando se a fila não está cheia
    if (minhaFila.enqueue(novoAtendimento) === true) {
      document.getElementById("txtnovoNome").value = "";
      document.getElementById("txtnovoCpf").value = "";
      document.getElementById("txtnovoNome").focus();
      console.log(minhaFila.toString());
    }else{
      alert("Erro ao adicionar")
    }
  } else {
    alert("Fila cheia!");
  }

  atualizarFila();
}
//--------------------------------------------------------------------------------------------
// Função para remover o primeiro elemento da fila
function removerElemento() {

  mostrarMensagemRemocao();
  if (minhaFila.isEmpty() === false) {
    let removido = minhaFila.dequeue();
    console.log(minhaFila.toString());
  }
  else {
    alert("Fila vazia");
  }

  atualizarFila();
}
//--------------------------------------------------------------------------------
function buscarCpf() {
  let textoDoBuscar = document.getElementById("txtBuscar").value;
  //let found = false;

  for (let pessoa of minhaFila) {
    if(textoDoBuscar.includes(pessoa.cpf)){
      alert("CPF encontrado!\n" + pessoa.toString());
      found = true;
      return; // sair do loop.
    }

    
    alert("CPF não encontrado!");
    

  }
}
//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida) {
  let primeiroElemento = minhaFila.first();
  let horaAnterior = minhaFila.first();

  if(primeiroElemento){
    let nome = primeiroElemento.nome;
    let horaAnterior = primeiroElemento.hora;
    alert("Chamado para ser atendido(a): " + nome + ", chegou às " + horaAnterior + " está sendo atendido(a) às " + obterHoraAtual() +" Tempo de espera:" + calcularDiferencaHoras(horaAnterior,obterHoraAtual()));
  }
  
}
//--------------------------------------------------------------------------------------------
// Função para atualizar a exibição da fila
function atualizarFila() {

  const meuInput = document.getElementById("txtnovoNome")
  const lista = document.getElementById("listFila");
  lista.innerHTML = ""; // limpa a fila.

  for (let pessoa of minhaFila) {
    let newItem = document.createElement('li');
    newItem.textContent = pessoa.toString();
    lista.appendChild(newItem);
  }

  meuInput.focus();
}

//--------------------------------------------------------------------------------------------
// funcao data
function obterDataAtual() {
  let dataAtual = new Date();
  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
  let ano = dataAtual.getFullYear();
  // Formata a data como "dd/mm/aaaa"
  let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
  return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);

  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);

  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;

  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
