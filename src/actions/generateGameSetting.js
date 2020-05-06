import gameSetting from "../locale/message/gameSetting";
import { connect } from "react-redux";

export const generateGame = gameSetting => ({
    type: 'GENERATE_GAME_SETTING',
    gameSetting
  })
