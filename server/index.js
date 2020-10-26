const express = require('express')
const axios = require('axios')
const { ApolloServer, PubSub, gql } = require('apollo-server-express')
const { RESTDataSource } = require('apollo-datasource-rest')

const typeDefs = gql`
    type Subscription {
        articleEdited: Article
    }

    type Query {
        article(slug: String) : Article
        articles: [Article]
    }

    type Article {
        slug: String
        headline: String
        abstract: String
        content: String
    }
`
class ContentAPI extends RESTDataSource {
    constructor(){
        super();
    }

    async getArticle(slug) {
        const data = await this.get(`https://www.thedp.com/article/${slug}.json`)
        return data.article
    }

    async getArticles() {
        const data = await this.get(`https://www.thedp.com/section/news.json`)
        return data.articles;
    }
}

const resolvers = {
    Query: {
        article: async (_, { slug }, { dataSources }) => dataSources.contentAPI.getArticle(slug),
        articles: async (_, _args, { dataSources }) => dataSources.contentAPI.getArticles()
    }
}

// REST routes
const app = express();
app.use(express.json());

// Middleware to disable CORS
app.get('/*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// Request the data from the url and return it
app.get('/fetch', async ({ query: { url = '' } }, res) => {
  try {
    if (!url) throw new Error('No url param found in query')
    const { data } = await axios.get(url)
    res.json(data)
  } catch (e) {
    console.log(`Error occurs at this url: ${url}`)
    console.log(`Error: ${e}`)
  }
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            contentAPI: new ContentAPI()
        }
    }
})

server.applyMiddleware({ app })
const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(5000, () => {
    console.log('Server ready at port 5000')
    console.log('Subscriptions ready at ws://localhost:5000')
})
