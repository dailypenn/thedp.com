import React, { useState } from "react"
import s from "styled-components"
import { Button, Nav, NavDropdown, Image, Row, Navbar } from "react-bootstrap"
import Logo from '../images/icons/header-logo.svg'
import FBLogo from '../images/icons/facebook.svg'
import InstaLogo from '../images/icons/instagram.svg'
import TwitLogo from '../images/icons/twitter.svg'
import SearchIcon from '../images/icons/search.svg'


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
  font-size: 14px;
`

const HeaderLogoWrapper = s.div`
  text-align: center;
`

const ButtonWrapper1 = s.div`
  position: absolute;
  right: 40px;
  top: 20px;
  display: flex;
  flex-direction: column;
`

const NewsButton = s(Button)`
  border-radius: 5px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px !important;
  padding: 3px 12px !important;
  color: #fff !important;
  background-color: #aa1e22 !important;
  border-color: #941a1e !important;
`

const DonateButton = s(Button)`
  border-radius: 5px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px !important;
  padding: 3px 12px !important;
  color: #aa1e22 !important;
  background-color: #fff !important;
  border-color: #941a1e !important;
  border-width: 2px !important;
`

const HeaderNavbar = s(Navbar)`
  border-top: 1px solid #A9A9A9;
  border-bottom: 1px solid #A9A9A9;
  padding: 0 !important;
  width: 100%;
`

const NavbarContainer = s.div`
  margin-left: 20px;
  margin-right: 20px;
  max-height: 48px;
`

const NavDate = s(Nav.Link)`
  border-right: 2px solid #e7e7e7;
  padding-right: 10px;
  color: black !important;
  font-family: "Heebo", sans-serif;
`

const NavLink = s(Nav.Link)`
  color: black !important;
  font-family: "Heebo", sans-serif;
`

const SocialIcons = s(Nav)`
  margin-left: auto;
  margin-right: 10px;
`

const IconWrapper = s.a`
  padding: 15px;
`

// TODO: Make mcModal trigger a modal
const Header = () => {
  const [search, setSearch] = useState(false)
  const toggleSearch = () => setSearch(!search)

  return (
    <header>
      <TopRow className="hidden-xs">
        <HeaderLogoWrapper>
          <HeaderLogo />
          <HeaderLogoText>
            Founded in 1885
          </HeaderLogoText>
        </HeaderLogoWrapper>
        <ButtonWrapper1>
          <NewsButton variant="primary" size="sm">
            NEWSLETTERS
          </NewsButton>
          <DonateButton variant="inverse" size="sm">
            DONATE
          </DonateButton>
        </ButtonWrapper1>￼
      </TopRow>
      <HeaderNavbar>
        <NavbarContainer>
          <Navbar.Collapse>
            <Nav>
              <Navbar.Brand>
              <IconWrapper>
                <SearchIcon width="16px" />
              </IconWrapper>
              </Navbar.Brand>
              <NavDate>
                February 8th, 2020
              </NavDate>
              <NavLink href="">NEWS</NavLink>
              <NavLink href="">SPORTS</NavLink>
              <NavLink href="">OPINION</NavLink>
              <NavLink href="">PROJECTS</NavLink>
              <NavLink href="">34TH STREET</NavLink>
              <NavLink href="">UNDER THE BUTTON</NavLink>
            </Nav>
          </Navbar.Collapse>
        </NavbarContainer>
        <SocialIcons>
          <IconWrapper>
            <FBLogo width="20px" />
          </IconWrapper>
          <IconWrapper>
            <TwitLogo width="20px" />
          </IconWrapper>
          <IconWrapper>
            <InstaLogo width="20px" />
          </IconWrapper>
        </SocialIcons>
      </HeaderNavbar>
    </header>
  )
}


export default Header
