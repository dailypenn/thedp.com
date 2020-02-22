import React from 'react'
import { Row, Col } from 'react-bootstrap'

interface IMostReadCardProps {
  idx: number
  content: string
}

export const MostReadCard = ({ idx, content }: IMostReadCardProps) => {
  return (
    <Row>
      <Col xs={3} style={{ color: '#AA1E22', fontSize: '36px' }}> {idx} </Col>
      <Col> <p dangerouslySetInnerHTML={{ __html: content }} style={{ fontSize: '80%' }} /> </Col>
    </Row>
  )
}
