import React from 'react'
import { Row, Col, Container, Image, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'


import Layout from '../components/layout'
//import SEO from '../components/seo'
import Footer from '../components/Footer'

const SubHeader = s.h3`
  color: #black;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

const Abstract = s.h2`
  color: #black;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
`

const AuthorName = s.h3`
  color: #4B4B4B;
  font-size: 16px;
  font-weight: 400;
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
`

const Filler = s.div`
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;
  margin-bottom: 2em;
  height: 90px;
  align: center;
  background-color: #DFF3DB;
`

const Filler1 = s.div`
  margin-top: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  height: 130px;
  background-color: rgba(170, 30, 34, 0.25);
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


const Article = ({ pageContext: context }) => {
  const { article, mostReadDP } = context
  const { authors, dominantMedia, headline, abstract, content } = article
  const { name } = authors[0]
  const { attachment_uuid, created_at} = dominantMedia

  return (
    <Layout>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <SubHeader > {headline} </SubHeader>
            <Abstract dangerouslySetInnerHTML={{ __html: abstract }} />
            <AuthorName>By {name}</AuthorName>
            <p>{created_at}</p>
            <Filler />
              <Image src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} fluid />
              <p dangerouslySetInnerHTML={{ __html: content }} />
              <SubHeader style={{ color: '#AA1E22' }}> READ MORE </SubHeader>
            <Line />
            
            <Row style={{ marginTop: '1em' }}>

              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler1/>
                <Abstract style={{fontWeight: '500'}}>Suggestion Article Title 1 </Abstract>
              </Col>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler1/>
                <Abstract style={{fontWeight: '500'}}>Suggestion Article Title 2 </Abstract>
              </Col>
              <Col xs={4}style={{ fontSize: '90%', padding: '0 .6em' }}>
                <Filler1/>
                <Abstract style={{fontWeight: '500'}}>Suggestion Article Title 3 </Abstract>
              </Col>
              
            </Row>
          </Col>
          <Col xs={3} style={{ borderLeft: '1px solid #EBEBEB' }}>
            
           <Filler />
            <SubHeader style={{ fontSize: '25px', color: '#AA1E22' }}> MOST READ </SubHeader>
            <Card>
              <ListGroup>
                {mostReadDP.map((mostReadDP, idx) => {
                  return (
                    <ListGroup.Item>
                      <MostReadCard idx={idx + 1} content={mostReadDP.ogTitle} />
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Card>
          <Filler />

            <SubHeader style={{fontSize: '25px', color: '#AA1E22' }}> PENNCONNECTS </SubHeader>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Article