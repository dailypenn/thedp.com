import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import s from 'styled-components'
import ReactDOM from 'react-dom'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import RightCol from '../components/home/RightCol'
import Article from '../components/Article'
import { IArticle, IMostReadArticle } from '../types'
import { generateSlug, IMAGE_URL } from '../utils/helperFunctions'
import {
  StyledLink,
  StyledAnchorTag,
  Filler,
  HeadlineText,
  SectionHeader,
} from '../components/shared'

import { WHITE, LIGHT_GRAY, GRAY, DP_RED, DP_DARK_RED } from '../styles/colors'

const Line = s(Row)`
  margin-right: 1em;
  border-bottom: 1px solid #EBEBEB;
`

const StyledRow = s.div`
  border-bottom: 1px solid #EBEBEB;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-right: 0.5em;
`
const SubscribeButton = s(Button)`
  border-radius: 5px;
  color: ${WHITE} !important;
  background-color: ${DP_RED} !important;
  border-color: ${DP_DARK_RED} !important;
`
const NewsLetterWrapper = s.div`
  margin-top: 30px;
  border-radius: 6px;
  border-top: 6px ${DP_RED} solid;
  border-right: 3px solid #FFFFFF;
  border-bottom: 3px solid #FFFFFF;
  border-left: 3px solid #FFFFFF;
  box-shadow: 0px 5px 6px #00000029;
`
const LogoImage = s.img`
  width: 700px;
  display: initial;
  max-width: 100%;
  height: auto;
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
    centerpiece,
    topArticles,
    mostReadDP,
    mostRead34,
    mostReadUTB,
  },
}: IHomeProps): React.ReactElement => (
  <Layout>
    <SEO title="Home" />
    <Container style={{ marginTop: '1.5em' }}>
      <Row style={{ borderBottom: '1px solid #A9A9A9', paddingBottom: '1em' }}>
        <Col xs={9}>
          <SectionHeader> NEWS </SectionHeader>
          <Row
            style={{
              marginBottom: '1em',
              borderBottom: '1px solid #EBEBEB',
              padding: '1em 0',
              marginRight: '1em',
            }}
          >
            <Col xs={4} style={{ borderRight: '1px solid #EBEBEB' }}>
              {topArticles.map((article, idx) => (
                <StyledRow>
                  <Article
                    article={article}
                    includeAbstract={idx === 0 ? true : false}
                  />
                </StyledRow>
              ))}
            </Col>
            <Col>
              <Article article={centerpiece} includeAbstract isCenter />
            </Col>
          </Row>
          <SectionHeader> TRENDING </SectionHeader>
          <Filler color="#DFF3DB" />
          <Line />

          <NewsLetterWrapper>
            <Row style={{ padding: '1.5rem' }}>
              <Col>
                <LogoImage
                  src={
                    'https://d1q35ni5859stt.cloudfront.net/40388fc9a13ea9253e1ca9ed785affde/dist/img/header-logo.svg'
                  }
                />
                <p>Stay up to date with out daily newsletter.</p>
              </Col>
              <Col>
                <form>
                  <Row
                    style={{
                      padding: '7px',
                      border: '2px solid #CCCCCC',
                      borderRadius: '4px',
                      width: '500px',
                    }}
                  >
                    <select
                      style={{ marginRight: '60px', paddingRight: '10px' }}
                    >
                      <option value="Dear Penn">Dear Penn</option>
                      <option value="The Weekly Roundup">
                        The Weekly Roundup
                      </option>
                      <option value="Print Edition of The Daily Pennsylvanian">
                        Print Edition of The Daily Pennsylvanian
                      </option>
                      <option value="The Toast">The Toast</option>
                    </select>

                    <SubscribeButton style={{ float: 'right' }}>
                      {' '}
                      SUBSCRIBE{' '}
                    </SubscribeButton>
                  </Row>
                </form>
              </Col>
            </Row>
          </NewsLetterWrapper>

          <SectionHeader> NEWS </SectionHeader>

          <Line />

          <SectionHeader> VISUAL STORIES </SectionHeader>

          <SectionHeader> FROM 34TH STREET </SectionHeader>
          <p style={{ fontStyle: 'italic' }}>
            {' '}
            The DP&#39;s arts and culture magazine{' '}
          </p>
          <div
            style={{
              borderBottom: '1px solid #EBEBEB',
              padding: '1em 0',
              marginRight: '1em',
            }}
          >
            <StyledAnchorTag href={`https://www.34st.com${mostRead34[0].path}`}>
              <div style={{ textAlign: 'center', padding: '0 5em' }}>
                <img style={{ height: '300px' }} src={mostRead34[0].image} />
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostRead34[0].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </div>
            </StyledAnchorTag>
          </div>
          <Row
            style={{
              marginTop: '1em',
              borderBottom: '1px solid #A9A9A9',
              paddingBottom: '1em',
              marginRight: '1em',
            }}
          >
            <Col
              xs={6}
              style={{
                fontSize: '90%',
                padding: '0 2em',
                borderRight: '1px solid #EBEBEB',
              }}
            >
              <StyledAnchorTag
                href={`https://www.34st.com${mostRead34[1].path}`}
              >
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostRead34[1].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </StyledAnchorTag>
            </Col>
            <Col style={{ fontSize: '90%', padding: '0 2em' }}>
              <StyledAnchorTag
                href={`https://www.34st.com${mostRead34[2].path}`}
              >
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostRead34[2].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </StyledAnchorTag>
            </Col>
          </Row>
          <SectionHeader> FROM UNDER THE BUTTON </SectionHeader>
          <p style={{ fontStyle: 'italic' }}>
            {' '}
            Penn&#39;s only intentionally satirical publication{' '}
          </p>
          <div
            style={{
              borderBottom: '1px solid #EBEBEB',
              padding: '1em 0',
              marginRight: '1em',
            }}
          >
            {console.log(mostReadUTB[0])}
            <StyledAnchorTag
              href={`https://www.underthebutton.com${mostReadUTB[0].path}`}
            >
              <div style={{ textAlign: 'center', padding: '0 5em' }}>
                <img style={{ height: '300px' }} src={mostReadUTB[0].image} />
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostReadUTB[0].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </div>
            </StyledAnchorTag>
          </div>
          <Row style={{ marginTop: '1em' }}>
            <Col
              xs={6}
              style={{
                fontSize: '90%',
                padding: '0 2em',
                borderRight: '1px solid #EBEBEB',
              }}
            >
              <StyledAnchorTag
                href={`https://www.underthebutton.com${mostReadUTB[1].path}`}
              >
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostReadUTB[1].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </StyledAnchorTag>
            </Col>
            <Col style={{ fontSize: '90%', padding: '0 2em' }}>
              <StyledAnchorTag
                href={`https://www.underthebutton.com${mostReadUTB[2].path}`}
              >
                <p>
                  {' '}
                  <strong
                    dangerouslySetInnerHTML={{ __html: mostReadUTB[2].ogTitle }}
                  />{' '}
                </p>
                <p> test </p>
              </StyledAnchorTag>
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
