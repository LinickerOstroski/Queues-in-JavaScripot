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
  const novoAtendimento = new Atendimento();
  novoAtendimento.nome = nome;
  novoAtendimento.cpf = cpf;
  novoAtendimento.data = obterDataAtual();
  novoAtendimento.hora = obterHoraAtual();
  console.log(novoAtendimento);
  //enqueue atendimento na fila
  if (minhaFila.enqueue(novoAtendimento) === true) {
    document.getElementById("txtnovoNome").value = "";
    document.getElementById("txtnovoCpf").value = "";
    document.getElementById("txtnovoNome").focus();
    console.log(minhaFila.toString());
  } else {
    alert("Fila cheia!");
  }
}
//--------------------------------------------------------------------------------------------
// Função para remover o primeiro elemento da fila
function removerElemento() {
  if (minhaFila.isEmpty() === false) {
    let removido = minhaFila.dequeue();
    console.log(minhaFila.toString());
  }
    else {
      alert("Fila vazia");
    }
  }
  //--------------------------------------------------------------------------------
  function buscarCpf() {

  }
  //--------------------------------------------------------------------------------------------
  function mostrarMensagemRemocao(pessoaAtendida) {

  }
  //--------------------------------------------------------------------------------------------
  // Função para atualizar a exibição da fila
  function atualizarFila() {
    const lista = documento.getElementById("listFila");
    lista.toString = minhaFila.toString();
    
    for (let pessoa of minhaFila) {
      alert(pessoa.toString() + "\n");

    }

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
