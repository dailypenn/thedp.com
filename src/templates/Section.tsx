import React from 'react'
import { IArticle, IMostReadArticle } from '../types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'
import RightCol from '../components/home/RightCol'


interface ISectionProps {
  pageContext: {
    filteredArticles: IArticle[]
    mostReadDP: IMostReadArticle[]
    section: string
    sectionTop: IArticle[]
  }
}

const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
  color: ${({ color }) => color};
`

const Filler = s.div`
  margin-top: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  height: 90px;
  background-color: #DFF3DB;
`

const Section = ({ pageContext: context }: ISectionProps ) => {
  const { filteredArticles, mostReadDP, section, sectionTop } = context
  console.log(sectionTop)
  return (
    <Layout>
      <SEO title="Section"/>
      <Container style={{ marginTop: '1.5em' }}>
      <Row><SubHeader color={'black'}>{section}</SubHeader></Row>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em' }}>
              <Col>
                <Row>
                  SMALL ARTICLE 1
                </Row>
                <Row>
                  SMALL ARTICLE 2
                </Row>
              </Col>
              <Col xs={9}>
                
              </Col>
            </Row>
            <Filler/>
            <Row>
              <SubHeader color={'black'}>MOST RECENT</SubHeader>
            </Row>
              {filteredArticles.map((article, idx) => {
                  const { abstract, uuid, headline, dominantMedia } = article
                  const { attachment_uuid } = dominantMedia
                  return (
                    <Row key={uuid} style = {{borderBottom: '1px solid #EBEBEB'}}>
                      <Col xs={4} style={{padding: '1em', margin: '1em'}}>
                        <Row>
                        <Image fluid src={`https://snworksceo.imgix.net/dpn/${attachment_uuid}.sized-1000x1000.jpg?w=1000`} />
                        </Row>
                      </Col>
                      <Col style={{padding: '1em', margin: '1em'}}>
                        <Row>
                          <h5>{headline}</h5>
                          <p dangerouslySetInnerHTML={{ __html:  abstract}}/>
                        </Row>
                      </Col>
                    </Row>
                  )
              })}
              <Filler/>
          </Col>
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
     <Footer/>
    </Layout>
  )
}

export default Section