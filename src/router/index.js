import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/home'
import homeView from '../view/homeView'
import movieView from '../view/movieView'
import bookView from '../view/bookView'
import groupView from '../view/groupView'
import broadcastView from '../view/broadcastView'
import statusView from '../view/statusView'
import DetailView from '../view/DetailView'
import registerView from '../view/registerView'
import loginView from '../view/loginView'
import SubjectView from '../view/SubjectView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/home'
    },
    {
      path: '/pages',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        }, {
          path: 'home',
          name: 'homeView',
          component: homeView
        }, {
          path: 'movie',
          name: 'movieView',
          component: movieView
        }, {
          path: 'broadcast',
          name: 'broadcastView',
          component: broadcastView
        }, {
          path: 'book',
          name: 'bookView',
          component: bookView
        }, {
          path: 'group',
          name: 'groupView',
          component: groupView
        }, {
          path: 'status',
          name: 'statusView',
          component: statusView
        }, {
          path: 'detail',
          name: 'DetailView',
          component: DetailView
        }, {
          path: ':classify/subject/:id',
          name: 'SubjectView',
          component: SubjectView
        }
      ]
    },
    {
      path: '/register',
      name: 'registerView',
      component: registerView
    },
    {
      path: '/login',
      name: 'loginView',
      component: loginView
    }
  ]
})
