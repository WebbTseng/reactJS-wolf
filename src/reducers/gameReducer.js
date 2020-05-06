const gameSetting = (state = [], action) => {
    switch (action.type) {
      case 'GENERATE_GAME_SETTING':
        return [
          {game: action.gameSetting}
        ]
      default:
        return state
    }
  }
  
  export default gameSetting
  