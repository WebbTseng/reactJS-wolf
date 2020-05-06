import React from 'react'
import Card from 'react-bootstrap/Card'
import Logo from '../locale/images/backgrounds/bg2.png'
import { connect, useDispatch } from 'react-redux'
import { generateGame } from '../actions/generateGameSetting'
import * as GameTypeInfo from '../locale/message/gameTypeInfo'
import { withRouter, Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
const GameTypeCard = ({ dispatch, onClick, variant, gameSetting }) => {
  const redirect = () => {
    dispatch(generateGame(gameSetting));
    return <Redirect push to="/game"/>
  }
  return(
    <div>
    <Card border="dark" style={{ width: '18rem' }} className="m-3 text-center"
      bg={variant.toLowerCase()}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '15rem' }}
      >
      <Card.Img variant="top" src={Logo} />

        <Card.Header
        style={{ fontFamily: 'BiauKai' }}><Link onClick={redirect} to="/game" className="btn btn-dark">{gameSetting.playMode.title}</Link></Card.Header>
    </Card>
    </div>
  )
}


export default withRouter(connect()(GameTypeCard))
