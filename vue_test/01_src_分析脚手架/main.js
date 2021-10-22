/*
	该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue/dist/vue.js'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

/*
	关于不同版本的Vue：

		1.vue.js与vue.runtime.xxx.js的区别：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。import Vue from 'vue/dist/vue.js'
				(2).vue.runtime.esm.js是运行版的Vue，只包含：核心功能；没有模板解析器。
                (3). esm es6 module  如果用es6 模块化 引入这个(默认)
		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template template:`<app></app>`,配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/

//创建Vue实例对象---vm
new Vue({
	el:'#app',
    //render 完整写法  createElement是函数
    // render(createElement){
	//     const element= createElement("h1","hello");
	//     return element;
    // }

    //精简版写法 没有用到this 直接写成箭头函数
    //render:(createElement)=>createElement("h1","hello")

    //render函数完成了这个功能：将App组件放入容器中
    // render:h=> h('h1','你好啊')  app标签里面没有内容只需要一个参数
    render: h => h(App),


    //以下写法需要template 编译器 需要完整引入vue.js
	// template:`<h1>你好啊</h1>`,
	// components:{App},
})
