import React from 'react'
import Card from 'react-bootstrap/Card'
import ReactCardFlip from 'react-card-flip';
import SeerPic from '../locale/images/Seer.png'
import WitchPic from '../locale/images/Witch.png'
import HunterPic from '../locale/images/Hunter.png'
import VillagerPic from '../locale/images/Villager.png'
import BearPic from '../locale/images/Bear.png'
import TombkeeperPic from '../locale/images/Tombkeeper.png'
import SaviorPic from '../locale/images/Savior.png'
import KnightPic from '../locale/images/Knight.png'
import WerewolvePic from '../locale/images/Werewolve.png'
import WerewolveKingPic from '../locale/images/WereWolveKing.png'
import SnowWolfPic from '../locale/images/SnowWolve.png'
import GargoylePic from '../locale/images/Gargoyle.png'
/*static import should be avoid, instead grabbing data from db*/
import OnePic from '../locale/images/numbers/1.png'
import TwoPic from '../locale/images/numbers/2.png'
import ThreePic from '../locale/images/numbers/3.png'
import FourPic from '../locale/images/numbers/4.png'
import FivePic from '../locale/images/numbers/5.png'
import SixPic from '../locale/images/numbers/6.png'
import SevenPic from '../locale/images/numbers/7.png'
import EightPic from '../locale/images/numbers/8.png'
import NinePic from '../locale/images/numbers/9.png'
import TenPic from '../locale/images/numbers/10.png'
import EleventPic from '../locale/images/numbers/11.png'
import TwelvePic from '../locale/images/numbers/12.png'

var numberPicArr = [
    OnePic, TwoPic, ThreePic, FourPic, FivePic, SixPic, SevenPic, EightPic, NinePic,TenPic,EleventPic,TwelvePic 
]

var charPicMap = {
  'hunter' : HunterPic,
  'witch' : WitchPic,
  'seer' : SeerPic,
  'villager' : VillagerPic,
  'bear' : BearPic,
  'tombkeeper' : TombkeeperPic,
  'savior' : SaviorPic,
  'knight' : KnightPic,
  'werewolve' : WerewolvePic,
  'wereWolveKing' : WerewolveKingPic,
  'snowWolf' : SnowWolfPic,
  'gargoyle' : GargoylePic
}

class CharacterCard extends React.Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state);
      }
      
      
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
     
      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal"
          containerStyle={{display : "center"}}>
            <Card style={{ alignItems: 'left',width: '15rem' }} onClick = {this.handleClick}>
            <Card.Img variant="top" src={numberPicArr[this.props.number]}/>
            
            </Card>
            <Card style={{ alignItems: 'left',width: '15rem' }} onClick = {this.handleClick}>
            <Card.Img variant="top" src={charPicMap[this.props.character.id]}/>
          </Card>
          </ReactCardFlip>
        )
      } 
}

export default CharacterCard