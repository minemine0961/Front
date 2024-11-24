import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import MainView from '../views/MainView.vue';
import NewPostView from '../views/NewPostView.vue';
import VisitingPostView from '../views/VisitingPostView.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/api/v1/user', name: 'SignUp', component: SignUpView },
  { path: '/posts', name: 'Main', component: MainView },
  { path: '/posts/create', name: 'NewPost', component: NewPostView },
  { path: '/posts/:id', name: 'Visiting', component: VisitingPostView },
  {
    path: '/posts/:id/update',
    name: 'EditPost',
    component: NewPostView,
    props: true, // 수정 모드에서 데이터를 전달
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
