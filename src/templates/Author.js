import React from 'react'

const Author = ({ pageContext: context }) => {
  const { filteredArticles } = context

  return (
    <h1> This is an author page </h1>
  )
}

export default Author