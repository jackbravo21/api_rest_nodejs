const express = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nome_do_meu_db"
});

module.exports = conn;
