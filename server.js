const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const studntsRoutes = require('./src/routes')

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Server is working' })
})

app.use(express.json());
app.use('/student', studntsRoutes)


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})