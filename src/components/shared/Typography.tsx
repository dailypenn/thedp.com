import { Link } from 'gatsby'
import s from 'styled-components'

import { DP_RED } from '../../styles/colors'

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`

export const StyledAnchorTag = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

export const ArticleHeader = s.h1`
  font-family: neuzeit-grotesk, sans-serif;
  font-size: 36px;
  font-weight: 700;
`

export const CaptionText = s.p`
  font-size: 15px;
  font-style: italic;
  color: #555;
  line-height: 1.5;
`

export const ArticleContent = s.p`
  font-family: 'Lora', 'Georgia', 'Times New Roman', Times, serif;
  font-size: 18px;
  line-height: 175%;

  a {
    color: ${DP_RED} !important;
    text-decoration: none !important;
  }
`