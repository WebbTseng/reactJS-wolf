import GameTypeInfo, { HUNTER, BEAR, WOLFKING, WOLFKINGWITHPOLICE, NORMAL, FIVEPICKFOUR, TOMBKEEPER} from "./gameTypeInfo"
import * as Characters from "./characterInfo"

let NINE = 9
let TEN = 10
let ELEVENT = 11
let TWELVE = 12 
export const HUNTER_NINE = {
    playerNumber : NINE,
    playMode : HUNTER,
    lawCamp : [Characters.HUNTER, Characters.HUNTER, Characters.HUNTER, Characters.HUNTER,Characters.HUNTER,Characters.HUNTER],
    villagerCamp : [],
    chaoticCamp : [Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const NORMAL_NINE = {
    playerNumber : NINE,
    playMode : NORMAL,
    lawCamp : [Characters.SEER, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER, Characters.VILLAGER, Characters.VILLAGER],
    chaoticCamp : [Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const HUNTER_TEN = {
    playerNumber : TEN,
    playMode : HUNTER,
    lawCamp : [Characters.HUNTER, Characters.HUNTER,Characters.HUNTER, Characters.HUNTER, Characters.HUNTER,Characters.HUNTER,Characters.HUNTER],
    villagerCamp : [],
    chaoticCamp : [Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const BEAR_TEN = {
    playerNumber : TEN,
    playMode : BEAR,
    lawCamp : [Characters.BEAR, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.SNOW_WOLF,Characters.WEREWOLVE]
}

export const WOLFKING_TEN = {
    playerNumber : TEN,
    playMode : WOLFKING,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const FIVEPICKFOUR_TEN = {
    playerNumber : TEN,
    playMode : FIVEPICKFOUR,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH,Characters.SAVIOR, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const TOMBKEEPER_TEN = {
    playerNumber : TEN,
    playMode : TOMBKEEPER,
    lawCamp : [Characters.SEER, Characters.TOMBKEEPER, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.GARGOYLE]
}

export const HUNTER_ELEVENT = {
    playerNumber : ELEVENT,
    playMode : HUNTER,
    lawCamp : [Characters.HUNTER, Characters.HUNTER,Characters.HUNTER, Characters.HUNTER, Characters.HUNTER, Characters.HUNTER,Characters.HUNTER,Characters.HUNTER],
    villagerCamp : [],
    chaoticCamp : [Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const BEAR_ELEVENT = {
    playerNumber : ELEVENT,
    playMode : BEAR,
    lawCamp : [Characters.BEAR, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.SNOW_WOLF,Characters.WEREWOLVE]
}

export const WOLFKING_ELEVENT = {
    playerNumber : ELEVENT,
    playMode : WOLFKING,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const FIVEPICKFOUR_ELEVENT = {
    playerNumber : ELEVENT,
    playMode : FIVEPICKFOUR,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH,Characters.SAVIOR, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const TOMBKEEPER_ELEVENT = {
    playerNumber : ELEVENT,
    playMode : TOMBKEEPER,
    lawCamp : [Characters.SEER, Characters.TOMBKEEPER, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.GARGOYLE]
}

export const HUNTER_TWELVE = {
    playerNumber : TWELVE,
    playMode : HUNTER,
    lawCamp : [Characters.HUNTER, Characters.HUNTER, Characters.HUNTER,Characters.HUNTER, Characters.HUNTER, Characters.HUNTER, Characters.HUNTER,Characters.HUNTER,Characters.HUNTER],
    villagerCamp : [],
    chaoticCamp : [Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const BEAR_TWELVE = {
    playerNumber : TWELVE,
    playMode : BEAR,
    lawCamp : [Characters.BEAR, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.SNOW_WOLF,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const WOLFKING_TWELVE = {
    playerNumber : TWELVE,
    playMode : WOLFKING,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const FIVEPICKFOUR_TWELVE = {
    playerNumber : TWELVE,
    playMode : FIVEPICKFOUR,
    lawCamp : [Characters.SEER, Characters.KNIGHT, Characters.WITCH,Characters.SAVIOR, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.WEREWOLVE]
}

export const TOMBKEEPER_TWELVE = {
    playerNumber : TWELVE,
    playMode : TOMBKEEPER,
    lawCamp : [Characters.SEER, Characters.TOMBKEEPER, Characters.WITCH, Characters.HUNTER],
    villagerCamp : [Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER,Characters.VILLAGER],
    chaoticCamp: [Characters.WEREWOLVE_KING,Characters.WEREWOLVE,Characters.WEREWOLVE,Characters.GARGOYLE]
}



export const NinePlayer = [
    HUNTER_NINE,
    NORMAL_NINE
]

export const TenPlayer = [
    HUNTER_TEN,
    BEAR_TEN,
    WOLFKING_TEN,
    FIVEPICKFOUR_TEN,
    TOMBKEEPER_TEN
]

export const EleventPlayer = [
    HUNTER_ELEVENT,
    BEAR_ELEVENT,
    WOLFKING_ELEVENT,
    FIVEPICKFOUR_ELEVENT,
    TOMBKEEPER_ELEVENT
]

export const TwelvePlayer = [
    HUNTER_TWELVE,
    BEAR_TWELVE,
    WOLFKING_TWELVE,
    FIVEPICKFOUR_TWELVE,
    TOMBKEEPER_TWELVE
]

export default {
    NinePlayer,
    TenPlayer,
    EleventPlayer,
    TwelvePlayer
}