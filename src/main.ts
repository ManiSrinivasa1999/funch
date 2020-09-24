import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faTrash,
  faUser,
  faTimes,
  faCheck,
  faUpload,
  faSuitcase,
  faInbox,
  faFile,
  faClock,
  faCaretDown,
  faPaperclip,
  faSortUp,
  faSortDown,
  faChevronRight,
  faChevronLeft,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

library.add(
  faEdit,
  faTrash,
  faUser,
  faTimes,
  faCheck,
  faUpload,
  faSuitcase,
  faInbox,
  faFile,
  faClock,
  faCaretDown,
  faPaperclip,
  faSortUp,
  faSortDown,
  faChevronRight,
  faChevronLeft,
  faPaperPlane,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
