var Datastore = require('nedb')
var express = require('express')
var app = express()
var database = new Datastore({
filename:'mydatabase.db',
autoload:true
})
app.use(express.static('client'))
app.listen(8000, ()=> {
console.log("listening at port 8000")
})

app.use(express.json())
app.post('/api',  (req, res) => {
console.log(req.body)
database.insert(req.body)
})
app.get('/api', (req, res) => {
database.find({}, (err, data)=>{
if (err) {
console.error("error occured exiting")
return;
}
res.json(data) 

})
})