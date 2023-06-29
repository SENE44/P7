const express=require('express')
const mysql=require('mysql')
const fs=require('fs')
const bodyParser = require('body-parser')

const app=express()
app.use(bodyParser.urlencoded ({extended:true}))
const connection=mysql.createConnection({
    hostost:'localhost',
    user:'root',
    port:3306,
    password:'sene',
    database:'article'

})
connection.connect((err)=>{
    if(err)throw err;
    else{
        console.log('connection ressie')

    }
})
const reqgget=app.get(('/'), (req,res)=>{
    connection.query('SELECT * FROM elements',(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
}) 
const reqpost=app.post(('/'),(req,res)=>{

    connection.query(`INSERT INTO elements(id,titre,resumé,auteur,contenu,date_creation,date_m_a_j) 
    VALUES 
    ('4' ,'hdhggd','edede','rtttyr','dhdggdg','2002/02/02','2002/02/02')  `,(err,result)=>{
        if(err) throw err;
        res.send('erregister')
    })
})

const reqput=app.put(('/'),(req,res)=>{

    connection.query(`UPDATE elements SET titre='wwwccc',resumé='cvvvv' WHERE id=2`,(err,result)=>{
        if(err) throw err;
        res.send('modififier')
    })
})


app.listen(3000,()=>{console.log('okok')})







