const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphQl/typeDefs');
const resolvers = require('./graphQl/resolvers');
const {MONGODB} = require('./config');


const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true}).then(
    () => {
        console.log('Db connection succesful')
        return server.listen({ port: 5000}).then((res) => {
            console.log(`server running at ${res.url}`);
        });
    }
)
