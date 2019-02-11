import Vue from 'vue'

const state = {

}

const mutations = {
  getDetails (state, payload) {
    if (payload.classfiy === 'movie') {
      console.log(payload.res)
    } else {
      console.log(payload.res)
    }
  }
}

const actions = {
  getMoviesDetail ({ commit }, payload) {
    switch (payload.classfiy) {
      case 'book':
        Vue.http.jsonp('https://api.douban.com/v2/' + payload.classfiy +
          '/' + payload.id)
          .then(res => {
            commit({
              type: 'getDetails',
              classify: payload.classify,
              res: res.body
            })
          })
        break
      case 'movie':
        Vue.http.jsonp('https://api.douban.com/v2/' + payload.classfiy +
          '/subject/' + payload.id).then(res => {
            commit({
              type: 'getDetails',
              classfiy: payload.classfiy,
              res: res.body
            })
          }).catch(error => {
            console.error(error)
          })
        break
    }
  }
}

export default {
  actions,
  state,
  mutations
}
