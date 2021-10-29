//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
        //兄弟间通信 需要一个中间人 并且他需要有$on 方法 也就是vuecomponent 或者 vm 实例
        Vue.prototype.$bus = this //安装全局事件总线
	},
})
