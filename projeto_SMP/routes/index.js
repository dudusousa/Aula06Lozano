 const express = require('express');

const router = express.Router();
router.get('/', (req,res)=>{
    // res.send('Ola Mundo!!');
    let nome = req.query.nome;
    let idade = req.query.idade
    res.send('Olá ' + nome+ ' você tem ' + idade + ' anos de idade');
});
router.get('/sobre', (req,res)=>{
     res.send('Página sobre o projeto!!!');
});

module.exports = router;