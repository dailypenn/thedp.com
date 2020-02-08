import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from './layout'
import SEO from './seo'

const Home = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      sitePage(path: {eq: "/"}) {
        path
        context {
          centerpiece {
            abstract
            content
            dominantMedia {
              content
              attachment_uuid
            }
            headline
            subhead
          }
        }
      }
    }
  `)

  const centerpieceData = data.sitePage.context.centerpiece

  const { dominantMedia } = centerpieceData
  const { content, attachment_uuid } = dominantMedia

  return (
    <Layout>
      <SEO title="Home" />
      <h1> Created a Page </h1>
      <img src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} />
    </Layout>
  )
}

export default Home