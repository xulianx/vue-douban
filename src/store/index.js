import vue from 'vue'
import vuex from 'vuex'
import activities from './modules/activities'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    activities
  }
})
