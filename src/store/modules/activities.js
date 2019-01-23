import Vue from 'vue'

const baseURL = 'https://api.douban.com/v2/event/list'
const state = {
  events: [],
  skip: 0,
  eventItem: {}
}
const mutations = {
  getmoreEvent (state, payload) {
    state.skip += 2
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  getmoreEvent ({commit, state}) {
    Vue.http.jsonp(`${baseURL}?loc=108288&start=${state.skip}&count=5`).then(res => {
      commit({
        type: 'getmoreEvent',
        res: res.body.events
      })
    }).catch(error => {
      console.error(error)
    })
  },
  getSingleEvent ({commit, state}, payload) {
    Vue.http.jsonp(`https://api.douban.com/v2/event/${payload.id}`).then(res => {
      commit({
        type: 'getSingleEvent',
        res: res.body
      })
    }).catch(error => {
      console.error(error)
    })
  }

}

export default {
  state,
  mutations,
  actions
}
