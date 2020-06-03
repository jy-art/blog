const express = require("express")
const path = require('path')

const app = express()
app.set('secre','1737030762')

app.use(require('cors')())

const bodyParser = require('body-parser');
app.use(bodyParser.json()) 

app.use('/uploads',express.static(path.join(__dirname + '/uploads')))
require('./plugins/db')(app)
require('./routers/admin')(app)
require('./routers/web')(app)


app.listen(3000, () => {
    console.log('http://localhost:3000');
    
})