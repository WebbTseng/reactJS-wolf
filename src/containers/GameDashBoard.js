import React, { Component } from 'react';
import GameTypeCard from '../components/GameTypeCard'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {NinePlayer, TenPlayer, EleventPlayer, TwelvePlayer} from '../locale/message/gameSetting'
import {headerStyle} from '../locale/styles/style'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { generateGame } from '../actions/generateGameSetting'
import Background from '../locale/images/backgrounds/bg9.jpg'

class DashBoard extends Component {  
    state = { 
        redirectToGame: null 
    };

    render() {
       
        if (this.state.redirectToGame) {
            return <Redirect push to={{
                pathname: '/game',
            }}/>
        }
        return (
            <Jumbotron fluid style={{ 
                backgroundImage: `url(${Background})`, 
                backgroundSize: 'auto', 
                backgroundPosition: 'center' }}>
            <Container >
                <h1 style={{
                    fontFamily:'Papyrus',
                    fontSize : '70px'
                    }}>Werewolves of Miller's Hollow</h1>
                <p style={{
                    fontFamily:'Papyrus',
                    fontSize : '25px',
                    color : '#ccccc'
                    }}className="lead">Werewolves of Miller's Hollow is a game that takes place in a small village which is haunted by werewolves. Each player is secretly assigned a role - Werewolf, Ordinary Townsfolk, or special character such as The Sheriff, The Hunter, the Witch, the Little Girl, The Fortune Teller and so on...</p>
                <hr className="my-2" />
            </Container>
        <Container style = {{paddingLeft : '100px'}}>
            <Row>
            <Container>
                <h1 className="m1" display= 'inline'
                style={headerStyle} >Nine People Game</h1>
            </Container>
            <CardDeck display="block">
                {NinePlayer.map((gameMode) => 
                    <GameTypeCard variant="Dark" gameSetting={gameMode}></GameTypeCard>)}
            </CardDeck>
            </Row>
            <Row>
            <Container>
                <h1 className="lead" style={headerStyle} display= 'block'>Ten People Game</h1>
                <hr className="my-2"/>
            </Container>
                <CardDeck>
                {TenPlayer.map((gameMode) => 
                    <GameTypeCard variant="Dark" gameSetting={gameMode}></GameTypeCard>)}
                </CardDeck>
            </Row>
            <Row>
            <Container>
                <h1 className="lead" style={headerStyle} display= 'block'>Elevent People Game</h1>
                <hr className="my-2" />
            </Container>
                <CardDeck>
                {EleventPlayer.map((gameMode) => 
                    <GameTypeCard variant="Dark" gameSetting={gameMode}></GameTypeCard>)}
                </CardDeck>
            </Row>
            <Row>
            <Container>
                <h1 className="lead" style={headerStyle} display= 'block'>Twelve People Game</h1>
                <hr className="my-2"/>
            </Container>
                <CardDeck>
                {TwelvePlayer.map((gameMode) => 
                    <GameTypeCard variant="Dark" gameSetting={gameMode}></GameTypeCard>)}
                </CardDeck>
            </Row>
        </Container>
        </Jumbotron>
        )
    } 
  }

  const mapStateToProps = (state, props) => {
      return {
          gameSetting: state.gameSetting
      }
  }

  const mapDispatchToProps = (dispatch, props) => ({
    redirectToGenerateGame: () => dispatch(generateGame(props.gameSetting))
  })

  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(DashBoard)

//   export default DashBoard