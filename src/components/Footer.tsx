import React from 'react'
import { Link } from 'gatsby'
import { Row, Col, Image } from 'react-bootstrap'
import s from 'styled-components'

const StyledLink = s(Link)`
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
        <p><strong> <StyledLink to="#"> About </StyledLink> </strong></p>
        <p> <StyledLink to="#"> About us </StyledLink> </p>
        <p> <StyledLink to="#"> Archives </StyledLink> </p>
        <p> Staff </p>
        <p> Advertise </p>
        <p> Donate </p>
        <p> Apparel Store </p>
        <p> Alumni Association </p>
        <p> Privacy Policy </p>
        <p> Terms of Service </p>
        <p> Contact us </p>
      </Col>
      <Col>
        <p><strong> News </strong></p>
        <p> Academics </p>
        <p> Administration </p>
        <p> Admissions </p>
        <p> Crime </p>
        <p> Politics </p>
        <p> Philadelphia </p>
        <p> <StyledLink to="#"> Student Life </StyledLink> </p>
        <p> <StyledLink to="#"> Gender &amp; Diversity </StyledLink> </p>
      </Col>
      <Col>
        <p><strong> <StyledLink to="#"> Sports </StyledLink> </strong></p>
        <p> <StyledLink to="#"> Men&#39;s Basketball </StyledLink> </p>
        <p> <StyledLink to="#"> Women&#39;s Basketball </StyledLink> </p>
        <p> <StyledLink to="#"> Wrestling </StyledLink> </p>
        <p> <StyledLink to="#"> Men&#39;s Squash </StyledLink> </p>
        <p> <StyledLink to="#"> Women&#39;s Squash </StyledLink> </p>
        <p> <StyledLink to="#"> Men&#39;s Swimming </StyledLink> </p>
        <p> <StyledLink to="#"> Women&#39;s Swimming </StyledLink> </p>
        <p> <StyledLink to="#"> Track &amp; Field </StyledLink> </p>
        <p> <StyledLink to="#"> Gymnastics </StyledLink> </p>
        <p> <StyledLink to="#"> Fencing </StyledLink> </p>
      </Col>
      <Col>
        <p><strong> <StyledLink to="#"> Opinion </StyledLink> </strong></p>
        <p> <StyledLink to="#"> Staff Editorials </StyledLink> </p>
        <p> <StyledLink to="#"> Opinion Columns </StyledLink> </p>
        <p> <StyledLink to="#"> Letters to the Editor </StyledLink> </p>
        <p> <StyledLink to="#"> Opinion Art </StyledLink> </p>
        <p> <StyledLink to="#"> Guent Columns </StyledLink> </p>
        <p> <StyledLink to="#"> Submit a Column </StyledLink> </p>
      </Col>
      <Col>
        <p><strong> <StyledLink to="#"> 34th Street </StyledLink> </strong></p>
        <p> <StyledLink to="#"> Features </StyledLink> </p>
        <p> <StyledLink to="#"> Ego </StyledLink> </p>
        <p> <StyledLink to="#"> Word on the Street </StyledLink> </p>
        <p> <StyledLink to="#"> Film &amp; TV </StyledLink> </p>
        <p> <StyledLink to="#"> Music </StyledLink> </p>
        <p> <StyledLink to="#"> Arts </StyledLink> </p>
        <p> <StyledLink to="#"> Style </StyledLink> </p>
        <p> <StyledLink to="#"> Overheads </StyledLink> </p>
        <p> <StyledLink to="#"> Visual Stories </StyledLink> </p>
        <p> <StyledLink to="#"> Projects </StyledLink> </p>
      </Col>
      <Col>
        <p><strong> <StyledLink to="#"> Under the Button </StyledLink> </strong></p>
        <p> <StyledLink to="#"> News </StyledLink> </p>
        <p> <StyledLink to="#"> Opinion </StyledLink> </p>
        <p> <StyledLink to="#"> Video </StyledLink> </p>
        <p> <StyledLink to="#"> Projects </StyledLink> </p>
      </Col>
    </Row>
    <p style={{ textAlign: 'center', marginTop: '2em' }}> Copyright &copy; 2020 The Daily Pennsylvanian, Inc. All Rights Reserved.</p>
    <p style={{ textAlign: 'center' }}> Powered by <SNOImg src="https://d1q35ni5859stt.cloudfront.net/df6846ed8e0d185eefc430ebf9a8941a/dist/img/SNWorks.svg" /> Solutions by The State News. </p> 
  </Wrapper>
)

export default Footer