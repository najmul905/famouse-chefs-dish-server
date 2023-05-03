const express = require('express')
const chefs=require('./ChefDetails.json')
const cors=require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
// app.get('/chefs/:id'(req,res)=>{
//     const id=req.perems.id
//     console.log('i got the id number',id)
// })

app.listen(port, () => {
  console.log(`Famous chefs dish API load ${port}`)
})