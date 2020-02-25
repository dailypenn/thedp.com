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
const SectionTemplate = path.resolve('./src/templates/Section.tsx')
const {
  CENTERPIECE_API,
  TOP_ARTICLES_API,
  MOST_READ_DP_API,
  MOST_READ_UTB_API,
  MOST_READ_34_API,
} = require('./src/constants/api.ts')

// TODO: add action from create HomePage
const createHomePage = async (createPage) => {
  const resp = await axios.get(CENTERPIECE_API)
  const topResp = await axios.get(TOP_ARTICLES_API)
  const mostReadDPResp = await axios.get(MOST_READ_DP_API)
  const most34Resp = await axios.get(MOST_READ_34_API)
  const mostUTBResp = await axios.get(MOST_READ_UTB_API)

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

// TODO: add action for creating section pages]
const createSections = async (createPage, slug) => {
  const sectionResp = await axios.get(`${BASE_URL}https://www.thedp.com/section/${slug}.json`)
  const mostReadDPResp = await axios.get(MOST_READ_DP_API)
  const topResp = await axios.get(TOP_ARTICLES_API)
  const { articles } = sectionResp.data
  const { articles: topArticles } = topResp.data

  let filteredArticles = []
  if (articles) {
    filteredArticles = articles.map(article => {
      delete article.content
      return article
    })
  }

  
  createPage({
    path: `section/${slug}`,
    component: SectionTemplate,
    context: {
      filteredArticles,
      section: slug,
      centerpiece: topArticles[0],
      topArticles: topArticles.slice(1, 3),
      mostReadDP: mostReadDPResp.data.result.slice(0, 5),
    }
  })


}

const generateSlug = (slug, created_at) => {
  const firstIndex = created_at.indexOf('-')
  const year = created_at.substring(0, firstIndex)
  const month = created_at.substring(firstIndex + 1, created_at.indexOf('-', firstIndex + 1))
  return `${year}/${month}/${slug}`
}

// TODO: add action for creating article pages
const createArticles = async (createPage) => {
  const newsResp = await axios.get(`${BASE_URL}https://www.thedp.com/section/news.json`)
  const mostReadDPResp = await axios.get(`${BASE_URL}https://us-central1-web-services-dp.cloudfunctions.net/dropcap/DP`)

  newsResp.data.articles.forEach(article => {
    const { authors, created_at, slug } = article
    authors.forEach(async author => await createAuthors(createPage, author.slug))
    createPage({
      path: `/article/${generateSlug(slug, created_at)}`,
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

  await createSections(createPage, 'news')
  await createHomePage(createPage)
  await createArticles(createPage)
}