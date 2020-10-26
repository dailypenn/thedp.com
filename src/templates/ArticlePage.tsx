import React from 'react'
export default ({ pageContext: context }) => {
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