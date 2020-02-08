import React, { useState } from "react"
import s from "styled-components"
import { Button, Dropdown, Image, Row, Navbar } from "react-bootstrap"
import Logo from '../images/icons/header-logo.svg'
import FBSVG from '../images/icons/facebook.svg'


// import SVGs from /image folder
import FBSVG from '../images/icons/facebook.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <FBSVG />
        </Link>
      </h1>
    </div>
const TopRow = s(Row)`
  text-align: center;
  padding: 20px 0 10px;
  background: #ffffff;
  justify-content: center;

`

const HeaderLogo = s(Logo)`
  height: 60px;
  max-width: 100%;
  display: initial;
  vertical-align: middle;
`

const HeaderLogoText = s.p`
  width: 585px;
  align-items: center;
  margin: auto;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  height: 20px;
  margin-top: -10px;
  text-align: right;
  color: default;
  text-decoration: none;
`

const HeaderLogoWrapper = s.div`
  text-align: center;
`

const ButtonWrapper = s.div`
  position: absolute;
  right: 40px;
  top: 20px;
  display: flex;
  flex-direction: column;
`

const TopButton = s(Button)`
  border-radius: 5px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
`

const NavbarContainer = s.div`
  margin-left: 20px;
  margin-right: 20px;
`

const NavDate = s.div`
  border-right: 2px solid #e7e7e7;
  padding-right: 10px;
`

// TODO: Make mcModal trigger a modal
const Header = () => {
  const [search, setSearch] = useState(false)
  const toggleSearch = () => setSearch(!search)

  return (
    <header>
      <TopRow className="hidden-xs">
        <HeaderLogoWrapper href="/">
          <HeaderLogo />
          <HeaderLogoText>
          Founded in 1885
          </HeaderLogoText>
        </HeaderLogoWrapper>
        <ButtonWrapper>
          <TopButton variant="primary" size="sm">
            NEWSLETTERS
            </TopButton>
          <TopButton variant="inverse" size="sm">
            DONATE
            </TopButton>
        </ButtonWrapper>
      </TopRow>
      <Navbar>
        <NavbarContainer>
          <Navbar.Collapse>
            <NavDate>
              February 8th, 2020
            </NavDate>
            <Dropdown>
              <Dropdown.Toggle>
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </NavbarContainer>
      </Navbar>
  </header>
)
}


export default Header
