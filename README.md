# Atividades de NoSQL: MongoDB e Riak

Disciplina: Persistência de bancos NoSQL com bancos diversos.

Este repositório reúne a resolução de duas atividades:

| Atividade | Banco | Modelo | Pasta |
|---|---|---|---|
| 1 | MongoDB | Documentos | [`mongodb/`](mongodb) |
| 2 | Riak | Chave-valor | [`riak/`](riak) |

## Estrutura

```
.
├── mongodb/
│   ├── comandos.js      # comandos das etapas 1 a 4
│   ├── restaurantes.json  # dataset (adicione aqui)
│   └── prints/          # comprovantes (etapas 1 e 2)
└── riak/
    ├── comandos.sh      # comandos curl das etapas 1 e 2
    └── prints/          # comprovantes (etapas 1 e 2)
```

## Atividade 1: MongoDB

Banco `atividade1`, coleção `restaurants`.

1. **Importar o dataset** com `mongoimport` (roda no terminal, não dentro do `mongosh`).
2. **Inserir um documento** (restaurante "Vella", culinária italiana, Manhattan).
3. **Consultas simples:** todos os restaurantes, bairro "Manhattan", CEP "10022", nota "B".
4. **Consultas com operadores:** `$gt`, `$lt`, `$and` e `$or`.

Como executar: abra o `mongosh`, e cole os comandos de [`mongodb/comandos.js`](mongodb/comandos.js) etapa por etapa.

## Atividade 2: Riak

Manipulação via HTTP (REST) com `curl`, nos buckets `professores`, `alunos` e `funcionarios`.

1. **Inserir 6 objetos** em três buckets e listar as chaves de cada um.
2. **Alterar, mover e excluir:** mudar a idade de Theo, mover Leonardo para `professores`, excluir Afonso, ler a idade de Theo e listar as chaves novamente.

Como executar: com o Riak ativo (porta 8098), rode os comandos de [`riak/comandos.sh`](riak/comandos.sh).

> O Riak só tem distribuição para Linux e macOS. No Windows, use WSL ou Docker.

## Entregáveis

- Etapas com print: coloque as imagens em `prints/` de cada atividade.
- Etapas com arquivo texto: os comandos estão em `comandos.js` e `comandos.sh`.
