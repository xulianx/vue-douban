import vue from 'vue'
import vuex from 'vuex'
import activities from './modules/activities'
import movie from './modules/movie'
import books from './modules/books'
import subject from './modules/subject'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    activities,
    movie,
    books,
    subject
  }
})
