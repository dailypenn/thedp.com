import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import s from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import RightCol from '../components/home/RightCol'
import { IArticle, IMostReadArticle } from '../types'
import { generateSlug, IMAGE_URL } from '../utils/helperFunctions'
import { StyledLink, Filler } from '../components/shared'

const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

const StyledRow = s(Row)`
  borderBottom: 1px solid #EBEBEB;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-right: 0.5em;
`

interface IHomeProps {
  pageContext: {
    centerpiece: IArticle
    topArticles: IArticle[]
    mostReadDP: IMostReadArticle[]
    mostRead34: IMostReadArticle[]
    mostReadUTB: IMostReadArticle[]
  }
}

const Home = ({
  pageContext: {
    centerpiece: {
      dominantMedia: {
        attachment_uuid: center_uuid,
        extension: center_extension
      },
      headline: center_headline,
      abstract: center_abstract,
      slug: center_slug,
      created_at: center_created
    },
    topArticles,
    mostReadDP,
    mostRead34,
    mostReadUTB
  }
}: IHomeProps): React.ReactElement => (
    <Layout>
      <SEO title="Home" />
      <Container style={{ marginTop: '1.5em' }}>
        <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
          <Col xs={9}>
            <SubHeader > NEWS </SubHeader>
            <Row style={{ marginBottom: '1em', borderBottom: '1px solid #EBEBEB', padding: '1em 0', marginRight: '1em' }}>
              <Col xs={4} style={{ borderRight: '1px solid #EBEBEB' }}>
                {topArticles.map(({
                    dominantMedia: { attachment_uuid, extension },
                    headline,
                    slug,
                    created_at
                  }) => (
                    <StyledLink key={slug} to={`/article/${generateSlug(slug, created_at)}`}>
                      <StyledRow>
                        <Image fluid src={IMAGE_URL(attachment_uuid, extension)} />
                        <strong>{headline}</strong>
                      </StyledRow>
                    </StyledLink>
                  ))}
              </Col>
              <Col>
                <StyledLink to={`/article/${generateSlug(center_slug, center_created)}`}>
                  <Image fluid src={IMAGE_URL(center_uuid, center_extension)} />
                  <h4> {center_headline} </h4>
                  <p dangerouslySetInnerHTML={{ __html: center_abstract }} />
                </StyledLink>
              </Col>
            </Row>
            <SubHeader> TRENDING </SubHeader>
            <Filler color="#DFF3DB"/>
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
          <RightCol mostReadDP={mostReadDP} />
        </Row>
      </Container>
      <Footer />
    </Layout>
)

export default Home
