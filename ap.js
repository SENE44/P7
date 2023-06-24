const express=require('express')
const mysql=require('mysql')
//app.set('view engine','ejs')
const fs=require('fs')
const bodyParser = require('body-parser')
//app.use(express.json())

const app=express()
app.use(bodyParser.urlencoded ({extended:true}))

app.post('/',(req,res)=>{

    const connection=mysql.createConnection({
        hostost:'localhost',
        user:'root',
        port:3306,
        password:'sene',
        database:'article'
    
    })
    connection.connect((err)=>{
        if(err)console.log('errrrrr');
        else{
            console.log('connection ressie')
    
        }
    })
        connection.query(`INSERT INTO elements(id,titre,resumé,auteur,contenu,date_creation,date_m_a_j) 
        VALUES 
        ('2' ,'hdhggd','edede','rtttyr','dhdggdg','2002/02/02','2002/02/02')  `,(err,result)=>{
            if(err) throw err;
            res.send('erregister')
        })
    
    
})






app.listen(3000,()=>{})