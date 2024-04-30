# Observação
Este repositório é dedicado exclusivamente para estudo e aprendizado. Por favor, esteja ciente de que os códigos aqui presentes podem não aderir às melhores práticas e arquitetura.

# Projeto de Fila de Atendimento

Este é um projeto simples de uma fila de atendimento, desenvolvido em JavaScript, que permite registrar clientes com nome e CPF, armazená-los em uma fila e atendê-los conforme necessário. O projeto inclui uma classe `Atendimento` para representar os clientes e métodos para gerenciar a fila e registrar a data e hora atual.

<img src="./sources/image2.jpg" alt="Exemplo imagem" width="900px">

## Funcionalidades

- **Registro de Cliente**: Os clientes podem ser registrados na fila informando seu nome e CPF.
- **Armazenamento em Fila**: Os clientes registrados são armazenados em uma fila.
- **Atendimento**: Os clientes são atendidos conforme a ordem de chegada na fila. Quando um cliente é atendido, ele é removido da fila.
- **Registro de Data e Hora**: O projeto inclui métodos para registrar a data e hora atuais para cada atendimento.

## Componentes

- **Classe Atendimento**: Representa um cliente na fila, com propriedades para nome, CPF, data e hora.
- **Métodos de Gerenciamento de Fila**: Inclui métodos da Fila isFull(), enqueue(), dequeue(), isEmpty(), first()...
- **Métodos de Registro de Data e Hora**: Métodos para obter a data e hora atuais para cada atendimento.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autor
Línicker Ostroski Mota | olinicker@gmail.com
