import { MOVIES_ARR, SETPLAYER, UPDATEAUDIOSTATUS } from './mutation-type'

export default {
  [MOVIES_ARR] (state, data) {
    state.moviesArr = data
    console.log(state)
  },

  [SETPLAYER] (state, data) {
    state.playing = data
  },

  [UPDATEAUDIOSTATUS] (state, data) {
    state.audioStatus = data
    console.log(state.audioStatus)
  }
}
