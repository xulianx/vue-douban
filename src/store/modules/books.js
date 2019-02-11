import Vue from 'vue'

const state = {
  fictionalBooks: [],
  NonfictionalBooks: [],
  doubanBooks: [],
  bookTags: [
    {
      title: '不可饶恕的女人们',
      href: 'https://m.douban.com/doulist/35573',
      color: '#42BD56'
    },
    {
      title: '爱欲书',
      href: 'https://m.douban.com/doulist/38088147',
      color: '#FF4055'
    },
    {
      title: '他们还写侦探小说',
      href: 'https://m.douban.com/doulist/645579',
      color: '#4F9DED'
    },
    {
      line: true
    },
    {
      title: '人生识字始忧患',
      href: 'https://m.douban.com/doulist/192653',
      color: '#CC3344'
    },
    {
      title: '詩歌書店',
      href: 'https://m.douban.com/doulist/89925',
      color: '#FFAC2D'
    },
    {
      title: '尝试理解人类变化无常不可测心理相关小荐',
      href: 'https://m.douban.com/doulist/45361809',
      color: '#3BA94D'
    }
  ]
}

const mutations = {
  getBooks (state, payload) {
    switch (payload.tag) {
      case 'fictionalBooks':
        state.fictionalBooks = payload.res
        break
      case 'NonfictionalBooks':
        state.NonfictionalBooks = payload.res
        break
      case 'doubanBooks':
        state.doubanBooks = payload.res
        break
    }
  }
}

const actions = {
  getBooks ({ commit }) {
    Vue.http.jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8').then(res => {
      commit({
        type: 'getBooks',
        tag: 'fictionalBooks',
        res: res.body.books
      })
    }).catch(error => {
      console.error(error)
    })

    Vue.http.jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=8').then(res => {
      commit({
        type: 'getBooks',
        tag: 'NonfictionalBooks',
        res: res.body.books
      })
    }).catch(error => {
      console.error(error)
    })

    Vue.http.jsonp('https://api.douban.com/v2/book/search?q=旅行&count=8').then(res => {
      commit({
        type: 'getBooks',
        tag: 'doubanBooks',
        res: res.body.books
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
