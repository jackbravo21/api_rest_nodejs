const express = require('express');
const router = express.Router();
const conn = require("../db/db");

router.get("/", (req, res) => {
        
    //res.json({response: "Você está conectado na aplicação Node!"});
    res.send("Você está conectado na aplicação Node!");
});

router.get("/listar", (req, res) => {

    const sql = `SELECT * FROM pessoas`;

    conn.query(sql, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        const pessoas = data;
        console.log(pessoas);
        //res.json({Data: pessoas});
        res.status(200).send(pessoas);
    });
});

router.get("/listar/:id", (req, res) => {

    const id = req.params.id;
    
    const sql = `SELECT * FROM pessoas WHERE id_pessoa = ${id}`;

    conn.query(sql, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        const pessoas = data[0];   //0 porque eh o primeiro item do array;
        console.log(pessoas);
        //res.json({Data: pessoas});
        res.send(pessoas);
    });
});


router.post("/inserir", (req, res) => {

    const nome = req.body.nome;
    const rg = req.body.rg;
    const cpf = req.body.cpf;
    const data_nascimento = req.body.data_nascimento;
    const data_admissao = req.body.data_admissao;
    const funcao = req.body.funcao;

    const query = `INSERT INTO pessoas (nome, rg, cpf, data_nascimento, data_admissao, funcao) VALUES ("${nome}", "${rg}", "${cpf}", "${data_nascimento}", "${data_admissao}", "${funcao}")`;

    conn.query(query, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        //res.redirect("/");
        //res.json({Data: data});
        res.send(data);
    });
});

router.post("/editar", (req, res) => {

    const id_pessoa = req.body.id_pessoa;
    const nome = req.body.nome;
    const rg = req.body.rg;
    const cpf = req.body.cpf;
    const data_nascimento = req.body.data_nascimento;
    const data_admissao = req.body.data_admissao;
    const funcao = req.body.funcao;
    
    const sql = `UPDATE pessoas SET nome = "${nome}", rg = "${rg}", cpf = "${cpf}", data_nascimento = "${data_nascimento}", data_admissao = "${data_admissao}", funcao = "${funcao}" WHERE id_pessoa = "${id_pessoa}"`;
    
    conn.query(sql, function (err, data){
        if(err){
            console.log(err);
            return;
        }

    //res.json({response: "Dados EDITADOS com SUCESSO!"});
    res.send("Dados EDITADOS com SUCESSO!");
    });
});

router.get("/remover/:id", (req, res) => {

    const id = req.params.id;

    const sql = `DELETE FROM pessoas WHERE id_pessoa = ${id}`;

    conn.query(sql, function(err){
        if(err){
            console.log(err);
            return;
        }
    //res.json({response: "Dados REMOVIDOS com SUCESSO!"});
    res.send("Dados REMOVIDOS com SUCESSO!");
    });
});

module.exports = router;