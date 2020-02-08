import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col, Container, Image, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'

import Layout from './layout'
import SEO from './seo'

const SubHeader = s.h3`
  color: '#4B4B4B'
`

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
          topArticles {
            abstract
            content
            dominantMedia {
              attachment_uuid
              content
            }
            headline
            subhead
          }
          mostReadDP {
            path
            image
            ogTitle
          }
          mostRead34 {
            path
            image
            ogTitle
          }
          mostReadUTB {
            path
            image
            ogTitle
          }
        }
      }
    }
  `)

  const centerpieceData = data.sitePage.context.centerpiece
  const topData = data.sitePage.context.topArticles
  const mostReadDP = data.sitePage.context.mostReadDP

  const { dominantMedia, headline, abstract } = centerpieceData
  const { content, attachment_uuid } = dominantMedia

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col xs={9} style={{ borderRight: '1px solid #A9A9A9' }}>
            <SubHeader > NEWS </SubHeader>
            <Row style={{ marginBottom: '1em', borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <Col xs={3} style={{ borderRight: '1px solid #EBEBEB' }}>
                {topData.map(article => {
                  const { dominantMedia: { attachment_uuid }, headline } = article
                  return (
                    <>
                      <Image fluid src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} />
                      { headline }
                    </>
                  )
                })}
              </Col>
              <Col xs={9}>
                <Image src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} fluid/>
                <h4> {headline} </h4>
                {abstract}
              </Col>
            </Row>
            <SubHeader> MOST RECENT </SubHeader>
            <SubHeader> FROM 34TH STREET </SubHeader>
            <SubHeader> FROM UNDER THE BUTTON </SubHeader>
          </Col>
          <Col xs={3}>
            <SubHeader> MOST READ </SubHeader>
            <Card>
              <ListGroup>
                {mostReadDP.map((article, idx) => {
                  return (
                    <ListGroup.Item>
                      {`${idx} ${article.ogTitle}`}
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home