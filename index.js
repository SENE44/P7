const express=require('express')
const mysql=require('mysql')
//app.set('view engine','ejs')
const fs=require('fs')
const bodyParser = require('body-parser')
//app.use(express.json())

const app=express()
app.use(bodyParser.urlencoded ({extended:true}))

app.get('/a',(req,res)=>{
    res.sendFile(__dirname+'/IHM/indexe.ejs')
})
app.get('/', (req, res)=>{
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
        connection.query('SELECT * FROM elements', (err, rows,fields)=>{
            if(err) throw err;
            res.json(rows)
            
            
        })
    })





app.listen(8080,()=>{})