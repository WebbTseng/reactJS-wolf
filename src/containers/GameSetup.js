import React, { Component } from 'react';
import GameTypeCard from '../components/GameTypeCard'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {NinePlayer, TenPlayer, EleventPlayer, TwelvePlayer} from '../locale/message/gameSetting'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CharacterCard from '../components/CharacterCard'
import Background from '../locale/images/backgrounds/bg3.jpg'
import {headerStyle} from '../locale/styles/style'


// const gameSetting = {
//     playerNumber : TEN,
//     playMode : WOLFKING,
//     lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
//     villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
//     chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE]
// }

class GameSetup extends Component {  
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    state = {
        ...this.state,
        loading : true
    }
    render() {
        // if (this.props.gameSetting.playerNumber!= undefined){
        //     this.state.loading = false;
        // }
        var lawCamp = [...this.props.gameSetting.lawCamp]
        var deck = this.shuffle(Array.from(Array(this.props.gameSetting.playerNumber).keys()))
        if (lawCamp.length == 5) {
            this.shuffle(lawCamp)
            lawCamp.pop()
        }

        if (this.state.loading){
            return (
                <Jumbotron fluid style={{ 
                    backgroundImage: `url(${Background})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' }}>
            <Container>
                <h1 style={{
                    fontFamily:'Papyrus',
                    fontSize : '70px'
                    }}>Generate Numbers...</h1>
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
                <h1 className="lead" style={headerStyle}>Godness</h1>
                <hr className="my-2" />
                </Container>
                    <CardDeck style={{ display: 'flex', justifyContent: "center", alignItems:"center" }}>
                    {lawCamp.map((Character) => 
                        <CharacterCard character={Character} number = {deck.pop()}></CharacterCard>)}
                    </CardDeck>
                
                </Row>
                <Row>
                <Container>
                <h1 className="lead" style={headerStyle}>Villagers</h1>
                <hr className="my-2" />
                </Container>
            <CardDeck style={{ display: 'flex', justifyContent: "center", alignItems:"center" }}>
                    {this.props.gameSetting.villagerCamp.map((Character) => 
                        <CharacterCard character={Character} number = {deck.pop()}></CharacterCard>)}
                    </CardDeck>
                </Row>
                <Row>
                <Container>
                <h1 className="lead" style={headerStyle}>Wolfs</h1>
                <hr className="my-2" />
                </Container>
            <CardDeck style={{ display: 'flex', justifyContent: "center", alignItems:"center" }}>
                    {this.props.gameSetting.chaoticCamp.map((Character) => 
                        <CharacterCard character={Character} number = {deck.pop()}></CharacterCard>)}
                    </CardDeck>
                </Row>
            </Container>
            </Jumbotron>
            )
        }
        
    } 
  }


  const mapStateToProps = (state, props) => {
    return {
        gameSetting: state.gameSetting[0].game,
      };  
    }
  
//   const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
//   })
  
  export default connect(
    mapStateToProps,
  )(GameSetup)

//   export default DashBoard