import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/activity/detail',
  name: 'ActivityDetail',
  meta: {title: '活动详情'},
  component: () => import('@/pages/activity/detail')
}, {
  path: '/activity/fill',
  name: 'ActivityFill',
  meta: {title: '资料填写'},
  component: () => import('@/pages/activity/information')
}, {
  path: '*',
  name: 'page404',
  meta: {title: '页面丢失'},
  component: () => import('@/pages/not-found/page404')
}]

const router = new Router({
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.meta && to.meta.title) {
    document.title = ((to.meta && to.meta.title))
  }
  next()
})

export default router
