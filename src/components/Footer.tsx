import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import s from 'styled-components'

import {
  AboutLinks,
  NewsLinks,
  SportsLinks,
  OpinionLinks,
  StreetLinks,
  UnderTheButtonLinks
} from '../constants'
import { StyledLink, StyledAnchorTag } from '../components/shared'

const Wrapper = s.div`
  padding: 0 10em;
  font-size: 80%;
  margin-top: 4em;
  margin-bottom: 2em;
`

const LogoWrapper = s.div`
  width: 120px;
  margin: auto;
  padding: 20px 0;
`

const SNOImg = s.img`
  display: inline;
  width: 100px;
  margin: 0 5px;
`

const FooterLinks = linksArray => {
  return (
    <Col>
      {linksArray.map((link, idx) => {
        if (idx === 0 ) {
          return (
            <p><strong><StyledLink to={link.slug}>{link.section}</StyledLink></strong></p>
          )
        } else {
          return (
            <p><StyledLink to={link.slug}>{link.section}</StyledLink></p>
          )
        }
      })}
    </Col>
  )
}

const FooterAnchorLinks = linksArray => {
  return (
    <Col>
      {linksArray.map((link, idx) => {
        if (idx === 0 ) {
          return (
            <p><strong><StyledAnchorTag href={link.slug}>{link.section}</StyledAnchorTag></strong></p>
          )
        } else {
          return (
            <p><StyledAnchorTag href={link.slug}>{link.section}</StyledAnchorTag></p>
          )
        }
      })}
    </Col>
  )
}

const Footer = () => (
  <Wrapper>
    <LogoWrapper>
      <Image fluid src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/logo.svg" />
    </LogoWrapper>
    <Row>
        {FooterLinks(AboutLinks)}
        {FooterLinks(NewsLinks)}
        {FooterLinks(SportsLinks)}
        {FooterLinks(OpinionLinks)}
        {FooterAnchorLinks(StreetLinks)}
        {FooterAnchorLinks(UnderTheButtonLinks)}
    </Row>
    <p style={{ textAlign: 'center', marginTop: '2em' }}> Copyright &copy; 2020 The Daily Pennsylvanian, Inc. All Rights Reserved.</p>
    <p style={{ textAlign: 'center' }}> Powered by <SNOImg src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/SNWorks.svg" /> Solutions by The State News. </p> 
  </Wrapper>
)

export default Footer