const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const cookieParser = require('cookie-parser')
const { authenticate } = require('./src/middleware/auth')
const path = require('path')

dotenv.config()

const app = express()

connectDB()

app.use(cookieParser())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // graphiql?
}))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/src/templates/views'));

app.use(authenticate)

require('./src/routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT ${process.env.PORT}`)
});