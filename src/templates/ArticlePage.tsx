import React from 'react'

interface IArticleProps {
  pageContext: {
    slug: String
    headline: String
    content: String
  }
}

export default ({ pageContext: context } : IArticleProps) => {
    const {
        slug,
        headline,
        content
      } = context
    return <>
      <h1>{headline}</h1>
      <h2>Id: {slug}</h2>
      <p>{content}</p>
    </>
}