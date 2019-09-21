import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'login',
		// redirect: '/login',
		component: (resolve) => require(['@/components/login/login'], resolve)
    },
    {
		path: '/user',
		name: 'contents',
		redirect: '/user/admin',
		// 你也可以在顶级路由就配置命名视图
		component: (resolve) => require(['@/components/contents'], resolve),
		children: [
			{
				path: '/user/admin',
				name: 'admin',
				components: {
					default: (resolve) => require(['@/components/user/admin'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}, {
				path: '/user/user',
				name: 'user',
				components: {
					default: (resolve) => require(['@/components/user/user'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}
		]
	},
    {
		path: '/car',
		name: 'car',
		redirect: '/car/cars',
		// 你也可以在顶级路由就配置命名视图
		component: (resolve) => require(['@/components/contents'], resolve),
		children: [
			{
				path: '/car/cars',
				name: 'cars',
				components: {
					default: (resolve) => require(['@/components/car/cars'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}, {
				path: '/car/carSite',
				name: 'carSite',
				components: {
					default: (resolve) => require(['@/components/car/carSite'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}
		]
	},
    {
		path: '/record',
		name: 'record',
		redirect: '/record/userRecord',
		// 你也可以在顶级路由就配置命名视图
		component: (resolve) => require(['@/components/contents'], resolve),
		children: [
			{
				path: '/record/usageLog',
				name: 'usageLog',
				components: {
					default: (resolve) => require(['@/components/record/usageLog'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}, {
				path: '/record/userRecord',
				name: 'userRecord',
				components: {
					default: (resolve) => require(['@/components/record/userRecord'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}, {
				path: '/record/faultRecord',
				name: 'faultRecord',
				components: {
					default: (resolve) => require(['@/components/record/faultRecord'], resolve),
					navs:(resolve) => require(['@/components/navs'], resolve),
					breadcrumb: (resolve) => require(['@/components/breadcrumb'], resolve)
				}
			}
		]
	}
  ]
})
