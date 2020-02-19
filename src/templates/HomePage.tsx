import React from 'react'
// import { graphql } from 'gatsby'
import { Row, Col, Container, Image, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import { IArticle } from '../types'

const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

const Filler = s.div`
  margin-top: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  height: 90px;
  background-color: #DFF3DB;
`

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

const MostReadCard = ({ idx, content }) => {
  return (
    <Row>
      <Col xs={3} style={{ color: '#AA1E22', fontSize: '36px' }}> {idx} </Col>
      <Col> <p dangerouslySetInnerHTML={{ __html: content }} style={{ fontSize: '80%' }} /> </Col>
    </Row>
  )
}

interface IHomeProps {
  pageContext: {
    centerpiece: IArticle
  }
}

const Home = ({ pageContext: context }: IHomeProps) => {
  const {
    centerpiece: centerpieceData,
    topArticles: topData,
    mostReadDP,
    mostRead34,
    mostReadUTB
  } = context

  const { dominantMedia, headline, abstract } = centerpieceData
  const { content, attachment_uuid } = dominantMedia

  return (
    <Layout>
      <SEO title="Home" />
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <SubHeader > NEWS </SubHeader>
            <Row style={{ marginBottom: '1em', borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <Col xs={4} style={{ borderRight: '1px solid #EBEBEB' }}>
                {topData.map(article => {
                  const { dominantMedia: { attachment_uuid }, headline } = article
                  return (
                    <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em', marginBottom: '1em', marginRight: '0.5em' }}>
                      <Image fluid src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} />
                      <strong>{headline}</strong>
                    </Row>
                  )
                })}
              </Col>
              <Col>
                <Image src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} fluid />
                <h4> {headline} </h4>
                <p dangerouslySetInnerHTML={{ __html: abstract }} />
              </Col>
            </Row>
            <SubHeader> TRENDING </SubHeader>
            <Filler />
            <Line />
            <SubHeader> FROM 34TH STREET </SubHeader>
            <p style={{ fontStyle: 'italic' }}> The DP&#39;s arts and culture magazine </p>
            <div style={{ borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <div style={{ textAlign: 'center', padding: '0 5em' }}>
                <img style={{ height: '300px' }} src={mostRead34[0].image} />
                <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[0].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
            <Row style={{ marginTop: '1em', borderBottom: '1px solid #A9A9A9', paddingBottom: '1em', marginRight: '1em' }}>
              <Col xs={6} style={{ fontSize: '90%', padding: '0 2em', borderRight: '1px solid #EBEBEB' }}>
                <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[1].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
              <Col style={{ fontSize: '90%', padding: '0 2em' }}>
                <p> <strong dangerouslySetInnerHTML={{ __html: mostRead34[2].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
            </Row>
            <SubHeader> FROM UNDER THE BUTTON </SubHeader>
            <p style={{ fontStyle: 'italic' }}> Penn&#39;s only intentionally satirical publication </p>
            <div style={{ borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <div style={{ textAlign: 'center', padding: '0 5em' }}>
                <img style={{ height: '300px' }} src={mostReadUTB[0].image} />
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[0].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>
            <Row style={{ marginTop: '1em' }}>
              <Col xs={6} style={{ fontSize: '90%', padding: '0 2em', borderRight: '1px solid #EBEBEB' }}>
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[1].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
              <Col style={{ fontSize: '90%', padding: '0 2em' }}>
                <p> <strong dangerouslySetInnerHTML={{ __html: mostReadUTB[2].ogTitle }} /> </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Col>
            </Row>
          </Col>
          <Col xs={3} style={{ borderLeft: '1px solid #EBEBEB' }}>
            <SubHeader style={{ color: '#AA1E22' }}> MOST READ </SubHeader>
            <Card>
              <ListGroup>
                {mostReadDP.map((article, idx) => {
                  return (
                    <ListGroup.Item>
                      <MostReadCard idx={idx + 1} content={article.ogTitle} />
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Card>
            <SubHeader style={{ color: '#AA1E22' }}> PODCASTS </SubHeader>
            <SubHeader style={{ color: '#AA1E22' }}> PRINT ISSUES </SubHeader>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Home