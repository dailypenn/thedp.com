import React from 'react'
import { Row, Col, Container, Image, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'

import { MostReadCard } from '../components/shared'
import RightCol from '../components/home/RightCol'
import { IArticle, IAuthor, IMostReadArticle } from '../types'

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

interface IAuthorProps {
  pageContext: {
    filteredArticles: IArticle[]
    author: IAuthor
    mostReadDP: IMostReadArticle[]
  }
}

const Author = ({ pageContext: context }: IAuthorProps) => {
  console.log(context)
  const { filteredArticles, author, mostReadDP } = context

  return (
    <Layout>
      <SEO title="Author"/>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <Row><h4>{author.name}</h4></Row>
            <Row style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '1em' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Row>
            <Filler>
              Adssss
            </Filler>
            <Row>
              <h4>Most Recent</h4>
            </Row>
              {filteredArticles.map((article, idx) => {
                  const { dominantMedia, headline, abstract, uuid } = article
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
      <Footer />
    </Layout>
  )
}

export default Author