import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from'@/page/index'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})

