import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import UserList from '../components/user/UserList'
import QueueList from '../components/queue/QueueList'
import GameList from '../components/game/GameList'
import HomeView from '@/components/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/',
        name: 'HomeView',
        component: HomeView
      }, {
        path: '/UserList',
        name: 'UserList',
        component: UserList
      }, {
        path: '/QueueList',
        name: 'QueueList',
        component: QueueList
      }, {
        path: '/GameList',
        name: 'GameList',
        component: GameList
      }]
    }
  ]
})
