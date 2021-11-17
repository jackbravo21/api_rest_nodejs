const express = require("express");
const app = express();
const conn = require("./db/db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pessoasRoute = require("./routes/pessoas");

app.use('/pessoas', pessoasRoute); 


///////////////////////////////////////

app.get("/", (req, res) => {
    
    //res.json({response: "Você está na aplicação de teste, utilize a rota PESSOAS."});
    res.status(200).send("Você está na aplicação de teste, utilize a rota PESSOAS.");
});

///////////////////////////////////////

conn.connect(function(err) {
    if(err){
        console.log(err)
    }
    console.log("Conectou ao Mysql!");

app.listen(3000, 
    console.log("Server NODE rodando na porta 3000 normalmente!"));
});