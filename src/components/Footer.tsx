import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Image } from 'react-bootstrap'
import s from 'styled-components'
import { AboutLinks, NewsLinks, SportsLinks, OpinionLinks, StreetLinks, UnderTheButtonLinks } from '../constants'

const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`

const StyledNonSlug = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

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

const Footer = () => (
  <Wrapper>
    <LogoWrapper>
      <Image fluid src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/logo.svg" />
    </LogoWrapper>
    <Row>
      <Col>
        {AboutLinks.map((link, idx) => {
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
      <Col>
        {NewsLinks.map((link, idx) => {
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
      <Col>
        {SportsLinks.map((link, idx) => {
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
      <Col>
        {OpinionLinks.map((link, idx) => {
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
      <Col>
        {StreetLinks.map((link, idx) => {
          if (idx === 0 ) {
            return (
              <p><strong><StyledNonSlug href={link.slug}>{link.section}</StyledNonSlug></strong></p>
            )
          } else {
            return (
              <p><StyledNonSlug href={link.slug}>{link.section}</StyledNonSlug></p>
            )
          }
        })}
      </Col>
      <Col>
        {UnderTheButtonLinks.map((link, idx) => {
          if (idx === 0 ) {
            return (
              <p><strong><StyledNonSlug href={link.slug}>{link.section}</StyledNonSlug></strong></p>
            )
          } else {
            return (
              <p><StyledNonSlug href={link.slug}>{link.section}</StyledNonSlug></p>
            )
          }
        })}
      </Col>
    </Row>
    <p style={{ textAlign: 'center', marginTop: '2em' }}> Copyright &copy; 2020 The Daily Pennsylvanian, Inc. All Rights Reserved.</p>
    <p style={{ textAlign: 'center' }}> Powered by <SNOImg src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/SNWorks.svg" /> Solutions by The State News. </p> 
  </Wrapper>
)

export default Footer