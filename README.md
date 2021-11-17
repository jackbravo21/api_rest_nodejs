## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#==================================================

Status de respostas:

200 - OK (informa que deu certo a operacao);
201 - Created (informa alem de que deu certo, que executou uma operacao);
202 - Accepted (eu aceitei sua requisicao, mas ainda nao processei, estou processando);

400 - Bad request (deu erro, deu ruim);
401 - Unauthorized -- Autenticacao, tem carater temporario (Voce nao ta autenticado ou esta autenticado incorretamente, mas se enviar a autenticacao certa, ele muda);
403 - Forbidden -- Autorizacao, tem carater permanente (Eu sei quem vc eh, estou vendo seu token e seu usuario, mas vc nao tem autorizacao, nao adianta trocar senha nem token);

500 - Internal server error (erro geral);
501 - Not implemented (a API nao suporta essa funcionalidade que foi solicitada);
503 - Service Unavaliable (a API executa a operacao, mas no momento esta indisponivel, foi correto o envio, mas no momento estamos em manutencao);

#==================================================

- Para criar sua tabela:

CREATE TABLE pessoas(
  `id_pessoa` TINYINT(255) NOT NULL AUTO_INCREMENT,
  `nome` CHAR(100) NOT NULL,
  `rg` CHAR(100) NOT NULL,
  `cpf` CHAR(100) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `data_admissao` DATE NOT NULL,
  `funcao` CHAR(100) NULL,
PRIMARY KEY (`id_pessoa`));

#==================================================