import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from '../views/pk/PKIndexView.vue'
import NotFound from '../views/error/NotFound.vue'
import RankListIndexView from '../views/ranklist/RankListIndexView.vue'
import UserBotIndexView from '../views/userbot/UserBotIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'

const routes = [
  {
    // 根页面重定向到对战页面
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PKIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/404/",
    name: "not_found_index",
    component: NotFound,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RankListIndexView,
  },
  {
    path: "/userbot/",
    name: "userbot_index",
    component: UserBotIndexView,
  },
  {
    path: "/:catchAll(.*)" , // 匹配到任意字符
    redirect: "/404/"
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
