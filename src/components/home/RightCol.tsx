import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
import s from 'styled-components'

import { IMostReadArticle } from '../../types'
import { MostReadCard } from '../shared'

const SubHeader = s.h3`
  color: #aa1e22;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.0;
  margin: 0.5em 0;
`

interface IRightColProps {
  mostReadDP: IMostReadArticle[]
}

const RightCol = ({ mostReadDP }: IRightColProps): React.ReactElement => (
  <Col xs={3} style={{ borderLeft: '1px solid #EBEBEB' }}>
    <SubHeader style={{ color: '#AA1E22' }}> MOST READ </SubHeader>
    <Card>
      <ListGroup>
        {mostReadDP.map((article, idx) => (
            <ListGroup.Item>
              <MostReadCard idx={idx + 1} content={article.ogTitle} />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
    <SubHeader style={{ color: '#AA1E22' }}> PODCASTS </SubHeader>
    <SubHeader style={{ color: '#AA1E22' }}> PRINT ISSUES </SubHeader>
  </Col>
)

export default RightCol
