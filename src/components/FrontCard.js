import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Logo from '../locale/images/test1.jpg'
import PropTypes from 'prop-types'
import CharacterInfo from '../locale/message/characterInfo'
import ReactCardFlip from 'react-card-flip';


class FrontCard extends React.Component {
      render() {
        return (
          <Card>
            <Card.Img variant="top" src={Logo}/>
          </Card>
        )
      } 
}

export default FrontCard