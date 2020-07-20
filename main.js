import Vue from 'vue'
import App from './App'
import commonFuntcion from '@/utils/common-function.js'
import httpConfig from '@/common/http-config.js'
import storageConfig from '@/common/storage-config.js'
import dateUtils from '@/utils/date-utils.js'
Vue.config.productionTip = false

App.mpType = 'app'
/**
 * 全局基调颜色
 */
Vue.prototype.BASECOLOR="#eb8327"
Vue.prototype.HTTPCONFIG=httpConfig

Vue.prototype.COMMONFUNCTION=commonFuntcion
Vue.prototype.STORAGECONFIG=storageConfig
Vue.filter('nullFilter',(value)=>{
	return value?value:''
})
import notify from '@/components/feedback/nofity.vue'
Vue.component('c-notify',notify)

const app = new Vue({
    ...App
})
app.$mount()
