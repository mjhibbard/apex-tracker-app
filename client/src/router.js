import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Profile from './components/Profile.vue';
import CSSearch from './components/CSSearch';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/profile/:platform/:gamertag',
      name: 'profile',
      component: Profile
    },
    {
      path: '/csgo',
      name: 'csgo search',
      component: CSSearch
    }
  ]
});
