import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col, Container, Image } from 'react-bootstrap'

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
      <Container>
        <Row>
          <Col xs={9}>
            <Row>
              <h1> News </h1>
              <Col xs={3}>
              </Col>
              <Col xs={9}>
                <Image src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} fluid/>
              </Col>
            </Row>
          </Col>
          <Col xs={3}> 2 of 3 </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home