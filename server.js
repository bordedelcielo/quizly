const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')

dotenv.config()

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // graphiql?
}))

require('./src/routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT ${process.env.PORT}`)
});