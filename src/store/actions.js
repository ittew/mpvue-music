import { MOVIES_ARR, SETPLAYER, UPDATEAUDIOSTATUS } from './mutation-type'
export default {
  getMoviesArr ({commit}, data) {
    commit(MOVIES_ARR, data)
  },
  setPlayer ({commit}, data) {
    commit(SETPLAYER, data)
  },
  updateAudioStatus ({commit}, data) {
    commit(UPDATEAUDIOSTATUS, data)
  }
}
