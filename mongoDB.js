const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:Wd02JvkuSLC6wNBY@cluster0.jittr.mongodb.net/SDdBDemo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("SDdBDemo").collection("datamain");
  // perform actions on the collection object
  console.log("Conectado pa"); 
  client.close();
});