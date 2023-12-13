import React from 'react'

import './title.scss'

type titleProps = {
  text: string
}

const Title: React.FC<titleProps> = ({ text }) => {
  return <h1 className="title title__position">{text}</h1>
}

export default Title
