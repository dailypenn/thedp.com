/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const axios = require('axios')

const BASE_URL = 'http://localhost:5000/fetch?url='
const HomeTemplate = path.resolve('./src/templates/HomePage.tsx')
const AuthorTemplate = path.resolve('./src/templates/Author.tsx')
const ArticleTemplate = path.resolve('./src/templates/Article.tsx')

// TODO: add action from create HomePage
const createHomePage = async (createPage) => {
  const resp = await axios.get(`${BASE_URL}http://www.thedp.com/section/centerpiece.json`)

  const topResp = await axios.get(`${BASE_URL}http://www.thedp.com/section/top.json`)

  const mostReadDPResp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/DP`)

  const most34Resp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/34ST`)

  const mostUTBResp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/UTB`)

  const { articles } = resp.data

  const { articles: topArticles } = topResp.data

  createPage({
    path: '/',
    component: HomeTemplate,
    context: {
      centerpiece: articles[0],
      topArticles: topArticles.slice(0,3),
      mostReadDP: mostReadDPResp.data.result.slice(0, 5),
      mostRead34: most34Resp.data.result.slice(0, 3),
      mostReadUTB: mostUTBResp.data.result.slice(0, 3),
    }
  })
}

// TODO: add action for creating section pages

// TODO: add action for creating article pages
const createArticles = async (createPage) => {
  const newsResp = await axios.get(`${BASE_URL}https://www.thedp.com/section/news.json`)
  const mostReadDPResp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/DP`)

  newsResp.data.articles.forEach(article => {
    const { authors } = article
    authors.forEach(async author => await createAuthors(createPage, author.slug))
    createPage({
      path: article.slug,
      component: ArticleTemplate,
      context: {
        article,
        mostReadDP: mostReadDPResp.data.result.slice(0, 5)
      }
    })
  })
}

const createAuthors = async (createPage, slug) => {
  const resp = await axios.get(`${BASE_URL}https://www.thedp.com/staff/${slug}.json`)
  const mostReadDPResp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/DP`)
  const { author, articles } = resp.data
  let filteredArticles = []
  if (articles) {
    filteredArticles = articles.map(article => {
      delete article.content
      return article
    })
  }

  createPage({
    path: `staff/${slug}`,
    component: AuthorTemplate,
    context: {
      filteredArticles,
      author,
      mostReadDP: mostReadDPResp.data.result.slice(0, 5),
    }
  })
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  await createHomePage(createPage)
  await createArticles(createPage)
}