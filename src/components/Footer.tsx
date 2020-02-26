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
import { ILink  } from '../types'

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

interface IFooterLinksProps {
  linksArray: ILink[]
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ linksArray }) => (
    <Col>
      {linksArray.map((link, idx) => {
        if (idx === 0) {
          if (link.slug.includes('https')) {
            return (
              <p><strong><StyledAnchorTag href={link.slug}>{link.section}</StyledAnchorTag></strong></p>
            )
          }
          return (
            <p><strong><StyledLink to={link.slug}>{link.section}</StyledLink></strong></p>
          )
        }
        if (link.slug.includes('https')) {
          return (
            <p><StyledAnchorTag href={link.slug}>{link.section}</StyledAnchorTag></p>
          )
        }
        return (
          <p><StyledLink to={link.slug}>{link.section}</StyledLink></p>
        )
      })}
    </Col>
  )

const Footer = () => (
  <Wrapper>
    <LogoWrapper>
      <Image fluid src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/logo.svg" />
    </LogoWrapper>
    <Row>
        <FooterLinks linksArray={AboutLinks}/>
        <FooterLinks linksArray={NewsLinks}/>
        <FooterLinks linksArray={SportsLinks}/>
        <FooterLinks linksArray={OpinionLinks}/>
        <FooterLinks linksArray={StreetLinks}/>
        <FooterLinks linksArray={UnderTheButtonLinks}/>
    </Row>
    <p style={{ textAlign: 'center', marginTop: '2em' }}> Copyright &copy; 2020 The Daily Pennsylvanian, Inc. All Rights Reserved.</p>
    <p style={{ textAlign: 'center' }}> Powered by <SNOImg src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/SNWorks.svg" /> Solutions by The State News. </p>
  </Wrapper>
)

export default Footer
