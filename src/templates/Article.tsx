import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'

import RightCol from '../components/home/RightCol'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import { IArticle, IMostReadArticle } from '../types'
import { IMAGE_URL } from '../utils/helperFunctions'

const SubHeader = s.h3`
  color: #black;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
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
  background-color: ${({ color }) => color};
`

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

interface IArticleProps {
  pageContext: {
    article: IArticle
    mostReadDP: IMostReadArticle[]
  }
}

const Article = ({ pageContext: context }: IArticleProps ) => {
  const { article, mostReadDP } = context
  const { authors, dominantMedia, headline, abstract, content } = article
  const { name } = authors[0]
  const { attachment_uuid, created_at, extension } = dominantMedia

  return (
    <Layout>
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <SubHeader > {headline} </SubHeader>
            <SubHeader style={{fontSize: '15px'}} dangerouslySetInnerHTML={{ __html: abstract }} />
            <AuthorName>By {name}</AuthorName>
            <p>{created_at}</p>
            <Filler color={'#DFF3DB'}/>
              <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
              <p dangerouslySetInnerHTML={{ __html: content }} />
              <SubHeader style={{ color: '#AA1E22' }}> READ MORE </SubHeader>
            <Line /> 
            <Row style={{ marginTop: '1em' }}>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}}> Suggestion Article Title 1 </SubHeader>
              </Col>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em', borderRight: '1px solid #EBEBEB' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}}> Suggestion Article Title 2 </SubHeader>
              </Col>
              <Col xs={4} style={{ fontSize: '90%', padding: '0 .6em' }}>
                <Filler color={'rgba(170, 30, 34, 0.25)'}/>
                <SubHeader style={{fontSize: '25px'}} > Suggestion Article Title 3 </SubHeader>
              </Col>
            </Row>
          </Col>
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Article
