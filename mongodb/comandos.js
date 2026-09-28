// =====================================================================
// Atividade 1: MongoDB
// Banco: atividade1 | Coleção: restaurants
// Execute no mongosh, colando cada bloco (as etapas são sequenciais).
// =====================================================================


// ---------------------------------------------------------------------
// ETAPA 1: Importar o dataset
// ---------------------------------------------------------------------
// Este comando roda no TERMINAL (não no mongosh), na pasta onde está
// o arquivo restaurantes.json. Confira se o arquivo existe antes:
//   dir            (Windows)
//   ls             (Linux/Mac)
//
//   mongoimport --db atividade1 --collection restaurants --file restaurantes.json
//
// Depois, entre no mongosh e selecione o banco:
use atividade1;

// Confirme que a importação funcionou:
show collections;
db.restaurants.countDocuments();

// ENTREGÁVEL: print da tela após a importação (salvar em prints/).


// ---------------------------------------------------------------------
// ETAPA 2: Inserir um documento na coleção restaurants
// ---------------------------------------------------------------------
db.restaurants.insertOne({
  address: {
    street: "2 Avenue",
    zipcode: "10075",
    building: "1480",
    coord: [-73.9557413, 40.7720266]
  },
  borough: "Manhattan",
  cuisine: "Italian",
  grades: [
    { date: ISODate("2014-10-01T00:00:00Z"), grade: "A", score: 11 },
    { date: ISODate("2014-01-16T00:00:00Z"), grade: "B", score: 17 }
  ],
  name: "Vella",
  restaurant_id: "41704620"
});

// Confira a inserção:
db.restaurants.find({ name: "Vella" });

// ENTREGÁVEL: print da tela após a inserção (salvar em prints/).


// ---------------------------------------------------------------------
// ETAPA 3: Consultas
// ---------------------------------------------------------------------

// 3.1 Listar todos os restaurantes
db.restaurants.find({});

// 3.2 Restaurantes do bairro (borough) "Manhattan"
db.restaurants.find({ borough: "Manhattan" });

// 3.3 Restaurantes com CEP (zipcode) "10022"
//     O zipcode está dentro de "address", então usamos notação de ponto.
db.restaurants.find({ "address.zipcode": "10022" });

// 3.4 Restaurantes que possuam alguma nota (grade) "B"
//     "grades" é um array; o MongoDB procura em todos os elementos.
db.restaurants.find({ "grades.grade": "B" });


// ---------------------------------------------------------------------
// ETAPA 4: Consultas com operadores
// ---------------------------------------------------------------------

// 4.1 Pontuação (score) maior que 30
//     Retorna restaurantes com PELO MENOS UMA avaliação acima de 30.
db.restaurants.find({ "grades.score": { $gt: 30 } });

// 4.2 Pontuação (score) menor que 10
//     Retorna restaurantes com PELO MENOS UMA avaliação abaixo de 10.
db.restaurants.find({ "grades.score": { $lt: 10 } });

// 4.3 Culinária italiana E CEP "10075"
db.restaurants.find({
  $and: [
    { cuisine: "Italian" },
    { "address.zipcode": "10075" }
  ]
});
// Forma simplificada (só funciona em consultas com E):
// db.restaurants.find({ cuisine: "Italian", "address.zipcode": "10075" });

// 4.4 Culinária italiana OU CEP "10075"
db.restaurants.find({
  $or: [
    { cuisine: "Italian" },
    { "address.zipcode": "10075" }
  ]
});
