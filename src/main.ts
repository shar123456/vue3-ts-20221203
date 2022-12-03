import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {setUpAntd} from '@/assets/ant-design-vue-config/ant-design-config'
//import './Mock/mockDatas'
import Fragment from 'vue-fragment'

import { jsSeamlessScroll, cssSeamlessScroll,vueSeamless,vueSeamlessScroll  } from "vue-seamless-scroll";
const app=createApp(App);
app.use(cssSeamlessScroll);
app.use(jsSeamlessScroll);
app.use(vueSeamless);
app.use(vueSeamlessScroll);
setUpAntd(app);

app.use(store);
app.use(router);
app.use(Fragment.Plugin)
app.mount('#app')
