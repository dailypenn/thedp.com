/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const axios = require('axios')

const BASE_URL = 'http://localhost:5000/fetch?url='
const HomeTemplate = path.resolve('./src/components/Home.js')

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const resp = await axios.get(`${BASE_URL}http://www.thedp.com/section/centerpiece.json`)

  const topResp = await axios.get(`${BASE_URL}http://www.thedp.com/section/top.json`)

  const { articles } = resp.data

  const { articles: topArticles } = topResp.data

  createPage({
    path: '/',
    component: HomeTemplate,
    context: {
      centerpiece: articles[0],
      topArticles: [topArticles[0], topArticles[1]]
    }
  })
}